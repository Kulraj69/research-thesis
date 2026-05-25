# Thesis Presentation

## Molecular Dynamics Study of a Zinc Sulfate Electrolyte with Thiourea Additive: Temperature-Dependent Structure and Dynamics

**Kulraj Singh Sabharwal (21054013)**
IDD Chemistry, Department of Chemistry
Indian Institute of Technology (BHU), Varanasi

Supervisor: **Dr. Rosy** | Mentor: **Mr. Digvijay Andotra**

---

---

## Slide 1 — Title Slide

**Molecular Dynamics Study of a Zinc Sulfate Electrolyte with Thiourea Additive:**
**Temperature-Dependent Structure and Dynamics**

- Kulraj Singh Sabharwal (21054013)
- IDD Thesis, Department of Chemistry, IIT (BHU) Varanasi
- Supervisor: Dr. Rosy, Assistant Professor
- May 2026

---

## Slide 2 — Outline

1. Background & Motivation
2. Thiourea as an Electrolyte Additive
3. Objectives
4. Computational Methodology
5. Results: System Validation
6. Results: Diffusion Coefficients (The Anomaly)
7. Results: RDF Analysis — Zn-Thiourea, Zn-SO₄, Zn-Water
8. Competitive Coordination Hierarchy
9. Mechanistic Hypotheses for the Diffusion Anomaly
10. Conclusions & Future Work
11. References

---

## Slide 3 — Background & Motivation

### Why Aqueous Zinc-Ion Batteries (AZIBs)?

- **Safe**: non-flammable aqueous electrolyte
- **Cheap**: abundant zinc, no lithium dependency
- **High capacity**: Zn²⁺ delivers 820 mAh/g theoretical capacity

### The Challenge

- **Hydrogen Evolution Reaction (HER)** degrades anode
- **Dendrite growth** causes short circuits
- Root cause: uncontrolled Zn²⁺ solvation shell in the electrolyte

### The Key Insight

> Engineering the **Zn²⁺ primary solvation shell** — the molecules directly surrounding zinc — is the lever for improving AZIB performance.

- Organic additives (like thiourea) displace water → suppress HER → stabilize anode
- But: **how does temperature change the solvation structure?** Poorly understood!

---

## Slide 4 — Thiourea as an Electrolyte Additive

### Why Thiourea SC(NH₂)₂?

- **Soft sulfur donor** → strong affinity for Zn²⁺ (HSAB principle)
- Adsorbs on Zn anode surface → passivation
- Alters the solvation shell → more stable **Solid-Electrolyte Interphase (SEI)**
- Suppresses HER, promotes smooth zinc deposition

### Structure

```
        H₂N     NH₂
          \     /
           C
           ‖
           S        ← Donor atom (coordinates to Zn²⁺)
```

### Key Question

> How do the structural and dynamic properties of the Zn²⁺ solvation complex change with temperature when thiourea is present?

---

## Slide 5 — Objectives

1. **Build & validate** an MD model of 2M ZnSO₄ + thiourea in water
2. **Simulate** at four temperatures: **280K, 300K, 320K, 340K**
3. **Characterize structure** via Radial Distribution Function (RDF)
4. **Quantify dynamics** via Mean Square Displacement (MSD) → diffusion coefficients
5. **Identify non-Arrhenius behavior** and propose mechanistic explanations

---

## Slide 6 — Computational Methodology: Overview

### Software & Force Fields

| Component | Choice |
|---|---|
| MD Engine | **GROMACS 2026.0** |
| Force Field | **AMBER99SB** + GAFF (via ACPYPE) |
| Water Model | **TIP4P** (4-site, Jorgensen et al. 1983) |
| Electrostatics | **PME** (cutoff 1.0 nm) |
| Thermostat | **V-rescale** (τ = 0.1 ps) |
| Barostat | **Parrinello-Rahman** (τ = 2.0 ps) |

### Compute Resources

- **Param Shivaay HPC**, IIT (BHU) Varanasi
- 40 MPI ranks (30 PP + 10 PME), AVX-512
- Performance: **292 ns/day**

---

## Slide 7 — System Composition

### What's in the Box?

| Species | Count | Charge | Role |
|---|---|---|---|
| Zn²⁺ | 150 | +300e | Central ion under study |
| SO₄²⁻ | 150 | −300e | Counter-ion / inner-sphere competitor |
| Thiourea | 10 | 0 | Soft S-donor additive |
| TIP4P Water | 3,429 | 0 | Solvent |
| **Total** | **14,696 atoms** | **0 (neutral)** | |

- Cubic box: **5.0 × 5.0 × 5.0 nm³** (initial, Packmol)
- After NPT equilibration: **4.71 × 4.71 × 4.71 nm³**
- Effective concentration: **~2M ZnSO₄**

---

