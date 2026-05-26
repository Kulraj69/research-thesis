# Full Presentation Script with Visual Descriptions
## Molecular Dynamics Study of ZnSO₄ Electrolyte with Thiourea Additive
### Kulraj Singh Sabharwal | IDD Chemistry | IIT (BHU) Varanasi

**Total Slides: 24 | Estimated Time: 20–25 minutes**

---

## SLIDE 1 — TITLE SLIDE
**⏱ ~30 seconds**

### What's on screen:
- Golden gradient banner at the top with the full thesis title
- IIT BHU crest and logo (large, centre)
- Left column: Your name, roll no, IDD Chemistry, IIT BHU
- Right column: Supervisor Dr. Rosy, Mentor Mr. Digvijay Andotra
- Footer: progress bar at 1/24, Intellects logo

### Script:
> "Good morning, everyone. I'm Kulraj Singh Sabharwal, IDD Chemistry student at IIT BHU Varanasi. Today I'll be presenting my thesis work on molecular dynamics simulation of a zinc sulfate electrolyte with thiourea additive, under the supervision of Dr. Rosy and mentored by Mr. Digvijay Andotra. The study focuses on temperature-dependent structure and dynamics of the Zn²⁺ solvation shell."

---

## SLIDE 2 — PRESENTATION ROADMAP
**⏱ ~45 seconds**

### What's on screen:
- Two rows of pipeline arrows: Problem → AZIB Challenges → Simulation → Validation | then Structure → Diffusion → Coordination → Conclusions
- Two compact info cards: Tools & Methods (blue) | Key Outputs (olive)
- Highlighted callout box: "Central question: What is the solvation structure around Zn²⁺?"

### Script:
> "Here is the roadmap for today's talk. We start with the problem — why the Zn²⁺ solvation shell matters for battery performance — then move through the core challenges in aqueous zinc batteries, our GROMACS simulation setup, and validation. The second pipeline covers the actual results: RDF structural analysis, MSD diffusion, coordination shell hierarchy, and design implications.
>
> Our tools are GROMACS with OPLS-AA force field and TIP4P water. The central question driving this work: **which ligand dominates the first coordination shell around Zn²⁺, and does that change with temperature?**"

---

## SLIDE 3 — WHY AQUEOUS ZINC-ION BATTERIES?
**⏱ ~1 minute**

### What's on screen:
- Left: comparison table — Zn-Ion vs Li-Ion across 7 properties (cost, safety, electrolyte, abundance, valence, capacity, recycling)
- Right: animated bar chart comparing key metrics
- Callout: "AZIBs are the most promising post-lithium technology"

### Script:
> "Why zinc? This table makes the case. Zinc costs just $65 per ton versus $15,000 per ton for lithium. It uses aqueous electrolyte — non-flammable, non-toxic, safe. It's 3.75 times more abundant than lithium in Earth's crust. And critically, zinc is divalent — 2 electrons per ion — giving a theoretical capacity of 820 mAh/g, more than double lithium-graphite.
>
> Aqueous zinc-ion batteries are the most compelling post-lithium candidate for grid-scale energy storage. But there's a fundamental challenge — the zinc anode/electrolyte interface."

---

## SLIDE 4 — CORE PROBLEMS AT THE Zn ANODE
**⏱ ~1 minute**

### What's on screen:
- Left: 3 compact cards — HER (amber), Dendrite Growth (blue), Passivation (olive) with bullet points
- Right: **real photograph** of metallic dendrite tree growth (lead displacement reaction — identical morphology to zinc dendrites)
- Callout: "All three failure modes controlled by the Zn²⁺ solvation shell"

### Script:
> "Three failure modes destroy zinc battery performance. First, **Hydrogen Evolution Reaction** — water in the electrolyte is reduced at the zinc surface, producing H₂ gas, consuming electrolyte, raising local pH, and forming insulating ZnO.
>
> Second, **dendrite growth** — the real photo on the right shows exactly this: non-uniform metal deposition creates tree-like protrusions. In zinc batteries these dendrites puncture the separator.
>
> Third, **passivation** — ZnO, Zn(OH)₂, and basic zinc hydroxide sulfates coat the anode, blocking further deposition and increasing impedance.
>
> The key insight: **all three are controlled by what's in Zn²⁺'s solvation shell**. Water molecules in that first shell drive HER."

