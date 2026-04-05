---
layout: archive
title: "Projects"
permalink: /projects/
author_profile: true
---

Welcome to my project portfolio. Here I showcase my work in Data Science, Machine Learning, and AI Strategy.

{% assign projects = site.posts | where_exp: "post", "post.categories contains 'projects'" %}
{% for post in projects %}
  {% include archive-single.html %}
{% endfor %}
