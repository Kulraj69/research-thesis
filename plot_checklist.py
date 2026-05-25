#!/usr/bin/env python3
"""Checklist-style equilibration summary figure."""

import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
from matplotlib.offsetbox import AnnotationBbox, OffsetImage
import numpy as np

OUT = "plots"

fig, ax = plt.subplots(figsize=(14, 8))
ax.set_xlim(0, 10)
ax.set_ylim(0, 10)
ax.axis("off")

# Title
ax.text(5, 9.55, "Equilibration Checklist — 300 K ZnSO₄ + Thiourea System",
        ha="center", va="center", fontsize=18, fontweight="bold",
        color="#1a2744")
ax.plot([0.5, 9.5], [9.2, 9.2], color="#c8a84e", linewidth=3)

# Colors
PASS_BG  = "#e6f4ea"
PASS_BD  = "#0d904f"
WARN_BG  = "#fef7e0"
WARN_BD  = "#e8710a"
ROW_H    = 1.25

checks = [
    {
        "label": "Energy Minimization",
        "status": "pass",
        "metric": "E_pot converged to −600,328 kJ/mol",
        "detail": "1,249 steps  |  Start: +147,176 → Final: −600,328 kJ/mol  |  ΔE = −747,504 kJ/mol",
        "criteria": "Plateau reached, no further decrease",
    },
    {
        "label": "NVT Temperature",
        "status": "pass",
        "metric": "Mean = 299.86 ± 3.13 K  (target: 300 K)",
        "detail": "500 ps  |  Range: 291.3 – 316.2 K  |  Deviation < 1%",
        "criteria": "Mean within ±5 K of target, σ < 5 K",
    },
    {
        "label": "NPT Density",
        "status": "pass",
        "metric": "Mean = 1,389.7 ± 4.5 kg/m³",
        "detail": "3,000 ps (equil. after 200 ps)  |  Stable plateau, σ/μ = 0.32%",
        "criteria": "Flat plateau, σ/μ < 2%",
    },
    {
        "label": "NPT Pressure",
        "status": "pass",
        "metric": "Mean = −0.2 ± 356 bar  (target: 1 bar)",
        "detail": "3,000 ps  |  Large fluctuations normal for small systems  |  Mean ≈ 0",
        "criteria": "Mean oscillates around target, no drift",
    },
    {
        "label": "Zn²⁺ Diffusion (MSD)",
        "status": "pass",
        "metric": "D ≈ 0.8 × 10⁻⁹ m²/s  (linear MSD regime)",
        "detail": "10 ns trajectory  |  Linear fit on 20–80% of data  |  Ballistic → diffusive transition clear",
        "criteria": "MSD linear at long times, no plateau / anomaly",
    },
]

for i, chk in enumerate(checks):
    y_top = 8.7 - i * ROW_H
    is_pass = chk["status"] == "pass"
    bg = PASS_BG if is_pass else WARN_BG
    bd = PASS_BD if is_pass else WARN_BD

    rect = mpatches.FancyBboxPatch(
        (0.3, y_top - ROW_H + 0.2), 9.4, ROW_H - 0.15,
        boxstyle="round,pad=0.08", facecolor=bg, edgecolor=bd,
        linewidth=1.8, alpha=0.85,
    )
    ax.add_patch(rect)

    # Draw a proper checkbox
    cb_x, cb_y, cb_s = 0.65, y_top - 0.35, 0.18
    cb_rect = mpatches.FancyBboxPatch(
        (cb_x - cb_s, cb_y - cb_s), cb_s*2, cb_s*2,
        boxstyle="round,pad=0.02", facecolor=bd, edgecolor=bd, linewidth=1.5
    )
    ax.add_patch(cb_rect)
    ax.text(cb_x, cb_y, "\u2713", fontsize=16, ha="center", va="center",
            color="white", fontweight="bold")

    # Label
    ax.text(1.15, y_top - 0.12, chk["label"],
            fontsize=14, fontweight="bold", va="center", color="#1a2744")

    # Metric (green/orange)
    ax.text(1.15, y_top - 0.42, chk["metric"],
            fontsize=11.5, va="center", color=bd, fontweight="600")

    # Detail line
    ax.text(1.15, y_top - 0.68, chk["detail"],
            fontsize=9.5, va="center", color="#555")

    # Criteria (right side)
    ax.text(9.5, y_top - 0.12, "Criterion:", fontsize=8.5, ha="right",
            va="center", color="#888", fontstyle="italic")
    ax.text(9.5, y_top - 0.35, chk["criteria"], fontsize=9, ha="right",
            va="center", color="#444", fontstyle="italic")

# Footer summary box
foot_y = 8.7 - len(checks) * ROW_H - 0.15
rect2 = mpatches.FancyBboxPatch(
    (0.3, foot_y - 0.45), 9.4, 0.65,
    boxstyle="round,pad=0.08", facecolor="#eef1f8", edgecolor="#1a2744",
    linewidth=1.5, alpha=0.9,
)
ax.add_patch(rect2)
ax.text(5, foot_y - 0.1, "All 5 / 5 equilibration criteria PASSED — system ready for production MD",
        ha="center", va="center", fontsize=13, fontweight="bold", color="#0d904f")

fig.tight_layout()
fig.savefig(f"{OUT}/16_equilibration_checklist.png", dpi=200, bbox_inches="tight",
            facecolor="white")
plt.close(fig)
print("✓ 16_equilibration_checklist.png")
