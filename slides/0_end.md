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

<br>

##### A paper with this research has been accepted by the IEEE Access journal. See also our preprint [arXiv:2505.17254 \[cs.LG\]](https://arxiv.org/abs/2505.17254).

---
zoom: 1.2
---

# Discussion and next steps

* Apply the approach to models from DL-benchmarks
    * Pay attention to models with observed deep double descent

* Apply the approach in the optimization cycle of the LHCb electromagnetic calorimeter

* Implement Bayesian search for models and hyperparameters **within** the proposed model selection algorithm

* Test the hypothesis that the deepest minima of the loss function are also the widest and hence such models are more robust

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

---

# Selected Models: Energy Reconstruction

<div class="grid grid-cols-[2fr_3fr] gap-10">
<div>
<br>
<figure>
    <img src="/energy_models.png" style="width: 355px !important;">
</figure>
<br>

```markdown {*}{maxHeight:'300px'}
================================================
Layer              Output Shape         Param #
================================================
Model 1 (Energy)  [-1]                  --
|--Conv2d         [-1, 32, 13, 13]      288
|--ReLU           [-1, 32, 13, 13]      --
|--MaxPool2d      [-1, 32, 6, 6]        --
|--Conv2d         [-1, 64, 4, 4]        18,432
|--ReLU           [-1, 64, 4, 4]        --
|--MaxPool2d      [-1, 64, 3, 3]        --
|--Linear         [-1, 9]               5,193
|--ReLU           [-1, 9]               --
|--Linear         [-1, 1]               10
================================================
Trainable params: 23,923
================================================

================================================
Layer              Output Shape         Param #
================================================
Model 2 (Energy)  [-1]                  --
|--Conv2d         [-1, 32, 13, 13]      288
|--ReLU           [-1, 32, 13, 13]      --
|--MaxPool2d      [-1, 32, 6, 6]        --
|--Conv2d         [-1, 64, 4, 4]        18,432
|--ReLU           [-1, 64, 4, 4]        --
|--MaxPool2d      [-1, 64, 3, 3]        --
|--Linear         [-1, 9]               5,202
|--ReLU           [-1, 9]               --
|--Linear         [-1, 1]               10
================================================
Trainable params: 23,932
================================================
```
</div>
<div>

<figure>
    <img src="/Energy_B_Loss_vs_epoch_Models_1_2.svg" style="width: 500px !important;">
</figure>

<div class="grid grid-cols-[2fr_2fr] gap-1">
<div>
<figure>
    <img src="/Energy_A_4_bins_corrected.svg" style="width: 235px !important;">
</figure>
</div>
<div>
<figure>
    <img src="/Energy_B_4_bins_corrected.svg" style="width: 235px !important;">
</figure>
</div>
</div>

</div>
</div>

---
zoom: 0.99
---

# Selected Models: Position Reconstruction

<div class="grid grid-cols-[2fr_3fr] gap-10">
<div>
<br>
<figure>
    <img src="/position_models.png" style="width: 355px !important;">
</figure>
<br>

```markdown {*}{maxHeight:'300px'}
================================================
Layer              Output Shape         Param #
================================================
Model 3 (Position)  [-1]                --
|--Conv2d           [-1, 32, 13, 13]    288
|--PReLU            [-1, 32, 13, 13]    32
|--MaxPool2d        [-1, 32, 6, 6]      --
|--Conv2d           [-1, 64, 4, 4]      18,432
|--PReLU            [-1, 64, 4, 4]      64
|--MaxPool2d        [-1, 64, 1, 1]      --
|--Linear           [-1, 64]            4,160
|--PReLU            [-1, 64]            64
|--Linear           [-1, 9]             585
|--PReLU            [-1, 9]             9
|--Linear           [-1, 1]             10
================================================
Trainable params: 23,644
================================================

================================================
Layer              Output Shape         Param #
================================================
Model 4 (Position)  [-1]                --
|--Conv2d           [-1, 32, 13, 13]    288
|--PReLU            [-1, 32, 13, 13]    32
|--MaxPool2d        [-1, 32, 6, 6]      --
|--Conv2d           [-1, 64, 4, 4]      18,432
|--PReLU            [-1, 64, 4, 4]      64
|--MaxPool2d        [-1, 64, 1, 1]      --
|--Linear           [-1, 64]            4,160
|--PReLU            [-1, 64]            64
|--Linear           [-1, 9]             603
|--PReLU            [-1, 9]             9
|--Linear           [-1, 1]             10
================================================
Trainable params: 23,662
================================================
```
</div>
<div>

<figure>
    <img src="/Position_B_Loss_vs_epoch_Models_3_4.svg" style="width: 500px !important;">
</figure>

<div class="grid grid-cols-[2fr_2fr] gap-1">
<div>
<figure>
    <img src="/Position_A_4_bins.svg" style="width: 235px !important;">
</figure>
</div>
<div>
<figure>
    <img src="/Position_B_4_bins.svg" style="width: 235px !important;">
</figure>
</div>
</div>

</div>
</div>