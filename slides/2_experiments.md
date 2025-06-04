# Requirements for DL model
<v-clicks depth="3">

* **Feature scaling**
	* Energy deposits in neighbouring cells can differ by several orders of magnitude
		* Obstructs the convergence of gradient descent
		* Restrictions on the use of activation functions
	* Log scaling, Min-max scaling, Standardization, …
		* We care about the total energy
* **Spatial invariance**
	* Calo clusters can be shifted across matrix of calo cells
	* Convolutional NNs do some spatial invariance
* **Scale invariance (+ rotation invariance)**
	* More energetic particles produce a cluster of larger size
	* [SIFT](https://ieeexplore.ieee.org/abstract/document/1315206), [SURF](https://www.sciencedirect.com/science/article/abs/pii/S1077314207001555), or a fairly deep architecture is enough?
</v-clicks>

---

# Inductive Biases for the Task

#### We've applied some prior knowledge to constrain the space of solutions:
* Model based on **convolutional architecture**
  * No more than 30k parameters
  * No more than two convolution layers
  * No more than four fully connected layers
  * Everything else is possible:
    * Number of neurons in each layer
    * Convolutional layers parameters
    * <span v-mark="{at: 2, color: 'black', type: 'strike-through'}">Loss function</span>
    * <span v-mark="{at: 3, color: 'black', type: 'strike-through'}">Activation function</span>
    * <span v-mark="{at: 4, color: 'black', type: 'strike-through'}">Optimizer</span>
    * Training hyperparameters: learning rate, batch size, regularization
<div v-click at="1">
The space of solutions is still huge, so we conducted some preliminary experiments</div>

---
zoom: 1.2
---

# Baseline solutions
<br>
<div class="grid grid-cols-[4fr_3fr] gap-10">
  <div>

#### There are parametric baseline estimates<br> of Energy and Position of the cluster
  * It only works well without<br> background contributions

  * **Energy**: sum of all energy deposits

  * **Position**: barycenter (⭐)<br> convolved with S-shaped curve

  * XGBoost estimates for Energy and Position are also used

  </div>
    <div>
    <figure>
        <img src="/baselines.png" style="width: 405px !important;">
    </figure>
  </div>
</div>

---

# Metric Definition

<v-clicks depth="3">

* Energy estimation
	* RMSE(E)
		* The same error will be negligible for high energies, and significant for low energies
		* Realistic spectra sample has skewed energy distribution
	* RMSE(E) / E
		* The reweighting results in less **heteroscedastic error dependence** on the energy

* Position estimation
	* RMSE(x)
		* It is assumed that RMSE(y) ≈ RMSE(x)
</v-clicks>

---
zoom: 0.95
---

# Preliminary experiments

<div class="grid grid-cols-[2fr_2fr] gap-20">
<div v-click at="1">
    <figure>
    <img src="/activation_function_comparison.svg" style="width: 335px !important;">
  </figure>

* ##### Boxplots of the losses for models consisting of<br> 2 Conv. and 2 FC layers with 19k of trainable parameters for each activation function considered
* ##### The energy reconstruction problem is solved and 32k training sample from Dataset A is used
* ##### 10 instances of the corresponding model are used for each box plot
* ##### **ReLU (PReLU) activations are preselected**<br> for Energy (Position) reconstruction problem
</div>
<div v-click at="2">
    <figure>
    <img src="/Energy_optimizers_comparison_zoomed.svg" style="width: 435px !important;">
  </figure>

* ##### Histogram of the losses of all models considered for the energy reconstruction problem
* ##### Each model is trained on a sample of 32k examples randomly drawn from Dataset A
* ##### **AdamW and NAdam optimizers are preselected**<br> for both reconstruction problems
</div>
</div>

---

# Model Selection Algorithm

<div class="grid grid-cols-[2fr_2fr] gap-10">
<div v-click at="1">
  <br>
    <figure>
    <img src="/model_selection_algorithm.png" style="width: 335px !important;">
  </figure>
</div>
<div v-click at="2">
    <figure>
    <img src="/Energy_model_selection_criterion.svg" style="width: 325px !important;">
  </figure>
<br>
<center>
    <figure>
    <img src="/Energy_randomization_sources_2_FC_all_annotated.svg" style="width: 325px !important;">
  </figure>
</center>
</div>
</div>

<!--
* ##### Line graphs of the fraction of models with losses less than the current loss for six model selection criteria
* ##### Each model aims to solve the energy reconstruction problem and is trained on a sample of size 32k examples randomly drawn from Dataset A
-->
