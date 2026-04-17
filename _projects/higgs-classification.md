---
layout: page
title: Higgs-Boson Signal Classification
description: Team project using the HIGGS kinematic dataset to separate real signal events from background — with 20+ model architectures benchmarked head-to-head.
img: assets/img/9.jpg
importance: 7
category: projects
---

**Team of 3 · Course: CMPS 261 — Machine Learning · Spring 2023**

Distinguishing an actual Higgs-boson production event from a background process that happens to look similar in a particle collider is a large-scale binary classification problem: 600K events, 28 kinematic features, and a label that tells you whether each one was signal or noise. It is also a good excuse to benchmark the practical ML toolkit end-to-end.

We compared three model families:

- **Logistic regression** as a linear baseline.
- **XGBoost**, a gradient-boosted tree ensemble.
- **Multi-layer perceptron** (scikit-learn + TensorFlow variants).

Each was hyperparameter-tuned via 5-fold cross-validation — over 20 candidate configurations in total.

Results on held-out test data:

- Logistic regression: 65.0 %
- XGBoost: 74.2 %
- MLP (5 hidden layers, 100 / 50 / 55 / 45 / 30): **75.5 %**

The MLP generalized better than XGBoost, which was mildly over-fitting even with regularization. The biggest practical lesson wasn't about architecture, though — it was that sensible hyperparameter tuning mattered more than picking the "fanciest" model.
