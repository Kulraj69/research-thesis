#!/usr/bin/env python3
"""Generate scientific schematic diagrams for thesis presentation."""

import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
from matplotlib.patches import FancyBboxPatch, Circle, FancyArrowPatch, Wedge, Rectangle
from matplotlib.collections import PatchCollection
import numpy as np

# Set style
plt.rcParams['font.family'] = 'sans-serif'
plt.rcParams['font.size'] = 11
plt.rcParams['axes.linewidth'] = 1.5

def create_dendrite_schematic():
    """Create zinc dendrite growth schematic."""
    fig, axes = plt.subplots(1, 3, figsize=(14, 5))
    
    for ax in axes:
        ax.set_xlim(0, 10)
        ax.set_ylim(0, 10)
        ax.set_aspect('equal')
        ax.axis('off')
    
    # Panel 1: Initial uniform deposition
    ax = axes[0]
    ax.set_title('(a) Initial Deposition', fontsize=13, fontweight='bold', pad=10)
    
    # Zinc anode base
    rect = FancyBboxPatch((0.5, 0.5), 9, 2, boxstyle="round,pad=0.05", 
                           facecolor='#7B7B7B', edgecolor='#333', linewidth=2)
    ax.add_patch(rect)
    ax.text(5, 1.5, 'Zn Anode', ha='center', va='center', fontsize=12, color='white', fontweight='bold')
    
    # Uniform Zn²⁺ ions
    for x in [2, 4, 5, 6, 8]:
        circle = Circle((x, 5), 0.4, facecolor='#4ECDC4', edgecolor='#333', linewidth=1.5)
        ax.add_patch(circle)
        ax.text(x, 5, 'Zn²⁺', ha='center', va='center', fontsize=8, fontweight='bold')
        # Arrow down
        ax.annotate('', xy=(x, 3), xytext=(x, 4.4),
                   arrowprops=dict(arrowstyle='->', color='#333', lw=1.5))
    
    # Electrolyte label
    ax.text(5, 8, 'Electrolyte', ha='center', fontsize=11, style='italic', color='#0066CC')
    
    # Panel 2: Non-uniform nucleation
    ax = axes[1]
    ax.set_title('(b) Non-uniform Nucleation', fontsize=13, fontweight='bold', pad=10)
    
    # Zinc anode with bumps
    rect = FancyBboxPatch((0.5, 0.5), 9, 2, boxstyle="round,pad=0.05", 
                           facecolor='#7B7B7B', edgecolor='#333', linewidth=2)
    ax.add_patch(rect)
    
    # Nucleation sites (small bumps)
    for x, h in [(2.5, 0.8), (5, 1.2), (7.5, 0.6)]:
        bump = mpatches.Polygon([[x-0.5, 2.5], [x, 2.5+h], [x+0.5, 2.5]], 
                                 closed=True, facecolor='#95A5A6', edgecolor='#333', linewidth=1.5)
        ax.add_patch(bump)
    
    # Zn²⁺ ions concentrating at tips
    for x, y in [(4.8, 5), (5.2, 4.5), (5, 6)]:
        circle = Circle((x, y), 0.35, facecolor='#4ECDC4', edgecolor='#333', linewidth=1.5)
        ax.add_patch(circle)
        ax.text(x, y, 'Zn²⁺', ha='center', va='center', fontsize=7, fontweight='bold')
    
    # Electric field lines
    ax.annotate('', xy=(5, 3.7), xytext=(5, 5.5),
               arrowprops=dict(arrowstyle='->', color='red', lw=2))
    ax.text(6.5, 4.5, 'Enhanced\nE-field', ha='center', fontsize=9, color='red')
    
    ax.text(5, 1.5, 'Zn Anode', ha='center', va='center', fontsize=12, color='white', fontweight='bold')
    
    # Panel 3: Dendrite growth
    ax = axes[2]
    ax.set_title('(c) Dendrite Formation', fontsize=13, fontweight='bold', pad=10)
    
    # Zinc anode
    rect = FancyBboxPatch((0.5, 0.5), 9, 2, boxstyle="round,pad=0.05", 
                           facecolor='#7B7B7B', edgecolor='#333', linewidth=2)
    ax.add_patch(rect)
    
    # Dendrites (tree-like structures)
    dendrite_color = '#95A5A6'
    
    # Main dendrite
    trunk = mpatches.Polygon([[4.5, 2.5], [5, 7], [5.5, 2.5]], 
                              closed=True, facecolor=dendrite_color, edgecolor='#333', linewidth=1.5)
    ax.add_patch(trunk)
    
    # Branches
    branch1 = mpatches.Polygon([[5, 5], [6.5, 6], [5.2, 5.2]], 
                                closed=True, facecolor=dendrite_color, edgecolor='#333', linewidth=1)
    ax.add_patch(branch1)
    branch2 = mpatches.Polygon([[5, 4], [3.5, 5], [4.8, 4.2]], 
                                closed=True, facecolor=dendrite_color, edgecolor='#333', linewidth=1)
    ax.add_patch(branch2)
    
    # Smaller dendrites
    for x, h in [(2, 4), (8, 3.5)]:
        small = mpatches.Polygon([[x-0.3, 2.5], [x, 2.5+h], [x+0.3, 2.5]], 
                                  closed=True, facecolor=dendrite_color, edgecolor='#333', linewidth=1)
        ax.add_patch(small)
    
    # Separator line
    ax.axhline(y=8.5, color='#E74C3C', linestyle='--', linewidth=2)
    ax.text(5, 9.2, 'Separator', ha='center', fontsize=11, color='#E74C3C', fontweight='bold')
    
    # Danger annotation
    ax.annotate('Short circuit\nrisk!', xy=(5, 7), xytext=(7, 7.5),
               fontsize=10, color='#E74C3C', fontweight='bold',
               arrowprops=dict(arrowstyle='->', color='#E74C3C', lw=1.5))
    
    ax.text(5, 1.5, 'Zn Anode', ha='center', va='center', fontsize=12, color='white', fontweight='bold')
    
    plt.tight_layout()
    plt.savefig('plots/schematic_dendrite.png', dpi=200, bbox_inches='tight', facecolor='white')
    plt.close()
    print("Created: plots/schematic_dendrite.png")


