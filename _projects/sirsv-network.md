---
layout: page
title: Networked Epidemic Model with Vaccination (SIRSV)
description: Co-authored research extending the classical SIRS epidemic model to a networked process that accounts for both permanent and temporary immunity, validated on Lebanese COVID-19 data.
img: assets/img/2.jpg
importance: 2
category: research
---

**Advisor: Prof. Dany Abou Jaoude · AUB · Mar 2024 – present**

Classical epidemic models assume a single well-mixed population. Real countries don't look like that: people cluster into cities, districts, and communities that each have their own infection dynamics and connect to each other unevenly. This work extends the standard Susceptible–Infected–Recovered–Susceptible (SIRS) framework into a continuous-time process on a contact network, and adds a Vaccinated compartment to distinguish temporary from permanent immunity.

My contributions:

- Helped prove when the disease **dies out** versus **persists** on a given network topology, giving conditions on both disease-free and endemic equilibria using a new Lyapunov function.
- Built a **graph-aware fitting algorithm** that estimates per-node infection, recovery, and vaccination rates directly from data.
- **Validated the full model on Lebanese COVID-19 data**, reproducing the observed infection curve with **R² = 0.93** and **MAPE = 4.2 %**.

A shorter version is under submission at the IEEE Conference on Decision and Control (CDC); the full SIRSV paper is in preparation.
