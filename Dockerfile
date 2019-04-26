############################################################
# Dockerfile to build Flask App
# Based on
############################################################

# Set the base image
FROM debian:latest

# File Author / Maintainer
MAINTAINER Bruno Leal

RUN apt-get update && apt-get install -y apache2 \
    libapache2-mod-wsgi \
    build-essential \
    python \
    python-dev\
    python-pip \
    vim \
 && apt-get clean \
 && apt-get autoremove \
 && rm -rf /var/lib/apt/lists/*

# Copy over and install the requirements
COPY ./requirements.txt /var/www/cipbroadcast/requirements.txt
RUN pip install -r /var/www/cipbroadcast/requirements.txt

# Copy over the apache configuration file and enable the site
COPY ./cipbroadcast.conf /etc/apache2/sites-available/cipbroadcast.conf
RUN a2ensite cipbroadcast
RUN a2enmod headers

ENV APACHE_LOCK_DIR="var/lock"
ENV APACHE_PID_FILE="var/run/apache2.pid"
ENV APACHE_RUN_USER="www-data"
ENV APACHE_RUN_GROUP="www-data"
ENV APACHE_LOG_DIR="/var/log/apache2"

# Copy over the wsgi file
COPY ./cipbroadcast.wsgi /var/www/cipbroadcast/cipbroadcast.wsgi

COPY ./run.py /var/www/cipbroadcast/run.py
COPY ./app /var/www/cipbroadcast/app/

RUN a2dissite 000-default.conf
RUN a2ensite cipbroadcast.conf

EXPOSE 80

WORKDIR /var/www/cipbroadcast

# CMD ["/bin/bash"]
CMD  /usr/sbin/apache2ctl -D FOREGROUND
# The commands below get apache running but there are issues accessing it online
# The port is only available if you go to another port first
# ENTRYPOINT ["/sbin/init"]
# CMD ["/usr/sbin/apache2ctl"]
