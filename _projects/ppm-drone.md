---
layout: page
title: Autonomous Drone for Forest-Parasite Treatment
description: Research assistant on a multirotor UAV that precision-injects a biopesticide into pine-parasite nests.
img: assets/img/1.jpg
importance: 1
category: research
---

**Advisor: Prof. Naseem Daher · AUB Vision & Robotics Lab · Nov 2022 – Jan 2025**

The Pine Processionary Moth is an invasive pest spreading through Mediterranean pine forests. Conventional treatments — large-scale pesticide spraying or manual labor with ladders — are expensive, environmentally damaging, and in many places simply illegal. This project is a multirotor drone that flies up to a nest, precisely punctures its outer layer, and injects 3 mL of a fungi-based biopesticide before retracting.

My contributions were on the sensing, control, and simulation side:

- **Characterized the needle–nest interaction** on polypropylene mock nests and mapped it into a five-stage force profile, which informed the sensing-rig spring sizing.
- **Built the ROS / PX4 flight stack** (cascaded position + attitude + angular-rate control) on an NVIDIA Jetson Orin Nano with MAVROS and a Pixhawk 2.4.8, and validated it end-to-end in Gazebo under varied wind, altitude, and payload conditions.
- **Designed a field-of-view-aware, confidence-weighted Control Barrier Function planner** that keeps the drone both collision-safe and visually locked on the target nest — formulated as a compact quadratic program and solved in real time at 60 Hz.

A full journal paper is in preparation with the wider team.
