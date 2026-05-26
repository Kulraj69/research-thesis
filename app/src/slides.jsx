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
          { label: "Simulation", detail: "GROMACS MD\n14,696 atoms at 300 K" },
          { label: "Validation", detail: "Density, T, E\nZn-S distance" },
        ],
      },
      {
        kind: "pipeline",
        steps: [
          { label: "Structure", detail: "RDF analysis\n3 ligand pairs" },
          { label: "Diffusion", detail: "MSD → D\nat 300 K" },
          { label: "Coordination", detail: "Shell hierarchy\nSO₄ vs Thiourea" },
          { label: "Conclusions", detail: "Battery design\nimplications" },
        ],
      },
      {
        kind: "columns",
        compact: true,
        cols: [
          {
            title: "Tools & Methods",
            color: "blue",
            items: [
              "GROMACS 2023.3 — all-atom MD",
              "OPLS-AA force field + TIP4P water",
              "Berendsen thermostat / barostat",
              "10 ns production trajectory",
            ],
          },
          {
            title: "Key Outputs",
            color: "olive",
            items: [
              "Radial distribution functions (RDF)",
              "Mean square displacement (MSD)",
              "Coordination number analysis",
              "Solvation shell composition at 300 K",
            ],
          },
        ],
      },
      {
        kind: "callout",
        text: "Central question: What is the solvation structure around Zn²⁺ in thiourea-containing electrolyte, and which ligand dominates the first coordination shell?",
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
        kind: "split",
        left: {
          kind: "columns",
          compact: true,
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
            ]},
            { title: "🛡️ Passivation", color: "olive", items: [
              "ZnO, Zn(OH)₂, and basic zinc hydroxide sulfates form on anode",
              "Block further Zn²⁺ deposition",
              "Increase cell impedance over cycles",
              "Reduce coulombic efficiency",
            ]},
          ],
        },
        right: {
          kind: "image",
          src: "/images/dendrite-real.jpg",
          alt: "Metallic dendrite growth (real photo)",
        },
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
          kind: "dualImage",
          images: [
            { src: "/images/thiourea-3d.png", caption: "3D ball-and-stick — S (yellow), C (black), N (blue), H (white)" },
            { src: "/images/thiourea-vdw.png", caption: "Space-filling (van der Waals) model" },
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
        kind: "split",
        left: {
          kind: "columns",
          compact: true,
          cols: [
            { title: "What We Know", color: "lime", items: [
              "Additives improve cycling at room temperature",
              "Thiourea forms a protective SEI on Zn anode",
              "Electrochemical performance well characterized",
              "Solvation shell snapshots available at 300 K",
            ]},
            { title: "What We Aim to Study", color: "amber", items: [
              "Which ligand dominates the first solvation shell?",
              "What role does thiourea actually play at the molecular level?",
              "How does Zn²⁺ diffusion change with temperature?",
            ]},
          ],
        },
        right: {
          kind: "image",
          src: "/images/schematic_solvation.png",
          alt: "Zn²⁺ solvation shell schematic showing water, SO₄²⁻ and thiourea ligands",
        },
      },
      {
        kind: "callout",
        text: "Does increasing T simply speed up diffusion… or reorganize the coordination shell entirely? This study systematically tracks 280–340 K.",
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
            "Simulate at 280, 300, 320, 340 K — 10 ns production trajectory each",
            "Characterize structure via RDF: Zn–S, Zn–O(SO₄), Zn–O(H₂O)",
            "Quantify dynamics via MSD → diffusion coefficients D(T)",
            "Explain diffusion anomaly via mechanistic hypotheses",
          ],
        },
        right: {
          kind: "image",
          src: "/images/system-snapshot.png",
          alt: "GROMACS simulation box — 14,696 atoms at 300 K",
        },
      },
      {
        kind: "table",
        headers: ["Parameter", "Value"],
        rows: [
          ["Sim. time (per T)", "10 ns production"],
          ["Atoms per system", "14,696"],
          ["Concentration", "~2 M ZnSO₄"],
          ["Thiourea : Zn ratio", "1 : 15"],
          ["HPC resource", "Param Shivaay IIT BHU"],
        ],
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
          kind: "image",
          src: "/images/lj-potential.svg",
          alt: "Lennard-Jones 12-6 potential energy curve",
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
        text: "Each timestep (2 fs): compute all forces → update velocities → update positions → repeat. Over 10 ns = 5 million steps.",
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
          headers: ["Species", "Count", "Atoms"],
          rows: [
            ["Zn²⁺", "150", "150"],
            ["SO₄²⁻", "150", "750"],
            ["Thiourea", "10", "80"],
            ["TIP4P H₂O", "3,429", "13,716"],
            ["TOTAL", "—", "14,696"],
          ],
        },
        right: {
          kind: "mol3d",
          src: "/md_visualization.pdb",
          caption: "Interactive 3D View — 14,696 atoms",
        },
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
          { label: "NPT 3 ns", detail: "Berendsen\nρ → 1390 kg/m³" },
          { label: "Production", detail: "10 ns NPT\n10,000 frames" },
          { label: "Analysis", detail: "RDF, MSD\nEnergy" },
        ],
      },
      {
        kind: "split",
        left: {
          kind: "table",
          headers: ["Stage", "Duration", "Key Metric"],
          rows: [
            ["Minimization", "~5,000 steps", "Fmax < 1000 kJ/mol/nm"],
            ["NVT equil.", "500 ps", "T = 299.86 ± 3.13 K"],
            ["NPT equil.", "3 ns", "ρ = 1389.7 ± 4.5 kg/m³"],
            ["Production", "10 ns", "10,000 frames"],
          ],
        },
        right: {
          kind: "image",
          src: "/images/system-snapshot.png",
          alt: "GROMACS simulation box — 14,696 atoms after Packmol build",
        },
      },
    ],
  },

  // ──────────────────────────────────────────
  // 11 — FORCEFIELD & PARAMETERS
  // ──────────────────────────────────────────
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
          ["NVT temperature", "299.86 ± 3.13 K", "300 K (target)", "−0.05%", "✓"],
          ["NPT density", "1389.7 ± 4.5 kg/m³", "2M ZnSO₄ expected", "Consistent", "✓"],
          ["E_min final", "−600,328 kJ/mol", "Converged plateau", "1,249 steps", "✓"],
          ["NPT pressure", "−3.8 ± 356 bar", "0 bar target", "Normal fluct.", "✓"],
          ["Box shrinkage", "5.00 → 4.71 nm", "Expected for 2M", "−5.9%", "✓"],
          ["Zn–Water g(r)", "4.725 at 0.206 nm", "Literature range", "Consistent", "✓"],
          ["Zn–SO₄ g(r)", "30.1 at 0.176 nm", "Strong ion pair", "Dominant", "✓"],
          ["Zn–Thiourea g(r)", "1.649 at 0.228 nm", "Outer-shell", "Weaker", "✓"],
          ["MSD (Zn²⁺)", "0.644 nm² at 10 ns", "Linear regime", "Diffusive", "✓"],
        ],
      },
      {
        kind: "callout",
        text: "All validation criteria pass at 300 K. SO₄²⁻ dominates the first coordination shell (g(r) ≈ 30), confirming a stable coordination complex: [Zn(SO₄)ₙ(H₂O)ₘ(Tu)ₖ].",
      },
    ],
  },


  // ──────────────────────────────────────────
  // — INDIVIDUAL CONVERGENCE PLOTS
  // ──────────────────────────────────────────
  {
    type: "body",
    heading: "Convergence Details — Energy, Temperature & Density",
    content: [
      {
        kind: "dualImage",
        images: [
          { src: "/images/emin-300.png", caption: "Energy Minimization → −600,328 kJ/mol" },
          { src: "/images/nvt-temp-300.png", caption: "NVT Temperature: 299.86 ± 3.13 K" },
        ],
      },
      {
        kind: "dualImage",
        images: [
          { src: "/images/density-npt-300.png", caption: "NPT Density: 1389.7 ± 4.5 kg/m³" },
          { src: "/images/pressure-npt-300.png", caption: "NPT Pressure: mean = −3.8 bar, σ = 356 bar (t = 3 ns)" },
        ],
      },
    ],
  },

  // ──────────────────────────────────────────
  // — RDF CONCEPT
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
  // — FIRST COORDINATION SHELL (zoomed panels)
  // ──────────────────────────────────────────
  {
    type: "body",
    heading: "First Coordination Shell — Zoomed View (0–0.5 nm)",
    content: [
      {
        kind: "image",
        src: "/images/rdf-first-shell-300.png",
        alt: "First coordination shell panels for all three ligand pairs at 300 K",
      },
      {
        kind: "callout",
        text: "Zoomed into the first coordination shell (0–0.5 nm) for all three pairs. Peak positions and heights clearly annotated — SO₄²⁻ peak is off-scale at g(r) = 30.1.",
      },
    ],
  },

  // ──────────────────────────────────────────
  // — RDF TEMPERATURE COMPARISON (all 4 plots on single page)
  // ──────────────────────────────────────────
  {
    type: "body",
    heading: "RDF Temperature Comparison — 280 to 340 K",
    content: [
      {
        kind: "dualImage",
        images: [
          { src: "/images/rdf-zn-so4-temps.png", caption: "Zn–SO₄: g(r) ≈ 32 at all T" },
          { src: "/images/rdf-zn-water-temps.png", caption: "Zn–Water: g(r) ≈ 4.7 stable" },
        ],
      },
      {
        kind: "dualImage",
        images: [
          { src: "/images/rdf-zn-ligand-temps.png", caption: "Zn–Ligand: 280 K peak (g(r) ≈ 2.0)" },
          { src: "/images/rdf-coordination-shell-temps.png", caption: "First Shell Peak Variation" },
        ],
      },
      {
        kind: "callout",
        text: "SO₄ & Water coordination stable across T. Ligand coordination strongest at 280 K (g(r) ≈ 2.0) — thermal disruption at higher T.",
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
            "Sulphate: peak at r = 0.176 nm (strongest coordination)",
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
  // 17 — RDF RESULTS SUMMARY AT 300 K
  // ──────────────────────────────────────────
  {
    type: "body",
    heading: "RDF Results Summary — 300 K",
    content: [
      {
        kind: "table",
        headers: ["Pair", "Peak r (nm)", "Peak g(r)", "Interpretation"],
        rows: [
          ["Zn²⁺–SO₄²⁻", "0.176", "30.1", "Dominant — strong ion pairing"],
          ["Zn²⁺–Water (O)", "0.206", "4.725", "Stable solvation backbone"],
          ["Zn²⁺–Thiourea", "0.228", "1.649", "Weak — outer-shell only"],
        ],
      },
      {
        kind: "columns",
        compact: true,
        cols: [
          { title: "Key Findings", color: "lime", items: [
            "SO₄²⁻ is the dominant 1st shell ligand (g(r) ≈ 30)",
            "Water forms stable 2nd coordination layer",
            "Thiourea coordination is weak (g(r) < 2)",
          ]},
          { title: "Implications", color: "amber", items: [
            "Thiourea acts as outer-shell modifier, not inner-shell",
            "Complex structure: [Zn(SO₄)ₙ(H₂O)ₘ(Tu)ₖ]",
            "Peak positions consistent with literature ionic radii",
          ]},
        ],
      },
    ],
  },

  // ──────────────────────────────────────────
  // — MSD ANALYSIS (graph + data)
  // ──────────────────────────────────────────
  {
    type: "body",
    heading: "Mean Square Displacement — MSD Analysis",
    content: [
      {
        kind: "split",
        left: {
          kind: "image",
          src: "/images/msd-graph-user.png",
          alt: "MSD of Zn²⁺ at 280, 300, 320, 340 K",
        },
        right: {
          kind: "table",
          headers: ["Temp (K)", "MSD (nm²)", "D (×10⁻⁵ cm²/s)", "D Change"],
          rows: [
            ["280", "0.567", "0.0083", "Baseline"],
            ["300", "0.761", "0.0113", "+36.95%"],
            ["320", "0.986", "0.0138", "+67.25%"],
            ["340", "1.087", "0.0129", "+56.34%"],
          ],
        },
      },
      {
        kind: "callout",
        text: "D = lim(t→∞) MSD(t) / 6t  [Einstein, 3D] · Computed via gmx msd · 340 K shows anomalous drop (−6.5%) despite highest MSD — suggests solvation shell restructuring",
      },
    ],
  },

  // ──────────────────────────────────────────
  // — MSD + DIFFUSION HISTOGRAM
  // ──────────────────────────────────────────
  {
    type: "body",
    heading: "MSD & Diffusion — Temperature Dependence",
    content: [
      {
        kind: "image",
        src: "/images/msd-d-side-by-side.png",
        alt: "Final MSD and diffusion coefficient bar charts at all temperatures",
      },
      {
        kind: "callout",
        text: "MSD increases monotonically with temperature (+91.8% at 340 K). Diffusion coefficient peaks at 320 K (+67.25%) but drops at 340 K (+56.34% vs baseline) — suggesting solvation shell restructuring at higher T.",
      },
    ],
  },

  // ──────────────────────────────────────────
  // 21 — PRACTICAL BATTERY IMPLICATIONS
  // ──────────────────────────────────────────
  {
    type: "body",
    heading: "Implications for Battery Design",
    content: [
      {
        kind: "pipeline",
        steps: [
          { label: "Electrolyte", detail: "ZnSO₄ + thiourea\n2M aqueous" },
          { label: "Solvation Shell", detail: "SO₄²⁻ dominated\nat 300 K" },
          { label: "HER / SEI", detail: "Water displacement\npassivation layer" },
          { label: "Design", detail: "Additive role\nclarified" },
        ],
      },
      {
        kind: "split",
        left: {
          kind: "table",
          headers: ["Property", "Controlled By", "This Work's Finding"],
          rows: [
            ["HER rate", "H₂O in 1st shell", "SO₄²⁻ displaces water → suppresses HER"],
            ["Coordination", "Ligand binding strength", "SO₄²⁻ >> Water >> Thiourea in 1st shell"],
            ["Thiourea role", "Outer-shell modifier", "g(r) = 1.6 — not dominant in 1st shell"],
            ["Zn²⁺ mobility", "MSD at 300 K", "MSD = 0.644 nm² at 10 ns — slow complex"],
            ["Complex structure", "RDF peak hierarchy", "[Zn(SO₄)ₙ(H₂O)ₘ(Tu)ₖ] confirmed"],
          ],
        },
        right: {
          kind: "image",
          src: "/images/schematic_battery.png",
          alt: "Aqueous zinc-ion battery schematic",
        },
      },
      {
        kind: "callout",
        text: "Thiourea's role is secondary — it modifies the outer coordination shell rather than directly coordinating Zn²⁺. Electrolyte design should account for SO₄²⁻ dominance in the first shell.",
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
            "✓ Validated MD model at 300 K: density = 1389.7 kg/m³, T = 299.86 K",
            "✓ SO₄²⁻ dominates 1st shell: g(r) ≈ 30 at r = 0.176 nm",
            "✓ Water forms stable 2nd coordination: g(r) ≈ 4.7 at r = 0.206 nm",
            "✓ Thiourea is outer-shell modifier: g(r) ≈ 1.6 at r = 0.228 nm",
            "✓ MSD confirms slow Zn²⁺ complex diffusion (0.644 nm² at 10 ns)",
          ],
        },
        right: {
          kind: "table",
          headers: ["Key Metric", "Value"],
          rows: [
            ["Sulphate g(r) peak", "≈ 30 at r = 0.176 nm"],
            ["Water g(r) peak", "≈ 4.7 at r = 0.206 nm"],
            ["Thiourea g(r) peak", "≈ 1.6 at r = 0.228 nm"],
            ["MSD (Zn²⁺, 300 K)", "0.644 nm² at 10 ns"],
            ["NPT Density", "1389.7 ± 4.5 kg/m³"],
            ["NVT Temperature", "299.86 ± 3.13 K"],
            ["E_min final", "−600,328 kJ/mol"],
            ["Total MD time", "10 ns production"],
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
