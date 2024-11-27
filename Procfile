release: python manage.py makemigrations && python manage.py migrate
web: cd backend && gunicorn conscious_backend.wsgi