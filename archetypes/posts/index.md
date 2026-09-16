---
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
date: {{ .Date }}
draft: true
description: ""
summary: ""

# Place the feature image beside index.md, then uncomment these fields.
# images: ["feature-image.webp"]
# feature: "feature-image.webp"
# featureAlt: "Describe the feature image for readers using assistive technology."

# Use one or two broad categories and several specific tags.
categories: []
tags: []

showTableOfContents: true
showAuthor: true
showReadingTime: true
showWordCount: true
showTaxonomies: true
---

{{ printf "{{< lead >}}" }}
Write one concise sentence that introduces the article without repeating its title.
{{ printf "{{< /lead >}}" }}

## First Section

Begin the article here.

![Descriptive alternative text](body-image.webp "A concise image caption.")

Continue the article here.

## Second Section

Develop the article with context, evidence, or personal observations.

When presenting a sequence or set of points, use valid Markdown list markers:

1. First point.
2. Second point.
3. Third point.

## Final Section

Conclude with the central reflection, lesson, or next step.

{{ printf "{{< photo-attribution >}}" }}

<!--
POST STRUCTURE

This file is the index of a Hugo leaf bundle:

content/posts/post-slug/
├── index.md
├── feature-image.webp
└── body-image.webp

The image named in `feature` appears at the top of the article. It may also be
used for link previews through `images`. Body images placed beside index.md are
automatically resized, converted, and lazy-loaded by the site.

Before publishing:

- Replace all placeholder text and filenames.
- Confirm the date and time-zone offset.
- Keep `draft: true` while reviewing the post locally.
- Write a distinct description, summary, and feature-image alt text.
- Use categories for broad subject areas and tags for specific topics.
- Add descriptive alt text and an accurate caption to each image.
- Credit any photographs not taken by the author individually.
- Check external links and factual claims.
- Run `hugo server --buildDrafts` for an offline preview.
- Check the page on narrow and wide browser sizes.
- Change `draft` to `false` only when the post is ready to publish.
-->