def create_her_schematic():
    """Create HER mechanism schematic."""
    fig, ax = plt.subplots(figsize=(12, 7))
    ax.set_xlim(0, 12)
    ax.set_ylim(0, 8)
    ax.set_aspect('equal')
    ax.axis('off')
    ax.set_title('Hydrogen Evolution Reaction (HER) at Zn Anode', fontsize=16, fontweight='bold', pad=15)
    
    # Zinc anode
    rect = FancyBboxPatch((0.5, 0.3), 11, 1.5, boxstyle="round,pad=0.05", 
                           facecolor='#7B7B7B', edgecolor='#333', linewidth=2)
    ax.add_patch(rect)
    ax.text(6, 1.05, 'Zn Metal Anode', ha='center', va='center', fontsize=13, color='white', fontweight='bold')
    
    # Electrolyte region
    rect2 = FancyBboxPatch((0.5, 2), 11, 5.5, boxstyle="round,pad=0.05", 
                            facecolor='#E8F4FD', edgecolor='#0066CC', linewidth=1.5, alpha=0.5)
    ax.add_patch(rect2)
    ax.text(6, 7.2, 'Aqueous Electrolyte', ha='center', fontsize=12, color='#0066CC', fontweight='bold')
    
    # Water molecules
    for x, y in [(2, 5), (4, 4.5), (8, 5.5), (10, 4)]:
        # H2O molecule representation
        circle = Circle((x, y), 0.35, facecolor='#3498DB', edgecolor='#333', linewidth=1)
        ax.add_patch(circle)
        ax.text(x, y, 'O', ha='center', va='center', fontsize=9, color='white', fontweight='bold')
        # H atoms
        for dx, dy in [(-0.4, 0.3), (0.4, 0.3)]:
            h = Circle((x+dx, y+dy), 0.15, facecolor='white', edgecolor='#333', linewidth=0.5)
            ax.add_patch(h)
    
    # Reaction zone
    # Electrons from Zn
    ax.annotate('', xy=(3, 1.8), xytext=(3, 3),
               arrowprops=dict(arrowstyle='->', color='#E74C3C', lw=2))
    ax.text(3.5, 2.4, '2e⁻', fontsize=11, color='#E74C3C', fontweight='bold')
    
    # Zn oxidation
    ax.text(1.5, 2.5, 'Zn → Zn²⁺ + 2e⁻', fontsize=10, color='#333', 
            bbox=dict(boxstyle='round', facecolor='#FFF3CD', edgecolor='#FFC107'))
    
    # HER at surface
    ax.text(5.5, 3.2, '2H₂O + 2e⁻ → H₂↑ + 2OH⁻', fontsize=11, color='#333',
            bbox=dict(boxstyle='round', facecolor='#D4EDDA', edgecolor='#28A745', linewidth=1.5))
    
    # H2 bubbles
    for x, y in [(6, 5), (6.5, 5.8), (5.8, 6.3)]:
        bubble = Circle((x, y), 0.25, facecolor='white', edgecolor='#333', linewidth=1, alpha=0.8)
        ax.add_patch(bubble)
        ax.text(x, y, 'H₂', ha='center', va='center', fontsize=7, fontweight='bold')
    
    # Arrow for H2 rising
    ax.annotate('', xy=(6.2, 7), xytext=(6.2, 6.5),
               arrowprops=dict(arrowstyle='->', color='#333', lw=1.5))
    
    # OH- ions
    for x, y in [(7.5, 3.5), (8.5, 3.2)]:
        circle = Circle((x, y), 0.3, facecolor='#9B59B6', edgecolor='#333', linewidth=1)
        ax.add_patch(circle)
        ax.text(x, y, 'OH⁻', ha='center', va='center', fontsize=7, color='white', fontweight='bold')
    
    # ZnO formation
    ax.annotate('Zn²⁺ + 2OH⁻ → Zn(OH)₂ → ZnO', xy=(9, 2.5), xytext=(8.5, 4),
               fontsize=10, color='#8B4513',
               bbox=dict(boxstyle='round', facecolor='#FAE5D3', edgecolor='#E67E22'),
               arrowprops=dict(arrowstyle='->', color='#E67E22', lw=1.5))
    
    # Passivation layer
    rect3 = FancyBboxPatch((8, 1.8), 3, 0.4, boxstyle="round,pad=0.02", 
                            facecolor='#E67E22', edgecolor='#8B4513', linewidth=1.5, alpha=0.7)
    ax.add_patch(rect3)
    ax.text(9.5, 2, 'ZnO layer', ha='center', va='center', fontsize=8, color='white', fontweight='bold')
    
    # Legend box
    legend_text = [
        "Problems caused by HER:",
        "• Consumes electrolyte",
        "• Raises local pH → ZnO forms",
        "• ZnO passivates surface",
        "• Reduces coulombic efficiency"
    ]
    ax.text(0.8, 6.5, '\n'.join(legend_text), fontsize=9, 
            verticalalignment='top',
            bbox=dict(boxstyle='round', facecolor='#FFEBEE', edgecolor='#E74C3C', alpha=0.9))
    
    plt.tight_layout()
    plt.savefig('plots/schematic_her.png', dpi=200, bbox_inches='tight', facecolor='white')
    plt.close()
    print("Created: plots/schematic_her.png")