## Slide 8 — Simulation Protocol

### 4-Stage Pipeline (repeated at each temperature)

```
┌─────────────────────┐
│ 1. Energy            │    Steepest descent
│    Minimization      │    F_max < 1000 kJ/mol/nm
├─────────────────────┤
│ 2. NVT Equilibration │    500 ps, V-rescale thermostat
│    (heat the system) │    Verified: 298.111K ± 3K
├─────────────────────┤
│ 3. NPT Equilibration │    500 ps, Parrinello-Rahman
│    (relax the box)   │    ρ → 1394 kg/m³ (stable)
├─────────────────────┤
│ 4. Production MD     │    100 ns, NPT ensemble
│    (collect data)    │    100,000 frames (1 ps/frame)
└─────────────────────┘
```

- Time step: **2 fs** (LINCS for H-bonds, SETTLE for water)
- Four independent runs: **280K, 300K, 320K, 340K**

---

## Slide 9 — Analysis Methods

### Structural Analysis: Radial Distribution Function (RDF)

> g(r) = probability of finding atom B at distance r from atom A, normalized to bulk density

- Calculated for: **Zn–S(thiourea)**, **Zn–O(SO₄)**, **Zn–O(water)**
- Coordination number: n = 4πρ₀ ∫₀^r\_min g(r) r² dr

### Dynamic Analysis: Mean Square Displacement (MSD)

> MSD(t) = ⟨|r(t) − r(0)|²⟩

- **Einstein relation**: D = lim(t→∞) MSD(t) / 6t
- **Stokes-Einstein**: D = k\_BT / (6πηr\_H) → extract hydrodynamic radius

### Arrhenius Analysis

> ln(D) = ln(D₀) − Ea/(k\_BT)

- Linear fit of 280–320K data → extrapolate to 340K → quantify deviation

---

## Slide 10 — System Validation

### All Checks Pass ✓

| Criterion | Simulation | Reference | Status |
|---|---|---|---|
| Water density (300K) | ~1.00 g/cm³ | 0.997 g/cm³ (exp.) | ✓ |
| Zn-S first peak | 2.2–2.3 Å | 2.3–2.4 Å (X-ray) | ✓ |
| NVT temperature | 298.111 K | 298 K (target) | ✓ |
| Energy drift | < 0.01% / 50 ns | < 0.1% | ✓ |
| NPT density | 1393.7 ± 5 kg/m³ | consistent with 2M ZnSO₄ | ✓ |

> The ~0.1 Å systematic underestimate in Zn-S distance is typical of classical LJ force fields and does not affect the qualitative conclusions.

---

## Slide 11 — Key Result: The Diffusion Anomaly

### Temperature-Dependent Diffusion of Zn²⁺ Complex

| T (K) | T (°C) | D (×10⁻⁵ cm²/s) | Change | Trend |
|---|---|---|---|---|
| **280** | 7 | 0.00825 | — | Baseline |
| **300** | 27 | 0.01130 | **+37.0%** | ↑ Normal |
| **320** | 47 | 0.01380 | **+22.1%** | ↑ Normal |
| **340** | 67 | 0.01290 | **−6.5%** | **↓ ANOMALOUS** |

### What should happen (Arrhenius)?

- D should **increase** at every step: more thermal energy → faster diffusion
- 280K → 320K: **perfectly normal** Arrhenius behavior (Ea ≈ 15–18 kJ/mol)

### What actually happens at 340K?

- D **decreases** by 6.5% — the complex **slows down** despite higher temperature
- This is **non-Arrhenius** and the **central finding** of this thesis

> For reference: bare Zn²⁺ diffuses at D ≈ 0.70 × 10⁻⁵ cm²/s — the complex is **~60× slower**, confirming a bulky coordination shell.

---

## Slide 12 — Arrhenius Plot

### ln(D) vs 1/T

```
ln(D)
  │
  │         ○ 320K
  │       ╱
  │     ╱   ● 340K  ← Falls BELOW the line!
  │   ╱              (6.5% anomalous decrease)
  │  ○ 300K
  │ ╱
  │╱
  ○ 280K
  │
  └──────────────── 1/T →
```

- The **280K–320K** points define a straight Arrhenius line
- The **340K** point falls **below** extrapolation → genuine non-Arrhenius deviation
- Cannot be explained by statistical noise or simple thermal activation

---

## Slide 13 — RDF: Zn–Thiourea (Zn-S)

### First coordination shell peak at 0.22–0.23 nm (2.2–2.3 Å)

**Key observations:**

- Peak position **constant** across all temperatures → Zn-S bond length unaffected
- Peak height **decreases** with temperature:
  - 280K: g(r) ≈ 2.0
  - 340K: g(r) < 1.0
- Thiourea coordination is the **most thermally labile** of the three ligand types
- Complex remains intact at all temperatures (no complete peak loss)

