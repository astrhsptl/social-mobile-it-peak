import requests
import json
from bs4 import BeautifulSoup
from fake_useragent import FakeUserAgent


def get_coord(adress):
    url = 'https://geocode-maps.yandex.ru/1.x'
    params = dict()
    params['geocode'] = adress
    params['apikey'] = '40d1649f-0493-4b70-98ba-98533de7710b'
    params['format'] = 'json'
    response = requests.get(url, params=params)
    data = json.loads(response.content)
    try:
        return data["response"]["GeoObjectCollection"]["featureMember"][0]["GeoObject"]["Point"]["pos"]
    except Exception:
        return None, None


def main_obshyagi():
    print('ok_obshagi')
    result = []
    url = 'https://www.orgpage.ru/rossiya/tsentry-vremennogo-razmescheniya/'
    ua = FakeUserAgent()
    user_agent = ua.chrome
    response = requests.get(url, headers={'User-Agent': f"{user_agent}"})
    soup = BeautifulSoup(response.content, features='html.parser').find_all('div', class_='object-item similar-item')
    for i in soup:
        title = i.find('div', class_='similar-item__title').text[4:].strip()
        adres = i.find('div', class_='similar-item__adrss-item').text.strip()
        dolgota, shirata = map(float, get_coord(adres).split())
        result.append({
            'title': title,
            'adres': adres,
            'longitude': dolgota,
            'latitude': shirata,
            'category': 3
        })

    with open('result_obshagi.json', 'w', encoding='utf8') as file:
        json.dump(result, file, ensure_ascii=False)


if __name__ == '__main__':
    main_obshyagi()