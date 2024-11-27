release: cd backend && python manage.py makemigrations && python manage.py migrate
web: cd backend && gunicorn conscious_backend.wsgi
build: cd backend && pip3 install -r requirements.txt