def create_solvation_shell():
    """Create Zn2+ solvation shell schematic."""
    fig, ax = plt.subplots(figsize=(10, 10))
    ax.set_xlim(-5, 5)
    ax.set_ylim(-5, 5)
    ax.set_aspect('equal')
    ax.axis('off')
    ax.set_title('Zn²⁺ Solvation Shell Structure', fontsize=16, fontweight='bold', pad=15)
    
    # Central Zn2+ ion
    zn = Circle((0, 0), 0.6, facecolor='#00CED1', edgecolor='#006666', linewidth=3)
    ax.add_patch(zn)
    ax.text(0, 0, 'Zn²⁺', ha='center', va='center', fontsize=14, fontweight='bold', color='#006666')
    
    # First coordination shell - SO4 (dominant)
    r1 = 1.8
    so4_angles = [30, 150, 270]
    for angle in so4_angles:
        x = r1 * np.cos(np.radians(angle))
        y = r1 * np.sin(np.radians(angle))
        # SO4 tetrahedron representation
        so4 = Circle((x, y), 0.45, facecolor='#FFD700', edgecolor='#B8860B', linewidth=2)
        ax.add_patch(so4)
        ax.text(x, y, 'SO₄²⁻', ha='center', va='center', fontsize=9, fontweight='bold', color='#8B4513')
        # Bond line
        ax.plot([0, x*0.65], [0, y*0.65], 'k-', linewidth=2, alpha=0.5)
    
    # First shell - Water molecules
    r1_water = 2.0
    water_angles = [90, 210, 330]
    for angle in water_angles:
        x = r1_water * np.cos(np.radians(angle))
        y = r1_water * np.sin(np.radians(angle))
        # Water molecule
        water = Circle((x, y), 0.35, facecolor='#3498DB', edgecolor='#1A5276', linewidth=1.5)
        ax.add_patch(water)
        ax.text(x, y, 'H₂O', ha='center', va='center', fontsize=8, fontweight='bold', color='white')
        # Bond line (weaker)
        ax.plot([0, x*0.7], [0, y*0.7], 'b--', linewidth=1.5, alpha=0.4)
    
    # Second coordination shell - Thiourea (weak)
    r2 = 3.2
    tu_angles = [0, 120, 240]
    for angle in tu_angles:
        x = r2 * np.cos(np.radians(angle))
        y = r2 * np.sin(np.radians(angle))
        # Thiourea molecule
        tu = Circle((x, y), 0.4, facecolor='#9B59B6', edgecolor='#6C3483', linewidth=1.5)
        ax.add_patch(tu)
        ax.text(x, y, 'Tu', ha='center', va='center', fontsize=9, fontweight='bold', color='white')
        # Very weak bond
        ax.plot([0, x*0.85], [0, y*0.85], 'm:', linewidth=1, alpha=0.3)
    
    # Coordination shell circles
    shell1 = Circle((0, 0), 2.5, fill=False, edgecolor='#E74C3C', linewidth=2, linestyle='--')
    ax.add_patch(shell1)
    ax.text(2.5, -2.8, '1st Shell', fontsize=10, color='#E74C3C', fontweight='bold')
    
    shell2 = Circle((0, 0), 3.8, fill=False, edgecolor='#3498DB', linewidth=1.5, linestyle=':')
    ax.add_patch(shell2)
    ax.text(3.8, -4.0, '2nd Shell', fontsize=10, color='#3498DB', fontweight='bold')
    
    # Legend
    legend_items = [
        (Circle((0, 0), 0.15), '#00CED1', 'Zn²⁺ (central ion)'),
        (Circle((0, 0), 0.15), '#FFD700', 'SO₄²⁻ (g(r) ≈ 30, dominant)'),
        (Circle((0, 0), 0.15), '#3498DB', 'H₂O (g(r) ≈ 4.7)'),
        (Circle((0, 0), 0.15), '#9B59B6', 'Thiourea (g(r) ≈ 1.6, weak)'),
    ]
    
    y_pos = 4.5
    ax.text(-4.5, y_pos + 0.5, 'Legend:', fontsize=11, fontweight='bold')
    for i, (_, color, label) in enumerate(legend_items):
        circle = Circle((-4.2, y_pos - i*0.6), 0.2, facecolor=color, edgecolor='#333', linewidth=1)
        ax.add_patch(circle)
        ax.text(-3.8, y_pos - i*0.6, label, fontsize=9, va='center')
    
    # Peak positions annotation
    ax.text(-4.5, 1.5, 'Peak positions:\nSO₄: 0.176 nm\nH₂O: 0.206 nm\nTu: 0.228 nm', 
            fontsize=9, bbox=dict(boxstyle='round', facecolor='#F8F9FA', edgecolor='#DEE2E6'))
    
    plt.tight_layout()
    plt.savefig('plots/schematic_solvation.png', dpi=200, bbox_inches='tight', facecolor='white')
    plt.close()
    print("Created: plots/schematic_solvation.png")