| T (K) | Peak (nm) | g(r) height | Est. Coordination # |
|---|---|---|---|
| 280 | 0.22–0.23 | ~2.0 | ~4 (tetrahedral) |
| 300 | 0.22–0.23 | ~1.5 | ~4 (tetrahedral) |
| 320 | 0.22–0.23 | ~1.2 | ~4–5 |
| 340 | 0.22–0.23 | < 1.0 | ~5–6 (possible increase) |

---

## Slide 14 — RDF: Zn–SO₄ (The Surprise)

### Dominant inner-sphere coordination!

- **Peak position**: r ≈ 0.17 nm
- **Peak intensity**: g(r) ≈ **32** — enormously strong!
- **Temperature-insensitive**: thermally robust across 280–340K

### What this means:

> **Sulfate — not thiourea — is the primary first-shell ligand** at 2M ZnSO₄

- Driven by strong Coulombic attraction: Zn²⁺(+2) ↔ SO₄²⁻(−2)
- The coordination complex is better described as:
  **[Zn(SO₄)ₙ(H₂O)ₘ]^(2−2n)** rather than Zn–thiourea
- This **revises the coordination picture** and has major implications for interpreting the diffusion anomaly

---

## Slide 15 — RDF: Zn–Water

- Broad first peak at **~0.20 nm** (inner-sphere water)
- Peak intensity **decreases** as thiourea/sulfate coordination increases
- Consistent with **ligand substitution** of water from the solvation shell
- Temperature-dependent changes suggest **inner/outer-sphere water rearrangement** at high T

---

## Slide 16 — Competitive Coordination Hierarchy (300K)

### All three RDFs overlaid on the same axis:

```
g(r)
 32 │  ╱╲  Zn-SO₄
    │ ╱  ╲
    │╱    ╲
  5 │      ╲___   Zn-Water
    │           ╲___
  2 │                ╲  Zn-Thiourea
    │                 ╲___
  0 ├──────────────────────── r (nm)
    0.1   0.17  0.20  0.23  0.30
```

### Hierarchy (unambiguous):

> **Zn–SO₄** (g(r) ≈ 32) **>>** **Zn–Water** (g(r) ≈ 5) **>>** **Zn–Thiourea** (g(r) ≈ 2)

### Why is thiourea so weak?

- Low molar ratio: thiourea:Zn = 10:150 = **0.067** (severely underrepresented)
- SO₄²⁻ at 1:1 ratio with Zn²⁺ and much stronger Coulombic interaction
- HSAB affinity alone cannot overcome the concentration disadvantage

---

## Slide 17 — Mechanistic Hypotheses for the 340K Anomaly

### Why does diffusion DECREASE at high temperature?

Three non-mutually-exclusive mechanisms proposed:

---

### Hypothesis 1: Entropy-Driven Coordination Number Increase

> ΔG = ΔH − **TΔS** → at high T, entropy dominates

- Binding ligands **releases structured water** → ΔS > 0
- At 340K, the TΔS term favors **more ligands** binding → **larger complex**
- Stokes-Einstein: D ∝ 1/r\_H → **larger = slower**
- Supported by Ding et al. (2024): ΔCN = 0.24 from concentration perturbation alone

**Quantitative check:** r\_H must increase ~14% to explain the 6.5% D decrease (accounting for T↑ and η↓). Requires addition of multiple ligands or dimerization.

---

### Hypothesis 2: SO₄²⁻-Bridged Complex Aggregation ← *Elevated probability*

> Given g(r) ≈ 32 for Zn–SO₄, sulfate bridging is highly plausible

- At elevated T: **[Zn₂(SO₄)ᵧ(H₂O)ₓ]** dimers form via bridging sulfate
- Stokes-Einstein prediction: dimer diffuses **~21% slower** (D ∝ V⁻¹/³)
- 21% > 6.5% → only **partial dimerization** needed to explain the anomaly

**Test:** Calculate Zn–Zn RDF at 340K from trajectory (future work)

---

### Hypothesis 3: Hydrogen Bond Network Reorganization

- Above ~320K, bulk water H-bond network restructures significantly
- **Enhanced water structuring** around the complex → higher local viscosity
- Could reduce D even without size change

---

## Slide 18 — Stokes-Einstein Quantitative Analysis

### The numbers must add up

From 320K → 340K:
- Temperature: +6.3%
- Viscosity: −10% (η: 0.72 → 0.65 cP)
- **Both should increase D**

But D **decreases** by 6.5%.

Using D = k\_BT / (6πηr\_H):

> r\_H must increase by ≈ **14%** to overcome the T and η effects

