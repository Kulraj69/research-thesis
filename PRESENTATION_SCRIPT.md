# Presentation Script
## Molecular Dynamics Study of a ZnSO₄ Electrolyte with Thiourea Additive

**Duration:** ~20-25 minutes | **Slides:** 24

---

## Slide 1: Title Slide
**[~30 seconds]**

> "Good morning/afternoon everyone. I'm Kulraj Singh Sabharwal, IDD Chemistry student at IIT BHU. Today I'll present my thesis work on **Molecular Dynamics simulation of ZnSO₄ electrolyte with thiourea additive**, conducted under the supervision of Dr. Rosy and mentored by Mr. Digvijay Andotra."

---

## Slide 2: Presentation Roadmap
**[~45 seconds]**

> "Here's the roadmap for today's presentation. We'll start with the **problem statement** — understanding how the Zn²⁺ solvation shell controls battery performance. Then I'll cover the **challenges in aqueous zinc batteries**, our **simulation methodology using GROMACS**, and the **validation** of our model.
>
> The core results include **RDF analysis** for structural characterization, **MSD analysis** for diffusion dynamics, and finally **conclusions** with implications for battery design.
>
> Our central question is: **What is the solvation structure around Zn²⁺, and which ligand dominates the first coordination shell?**"

---

## Slide 3: Why Aqueous Zinc-Ion Batteries?
**[~1 minute]**

> "Why are we interested in aqueous zinc-ion batteries? This comparison table tells the story.
>
> Compared to lithium-ion batteries, zinc offers **dramatic cost advantages** — zinc costs $65/ton versus $15,000/ton for lithium. Zinc batteries use **aqueous electrolyte**, making them **non-flammable** and much safer.
>
> Zinc is also **more abundant** in Earth's crust, has **2 electrons per ion** instead of 1, giving **higher theoretical capacity** — 820 mAh/g versus 372 for graphite.
>
> The chart on the right shows this visually. **AZIBs are the most promising post-lithium technology**, but their Achilles' heel is the zinc anode-electrolyte interface."

---

## Slide 4: Core Problems at the Zn Anode
**[~1 minute]**

> "So what goes wrong at the zinc anode? Three main failure modes:
>
> **First, Hydrogen Evolution Reaction (HER)** — water in contact with zinc reduces to H₂ gas, consuming electrolyte and raising local pH. This forms insulating ZnO layers.
>
> **Second, Dendrite Growth** — non-uniform zinc deposition creates sharp protrusions that can puncture the separator, causing short circuits.
>
> **Third, Passivation** — ZnO, Zn(OH)₂, and basic zinc hydroxide sulfates form on the anode surface, blocking further deposition and increasing cell impedance.
>
> The key insight: **all three failure modes are controlled by the Zn²⁺ solvation shell**. Water molecules in the first coordination shell drive HER."

---

## Slide 5: Why Thiourea as Additive?
**[~1 minute]**

> "This brings us to thiourea — SC(NH₂)₂ — our additive of choice.
>
> According to **HSAB theory**, thiourea is a **soft S-donor ligand** with strong affinity for Zn²⁺ — we call this zincophilic behavior. It's expected to **displace water** from the solvation shell, suppress HER, and promote uniform deposition.
>
> The molecular structure shows a C=S thione group as the coordination site, with two NH₂ groups capable of hydrogen bonding. It's a neutral molecule, so it doesn't alter the electrolyte's charge balance.
>
> **Key question: Does thiourea maintain coordination with Zn²⁺ at elevated temperatures, or does thermal energy disrupt this interaction?**"

---

## Slide 6: Why This Study?
**[~45 seconds]**

> "What do we already know? Thiourea additives improve cycling at room temperature, form protective SEI layers, and electrochemical performance is well characterized.
>
> **What we aim to study:** What is the actual coordination shell structure? Which ligand dominates? What role does thiourea *really* play? And how does Zn²⁺ diffusion behave?
>
> Our study systematically tracks how solvation structure evolves across 280 to 340 K — a range relevant to real battery operating conditions."

---

## Slide 7: Research Objectives
**[~45 seconds]**

> "Our specific objectives:
>
> 1. Build and validate an MD model — 14,696 atoms in a ~5 nm box
> 2. Simulate at four temperatures: 280, 300, 320, and 340 K
> 3. Characterize structure using RDF — Zn-S, Zn-O(SO₄), Zn-O(H₂O)
> 4. Quantify dynamics via MSD to get diffusion coefficients
> 5. Explain any diffusion anomalies
>
> The table shows our simulation parameters — 10 ns production per temperature, 10,000 frames, ~2M ZnSO₄ concentration, and we used Param Shivaay HPC at IIT BHU."

---

## Slide 8: Molecular Dynamics — How It Works
**[~1 minute]**

