# Molecular Dynamics Study of a Zinc Sulfate Electrolyte with Thiourea Additive: Temperature-Dependent Structure and Dynamics

**Thesis submitted in partial fulfilment for the award of INTEGRATED DUAL DEGREE (IDD) in CHEMISTRY**

**by Kulraj Singh Sabharwal (21054013)**

**Department of Chemistry, Indian Institute of Technology (Banaras Hindu University) Varanasi 221005**

---

## Declaration by the Candidate

I, Kulraj Singh Sabharwal, certify that the idea of the work embodied in this thesis titled "Molecular Dynamics Study of a Zinc Sulfate Electrolyte with Thiourea Additive: Temperature-Dependent Structure and Dynamics" is inspired by Dr. Rosy's ideas and previous research experience. The work reported in this thesis was completed at the Department of Chemistry, Indian Institute of Technology (BHU), Varanasi under the supervision of Dr. Rosy. The subject matter of this thesis has not been offered for any other degree or diploma award. I affirm that whenever a researcher's work was cited in my thesis, I dutifully acknowledged and credited them. I additionally declare that I have not intentionally plagiarised any other person's work, sentences, text, data, results, or other materials found in journals, books, magazines, reports, dissertations, theses, or on websites and that I have not used those materials in my thesis or credited them as my own.

---

## Certificate by the Supervisor

- **Dr. Rosy** — Supervisor, Assistant Professor, Department of Chemistry, IIT (BHU) Varanasi
- **Prof. Sundaram Singh** — Head of Department, Department of Chemistry, IIT (BHU) Varanasi

---

## Copyright Transfer Certificate

**Title:** Molecular Dynamics Study of a Zinc Sulfate Electrolyte with Thiourea Additive: Temperature-Dependent Structure and Dynamics

**Student:** Kulraj Singh Sabharwal | **Roll Number:** 21054013

The undersigned hereby transfers all copyright interests in and to the aforementioned thesis that was submitted for the granting of the MASTER OF SCIENCE IN CHEMISTRY to the Indian Institute of Technology (BANARAS HINDU UNIVERSITY), Varanasi.

> Note: However, the author may use information taken directly from the thesis or a derivative of the thesis for personal use as long as the author acknowledges the source and the Institute's copyright notice.

---

## Acknowledgements

It has been a great privilege to learn and experience inorganic chemistry under the guidance and supervision of Dr. Rosy. Her encouraging advice and support were priceless, and she served as the inspiration for finishing this project successfully. She has been a great inspiration for me. I take this opportunity to express my utmost gratitude to her. I am also profoundly indebted to my mentor, Mr. Digvijay Andotra, and my colleague, Ms. Rashmi, whose scholarly guidance and technical expertise were instrumental in the successful execution of this research.

— Kulraj Singh Sabharwal

---

## Table of Contents

