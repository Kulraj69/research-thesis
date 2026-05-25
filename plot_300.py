#!/usr/bin/env python3
"""
Plot all GROMACS 300K simulation data — publication-quality figures.
Output goes to ./plots/
"""

import os
import numpy as np
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.ticker import AutoMinorLocator
from matplotlib.gridspec import GridSpec

DATA = "300"
OUT  = "plots"
os.makedirs(OUT, exist_ok=True)

COLORS = {
    "water":   "#1a73e8",
    "turea":   "#e8710a",
    "so4":     "#0d904f",
    "density": "#6f42c1",
    "pressure":"#d93025",
    "temp":    "#e8710a",
    "emin":    "#1a73e8",
    "msd":     "#0d904f",
}

def parse_xvg(path):
    x, y = [], []
    with open(path) as f:
        for line in f:
            if line.startswith(("#", "@")):
                continue
            parts = line.split()
            if len(parts) >= 2:
                x.append(float(parts[0]))
                y.append(float(parts[1]))
    return np.array(x), np.array(y)

def style_ax(ax, xlabel, ylabel, title=None, grid=True):
    ax.set_xlabel(xlabel, fontsize=13, fontweight="bold")
    ax.set_ylabel(ylabel, fontsize=13, fontweight="bold")
    if title:
        ax.set_title(title, fontsize=15, fontweight="bold", pad=12)
    ax.tick_params(axis="both", which="major", labelsize=11, width=1.2, length=5)
    ax.tick_params(axis="both", which="minor", width=0.8, length=3)
    ax.xaxis.set_minor_locator(AutoMinorLocator())
    ax.yaxis.set_minor_locator(AutoMinorLocator())
    if grid:
        ax.grid(True, alpha=0.25, linewidth=0.6)
    for spine in ax.spines.values():
        spine.set_linewidth(1.2)


# ── 1. RDF: Zn–Water ──
x, y = parse_xvg(f"{DATA}/rdf_zn_water_300.xvg")
fig, ax = plt.subplots(figsize=(10, 6))
ax.fill_between(x, 0, y, alpha=0.15, color=COLORS["water"])
ax.plot(x, y, color=COLORS["water"], linewidth=1.8, label="Zn²⁺ – Water (O)")
peak_idx = np.argmax(y)
ax.annotate(f"Peak: r = {x[peak_idx]:.3f} nm\ng(r) = {y[peak_idx]:.3f}",
            xy=(x[peak_idx], y[peak_idx]),
            xytext=(x[peak_idx]+0.15, y[peak_idx]-0.5),
            fontsize=11, fontweight="bold",
            arrowprops=dict(arrowstyle="->", color="#333", lw=1.5),
            bbox=dict(boxstyle="round,pad=0.4", fc="white", ec=COLORS["water"], alpha=0.9))
ax.axhline(1.0, color="#888", ls="--", lw=1, alpha=0.6, label="g(r) = 1 (bulk)")
ax.set_xlim(0, 1.0)
ax.legend(fontsize=11, loc="upper right")
style_ax(ax, "r (nm)", "g(r)", "RDF: Zn²⁺ – Water at 300 K")
fig.tight_layout()
fig.savefig(f"{OUT}/01_rdf_zn_water.png", dpi=200, bbox_inches="tight")
plt.close(fig)
print("✓ 01_rdf_zn_water.png")


# ── 2. RDF: Zn–Thiourea ──
x, y = parse_xvg(f"{DATA}/rdf_zn_turea_300.xvg")
fig, ax = plt.subplots(figsize=(10, 6))
ax.fill_between(x, 0, y, alpha=0.15, color=COLORS["turea"])
ax.plot(x, y, color=COLORS["turea"], linewidth=1.8, label="Zn²⁺ – Thiourea")
peak_idx = np.argmax(y)
ax.annotate(f"Peak: r = {x[peak_idx]:.3f} nm\ng(r) = {y[peak_idx]:.3f}",
            xy=(x[peak_idx], y[peak_idx]),
            xytext=(x[peak_idx]+0.15, y[peak_idx]-0.2),
            fontsize=11, fontweight="bold",
            arrowprops=dict(arrowstyle="->", color="#333", lw=1.5),
            bbox=dict(boxstyle="round,pad=0.4", fc="white", ec=COLORS["turea"], alpha=0.9))