| Mechanism | r\_H increase | Sufficient? |
|---|---|---|
| +1 ligand to tetrahedral complex | ~5–6% | Alone: No |
| SO₄²⁻-bridged dimer | ~26% (V doubles) | Alone: Yes (overshoots) |
| Partial dimerization (~30% of complexes) | ~14% effective | **Yes — best fit** |
| H-bond restructuring | Unknown | Possibly contributes |

---

## Slide 19 — Context: Relevance to Battery Design

### Why this matters for AZIBs

The Zn²⁺ solvation structure controls:

| Property | Governed By |
|---|---|
| **HER rate** | Water molecules in 1st shell → direct H₂ evolution |
| **Anode stability** | SEI layer composition from solvation shell decomposition |
| **Ionic transport** | Diffusion coefficient of solvated Zn²⁺ |
| **Deposition morphology** | Desolvation kinetics at electrode interface |

### Our contribution:

- Temperature-induced coordination reorganization is **real and detectable** in ZnSO₄ systems
- Complements experimental strategies: succinate (Ding 2024), acetate, fluorinated anion additives
- **Warning**: simple Arrhenius models are **insufficient** for predicting high-T electrolyte behavior

---

## Slide 20 — Conclusions

1. **Validated MD model** of 2M ZnSO₄ + thiourea in water
   - Zn-S distance: 2.2–2.3 Å (vs. 2.3–2.4 Å experimental) ✓
   - Density, temperature, energy stability all verified ✓

2. **Discovered non-Arrhenius diffusion anomaly**
   - D increases normally 280K → 320K
   - D **decreases 6.5% at 340K** — central finding

3. **Revised the coordination picture**
   - **SO₄²⁻ is the dominant 1st-shell ligand** (g(r) ≈ 32), not thiourea (g(r) ≈ 2)
   - Thiourea is outer-sphere at this concentration

4. **Proposed three mechanisms** (likely combined):
   - Entropy-driven coordination number increase
   - **SO₄²⁻-bridged dimerization** (elevated probability given RDF)
   - H-bond network restructuring

5. **Practical implication**: Arrhenius extrapolation fails for high-T AZIB electrolyte design

---

## Slide 21 — Future Work

1. **Zn–Zn RDF** from existing trajectories → directly test for dimerization at 340K
2. **Umbrella sampling** → free energy ΔG\_bind(T) to resolve ΔH vs. TΔS contributions
3. **Higher thiourea concentrations** (1:1, 2:1 thiourea:Zn) → probe HSAB competition
4. **Ab initio MD (AIMD)** for select configurations → validate classical FF coordination
5. **Extended temperature range** (360K, 380K) → map the full non-Arrhenius regime
6. **Electrode interface simulations** → connect bulk solvation to deposition behavior

---

## Slide 22 — Key Equations (Reference)

| Equation | Formula |
|---|---|
| Einstein relation | D = lim(t→∞) ⟨\|r(t)−r(0)\|²⟩ / 6t |
| Stokes-Einstein | D = k\_BT / (6πηr\_H) |
| Coordination number | n = 4πρ₀ ∫₀^r\_min g(r) r² dr |
| Free energy | ΔG = ΔH − TΔS = −RT ln K |
| Arrhenius | D = D₀ · exp(−Ea/k\_BT) |
| Lennard-Jones | V(r) = 4ε[(σ/r)¹² − (σ/r)⁶] |

---

## Slide 23 — Selected References

1. Jorgensen et al. (1983) — TIP4P water model, *J. Chem. Phys.* 79, 926
2. Hornak et al. (2006) — AMBER99SB force field, *Proteins* 65, 712
3. Hess et al. (2008) — GROMACS, *J. Chem. Theory Comput.* 4, 435
4. Parrinello & Rahman (1981) — Barostat, *J. Appl. Phys.* 52, 7182
5. Darden et al. (1993) — PME method, *J. Chem. Phys.* 98, 10089
6. Pearson (1963) — HSAB principle, *J. Am. Chem. Soc.* 85, 3533
7. Ding et al. (2024) — ZnSO₄ + succinate MD study, *Adv. Funct. Mater.* 34, 2314388
8. Einstein (1905) — Brownian motion, *Ann. Phys.* 17, 549
9. Martínez et al. (2009) — Packmol, *J. Comput. Chem.* 30, 2157

---

## Slide 24 — Acknowledgements

- **Supervisor**: Dr. Rosy, Assistant Professor, Dept. of Chemistry, IIT (BHU)
- **Mentor**: Mr. Digvijay Andotra
- **Colleague**: Ms. Rashmi
- **Computing**: Param Shivaay HPC, IIT (BHU) Varanasi
- **Software**: GROMACS 2026.0, Packmol, ACPYPE, Open Babel

---

## Slide 25 — Thank You

### Thank you for your attention!

**Kulraj Singh Sabharwal**
21054013 | IDD Chemistry
Department of Chemistry, IIT (BHU) Varanasi

*Questions?*