> "A quick primer on molecular dynamics. The pipeline shows the basic algorithm:
>
> We start with **potential energy** from the force field — Lennard-Jones for van der Waals, Coulomb for electrostatics, plus bonded terms. We compute **forces** as the negative gradient of potential, then **acceleration** from Newton's second law, and finally **integrate** using the leapfrog algorithm with 2 femtosecond timesteps.
>
> The table shows our interaction types — Coulomb with PME for long-range, Lennard-Jones cutoff at 1 nm, plus bonded terms for stretches, angles, and dihedrals.
>
> Over 10 nanoseconds, that's **5 million integration steps**."

---

## Slide 9: System Composition
**[~45 seconds]**

> "Here's our system composition — 14,696 atoms total.
>
> We have 150 Zn²⁺ ions, 150 SO₄²⁻ ions, just 10 thiourea molecules, and 3,429 TIP4P water molecules. The 3D viewer on the right shows the actual simulation box — you can rotate it to see the structure.
>
> The box was built with Packmol at 5 nm³, shrinking to 4.71 nm³ after NPT equilibration — about 6% shrinkage, which is expected for 2M concentration. Net charge is exactly zero."

---

## Slide 10: Simulation Workflow
**[~45 seconds]**

> "Our simulation workflow follows standard MD protocol:
>
> **Packmol** for initial random placement, **energy minimization** with steepest descent until forces are below 1000 kJ/mol/nm, **NVT equilibration** for 500 ps using velocity-rescale thermostat to reach 300 K, **NPT equilibration** for 3 ns using Berendsen barostat to reach correct density, and finally **10 ns production** run collecting 10,000 frames.
>
> The table shows our achieved values — NVT temperature of 299.86 K, NPT density of 1389.7 kg/m³."

---

## Slide 11: System Validation
**[~1 minute]**

> "This table shows all our validation checks — and **all criteria pass**.
>
> NVT temperature within 0.05% of target. NPT density consistent with 2M ZnSO₄. Energy minimization converged properly. Pressure oscillates around zero with normal fluctuations.
>
> For structural validation: Zn-Water RDF peak at 0.206 nm with g(r) of 4.7. Zn-SO₄ shows a **massive peak of 30.1** — this is the dominant coordination. Zn-Thiourea is weaker at g(r) = 1.6.
>
> MSD shows proper diffusive regime. **SO₄²⁻ dominates the first coordination shell.**"

---

## Slide 12: Convergence Validation
**[~30 seconds]**

> "This dashboard shows all four convergence plots from GROMACS. Energy minimization reaches plateau at −600,328 kJ/mol. Temperature stabilizes at 300 K. Density shows flat plateau at 1390 kg/m³. Pressure oscillates around zero with no drift — all criteria met."

---

## Slide 13: Equilibration Checklist
**[~45 seconds]**

> "Here's our equilibration checklist — all five criteria pass with green checkmarks.
>
> Energy minimization converged. NVT temperature within 1% of target. NPT density shows stable plateau with less than 0.5% relative fluctuation. Pressure mean is essentially zero. And MSD shows proper linear diffusive regime.
>
> **System is fully equilibrated and ready for production analysis.**"

---

## Slide 14: Convergence Details
**[~30 seconds]**

> "These are the individual plots from GROMACS output. Energy minimization curve, NVT temperature with tight fluctuations around 300 K, NPT density plateau, and pressure distribution over the 3 ns equilibration."

---

## Slide 15: Radial Distribution Function — g(r)
**[~1 minute]**

> "Now let's talk about the **radial distribution function** — our main structural analysis tool.
>
> g(r) tells us the **probability of finding atom B at distance r from atom A**, normalized to bulk density. g(r) = 1 means random distribution. g(r) > 1 means enhanced probability — a **coordination shell**.
>
> The first peak position gives us the **bond length**. Peak height indicates **coordination strength**. Integration under the peak gives **coordination number**.
>
> We compute g(r) for three pairs: Zn-SO₄, Zn-Water, and Zn-Thiourea."

---

## Slide 16: RDF from GROMACS — 300 K
**[~1 minute]**

> "Here are our RDF results at 300 K.
>
> **Zn-Water** shows a strong first shell peak — this is expected, water is the solvent. **Zn-Thiourea** shows a weaker peak — already suggesting thiourea is **not** the dominant coordinator.
>
> But look at **Zn-Sulphate** — that peak is **massive**, g(r) around 32! This is driven by the +2/−2 Coulombic attraction between Zn²⁺ and SO₄²⁻.
>
> All RDFs converge to g(r) = 1 at large r, confirming proper bulk sampling."

---

## Slide 17: First Coordination Shell — Zoomed
**[~30 seconds]**

> "Zooming into the first coordination shell from 0 to 0.5 nm. Peak positions clearly show **SO₄ is closest** at 0.176 nm, then water at 0.206 nm, then thiourea at 0.228 nm. The SO₄ peak is literally off-scale at g(r) = 30."

---

## Slide 18: Overall RDF Comparison
**[~45 seconds]**

> "This overlay shows all three ligands together. The coordination hierarchy is clear:
>
> **Sulphate dominates** — peak at 0.176 nm with g(r) ≈ 30. Water is second at g(r) ≈ 4.7. Thiourea is weakest at g(r) ≈ 1.6.
>
> This means **thiourea is an outer-shell modifier**, not an inner-shell coordinator. Sulphate controls the first coordination shell through pure electrostatic strength."