ax.axhline(1.0, color="#888", ls="--", lw=1, alpha=0.6, label="g(r) = 1 (bulk)")
ax.set_xlim(0, 1.2)
ax.legend(fontsize=11, loc="upper right")
style_ax(ax, "r (nm)", "g(r)", "RDF: Zn²⁺ – Thiourea at 300 K")
fig.tight_layout()
fig.savefig(f"{OUT}/02_rdf_zn_thiourea.png", dpi=200, bbox_inches="tight")
plt.close(fig)
print("✓ 02_rdf_zn_thiourea.png")


# ── 3. RDF: Zn–SO₄²⁻ ──
x, y = parse_xvg(f"{DATA}/rdf_zn_so4_300.xvg")
fig, ax = plt.subplots(figsize=(10, 6))
ax.fill_between(x, 0, y, alpha=0.12, color=COLORS["so4"])
ax.plot(x, y, color=COLORS["so4"], linewidth=1.8, label="Zn²⁺ – SO₄²⁻")
peak_idx = np.argmax(y)
ax.annotate(f"Peak: r = {x[peak_idx]:.3f} nm\ng(r) = {y[peak_idx]:.1f}",
            xy=(x[peak_idx], y[peak_idx]),
            xytext=(x[peak_idx]+0.1, y[peak_idx]*0.7),
            fontsize=11, fontweight="bold",
            arrowprops=dict(arrowstyle="->", color="#333", lw=1.5),
            bbox=dict(boxstyle="round,pad=0.4", fc="white", ec=COLORS["so4"], alpha=0.9))
ax.axhline(1.0, color="#888", ls="--", lw=1, alpha=0.6, label="g(r) = 1 (bulk)")
ax.set_xlim(0, 1.2)
ax.legend(fontsize=11, loc="upper right")
style_ax(ax, "r (nm)", "g(r)", "RDF: Zn²⁺ – SO₄²⁻ at 300 K")
fig.tight_layout()
fig.savefig(f"{OUT}/03_rdf_zn_so4.png", dpi=200, bbox_inches="tight")
plt.close(fig)
print("✓ 03_rdf_zn_so4.png")


# ── 4. All 3 RDFs overlaid ──
fig, ax = plt.subplots(figsize=(12, 6))
for fname, label, c, ls in [
    ("rdf_zn_water_300.xvg", "Zn²⁺ – Water (O)", COLORS["water"], "-"),
    ("rdf_zn_turea_300.xvg", "Zn²⁺ – Thiourea",  COLORS["turea"], "--"),
    ("rdf_zn_so4_300.xvg",   "Zn²⁺ – SO₄²⁻",     COLORS["so4"],   "-."),
]:
    x, y = parse_xvg(f"{DATA}/{fname}")
    mask = x <= 1.0
    ax.plot(x[mask], y[mask], color=c, linewidth=2, linestyle=ls, label=label)
ax.axhline(1.0, color="#888", ls=":", lw=1, alpha=0.5)
ax.set_xlim(0, 1.0)
ax.legend(fontsize=12, loc="upper right", framealpha=0.9)
style_ax(ax, "r (nm)", "g(r)", "Comparison of All RDFs at 300 K")
fig.tight_layout()
fig.savefig(f"{OUT}/04_rdf_overlay.png", dpi=200, bbox_inches="tight")
plt.close(fig)
print("✓ 04_rdf_overlay.png")


