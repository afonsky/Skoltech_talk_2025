---
# You can also start simply with 'default'
theme: seriph
addons:
  - "@twitwi/slidev-addon-ultracharger"
addonsConfig:
  ultracharger:
    inlineSvg:
      markersWorkaround: false
    disable:
      - metaFooter
      - tocFooter

background: /mountain.jpg

# some information about your slides (markdown enabled)
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# apply unocss classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
# transition: slide-down
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true

title: Robust Deep Learning
hideInToc: true
subtitle: Seminar @AI Center Skoltech
date: 05/06/2025
venue: Skoltech
author: Alexey Boldyrev, Andrey Shevelev, Fedor Ratnikov
---

<br>
<br>
<br>
<br>

# Robust Deep Learning<br><br>
### <u>Alexey Boldyrev</u>, Andrey Shevelev, Fedor Ratnikov<br><br>
#### Seminar @AI Center Skoltech<br>
#### 05/06/2025
<div>
<br>
<span style="color:#b3b3b3ff; font-size: 11px; float: right;">Image credit: ‘Glacier du Rhone au haut du Valais’<br> by Claude Niquet after Jean Séraphin Désiré Besson<br>
<a href="https://wellcomecollection.org/works/e3y95vtv">https://wellcomecollection.org/works/e3y95vtv</a>
</span>
</div>

<style>
  :deep(footer) { padding-bottom: 3em !important; }
</style>

---
src: ./slides/0_introduction.md
---

---
src: ./slides/1_dataset.md
---

---
src: ./slides/2_experiments.md
---

---
src: ./slides/3_results.md
---

---
src: ./slides/0_end.md
---