---

## SLIDE 5 — WHY THIOUREA SC(NH₂)₂?
**⏱ ~1 minute**

### What's on screen:
- Left: bullet list of thiourea properties (soft S-donor, zincophilic, HER suppression, bond lengths, MW)
- Right: **two real Wikimedia molecular models** — 3D ball-and-stick (S=yellow, C=black, N=blue, H=white) + space-filling van der Waals model
- Callout: "Key question: Does thiourea maintain coordination at elevated T?"

### Script:
> "This is our additive — thiourea, SC(NH₂)₂. You can see the actual 3D structure — the sulfur atom in yellow is the coordination site. Thiourea is a soft S-donor ligand in HSAB theory, meaning it has strong affinity for soft Lewis acids like Zn²⁺.
>
> The idea is: thiourea adsorbs on the zinc anode, displaces water from the solvation shell, suppresses HER, and promotes uniform deposition. The space-filling model on the right shows its compact planar geometry. MW is 76.12 g/mol with a C=S bond of 1.67 Å.
>
> But the critical question is: **does this coordination actually hold at higher temperatures like 320 or 340 K?** That's what our MD simulation investigates."

---

## SLIDE 6 — WHY THIS STUDY?
**⏱ ~45 seconds**

### What's on screen:
- Two columns: "What We Know" (green) | "What We Aim to Study" (amber)
- Italic equation box: "Does increasing T simply speed up diffusion... or reorganize the coordination shell entirely?"
- Callout: "This study systematically tracks 280–340 K"

### Script:
> "We already know that thiourea additives improve cycling at room temperature and form protective SEI layers. Electrochemical performance — coulombic efficiency, cycle life — is well documented.
>
> But what we don't have is a **molecular-level picture** of what's actually happening in the solvation shell. Which ligand is closest to Zn²⁺? Does thiourea really displace water? How does diffusion change with temperature?
>
> The key question framing our entire study: does higher temperature simply speed up diffusion, or does it fundamentally reorganize the coordination shell? Our MD results answer this."

---

## SLIDE 7 — RESEARCH OBJECTIVES
**⏱ ~45 seconds**

### What's on screen:
- Left: numbered list of 5 objectives
- Right: simulation parameters table (10 ns, 14,696 atoms, ~2M ZnSO₄, Param Shivaay HPC)

### Script:
> "Five specific objectives. One: build and validate an MD model with 14,696 atoms. Two: simulate at 280, 300, 320, and 340 K, 10 ns each. Three: compute RDFs for all three ligand pairs — Zn–S, Zn–O(SO₄), Zn–O(water). Four: extract diffusion coefficients D(T) from MSD. Five: explain any anomalies in the diffusion data.
>
> The parameter table shows our key numbers — 10,000 frames per temperature, ~2M ZnSO₄ concentration, thiourea to zinc ratio of 1:15, run on Param Shivaay HPC at IIT BHU."

---

## SLIDE 8 — MOLECULAR DYNAMICS — HOW IT WORKS
**⏱ ~1 minute**

### What's on screen:
- Pipeline: Potential Energy → Force → Acceleration → Integration
- Left: equation F = −∇U(r) → a = F/m → v(t+½dt) → r(t+dt)
- Right: interaction table (Coulomb, LJ, bond, angle, dihedral)
- Callout: "10 ns = 5 million integration steps"

### Script:
> "A quick primer on MD. We start with the potential energy from the force field — Lennard-Jones for van der Waals, Coulomb with Particle Mesh Ewald for long-range electrostatics, plus bonded terms for stretches, bends, and dihedrals.
>
> At each timestep of 2 femtoseconds: compute all pairwise forces, update velocities with the leapfrog integrator, update positions. Repeat.
>
> Over a 10 ns simulation that's **5 million integration steps** tracking every atom. The trajectory gives us all the structural and dynamic information we need."

