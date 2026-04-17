---
layout: page
title: Geometry-Aware Generative Modeling for OOD Detection
description: A solo research project on using spherical (von Mises–Fisher) variational autoencoders to detect out-of-distribution inputs for foundation-model embeddings.
img: assets/img/4.jpg
importance: 2
category: projects
---

**Course: EECE 798R — Probabilistic Graphical Models · Fall 2025 · solo**

Modern vision encoders like CLIP and DINOv2 map images onto a unit hypersphere — their embeddings have a directional structure, not a Euclidean one. Most out-of-distribution (OOD) detection methods ignore that geometry and plug in Gaussian assumptions anyway, which misaligns the model with the data it is modeling.

This project asks what happens if the generative model respects the geometry. I propose a variational autoencoder whose latent space is the sphere itself, with a von Mises–Fisher posterior and a uniform spherical prior (vMF-VAE). The model trains end-to-end with a closed-form KL divergence and a cosine-similarity decoder.

Evaluated on CIFAR-10 as in-distribution against SVHN, DTD, Caltech-101, and CIFAR-10-C as OOD — across three backbones (CLIP, DINOv2, ResNet-56):

- The spherical model **matches or beats strong post-hoc baselines on semantic OOD** when the encoder's embeddings are themselves well-distributed on the sphere (CLIP, DINOv2).
- On ResNet-56, where embeddings collapse into tight clusters, performance drops — which itself confirms the central hypothesis that representational geometry matters.

The dominant hyperparameter turned out to be the concentration initialization κ, not the usual suspects (KL weight, latent dimension).