# ── 5. NPT Density ──
x, y = parse_xvg(f"{DATA}/density_npt_300.xvg")
fig, ax = plt.subplots(figsize=(12, 5))
ax.plot(x, y, color=COLORS["density"], linewidth=0.6, alpha=0.5)
window = 50
if len(y) > window:
    smooth = np.convolve(y, np.ones(window)/window, mode="valid")
    ax.plot(x[window-1:], smooth, color=COLORS["density"], linewidth=2.2,
            label=f"Running avg (window={window} ps)")
mean_d = np.mean(y[200:])
ax.axhline(mean_d, color="#d93025", ls="--", lw=1.5, alpha=0.8,
           label=f"Mean (t>200 ps) = {mean_d:.1f} kg/m³")
ax.set_ylim(1100, 1450)
ax.legend(fontsize=11, loc="lower right")
style_ax(ax, "Time (ps)", "Density (kg/m³)", "NPT Density Convergence at 300 K")
fig.tight_layout()
fig.savefig(f"{OUT}/05_density_npt.png", dpi=200, bbox_inches="tight")
plt.close(fig)
print("✓ 05_density_npt.png")


# ── 6. NPT Pressure ──
x, y = parse_xvg(f"{DATA}/pressure_npt_300.xvg")
fig, ax = plt.subplots(figsize=(12, 5))
ax.plot(x, y, color=COLORS["pressure"], linewidth=0.4, alpha=0.35)
window = 100
if len(y) > window:
    smooth = np.convolve(y, np.ones(window)/window, mode="valid")
    ax.plot(x[window-1:], smooth, color=COLORS["pressure"], linewidth=2,
            label=f"Running avg (window={window} ps)")
mean_p = np.mean(y[200:])
ax.axhline(mean_p, color="#333", ls="--", lw=1.5, alpha=0.7,
           label=f"Mean (t>200 ps) = {mean_p:.1f} bar")
ax.axhline(0, color="#aaa", ls=":", lw=1, alpha=0.5)
ax.legend(fontsize=11, loc="upper right")
style_ax(ax, "Time (ps)", "Pressure (bar)", "NPT Pressure Fluctuation at 300 K")
fig.tight_layout()
fig.savefig(f"{OUT}/06_pressure_npt.png", dpi=200, bbox_inches="tight")
plt.close(fig)
print("✓ 06_pressure_npt.png")


# ── 7. NVT Temperature ──
x, y = parse_xvg(f"{DATA}/temperature_nvt_300.xvg")
fig, ax = plt.subplots(figsize=(10, 5))
ax.plot(x, y, color=COLORS["temp"], linewidth=1.4, alpha=0.8, marker="o",
        markersize=2.5, markerfacecolor=COLORS["temp"], markeredgecolor="none")
mean_t = np.mean(y)
std_t = np.std(y)
ax.axhline(300, color="#1a73e8", ls="--", lw=1.5, alpha=0.7, label="Target: 300 K")
ax.axhline(mean_t, color="#d93025", ls="-.", lw=1.5, alpha=0.7,
           label=f"Mean: {mean_t:.2f} ± {std_t:.2f} K")
ax.fill_between(x, mean_t - std_t, mean_t + std_t, alpha=0.1, color=COLORS["temp"])
ax.set_ylim(285, 315)
ax.legend(fontsize=11, loc="upper right")
style_ax(ax, "Time (ps)", "Temperature (K)", "NVT Temperature Equilibration at 300 K")
fig.tight_layout()
fig.savefig(f"{OUT}/07_temperature_nvt.png", dpi=200, bbox_inches="tight")
plt.close(fig)
print("✓ 07_temperature_nvt.png")