---

## SLIDE 9 — SYSTEM COMPOSITION (14,696 Atoms)
**⏱ ~45 seconds**

### What's on screen:
- Left: species table — Zn²⁺ (150), SO₄²⁻ (150), Thiourea (10), TIP4P H₂O (3,429), Total 14,696
- Right: **interactive rotatable 3D molecular viewer** — drag to rotate, scroll to zoom (shows actual simulation box with cyan Zn²⁺, red/white water, yellow sulfur)
- Callout: charge neutrality math

### Script:
> "Our simulation box contains 14,696 atoms. 150 zinc ions, 150 sulfate ions, just 10 thiourea molecules, and 3,429 TIP4P water molecules. On the right is the actual 3D structure — you can rotate it to see the molecular arrangement.
>
> The cyan spheres are Zn²⁺ ions. Notice they're surrounded predominantly by the red oxygen atoms. The net charge is exactly zero: 150×(+2) + 150×(−2) = 0. Box shrinks from 5.0 to 4.71 nm³ during NPT equilibration — 5.9% shrinkage, consistent with 2M ZnSO₄."

---

## SLIDE 10 — SIMULATION WORKFLOW
**⏱ ~45 seconds**

### What's on screen:
- Pipeline: Packmol → Minimize → NVT 500ps → NPT 3ns → Production → Analysis
- Table: each stage with duration and key metric achieved

### Script:
> "The simulation follows standard MD protocol. Packmol places molecules randomly in a 5 nm box. Energy minimization with steepest descent removes bad contacts. NVT for 500 picoseconds brings temperature to 300 K using velocity-rescale thermostat. NPT for 3 nanoseconds equilibrates pressure and density using Berendsen barostat. Then 10 ns of production MD collecting 10,000 analysis frames.
>
> Each stage has a clear acceptance criterion — you can see the achieved values: 299.86 K for NVT, 1389.7 kg/m³ for NPT density."

---

## SLIDE 11 — SYSTEM VALIDATION — ALL CHECKS PASS
**⏱ ~1 minute**

### What's on screen:
- Large validation table with 9 rows — green ✓ on every row
- Columns: Criterion | Simulation | Reference | Δ | ✓/✗
- Callout: "SO₄²⁻ dominates — stable complex [Zn(SO₄)ₙ(H₂O)ₘ(Tu)ₖ]"

### Script:
> "Before we can trust the results, we need to validate the simulation. This table shows all 9 validation checks — and every single one passes.
>
> Temperature within 0.05% of target. Density consistent with literature for 2M ZnSO₄. Energy minimization converged. Pressure fluctuates around zero — normal for small simulation boxes.
>
> And here's the first glimpse of results: the RDF peaks confirm SO₄ at 0.176 nm with g(r) = 30.1 — **dominant by a factor of 6 over water**. Thiourea at 0.228 nm with g(r) = 1.6 — much weaker. MSD shows proper diffusive regime. System is validated."

---

## SLIDE 12 — EQUILIBRATION CHECKLIST
**⏱ ~45 seconds**

### What's on screen:
- 5 green-checkmark cards: Energy Minimization | NVT Temperature | NPT Density | NPT Pressure | Zn²⁺ Diffusion
- Each card shows value, detail line with actual numbers, and criterion
- Green banner: "All 5/5 equilibration criteria PASSED — system ready for production MD"

### Script:
> "The equilibration checklist provides a clean summary. Energy converged from −147,576 to −600,328 kJ/mol. Temperature stabilised at 299.86 K — deviation under 1%. Density plateau at 1389.7 kg/m³ with only 0.32% fluctuation. Pressure mean essentially zero. MSD in the linear diffusive regime.
>
> **All 5 out of 5 checks pass. System is ready for production analysis.**"

---

## SLIDE 13 — CONVERGENCE DETAILS (4 GROMACS Plots)
**⏱ ~30 seconds**

