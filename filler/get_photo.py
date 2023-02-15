import requests


def photo(longitude, latitude, filename):
    url = 'https://static-maps.yandex.ru/1.x/?'
    params = dict()
    params['l'] = 'sat'
    params['ll'] = f'{longitude},{latitude}'
    params['pt'] = f'{longitude},{latitude},org'
    result = requests.get(url, params=params)
    with open(filename, 'wb') as file:
        file.write(result.content)


if __name__ == '__main__':
    photo(39.616611, 52.575575, 'result.jpg')