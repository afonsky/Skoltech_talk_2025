---
zoom: 1.2
---

# ML and HEP
<br>
<v-clicks depth="3">

* Many physicists are still skeptical about the application of ML

* But why?

* Сompared to conventional approaches, ML solutions:
  * Are less interpretable
    * Especially complex black-box DL models
  * (Complex models) require a lot of training data and computing resources
  * Are difficult to adjust to changing data
</v-clicks>

---
zoom: 0.9
---

# Significance in HEP

<div class="grid grid-cols-[3fr_4fr] gap-30">
<div>
<figure>
    <img src="/Standard_Normal_Distribution.svg" style="width: 435px !important;">
    <figcaption style="color:#b3b3b3ff; font-size: 10px; position: absolute"><br>Image source:
      <a href="https://commons.wikimedia.org/wiki/File:Standard_Normal_Distribution.svg">Wikipedia</a>
    </figcaption>
</figure>
<br>
<br>

##### Hint/Observation/Evidence/Discovery
<br>
<v-click at="5">
  <figure>
    <img src="/Discovery.png" style="width: 365px !important;">
  </figure>
</v-click>
</div>

<div>
<div v-click at="2">
  <figure>
    <img src="/Observation_1.png" style="width: 335px !important;">
  </figure>
  <br>
  <br>
</div>
<div v-click at="3">
  <center>
  <figure>
    <img src="/Observation_2.png" style="width: 335px !important;">
  </figure>
</center>
  <br>
  <br>
</div>
<div v-click at="4">
  <figure>
    <img src="/Evidence.png" style="width: 335px !important;">
  </figure>
<br>
<v-click at="6">

##### See also [“The significance of five sigma”](https://arxiv.org/pdf/1310.1284) by L. Lyons
</v-click>
</div>
</div>
</div>

---
zoom: 1.2
---

# ML and HEP
<br>
<v-clicks depth="3">

* The measurement in HEP is decomposed into the value and uncertanties:<br><br>
  $\mu = 1.05 \pm 0.03\mathrm{(stat.)} \pm 0.03 \mathrm{(syst.)} \pm 0.02\mathrm{(th.)}$
  * Analyzing systematic uncertainties often requires major effort

* But what is the systematic uncertanty of a ML model?
  * Many will say: use cross validation, and look on the variability among folds
  * Some would say: use the bootstrap instead
</v-clicks>

<!--
It can be seen that both of these techniques refer to sampling methods.
What else can affect the outcome of a machine learning model?
-->

---

# Typical Scenario of Deep Learning Application

##### (As applied to a problem from the Supervised Learning domain)
<v-clicks depth="2">