---

## Slide 19: RDF Results Summary
**[~45 seconds]**

> "Summarizing our RDF results in this table. SO₄ at 0.176 nm with g(r) 30.1 — dominant ion pairing. Water at 0.206 nm with g(r) 4.7 — stable solvation backbone. Thiourea at 0.228 nm with g(r) only 1.6 — weak outer-shell coordination.
>
> **Key implication**: Thiourea acts as an outer-shell modifier, not inner-shell. The coordination complex is [Zn(SO₄)ₙ(H₂O)ₘ(Tu)ₖ] where SO₄ dominates."

---

## Slide 20: RDF Temperature Comparison
**[~1 minute]**

> "Now let's look at temperature dependence. These four plots show RDFs from 280 to 340 K.
>
> **Zn-SO₄** and **Zn-Water** coordination remain **stable across all temperatures** — the peaks barely change.
>
> But look at **Zn-Ligand** — at 280 K we see a much stronger peak, g(r) around 2.0, compared to only 0.9 at higher temperatures. This shows **thermal disruption of coordination** at higher T.
>
> The first shell peak variation plot confirms this — 280 K has distinctly stronger coordination."

---

## Slide 21: MSD Analysis
**[~1 minute]**

> "Moving to dynamics — Mean Square Displacement. The graph shows MSD vs time for all four temperatures.
>
> As expected, **MSD increases with temperature** — 0.567 nm² at 280 K up to 1.087 nm² at 340 K.
>
> But look at the diffusion coefficients in the table. D increases from 280 to 320 K, **but then drops at 340 K** despite higher MSD!
>
> This anomalous behavior — D peaking at 320 K and dropping at 340 K — suggests **solvation shell restructuring** at high temperature."

---

## Slide 22: MSD & Diffusion — Temperature Dependence
**[~30 seconds]**

> "These bar charts show it clearly. MSD increases monotonically — no surprise. But diffusion coefficient peaks at 320 K (+67% vs baseline) then **drops at 340 K** (+56% vs baseline).
>
> Something is happening to the solvation shell at 340 K that slows down effective diffusion despite more thermal energy."

---

## Slide 23: Implications for Battery Design
**[~1 minute]**

> "What does this mean for battery design?
>
> **HER rate** is controlled by water in the first shell — but SO₄ displaces water, so it actually helps suppress HER. **Coordination hierarchy** is SO₄ >> Water >> Thiourea.
>
> **Thiourea's role** is secondary — it's an outer-shell modifier with g(r) only 1.6. It doesn't dominate coordination as expected.
>
> **Key takeaway**: Electrolyte design should account for SO₄²⁻ dominance. The complex structure is [Zn(SO₄)ₙ(H₂O)ₘ(Tu)ₖ]."

---

## Slide 24: Conclusions
**[~1 minute]**

> "To conclude:
>
> 1. We successfully **validated our MD model** — density 1389.7 kg/m³, temperature 299.86 K
> 2. **SO₄²⁻ dominates** the first coordination shell with g(r) ≈ 30
> 3. **Water forms the second** coordination layer at g(r) ≈ 4.7
> 4. **Thiourea is an outer-shell modifier**, not inner-shell, with g(r) ≈ 1.6
> 5. **MSD confirms** slow Zn²⁺ complex diffusion
>
> The table summarizes all key metrics. This work establishes that **electrolyte design must account for temperature-dependent coordination dynamics**, not just room-temperature electrochemistry."

---

## Slide 25: Thank You
**[~15 seconds]**

> "With that, I'd like to thank my supervisor Dr. Rosy and mentor Mr. Digvijay Andotra, as well as the computational resources at Param Shivaay HPC. Thank you for your attention — I'm happy to take any questions."

---

# Quick Reference Card

## Key Numbers to Remember:
| Metric | Value |
|--------|-------|
| Total atoms | 14,696 |
| Zn²⁺ ions | 150 |
| Thiourea | 10 molecules |
| Simulation time | 10 ns per temperature |
| Temperatures | 280, 300, 320, 340 K |
| NPT Density | 1389.7 kg/m³ |
| NVT Temp | 299.86 K |
| SO₄ g(r) peak | ~30 at 0.176 nm |
| Water g(r) peak | ~4.7 at 0.206 nm |
| Thiourea g(r) peak | ~1.6 at 0.228 nm |
| MSD at 300 K | 0.644 nm² |

## Key Takeaways (3 sentences):
1. **SO₄²⁻ dominates** the first coordination shell around Zn²⁺ (g(r) ≈ 30).
2. **Thiourea is an outer-shell modifier**, not a direct Zn²⁺ coordinator (g(r) ≈ 1.6).
3. **Diffusion shows anomaly** at 340 K — D drops despite higher MSD, suggesting solvation shell restructuring.

---

*Good luck with your presentation!*
