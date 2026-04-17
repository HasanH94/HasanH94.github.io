---
layout: page
title: Physics-Based and Data-Driven Heat-Sink Design
description: Team project combining classical heat-transfer optimization with a neural-network surrogate to design a finned aluminum heat sink under a pressure-drop constraint.
img: assets/img/8.jpg
importance: 6
category: projects
---

**Team of 3 · Course: MECH 510 — Design of Thermal Systems · Fall 2024**

Heat-sink design is a trade-off: more fins means more cooling but also more air resistance, so you are never free to just "add more fins." Classical design uses first-principles correlations (Reynolds → Nusselt → convection coefficient → base temperature). Machine learning offers a second route: skip the physics and fit a neural network directly to experimental data. This project does both, so we can actually compare them.

We ran four phases:

1. Collected base-temperature and pressure-drop data in a wind tunnel across 12 fin configurations.
2. Derived the classical constrained-optimization model for fin spacing and length.
3. Solved it iteratively in MATLAB under a 10 Pa pressure-drop ceiling.
4. Trained several ANN architectures on the same data as a surrogate optimizer.

The best ANN (a simple 10-neuron single-hidden-layer model) reached an MSE of 12.67 and predicted the same optimum as the physics solver: **S_x = 8.81 mm, S_y = 17.13 mm, L = 25.32 mm**, yielding a base temperature of **26.8 °C** under a **9.5 Pa** pressure drop.

Neither approach was obviously better. The physics model generalizes cleanly but hides nonlinear effects; the ANN captures those but only as far as the training data goes. In practice you probably want both.
