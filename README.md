# Getting up and running : Quick Notes
-Create database on your machine "fish_finder"

-Create your own venv

-Activate your venv and then $ pip install -r requirements.txt  (Make sure to put path to file if terminal is not in that folder)

-Inside the first fish_finder_project folder, next to the manage.py create a .env file

-Inside that file line 1: env=dev 

-Line 2: django_secret_key='Replace me with real key'

-With terminal in that root folder where you can see manage.py run $python manage.py makemigrations fish_finder_app

-Run $ python manage.py migrate

-Set your terminal to fish_finder_frontend so you can see package.json

-Run $ npm install

-Run $ npm run watch

-Back in terminal in folder that manage.py run $ python manage.py runserver

-If all went right you should be able to open localhost:8000 and see the homepage




Nathans Map Notes:

-