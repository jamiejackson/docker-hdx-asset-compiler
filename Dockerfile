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
  yargs

RUN \
 npm install \
  gulp \
  gulp-debug \
  gulp-less \
  gulp-plumber \
  gulp-rename \
  gulp-sourcemaps \
  gulp-uglify \
  gulp-watch \
  gulp-watch-less2
