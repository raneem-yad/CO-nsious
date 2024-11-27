release: python manage.py makemigrations && python manage.py migrate
web: gunicorn backend.conscious_backend.wsgi