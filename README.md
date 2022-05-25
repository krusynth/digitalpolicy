# Digital Policy Guide

**A Digital Servant's Guide to U.S. Federal Information Technology Law and Policy**

Joining the United States federal civil service can be daunting, particularly for technology professionals who have not navigated the intricacies of government policy before. This guide is a very brief introduction to key laws, policies, and guidance surrounding the practice of information technology in government.

This guide should not be considered official guidance itself, but rather a tool to guide the reader to official sources. This guide should also not be considered comprehensive, and may not be up-to-date. In all cases, it is recommended that one always consider primary official sources.

## Contributing

If you see something wrong or missing, please do let us know! The easiest way is to just [open an issue](https://github.com/krusynth/digitalpolicy/issues) with your comment or question.

Of course [pull requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests) with direct contributions are always welcome as well!

### Public domain

For detailed license information, see [LICENSE](LICENSE.md).

All contributions to this project will be released under the [CC0 dedication](https://creativecommons.org/share-your-work/public-domain/cc0/). By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.

### Installation

This is a standard [Jekyll](https://jekyllrb.com/docs/) / [GitHub Pages](https://pages.github.com/) website.  As such, you'll need the comptible version of Ruby installed (2.7.3) via `rvm` or other means. After that, make sure Bundler is installed, and then `bundle install` the ruby dependencies as usual.

You probably won't need to install the Javascript/SCSS dependencies as they're statically included in the repo. If you do, you'll need `node` and either `yarn` or `npm` as a package manager, and then simply install as the tool directs from the `package.json` included here.

There's a couple of helper scripts included in the `package.json` as well:

* `serve` will destroy the local `_site` folder, and then serve the website via jekyll at [http://localhost:8000](http://localhost:8000).

* `linkpkg` will copy the needed assets from `node_modules` into the public `assets` folder - but again, you should not need to do this step unless you're updating/adding a node package or something.

(I will admit I have yet to find a decent way of including node packages into GitHub pages sites. Here, I've only included the ones _needed_ to compile the SCSS, while the Javascripts are all static copies in the assets folder. I'm open to suggestions here!)

### Content

All of the content pages are located in the `content/` folder (except the main `index.md` file, because GitHub Pages wants it at the root.)

We try to strike a balance between creating individual pages for topics and consolidating topics to reduce sprawl.  For instance, individual laws only have separate pages if those laws are complicated or span across multiple concerns, such as @FITARA.  In other cases, we simply refer directly to the laws in the relevant sections.  Laws not related to technology generally won't have their own page unless they are special in some way.

Pages with `toc: true` in the front matter will automatically create a table of contents at the top of the page when combined with `layout: law` or `layout: document` **only**. This is useful for very long pages.

Browsing through the source, you will find stub pages for content that we have not yet completed. Feel free to add to these as well!

References to laws & policies should generally be linked to official government sources whenever possible. [uscode.house.gov](https://uscode.house.gov/) is the preferred option for the US Code, [www.ecfr.gov](https://www.ecfr.gov/) for federal regulations, [congress.gov](https://www.congress.gov/) for laws, [whitehouse.gov](https://whitehouse.gov) for federal policies/executive orders, and so on.

### Acronyms & Icons

To reduce duplicative references, this website uses a series of data files that provide tagged acronyms that are replaced wherever they appear on the site. For instance, using `@FITARA` will expand the first reference on a given page to `The Federal Information Technology Acquisition Reform Act (FITARA)` with a link to the `/aws/fitara/` page.  Subsequential refernces to `@FITARA` will retain the acronym and still provide a link. Acronyms without links simply use the `<abbr>` tag to provide hover-state titles that expand the definition after the first reference on a page.

Additionally, there are a handful of special icons (we call them "glyphs") that can be used, including @SOAPBOX and @WARNING for a megaphone or caution sign respectively.

The `_data` directory contains all of these files. For instance, the [blob/ghpages/_data/acronyms/laws.yml](blob/ghpages/_data/acronyms/laws.yml) file lists commonly referenced laws and policies. These files are processed on page content via the processing directives found in `_includes/filters`.  This uses standard Jekyll/Liquid tags, no plugins needed!

Since these terms are replaced in the order they are listed in the data files, to avoid conflicts **longer terms should be put before shorter terms**; for instance `DOEd` should be listed before `DOE` to avoid replacing the latter _first_ with the wrong term.

If you're adding new acronyms you typically need to restart jekyll between edits, as these are processed when the site is rebuilt.
