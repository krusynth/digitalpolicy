{%- assign timestamp = site.time | date: '%s' -%}
{%- assign bodyclass = "page-" | append: page.title | slugify -%}
{%- if page.collection -%}
  {%- assign collectionclass = "collection-" | append: page.collection | slugify -%}
  {%- assign bodyclass = bodyclass | append: ' ' | append: collectionclass -%}
{%- endif -%}
{%- if page.layout != "default" -%}
  {%- assign typeclass = "type-" | append: page.layout | slugify -%}
  {%- assign bodyclass = bodyclass | append: ' ' | append: typeclass -%}
{%- endif -%}
<!DOCTYPE html>
<html lang="{{ page.lang | default: site.lang | default: "en" }}">

<!----,  ,-------.,------. ,-------.,-------.,-------.,--,
<  __  \ \__   __/(  ____ \\__   __/\__   __/(  ___  )(  >
< (  \  )   ) (   | (    \/   ) (      ) (   | (   ) ||  >
< (   ) )   | |   | |         | |      | |   | (___) ||  >
< (   ) )   | |   | | ____    | |      | |   |  ___  ||  >
< (   ) )   | |   | | \_  )   | |      | |   | (   ) ||  >
< (__/  ) __) (__ | (___) | __) (__    | |   | )   ( ||  >____
<      / (       )(       )(       )   | |   |/     \|(       '>
<-----:,  ;-----:  ;-----'  ;-----:  ,-----. |       |'-------'>
<  ____ )(  ___  )( \      (__   __/(  ____ \|\     / >
< (    ))| (   ) || |         ) (   | (    \/( \   / >
< (____))| (   ) || |         | |   | |       \ (_) >
<  _____)| (   ) || |         | |   | |        \   >
< (      | (   ) || |         | |   | |         ) >
< )      | (___) || (____/\ __) (__ | (____/\   | >
</       (       )(       /(       )(       /   | >
<------- ;-------:;-------:;-------:;-------:   ''>
<  ___  )|\     /|\__   __/(  __  \ (  ____ '>
< (   \_)| )   ( |   ) (   | (  \  )| (    \_>
< (      | )   ( |   | |   | (   ) || (__
< ( ____ | |   | |   | |   | (   ) ||  __:>
< ( \_  )| (   ) |   | |   | (   ) || (
< (___) )| (___) | __) (__ | (__/  )| (_____       │╱│◸│ │
<       )(       )(       )(      / (       '>     │╲│╲│▁│
<-------''-------' '-----'  '----'   '------->

<head>
 <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  {%- seo -%}
  <link rel="stylesheet" href="{{ "/assets/css/main.css?" | append: timestamp | relative_url }}">
  <link rel="stylesheet" media="print" href="{{ "/assets/css/print.css?" | append: timestamp | relative_url }}">
  <link rel="alternate" type="application/atom+xml" title="{{ site.name }}" href="{{ site.url }}/feed.xml" />
  <script src="{{ "/assets/js/jquery.min.js?" | append:timestamp | relative_url }}"></script>
  <script src="{{ "/assets/js/bootstrap.bundle.min.js?" | append:timestamp | relative_url }}"></script>
  </script>
  <script src="{{ "/assets/js/fontawesome.min.js?" | append:timestamp | relative_url }}"></script>
</head>

<body class="{{ bodyclass }}">
  <header class="site-header container">
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid navbar-container">
        <a class="navbar-brand" rel="author" href="/">{{ site.title | escape }}</a>
        {%- assign page_paths = site.header_pages -%}
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse" id="navbarSupportedContent">
          <ul class="nav navbar-nav nav-pages">
            <li class="nav-item">
              <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about/">About</a>
            </li>
          </ul>
          <ul class="nav navbar-nav nav-social">
          </ul>
        </div>
      </div>
    </nav>
    <div class="disclaimer">
        <span class="text">This project is <strong>not</strong> an official government website. None of the content herein should be considered official law, policy, or guidance.</span>
    </div>
    <div class="notes">
      Want to stay up-to-date on the latest policy releases? <a href="https://botsin.space/@EOPbot/">Check out EOPbot!</a>
    </div>
  </header>
    <div class="container content">
      {% include content.html html=content %}
    </div>
    <footer class="page-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm">
            This website is a work-in-progress and <strong>needs your help</strong>! See something wrong? Something missing? <a href="https://github.com/krusynth/digitalpolicy/">
              Contribute to this project on GitHub.
            </a>
          </div>
        </div>
      </div>
    </footer>

  </body>

</html>
