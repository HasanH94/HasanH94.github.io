---
layout: page
title: Modeling Customer Purchase Behavior as a Markov Chain
description: A solo project using an absorbing Markov chain to find the highest-leverage step in a real e-commerce funnel.
img: assets/img/6.jpg
importance: 4
category: projects
---

**Course: ENMG 623 — Stochastic Models & Applications · Spring 2025 · solo**

E-commerce funnels get a lot of intuition-driven optimization: "we think people drop off at checkout." This project tried to replace intuition with a model: frame each customer session as a random walk on a six-state finite Markov chain (Start → Browse → Interested → Checkout → {Exit, Purchase}), estimate the transition matrix empirically from a year of real transactions (UCI Online Retail dataset, 100K+ events), and ask which transition actually matters most.

A baseline-chain analysis gave two useful numbers:

- **41.8 %** of sessions end in purchase.
- The average session takes **~22 steps** before being absorbed.

The interesting part was the sensitivity analysis: I perturbed each transition probability by up to 20 % and recomputed the absorption probabilities. Most edges barely moved the conversion rate; only one did. A 20 % bump in the **Checkout → Purchase** transition lifted the overall purchase rate from 41.8 % to 44.7 % — a **~6.9 % relative gain**, an order of magnitude more than any other lever.

Practical read-out: fix the final checkout page before anything else — streamline the form, enable guest checkout, add exit-intent recovery.
