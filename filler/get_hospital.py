import requests
from bs4 import BeautifulSoup
import json
from fake_useragent import UserAgent


def get_coord(adress):
    url = 'https://geocode-maps.yandex.ru/1.x'
    params = dict()
    params['geocode'] = adress
    params['apikey'] = '40d1649f-0493-4b70-98ba-98533de7710b'
    params['format'] = 'json'
    response = requests.get(url, params=params)
    data = json.loads(response.content)
    return data["response"]["GeoObjectCollection"]["featureMember"][0]["GeoObject"]["Point"]["pos"]


def update_result(args):
    result = []
    for i in args:
        title = i.find('div', class_='similar-item__title').text[4:].strip()
        adress = i.find('div', class_='similar-item__adrss-item').text.strip()
        dolgota, shirata = map(float, get_coord(adress).split())
        result.append({
            'title': title,
            'adres': adress,
            'longitude': dolgota,
            'latitude': shirata,
            'category': 1
        })
    return result


def main_hospital():
    print('ok_gospital')
    result = []
    url = 'https://www.orgpage.ru/rossiya/госпитали/'
    ua = UserAgent()
    user_agent = ua.chrome

    response = requests.get(url, headers={
        "User-Agent": f"{user_agent}"
    })
    soup = BeautifulSoup(response.content, features="html.parser").find_all('div', class_='object-item similar-item')

    result += update_result(soup)

    for i in range(2, 11):
        new_url = f'{url}{i}'
        response = requests.get(new_url, headers={
            "User-Agent": f"{user_agent}"
        })
        soup = BeautifulSoup(response.content, features="html.parser").find_all('div',
                                                                                class_='object-item similar-item')
        result += update_result(soup)

    with open('result_hospital.json', 'w', encoding='utf8') as file:
        json.dump(result, file, ensure_ascii=False)


if __name__ == '__main__':
    main_hospital()