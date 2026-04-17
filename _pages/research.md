---
layout: page
title: research
permalink: /research/
description: Research projects I have worked on as a research assistant at the American University of Beirut.
nav: true
nav_order: 2
horizontal: false
---

<div class="projects">
  {% assign research_items = site.projects | where: "category", "research" | sort: "importance" %}
  {% if page.horizontal %}
    <div class="container">
      <div class="row row-cols-1 row-cols-md-2">
      {% for project in research_items %}
        {% include projects_horizontal.liquid %}
      {% endfor %}
      </div>
    </div>
  {% else %}
    <div class="row row-cols-1 row-cols-md-3">
      {% for project in research_items %}
        {% include projects.liquid %}
      {% endfor %}
    </div>
  {% endif %}
</div>
