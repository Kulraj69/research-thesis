#!/usr/bin/env python3
"""
Plot 300K GROMACS data — v2 with fixes:
- Better NPT pressure (heavier smoothing)
- MSD: no linear fit, show MSD value
- First coordination shell: rechecked with proper axis limits
- Removed: plots 10 (bar) and 12 (density histogram)
- New: pressure histogram with bell curve
- Plot 15 MSD inset: no fit, show MSD value
"""

import os
import numpy as np
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.ticker import AutoMinorLocator
from matplotlib.gridspec import GridSpec
from scipy.stats import norm

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


# ── 6. NPT Pressure (FIXED: much heavier smoothing, cleaner look) ──
x, y = parse_xvg(f"{DATA}/pressure_npt_300.xvg")
fig, ax = plt.subplots(figsize=(12, 5))
ax.plot(x, y, color=COLORS["pressure"], linewidth=0.3, alpha=0.2, label="Raw data")
for w, lw, alpha, label in [(200, 2.2, 0.9, "200 ps avg"), (500, 2.5, 1.0, "500 ps avg")]:
    if len(y) > w:
        smooth = np.convolve(y, np.ones(w)/w, mode="valid")
        ax.plot(x[w-1:], smooth, color=COLORS["pressure"], linewidth=lw, alpha=alpha, label=label)
mean_p = np.mean(y[500:])
ax.axhline(mean_p, color="#333", ls="--", lw=1.5, alpha=0.7,
           label=f"Mean (t>500 ps) = {mean_p:.1f} bar")
ax.axhline(0, color="#aaa", ls=":", lw=1, alpha=0.5)
ax.set_ylim(-600, 600)
ax.legend(fontsize=10, loc="upper right")
style_ax(ax, "Time (ps)", "Pressure (bar)", "NPT Pressure — 300 K")
fig.tight_layout()
fig.savefig(f"{OUT}/06_pressure_npt.png", dpi=200, bbox_inches="tight")
plt.close(fig)
print("✓ 06_pressure_npt.png (fixed)")


# ── 9. MSD of Zn²⁺ (NO linear fit, show MSD value) ──
x, y = parse_xvg(f"{DATA}/msd_zn_300.xvg")
fig, ax = plt.subplots(figsize=(10, 6))
ax.plot(x/1000, y, color=COLORS["msd"], linewidth=2)
ax.fill_between(x/1000, 0, y, alpha=0.08, color=COLORS["msd"])
final_msd = y[-1]
max_msd = np.max(y)
ax.annotate(f"MSD = {final_msd:.4f} nm²\nat τ = {x[-1]/1000:.0f} ns",
            xy=(x[-1]/1000, final_msd),
            xytext=(x[-1]/1000*0.55, max_msd*0.85),
            fontsize=12, fontweight="bold",
            arrowprops=dict(arrowstyle="->", color="#333", lw=1.5),
            bbox=dict(boxstyle="round,pad=0.5", fc="white", ec=COLORS["msd"], alpha=0.9))
style_ax(ax, "τ (ns)", "MSD (nm²)", "Mean Squared Displacement — Zn²⁺ at 300 K")
fig.tight_layout()
fig.savefig(f"{OUT}/09_msd_zn.png", dpi=200, bbox_inches="tight")
plt.close(fig)
print("✓ 09_msd_zn.png (fixed)")


