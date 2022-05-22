# Digital Policy Guide

**A Digital Servant's Guide to U.S. Federal Information Technology Law and Policy**

Joining the United States federal civil service can be daunting, particularly for technology professionals who have not navigated the intricacies of government policy before. This guide is a very brief introduction to key laws, policies, and guidance surrounding the practice of information technology in government.

This guide should not be considered official guidance itself, but rather a tool to guide the reader to official sources. This guide should also not be considered comprehensive, and may not be up-to-date. In all cases, it is recommended that one always consider primary official sources.

## Contributing

If you see something wrong or missing, please do let us know! The easiest way is to just [open an issue](https://github.com/krusynth/digitalpolicy/issues) with your comment or question.

Of course [pull requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests) with direct contributions are always welcome as well!

### Installation

This is a standard [Jekyll](https://jekyllrb.com/docs/) / [GitHub Pages](https://pages.github.com/) website.  As such, you'll need the comptible version of Ruby installed (2.7.3) via `rvm` or other means. After that, make sure Bundler is installed, and then `bundle install` the ruby dependencies as usual.

You probably won't need to install the Javascript/SCSS dependencies as they're statically included in the repo. If you do, you'll need `node` and either `yarn` or `npm` as a package manager, and then simply install as the tool directs from the `package.json` included here.

There's a couple of helper scripts included in the `package.json` as well:

* `serve` will destroy the local `_site` folder, and then serve the website via jekyll at [http://localhost:8000](http://localhost:8000).

* `linkpkg` will copy the needed assets from `node_modules` into the public `assets` folder - but again, you should not need to do this step unless you're updating/adding a node package or something.

(I will admit I have yet to find a decent way of including node packages into GitHub pages sites. Here, I've only included the ones _needed_ to compile the SCSS, while the Javascripts are all static copies in the assets folder. I'm open to suggestions here!)