# ── 8. Energy Minimization ──
x, y = parse_xvg(f"{DATA}/potential_em.xvg")
fig, ax = plt.subplots(figsize=(10, 6))
y_kj = y / 1000.0
ax.plot(x, y_kj, color=COLORS["emin"], linewidth=2)
ax.fill_between(x, y_kj, alpha=0.08, color=COLORS["emin"])
ax.annotate(f"Final: {y_kj[-1]:.1f} × 10³ kJ/mol",
            xy=(x[-1], y_kj[-1]),
            xytext=(x[-1]*0.5, y_kj[-1]+100),
            fontsize=11, fontweight="bold",
            arrowprops=dict(arrowstyle="->", color="#333", lw=1.5),
            bbox=dict(boxstyle="round,pad=0.4", fc="white", ec=COLORS["emin"], alpha=0.9))
ax.legend(["Potential Energy"], fontsize=11, loc="upper right")
style_ax(ax, "Energy Minimization Step", "Potential Energy (×10³ kJ/mol)",
         "Energy Minimization Convergence")
fig.tight_layout()
fig.savefig(f"{OUT}/08_energy_minimization.png", dpi=200, bbox_inches="tight")
plt.close(fig)
print("✓ 08_energy_minimization.png")


# ── 9. MSD of Zn²⁺ ──
x, y = parse_xvg(f"{DATA}/msd_zn_300.xvg")
fig, ax = plt.subplots(figsize=(10, 6))
ax.plot(x/1000, y, color=COLORS["msd"], linewidth=1.5, alpha=0.7)
# linear fit on later portion (20-80% of data)
start = len(x)//5
end = 4*len(x)//5
coeffs = np.polyfit(x[start:end], y[start:end], 1)
fit_line = np.polyval(coeffs, x)
D_cm2s = coeffs[0] / 6 * 1e-5 * 1e14
ax.plot(x/1000, fit_line, color="#d93025", linewidth=2, ls="--",
        label=f"Linear fit → D = {coeffs[0]/6:.4f} × 10⁻⁵ cm²/s")
ax.legend(fontsize=11, loc="upper left")
style_ax(ax, "τ (ns)", "MSD (nm²)", "Mean Squared Displacement of Zn²⁺ at 300 K")
fig.tight_layout()
fig.savefig(f"{OUT}/09_msd_zn.png", dpi=200, bbox_inches="tight")
plt.close(fig)
print("✓ 09_msd_zn.png")


# ── 10. Bar chart: First-shell peak positions & heights ──
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(12, 5))
species = ["Water (O)", "Thiourea", "SO₄²⁻"]
colors_bar = [COLORS["water"], COLORS["turea"], COLORS["so4"]]

peak_r = []
peak_g = []
for fname in ["rdf_zn_water_300.xvg", "rdf_zn_turea_300.xvg", "rdf_zn_so4_300.xvg"]:
    xd, yd = parse_xvg(f"{DATA}/{fname}")
    idx = np.argmax(yd)
    peak_r.append(xd[idx])
    peak_g.append(yd[idx])

bars1 = ax1.bar(species, peak_r, color=colors_bar, edgecolor="#333", linewidth=1.2, width=0.5)
for bar, val in zip(bars1, peak_r):
    ax1.text(bar.get_x() + bar.get_width()/2, bar.get_height() + 0.003,
             f"{val:.3f}", ha="center", va="bottom", fontweight="bold", fontsize=11)
style_ax(ax1, "", "Peak Position r (nm)", "1st Shell Peak Distance", grid=False)

bars2 = ax2.bar(species, peak_g, color=colors_bar, edgecolor="#333", linewidth=1.2, width=0.5)
for bar, val in zip(bars2, peak_g):
    ax2.text(bar.get_x() + bar.get_width()/2, bar.get_height() + 0.3,
             f"{val:.2f}", ha="center", va="bottom", fontweight="bold", fontsize=11)
style_ax(ax2, "", "Peak g(r)", "1st Shell Peak Height", grid=False)

fig.suptitle("Coordination Shell Summary — 300 K", fontsize=15, fontweight="bold", y=1.02)
fig.tight_layout()
fig.savefig(f"{OUT}/10_bar_peak_summary.png", dpi=200, bbox_inches="tight")
plt.close(fig)
print("✓ 10_bar_peak_summary.png")


