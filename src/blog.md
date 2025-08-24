---
title: Blog
layout: layout.njk
---

## Blog Posts

<ul class="space-y-4">
  {% for post in collections.blog %}
    <li class="bg-gray-100 p-4 rounded shadow">
      <a href="{{ post.url }}" class="text-blue-700 font-bold text-xl hover:underline">{{ post.data.title }}</a>
      <div class="text-gray-500 text-sm mb-2">{{ post.date | date("%B %d, %Y") }}</div>
      <div>{{ post.templateContent | safe }}</div>
    </li>
  {% endfor %}
</ul>