### What's on screen:
- 2×2 grid of GROMACS output plots: energy minimisation curve | NVT temperature vs time | NPT density vs time | NPT pressure vs time
- Each with caption showing the actual value achieved

### Script:
> "These are the raw GROMACS output plots. Energy drops steeply and plateaus — no oscillation. Temperature fluctuates tightly around 300 K with a standard deviation of only 3 K. Density shows a clear convergence plateau. Pressure oscillates around zero — the large fluctuations are expected and normal for small simulation systems. All criteria met."

---

## SLIDE 14 — RADIAL DISTRIBUTION FUNCTION — g(r)
**⏱ ~1 minute**

### What's on screen:
- Left: animated Recharts plot showing a model RDF curve with labelled shells
- Right: bullet list explaining what g(r) means
- Equation: g(r) = (1/ρ) × (1/N) × Σ δ(r − rᵢⱼ) / (4πr²dr)
- Callout: "We compute g(r) for 3 pairs"

### Script:
> "Before showing results, let me explain the key analysis tool. The Radial Distribution Function, g(r), tells us the probability of finding atom B at distance r from atom A, normalised to bulk density.
>
> g(r) = 1 means bulk-like, random distribution. g(r) > 1 means enhanced probability — a **coordination shell**. g(r) → 0 at small r is just excluded volume.
>
> The first peak position gives the bond distance. The height gives coordination strength. Integration under the peak gives the coordination number.
>
> We compute this for three pairs: Zn–O(SO₄), Zn–O(water), and Zn–S(thiourea)."

---

## SLIDE 15 — RDF FROM GROMACS — 300 K
**⏱ ~1 minute**

### What's on screen:
- Top row: two RDF plots side by side — Zn–Water (blue curve) | Zn–Thiourea (purple curve)
- Bottom: Zn–SO₄ plot (left) + key observations bullets (right)
- Sulphate peak visually dwarfs the others

### Script:
> "Here are the RDF results directly from GROMACS at 300 K.
>
> The **Zn–Water** RDF shows a sharp first shell peak — expected, water is the solvent. **Zn–Thiourea** shows a weaker, broader peak, already suggesting it's not the dominant coordinator.
>
> But the **Zn–Sulphate** plot is striking — that peak reaches g(r) ≈ 32. That's 32 times bulk density at 0.176 nm. This is driven by pure Coulombic attraction: the +2/−2 charge interaction between Zn²⁺ and SO₄²⁻ is enormous.
>
> All RDFs converge to g(r) = 1 at large r — confirming proper statistical sampling."

---

## SLIDE 16 — FIRST COORDINATION SHELL — ZOOMED VIEW
**⏱ ~30 seconds**

### What's on screen:
- Single large image: three zoomed panels showing 0–0.5 nm region for all three pairs at 300 K
- Peak positions and heights annotated on the plot
- Callout: "SO₄²⁻ peak is off-scale at g(r) = 30.1"

### Script:
> "Zooming into the critical first coordination shell region. You can now clearly see the separation of peaks: SO₄ at 0.176 nm, water at 0.206 nm, thiourea at 0.228 nm.
>
> The hierarchy is unambiguous. Sulphate is closest, strongest. Water is second. Thiourea is furthest and weakest. The SO₄ peak is literally off the scale of this zoomed plot at g(r) = 30."

---

## SLIDE 17 — RDF TEMPERATURE COMPARISON (280–340 K)
**⏱ ~1 minute**

### What's on screen:
- 2×2 grid: Zn–SO₄ (all T) | Zn–Water (all T) | Zn–Ligand (all T) | First Shell Peak Variation
- Colours: blue=280K, orange=300K, green=320K, red=340K
- Callout: "SO₄ & Water stable. Ligand drops with T."

### Script:
> "Now the temperature dependence — four plots, 280 to 340 K.
>
> Look at **Zn–SO₄**: the peak barely moves. All four temperatures essentially overlap. Sulphate coordination is thermally robust.
>
> **Zn–Water**: again, very stable across all temperatures. The first hydration shell is not disrupted by heating.
>
> But **Zn–Ligand** tells a different story. At 280 K, the peak reaches g(r) ≈ 2.0. At 300, 320, and 340 K it drops to about 0.9. The thiourea coordination is clearly **disrupted by thermal energy**.
>
> The first shell peak variation plot in the bottom right confirms — 280 K has a distinctly sharper, higher peak. Higher temperature weakens the thiourea–Zn²⁺ interaction."

