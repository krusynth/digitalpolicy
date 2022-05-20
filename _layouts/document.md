---
layout: default
---

<article class="post-single">
  <header class="page-header">
    <nav aria-label="breadcrumb">
      {% include breadcrumbs.html path=page.path title=page.title %}
    </nav>

    <h1>{{ page.title | escape }}</h1>
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
