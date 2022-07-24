---
layout: default
---
<article class="post-single">

  <header class="page-header">
    <h1 class="main-title">
      A <span class="">Digital Servant's Guide</span> to
      <span class="first">U.S. Federal</span>
      <span class="second">Information Technology</span>
      <span class="third">Law and Policy</span>
    </h1>
  </header>

  <section>
    {{ content }}
  </section>

  <section class="site-tree row">
    <h2>Key Topics</h1>
    <ul class="key-topics">
      <li>
        <a href="/policies/cybersecurity/" class="btn btn-primary btn-lg category-policies"><span class="icon icon-cybersecurity"></span><span class="text">Cybersecurity</span></a>
      </li>
      <li>
        <a href="/policies/data/" class="btn btn-primary btn-lg category-policies"><span class="icon icon-data"></span><span class="text">Data</span></a>
      </li>
      <li>
        <a href="/policies/budget-finance/" class="btn btn-primary btn-lg category-policies"><span class="icon icon-budget-finance"></span><span class="text">Budget & Finance</span></a>
      </li>
      <li>
        <a href="/policies/procurement/" class="btn btn-primary btn-lg category-policies"><span class="icon icon-procurement"></span><span class="text">Procurement</span></a>
      </li>
      <li>
        <a href="/policies/hiring/" class="btn btn-primary btn-lg category-policies"><span class="icon icon-hiring"></span><span class="text">Hiring</span></a>
      </li>
      <li>
        <a href="/policies/ethics/" class="btn btn-primary btn-lg category-policies"><span class="icon icon-ethics"></span><span class="text">Ethics</span></a>
      </li>
      <li>
        <a href="/info/software-development/" class="btn btn-primary btn-lg category-info"><span class="icon icon-dev"></span><span class="text">Software Development</span></a>
      </li>
      <li>
        <a href="/info/policymaking-offices/" class="btn btn-primary btn-lg category-info"><span class="icon icon-offices"></span><span class="text">Policymaking Offices</span></a>
      </li>
    </ul>

    <h2 class="section-title">Site Contents</h1>

    <article class="site-tree-list site-tree-policies col-md-6">
      <h3>Policy Areas</h2>
      <ul>
        {% assign sorted_pages = site.policies | where_exp: "page", "page.order > 0" | sort: "order" %}
        {% for page in sorted_pages %}
          <li><a href="{{page.url}}" class="icon-{{page.slug}}">{{page.title}}</a></li>
        {% endfor %}
      </ul>
    </article>

    <article class="site-tree-list site-tree-laws col-md-6">
      <h3>Laws</h2>
      <ul>
        {% for page in site.laws %}
          <li><a href="{{page.url}}" class="icon-{{page.slug}}">{{page.title}}</a></li>
        {% endfor %}
      </ul>
    </article>

    <article class="site-tree-list site-tree-info col-md-6">
      <h3>General Information</h2>
      <ul>
        {% for page in site.info %}
          <li><a href="{{page.url}}" class="icon-{{page.slug}}">{{page.title}}</a></li>
        {% endfor %}
      </ul>
    </article>

  </section>

</article>
