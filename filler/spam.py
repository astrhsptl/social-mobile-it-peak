import os
import json
import requests

from get_photo import photo

def preprocenssing_roma(input_dict):
    data = dict(**input_dict)
    data['address'] = input_dict['adres']
    data.pop('adres')
    return data

f = open('/home/nia/Desktop/social-mobile-it-peak/filler/result_ppb.json', 'r')
  
data = json.load(f)
sended_data = {}

for i in data[10::]:
    sended_data = preprocenssing_roma(i)

    photo(sended_data['longitude'], sended_data['latitude'], '/home/nia/Desktop/social-mobile-it-peak/filler/temporary/sa.jpg')

    string_img = open('/home/nia/Desktop/social-mobile-it-peak/filler/temporary/sa.jpg', 'rb')

    req = requests.post('http://alexander.kizimenko.fvds.ru/api/v1/docs/points/', 
                        data=sended_data, files={'image': string_img})
    os.remove('/home/nia/Desktop/social-mobile-it-peak/filler/temporary/sa.jpg')

    string_img.close()


f.close()