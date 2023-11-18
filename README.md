# ZAA-cookbook
## [Skillfactory](https://skillfactory.ru) F4.6. Практическая работа - Книга с рецептами

<H2>Быстрый старт</H2>

Инструция составлена для операционной системы Windows.<br>

Клонируем проект в заранее созданную директорию ZAA-cookbook
```bash
git clone https://github.com/ZakharovAlexA/ZAA-cookbook.git
```
<H3>Backend</H3>

Из директории cookbook_backend запускаем и настраиваем виртуальное окружение проекта
```bash
python -m venv venv
venv\scripts\activate
cd .\cookbook_backend\ 
pip install -r requirements.txt
```

Генерируем Django secret-key
```bash
python -c 'from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())'
```
И вставляем его в .\cookbook_backend\cookbook_backend\settings.py
```python
SECRET_KEY = ''
```
Запускаем сервер
```bash
python manage.py runserver
```

На сервере доступны:

<ul>
      автодокументация OpenAPI+Swagger
    <br>
  <li>http://localhost:8000/api/schema/</li> 
  <li>http://localhost:8000/api/docs/</li>
   <br>
     API
   <br>
  <li>http://localhost:8000/api/categories - список Категорий блюд</li>
  <li>http://localhost:8000/api/dishes - список Блюд</li>
  <li>http://localhost:8000/api/dish/id - данные из рецепта с номером id</li>
  <li>http://localhost:8000/api/dishes_in/?category=id - список рецептов в Категории</li>
</ul>
<br>

<H3>Frontend</H3>

В директории cookbook_frontend запускаем
```bash
npm i
```
Запускаем сервер
```bash
npm start
```
На сервере доступен по ссылке:

http://localhost:3000/

Пройдя по ссылкам с домашней странице, можно получить список рецептов блюд в выбранной Категории и затем пройти на страницу любого блюда из этого списка. 

<br>

:arrow_up: [в начало](README.md#ZAA-cookbook)
