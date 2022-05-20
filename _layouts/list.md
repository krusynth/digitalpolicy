---
layout: default
---
<article class="post-single">

  <header class="page-header">
    <h1>{{ page.title | escape }}</h1>
  </header>

  {% if content %}
    <section>
      {{ content }}
    </section>
  {% endif %}

  <section>
    <ul>
      {% assign collection = site.collections | where: "label", page.group | first %}
      {% for item in collection.docs %}
        <li>
          <a href="{{ item.url }}">{{ item.title }}</a>
        </li>
      {% endfor %}
    </ul>
  </section>

</article>
