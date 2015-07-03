#!/bin/sh

# Draft of script for deploying to gh-pages. 
# Note: gulp-gh-pages seems superfluous here. Prefer this script because simpler and shorter.
# For reference: http://charliegleason.com/articles/deploying-to-github-pages-with-gulp
# and: https://github.com/shinnn/gulp-gh-pages

echo "Starting deploy to gh-pages. Checking out master..."
git checkout master
echo "... checkout master done.  Compiling site with harp"
harp compile ./ ./dist
echo "... compile site done.  Adding to git archive ... "
git add .
echo "... added to git archive.  Committing ..."
git commit -am "`date`"
echo "... commit done.  Pushing to gh-pages branch in github..."
git subtree push --prefix dist origin gh-pages
echo "... published to gh-pages.  DONE!"
