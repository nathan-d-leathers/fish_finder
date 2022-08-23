import requests, json, re
from bs4 import BeautifulSoup
from unidecode import unidecode
from difflib import SequenceMatcher
import time
import pprint
pp = pprint.PrettyPrinter(indent=2, depth=5)


count = 0
the_list = []

# # Starting Page
URL = "https://igfa.org/game-fish-database/"
page = requests.get(URL)
# # soup = BeautifulSoup(page.content, "html.parser")
soup = BeautifulSoup(page.content, "html.parser")

categories = soup.main.find_all('a')

adj_url = "https://igfa.org"

prev_url = ''
for index, cat in enumerate(categories):
  
  if '?search_type=SpeciesID&search_term' in cat.get('href'):
    if count != 0 and count % 50 == 0:
      time.sleep(30)
    cat_url = cat.get('href')
    full_url = adj_url + cat_url
    if full_url == prev_url:
      continue
    else:
      prev_url = full_url

      print(full_url)

      fish_page = requests.get(full_url)
      soup = BeautifulSoup(fish_page.content, "html.parser")
      main_tag = soup.main.main
      divisions = main_tag.find_all('div')
      spans = main_tag.find_all('span')
      name = spans[1].string
      latin_name = spans[2].string
      fish_docs = unidecode(divisions[11].get_text()).replace('\n', '<br>').replace('\r', '<br>').replace('\"', "'").replace('\t', '').strip()
      fish_pic = main_tag.contents[3].img.get('src').replace("https://new.igfa.org/SpeciesID_Images/", "/static/fishdb/")
      fish_record = main_tag.contents[5].h5.string
        
      count += 1
      
      the_list.append({
        "model": "fish_finder_app.FishDB",
        "pk": count,
        "fields": {
          'name': name,
          'latin_name': latin_name,
          'fish_record': fish_record,
          'fish_docs': fish_docs,
          'fish_pic': fish_pic
        }
      })
      
      print(count)

json_object = json.dumps(the_list, indent=2)

with open('fish_list.json', 'w') as file:
  file.write(json_object)