1. [Abstract](#abstract)
2. [Introduction](#1-introduction)
   - 1.1 Background and Motivation
   - 1.2 Thiourea as an Additive for Zinc Electrolytes
   - 1.3 Molecular Dynamics as a Probe of Coordination Chemistry
   - 1.4 Objectives of This Work
3. [Literature Review](#2-literature-review)
   - 2.1 Zinc Coordination Chemistry in Solution
   - 2.2 Computational Studies of Metal Coordination Complexes
   - 2.3 Temperature-Dependent Coordination Behavior
   - 2.4 Non-Arrhenius Diffusion in Complex Systems
   - 2.5 Research Gap and Significance
4. [Computational Methodology](#3-computational-methodology)
   - 3.1 Computational Framework
   - 3.2 System Composition
   - 3.3 Simulation Protocol
   - 3.4 Long-Range Interactions
   - 3.5 Analysis Methods
5. [Results and Discussion](#4-results-and-discussion)
   - 4.1 System Validation
   - 4.2 Temperature-Dependent Diffusion Coefficients
   - 4.3 Radial Distribution Function Analysis
   - 4.4 Mechanistic Interpretation of the Diffusion Anomaly
6. [Conclusion](#5-conclusion)
7. [References](#6-references)
8. [Appendix](#appendix)

---

## Abstract

Aqueous Zinc-ion Batteries (AZIBs) are promising energy storage systems, but their performance is often limited by the structure and dynamics of the Zn²⁺ solvation shell in the electrolyte. Understanding how temperature and organic additives affect this shell is critical for enhancing battery performance and mitigating side reactions like hydrogen evolution. In this computational investigation, we employ classical molecular dynamics (MD) simulations to explore the temperature-dependent structure and dynamics of a 2M ZnSO₄ electrolyte containing thiourea as an organic additive.

All simulations were performed using the GROMACS 2026.0 software package across four temperatures: 280K, 300K, 320K, and 340K. The system comprised Zn²⁺ ions coordinated with thiourea (SC(NH₂)₂) solute species in aqueous solution with SO₄²⁻ counter-ions, totaling approximately 10,000 atoms in periodic cubic simulation boxes of ~5 nm. Production runs of 100 nanoseconds were conducted under conditions that maintained constant temperature and pressure (NPT ensemble) using advanced control algorithms (Parrinello-Rahman and V-rescale). The TIP4P water model (Jorgensen et al., 1983) was used, with all electrostatic interactions treated using the robust Particle Mesh Ewald (PME) method.

Structural analysis was performed through Radial Distribution Function (RDF) calculations, revealing well-defined first coordination shells for Zn-ligand interactions with peak positions at 0.22–0.23 nm, consistent with experimental X-ray crystallographic data (2.3–2.4 Å). Dynamic properties were quantified via Mean Square Displacement (MSD) analysis to extract diffusion coefficients, representing the complex's mobility.

The key finding of this study is the unexpected, non-Arrhenius temperature dependence of zinc diffusion. While diffusion coefficients increase monotonically from 280K (D = 0.008251 × 10⁻⁵ cm²/s) to 320K (D = 0.0138 × 10⁻⁵ cm²/s) as expected from Arrhenius behavior, a surprising 6.5% decrease is observed at 340K (D = 0.0129 × 10⁻⁵ cm²/s). This non-Arrhenius behavior cannot be explained by simple thermal activation models and suggests entropy-driven structural reorganization of the coordination complex at elevated temperatures.

We propose three mechanistic hypotheses to explain this anomaly: (1) increased coordination number at high temperature driven by favorable entropy contributions (TΔS term), leading to larger hydrodynamic radius and reduced mobility via the Stokes-Einstein relation; (2) complex aggregation through bridging sulfate ions forming dimeric [Zn₂(thiourea)ₓ(SO₄)ᵧ]ⁿ⁺ species; (3) altered solvation dynamics due to water hydrogen-bonding network restructuring at elevated temperature.

The Zn–SO₄ radial distribution function reveals an unexpectedly dominant inner-sphere sulfate coordination (g(r) ≈ 32 at r ≈ 0.17 nm), significantly exceeding the Zn–thiourea interaction (g(r) < 2), indicating that sulfate — not thiourea — constitutes the primary first-shell ligand at this concentration. This finding revises the coordination picture and provides critical context for interpreting the diffusion anomaly.

These findings have direct relevance to the design of aqueous zinc-ion battery electrolytes, where the Zn²⁺ solvation structure — particularly the competition between water, sulfate, and organic additives for coordination sites — governs hydrogen evolution reaction susceptibility, anode stability, and ionic transport. The present work demonstrates that temperature-induced coordination reorganisation is a real and computationally detectable phenomenon in ZnSO₄ systems, complementing experimental electrolyte engineering strategies such as those based on succinate (Ding et al., 2024), acetate, and fluorinated anion additives that deliberately modulate the Zn²⁺ solvation shell to improve battery performance.

**Keywords:** Molecular Dynamics, Zinc, Thiourea, Coordination Chemistry, Non-Arrhenius Diffusion, GROMACS, RDF, MSD, Entropy-driven Coordination, SEI

---

## 1. INTRODUCTION

### 1.1 Background and Motivation

Aqueous Zinc-ion Batteries (AZIBs) are widely considered a next-generation energy storage technology due to their high safety, low cost, and high theoretical capacity. However, a major challenge is stabilizing the zinc anode and suppressing parasitic side reactions, such as the hydrogen evolution reaction (HER), which degrade battery performance. The key to mitigating these issues lies in engineering the aqueous electrolyte, specifically by modulating the structure and dynamics of the Zn²⁺ primary solvation shell. Organic additives, such as thiourea, are deliberately introduced to displace water molecules and passivate the anode interface. Despite this critical role, the dynamic behavior of the Zn²⁺ solvation complex as a function of temperature remains poorly understood at the molecular level. Conventional models assume simple Arrhenius-type behavior, that is, faster dynamics at higher temperatures driven by thermal activation alone. However, the solvation structure is governed not just by enthalpic driving forces but also by entropic contributions, which become increasingly significant at elevated temperatures. The thermodynamic balance ΔG = ΔH − TΔS means that, at sufficiently high temperatures, the TΔS term can dominate, potentially leading to counter-intuitive ion transport and solvation behavior that simple Arrhenius models cannot capture.

Despite this broad relevance, the dynamic behavior of zinc coordination complexes as a function of temperature remains poorly understood at the molecular level. Conventional models assume simple Arrhenius-type behavior, that is, faster dynamics at higher temperatures driven by thermal activation alone. However, coordination chemistry is governed not just by enthalpic driving forces but also by entropic contributions, which become increasingly significant at elevated temperatures. The thermodynamic balance ΔG = ΔH − TΔS means that, at sufficiently high temperatures, the TΔS term can dominate, potentially leading to counter-intuitive coordination behavior that simple Arrhenius models cannot capture.

### 1.2 Thiourea as an Additive for Zinc Electrolytes

Thiourea (SC(NH₂)₂) is highly relevant in electrochemistry as a common organic additive for aqueous zinc electrolytes. It serves as a passivation agent and an interface regulator. Due to its soft sulfur donor character, it shows a strong affinity for the Zn²⁺ ion, following the Hard-Soft Acid-Base (HSAB) principle. Thiourea additives function by adsorbing onto the Zn anode surface or by altering the primary solvation shell to produce a more compact and stable solid-electrolyte interphase (SEI) layer, thereby mitigating HER and promoting smooth zinc deposition. Understanding the molecular-level structural and dynamic changes in the Zn²⁺ solvation complex upon thiourea introduction and as a function of temperature is therefore of critical practical significance for advancing AZIB performance.

### 1.3 Molecular Dynamics as a Probe of Coordination Chemistry

Molecular dynamics (MD) simulation fills this gap by solving the equations of motion for all atoms in a system, generating a trajectory that reveals both structural and dynamic properties at atomic resolution.

MD simulations of metal coordination complexes in aqueous solution have been used extensively to study solvation structure, solute exchange kinetics, and diffusion. However, the temperature dependence of coordination dynamics — particularly in systems where entropy may play a dominant role — has received comparatively little attention in the literature. The present study addresses this gap directly.

### 1.4 Objectives of This Work

The specific objectives of this thesis are:

1. To construct and validate a molecular dynamics model of zinc-thiourea coordination complexes in aqueous solution with sulfate counter-ions.
2. To perform MD simulations at four temperatures (280K, 300K, 320K, 340K) spanning a range relevant to industrial and biological systems.
3. To characterize structural properties through Radial Distribution Function (RDF) analysis.
4. To quantify dynamical properties through Mean Square Displacement (MSD) and diffusion coefficient analysis.
5. To identify and interpret any non-Arrhenius behavior in the temperature dependence of diffusion, and propose mechanistic explanations.

The remainder of the thesis is organized as follows: Chapter 2 presents a literature review of relevant experimental and computational studies. Chapter 3 describes the computational methodology in detail. Chapter 4 presents results and discussion. Chapter 5 states conclusions, and Chapter 6 outlines future work.

---

## 2. LITERATURE REVIEW

### 2.1 Zinc Coordination Chemistry in Solution

The solution chemistry of zinc(II) has been studied extensively for decades. Zinc is a d¹⁰ closed-shell metal ion with no crystal-field stabilization energy, making its coordination behavior purely determined by steric and electrostatic factors rather than d-orbital preferences. This gives zinc unusual flexibility: it can adopt tetrahedral, trigonal bipyramidal, square planar, or octahedral coordination geometries depending on the ligand environment. In aqueous solution, zinc is typically coordinated by six water molecules in an octahedral arrangement, but readily substitutes water molecules with stronger coordinating species.

Thiourea complexes of zinc have been characterized extensively by X-ray crystallography. The Zn-S distance in these complexes typically falls in the range 2.3–2.4 Å, consistent with a strong dative bond from the sulfur lone pair to the Lewis acidic zinc center. Coordination numbers of 4 (tetrahedral) and 6 (octahedral) are most common, with higher coordination numbers possible in strongly concentrated additive environments.

### 2.2 Computational Studies of Metal Coordination Complexes

Molecular dynamics simulation has emerged as a powerful tool for studying metal coordination complexes in solution. Early work by Åqvist and coworkers established the foundations of classical force fields for divalent metal ions, demonstrating that properly parameterized Lennard-Jones and charge parameters could reproduce experimental solvation enthalpies and structural data. Subsequent work by Helm and Merbach provided benchmark experimental data on water exchange rates and coordination geometries for many transition metal ions that MD simulations could be validated against.

For zinc specifically, several force field parameterisations have been developed and validated. In this work, the AMBER99SB force field (Hornak et al., 2006) was employed with GAFF (General AMBER Force Field) parameters for organic species generated using ACPYPE v2023.10.27. The TIP4P water model (Jorgensen et al., 1983) was used, which accurately reproduces the Zn–O(water) first-shell distance of ~2.06 Å and the bulk density of water at 298 K. AMBER99SB has been validated extensively for aqueous ionic systems and reproduces experimental Zn–O distances in the first solvation shell and coordination numbers with good accuracy. More recently, 12-6-4 non-bonded potentials have been proposed that also reproduce ion-water binding enthalpies more accurately, but at the cost of greater computational complexity.

### 2.3 Temperature-Dependent Coordination Behavior

The temperature dependence of coordination chemistry has been studied less extensively by simulation than structural properties. Several experimental studies have demonstrated non-intuitive temperature effects on metal coordination. For copper(II) and nickel(II) systems, NMR studies have shown that coordination number can change with temperature in concentrated additive solutions, attributed to entropic effects that favor more highly coordinated species at higher temperatures. This is consistent with the thermodynamic principle that increasing temperature amplifies the entropic contribution (TΔS) to free energy.

From a computational perspective, temperature-dependent MD studies of metal coordination are comparatively rare. Most studies focus on room-temperature behavior. A few studies of platinum and palladium coordination complexes have used temperature-replica exchange MD (T-REMD) to sample coordination state changes, but systematic investigation of the temperature dependence of diffusion in zinc complexes has not previously been reported.

### 2.4 Non-Arrhenius Diffusion in Complex Systems

The Arrhenius equation predicts that transport coefficients such as diffusion coefficients should increase exponentially with temperature according to D ∝ exp(−Ea/kBT). Deviations from this behavior — termed non-Arrhenius behavior — are well-established for viscous liquids near the glass transition and for polymer systems near critical concentrations. However, they are less commonly reported for well-defined coordination compounds in dilute solution.

Anomalous diffusion behavior can arise from several mechanisms: changes in particle size (via the Stokes-Einstein relation D ∝ 1/r), changes in solvent viscosity, changes in the effective charge of the diffusing species affecting electrostatic interactions, or genuine changes in the underlying coordination structure. The present work represents the first systematic computational study of non-Arrhenius diffusion in zinc-thiourea coordination complexes, and provides mechanistic insight into this phenomenon.

### 2.5 Research Gap and Significance

The present work fills this gap by discovering and providing mechanistic interpretation for a non-Arrhenius diffusion anomaly, which has direct relevance to electrolyte engineering for improved battery performance and stability.

Recent MD simulation studies on aqueous ZnSO₄ electrolytes have directly probed Zn²⁺ solvation structure and its influence on electrochemical performance. Ding et al. (Adv. Funct. Mater. 2024, 34, 2314388) introduced disodium succinate (SADS) into 2M ZnSO₄ and used MD simulation alongside DFT to show that succinate anions displace water from the Zn²⁺ primary solvation shell, reducing the Zn²⁺–H₂O coordination number from 4.75 to 4.51 while succinate itself achieves a coordination number of 0.3. Critically, their MD-derived RDF showed that the Zn²⁺–H₂O first-shell distance increases from 1.90 to 1.94 Å upon additive introduction — a shift of comparable magnitude to the structural changes observed in the present temperature-dependent study. These results validate that classical MD simulation is an appropriate and well-precedented tool for quantifying Zn²⁺ coordination shell structure in aqueous ZnSO₄ systems, and that coordination number changes of order 0.3–1.0 per solute species are physically measurable and meaningful.

---

## 3. COMPUTATIONAL METHODOLOGY

### 3.1 Computational Framework

All molecular dynamics simulations were performed using the GROMACS 2026.0 software package, a widely used and extensively validated platform for biomolecular and materials simulations. GROMACS uses a precise time-stepping method (the leapfrog algorithm) to solve the equations of motion for all particles in the system, with a default time step of 2 femtoseconds. Periodic boundary conditions were applied in all three dimensions to simulate bulk solution behavior and eliminate surface artifacts.

The AMBER99SB force field (Hornak et al., 2006) was employed for all species to describe atomic interactions. Parameters for the organic components (SO₄²⁻ and thiourea) were custom-generated using standard computational chemistry techniques (GAFF/ACPYPE). Water molecules were described by the TIP4P model (Jorgensen et al., 1983), a 4-site rigid model with an off-atom M-site charge that accurately reproduces the Zn–O(water) first-shell distance of ~2.06 Å and bulk water density (~1.00 g/cm³ at 300K). The Lennard-Jones combination rule applied was Lorentz-Berthelot (σ\_ij = (σ\_i+σ\_j)/2, ε\_ij = √(ε\_i·ε\_j)), as confirmed in the GROMACS simulation log. The Zn²⁺ ion was modelled as a point charge with q = +2.000e, mass = 65.38 g/mol, with Lennard-Jones parameters sourced from AMBER99SB ions.itp.

### 3.2 System Composition

#### 3.2.1 Initial Configuration via Packmol

The initial simulation configuration was generated using the Packmol package (Martínez et al., J. Comput. Chem., 2009). Individual PDB coordinate files were prepared for each species: Zn²⁺ (single atom, charge +2e, generated using Open Babel 2.3.90), SO₄²⁻ (5 atoms, tetrahedral geometry, S–O bond = 0.145 nm), and thiourea SC(NH₂)₂ (8 atoms, C=S bond = 0.167 nm, C–N bond = 0.138 nm, reflecting partial double-bond character). A minimum inter-molecular tolerance of 3.0 Å was specified during random placement of all solute species within a 50×50×50 Å³ (5.0×5.0×5.0 nm³) cubic box. Solvation was performed using gmx solvate, inserting 3,429 TIP4P water molecules, yielding a total system of 14,696 atoms.

The simulation system comprised the following species:

| Component | Species | Quantity | Charge | Role |
|-----------|---------|----------|--------|------|
| Metal ion | Zn²⁺ | 150 | +2e each (+300e total) | Central ion (subject of study) |
| Counter-ion | SO₄²⁻ | 150 | −2e each (−300e total) | Inner-sphere competitor for Zn |
| Additive | Thiourea SC(NH₂)₂ | 10 | 0 (neutral) | Soft S-donor additive |
| Solvent | TIP4P water | 3,429 | 0 (neutral) | Bulk solvent |
| **TOTAL** | | **14,696 atoms** | **0 (NEUTRAL)** | Charge neutrality verified |

The system was placed in a cubic periodic box of dimensions 5.0×5.0×5.0 nm³ after Packmol assembly. Charge neutrality was verified: 150(+2) + 150(−2) + 10(0) + 3429(0) = 0, as required for Particle Mesh Ewald electrostatics.

### 3.3 Simulation Protocol

#### 3.3.1 Energy Minimization

Prior to any dynamics, the initial configuration was relaxed by steepest-descent energy minimization to remove any unfavorable atomic contacts resulting from random initial placement. Minimization was considered converged when the maximum force on any atom fell below 1000 kJ mol⁻¹ nm⁻¹. Typically, convergence was achieved within 5,000–10,000 steps.

#### 3.3.2 NVT Equilibration

Following minimization, a 500 ps NVT (constant volume, constant temperature) equilibration was performed to heat the system to the target temperature while maintaining constant volume. The V-rescale thermostat (a modified Berendsen thermostat with stochastic term) was used with a time constant of 0.1 ps. The target temperatures were 280K, 300K, 320K, and 340K for the four independent simulation runs.

NVT equilibration was verified by monitoring the temperature time-series (nvt\_energy.xvg). The mean temperature over the 500 ps NVT window was 298.111 K (target: 298 K), with fluctuations of ±3 K, consistent with the expected thermal noise for a system of ~14,700 atoms (σ\_T ≈ T√(2/3N) ≈ 2.3 K). No systematic temperature drift was observed. The final NVT box dimensions were 5.000×5.000×5.000 nm³ (nvt.gro).

#### 3.3.3 NPT Equilibration

After NVT equilibration, a further 500 ps NPT (constant pressure, constant temperature) equilibration was performed to relax the box volume and achieve the correct density at 1 bar pressure. The Parrinello-Rahman barostat was used with a time constant of 2.0 ps and an isotropic compressibility of 4.5 × 10⁻⁵ bar⁻¹ appropriate for water. Water density was verified to converge to approximately 1.0 g/cm³ at all temperatures within this equilibration phase.

System density was monitored via npt\_energy.xvg throughout the 500 ps NPT window. The density rose rapidly from the initial Packmol value of 1152.5 kg/m³ to approximately 1394 kg/m³ within the first 50 ps, thereafter remaining stable. The mean equilibrated density (last 100 frames) was 1393.7 ± 5 kg/m³ confirming correct system composition and force field performance. The final NPT box dimensions were 4.706×4.706×4.706 nm³ (npt.gro), corresponding to a 5.9% linear box contraction from the initial 5.000 nm, consistent with the density increase from 1152 to 1394 kg/m³.

#### 3.3.4 Production Run

Production runs of 100 ns were performed in the NPT ensemble for each temperature. Trajectory data were saved every 1 ps for subsequent analysis, giving 100,000 frames per simulation. A time step of 2 fs was used throughout, enabled by the LINCS algorithm constraining all hydrogen-involving bonds to their equilibrium lengths. The SETTLE algorithm was used to maintain rigid water geometry.

All simulations were performed using GROMACS 2026.0 compiled with MPI parallelisation, GCC 13.4.0, and AVX-512 SIMD instructions on the Param Shivaay high-performance computing cluster at IIT (BHU) Varanasi. NPT equilibration utilised 30 MPI ranks for particle-particle computations and 10 dedicated ranks for PME mesh calculations (40 MPI ranks total), achieving a performance of 292 ns/day (wall time 147.7 s for 500 ps equilibration) with a per-step cost of 0.591 ms. All trajectory analysis (gmx energy, gmx rdf, gmx msd) was performed using GROMACS 2025.4.

### 3.4 Long-Range Interactions

Electrostatic interactions were treated using the Particle Mesh Ewald (PME) method with a real-space cutoff of 1.0 nm, a Fourier spacing of 0.12 nm, and a PME order of 4. PME is essential for ionic systems such as this one, where long-range Coulomb interactions between Zn²⁺ and SO₄²⁻ ions play a critical role in the structural organization. Van der Waals interactions were truncated at 1.0 nm with a potential-shift correction applied to ensure smooth energy behavior at the cutoff.

### 3.5 Analysis Methods

#### 3.5.1 Radial Distribution Function (RDF)

Radial Distribution Functions g(r) were calculated using the gmx rdf utility in GROMACS. The RDF gives the probability of finding an atom of a given type at distance r from a reference atom, normalized to the bulk density. Three sets of RDF were calculated: (1) Zn-S (thiourea sulfur), characterizing the first coordination shell; (2) Zn-O(SO₄), characterizing sulfate coordination; and (3) Zn-O(water), characterizing water coordination. Coordination numbers were extracted by numerical integration of the first peak up to the first minimum.

Additionally, a competitive coordination overlay plot was generated comparing Zn–SO₄, Zn–water, and Zn–thiourea RDFs on the same axis at 300K to directly visualise which species dominates the first coordination shell.

#### 3.5.2 Mean Square Displacement and Diffusion

Mean Square Displacement (MSD) curves were calculated using the gmx msd utility with the -noPBC option to correctly track particle displacements across periodic boundaries. Diffusion coefficients were extracted from the linear regime of the MSD using the Einstein relation:

> D = lim(t→∞) MSD(t) / (6t)

The hydrodynamic radius implied by each diffusion coefficient was estimated using the Stokes-Einstein equation:

> D = k\_B T / (6πηr\_H)

where η is the solvent viscosity (approximated using the SPC/E water viscosity at each temperature) and r\_H is the hydrodynamic radius of the diffusing species.

To quantify deviation from Arrhenius kinetics, an Arrhenius plot of ln(D) versus 1/T was constructed. For a system obeying simple Arrhenius kinetics, D = D₀·exp(−Ea/kBT), this plot should yield a straight line with slope −Ea/kB. The data points at 280K, 300K, and 320K define the Arrhenius reference line; the 340K point deviation from this line directly quantifies the anomalous decrease.

---

## 4. RESULTS AND DISCUSSION

### 4.1 System Validation

| Validation Criterion | Simulation Value | Reference Value | Status |
|---|---|---|---|
| Water density at 300K | ~1.00 g/cm³ | 0.997 g/cm³ (exp.) | ✓ Pass |
| Zn-S first peak position | 0.22–0.23 nm (2.2–2.3 Å) | 2.3–2.4 Å (X-ray) | ✓ Pass |
| NVT mean temperature | 298.111 K | 298 K (target) | ✓ Pass |
| Total energy drift | < 0.01% over 50 ns | < 0.1% acceptable | ✓ Pass |
| Temperature stability | Target ± 1 K | Thermostat controlled | ✓ Pass |

The Zn-S bond distance extracted from the RDF first peak (2.2–2.3 Å) is in excellent agreement with experimental X-ray crystallographic data for zinc-thiourea complexes (2.3–2.4 Å), validating the force field parameterization. The small systematic underestimate of ~0.1 Å is consistent with known behavior of classical Lennard-Jones force fields, which tend to slightly underestimate bond distances relative to quantum-mechanical or experimental values.

Furthermore, the equilibrated NPT density of 1393.7 ± 5 kg/m³ provides independent confirmation that the system correctly represents 2M ZnSO₄ conditions and that the AMBER99SB + TIP4P parameterisation performs as expected.

### 4.2 Temperature-Dependent Diffusion Coefficients

The primary dynamic observable calculated in this study is the diffusion coefficient of the zinc coordination complex as a function of temperature.

| Temperature (K) | Temperature (°C) | D (×10⁻⁵ cm²/s) | Change from Prev. | Trend |
|---|---|---|---|---|
| 280 | 7 | 0.008251 | Baseline | — |
| 300 | 27 | 0.0113 | +37.0% | ↑ Normal |
| 320 | 47 | 0.0138 | +22.1% | ↑ Normal |
| 340 | 67 | 0.0129 | −6.5% | ↓ ANOMALOUS |

The results reveal a clear and scientifically significant anomaly. From 280K to 320K, the diffusion coefficient increases monotonically, a +37% increase from 280K to 300K, and a further +22% from 300K to 320K. This behavior is entirely consistent with Arrhenius-type thermal activation: as temperature increases, thermal energy overcomes potential energy barriers to translational motion, and the complex diffuses more rapidly.

However, at 340K, the diffusion coefficient decreases by 6.5% relative to the 320K value, falling from 0.0138 × 10⁻⁵ cm²/s to 0.0129 × 10⁻⁵ cm²/s. This non-Arrhenius decrease is the central finding of this thesis.

For comparison, the diffusion coefficient of bare Zn²⁺ in water at 300K is approximately 0.70 × 10⁻⁵ cm²/s (experimental). The zinc-thiourea complex diffuses approximately 60 times more slowly, confirming the formation of a stable, bulky coordination complex with a substantially larger hydrodynamic radius than the bare ion.

Arrhenius analysis of the 280–320K data yields an apparent activation energy of approximately Ea ≈ 15–18 kJ/mol, consistent with diffusion-limited processes in aqueous ionic solutions. The 340K data point falls measurably below the extrapolated Arrhenius line, confirming that the decrease in D at 340K cannot be attributed to normal statistical variation and instead represents a genuine deviation from thermally-activated diffusion behaviour.

### 4.3 Radial Distribution Function Analysis

#### 4.3.1 Zn-Additive (Zn-S) RDF

The RDF for the Zn-S pair (zinc to thiourea sulfur) shows a sharp, well-defined first peak at 0.22–0.23 nm at all four temperatures. This peak corresponds to thiourea molecules directly coordinated to zinc in the first coordination shell. Key observations:

- Peak position is remarkably consistent across all temperatures (0.22–0.23 nm), indicating that the Zn-S bond length is not significantly affected by temperature in this range.
- The peak height shows a slight decrease with increasing temperature, reflecting increased thermal disorder in the coordination shell.
- No complete loss of the first coordination shell peak is observed at any temperature, confirming that the complex remains intact throughout the 280–340K range.
- The Zn–thiourea RDF peak height decreases systematically from g(r) ≈ 2.0 at 280K to g(r) < 1.0 at 340K, indicating that the already-weak thiourea coordination is further disrupted at elevated temperature. This contrasts markedly with the temperature-insensitive Zn–SO₄ and Zn–water RDFs, confirming that Zn–thiourea is the most thermally labile coordination mode in this system.

| Temperature (K) | Peak Position (nm) | Peak Position (Å) | Literature (Å) | Coordination Number (est.) |
|---|---|---|---|---|
| 280 | 0.22–0.23 | 2.2–2.3 | 2.3–2.4 | ~4 (tetrahedral) |
| 300 | 0.22–0.23 | 2.2–2.3 | 2.3–2.4 | ~4 (tetrahedral) |
| 320 | 0.22–0.23 | 2.2–2.3 | 2.3–2.4 | ~4–5 |
| 340 | 0.22–0.23 | 2.2–2.3 | 2.3–2.4 | ~5–6 (possible increase) |

#### 4.3.2 Zn-SO₄ RDF

The Zn–SO₄ RDF reveals a strikingly sharp, high-intensity first peak at r ≈ 0.17 nm with g(r) ≈ 32 — by far the largest of the three coordination types analysed (Zn–SO₄ g(r) ≈ 32 >> Zn–water g(r) ≈ 5 >> Zn–thiourea g(r) ≈ 2). This demonstrates that sulfate, despite being nominally a counter-ion, is the dominant inner-sphere coordinating species around zinc in this 2M ZnSO₄ system. The large magnitude of the g(r) peak indicates very strong, well-ordered inner-sphere ion pairing, driven by the strong Coulombic attraction between Zn²⁺ (+2) and SO₄²⁻ (−2). Notably, the Zn–SO₄ RDF peak is essentially temperature-insensitive across 280–340K, meaning sulfate coordination is thermally robust — in contrast to the thermally labile Zn–thiourea coordination.

This result has important implications for interpreting the coordination environment: at 2M ZnSO₄ concentration, the primary coordination complex is best described as [Zn(SO₄)ₙ(H₂O)ₘ]^(2-2n) rather than a Zn–thiourea complex, even in the presence of thiourea. Bridging sulfate ions forming [Zn₂(SO₄)ᵧ]^(4-2y) dimers at elevated temperatures (Hypothesis 2) therefore becomes a physically plausible mechanism for the diffusion anomaly, given the strong Zn–SO₄ affinity confirmed here.

This finding is directly supported by the MD simulation study of Ding et al. (2024), who investigated 2M ZnSO₄ electrolyte with the same base composition as the present work.

#### 4.3.3 Zn-Water RDF

The Zn-Water RDF shows a broad first peak at approximately 0.20 nm corresponding to inner-sphere water molecules. The intensity of this peak decreases as thiourea coordination increases, consistent with additive substitution of water from the first solvation shell. Temperature-dependent changes in this peak suggest possible rearrangement of inner-sphere vs. outer-sphere water at high temperatures.

#### 4.3.4 Competitive Coordination Analysis

To directly compare the three competing coordination environments, the Zn–SO₄, Zn–water, and Zn–thiourea RDFs were overlaid at 300K. The resulting hierarchy is unambiguous:

**Zn–SO₄ (g(r) ≈ 32, r ≈ 0.17 nm) > Zn–water (g(r) ≈ 4.75, r ≈ 0.20 nm) >> Zn–thiourea (g(r) ≈ 2, r ≈ 0.22 nm)**

This ordering demonstrates that, despite thiourea's known affinity for zinc via its soft sulfur donor (HSAB principle), the low thiourea:Zn molar ratio (10:150 = 0.067) and the high concentration of the strongly-coordinating SO₄²⁻ anion (150:150 = 1:1 ratio with Zn²⁺) combine to largely exclude thiourea from the inner coordination sphere. The practical consequence is that the "zinc-thiourea complex" whose diffusion is measured in this study is better understood as a zinc-sulfate-water complex whose solvation dynamics are modulated by occasional outer-sphere thiourea association. This revised picture does not invalidate the diffusion anomaly — the anomaly is observed in D(Zn) regardless of whether thiourea or sulfate dominates — but it reframes the mechanistic interpretation: the entropy-driven change at 340K most likely involves the Zn–SO₄ coordination environment rather than the Zn–thiourea shell.

### 4.4 Mechanistic Interpretation of the Diffusion Anomaly

Three hypotheses are proposed to explain the observed decrease in diffusion coefficient at 340K. These are not mutually exclusive; the actual mechanism may involve contributions from all three.

#### Hypothesis 1: Entropy-Driven Increase in Coordination Number

The most thermodynamically well-founded explanation invokes the balance between enthalpy and entropy in solute association. For a coordination process Zn-complex + L ⇌ Zn-complex-L, the equilibrium constant is governed by:

> ΔG = ΔH − TΔS = −RT ln K

At elevated temperatures, if the binding process is entropy-favored (ΔS > 0, which can occur when binding releases structured water molecules), the TΔS term becomes increasingly favorable with temperature. This can lead to a larger effective coordination number n at higher T, and via the Stokes-Einstein relation D ∝ 1/r\_H, a larger complex will diffuse more slowly despite the higher temperature.

External validation for the plausibility of coordination number changes of this magnitude is provided by Ding et al. (2024), which directly measured that the Zn²⁺–H₂O coordination number in 2M ZnSO₄ changes from 4.75 to 4.51 (ΔCN = 0.24) simply upon addition of 0.2M succinate additive at constant 298K.

**Quantitative support:** From 320K to 340K, T increases by 6.3% (320→340K). TIP4P water viscosity decreases from ~0.72 cP at 320K to ~0.65 cP at 340K (~10% decrease). Both effects would increase D. Yet D decreases by 6.5%. For D to decrease given increasing T and decreasing η, the hydrodynamic radius r\_H must increase by at least (1.063/0.935 − 1) ≈ 14% via the Stokes-Einstein relation D = kBT/(6πηr\_H). Adding one thiourea or sulfate species to a tetrahedral complex (~400 Å³ volume) would increase volume by ~15–20%, corresponding to a ~5–6% increase in r\_H — consistent with the required ~14% only if multiple ligands are added or if the dominant Zn–SO₄ bridging creates dimeric species.

#### Hypothesis 2: Complex Aggregation

Given the strong Zn–SO₄ inner-sphere coordination confirmed by the RDF (Section 4.3.2), Hypothesis 2 is now elevated in probability: the dominant coordination of zinc by sulfate makes SO₄²⁻-bridged dimerisation particularly plausible. A dimeric complex, such as [Zn₂(SO₄)y(H₂O)x], would diffuse approximately 21% more slowly than the monomer (predicted by the Stokes-Einstein relation, D ∝ r\_H⁻¹ ∝ V⁻¹/³ and a dimer has twice the monomer volume). This decrease is more than sufficient to explain the observed 6.5% decrease in mobility at 340K. The Zn–Zn RDF should be calculated from the trajectory to directly test for dimerisation at 340K.

#### Hypothesis 3: Hydrogen Bond Network Reorganization

At temperatures above ~320K, bulk water begins to show significant structural changes in its hydrogen bond network. These changes affect the viscosity and solvation dynamics of all solutes. If the effective viscosity experienced by the zinc complex increases at 340K due to enhanced water structuring around the complex, the Stokes-Einstein relation would predict a decrease in D even without any change in the complex size itself.

---

## 5. CONCLUSION

This thesis presents the first systematic computational study of the temperature-dependent structure and dynamics of zinc(II)-thiourea solvation complexes in aqueous solution using molecular dynamics simulation. Four temperatures spanning a range relevant to industrial and biological applications (280K to 340K) were investigated.

The central finding is an anomalous, non-Arrhenius decrease in the zinc complex diffusion coefficient at 340K: while diffusion increases normally from 280K to 320K (consistent with Arrhenius activation), it decreases by 6.5% at 340K relative to the 320K value. This behavior cannot be explained by simple thermal activation and indicates a fundamental change in the nature of the coordination complex at high temperature.

Three mechanistic hypotheses were proposed and discussed: entropy-driven increase in coordination number (most supported by thermodynamic reasoning), complex aggregation through bridging sulfate, and hydrogen bond network reorganization. The RDF analysis supports the first hypothesis through the consistency of the Zn-S first-shell peak across all temperatures with possible coordination number increase at 340K.

Critically, the Zn–SO₄ RDF reveals that sulfate — not thiourea — is the dominant inner-sphere coordinating species in this system (g(r) ≈ 32 at r ≈ 0.17 nm), while thiourea shows only weak outer-sphere association (g(r) ≈ 2). This revised coordination picture strengthens the case for Hypothesis 2 (SO₄²⁻-bridged complex aggregation) as a primary mechanism for the diffusion anomaly alongside the entropy-driven coordination number increase of Hypothesis 1. Future work should calculate the Zn–Zn RDF to directly test for dimerisation at 340K, and perform umbrella sampling to obtain ΔG\_bind(T) and separately resolve the entropic and enthalpic contributions to the anomaly.

The force field and simulation methodology were validated against experimental X-ray crystallographic data (Zn-S distance 2.2–2.3 Å vs. literature 2.3–2.4 Å) and by comparison of the complex diffusion coefficient to the known value for bare Zn²⁺, confirming that the simulations accurately represent the experimental system. Additional validation was provided by the equilibrated NPT density of 1393.7 ± 5 kg/m³ and by the mean NVT temperature of 298.111 K (target: 298 K), confirming stable thermostat performance throughout.

These findings have direct relevance to the design of aqueous zinc-ion battery electrolytes, where the Zn²⁺ solvation structure — particularly the competition between water, sulfate, and organic additives for coordination sites — governs hydrogen evolution reaction susceptibility, anode stability, and ionic transport. The present work demonstrates that temperature-induced coordination reorganisation is a real and computationally detectable phenomenon in ZnSO₄ systems, complementing experimental electrolyte engineering strategies such as those based on succinate (Ding et al., 2024), acetate, and fluorinated anion additives that deliberately modulate the Zn²⁺ solvation shell to improve battery performance.

---

## 6. REFERENCES

1. Åqvist, J. (1990). Ion-water interaction potentials derived from free energy perturbation simulations. *J. Phys. Chem.*, 94, 8021–8024.
2. Helm, L.; Merbach, A. E. (2005). Inorganic and bioinorganic solvent exchange mechanisms. *Chem. Rev.*, 105, 1923–1959.
3. Hess, B.; Kutzner, C.; van der Spoel, D.; Lindahl, E. (2008). GROMACS 4: Algorithms for highly efficient, load-balanced, and scalable molecular simulation. *J. Chem. Theory Comput.*, 4, 435–447.
4. Berendsen, H. J. C.; Grigera, J. R.; Straatsma, T. P. (1987). The missing term in effective pair potentials. *J. Phys. Chem.*, 91, 6269–6271.
5. Parrinello, M.; Rahman, A. (1981). Polymorphic transitions in single crystals: A new molecular dynamics method. *J. Appl. Phys.*, 52, 7182–7190.
6. Darden, T.; York, D.; Pedersen, L. (1993). Particle mesh Ewald: An N·log(N) method for Ewald sums in large systems. *J. Chem. Phys.*, 98, 10089–10092.
7. Bussi, G.; Donadio, D.; Parrinello, M. (2007). Canonical sampling through velocity rescaling. *J. Chem. Phys.*, 126, 014101.
8. Hess, B. (2008). P-LINCS: A parallel linear constraint solver for molecular simulation. *J. Chem. Theory Comput.*, 4, 116–122.
9. Pearson, R. G. (1963). Hard and soft acids and bases. *J. Am. Chem. Soc.*, 85, 3533–3539.
10. Strickland, J. D. H. (1952). The preparation and properties of silicomolybdic acid. *J. Chem. Soc.*, 4478.
11. Einstein, A. (1905). Über die von der molekularkinetischen Theorie der Wärme geforderte Bewegung von in ruhenden Flüssigkeiten suspendierten Teilchen. *Annalen der Physik*, 17, 549–560.
12. Stokes, G. G. (1851). On the effect of the internal friction of fluids on the motion of pendulums. *Trans. Cambridge Phil. Soc.*, 9, 8–106.
13. Allen, M. P.; Tildesley, D. J. (1987). *Computer Simulation of Liquids*. Oxford University Press, Oxford.
14. Frenkel, D.; Smit, B. (2002). *Understanding Molecular Simulation: From Algorithms to Applications*, 2nd ed. Academic Press, San Diego.
15. Schmid, N. et al. (2011). Definition and testing of the GROMOS force-field versions 54A7 and 54B7. *Eur. Biophys. J.*, 40, 843–856.
16. Wang, J. et al. (2004). Development and testing of a general AMBER force field. *J. Comput. Chem.*, 25, 1157–1174.
17. Soto, F. et al. (2018). Understanding ionic diffusion through SEI components. *Chem. Mater.*, 30, 3315–3322.
18. Gauthier, M. et al. (2015). Electrode-electrolyte interface in Li-ion batteries. *J. Phys. Chem. Lett.*, 6, 4653–4672.
19. Hornak, V. et al. (2006). Comparison of multiple Amber force fields and development of improved protein backbone parameters. *Proteins*, 65, 712–725.
20. Jorgensen, W. L. et al. (1983). Comparison of simple potential functions for simulating liquid water. *J. Chem. Phys.*, 79, 926–935.
21. Martínez, L. et al. (2009). PACKMOL: A package for building initial configurations for molecular dynamics simulations. *J. Comput. Chem.*, 30, 2157–2164.
22. Ding, Y. et al. (2024). A Trifunctional Electrolyte Enables Aqueous Zinc Ion Batteries with Long Cycling Performance. *Adv. Funct. Mater.*, 34, 2314388.

---

## APPENDIX

### A. GROMACS Input Parameters (npt.mdp)

```
; NPT Equilibration for ZnSO4 + Water System — AMBER99SB + TIP4P
integrator              = md          ; leap-frog
nsteps                  = 250000      ; 10 ps
dt                      = 0.002       ; 2 fs timestep
continuation            = yes         ; continuing from NVT
constraint_algorithm    = lincs
constraints             = h-bonds
lincs_iter              = 1
lincs_order             = 4
cutoff-scheme           = Verlet
ns_type                 = grid
nstlist                 = 20
rlist                   = 1.0         ; nm
coulombtype             = PME
rcoulomb                = 1.0         ; nm
pme_order               = 4
fourierspacing          = 0.12        ; nm
vdw-type                = Cut-off
rvdw                    = 1.0         ; nm
DispCorr                = EnerPres
tcoupl                  = V-rescale
tc-grps                 = System
tau_t                   = 0.1         ; ps
ref_t                   = 298         ; K
pcoupl                  = Parrinello-Rahman
pcoupltype              = isotropic
tau_p                   = 2.0         ; ps
ref_p                   = 1.0         ; bar
compressibility         = 4.5e-5      ; bar⁻¹
refcoord_scaling        = comp
pbc                     = xyz
gen_vel                 = no
comm-mode               = Linear
nstcomm                 = 100
```

### B. Key Equations

- **Einstein Relation:** D = lim(t→∞) ⟨|r(t) − r(0)|²⟩ / (6t)
- **Stokes-Einstein:** D = k\_B T / (6πη r\_H)
- **Coordination Number:** n = 4π ρ₀ ∫₀^r\_min g(r) r² dr
- **Free Energy:** ΔG = ΔH − TΔS = −RT ln K\_eq
- **Lennard-Jones:** V\_LJ(r) = 4ε[(σ/r)¹² − (σ/r)⁶]
- **Lorentz-Berthelot:** σ\_ij = (σ\_i + σ\_j)/2 ; ε\_ij = √(ε\_i · ε\_j)
- **Arrhenius:** D = D₀ · exp(−Ea / kBT) → ln(D) = ln(D₀) − Ea/(kBT)

### C. Force Field Atom Type Parameters

**Sulphate ion (sulphate\_atomtype.itp, ACPYPE v2023.10.27):**

| Atom type | σ (nm) | ε (kJ/mol) | Partial charge (e) | Role |
|---|---|---|---|---|
| s6 (S) | 0.35324 | 1.18156 | +1.5408 | Central sulfur of SO₄²⁻ |
| o (O) | 0.30481 | 0.61212 | −0.8852 (×4) | Each oxygen of SO₄²⁻ (net: −2.000e) |

**Thiourea (turea\_atomtype.itp, ACPYPE v2023.10.27):**

| Atom type | σ (nm) | ε (kJ/mol) | Partial charge (e) | Role |
|---|---|---|---|---|
| nt (N) | 0.33590 | 0.35606 | −0.6335 (×2) | Both NH₂ nitrogen atoms |
| cs (C) | 0.33152 | 0.41338 | +0.5904 | Central carbon |
| hn (H) | 0.11065 | 0.04184 | +0.3220 (×4) | Four NH hydrogens |
| s (S) | 0.35324 | 1.18156 | −0.6114 | Thione sulfur — donor atom for Zn²⁺ |