---

## SLIDE 18 — OVERALL RDF COMPARISON (300 K Overlay)
**⏱ ~45 seconds**

### What's on screen:
- Left: overlay RDF plot with all three pairs on same axes (300 K)
- Right: bullet list — coordination hierarchy, peak positions, shell separation
- Callout: "Sulphate controls the first shell — thiourea is outer-shell"

### Script:
> "Putting all three on one plot makes the hierarchy crystal clear.
>
> Sulphate dominates at 0.176 nm with g(r) ≈ 30. Water is second at g(r) ≈ 4.7 at 0.206 nm. Thiourea is weakest at g(r) ≈ 1.6 at 0.228 nm. There's a clear spatial separation between all three shells.
>
> This answers our central question definitively: **thiourea is NOT an inner-shell coordinator**. It sits in the outer coordination shell. Sulphate controls the geometry of the first coordination sphere through electrostatic dominance."

---

## SLIDE 19 — RDF RESULTS SUMMARY — 300 K
**⏱ ~30 seconds**

### What's on screen:
- Summary table: 3 rows — SO₄, Water, Thiourea with peak position, g(r) value, first minimum, interpretation
- Two columns: Key Findings (green) | Implications (amber)

### Script:
> "The results table. SO₄ at 0.176 nm, g(r) 30.1 — dominant ion pairing. Water at 0.206 nm, g(r) 4.7 — stable solvation backbone. Thiourea at 0.228 nm, g(r) only 1.6 — weak outer-shell coordination.
>
> The implication: the actual coordination complex is [Zn(SO₄)ₙ(H₂O)ₘ(Tu)ₖ] where SO₄ fills the inner shell, water fills the second layer, and thiourea acts as an outer modifier."

---

## SLIDE 20 — MEAN SQUARE DISPLACEMENT — MSD ANALYSIS
**⏱ ~1 minute**

### What's on screen:
- Left: user-provided MSD graph — 4 coloured curves (280, 300, 320, 340 K), all starting from origin
- Right: data table — Temp | MSD (nm²) | D (×10⁻⁵ cm²/s) | D Change
- Callout: "340 K anomalous drop — solvation shell restructuring"

### Script:
> "Now the dynamics. The MSD plot shows how far Zn²⁺ travels on average as a function of time. All four temperatures show linear growth — we're in the proper diffusive regime.
>
> From the table: MSD increases from 0.567 nm² at 280 K up to 1.087 nm² at 340 K. But look at the diffusion coefficient D — it peaks at 320 K with +67% over baseline, then **drops at 340 K** to only +56%.
>
> This anomaly is the key finding: **more thermal energy at 340 K doesn't translate to faster diffusion**. The Einstein relation D = MSD/6t shows D actually decreases. This points to solvation shell restructuring — the coordination environment changes in a way that slows effective transport."

---

## SLIDE 21 — MSD & DIFFUSION — TEMPERATURE DEPENDENCE
**⏱ ~30 seconds**

### What's on screen:
- Full-width side-by-side bar charts: Left = MSD at each temperature | Right = Diffusion coefficient at each temperature
- D clearly peaks at 320 K then drops at 340 K
- Callout: "MSD monotonic. D non-monotonic — anomaly at 340 K."

### Script:
> "These bar charts make the anomaly unmissable. MSD increases monotonically — 0.57, 0.76, 0.99, 1.09 nm² across the four temperatures. No surprise there.
>
> But the diffusion coefficient peaks at 320 K and drops at 340 K. Despite having more thermal energy, Zn²⁺ diffuses **slower** at 340 K than at 320 K. This non-monotonic behaviour is the signature of a structural change — likely reorganisation of the SO₄ and water coordination shells at elevated temperature."

