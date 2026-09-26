export interface Product {
  id: number;
  slug: string;
  partNo: string;
  name: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  inStock: boolean;
  leadTime: string;
  pressureRating?: string;
  temperatureRange?: string;
  material?: string;
  maxVelocity?: string;
  standards?: string;
  features: string[];
  specifications: Record<string, string>;
  applications: string[];
  packageIncludes: string[];
}

export const products: Product[] = [
  {
    id: 1,
    slug: "hydraulic-cylinder-seal-kit",
    partNo: "HS-2024-001",
    name: "Hydraulic Cylinder Seal Kit",
    category: "Seal Kits",
    description:
      "Complete OEM-spec seal kit engineered for high-pressure hydraulic cylinder rebuilds, overhauls, and preventative maintenance.",
    longDescription:
      "The HS-2024-001 Hydraulic Cylinder Seal Kit is a heavy-duty sealing solution designed to withstand harsh industrial environments, severe pressure spikes, and continuous cyclic operations. Manufactured from advanced polyurethane (PU), nitrile butadiene rubber (NBR), and reinforced PTFE compounds, this kit guarantees zero fluid leakage, minimal friction, and exceptional resistance to extrusion under working pressures up to 450 bar. Ideal for construction cranes, excavators, dump trucks, and industrial hydraulic presses.",
    image: "/images/seal-kits.jpg",
    inStock: true,
    leadTime: "Same-day dispatch in UAE | 3-5 days worldwide",
    pressureRating: "Up to 450 Bar (6,500 PSI)",
    temperatureRange: "-35°C to +110°C (-31°F to +230°F)",
    material: "Polyurethane (PU), NBR 90 Shore A, PTFE Bronze",
    maxVelocity: "1.0 m/s",
    standards: "ISO 9001:2015, DIN EN 60529 Compliant",
    features: [
      "Precision-molded primary rod seal with secondary buffer ring",
      "High-tensile polyurethane wiper seal to prevent particulate ingress",
      "Bronze-filled PTFE guide rings for reduced friction and rod scoring",
      "Dual-acting NBR piston seal with energizing elastomer ring",
      "Resistant to mineral-based hydraulic oils, glycols, and synthetic emulsions",
      "OEM-matching dimensional tolerances for seamless installation",
    ],
    specifications: {
      "Part Number": "HS-2024-001",
      "Primary Material": "Virgin Polyurethane (PU) & NBR 90",
      "Working Pressure": "Max 450 Bar / 45 MPa",
      "Operating Temperature": "-35°C to +110°C",
      "Max Linear Velocity": "1.0 m/s",
      "Fluid Compatibility": "Mineral oils, bio-oils, water glycols",
      "Country of Manufacture": "UAE / Germany Spec",
      "Warranty": "12 Months Heavy-Duty Warranty",
    },
    applications: [
      "Mobile Crane Telescopic Boom Cylinders",
      "Crawler Crane Luffing & Derrick Systems",
      "Heavy Earthmoving & Excavator Boom Cylinders",
      "Industrial Forging & Bending Hydraulic Presses",
      "Port Container Handling Reach Stackers",
    ],
    packageIncludes: [
      "1x Primary Step-type Rod Seal",
      "1x Buffer Ring with Back-up Element",
      "1x Heavy-Duty Rod Wiper (Scraper)",
      "1x Double-Acting Piston Compact Seal",
      "2x Wear / Guide Phenolic Strips",
      "Complete set of Nitrile O-rings & Backup Rings",
    ],
  },
  {
    id: 2,
    slug: "o-ring-set-metric",
    partNo: "HS-2024-002",
    name: "O-Ring Set - Metric",
    category: "Hydraulic Seals",
    description:
      "Comprehensive 400+ piece professional metric O-ring assortment box formulated for high-pressure hydraulic and pneumatic fittings.",
    longDescription:
      "The HS-2024-002 Metric O-Ring Assortment provides heavy equipment workshops and field technicians with the most frequently required seal sizes for high-pressure hydraulic flanges, BSP/Metric port adapters, and valve blocks. Formulated from premium NBR 90 Shore A and Viton (FKM), these O-rings exhibit superior tensile strength, remarkable chemical compatibility with petroleum-based hydraulic fluids, and excellent compression set recovery.",
    image: "/images/o-ring-seals.jpg",
    inStock: true,
    leadTime: "In Stock - Instant Delivery in UAE",
    pressureRating: "Up to 350 Bar (Static) / 200 Bar (Dynamic)",
    temperatureRange: "-30°C to +125°C (NBR) / +200°C (FKM)",
    material: "Nitrile Butadiene (NBR 90) / Optional Viton (FKM)",
    maxVelocity: "0.5 m/s",
    standards: "DIN 3771, ISO 3601 Class A",
    features: [
      "32 standard metric sizes spanning 3mm to 50mm inner diameter",
      "Heavy-duty 90 Shore A durometer prevents extrusion at port faces",
      "Superior fluid resistance against mineral oils, greases, and diesel fuel",
      "High thermal stability with zero post-curing shrinkage",
      "Housed in an impact-resistant compartmentalized organizer box",
      "Detailed size cross-reference chart included inside lid",
    ],
    specifications: {
      "Part Number": "HS-2024-002",
      "Quantity": "412 Pieces across 32 Compartments",
      "Hardness": "90 Shore A Durometer",
      "Cross-Sections": "1.5mm, 2.0mm, 2.5mm, 3.0mm, 3.5mm",
      "Tensile Strength": "≥ 14.5 MPa",
      "Elongation at Break": "≥ 180%",
      "Box Material": "Industrial High-Density Polypropylene",
      "Standards": "ISO 3601 / DIN 3771",
    },
    applications: [
      "Hydraulic Hose Couplings & Quick Disconnects",
      "SAE Flange Blocks and Manifold Valves",
      "Fuel Injection Systems and Gear Pumps",
      "General Hydraulic Plant Maintenance",
      "Marine Deck Cranes and Winches",
    ],
    packageIncludes: [
      "412x Metric NBR 90 O-rings in 32 popular sizes",
      "1x Rugged compartmentalized storage case with secure latches",
      "1x Metric size identification gauge card",
      "1x Inspection and storage guidelines booklet",
    ],
  },
  {
    id: 3,
    slug: "piston-seal-assembly",
    partNo: "HS-2024-003",
    name: "Piston Seal Assembly",
    category: "Hydraulic Seals",
    description:
      "High-integrity multi-component piston seal assembly engineered for extreme double-acting hydraulic cylinder pressures.",
    longDescription:
      "The HS-2024-003 Piston Seal Assembly is specifically tailored for heavy-cycle double-acting cylinders operating in dusty, high-temperature, and shock-load conditions. Featuring a bronze-filled virgin PTFE face ring energized by a precision elastomer profile and dual POM anti-extrusion rings, it delivers minimal stick-slip break-away friction and exceptional dynamic sealing efficiency.",
    image: "/images/hydraulic-cylinder.jpg",
    inStock: true,
    leadTime: "Immediate Dispatch UAE | 2-4 Days GCC",
    pressureRating: "Up to 500 Bar (7,250 PSI)",
    temperatureRange: "-40°C to +135°C",
    material: "Bronze-Filled PTFE, NBR Energizer, POM Back-up Rings",
    maxVelocity: "1.5 m/s",
    standards: "ISO 7425/1 Compatible",
    features: [
      "Low break-away and low dynamic friction for silky smooth cylinder travel",
      "Zero stick-slip phenomenon even after extended dwell periods",
      "Engineered POM anti-extrusion rings handle extreme pressure spikes",
      "Excellent wear resistance and high thermal conductivity from bronze filler",
      "Suitable for short stroke and high-frequency oscillation applications",
      "Compact groove dimensions conforming to international standards",
    ],
    specifications: {
      "Part Number": "HS-2024-003",
      "Bore Diameter Range": "50mm to 350mm (Custom sizes available)",
      "Design Type": "5-Piece Double-Acting Compact Seal",
      "Operating Pressure": "500 Bar max",
      "Sliding Speed": "Up to 1.5 m/s",
      "Media": "Mineral-based hydraulic oils, biodegradable fluids",
      "Extrusion Gap Limit": "< 0.4mm at 400 Bar",
      "Certifications": "CE, ISO 9001:2015",
    },
    applications: [
      "Telescopic Crane Boom Elevation Cylinders",
      "Crawler Crane Derrick Cylinders",
      "Mining Excavator Bucket & Boom Cylinders",
      "Hydraulic Presses and Shearing Machinery",
      "Offshore Marine Hydraulic Actuators",
    ],
    packageIncludes: [
      "1x PTFE-Bronze Dynamic Sealing Ring",
      "1x Elastomeric Profiled Energizer Ring",
      "2x Polyacetal (POM) Anti-Extrusion Support Rings",
      "2x Precision Guide Bushings",
      "Installation Instructions & Fitting Lubricant Sachet",
    ],
  },
  {
    id: 4,
    slug: "crane-boom-seal-kit",
    partNo: "HS-2024-004",
    name: "Crane Boom Seal Kit",
    category: "Crane Components",
    description:
      "Heavy equipment OEM-compatible seal kit engineered for mobile and all-terrain telescopic crane boom extension cylinders.",
    longDescription:
      "The HS-2024-004 Crane Boom Seal Kit provides total sealing security for telescopic boom cylinders on Liebherr, Tadano, Kato, XCMG, and Terex mobile cranes. In telescopic crane operations, boom cylinders carry immense cantilever loads and are exposed to direct sunlight, desert sand, and rapid temperature swings. This kit uses ultra-tough polyurethane compounds and dual-lip wipers to lock out abrasive desert grit while keeping hydraulic oil perfectly sealed.",
    image: "/images/crane-parts.jpg",
    inStock: true,
    leadTime: "Same-Day Courier across UAE | Global Freight Available",
    pressureRating: "Up to 420 Bar",
    temperatureRange: "-30°C to +115°C",
    material: "Cast Polyurethane (CPU), PTFE/Carbon, FKM",
    maxVelocity: "0.8 m/s",
    standards: "OEM Liebherr / Tadano Fitment Match",
    features: [
      "Custom compounded for harsh Middle East desert temperatures and UV exposure",
      "Dual-lip aggressive wiper design repels fine sand, cement dust, and grit",
      "Heavy-duty buffer ring absorbs sudden pressure surges during heavy lifts",
      "Reinforced carbon-PTFE guide elements eliminate metal-on-metal galling",
      "Guaranteed dimensional precision matching OEM specifications",
      "Full traceability and test certificates provided with every kit",
    ],
    specifications: {
      "Part Number": "HS-2024-004",
      "Compatible Crane Tonnages": "30T to 500T Mobile & All-Terrain Cranes",
      "Cylinder Diameter Support": "100mm to 280mm Rods / 140mm to 360mm Bores",
      "Max Operating Pressure": "420 Bar",
      "Material Grade": "Industrial High-Tear Cast Polyurethane",
      "Wear Life Index": "3x standard commercial aftermarket seals",
      "Warranty": "18 Months Structural Integrity Warranty",
    },
    applications: [
      "Liebherr LTM Series All-Terrain Cranes",
      "Tadano ATF & GR Rough-Terrain Cranes",
      "XCMG & Zoomlion Telescopic Cranes",
      "Grove & Manitowoc Hydraulic Mobile Units",
      "Heavy Port Harbor Mobile Cranes",
    ],
    packageIncludes: [
      "1x High-Tensile Dual-Lip Boom Wiper",
      "1x Primary High-Pressure Rod Seal",
      "1x Pressure-Relief Buffer Ring",
      "1x Multi-Element Piston Seal Set",
      "4x Carbon-PTFE Low-Friction Wear Bands",
      "Complete set of High-Temp Port O-rings",
    ],
  },
  {
    id: 5,
    slug: "hydraulic-pump-seal-kit",
    partNo: "HS-2024-005",
    name: "Hydraulic Pump Seal Kit",
    category: "Seal Kits",
    description:
      "Precision overhaul seal kit designed for axial piston pumps, gear pumps, and hydraulic swashplate motors.",
    longDescription:
      "The HS-2024-005 Hydraulic Pump Seal Kit contains all essential elastomeric and mechanical sealing components to rebuild variable displacement axial piston pumps and rotary motors. Engineered for leading brands including Rexroth, Kawasaki, Parker, and Eaton, this kit resolves common pump issues including shaft seal leakage, case drain bypass, and internal pressure loss.",
    image: "/images/hydraulic-pump.jpg",
    inStock: true,
    leadTime: "Immediate Dispatch UAE | 3-5 Days Worldwide",
    pressureRating: "Up to 400 Bar (Internal) / 5 Bar (Shaft Case)",
    temperatureRange: "-25°C to +120°C",
    material: "FKM (Viton), PTFE Composite, NBR 85, Stainless Garter Spring",
    maxVelocity: "Rotational up to 4,000 RPM",
    standards: "Rexroth A10VSO / Kawasaki K3V Compatibility",
    features: [
      "High-speed Viton radial shaft seal with stainless steel tension spring",
      "PTFE valve plate face seals preventing internal swashplate leakage",
      "Reinforced barrel face and cradle bearing elastomeric seals",
      "Resistant to thermal degradation under continuous 100°C+ oil temperatures",
      "Preserves volumetric efficiency and rated discharge flow",
      "Complete bill of materials for complete teardown and reassembly",
    ],
    specifications: {
      "Part Number": "HS-2024-005",
      "Pump Type Compatibility": "Axial Piston, Radial Piston, Vane & Gear Pumps",
      "Supported Displacements": "28cc, 45cc, 71cc, 100cc, 140cc, 180cc",
      "Rotational Shaft Speed": "Up to 4,000 RPM",
      "Case Pressure Rating": "5 Bar Continuous / 10 Bar Peak",
      "Oil Compatibility": "ISO VG 32, 46, 68 Mineral & Synthetic Oils",
      "Shaft Seal Design": "Double-Lip FKM with Dust Barrier",
    },
    applications: [
      "Rexroth A10VSO / A4VG Main Hydraulic Pumps",
      "Kawasaki K3V / K5V Excavator Main Pumps",
      "Parker PV Series Variable Piston Pumps",
      "Eaton Vickers Mobile Equipment Pumps",
      "Concrete Pump & Mixer Truck Hydraulic Drives",
    ],
    packageIncludes: [
      "1x High-Pressure FKM Rotary Shaft Seal",
      "1x Swashplate Cradle Seal Set",
      "2x Port Flange Profile Gaskets",
      "Complete set of Control Valve O-rings",
      "Back-up Rings & Internal Retaining Clips",
    ],
  },
  {
    id: 6,
    slug: "rod-wiper-seal",
    partNo: "HS-2024-006",
    name: "Rod Wiper Seal",
    category: "Hydraulic Seals",
    description:
      "Heavy-duty metal-cased polyurethane rod wiper seal designed to eliminate dust, sand, and mud ingress in tough industrial environments.",
    longDescription:
      "The HS-2024-006 Rod Wiper Seal (Scraper) prevents abrasive particulate matter, grit, cement slurry, and water moisture from entering hydraulic cylinder glands. Featuring a sharp, precision-machined wiping lip bonded to a corrosion-resistant metal case, it reliably cleans reciprocating rods even when coated with dried mud or icy residue, protecting primary rod seals and gland bushings from premature failure.",
    image: "/images/seal-kits.jpg",
    inStock: true,
    leadTime: "In Stock - Dispatch within 24 Hours",
    pressureRating: "Atmospheric (Protective Barrier)",
    temperatureRange: "-40°C to +110°C",
    material: "93 Shore A High-Tear Polyurethane with Zinc-Plated Steel Casing",
    maxVelocity: "2.0 m/s",
    standards: "DIN ISO 6195 Type B",
    features: [
      "Rigid press-fit metal outer casing prevents seal rotation or pop-out",
      "Aggressive wiping lip geometry scrapes dried mud, salt, and abrasive dust",
      "Secondary internal sealing lip collects residual lubricating oil film",
      "Zinc-plated treated metal cage resists corrosion and coastal humidity",
      "Extreme tear resistance and low permanent deformation under heavy load",
      "Easy installation into open recess gland housings",
    ],
    specifications: {
      "Part Number": "HS-2024-006",
      "Rod Diameter Range": "30mm to 200mm",
      "Housing Standard": "ISO 6195 Type B Open Housings",
      "Hardness": "93 Shore A Polyurethane",
      "Casing Material": "Carbon Steel Zinc-Passivated",
      "Speed Range": "0.1 to 2.0 m/s",
      "Operating Medium": "Dry abrasive atmosphere, mud, dust, moisture",
    },
    applications: [
      "Excavator Bucket, Stick & Boom Cylinders",
      "Mobile Crane Outrigger Stabilization Jacks",
      "Agricultural Tractors & Forestry Harvesters",
      "Mining Haulage Trucks and Front Loaders",
      "Concrete Booms and Road Milling Equipment",
    ],
    packageIncludes: [
      "1x Metal-Cased Polyurethane Wiper Seal",
      "Protective Storage Sleeve",
      "Inspection & Installation Data Sheet",
    ],
  },
  {
    id: 7,
    slug: "hydraulic-cylinder-assembly",
    partNo: "HS-2024-007",
    name: "Hydraulic Cylinder Assembly",
    category: "Hydraulic Cylinders",
    description:
      "Custom engineered heavy-duty hydraulic cylinder assembly built with induction-hardened chrome rods and precision-honed barrels.",
    longDescription:
      "The HS-2024-007 Hydraulic Cylinder Assembly is built from seamless cold-drawn St52.3 / E355 steel tube, internally honed to Ra < 0.2 µm, paired with a 42CrMo4 induction-hardened, hard-chrome plated piston rod (minimum 30 microns chrome). Every cylinder undergoes 100% hydrostatic testing at 1.5x working pressure prior to dispatch. Available in custom stroke lengths, mounting configurations, and pin sizes.",
    image: "/images/hydraulic-cylinder.jpg",
    inStock: true,
    leadTime: "Custom Built in 3-7 Days | Standard Sizes in Stock",
    pressureRating: "250 Bar Continuous / 350 Bar Peak Test",
    temperatureRange: "-30°C to +105°C",
    material: "St52.3 Steel Barrel, 42CrMo4 Hard-Chrome Rod, High-Grade Polyurethane Seals",
    maxVelocity: "0.8 m/s",
    standards: "ISO 6020/2, ISO 6022 Heavy Duty",
    features: [
      "Induction-hardened rod surface (HRC 55-60) resists stone chips and denting",
      "Micro-honed cylinder bore ensures ultra-long seal lifespan",
      "Integrated adjustable hydraulic end-cushioning for shockless stopping",
      "Flanged, clevis, spherical bearing, or trunnion mounting styles available",
      "100% hydrostatic and pressure-decay tested with certificate",
      "Epoxy 2-pack industrial anti-corrosion paint finish in client color",
    ],
    specifications: {
      "Part Number": "HS-2024-007",
      "Bore Diameter": "63mm to 320mm",
      "Stroke Length": "Up to 4,500mm single-stage",
      "Working Pressure": "250 Bar (3,600 PSI)",
      "Test Pressure": "375 Bar (5,400 PSI)",
      "Rod Plating": "Hard Chrome 25-35 µm, Corrosion Rating 9 (ISO 9227)",
      "Port Connections": "BSP, SAE Flange, or Metric",
      "Warranty": "24 Months Manufacturer Guarantee",
    },
    applications: [
      "Mobile Crane Outrigger and Steering Cylinders",
      "Heavy Duty Waste Compactor Ram Cylinders",
      "Marine Deck Crane Luffing & Slewing Rams",
      "Scissor Lifts, Aerial Work Platforms, and Tail Lifts",
      "Steel Mill and Foundry Heavy Equipment",
    ],
    packageIncludes: [
      "1x Fully Assembled & Tested Hydraulic Cylinder",
      "Factory Pressure Test Certificate & Inspection Report",
      "Hardened Steel Spherical Bearings / Clevis Pins (fitted)",
      "Protective Port Plugs & Heavy-Duty Crating",
    ],
  },
  {
    id: 8,
    slug: "crane-slewing-bearing-seal",
    partNo: "HS-2024-008",
    name: "Crane Slewing Bearing Seal",
    category: "Crane Components",
    description:
      "Specialized profile rubber seal engineered for large-diameter slewing rings and crane turntable turntable assemblies.",
    longDescription:
      "The HS-2024-008 Crane Slewing Bearing Seal protects large-diameter crane rotators and turntable bearing raceways from water contamination, desert dust, and grease leakage. Fabricated from oil- and UV-resistant Nitrile (NBR) and EPDM elastomers with vulcanized continuous joints, it maintains reliable contact pressure across massive circumferences ranging up to 4 meters in diameter.",
    image: "/images/crane-parts.jpg",
    inStock: true,
    leadTime: "Immediate Delivery in UAE | 2-4 Days GCC",
    pressureRating: "Environmental Grease Retention (Up to 1.5 Bar)",
    temperatureRange: "-35°C to +100°C",
    material: "High-Grade NBR 70 Shore A / UV-Stabilized EPDM",
    maxVelocity: "Rotational Slewing Speed",
    standards: "Rothe Erde / SKF / Rollix Compatible Profiles",
    features: [
      "Flexible profile snaps securely into slewing bearing retaining grooves",
      "Effectively retains EP-2 heavy gear and bearing lithium greases",
      "Prevents rain, sand, washdown water, and salt spray penetration",
      "High ozone and ultraviolet sunlight resistance for open-air crane duty",
      "Supplied in pre-cut custom circumferences or continuous roll stock",
      "Compatible with major turntable brands including Liebherr, Tadano, and Sany",
    ],
    specifications: {
      "Part Number": "HS-2024-008",
      "Bearing Diameter Coverage": "800mm to 4,200mm",
      "Profile Types": "Single-lip, double-lip, and wiper-style profiles",
      "Tensile Strength": "≥ 12 MPa",
      "UV & Ozone Resistance": "Level 1 (No cracking after 1,000h ASTM D1149)",
      "Temperature Range": "-35°C to +100°C",
      "Compatible Lubricants": "Lithium EP2, synthetic gear grease, bio-grease",
    },
    applications: [
      "Tadano, Kato & Liebherr Crane Turntables",
      "Crawler Crane Superstructure Slewing Rings",
      "Harbor Pedestal and Gantry Cranes",
      "Tower Crane Slewing Gear Assemblies",
      "Excavator Swing Circles and Rotators",
    ],
    packageIncludes: [
      "1x Continuous Profile Slewing Bearing Seal Ring",
      "1x Vulcanizing Adhesive Joint Kit (where applicable)",
      "Technical Installation Manual & Cleanliness Guidelines",
    ],
  },
  {
    id: 9,
    slug: "hydraulic-pump-assembly",
    partNo: "HS-2024-009",
    name: "Hydraulic Pump Assembly",
    category: "Hydraulic Pumps",
    description:
      "OEM-specification high-pressure variable displacement axial piston pump assembly built for continuous heavy machinery operations.",
    longDescription:
      "The HS-2024-009 Hydraulic Pump Assembly delivers reliable hydraulic power for heavy cranes, excavators, and industrial power packs. Built with precision-balanced 9-piston rotating groups, nitrided swashplates, and bi-metallic valve plates, this pump guarantees high volumetric efficiency (> 95%), whisper-quiet operation, and low pulsation under continuous 350 bar duty cycles.",
    image: "/images/hydraulic-pump.jpg",
    inStock: true,
    leadTime: "In Stock - 24hr Courier in UAE | Air Freight Worldwide",
    pressureRating: "350 Bar Nominal / 400 Bar Maximum Peak",
    temperatureRange: "-20°C to +110°C",
    material: "High-Strength Cast Ductile Iron Housing, Nitrided Alloy Steel Components",
    maxVelocity: "Max 2,800 RPM Continuous",
    standards: "SAE 2-Bolt / 4-Bolt & DIN ISO Mounting Standards",
    features: [
      "Variable displacement control: Load Sensing (LS), Pressure Cut-off (DR)",
      "Nitrided cylinder block and bronze-sintered piston shoes for minimal friction",
      "High power-to-weight ratio with compact envelope dimensions",
      "Through-drive option available for auxiliary gear pump mounting",
      "Pre-tested on industrial hydraulic test stand with full performance graph",
      "Standard 1-year comprehensive manufacturer warranty",
    ],
    specifications: {
      "Part Number": "HS-2024-009",
      "Displacement": "71cc / rev (Available in 45cc, 100cc, 140cc)",
      "Nominal Working Pressure": "350 Bar (5,075 PSI)",
      "Peak Intermittent Pressure": "400 Bar (5,800 PSI)",
      "Rated Drive Speed": "Up to 2,800 RPM",
      "Control Type": "Load-Sensing + Pressure Limiter",
      "Drive Shaft": "Splined SAE 14T 12/24 DP / Parallel Key Option",
      "Weight": "46 kg",
      "Warranty": "12 Months Comprehensive",
    },
    applications: [
      "Mobile Crane Main Winch and Boom Lift Hydraulics",
      "Hydraulic Excavator Auxiliary Circuits and Travel Drives",
      "Heavy Duty Industrial Hydraulic Power Packs (HPU)",
      "Drilling Rigs and Piling Machinery",
      "Marine Winch and Offshore Crane Drives",
    ],
    packageIncludes: [
      "1x Complete Assembled Hydraulic Axial Piston Pump",
      "1x Dyno Test Report & Flow vs Pressure Calibration Sheet",
      "Protective Port Shipping Flanges & Heavy-Duty Wooden Crate",
      "Installation, Priming, and Filtration Manual",
    ],
  },
];

export function getProductBySlugOrId(identifier: string): Product | undefined {
  const cleanId = decodeURIComponent(identifier).trim().toLowerCase();
  
  // Try matching by slug
  const bySlug = products.find((p) => p.slug.toLowerCase() === cleanId);
  if (bySlug) return bySlug;

  // Try matching by numeric ID
  const numericId = parseInt(cleanId, 10);
  if (!isNaN(numericId)) {
    const byId = products.find((p) => p.id === numericId);
    if (byId) return byId;
  }

  // Try matching by partNo
  const byPart = products.find((p) => p.partNo.toLowerCase() === cleanId);
  if (byPart) return byPart;

  return undefined;
}

export function getRelatedProducts(currentId: number, category: string): Product[] {
  const sameCategory = products.filter(
    (p) => p.id !== currentId && p.category === category
  );
  if (sameCategory.length >= 3) {
    return sameCategory.slice(0, 3);
  }
  const others = products.filter(
    (p) => p.id !== currentId && p.category !== category
  );
  return [...sameCategory, ...others].slice(0, 3);
}
