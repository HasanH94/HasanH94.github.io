---
layout: page
title: Stochastic Modeling of Highway Traffic Flow
description: A solo project fitting homogeneous and non-homogeneous Poisson processes to real toll-highway data to test whether a memoryless model can explain vehicle arrivals.
img: assets/img/5.jpg
importance: 3
category: projects
---

**Course: ENMG 623 — Stochastic Models & Applications · Spring 2025 · solo**

Traffic engineers routinely assume vehicle arrivals follow a Poisson process. This project asks whether that actually holds on a real highway, and what breaks if it doesn't.

Using the SimToll dataset — 20,000+ vehicle-arrival records across 90 scenarios — I fit a homogeneous Poisson model by maximum likelihood and compared its predicted interarrival-time distribution against the empirical one. It fails: both the Kolmogorov–Smirnov and Chi-square goodness-of-fit tests reject the constant-rate assumption across every scenario, and the simulated cumulative-arrival curve is linear where the real data is clearly S-shaped.

Switching to a **non-homogeneous** Poisson process with a time-varying rate λ(t) estimated directly from the data, and simulating via the Lewis–Shedler thinning algorithm, closes that gap: RMSE drops from ~17 to ~3.3, and Chi-square p-values lift above 0.09 — the empirical distribution is no longer statistically distinguishable from the fitted one.

The headline: time-of-day is the hidden variable; any traffic model that assumes a constant arrival rate is missing the first-order effect.
