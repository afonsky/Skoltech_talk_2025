---
layout: statement
---

# Results

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
Layer              Output Shape      	Param #
================================================
Model 1 (Energy)  [-1]               	--
|--Conv2d         [-1, 32, 13, 13]   	288
|--ReLU           [-1, 32, 13, 13]   	--
|--MaxPool2d      [-1, 32, 6, 6]     	--
|--Conv2d         [-1, 64, 4, 4]     	18,432
|--ReLU           [-1, 64, 4, 4]     	--
|--MaxPool2d      [-1, 64, 3, 3]     	--
|--Linear         [-1, 9]           	5,193
|--ReLU           [-1, 9]           	--
|--Linear         [-1, 1]            	10
================================================
Trainable params: 23,923
================================================

================================================
Layer              Output Shape      	Param #
================================================
Model 2 (Energy)  [-1]               	--
|--Conv2d         [-1, 32, 13, 13]   	288
|--ReLU           [-1, 32, 13, 13]   	--
|--MaxPool2d      [-1, 32, 6, 6]     	--
|--Conv2d         [-1, 64, 4, 4]     	18,432
|--ReLU           [-1, 64, 4, 4]     	--
|--MaxPool2d      [-1, 64, 3, 3]     	--
|--Linear         [-1, 9]           	5,202
|--ReLU           [-1, 9]           	--
|--Linear         [-1, 1]            	10
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

# Impact of Weight Initialization on Model Robustness
<br>
<div class="grid grid-cols-[2fr_2fr] gap-20">
<div>
<figure>
    <img src="/Energy_randomization_sources_2_FC.svg" style="width: 355px !important;">
</figure>
<br>
</div>
<div>
<figure>
    <img src="/Energy_randomization_sources_2_FC_sum.svg" style="width: 355px !important;">
</figure>
</div>
</div>

* Kaiming (He) weight initialization is used
* Each of the 1000 instances of the model is trained<br> on a sample of 32k examples randomly drawn from Dataset B

---

# Selected Models: Energy Reconstruction
<center>
<figure>
    <img src="/Energy_A_132_32k_bins_sum_nosum.svg" style="width: 450px !important;">
</figure>

<figure>
    <img src="/Energy_B_132_32k_bins_sum_nosum.svg" style="width: 450px !important;">
</figure>
</center>

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
Layer              Output Shape      	Param #
================================================
Model 3 (Position)  [-1]               	--
|--Conv2d           [-1, 32, 13, 13]   	288
|--PReLU            [-1, 32, 13, 13]   	32
|--MaxPool2d        [-1, 32, 6, 6]     	--
|--Conv2d           [-1, 64, 4, 4]     	18,432
|--PReLU            [-1, 64, 4, 4]     	64
|--MaxPool2d        [-1, 64, 1, 1]     	--
|--Linear           [-1, 64]           	4,160
|--PReLU            [-1, 64]           	64
|--Linear           [-1, 9]            	585
|--PReLU            [-1, 9]            	9
|--Linear           [-1, 1]            	10
================================================
Trainable params: 23,644
================================================

================================================
Layer              Output Shape      	Param #
================================================
Model 4 (Position)  [-1]               	--
|--Conv2d           [-1, 32, 13, 13]   	288
|--PReLU            [-1, 32, 13, 13]   	32
|--MaxPool2d        [-1, 32, 6, 6]     	--
|--Conv2d           [-1, 64, 4, 4]     	18,432
|--PReLU            [-1, 64, 4, 4]     	64
|--MaxPool2d        [-1, 64, 1, 1]     	--
|--Linear           [-1, 64]           	4,160
|--PReLU            [-1, 64]           	64
|--Linear           [-1, 9]            	603
|--PReLU            [-1, 9]            	9
|--Linear           [-1, 1]            	10
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

---

# Selected Models: Position Reconstruction
<center>
<figure>
    <img src="/Position_A_132_32k_bins_bar_nobar.svg" style="width: 450px !important;">
</figure>

<figure>
    <img src="/Position_B_132_32k_bins_bar_nobar.svg" style="width: 450px !important;">
</figure>
</center>

---

# Comparison with NAS approach

<div class="grid grid-cols-[2fr_3fr] gap-10">
<div>

* ##### The NAS from the Optuna library is used
* ##### This tool provides the ability to search multiple hyperparameters using the Tree-structured Parzen Estimator algorithm to select hyperparameter values
<figure>
    <img src="/NAS_model.png" style="width: 355px !important;">
</figure>

```markdown {*}{maxHeight:'250px'}
================================================
Layer              Output Shape      	Param #
================================================
NAS 1             [-1]               	--
|--Conv2d         [-1, 32, 13, 13]   	288
|--ReLU           [-1, 32, 13, 13]   	--
|--MaxPool2d      [-1, 32, 6, 6]     	--
|--Conv2d         [-1, 16, 4, 4]     	4,608
|--ReLU           [-1, 16, 4, 4]     	--
|--MaxPool2d      [-1, 16, 1, 1]     	--
|--Linear         [-1, 32]           	544
|--ReLU           [-1, 32]           	--
|--Linear         [-1, 9]           	306
|--ReLU           [-1, 9]           	--
|--Linear         [-1, 1]            	10
================================================
Trainable params: 5,756
================================================

================================================
Layer              Output Shape      	Param #
================================================
NAS 2             [-1]               	--
|--Conv2d         [-1, 32, 13, 13]   	288
|--ReLU           [-1, 32, 13, 13]   	--
|--MaxPool2d      [-1, 32, 6, 6]     	--
|--Conv2d         [-1, 16, 4, 4]     	4,608
|--ReLU           [-1, 16, 4, 4]     	--
|--MaxPool2d      [-1, 16, 1, 1]     	--
|--Linear         [-1, 128]           	2,176
|--ReLU           [-1, 128]           	--
|--Linear         [-1, 64]           	8,256
|--ReLU           [-1, 64]           	--
|--Linear         [-1, 9]           	594
|--ReLU           [-1, 9]           	--
|--Linear         [-1, 1]            	10
================================================
Trainable params: 15,932
================================================
```
</div>
<div>

<figure>
    <img src="/Energy_B_Loss_vs_epoch_NAS_1_2.svg" style="width: 500px !important;">
</figure>
<center>
<figure>
    <img src="/Energy_B_4_bins_NAS.svg" style="width: 240px !important;">
</figure>
</center>
</div>
</div>