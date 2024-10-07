#!/bin/zsh

git checkout gh-pages
git pull origin develop
ng deploy --prod --base-href=/portofolio/ --repo=https://github.com/jrsall92/js-portofolio
ng deploy --branch=gh-pages