# ── 11. RDF zoomed first shell (0-0.5 nm) ──
fig, axes = plt.subplots(1, 3, figsize=(16, 5), sharey=False)
configs = [
    ("rdf_zn_water_300.xvg", "Zn²⁺ – Water", COLORS["water"]),
    ("rdf_zn_turea_300.xvg", "Zn²⁺ – Thiourea", COLORS["turea"]),
    ("rdf_zn_so4_300.xvg",   "Zn²⁺ – SO₄²⁻", COLORS["so4"]),
]
for ax, (fname, label, c) in zip(axes, configs):
    xd, yd = parse_xvg(f"{DATA}/{fname}")
    mask = xd <= 0.5
    ax.fill_between(xd[mask], 0, yd[mask], alpha=0.2, color=c)
    ax.plot(xd[mask], yd[mask], color=c, linewidth=2)
    idx = np.argmax(yd[mask])
    ax.axvline(xd[mask][idx], color="#999", ls=":", lw=1)
    ax.set_title(label, fontsize=13, fontweight="bold")
    style_ax(ax, "r (nm)", "g(r)" if ax == axes[0] else "", grid=True)
fig.suptitle("First Coordination Shell (0–0.5 nm) at 300 K", fontsize=15, fontweight="bold", y=1.02)
fig.tight_layout()
fig.savefig(f"{OUT}/11_rdf_first_shell_panels.png", dpi=200, bbox_inches="tight")
plt.close(fig)
print("✓ 11_rdf_first_shell_panels.png")


# ── 12. Density histogram ──
x, y = parse_xvg(f"{DATA}/density_npt_300.xvg")
equil = y[200:]
fig, ax = plt.subplots(figsize=(8, 5))
n, bins, patches = ax.hist(equil, bins=50, color=COLORS["density"], alpha=0.7,
                           edgecolor="white", linewidth=0.8)
ax.axvline(np.mean(equil), color="#d93025", ls="--", lw=2,
           label=f"Mean = {np.mean(equil):.1f} kg/m³")
ax.axvline(np.median(equil), color="#1a73e8", ls="-.", lw=2,
           label=f"Median = {np.median(equil):.1f} kg/m³")
ax.legend(fontsize=11)
style_ax(ax, "Density (kg/m³)", "Count", "Density Distribution (t > 200 ps)")
fig.tight_layout()
fig.savefig(f"{OUT}/12_density_histogram.png", dpi=200, bbox_inches="tight")
plt.close(fig)
print("✓ 12_density_histogram.png")


# ── 13. Temperature histogram ──
x, y = parse_xvg(f"{DATA}/temperature_nvt_300.xvg")
fig, ax = plt.subplots(figsize=(8, 5))
ax.hist(y, bins=30, color=COLORS["temp"], alpha=0.7, edgecolor="white", linewidth=0.8)
ax.axvline(300, color="#d93025", ls="--", lw=2, label="Target: 300 K")
ax.axvline(np.mean(y), color="#1a73e8", ls="-.", lw=2,
           label=f"Mean = {np.mean(y):.2f} K")
ax.legend(fontsize=11)
style_ax(ax, "Temperature (K)", "Count", "Temperature Distribution — NVT Equilibration")
fig.tight_layout()
fig.savefig(f"{OUT}/13_temperature_histogram.png", dpi=200, bbox_inches="tight")
plt.close(fig)
print("✓ 13_temperature_histogram.png")


# ── 14. Combined convergence dashboard (4 panels) ──
fig = plt.figure(figsize=(16, 12))
gs = GridSpec(2, 2, hspace=0.32, wspace=0.28)

# panel a: energy minimization
ax = fig.add_subplot(gs[0, 0])
xd, yd = parse_xvg(f"{DATA}/potential_em.xvg")
ax.plot(xd, yd/1000, color=COLORS["emin"], linewidth=1.8)
ax.set_title("(a) Energy Minimization", fontsize=13, fontweight="bold")
style_ax(ax, "Step", "E_pot (×10³ kJ/mol)")