def create_battery_schematic():
    """Create aqueous zinc battery cell schematic."""
    fig, ax = plt.subplots(figsize=(12, 8))
    ax.set_xlim(0, 12)
    ax.set_ylim(0, 9)
    ax.set_aspect('equal')
    ax.axis('off')
    ax.set_title('Aqueous Zinc-Ion Battery (AZIB) Cell Structure', fontsize=16, fontweight='bold', pad=15)
    
    # Cathode (right side)
    rect = FancyBboxPatch((9, 1), 2, 6, boxstyle="round,pad=0.05", 
                           facecolor='#2ECC71', edgecolor='#1E8449', linewidth=2)
    ax.add_patch(rect)
    ax.text(10, 4, 'Cathode\n(MnO₂,\nV₂O₅)', ha='center', va='center', fontsize=11, color='white', fontweight='bold')
    
    # Anode (left side)  
    rect = FancyBboxPatch((1, 1), 2, 6, boxstyle="round,pad=0.05", 
                           facecolor='#7B7B7B', edgecolor='#333', linewidth=2)
    ax.add_patch(rect)
    ax.text(2, 4, 'Zn\nAnode', ha='center', va='center', fontsize=12, color='white', fontweight='bold')
    
    # Separator
    rect = FancyBboxPatch((5.8, 1), 0.4, 6, boxstyle="round,pad=0.02", 
                           facecolor='#F39C12', edgecolor='#D68910', linewidth=1.5)
    ax.add_patch(rect)
    ax.text(6, 0.3, 'Separator', ha='center', fontsize=9, color='#D68910')
    
    # Electrolyte regions
    rect_e1 = FancyBboxPatch((3.2, 1), 2.4, 6, boxstyle="round,pad=0.02", 
                              facecolor='#AED6F1', edgecolor='#3498DB', linewidth=1, alpha=0.6)
    ax.add_patch(rect_e1)
    
    rect_e2 = FancyBboxPatch((6.4, 1), 2.4, 6, boxstyle="round,pad=0.02", 
                              facecolor='#AED6F1', edgecolor='#3498DB', linewidth=1, alpha=0.6)
    ax.add_patch(rect_e2)
    
    ax.text(6, 7.5, 'Aqueous Electrolyte (2M ZnSO₄ + Thiourea)', ha='center', fontsize=11, 
            color='#2471A3', fontweight='bold')
    
    # Zn2+ ions moving
    for x, y in [(4, 3), (4.5, 5), (5, 4), (7, 3.5), (7.5, 5.5)]:
        circle = Circle((x, y), 0.25, facecolor='#00CED1', edgecolor='#333', linewidth=1)
        ax.add_patch(circle)
        ax.text(x, y, 'Zn²⁺', ha='center', va='center', fontsize=6, fontweight='bold')
    
    # Arrows for ion movement
    ax.annotate('', xy=(8.5, 4), xytext=(3.5, 4),
               arrowprops=dict(arrowstyle='->', color='#E74C3C', lw=2, 
                              connectionstyle='arc3,rad=0.1'))
    ax.text(6, 4.8, 'Discharge', ha='center', fontsize=10, color='#E74C3C', fontweight='bold')
    
    ax.annotate('', xy=(3.5, 3), xytext=(8.5, 3),
               arrowprops=dict(arrowstyle='->', color='#27AE60', lw=2,
                              connectionstyle='arc3,rad=0.1'))
    ax.text(6, 2.2, 'Charge', ha='center', fontsize=10, color='#27AE60', fontweight='bold')
    
    # External circuit
    ax.plot([2, 2, 10, 10], [7.2, 8.2, 8.2, 7.2], 'k-', linewidth=2)
    
    # Electron flow
    ax.annotate('', xy=(8, 8.2), xytext=(4, 8.2),
               arrowprops=dict(arrowstyle='->', color='#9B59B6', lw=2))
    ax.text(6, 8.5, 'e⁻ (discharge)', ha='center', fontsize=10, color='#9B59B6', fontweight='bold')
    
    # Load/lightbulb
    bulb = Circle((6, 8.2), 0.3, facecolor='#F1C40F', edgecolor='#D4AC0D', linewidth=2)
    ax.add_patch(bulb)
    ax.text(6, 8.2, '⚡', ha='center', va='center', fontsize=12, fontweight='bold')
    
    # Reactions
    ax.text(1, 0.3, 'Zn → Zn²⁺ + 2e⁻', fontsize=9, ha='left',
            bbox=dict(boxstyle='round', facecolor='#FADBD8', edgecolor='#E74C3C'))
    ax.text(8.5, 0.3, 'MnO₂ + Zn²⁺ + e⁻ → ZnMnO₂', fontsize=8, ha='left',
            bbox=dict(boxstyle='round', facecolor='#D5F5E3', edgecolor='#27AE60'))
    
    # Current collectors
    rect_cc1 = FancyBboxPatch((0.5, 1), 0.4, 6, boxstyle="round,pad=0.02", 
                               facecolor='#D4AC0D', edgecolor='#9A7B0A', linewidth=1)
    ax.add_patch(rect_cc1)
    rect_cc2 = FancyBboxPatch((11.1, 1), 0.4, 6, boxstyle="round,pad=0.02", 
                               facecolor='#D4AC0D', edgecolor='#9A7B0A', linewidth=1)
    ax.add_patch(rect_cc2)
    
    plt.tight_layout()
    plt.savefig('plots/schematic_battery.png', dpi=200, bbox_inches='tight', facecolor='white')
    plt.close()
    print("Created: plots/schematic_battery.png")


