---
layout: page
title: Autonomous Racing at the Limits of Handling
description: Team project for the NXP Cup — a motion controller for a small-scale autonomous race car that compensates for the nonlinear tire dynamics that emerge near the friction limit.
img: assets/img/7.jpg
importance: 5
category: projects
---

**Team of 3 · NXP Cup · AUB MSFEA**

A standard pure-pursuit controller is simple, fast, and completely fine at low speeds. It starts breaking at the limit of handling, where tire slip and inertia become first-order effects and the kinematic-bicycle assumption it is built on no longer holds.

For the NXP Cup — a small-scale (1:18) autonomous racing competition on an unknown track — we designed a two-layer motion controller:

- **Feedforward**: an adaptive pure-pursuit that dynamically adjusts its look-ahead distance based on path curvature, letting it take sharp turns without oscillating on the straights.
- **Feedback**: an error-based deviation-model regulator that produces a corrective steering angle to compensate for the unmodeled nonlinearities that dominate at high speed.

Benchmarked in MATLAB against a traditional pure-pursuit baseline on the same reference path:

- **+85.7 %** improvement in lateral-position tracking
- **+19.8 %** improvement in yaw-angle tracking
- **+8 %** faster lap time

We also designed an LQG (LQR + Kalman filter) for comparison — marginally better single-state performance, comparable lap time.
