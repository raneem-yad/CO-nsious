"""
Django settings for conscious_backend project.

Generated by 'django-admin startproject' using Django 4.2.16.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/4.2/ref/settings/
"""

from pathlib import Path
import os

import dj_database_url

if os.path.exists("env.py"):
    import env

from django.conf.global_settings import ALLOWED_HOSTS

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

# auth-token configurations
REST_FRAMEWORK = {
    # "DEFAULT_AUTHENTICATION_CLASSES": [
    #     (
    #         "rest_framework.authentication.SessionAuthentication"
    #         if "DEVELOPMENT" in os.environ
    #         else "dj_rest_auth.jwt_auth.JWTCookieAuthentication"
    #     )
    # ],
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.TokenAuthentication',
    ],
    "DEFAULT_PAGINATION_CLASS": "rest_framework.pagination.PageNumberPagination",
    "PAGE_SIZE": 6,
    "DATETIME_FORMAT": "%d %b %Y",
}
if "DEVELOPMENT" not in os.environ:
    REST_FRAMEWORK["DEFAULT_RENDERER_CLASSES"] = [
        "rest_framework.renderers.JSONRenderer",
    ]
REST_USE_JWT = True
JWT_AUTH_SECURE = True
JWT_AUTH_COOKIE = "my-app-auth"
JWT_AUTH_REFRESH_COOKIE = "my-refresh-token"
JWT_AUTH_SAMESITE = "None"

REST_AUTH_SERIALIZERS = {
    'USER_DETAILS_SERIALIZER': 'conscious_backend.serializers.CurrentUserSerializer'
}

# all auth settings (Account Setup)
ACCOUNT_AUTHENTICATION_METHOD = "username"
ACCOUNT_EMAIL_REQUIRED = False
# ACCOUNT_USERNAME_REQUIRED = False
ACCOUNT_EMAIL_VERIFICATION = "none"
# ACCOUNT_USER_MODEL_USERNAME_FIELD = None  # Set if you don't want a username field
ACCOUNT_UNIQUE_USERNAME = True
ACCOUNT_USERNAME_MIN_LENGTH = 4
LOGIN_URL = "/accounts/login/"
LOGIN_REDIRECT_URL = "/"
LOGOUT_REDIRECT_URL = "/"

CORS_ORIGIN_WHITELIST = [
    "http://localhost:3000",
]

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.2/howto/deployment/checklist/


SECRET_KEY = os.environ.get("SECRET_KEY")

# SECURITY WARNING: don't run with debug turned on in production!
# DEBUG = "DEVELOPMENT" in os.environ
DEBUG = False

if DEBUG:
    # MIDDLEWARE.append('corsheaders.middleware.CorsMiddleware')
    # MIDDLEWARE.remove('django.middleware.csrf.CsrfViewMiddleware')
    # INSTALLED_APPS.append('corsheaders')
    CORS_ORIGIN_ALLOW_ALL = True
    CORS_ALLOW_CREDENTIALS = False
    # ALLOWED_HOSTS.append("127.0.0.1")
    # ALLOWED_HOSTS.append("localhost")
    # os.environ['OAUTHLIB_INSECURE_TRANSPORT'] = '1'
    ALLOWED_HOSTS.append("*")

ALLOWED_HOSTS = [
    os.environ.get("ALLOWED_HOST"),
    "8000-raneemyad-consious-1jz6b24l9te.ws.codeinstitute-ide.net",
    "localhost",
    "127.0.0.1",
    ".herokuapp.com",
    "*.herokuapp.com",
]
CSRF_TRUSTED_ORIGINS = [
    'https://8000-raneemyad-consious-1jz6b24l9te.ws.codeinstitute-ide.net',
]

# Application definition

INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    'drf_yasg',
    'corsheaders',

    # Third-party apps
    'rest_framework',
    'rest_framework.authtoken',  # Required for token authentication
    'allauth',
    'allauth.account',
    'allauth.socialaccount',  # Optional, for social authentication
    'dj_rest_auth',

    "django.contrib.sites",
    "dj_rest_auth.registration",

    'co2measures',
    'action',
    'employeeprofile',
    'motivation',
]

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
    'corsheaders.middleware.CorsMiddleware',
    'allauth.account.middleware.AccountMiddleware'
]

if DEBUG:
    MIDDLEWARE.append('corsheaders.middleware.CorsMiddleware')
    MIDDLEWARE.remove('django.middleware.csrf.CsrfViewMiddleware')
    # INSTALLED_APPS.append('corsheaders')
    CORS_ORIGIN_ALLOW_ALL = True
    CORS_ALLOW_CREDENTIALS = False
    ALLOWED_HOSTS.append("127.0.0.1")
    ALLOWED_HOSTS.append("localhost")
    os.environ['OAUTHLIB_INSECURE_TRANSPORT'] = '1'
    ALLOWED_HOSTS.append("*")
    ALLOWED_HOSTS.append(os.environ.get("ALLOWED_HOST"))

ALLOWED_HOSTS.append(".herokuapp.com")
ALLOWED_HOSTS.append("*.herokuapp.com")

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    "django.middleware.security.SecurityMiddleware",
    'whitenoise.middleware.WhiteNoiseMiddleware',
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
    'allauth.account.middleware.AccountMiddleware'
]

ROOT_URLCONF = "conscious_backend.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        'DIRS': [os.path.join(BASE_DIR,'static'),],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "conscious_backend.wsgi.application"
SITE_ID = 1

CSRF_TRUSTED_ORIGINS = [
    "https://*.herokuapp.com",
    "https://*.gitpod.io",
    "http://192.168.0.108/:3000",
    "http://127.0.0.1:8000/",
    "http://localhost:3000",
    "http://localhost:8000",
]
# CSRF_TRUSTED_ORIGINS = ["http://" + host for host in ALLOWED_HOSTS]

if "CLIENT_ORIGIN" in os.environ:
    CORS_ALLOWED_ORIGINS = [os.environ.get("CLIENT_ORIGIN")]

else:
    CORS_ALLOWED_ORIGIN_REGEXES = [
        r"^https://.*\.gitpod\.io$",
    ]

if "CLIENT_ORIGIN_DEV" in os.environ:
    CORS_ALLOWED_ORIGINS = [
        os.environ.get("CLIENT_ORIGIN_DEV"),
        os.environ.get("CLIENT_ORIGIN"),
    ]

CORS_ALLOW_CREDENTIALS = True

# Database
# https://docs.djangoproject.com/en/4.2/ref/settings/#databases

# DATABASES = {
#     "default": {
#         "ENGINE": "django.db.backends.sqlite3",
#         "NAME": BASE_DIR / "db.sqlite3",
#     }
# }
DATABASES = {"default": dj_database_url.parse(os.environ.get("DATABASE_URL"))}

# Password validation
# https://docs.djangoproject.com/en/4.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]

# Internationalization
# https://docs.djangoproject.com/en/4.2/topics/i18n/

LANGUAGE_CODE = "en-us"

TIME_ZONE = "UTC"

USE_I18N = True

USE_TZ = True

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.2/howto/static-files/

STATIC_URL = "static/"
# STATICFILES_DIRS = [
#     os.path.join(BASE_DIR, "static"),
# ]
# STATIC_ROOT = os.path.join(BASE_DIR, "staticfiles")
#
# STATIC_URL = "/static/"
# STATIC_ROOT = [os.path.join(BASE_DIR, 'static')]
STATICFILES_DIRS = [os.path.join(BASE_DIR, 'static')]
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')



# Default primary key field type
# https://docs.djangoproject.com/en/4.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

# openAI API key
OPENAI_API_KEY = os.environ.get("OPENAI_API_KEY")
