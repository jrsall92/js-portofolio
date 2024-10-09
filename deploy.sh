#!/bin/zsh

git checkout gh-pages
git pull origin develop
ng deploy --base-href=/portfolio/ --repo=https://github.com/jrsall92/portfolio

