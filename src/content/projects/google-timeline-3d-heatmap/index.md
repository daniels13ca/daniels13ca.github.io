---
name: 'Turning Google Timeline into a 3D Geo-Density Heatmap'
description: 'An interactive 3D topographic surface built from Google Timeline location history, turning time spent per city into elevated terrain.'
tags: ['Data Visualization', 'Geospatial', 'Python']
image: './cover.png'
link: 'https://github.com/daniels13ca/google-timeline-3d-heatmap'
startDate: '2026-08-13'
---

This project turns personal Google Timeline location history into an interactive 3D topographic relief map. Instead of conventional bars or 2D heatmaps, visit frequency is rendered as elevated hills and mountains representing the cities and regions where the most time was spent.

The pipeline processes semantic location JSON exports from Google Maps, reverse-geocodes and clusters visits into metro areas, and computes a 2D kernel density estimate over a high-resolution grid. Gamma compression, noise perturbation, and hypsometric coloring turn that density surface into a self-contained, interactive Plotly page complete with camera presets and a searchable table of visited cities.
