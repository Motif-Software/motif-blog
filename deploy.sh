#!/usr/bin/env sh

set -e

if [ -d "dist" ]; then rm -Rf dist; fi

npm run build

cd dist

echo "motif.software" > CNAME

git init
git add -A
git commit -m 'Deploy'

git push -f git@github.com:motif-software/motif-blog.git main:gh-pages

cd -