# panel b: NVT temperature
ax = fig.add_subplot(gs[0, 1])
xd, yd = parse_xvg(f"{DATA}/temperature_nvt_300.xvg")
ax.plot(xd, yd, color=COLORS["temp"], linewidth=1.2)
ax.axhline(300, color="#1a73e8", ls="--", lw=1.2, alpha=0.7)
ax.set_ylim(285, 315)
ax.set_title("(b) NVT Temperature", fontsize=13, fontweight="bold")
style_ax(ax, "Time (ps)", "Temperature (K)")

# panel c: NPT density
ax = fig.add_subplot(gs[1, 0])
xd, yd = parse_xvg(f"{DATA}/density_npt_300.xvg")
ax.plot(xd, yd, color=COLORS["density"], linewidth=0.5, alpha=0.5)
w = 50
if len(yd) > w:
    sm = np.convolve(yd, np.ones(w)/w, mode="valid")
    ax.plot(xd[w-1:], sm, color=COLORS["density"], linewidth=2)
ax.set_title("(c) NPT Density", fontsize=13, fontweight="bold")
style_ax(ax, "Time (ps)", "Density (kg/m³)")

# panel d: NPT pressure
ax = fig.add_subplot(gs[1, 1])
xd, yd = parse_xvg(f"{DATA}/pressure_npt_300.xvg")
ax.plot(xd, yd, color=COLORS["pressure"], linewidth=0.3, alpha=0.3)
w = 100
if len(yd) > w:
    sm = np.convolve(yd, np.ones(w)/w, mode="valid")
    ax.plot(xd[w-1:], sm, color=COLORS["pressure"], linewidth=2)
ax.axhline(0, color="#aaa", ls=":", lw=1)
ax.set_title("(d) NPT Pressure", fontsize=13, fontweight="bold")
style_ax(ax, "Time (ps)", "Pressure (bar)")

fig.suptitle("Simulation Convergence — 300 K System", fontsize=17, fontweight="bold", y=0.98)
fig.savefig(f"{OUT}/14_convergence_dashboard.png", dpi=200, bbox_inches="tight")
plt.close(fig)
print("✓ 14_convergence_dashboard.png")


# ── 15. MSD with inset for short-time behaviour ──
x, y = parse_xvg(f"{DATA}/msd_zn_300.xvg")
fig, ax = plt.subplots(figsize=(10, 6))
ax.plot(x/1000, y, color=COLORS["msd"], linewidth=1.5)
start, end = len(x)//5, 4*len(x)//5
coeffs = np.polyfit(x[start:end], y[start:end], 1)
fit_line = np.polyval(coeffs, x)
ax.plot(x/1000, fit_line, "#d93025", ls="--", lw=2,
        label=f"Linear fit (D ≈ {coeffs[0]/6:.4f} × 10⁻⁵ cm²/s)")

inset = ax.inset_axes([0.15, 0.55, 0.35, 0.35])
mask = x <= 500
inset.plot(x[mask], y[mask], color=COLORS["msd"], linewidth=1.5)
inset.set_xlabel("τ (ps)", fontsize=9)
inset.set_ylabel("MSD (nm²)", fontsize=9)
inset.set_title("Short-time regime", fontsize=10, fontweight="bold")
inset.tick_params(labelsize=8)
inset.grid(True, alpha=0.2)

ax.legend(fontsize=11, loc="upper left")
style_ax(ax, "τ (ns)", "MSD (nm²)", "Mean Squared Displacement — Zn²⁺ at 300 K")
fig.tight_layout()
fig.savefig(f"{OUT}/15_msd_with_inset.png", dpi=200, bbox_inches="tight")
plt.close(fig)
print("✓ 15_msd_with_inset.png")


print(f"\n═══ Done! {15} plots saved to ./{OUT}/ ═══")
