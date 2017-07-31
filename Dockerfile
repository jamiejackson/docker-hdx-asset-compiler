FROM node:8.2-alpine

WORKDIR /conf

RUN \
 cd /conf && \
 npm init -y && \
 npm install -g \
  chalk \
  gulp \
  gulp-cli \
  gulp-log \
  yargs && \
 npm install \
  gulp \
  gulp-less \
  gulp-rename \
  gulp-uglify \
  gulp-watch \
  gulp-watch-less