# ── 11. RDF first coordination shell (RECHECKED, proper limits) ──
fig, axes = plt.subplots(1, 3, figsize=(16, 5), sharey=False)
configs = [
    ("rdf_zn_water_300.xvg", "Zn²⁺ – Water (O)", COLORS["water"],
     "Peak: r=0.206, g(r)=4.73\nMin: r=0.312, g(r)=0.08"),
    ("rdf_zn_turea_300.xvg", "Zn²⁺ – Thiourea", COLORS["turea"],
     "Peak: r=0.228, g(r)=1.65\nMin: r=0.290, g(r)=0.04"),
    ("rdf_zn_so4_300.xvg",   "Zn²⁺ – SO₄²⁻", COLORS["so4"],
     "Peak: r=0.176, g(r)=30.1\nMin: r=0.270, g(r)≈0"),
]
for ax, (fname, label, c, ann) in zip(axes, configs):
    xd, yd = parse_xvg(f"{DATA}/{fname}")
    mask = xd <= 0.5
    xm, ym = xd[mask], yd[mask]
    ax.fill_between(xm, 0, ym, alpha=0.2, color=c)
    ax.plot(xm, ym, color=c, linewidth=2.2)
    idx = np.argmax(ym)
    ax.axvline(xm[idx], color="#999", ls=":", lw=1)
    ax.axhline(1.0, color="#888", ls="--", lw=0.8, alpha=0.5)
    ax.text(0.95, 0.95, ann, transform=ax.transAxes, fontsize=9,
            va="top", ha="right", fontweight="bold",
            bbox=dict(boxstyle="round,pad=0.3", fc="white", ec=c, alpha=0.85))
    ax.set_xlim(0, 0.5)
    ax.set_title(label, fontsize=13, fontweight="bold")
    style_ax(ax, "r (nm)", "g(r)" if ax == axes[0] else "", grid=True)
fig.suptitle("First Coordination Shell (0–0.5 nm) at 300 K", fontsize=15, fontweight="bold", y=1.02)
fig.tight_layout()
fig.savefig(f"{OUT}/11_rdf_first_shell_panels.png", dpi=200, bbox_inches="tight")
plt.close(fig)
print("✓ 11_rdf_first_shell_panels.png (rechecked)")


# ── NEW: Pressure histogram with bell curve ──
x, y = parse_xvg(f"{DATA}/pressure_npt_300.xvg")
equil = y[500:]
fig, ax = plt.subplots(figsize=(9, 6))
n, bins, patches = ax.hist(equil, bins=60, density=True, color=COLORS["pressure"],
                           alpha=0.55, edgecolor="white", linewidth=0.8, label="Pressure distribution")
mu, sigma = norm.fit(equil)
xfit = np.linspace(mu - 4*sigma, mu + 4*sigma, 300)
ax.plot(xfit, norm.pdf(xfit, mu, sigma), color="#1a2744", linewidth=2.5,
        label=f"Gaussian fit\nμ = {mu:.1f} bar, σ = {sigma:.0f} bar")
ax.axvline(0, color="#0d904f", ls="--", lw=2, alpha=0.7, label="Target: 0 bar")
ax.axvline(mu, color=COLORS["pressure"], ls="-.", lw=2, alpha=0.7, label=f"Mean = {mu:.1f} bar")
ax.legend(fontsize=11, loc="upper right")
style_ax(ax, "Pressure (bar)", "Probability Density",
         "Pressure Distribution (t > 500 ps) — 300 K")
fig.tight_layout()
fig.savefig(f"{OUT}/17_pressure_histogram_bell.png", dpi=200, bbox_inches="tight")
plt.close(fig)
print("✓ 17_pressure_histogram_bell.png (new)")


# ── 15. MSD with inset (NO fit, show MSD value) ──
x, y = parse_xvg(f"{DATA}/msd_zn_300.xvg")
fig, ax = plt.subplots(figsize=(10, 6))
ax.plot(x/1000, y, color=COLORS["msd"], linewidth=2)
ax.fill_between(x/1000, 0, y, alpha=0.06, color=COLORS["msd"])

final_msd = y[-1]
ax.annotate(f"MSD(10 ns) = {final_msd:.4f} nm²",
            xy=(x[-1]/1000, final_msd),
            xytext=(x[-1]/1000*0.45, np.max(y)*0.9),
            fontsize=12, fontweight="bold",
            arrowprops=dict(arrowstyle="->", color="#333", lw=1.5),
            bbox=dict(boxstyle="round,pad=0.5", fc="white", ec=COLORS["msd"], alpha=0.9))

