---
layout: archive
title: "Projects"
permalink: /projects/
author_profile: true
---

Welcome to my project portfolio. Here I showcase my work in Data Science, Machine Learning, and AI Strategy.

{% assign projects = site.posts | filter: "categories", "projects" %}
{% for post in projects %}
  {% include archive-single.html %}
{% endfor %}