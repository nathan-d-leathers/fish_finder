# import requests
# import shutil
import json


with open('fish_list.json') as f:
    fish_data = json.load(f)

for fish in fish_data:
    updated_link = fish['fish_pic'].replace("https://new.igfa.org/SpeciesID_Images/", "/static/fishdb/")
    fish['fish_pic'] = updated_link

    # res = requests.get(fish['fish_pic'], stream = True)
    # file_name = fish['fish_pic'].replace('https://new.igfa.org/SpeciesID_Images/', '')
    # if res.status_code == 200:
    #     with open(file_name,'wb') as f:
    #         shutil.copyfileobj(res.raw, f)
    #     print('Image sucessfully Downloaded: ',file_name)
    # else:
    #     print('Image Couldn\'t be retrieved')