---

## SLIDE 22 — IMPLICATIONS FOR BATTERY DESIGN
**⏱ ~1 minute**

### What's on screen:
- Pipeline: Electrolyte → Solvation Shell → HER / SEI → Design
- Table: Property | Controlled By | This Work's Finding (5 rows)
- Callout: "SO₄ dominance must be accounted for in electrolyte design"

### Script:
> "What does all this mean for battery engineering?
>
> HER rate is controlled by water in the first shell — but our data shows SO₄ dominates and displaces water. So the electrolyte itself is partially self-protecting.
>
> The coordination hierarchy SO₄ >> Water >> Thiourea means thiourea doesn't sit where we assumed. Its protective role comes from outer-shell modification and anode surface adsorption — not direct Zn²⁺ solvation competition.
>
> For battery design: **don't rely on thiourea to displace water from the Zn²⁺ solvation shell** — that's already done by sulphate. Instead, thiourea's value is in its SEI-forming and anode-adsorption properties."

---

## SLIDE 23 — CONCLUSIONS
**⏱ ~1 minute**

### What's on screen:
- Left: 5 numbered conclusions with ✓ marks
- Right: summary table with all key numerical values
- Callout: "Electrolyte design must account for temperature-dependent coordination dynamics"

### Script:
> "Five conclusions from this work.
>
> One: validated MD model — density 1389.7 kg/m³, temperature 299.86 K, all criteria met.
> Two: SO₄²⁻ dominates the first coordination shell — g(r) ≈ 30 at 0.176 nm.
> Three: water forms the stable second coordination layer at g(r) ≈ 4.7.
> Four: thiourea is an outer-shell modifier, g(r) ≈ 1.6 — not an inner-shell coordinator.
> Five: MSD confirms anomalous diffusion at 340 K — D drops despite highest MSD, indicating solvation shell restructuring.
>
> The broader message: **electrolyte design for aqueous zinc batteries must account for temperature-dependent coordination dynamics**, not just room-temperature electrochemistry."

---

## SLIDE 24 — THANK YOU
**⏱ ~15 seconds**

### What's on screen:
- Large IIT BHU crest (bright)
- "Thank You" heading
- Supervisor: Dr. Rosy | Mentor: Mr. Digvijay Andotra
- Tools acknowledged: Param Shivaay HPC, GROMACS, Packmol, ACPYPE, Open Babel, VMD
- Footer: progress bar at 24/24

### Script:
> "Thank you. I'd like to sincerely thank my supervisor Dr. Rosy and mentor Mr. Digvijay Andotra for their guidance throughout this work. This simulation was run on Param Shivaay HPC at IIT BHU. I'm happy to take questions."

---

# QUICK REFERENCE — Numbers to Memorise

| What | Value |
|------|-------|
| System size | 14,696 atoms |
| Temperatures | 280, 300, 320, 340 K |
| Production time | 10 ns per T |
| SO₄ peak | g(r) ≈ 30 at **0.176 nm** |
| Water peak | g(r) ≈ 4.7 at **0.206 nm** |
| Thiourea peak | g(r) ≈ 1.6 at **0.228 nm** |
| NPT Density | 1389.7 ± 4.5 kg/m³ |
| NVT Temperature | 299.86 ± 3.13 K |
| MSD at 300 K | 0.644 nm² at 10 ns |
| D anomaly | Peaks at 320 K, drops at 340 K |
| Box shrinkage | 5.0 → 4.71 nm³ (−5.9%) |
| Zn:SO₄:Tu ratio | 150 : 150 : 10 |

# 3 SENTENCES TO SUMMARISE THE WHOLE THESIS
1. **SO₄²⁻ dominates the inner solvation shell** around Zn²⁺ (g(r) ≈ 30) — not thiourea.
2. **Thiourea acts as an outer-shell modifier** rather than a direct Zn²⁺ coordinator.
3. **Diffusion is non-monotonic with temperature** — D peaks at 320 K and drops at 340 K, suggesting structural reorganisation of the solvation shell.
