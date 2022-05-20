---
title: Acronyms
layout: document
toc: true
---

One of the most daunting aspects of joining government is the massive amount of jargon and acronyms. A simple phrase can contain [a large amount of history](https://memory-alpha.fandom.com/wiki/Darmok_%28episode%29), and the use of these are often ways of separating "in-groups" from "out-groups." As such, it's important to rapidly get up-to-speed on the local language in any given agency environment.

The summary below contains the most common government-wide terms, but each agency has its own series of abbreviations for various offices, systems, and processes. It's a good idea to ask if your agency has a list documented already - digital service teams also often create one (e.g.s, [IRS](https://github.com/usds/irs-acronyms/blob/main/acronyms.csv), [VA](https://github.com/department-of-veterans-affairs/acronyms/blob/master/acronyms.csv), [EIS](https://github.com/AlaskaDHSS/EIS-Modernization/blob/master/ACRONYMS.md)).

{%- assign cats = "agencies, laws, misc" | split: ", " -%}
{%- for cat in cats  -%}
  {%- assign type = site.data.acronyms[cat] -%}
  <h2>{{type.title}}</h2>
  {{ type.description }}
  <table>
    <thead>
      <tr>
        <th>Acronym</th><th>Name</th><th>Notes</th>
      </tr>
    </thead>
    <tbody>
      {% for datum in type.values %}
        <tr id="{{ datum.name }}">
          <td>{{ datum.name }}</td>
          <td>
            {% if datum.url %}<a href="{{ datum.url }}">{{ datum.fullname }}</a>
            {%- else %} {{ datum.fullname }}{% endif -%}
          </td>
          <td>{{ datum.notes | markdownify }}</td>
        </tr>
      {% endfor %}
    </tbody>
  </table>
{%- endfor -%}