1. Exploratory Data Analysis is performed and a <span v-mark="{at: 12, color: 'red', type: 'crossed-off'}">baseline solution</span> is taken
2. A <span v-mark="{at: 13, color: 'yellow', type: 'highlight'}">similar</span> dataset is searched for on [Hugging Face](https://huggingface.co/datasets), [Kaggle](kaggle.com), [Google Dataset Search](https://datasetsearch.research.google.com), etc.
3. A <span v-mark="{at: 17, color: 'red', type: 'box'}">solution</span> (model) to a <span v-mark="{at: 14, color: 'yellow', type: 'highlight'}">similar</span> problem is looked for the dataset using:
   * 🤗 Benchmarks like [Papers with Code](https://paperswithcode.com/sota), [Kaggle](kaggle.com), [Hugging Face](https://huggingface.co/models), [PMLB](https://epistasislab.github.io/pmlb)
   * 🤖 Asking ChatGPT, DeepSeek, etc.
   * 👩‍🏫 Research papers or technical reports from [arXiv](https://arxiv.org/), [Google Scholar](scholar.google.com), etc.
4. If a model is found, <span v-mark="{at: 15, color: 'green', type: 'underline'}">adapt its head and tail</span>, and depending on the available resources:
   * The pre-trained model is further <span v-mark="{at: 16, color: 'brown', type: 'underline'}">trained</span><br> OR
   * The model is <span v-mark="{at: 16, color: 'brown', type: 'underline'}">trained</span> from scratch using taken architecture and hyperparameters
5. If the <span v-mark="{at: 18, color: 'red', type: 'box'}">model beats the baseline</span>: Profit!
   * Else: repeat steps 3-4
</v-clicks>
<!--
* Are there any pitfalls here?
* Many of them!
-->

---

# Why Deep Learning model?

#### <div v-click at="1">Nevertheless, the most appropriate DL model for your task exists</div>
#### <div v-click at="2">Why?</div>
#### <div v-click at="3">Because neural networks are universal approximators of **continuous univariate functions**</div>
<br>


<div class="grid grid-cols-[2fr_4fr] gap-30">
<div v-click at="4">
Arbitrary/bounded width
    <figure>
    <img src="/2407.12895v1_uat_1.svg" style="width: 275px !important;">
  </figure>
<br>
<a href="https://link.springer.com/content/pdf/10.1007/BF02551274.pdf">Cybenko, G. (1989)</a> (Sigmoid)
<a href="https://arxiv.org/abs/1710.11278">arXiv:1710.11278</a> (ReLU)
</div>
<div v-click at="5">
Arbitrary/bounded depth
    <figure>
    <img src="/2407.12895v1_uat_2.svg" style="width: 435px !important;">
    <figcaption style="color:#b3b3b3ff; font-size: 11px; position: absolute"><br>Image source:
      <a href="https://arxiv.org/abs/2407.12895v1">arXiv:2407.12895</a>
    </figcaption>
  </figure>
  <br>
  <br>
  <a href="https://arxiv.org/abs/1709.02540">arXiv:1709.02540</a><br>
  <a href="https://www.sciencedirect.com/science/article/pii/S1063520318302045">CNN, bounded width and depth</a>
</div>
</div>

---
zoom: 0.95
---

# No Free Lunch Theorem

* “[No free lunch](https://en.wikipedia.org/wiki/No_free_lunch_theorem)” (NFL) theorem by [David Wolpert](https://en.wikipedia.org/wiki/David_Wolpert) (1996): “Any two optimization algorithms are equivalent when their performance is averaged across all possible problems”
  * In a world of uncertainty, “[All models are wrong, but some are useful](https://en.wikipedia.org/wiki/All_models_are_wrong)”, [George Box](https://en.wikipedia.org/wiki/George_E._P._Box)
    * Linear models: great for linear decision boundaries, but underperform in non-linear
    * Neural networks are general purpose models, but can underperform too

<center>
<figure>
  <img src="/sphx_glr_plot_classifier_comparison_001.png" style="width: 780px !important">
  <figcaption style="color:#b3b3b3ff; font-size: 9px; position: absolute">Image source: <a href="https://scikit-learn.org/stable/auto_examples/classification/plot_classifier_comparison.html">https://scikit-learn.org/stable/auto_examples/classification/plot_classifier_comparison.html</a>
  </figcaption>
</figure>
</center>

---
zoom: 0.99
---

# Inductive Bias in Learning Algorithms

#### The preference for one choice over others is called ***inductive bias***, or ***prior knowledge***, and plays a central role in machine learning. Prior knowledge may come from background information that helps constrain the space of solutions.
<br>
<v-clicks depth="2">

* When searching for general-purpose learning algorithms, our goal is to identify inductive biases suitable for a wide range of practical applications
  * E.g., image-like data suggests translation invariance - the identity of an object is generally independent of its location within the image
* <span v-mark="{at: 5, color: 'yellow', type: 'highlight'}">Inductive biases or constraints must be consistent with the underlying process that generates the data</span>
* Successfully applying deep learning to real-world problems depends on skillfully designing inductive bias and integrating prior knowledge
</v-clicks>
<br>

##### <div v-click at="6">Source: [Christopher M. Bishop, Hugh Bishop, Deep Learning - Foundations and Concepts (2024)](https://link.springer.com/book/10.1007/978-3-031-45468-4)</div>

---

# Ex. Images

<div class="grid grid-cols-[3fr_3fr] gap-50">
  <div v-click at="1">

  <figure>
      <img src="/n01592084_chickadee.JPEG" style="width: 290px !important;">
  </figure>

  </div>
    <div v-click at="2">
    <figure>
        <img src="/cluster_no_bar.svg" style="width: 200px !important;">
    </figure>
  </div>
</div>
<br>
<div class="grid grid-cols-[5fr_3fr_3fr] gap-5">
  <div v-click at="3">

  <figure>
      <img src="/feature_hist_bird.svg" style="width: 205px !important;">
  </figure>

  </div>
    <div v-click at="4">
    <figure>
        <img src="/feature_hist_1.svg" style="width: 205px !important;">
    </figure>
  </div>
      <div v-click at="5">
    <figure>
        <img src="/feature_hist_2.svg" style="width: 205px !important;">
    </figure>
  </div>
</div>
<div v-click at="6">

##### Obviously, the underlying processes that generate left and right images are different
</div>

---

# Understanding Robustness in Neural Networks

<v-clicks depth="3">

* The word **robust** is loaded with many (sometimes inconsistent) connotations
  *  Following [Huber's definition](https://books.google.com/books?id=j1OhquR_j88C), robustness signifies insensitivity to small deviations from the assumptions

* In this study, we look at both outlier resistance and how good a model generalizes from finite training datasets
  * It is assumed that the training and test samples are randomly and fairly split,<br> so outliers are distributed similarly
    * It shows their quantity but not the influence on the model

  * How does the nature and amount of training data affect finding a robust solution?
    * Is there a **minimum training sample size** needed to achieve<br> robust predictions on the test set?
</v-clicks>

---
zoom: 0.9
---

# Understanding Robustness in Neural Networks
<v-click at="1">

#### Factors affecting the robustness of a machine learning (deep learning) model:
</v-click>
<v-clicks depth="3">

  * Differences in training and test samples
  * Intrinsic nondeterminism of the model and its learning process ([Reproducibility](https://pytorch.org/docs/stable/notes/randomness.html) in PyTorch)
    * Initialization of model weights
    * Nondeterministic transformations ([torch.use_deterministic_algorithms](https://pytorch.org/docs/stable/generated/torch.use_deterministic_algorithms.html))
    * Optimizer behavior
</v-clicks>

<v-click at="6">

#### We measure the robustness by an appropriate statistical measure of the set of test losses of **model instances**, when a specified number of iterations is reached or when an early stopping criterion is met
</v-click>
<div class="grid grid-cols-[5fr_4fr]">
<div>
<v-click at="7">
<figure>
        <img src="/Robust_vs_nonrubust.svg" style="width: 505px !important;">
</figure>
</v-click>
</div>
<div>
<v-click at="8">
  <figure>
        <img src="/Energy_randomization_sources_rotated_lines.svg" style="width: 375px !important;">
</figure>
</v-click>
</div>
</div>


---

# Robustness to Transformations of Data

<div v-click at="1">
  <figure>
      <img src="/mnist.png" style="width: 505px !important;">
    <figcaption style="color:#b3b3b3ff; font-size: 9px; position: absolute">10 classes in MNIST dataset
  </figcaption>
  </figure>
</div>
<br>
<br>
<div v-click at="2">

#### Convolutional neural networks provide translation invariance:
<br>
<div class="grid grid-cols-[2fr_2fr_2fr_2fr] gap-5">
  <div>

  <figure>
      <img src="/mnist_digit_2_1.png" style="width: 105px !important;">
  </figure>

  </div>
    <div>
    <figure>
        <img src="/mnist_digit_2_2.png" style="width: 105px !important;">
    </figure>
  </div>
      <div>
    <figure>
        <img src="/mnist_digit_2_3.png" style="width: 105px !important;">
    </figure>
  </div>
      <div>
    <figure>
        <img src="/mnist_digit_2_4.png" style="width: 105px !important;">
    </figure>
  </div>
</div>
</div>

---

# Robustness to Transformations of Data

<div class="grid grid-cols-[2fr_2fr] gap-5">
  <div>
<div v-click at="1">
  <figure>
      <img src="/mnist_orig.png" style="width: 205px !important;">
  </figure>
</div>
  <br>
<div v-click at="2">
  <figure>
    <img src="/mnist_scr.png" style="width: 205px !important;">
  </figure>
</div>

  </div>
    <div v-click at="3">
    <br>
    <br>
    <br>
    <figure>
        <img src="/CNN_vs_FF.png" style="width: 405px !important;">
    </figure>
  </div>
</div>

---

# Robustness to Transformations of Data
<br>

#### Rotation invariance
<br>
<div class="grid grid-cols-[2fr_2fr_2fr_2fr] gap-5">
  <div>

  <figure>
      <img src="/mnist_digit_2_1r.png" style="width: 105px !important;">
  </figure>

  </div>
    <div>
    <figure>
        <img src="/mnist_digit_2_2r.png" style="width: 105px !important;">
    </figure>
  </div>
      <div>
    <figure>
        <img src="/mnist_digit_2_3r.png" style="width: 105px !important;">
    </figure>
  </div>
      <div>
    <figure>
        <img src="/mnist_digit_2_4r.png" style="width: 105px !important;">
    </figure>
  </div>
</div>
<br>

#### Usually achieved by data augmentation

---

# Robustness to Transformations of Data

<div class="grid grid-cols-[4fr_4fr] gap-15">
<div v-click at="1">

#### Scale invariance

<br>
<figure>
    <img src="/mnist_digit_7_scale.png" style="width: 505px !important;">
</figure>
<br>
<br>
<figure>
    <img src="/Riesz_vs_CNN.png" style="width: 245px !important;">
  <figcaption style="color:#b3b3b3ff; font-size: 9px; position: absolute">Images source: <a href="https://arxiv.org/abs/2305.04665">arXiv:2305.04665</a>
</figcaption>
</figure>
<br>

##### [Riesz transform neural networks](https://arxiv.org/abs/2305.04665) (2024)
</div>
<div v-click at="2">
<br>
<figure>
    <img src="/Riesz.png" style="width: 415px !important;">
<figcaption style="color:#b3b3b3ff; font-size: 9px; position: absolute">From left to right: input image, ground truth, results of the Riesz network and the U-net with 4 pyramid levels</figcaption>
</figure>
</div>
</div>

---
zoom: 1.2
---

# Robustness to Transformations of Data

<br>

* Translation invariance is achieved in the network architecture (CNN)

* Rotation invariance is achieved by augmenting the training data

* Scale invariance is achieved in the network architecture (Riesz networks)
<br>
<br>

* Is it possible to take the above into account in a capacity of a neural network?
  * What kind of architecture?
<br>

* What minimum inductive biases will be sufficient?
<br>

#### The answers to these questions lie in the details of the data and the task