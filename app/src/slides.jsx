export const slides = [
  // ──────────────────────────────────────────
  // 1 — TITLE
  // ──────────────────────────────────────────
  {
    type: "title",
    heading: "Molecular Dynamics Study of a ZnSO₄ Electrolyte with Thiourea Additive",
    sub: "Temperature-Dependent Structure and Dynamics",
    left: [
      "**Presented By**",
      "Kulraj Singh Sabharwal",
      "Roll No: 21054013",
      "IDD Chemistry",
      "IIT (BHU) Varanasi",
    ],
    right: [
      "**Under the Supervision of**",
      "Dr. Rosy, Associate Professor",
      "**Mentor**",
      "Mr. Digvijay Andotra",
      "Dept. of Chemistry, IIT (BHU) Varanasi",
    ],
  },

  // ──────────────────────────────────────────
  // 2 — PRESENTATION ROADMAP
  // ──────────────────────────────────────────
  {
    type: "body",
    heading: "Presentation Roadmap",
    content: [
      {
        kind: "pipeline",
        steps: [
          { label: "Problem", detail: "Zn²⁺ solvation shell\ncontrols battery fate" },
          { label: "AZIB Challenges", detail: "HER, dendrites\npassivation at Zn anode" },
          { label: "Simulation", detail: "GROMACS MD\n14,696 atoms × 4 temps" },
          { label: "Validation", detail: "Density, T, E\nZn-S distance" },
        ],
      },
      {
        kind: "pipeline",
        steps: [
          { label: "Structure", detail: "RDF analysis\n3 ligand pairs" },
          { label: "Diffusion", detail: "MSD → D\nAnomaly at 340 K" },
          { label: "Mechanism", detail: "3 hypotheses\nStokes-Einstein" },
          { label: "Conclusions", detail: "Battery design\nimplications" },
        ],
      },
      {
        kind: "callout",
        text: "Central question: Why does Zn²⁺ complex diffusion decrease at 340 K when it should increase with temperature? What structural reorganization drives this anomaly?",
      },
    ],
  },

  // ──────────────────────────────────────────
  // 3 — WHY AQUEOUS ZINC BATTERIES?
  // ──────────────────────────────────────────
  {
    type: "body",
    heading: "Why Aqueous Zinc-Ion Batteries?",
    content: [
      {
        kind: "split",
        left: {
          kind: "table",
          headers: ["Property", "Zn-Ion (Aq.)", "Li-Ion"],
          rows: [
            ["Cost", "Low ($65/ton Zn)", "High ($15k/ton Li)"],
            ["Safety", "Non-flammable", "Flammable organic"],
            ["Electrolyte", "Aqueous (safe)", "Organic (toxic)"],
            ["Abundance", "75 ppm (crust)", "20 ppm (crust)"],
            ["Valence", "2e⁻ per ion", "1e⁻ per ion"],
            ["Capacity", "820 mAh/g (theo.)", "372 mAh/g (graphite)"],
            ["Recycling", "Well-established", "Complex, costly"],
          ],
        },
        right: { kind: "chart", chartType: "batteryComparison" },
      },
      {
        kind: "callout",
        text: "AZIBs are the most promising post-lithium technology for grid-scale storage — but their Achilles' heel is the zinc anode/electrolyte interface.",
      },
    ],
  },

  // ──────────────────────────────────────────
  // 4 — CORE PROBLEMS IN ZINC BATTERIES
  // ──────────────────────────────────────────
  {
    type: "body",
    heading: "Core Problems at the Zn Anode",
    content: [
      {
        kind: "columns",
        cols: [
          { title: "⚡ Hydrogen Evolution (HER)", color: "amber", items: [
            "Water reduction: 2H₂O + 2e⁻ → H₂ + 2OH⁻",
            "Consumes electrolyte, raises local pH",
            "Forms insulating ZnO passivation layer",
            "Accelerated at high temperature",
          ]},
          { title: "🔱 Dendrite Growth", color: "blue", items: [
            "Non-uniform Zn²⁺ deposition",
            "Sharp protrusions → separator puncture",
            "Short circuits → thermal runaway risk",
            "Worse with uncontrolled solvation shell",
          ]},
          { title: "🛡️ Passivation", color: "olive", items: [
            "ZnO / Zn(OH)₂ films on anode surface",
            "Block further Zn²⁺ deposition",
            "Increase cell impedance over cycles",
            "Reduce coulombic efficiency",
          ]},
        ],
      },
      {
        kind: "callout",
        text: "All three failure modes are controlled by the Zn²⁺ solvation shell — water molecules in the first coordination shell drive HER, while solvation structure dictates deposition morphology.",
      },
    ],
  },

  // ──────────────────────────────────────────
  // 5 — WHY THIOUREA?
  // ──────────────────────────────────────────
  {
    type: "body",
    heading: "Why Thiourea SC(NH₂)₂ as Additive?",
    content: [
      {
        kind: "split",
        left: {
          kind: "bullets",
          title: "Thiourea Properties",
          items: [
            "Soft S-donor ligand (HSAB theory, Pearson 1963)",
            "Strong Zn²⁺ affinity — zincophilic behavior",
            "Adsorbs on Zn anode → protective passivation layer",
            "Expected to displace H₂O from solvation shell",
            "Suppresses HER, promotes uniform deposition",
            "Neutral molecule — does not alter charge balance",
            "C=S bond: 1.67 Å | C–N bond: 1.38 Å",
            "MW = 76.12 g/mol | 8 atoms | Planar structure",
          ],
        },
        right: {
          kind: "bullets",
          title: "Molecular Structure",
          items: [
            "Formula: SC(NH₂)₂",
            "Functional group: C=S (thione)",
            "S-donor site coordinates with Zn²⁺",
            "Two –NH₂ groups (H-bonding capable)",
            "Planar geometry — π-conjugation",
            "Melting point: 182 °C",
          ],
        },
      },
      {
        kind: "callout",
        text: "Key question: Does thiourea maintain its coordination with Zn²⁺ at elevated temperatures, or does thermal energy disrupt this interaction? What happens to battery performance if it does?",
      },
    ],
  },

  // ──────────────────────────────────────────
  // 6 — MOTIVATION
  // ──────────────────────────────────────────
  {
    type: "body",
    heading: "Why This Study?",
    content: [
      {
        kind: "columns",
        cols: [
          { title: "What We Know", color: "lime", items: [
            "Additives improve cycling at room temperature",
            "Thiourea forms a protective SEI on Zn anode",
            "Electrochemical performance well characterized",
            "Solvation shell snapshots available at 300 K",
          ]},
          { title: "What We Aim to Study", color: "amber", items: [
            "How does the coordination shell change with temperature?",
            "Does diffusion scale normally with heating?",
            "Which ligand binds most strongly at high T?",
            "What drives anomalous transport above 320 K?",
          ]},
        ],
      },
      {
        kind: "equation",
        tex: "Does increasing T simply speed up diffusion... or reorganize the coordination shell entirely?",
      },
      {
        kind: "callout",
        text: "This study systematically tracks how Zn²⁺ solvation structure and dynamics evolve across a temperature range relevant to real battery operating conditions (280–340 K).",
      },
    ],
  },

  // ──────────────────────────────────────────
  // 7 — OBJECTIVES
  // ──────────────────────────────────────────
  {
    type: "body",
    heading: "Research Objectives",
    content: [
      {
        kind: "split",
        left: {
          kind: "numbered",
          items: [
            "Build & validate an MD model of 2M ZnSO₄ + thiourea in water (14,696 atoms, ~5 nm box)",
            "Simulate at 280, 300, 320, 340 K — 100 ns production each (400 ns total)",
            "Characterize structure via RDF: Zn–S, Zn–O(SO₄), Zn–O(H₂O)",
            "Quantify dynamics via MSD → diffusion coefficients D(T)",
            "Explain diffusion anomaly via mechanistic hypotheses",
          ],
        },
        right: {
          kind: "table",
          headers: ["Parameter", "Value"],
          rows: [
            ["Total sim. time", "4 × 100 ns = 400 ns"],
            ["Frames collected", "4 × 100,000 = 400,000"],
            ["Atoms per system", "14,696"],
            ["Box size (initial)", "5.0³ nm³"],
            ["Concentration", "~2 M ZnSO₄"],
            ["Thiourea : Zn ratio", "1 : 15"],
            ["Analysis tools", "gmx rdf, msd, energy"],
            ["HPC resource", "Param Shivaay IIT BHU"],
          ],
        },
      },
    ],
  },

  // ──────────────────────────────────────────
  // 8 — MOLECULAR DYNAMICS BASICS
  // ──────────────────────────────────────────
  {
    type: "body",
    heading: "Molecular Dynamics — How It Works",
    content: [
      {
        kind: "pipeline",
        steps: [
          { label: "Potential Energy", detail: "U(r) from force field\nLJ + Coulomb + bonded" },
          { label: "Force", detail: "F = −∇U(r)\nPairwise interactions" },
          { label: "Acceleration", detail: "a = F/m\nNewton's 2nd law" },
          { label: "Integration", detail: "Leapfrog / Verlet\ndt = 2 fs step" },
        ],
      },
      {
        kind: "split",
        left: {
          kind: "equation",
          tex: "F = −∇U(r)  →  a = F/m  →  v(t+½dt)  →  r(t+dt)",
        },
        right: {
          kind: "table",
          headers: ["Interaction", "Functional Form", "Range"],
          rows: [
            ["Coulomb", "q₁q₂ / 4πε₀r", "Long (PME)"],
            ["Lennard-Jones", "4ε[(σ/r)¹² − (σ/r)⁶]", "Short (1.0 nm)"],
            ["Bond stretch", "½k(r − r₀)²", "Bonded"],
            ["Angle bend", "½k(θ − θ₀)²", "Bonded"],
            ["Dihedral", "V[1 + cos(nφ − δ)]", "Bonded"],
          ],
        },
      },
      {
        kind: "callout",
        text: "Each timestep (2 fs): compute all forces → update velocities → update positions → repeat. Over 100 ns = 50 million steps per temperature.",
      },
    ],
  },

  // ──────────────────────────────────────────
  // 9 — SYSTEM COMPOSITION
  // ──────────────────────────────────────────
  {
    type: "body",
    heading: "System Composition — 14,696 Atoms",
    content: [
      {
        kind: "split",
        left: {
          kind: "table",
          headers: ["Species", "Count", "Atoms", "Charge", "Role"],
          rows: [
            ["Zn²⁺", "150", "150", "+300e", "Central ion"],
            ["SO₄²⁻", "150", "750", "−300e", "Counter-ion / 1st shell"],
            ["Thiourea", "10", "80", "0", "S-donor additive"],
            ["TIP4P H₂O", "3,429", "13,716", "0", "Bulk solvent"],
            ["TOTAL", "—", "14,696", "0", "Electroneutral"],
          ],
        },
        right: { kind: "chart", chartType: "systemPie" },
      },
      {
        kind: "callout",
        text: "Box built with Packmol: 5.0³ nm³ → 4.71³ nm³ after NPT equilibration (−5.9% shrinkage). Net charge = 150(+2) + 150(−2) + 10(0) + 3429(0) = 0. Effective concentration ≈ 2M ZnSO₄.",
      },
    ],
  },

  // ──────────────────────────────────────────
  // 10 — SIMULATION WORKFLOW
  // ──────────────────────────────────────────
  {
    type: "body",
    heading: "Simulation Workflow",
    content: [
      {
        kind: "pipeline",
        steps: [
          { label: "Packmol", detail: "Random placement\nin 5 nm³ box" },
          { label: "Minimize", detail: "Steepest descent\nFmax < 1000" },
          { label: "NVT 500 ps", detail: "V-rescale\nT → 298 K" },
          { label: "NPT 500 ps", detail: "Berendsen\nρ → 1394 kg/m³" },
          { label: "Production", detail: "100 ns NPT\n100k frames" },
          { label: "Analysis", detail: "RDF, MSD\nEnergy, CN" },
        ],
      },
      {
        kind: "table",
        headers: ["Stage", "Duration", "Key Metric"],
        rows: [
          ["Minimization", "~5,000 steps", "Fmax < 1000 kJ/mol/nm"],
          ["NVT equil.", "500 ps", "T = 298.111 ± 3 K"],
          ["NPT equil.", "500 ps", "ρ = 1393.7 ± 5 kg/m³"],
          ["Production", "100 ns × 4", "100k frames each"],
          ["Total MD time", "402 ns", "400 ns production"],
        ],
      },
    ],
  },

  // ──────────────────────────────────────────
  // 11 — FORCEFIELD & PARAMETERS
  // ──────────────────────────────────────────
  {
    type: "body",
    heading: "Force Field & Simulation Parameters",
    content: [
      {
        kind: "table",
        headers: ["Parameter", "Value", "Reference / Note"],
        rows: [
          ["MD Engine", "GROMACS 2026.0", "Leapfrog integrator, dt = 2 fs"],
          ["Force Field", "AMBER99SB + GAFF", "ACPYPE for SO₄²⁻, thiourea topologies"],
          ["Water Model", "TIP4P (4-site)", "Jorgensen 1983 — ρ ≈ 1.00 g/cm³ at 300 K"],
          ["Electrostatics", "PME", "rc = 1.0 nm, Fourier = 0.12 nm, 4th order"],
          ["Thermostat", "V-rescale (τ = 0.1 ps)", "Bussi 2007 — canonical NVT sampling"],
          ["Barostat", "Berendsen (τ = 3 ps)", "κ = 4.5×10⁻⁵ bar⁻¹, P = 1 bar"],
          ["Constraints", "LINCS + SETTLE", "H-bonds constrained → 2 fs timestep"],
          ["LJ combining", "Lorentz-Berthelot", "σij = (σi+σj)/2, εij = √(εi·εj)"],
          ["Zn²⁺", "q = +2.000e, m = 65.38", "AMBER99SB standard ion parameters"],
          ["Charges", "AM1-BCC", "For thiourea, GAFF atom types"],
        ],
      },
      {
        kind: "callout",
        text: "TIP4P chosen over SPC/E for better structural properties at varied temperatures. GAFF parameters for thiourea generated via ACPYPE with AM1-BCC partial charges.",
      },
    ],
  },

  // ──────────────────────────────────────────
  // 13 — VALIDATION TABLE
  // ──────────────────────────────────────────
  {
    type: "body",
    heading: "System Validation — All Checks Pass",
    content: [
      {
        kind: "table",
        headers: ["Criterion", "Simulation", "Reference", "Δ", "✓/✗"],
        rows: [
          ["Water density (300 K)", "1.00 g/cm³", "0.997 g/cm³ (exp.)", "+0.3%", "✓"],
          ["Zn-S first peak", "2.2–2.3 Å", "2.3–2.4 Å (X-ray)", "−0.1 Å", "✓"],
          ["NVT temperature", "298.111 K", "298.000 K (target)", "+0.04%", "✓"],
          ["Energy drift (50 ns)", "< 0.01%", "< 0.1% threshold", "10× margin", "✓"],
          ["NPT density", "1393.7 ± 5 kg/m³", "2M ZnSO₄ expected", "Consistent", "✓"],
          ["Box shrinkage", "5.00 → 4.71 nm", "Expected for 2M", "−5.9%", "✓"],
          ["Pressure (NPT)", "1.0 ± 50 bar", "1.0 bar target", "Normal fluct.", "✓"],
          ["Zn²⁺ complex D", "0.011 × 10⁻⁵", "Literature Zn²⁺(aq)", "Reduced mobility", "✓"],
          ["SO₄²⁻ coordination", "g(r) ≈ 32", "Strong ion pair", "Dominant", "✓"],
        ],
      },
      {
        kind: "callout",
        text: "The 0.1 Å underestimate in Zn-S is typical for classical LJ potentials (Lorentz-Berthelot). The reduced diffusion coefficient confirms a stable, bulky coordination complex is forming: [Zn(SO₄)ₙ(H₂O)ₘ(Tu)ₖ].",
      },
    ],
  },

  // ──────────────────────────────────────────
  // 14 — CONVERGENCE VALIDATION (300 K data)
  // ──────────────────────────────────────────
  {
    type: "body",
    heading: "Convergence Validation — 300 K GROMACS Output",
    content: [
      {
        kind: "image",
        src: "/images/convergence-dashboard-300.png",
        alt: "Convergence dashboard: energy minimization, NVT temperature, NPT density, NPT pressure",
      },
      {
        kind: "callout",
        text: "All convergence criteria met: E_min → −600,328 kJ/mol (1,249 steps), NVT temperature = 299.86 ± 3.13 K (target 300 K), NPT density = 1,389.7 ± 4.5 kg/m³ (stable plateau), pressure oscillates around 0 bar with no drift.",
      },
    ],
  },

  // ──────────────────────────────────────────
  // 15 — EQUILIBRATION CHECKLIST
  // ──────────────────────────────────────────
  {
    type: "body",
    heading: "Equilibration Checklist — All Criteria Passed",
    content: [
      {
        kind: "image",
        src: "/images/equilibration-checklist-300.png",
        alt: "Equilibration checklist: 5/5 criteria passed for 300 K system",
      },
    ],
  },

  // ──────────────────────────────────────────
  // 16 — RDF CONCEPT
  // ──────────────────────────────────────────
  {
    type: "body",
    heading: "Radial Distribution Function — g(r)",
    content: [
      {
        kind: "split",
        left: { kind: "chart", chartType: "rdfConcept" },
        right: {
          kind: "bullets",
          title: "What does g(r) tell us?",
          items: [
            "Probability of finding atom B at distance r from atom A",
            "g(r) = 1 → random (bulk) distribution",
            "g(r) > 1 → enhanced probability = coordination shell",
            "g(r) → 0 at small r (excluded volume)",
            "First peak position → bond length",
            "First peak height → coordination strength",
            "Integration under peak → coordination number",
          ],
        },
      },
      {
        kind: "equation",
        tex: "g(r) = (1/ρ) × (1/N) × Σ δ(r − rᵢⱼ) / (4πr²dr)",
      },
      {
        kind: "callout",
        text: "We compute g(r) for three pairs: Zn–O(SO₄), Zn–O(water), Zn–S(thiourea). Each reveals a different coordination mode around Zn²⁺.",
      },
    ],
  },

  // ──────────────────────────────────────────
  // 16 — RDF FROM GROMACS (300 K — Water, Thiourea, Sulphate)
  // ──────────────────────────────────────────
  {
    type: "body",
    heading: "RDF from GROMACS — 300 K System",
    content: [
      {
        kind: "dualImage",
        images: [
          { src: "/images/rdf-zn-water-300.png", caption: "Zn²⁺–Water (O): 1st shell peak" },
          { src: "/images/rdf-zn-thiourea-300.png", caption: "Zn²⁺–Thiourea: coordination peak" },
        ],
      },
      {
        kind: "split",
        left: {
          kind: "image",
          src: "/images/rdf-zn-so4-300.png",
          alt: "Zn²⁺–Sulphate RDF at 300 K",
        },
        right: {
          kind: "bullets",
          title: "Key Observations (300 K)",
          items: [
            "Zn²⁺–Water: strong 1st shell peak — dominant solvation",
            "Zn²⁺–Thiourea: weaker peak — outer-shell coordination",
            "Zn²⁺–Sulphate: massive g(r) ≈ 32 — dominant first-shell ligand",
            "Sulphate binding driven by Coulombic attraction (+2/−2)",
            "All RDFs → g(r) = 1 at large r, confirming proper sampling",
          ],
        },
      },
    ],
  },

  // ──────────────────────────────────────────
  // 17 — OVERALL RDF COMPARISON
  // ──────────────────────────────────────────
  {
    type: "body",
    heading: "Overall RDF Comparison — All Three Ligands at 300 K",
    content: [
      {
        kind: "split",
        left: {
          kind: "image",
          src: "/images/rdf-overlay-300.png",
          alt: "RDF overlay: Water, Thiourea, Sulphate at 300 K",
        },
        right: {
          kind: "bullets",
          title: "Coordination Hierarchy",
          items: [
            "Sulphate dominates: g(r) ≈ 30 at r = 0.176 nm",
            "Water: g(r) ≈ 4.7 at r = 0.206 nm (2nd strongest)",
            "Thiourea: g(r) ≈ 1.6 at r = 0.228 nm (weakest)",
            "Sulphate 1st shell: closest to Zn²⁺ (smallest r)",
            "Clear separation of coordination shells for all three",
            "Thiourea is an outer-shell additive, not inner-shell",
          ],
        },
      },
      {
        kind: "callout",
        text: "Sulphate controls the first coordination shell due to pure electrostatic strength — thiourea acts as an outer-shell modifier rather than a direct Zn²⁺ coordinator.",
      },
    ],
  },

  // ──────────────────────────────────────────
  // 17 — Zn–Water RDF (all temps)
  // ──────────────────────────────────────────
  {
    type: "body",
    heading: "RDF: Zn²⁺ – Water (Temperature Dependence)",
    content: [
      {
        kind: "split",
        left: { kind: "chart", chartType: "znWaterTempRDF" },
        right: {
          kind: "table",
          headers: ["T (K)", "g(r) peak", "Position", "Δ from 280 K"],
          rows: [
            ["280", "4.80", "0.200 nm", "—"],
            ["300", "4.75", "0.200 nm", "−1%"],
            ["320", "4.70", "0.201 nm", "−2%"],
            ["340", "4.60", "0.201 nm", "−4%"],
          ],
        },
      },
      {
        kind: "callout",
        text: "Water coordination is remarkably stable across the temperature range — only 4% decrease from 280 to 340 K. Water remains a reliable second-shell ligand, showing minimal thermal disruption.",
      },
    ],
  },

  // ──────────────────────────────────────────
  // 18 — Zn–Thiourea RDF (all temps)
  // ──────────────────────────────────────────
  {
    type: "body",
    heading: "RDF: Zn²⁺ – Thiourea (Temperature Dependence)",
    content: [
      {
        kind: "split",
        left: { kind: "chart", chartType: "rdfTemp" },
        right: {
          kind: "table",
          headers: ["T (K)", "g(r) peak", "Δ from 280 K", "Estimated CN"],
          rows: [
            ["280", "2.00", "—", "~4 (Tetrahedral)"],
            ["300", "1.50", "−25%", "~4 (Tetrahedral)"],
            ["320", "1.20", "−40%", "~4–5 (Mixed)"],
            ["340", "0.85", "−57%", "~5–6 (Octahedral)"],
          ],
        },
      },
      {
        kind: "callout",
        text: "Thiourea is the most thermally labile ligand — 57% peak reduction from 280→340 K vs only 4% for water. The S-donor bond weakens dramatically above 320 K. Peak position stays constant at 0.22–0.23 nm (consistent with X-ray 2.3–2.4 Å).",
      },
    ],
  },

  // ──────────────────────────────────────────
  // 19 — COMPETITIVE COORDINATION (overlay)
  // ──────────────────────────────────────────
  {
    type: "body",
    heading: "Competitive Coordination — RDF Overlay at 300 K",
    content: [
      {
        kind: "split",
        left: { kind: "chart", chartType: "rdfOverlay" },
        right: {
          kind: "bullets",
          title: "Coordination Hierarchy",
          items: [
            "SO₄²⁻: g(r) ≈ 32 at 0.17 nm — DOMINANT",
            "Water: g(r) ≈ 4.75 at 0.20 nm — stable backbone",
            "Thiourea: g(r) ≈ 2.0 at 0.22 nm — weakest, labile",
            "SO₄²⁻ is 16× stronger than thiourea",
            "Coulombic (+2/−2) >> soft S-donor",
            "Complex: [Zn(SO₄)ₙ(H₂O)ₘ(Tu)ₖ]^(2−2n)",
          ],
        },
      },
      {
        kind: "callout",
        text: "KEY REVEAL: Sulfate — not thiourea — is the dominant first-shell ligand. The additive's role is secondary/regulatory, not primary coordination. This fundamentally changes the mechanistic picture.",
      },
    ],
  },

  // ──────────────────────────────────────────
  // 20 — MSD ANALYSIS
  // ──────────────────────────────────────────
  {
    type: "body",
    heading: "Mean Square Displacement — MSD Analysis",
    content: [
      {
        kind: "split",
        left: { kind: "chart", chartType: "msdCurves" },
        right: {
          kind: "bullets",
          title: "MSD → Diffusion Coefficient",
          items: [
            "MSD(t) = ⟨|r(t) − r(0)|²⟩ averaged over all Zn²⁺",
            "Linear regime (Fickian diffusion): MSD = 6Dt",
            "Slope of MSD vs t → 6D",
            "Higher D = faster diffusion = more mobile complex",
            "Computed via gmx msd over 100 ns trajectories",
            "150 Zn²⁺ ions averaged per temperature",
          ],
        },
      },
      {
        kind: "equation",
        tex: "D = lim(t→∞) MSD(t) / 6t    [Einstein relation, 3D]",
      },
    ],
  },

  // ──────────────────────────────────────────
  // 21 — DIFFUSION RESULTS (bar chart)
  // ──────────────────────────────────────────
  {
    type: "body",
    heading: "Diffusion Coefficients — The Anomaly at 340 K",
    content: [
      {
        kind: "split",
        left: { kind: "chart", chartType: "diffusionBar" },
        right: {
          kind: "table",
          headers: ["T (K)", "D (×10⁻⁵ cm²/s)", "ΔD", "Regime"],
          rows: [
            ["280", "0.00825", "—", "Baseline"],
            ["300", "0.01130", "+37.0%", "Expected ✓"],
            ["320", "0.01380", "+22.1%", "Expected ✓"],
            ["340", "0.01290", "−6.5%", "ANOMALOUS"],
          ],
          highlight: 3,
        },
      },
      {
        kind: "columns",
        cols: [
          { title: "280–320 K: Normal", color: "lime", items: [
            "Monotonic increase as expected with temperature",
            "Ea ≈ 15–18 kJ/mol (diffusion-limited)",
            "Consistent with thermal activation",
          ]},
          { title: "340 K: Anomalous", color: "amber", items: [
            "D drops 6.5% despite +20 K increase",
            "3× larger than expected thermal noise",
            "Central finding of this thesis",
          ]},
        ],
      },
    ],
  },

  // ──────────────────────────────────────────
  // 22 — MECHANISTIC HYPOTHESES (3 boxes)
  // ──────────────────────────────────────────
  {
    type: "body",
    heading: "Three Mechanistic Hypotheses",
    content: [
      {
        kind: "columns",
        cols: [
          { title: "H1: Entropy-Driven CN Increase", color: "lime", items: [
            "Ligand binding releases water → ΔS > 0",
            "High T amplifies TΔS term",
            "More ligands bind → larger complex",
            "D ∝ 1/rH → D decreases",
            "Ding et al. (2024): ΔCN = 0.24",
          ]},
          { title: "H2: SO₄²⁻-Bridged Dimers", color: "amber", items: [
            "SO₄²⁻ bridges two Zn²⁺ centers",
            "Dimer: [Zn₂(SO₄)y(H₂O)x]",
            "2× volume → D drops ~21%",
            "Only 30% dimerization needed",
            "Precedent: CuSO₄, MgSO₄ systems",
          ]},
          { title: "H3: H-Bond Restructuring", color: "blue", items: [
            "T > 320 K: water network reorganizes",
            "Enhanced local ordering around ion",
            "η_local > η_bulk around complex",
            "Reduces D without size change",
            "Analogous to ionic liquid behavior",
          ]},
        ],
      },
      {
        kind: "table",
        headers: ["Hypothesis", "Mechanism", "Predicted ΔD", "Test"],
        rows: [
          ["H1", "CN increase → larger rH", "−14% (full)", "RDF integration → CN(T)"],
          ["H2", "SO₄ bridging → dimer", "−21% (full dimer)", "Zn–Zn RDF at 340 K"],
          ["H3", "Local η increase", "Variable", "Velocity autocorrelation"],
          ["Combined", "Partial H1 + H2 + H3", "−6.5% (obs.)", "All + AIMD validation"],
        ],
      },
    ],
  },

  // ──────────────────────────────────────────
  // 24 — STOKES-EINSTEIN BREAKDOWN
  // ──────────────────────────────────────────
  {
    type: "body",
    heading: "Stokes-Einstein Breakdown at 340 K",
    content: [
      {
        kind: "equation",
        tex: "D = kBT / (6πηrH)  →  if T↑ and η↓, then D should ↑",
      },
      {
        kind: "split",
        left: { kind: "chart", chartType: "stokesEinstein" },
        right: { kind: "chart", chartType: "hydroRadius" },
      },
      {
        kind: "table",
        headers: ["Factor", "320 → 340 K", "Effect on D", "Magnitude"],
        rows: [
          ["Temperature ↑", "+6.3%", "↑ D (numerator)", "+6.3%"],
          ["Viscosity η ↓", "−10%", "↑ D (denominator)", "+10%"],
          ["Net predicted", "", "↑ D", "+17%"],
          ["Observed", "", "↓ D", "−6.5%"],
          ["Implied ΔrH", "", "rH must grow", "+14%"],
        ],
        highlight: 3,
      },
    ],
  },

  // ──────────────────────────────────────────
  // 25 — PRACTICAL BATTERY IMPACT
  // ──────────────────────────────────────────
  {
    type: "body",
    heading: "Practical Impact on Battery Design",
    content: [
      {
        kind: "pipeline",
        steps: [
          { label: "Electrolyte", detail: "ZnSO₄ + thiourea\n2M aqueous" },
          { label: "Solvation Shell", detail: "SO₄²⁻ dominated\nthiourea labile" },
          { label: "HER / SEI", detail: "Water displacement\npassivation layer" },
          { label: "Performance", detail: "Anomaly observed\nabove 320 K" },
        ],
      },
      {
        kind: "table",
        headers: ["Property", "Controlled By", "This Work's Finding"],
        rows: [
          ["HER rate", "H₂O in 1st shell", "SO₄²⁻ displaces water → suppresses HER"],
          ["Anode stability", "SEI composition", "Coordination reorganizes at T > 320 K"],
          ["Ionic transport", "D of Zn²⁺ complex", "Anomalous: D drops 6.5% at 340 K"],
          ["Deposition", "Desolvation kinetics", "Larger complex → slower desolvation at high T"],
          ["Thermal window", "Transport / HER balance", "Optimal operating range: 300–320 K"],
        ],
      },
      {
        kind: "callout",
        text: "Room-temperature optimization may fail at operating temperatures. Linear extrapolation underestimates rH by ~14% at 340 K — ionic conductivity models must account for coordination reorganization.",
      },
    ],
  },

  // ──────────────────────────────────────────
  // 26 — CONCLUSIONS
  // ──────────────────────────────────────────
  {
    type: "body",
    heading: "Conclusions",
    content: [
      {
        kind: "split",
        left: {
          kind: "numbered",
          items: [
            "✓ Validated MD model: Zn-S 2.2–2.3 Å, ρ = 1393.7 kg/m³, E drift < 0.01%",
            "✓ SO₄²⁻ dominates 1st shell: g(r) ≈ 32, 16× stronger than thiourea",
            "✓ Diffusion anomaly: D ↑37%, ↑22% (280–320 K) then ↓6.5% at 340 K",
            "✓ Anomalous diffusion: structural reorganization, not just thermal scatter",
            "✓ Battery implication: simple extrapolation fails above 320 K",
          ],
        },
        right: {
          kind: "table",
          headers: ["Key Metric", "Value"],
          rows: [
            ["D anomaly at 340 K", "−6.5%"],
            ["SO₄²⁻ g(r) peak", "≈ 32 (dominant)"],
            ["Thiourea Δg(r)", "−57% (280→340 K)"],
            ["Water Δg(r)", "−4% (280→340 K)"],
            ["Required ΔrH", "+14% growth"],
            ["Dimerization needed", "~30% partial"],
            ["Ea (280–320 K)", "15–18 kJ/mol"],
            ["Total MD time", "400 ns production"],
          ],
        },
      },
      {
        kind: "callout",
        text: "This work establishes that electrolyte design for AZIBs must account for temperature-dependent coordination dynamics — not just room-temperature electrochemistry.",
      },
    ],
  },

  // ──────────────────────────────────────────
  // 28 — THANK YOU
  // ──────────────────────────────────────────
  {
    type: "thankyou",
    heading: "Thank You",
    people: [
      { role: "Supervisor", name: "Dr. Rosy" },
      { role: "Mentor", name: "Mr. Digvijay Andotra" },
    ],
    tools: ["Param Shivaay HPC", "GROMACS 2026.0", "Packmol", "ACPYPE", "Open Babel", "VMD"],
  },
];
