# ZAA-cookbook
## [Skillfactory](https://skillfactory.ru) F4.6. Практическая работа - Книга с рецептами

<H2>Быстрый старт</H2>

Инструция составлена для операционной системы Windows.<br>

<H3>Backend</H3>

Клонируем проект в заранее созданную директорию SimpleChat_proj
```bash
git clone https://github.com/ZakharovAlexA/ZAA-cookbook.git
```

Из директории SimpleChat_proj запускаем и настраиваем виртуальное окружение проекта
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
И вставляем его в .\SimpleChat\settings.py
```python
SECRET_KEY = ''
```
Запускаем сервер
```bash
python manage.py runserver
```
