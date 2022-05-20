---
layout: default
---

<article class="post-single">
  <header class="page-header">
    <nav aria-label="breadcrumb">
      {% include breadcrumbs.html path=page.path title=page.title %}
    </nav>
    <h1>{{ page.title | escape }}</h1>
    <nav aria-label="tags" class="tags">
      {% include tags.html %}
    </nav>

    <aside class="card meta">
      <div class="card-body">
        <dl>
          <dt>Common Name</dt>
          <dd>{{ page.common_name }}</dd>
          <dt>Enacted</dt>
          <dd>{{ page.enacted }}</dd>
          {% if page.applies_to %}
            <dt>Applies To</dt>
            <dd><a href="/info/agency-scope/#{{ page.applies_to | slugify }}">{{ page.applies_to }}</a></dd>
          {% endif %}
          {% if page.link %}
            <dt>Reference</dt>
            <dd>{{ page.link | markdownify }}</dd>
          {% endif %}
          {% if page.codified %}
            <dt>Codified</dt>
            <dd>{{ page.codified | markdownify }}</dd>
          {% endif %}
        </dl>
    </div>
    </aside>
  </header>

  {% if page.toc %}
  <aside class="toc-accordion" id="tocAccordion">
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingOne">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
          Table of Contents
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#tocAccordion">
        <div class="accordion-body">
        {% include toc.html html=content %}
        </div>
      </div>
    </div>
  </aside>
  {% endif %}

  <section>
    {{ content }}
  </section>

</article>