def create_thiourea_structure():
    """Create thiourea molecular structure diagram."""
    fig, ax = plt.subplots(figsize=(8, 6))
    ax.set_xlim(-3, 3)
    ax.set_ylim(-2, 3)
    ax.set_aspect('equal')
    ax.axis('off')
    ax.set_title('Thiourea SC(NH₂)₂ — Molecular Structure', fontsize=14, fontweight='bold', pad=15)
    
    # Central carbon
    c = Circle((0, 0), 0.35, facecolor='#333333', edgecolor='#000', linewidth=2)
    ax.add_patch(c)
    ax.text(0, 0, 'C', ha='center', va='center', fontsize=12, color='white', fontweight='bold')
    
    # Sulfur (top) - double bond
    s = Circle((0, 1.5), 0.45, facecolor='#FFD700', edgecolor='#B8860B', linewidth=2)
    ax.add_patch(s)
    ax.text(0, 1.5, 'S', ha='center', va='center', fontsize=14, color='#8B4513', fontweight='bold')
    # Double bond
    ax.plot([-0.1, -0.1], [0.4, 1.0], 'k-', linewidth=3)
    ax.plot([0.1, 0.1], [0.4, 1.0], 'k-', linewidth=3)
    
    # Nitrogen 1 (left)
    n1 = Circle((-1.3, -0.7), 0.4, facecolor='#3498DB', edgecolor='#1A5276', linewidth=2)
    ax.add_patch(n1)
    ax.text(-1.3, -0.7, 'N', ha='center', va='center', fontsize=12, color='white', fontweight='bold')
    # Single bond
    ax.plot([-0.3, -0.95], [-0.15, -0.5], 'k-', linewidth=3)
    
    # Nitrogen 2 (right)
    n2 = Circle((1.3, -0.7), 0.4, facecolor='#3498DB', edgecolor='#1A5276', linewidth=2)
    ax.add_patch(n2)
    ax.text(1.3, -0.7, 'N', ha='center', va='center', fontsize=12, color='white', fontweight='bold')
    # Single bond
    ax.plot([0.3, 0.95], [-0.15, -0.5], 'k-', linewidth=3)
    
    # Hydrogen atoms on N1
    for dx, dy in [(-0.8, -0.5), (-0.5, -0.8)]:
        h = Circle((-1.3 + dx, -0.7 + dy), 0.2, facecolor='white', edgecolor='#333', linewidth=1.5)
        ax.add_patch(h)
        ax.text(-1.3 + dx, -0.7 + dy, 'H', ha='center', va='center', fontsize=8, fontweight='bold')
        ax.plot([-1.3, -1.3 + dx*0.6], [-0.7, -0.7 + dy*0.6], 'k-', linewidth=2)
    
    # Hydrogen atoms on N2
    for dx, dy in [(0.8, -0.5), (0.5, -0.8)]:
        h = Circle((1.3 + dx, -0.7 + dy), 0.2, facecolor='white', edgecolor='#333', linewidth=1.5)
        ax.add_patch(h)
        ax.text(1.3 + dx, -0.7 + dy, 'H', ha='center', va='center', fontsize=8, fontweight='bold')
        ax.plot([1.3, 1.3 + dx*0.6], [-0.7, -0.7 + dy*0.6], 'k-', linewidth=2)
    
    # Labels and info
    ax.text(1.2, 2.2, 'Coordination site\n(S-donor)', fontsize=10, ha='center',
            bbox=dict(boxstyle='round', facecolor='#FFF3CD', edgecolor='#FFC107'))
    ax.annotate('', xy=(0.3, 1.5), xytext=(0.8, 2),
               arrowprops=dict(arrowstyle='->', color='#FFC107', lw=1.5))
    
    # Legend
    legend_y = -1.8
    items = [
        ('#333333', 'Carbon'),
        ('#FFD700', 'Sulfur'),
        ('#3498DB', 'Nitrogen'),
        ('white', 'Hydrogen'),
    ]
    for i, (color, label) in enumerate(items):
        circle = Circle((-2.5 + i*1.5, legend_y), 0.15, facecolor=color, edgecolor='#333', linewidth=1)
        ax.add_patch(circle)
        ax.text(-2.5 + i*1.5 + 0.25, legend_y, label, fontsize=9, va='center')
    
    # Properties
    props = "MW: 76.12 g/mol | C=S: 1.67 Å | C–N: 1.38 Å | Planar"
    ax.text(0, 2.7, props, ha='center', fontsize=9, 
            bbox=dict(boxstyle='round', facecolor='#E8F8F5', edgecolor='#1ABC9C'))
    
    plt.tight_layout()
    plt.savefig('plots/schematic_thiourea.png', dpi=200, bbox_inches='tight', facecolor='white')
    plt.close()
    print("Created: plots/schematic_thiourea.png")


if __name__ == "__main__":
    print("Generating schematic diagrams...")
    create_dendrite_schematic()
    create_her_schematic()
    create_solvation_shell()
    create_battery_schematic()
    create_thiourea_structure()
    print("\nAll schematics generated successfully!")
    print("Files saved in plots/ folder")
