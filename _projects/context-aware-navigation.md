---
layout: page
title: Context-Aware Autonomous Navigation
description: Final-year project — a self-driving perception and planning stack designed for unstructured urban traffic. Winner of the Dean's Creative Achievement Award.
img: assets/img/3.jpg
importance: 1
category: projects
---

**Team of 4 · Advisor: Prof. Naseem Daher · AUB MSFEA · Sept 2024 – May 2025**
**🏆 Dean's Creative Achievement Award (Best FYP) · $5K prize**

Most self-driving stacks quietly assume the road is well-marked, pedestrians obey lights, and every vehicle drives like it has read the traffic code. That assumption breaks in cities like Beirut or Mumbai, where 93 % of the world's road fatalities actually happen. The goal of this project was to build an autonomous ground vehicle that could handle that kind of environment — without relying on HD maps or rigid lane markings.

The system has three layers:

- **Perception** — a stereo-vision pipeline using a ZED camera and a dual-YOLO ensemble (road segmentation + instance segmentation of cars, people, motorcycles), fused with depth to produce 3D oriented bounding boxes, object velocities, and ego-vehicle pose in real time.
- **Decision-making** — a Partially-Observable Markov Decision Process that reasons under perception uncertainty over a depth-5 semantic action tree (lane-keep vs. lane-change, aggressive vs. conservative).
- **Local planning** — a Spatio-Temporal Safety Corridor solver that produces smooth, collision-free, bounded-jerk trajectories, executed by a pure-pursuit controller.

My specific contributions were on the perception side — building the real-time 3D segmentation and tracking pipeline, and the velocity-estimation stage — and on the ROS integration that glued it all together.

The system was validated in the Autoware-AWSIM and EPSILON simulators with reaction times below 200 ms in dynamic multi-agent scenes.