inset = ax.inset_axes([0.12, 0.52, 0.35, 0.38])
mask = x <= 500
inset.plot(x[mask], y[mask], color=COLORS["msd"], linewidth=1.8)
inset.fill_between(x[mask], 0, y[mask], alpha=0.1, color=COLORS["msd"])
inset.set_xlabel("τ (ps)", fontsize=9)
inset.set_ylabel("MSD (nm²)", fontsize=9)
inset.set_title("Short-time (0–500 ps)", fontsize=10, fontweight="bold")
inset.tick_params(labelsize=8)
inset.grid(True, alpha=0.2)

style_ax(ax, "τ (ns)", "MSD (nm²)", "Mean Squared Displacement — Zn²⁺ at 300 K")
fig.tight_layout()
fig.savefig(f"{OUT}/15_msd_with_inset.png", dpi=200, bbox_inches="tight")
plt.close(fig)
print("✓ 15_msd_with_inset.png (fixed)")


# ── Delete plots 10 and 12 ──
for f in ["10_bar_peak_summary.png", "12_density_histogram.png"]:
    path = os.path.join(OUT, f)
    if os.path.exists(path):
        os.remove(path)
        print(f"✗ Deleted {f}")


# ── 14. Convergence dashboard (rebuilt to match new pressure) ──
fig = plt.figure(figsize=(16, 12))
gs = GridSpec(2, 2, hspace=0.32, wspace=0.28)

ax = fig.add_subplot(gs[0, 0])
xd, yd = parse_xvg(f"{DATA}/potential_em.xvg")
ax.plot(xd, yd/1000, color=COLORS["emin"], linewidth=1.8)
ax.set_title("(a) Energy Minimization", fontsize=13, fontweight="bold")
style_ax(ax, "Step", "E_pot (×10³ kJ/mol)")

ax = fig.add_subplot(gs[0, 1])
xd, yd = parse_xvg(f"{DATA}/temperature_nvt_300.xvg")
ax.plot(xd, yd, color=COLORS["temp"], linewidth=1.2)
ax.axhline(300, color="#1a73e8", ls="--", lw=1.2, alpha=0.7)
ax.set_ylim(285, 315)
ax.set_title("(b) NVT Temperature", fontsize=13, fontweight="bold")
style_ax(ax, "Time (ps)", "Temperature (K)")

ax = fig.add_subplot(gs[1, 0])
xd, yd = parse_xvg(f"{DATA}/density_npt_300.xvg")
ax.plot(xd, yd, color=COLORS["density"], linewidth=0.5, alpha=0.5)
w = 50
if len(yd) > w:
    sm = np.convolve(yd, np.ones(w)/w, mode="valid")
    ax.plot(xd[w-1:], sm, color=COLORS["density"], linewidth=2)
ax.set_title("(c) NPT Density", fontsize=13, fontweight="bold")
style_ax(ax, "Time (ps)", "Density (kg/m³)")

ax = fig.add_subplot(gs[1, 1])
xd, yd = parse_xvg(f"{DATA}/pressure_npt_300.xvg")
ax.plot(xd, yd, color=COLORS["pressure"], linewidth=0.3, alpha=0.2)
w = 500
if len(yd) > w:
    sm = np.convolve(yd, np.ones(w)/w, mode="valid")
    ax.plot(xd[w-1:], sm, color=COLORS["pressure"], linewidth=2)
ax.axhline(0, color="#aaa", ls=":", lw=1)
ax.set_ylim(-600, 600)
ax.set_title("(d) NPT Pressure", fontsize=13, fontweight="bold")
style_ax(ax, "Time (ps)", "Pressure (bar)")

fig.suptitle("Simulation Convergence — 300 K System", fontsize=17, fontweight="bold", y=0.98)
fig.savefig(f"{OUT}/14_convergence_dashboard.png", dpi=200, bbox_inches="tight")
plt.close(fig)
print("✓ 14_convergence_dashboard.png (rebuilt)")


print("\n═══ v2 fixes complete ═══")
