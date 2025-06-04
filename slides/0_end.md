---
level: 2
zoom: 1.0
---

# Conclusions

* We propose a procedure to measure the robustness of machine learning models

* We supplement such a procedure with a meta-algorithm for robust model selection

* The two robust models for two specific problems found using this method have the best convergence and the smallest loss variability among the $2\times6912$ models considered
    * Finding a robust model from a set of $6912$ models with different architectures and hyperparameters requires training $41567$ models and their instances, instead of training $345600$ models and their instances while considering an exhaustive search for the most robust model from the set
 * The models we found are more robust than the models selected by NAS from a similar search space

##### A paper with this research has been accepted by the IEEE Access journal. See also [arXiv:2505.17254 \[cs.LG\]](https://arxiv.org/abs/2505.17254)

---
layout: end
hideInToc: true
---

---
layout: statement
---

## Thank you for the attention!

<br>
<br>

#### Happy to answer your questions by e-mail <a href="mailto:aboldyrev@hse.ru">aboldyrev@hse.ru</a> and via Telegram <a href="https://t.me/aboldyrev">@aboldyrev</a>

<PoweredBySlidev mt-10 />

---
layout: center
class: text-center
---

# Backup slides

---
zoom: 0.95
---

# Application of the ResNet-18 architecture

<center>
<figure>
    <img src="/ResNet-18.png" style="width: 405px !important;">
</figure>
</center>
<br>

<div class="grid grid-cols-[4fr_3fr] gap-10">
  <div>

* **Calo clusters** are considered **as images**
* The first layers of the [ResNet-18](https://arxiv.org/abs/1512.03385) are **adjusted**<br> to actual input dimensions 15x15
* The number of residual blocks is optimized
	* Model with 11M of trainable params
* Hyperparameters are selected using a grid search with cross-validation
</div>
<div>
<figure>
    <img src="/ResNet-18_results.png" style="width: 405px !important;">
</figure>
</div>
</div>

* The performance of selected model (batch size 32, learning rate 0.01 and weight decay 0.01)<br> is far from our expectations 🥺
