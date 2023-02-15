import requests
from bs4 import BeautifulSoup
import json


def get_coord(adress):
    url = 'https://geocode-maps.yandex.ru/1.x'
    params = dict()
    params['geocode'] = adress
    params['apikey'] = key
    params['format'] = 'json'
    response = requests.get(url, params=params)
    data = json.loads(response.content)
    return data["response"]["GeoObjectCollection"]["featureMember"][0]["GeoObject"]["Point"]["pos"]


def main_help():
    print('ok_help')
    result = []
    url = 'https://onf.ru/kontakty/'
    soup = BeautifulSoup(requests.get(url).text, features="html.parser")

    elems = soup.find('div',
                      class_='view-content-inner').find_all('p')

    elems = list(map(lambda x: x.text, elems))

    elems = list(filter(lambda x: 'г.' in x, elems))
    for i in elems:
        adress = ' '.join(i.splitlines()[:-1])
        if 'Донецк' in adress:
            adress = ' '.join(adress.split()[:-1])
        city = adress.split('г.')[1].split(',')[0].split()[0].strip()
        title = f'Общероссийский народный фронт города {city}'
        dolgota, shirata = map(float, get_coord(adress).split())
        result.append({
            'title': title,
            'adres': adress,
            'longitude': dolgota,
            'latitude': shirata,
            'category': 2
        })

    with open('result_help.json', 'w', encoding='utf8') as file:
        json.dump(result, file, ensure_ascii=False)


if __name__ == '__main__':
    main_help()