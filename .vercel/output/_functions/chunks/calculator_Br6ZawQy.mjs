import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { d as maybeRenderHead, i as renderComponent, m as defineScriptVars, p as addAttribute, u as renderTemplate } from "./server_DTTxIANh.mjs";
import { t as createComponent } from "./compiler_D0-zh8PX.mjs";
import { n as $$Layout, t as $$Footer } from "./Footer_mXYxExC3.mjs";
//#region src/data/cibseGuideMData.ts
var CIBSE_GUIDE_M_DATA = [
	{
		category: "5.1 Sanitary Appliances & Ancillaries",
		nrmCode: "5.1",
		items: [
			{
				name: "WC Suites & Urinals (Vitreous China / Fireclay / uPVC)",
				rsl: 20,
				nrmCode: "5.1.1.1.1",
				sfgCode: "48-12 / 48-14",
				baseCost: 750,
				remarks: "Vitreous china/fireclay/uPVC"
			},
			{
				name: "WC Suites & Urinals (Cast Iron / Stainless Steel)",
				rsl: 40,
				nrmCode: "5.1.1.1.1",
				sfgCode: "48-12 / 48-14",
				baseCost: 1400,
				remarks: "High durability vandal-resistant"
			},
			{
				name: "Sinks (Vitreous China / Stainless Steel)",
				rsl: 20,
				nrmCode: "5.1.1.1.2",
				sfgCode: "48-11",
				baseCost: 650,
				remarks: "Commercial duty catering/cleaner sinks"
			},
			{
				name: "Wash Basins & Hand Rinse Basins (Vitreous / SS)",
				rsl: 20,
				nrmCode: "5.1.1.1.3",
				sfgCode: "48-13",
				baseCost: 550,
				remarks: "Standard wall-hung or vanity basins"
			},
			{
				name: "Ablution & Commercial Wash Fountains",
				rsl: 20,
				nrmCode: "5.1.1.1.3",
				sfgCode: "48-13",
				baseCost: 2200,
				remarks: "Circular communal wash fountains"
			},
			{
				name: "Commercial Shower Trays & Enclosures",
				rsl: 20,
				nrmCode: "5.1.1.1.6",
				sfgCode: "51-01",
				baseCost: 850,
				remarks: "Acrylic / GRP / enamelled steel"
			},
			{
				name: "Instantaneous Electric Shower Units",
				rsl: 5,
				nrmCode: "5.1.1.1.7",
				sfgCode: "51-01",
				baseCost: 350,
				remarks: "Self-contained heating element"
			},
			{
				name: "Dedicated Shower Booster Pumps",
				rsl: 10,
				nrmCode: "5.1.1.1.8",
				sfgCode: "51-02",
				baseCost: 650,
				remarks: "Twin impeller domestic/light commercial"
			},
			{
				name: "Thermostatic Shower Mixing Valves (TMV2 / TMV3)",
				rsl: 15,
				nrmCode: "5.1.1.1.9",
				sfgCode: "61-05",
				baseCost: 450,
				remarks: "Healthcare anti-scald compliance"
			},
			{
				name: "Refrigerated Drinking Water Fountains",
				rsl: 10,
				nrmCode: "5.1.1.1.10",
				sfgCode: "25-04",
				baseCost: 1100,
				remarks: "Chilled point-of-use unit"
			},
			{
				name: "Automated Sensor Taps & Flush Sensors",
				rsl: 8,
				nrmCode: "5.1.1.1.13",
				sfgCode: "48-08 / 62-09",
				baseCost: 320,
				remarks: "Optoelectronic infrared / solenoid"
			},
			{
				name: "Electric High-Speed Hand Dryers",
				rsl: 5,
				nrmCode: "5.1.2.1.5",
				sfgCode: "18-03",
				baseCost: 450,
				remarks: "High-speed brushless motor"
			},
			{
				name: "Electric Sanitary Towel Incinerators",
				rsl: 15,
				nrmCode: "5.1.2.1.7",
				sfgCode: "05-45",
				baseCost: 1800,
				remarks: "Flued electric incineration"
			},
			{
				name: "Commercial Waste Macerator Units",
				rsl: 10,
				nrmCode: "5.1.2.1.8",
				sfgCode: "48-01 / 48-02",
				baseCost: 1650,
				remarks: "Pulp and sanitary disposal"
			}
		]
	},
	{
		category: "5.3 Disposal & Drainage Installations",
		nrmCode: "5.3",
		items: [
			{
				name: "Plastic / Polypropylene Waste Pipes & Stacks",
				rsl: 20,
				nrmCode: "5.3.1.1.1",
				sfgCode: "48-05",
				baseCost: 4500,
				remarks: "muPVC / solvent weld / push-fit"
			},
			{
				name: "Cast Iron / Ductile Iron Soil & Waste Stacks",
				rsl: 40,
				nrmCode: "5.3.1.1.1",
				sfgCode: "48-05",
				baseCost: 12e3,
				remarks: "Timesaver / Ensign / mechanical joints"
			},
			{
				name: "Air Admittance Valves (AAV)",
				rsl: 15,
				nrmCode: "5.3.1.2.3.1",
				sfgCode: "48-06",
				baseCost: 120,
				remarks: "Diaphragm pressure relief"
			},
			{
				name: "Submersible Sewage / Sump Pumps (Wet Well)",
				rsl: 15,
				nrmCode: "5.3.1.2.7",
				sfgCode: "45-07",
				baseCost: 4200,
				remarks: "Vortex / cutter impeller"
			},
			{
				name: "Drywell Sewage Pumping Stations",
				rsl: 15,
				nrmCode: "5.3.1.2.7",
				sfgCode: "45-08",
				baseCost: 16e3,
				remarks: "Dual pump / external chamber"
			},
			{
				name: "Chemical / Toxic Laboratory Waste Glass Pipework",
				rsl: 20,
				nrmCode: "5.3.2.1.1",
				sfgCode: "48-05",
				baseCost: 8500,
				remarks: "Borosilicate glass / high acid duty"
			},
			{
				name: "Chemical Settlement / Neutralisation Tanks",
				rsl: 10,
				nrmCode: "5.3.2.1.6",
				sfgCode: "71-05",
				baseCost: 6500,
				remarks: "Acid dilution / pH dosing"
			},
			{
				name: "Effluent Treatment Plant & Separators",
				rsl: 10,
				nrmCode: "5.3.2.1.7",
				sfgCode: "71-01 / 71-06",
				baseCost: 22e3,
				remarks: "Packaged biological / physical plant"
			},
			{
				name: "Refuse Compacting & Baling Machines",
				rsl: 25,
				nrmCode: "5.3.3.1.3",
				sfgCode: "84-04 / 84-10",
				baseCost: 18500,
				remarks: "Hydraulic ram compactor"
			},
			{
				name: "Waste Chutes & Intake Hopper Doors",
				rsl: 50,
				nrmCode: "5.3.3.1.2",
				sfgCode: "88-49",
				baseCost: 9500,
				remarks: "Stainless steel vertical chute"
			},
			{
				name: "Petrol / Oil Separator Interceptor (Class 1/2)",
				rsl: 20,
				nrmCode: "5.3.2.1.3",
				sfgCode: "48-03",
				baseCost: 11e3,
				remarks: "Coalescence filter & alarm"
			}
		]
	},
	{
		category: "5.4 Water Supply & Hot Water Distribution",
		nrmCode: "5.4",
		items: [
			{
				name: "Copper Mains & Distribution Pipework",
				rsl: 45,
				nrmCode: "5.4.1.1.1",
				sfgCode: "40-01",
				baseCost: 14e3,
				remarks: "Table X / Table Y copper tube"
			},
			{
				name: "Galvanised Steel Distribution Pipework (Closed)",
				rsl: 35,
				nrmCode: "5.4.1.1.1",
				sfgCode: "40-01",
				baseCost: 16e3,
				remarks: "Heavy gauge threaded / grooved"
			},
			{
				name: "Plastic Water Distribution Pipelines (MLCP / PEX)",
				rsl: 20,
				nrmCode: "5.4.1.1.1",
				sfgCode: "40-01",
				baseCost: 11e3,
				remarks: "Multi-layer composite pipe"
			},
			{
				name: "Mains Cold Water Booster Sets (Duty/Standby)",
				rsl: 15,
				nrmCode: "5.4.2.1.7",
				sfgCode: "45-12",
				baseCost: 8500,
				remarks: "Multi-stage variable speed VFD"
			},
			{
				name: "Sectional GRP / Plastic Cold Water Storage Tanks",
				rsl: 20,
				nrmCode: "5.4.2.2.8",
				sfgCode: "56-01 / 56-02",
				baseCost: 14500,
				remarks: "Insulated / screened overflow"
			},
			{
				name: "Galvanised Mild Steel Water Storage Tanks",
				rsl: 15,
				nrmCode: "5.4.2.2.8",
				sfgCode: "56-02",
				baseCost: 11e3,
				remarks: "Corrosion risk / replacement priority"
			},
			{
				name: "Pressurisation Expansion Units (Nitrogen Vessel)",
				rsl: 20,
				nrmCode: "5.4.2.1.6",
				sfgCode: "32-12",
				baseCost: 3800,
				remarks: "Closed loop expansion"
			},
			{
				name: "Direct-Fired Storage Water Heaters (Gas)",
				rsl: 15,
				nrmCode: "5.4.4.1.1.1",
				sfgCode: "32-13",
				baseCost: 6500,
				remarks: "Glass-lined / sacrificial anode"
			},
			{
				name: "Instantaneous Electric Water Heaters (Point-of-Use)",
				rsl: 12,
				nrmCode: "5.4.4.1.1.2",
				sfgCode: "32-14",
				baseCost: 1200,
				remarks: "Under-sink unvented 10-15L"
			},
			{
				name: "Commercial Hot Water Storage Calorifiers (Copper)",
				rsl: 45,
				nrmCode: "5.4.3.1.7.1",
				sfgCode: "32-03 / 32-04",
				baseCost: 8500,
				remarks: "Solid copper shell"
			},
			{
				name: "Commercial Hot Water Calorifiers (Galvanised Steel)",
				rsl: 20,
				nrmCode: "5.4.3.1.7.1",
				sfgCode: "32-05",
				baseCost: 6200,
				remarks: "Vulnerable to internal pitting"
			},
			{
				name: "Secondary Hot Water Circulation Pumps",
				rsl: 20,
				nrmCode: "5.4.3.1.5",
				sfgCode: "45-06",
				baseCost: 1800,
				remarks: "Bronze / stainless steel casing"
			},
			{
				name: "Commercial Base Exchange Water Softeners",
				rsl: 30,
				nrmCode: "5.4.3.1.12.1",
				sfgCode: "65-01 / 65-02",
				baseCost: 5500,
				remarks: "Simplex / duplex ion exchange"
			},
			{
				name: "Chlorine Dioxide / Chemical Dosing Systems",
				rsl: 20,
				nrmCode: "5.4.3.1.12.7",
				sfgCode: "65-13 / 65-14",
				baseCost: 7200,
				remarks: "Legionella microbiological control"
			},
			{
				name: "Rainwater Harvesting / Greywater System (Internal)",
				rsl: 30,
				nrmCode: "5.4.2.3.12",
				sfgCode: "48-07 / 65-16",
				baseCost: 18e3,
				remarks: "Sediment filters & UV disinfection"
			},
			{
				name: "Thermal Insulation to Pipework (Phenolic/Mineral)",
				rsl: 30,
				nrmCode: "5.4.3.1.14",
				sfgCode: "35-01",
				baseCost: 6500,
				remarks: "Vapour barrier & class O rating"
			}
		]
	},
	{
		category: "5.5 Heat Source & Generation Plant",
		nrmCode: "5.5",
		items: [
			{
				name: "Atmospheric Gas Cast Iron Boilers (Modular)",
				rsl: 20,
				nrmCode: "5.5.1.1.2.1",
				sfgCode: "05-03 / 07-01",
				baseCost: 24e3,
				remarks: "Sectional cast iron heat exchanger"
			},
			{
				name: "Condensing Gas Boilers (Stainless Steel / Al-Si)",
				rsl: 20,
				nrmCode: "5.5.1.1.2.2",
				sfgCode: "05-04 / 07-01",
				baseCost: 28e3,
				remarks: "High efficiency pre-mix burner"
			},
			{
				name: "Forced Draught Blown Gas Burner Boilers (LTHW)",
				rsl: 20,
				nrmCode: "5.5.1.1.2.8",
				sfgCode: "05-23 / 07-02",
				baseCost: 45e3,
				remarks: "Dual fuel / modulating head"
			},
			{
				name: "Medium Temperature Hot Water Boilers (MTHW <120°C)",
				rsl: 20,
				nrmCode: "5.5.1.1.2.7",
				sfgCode: "05-14",
				baseCost: 62e3,
				remarks: "Pressurised shell & tube"
			},
			{
				name: "Industrial Packaged Steam Boilers (Shell & Tube)",
				rsl: 25,
				nrmCode: "5.5.1.1.2a",
				sfgCode: "05-37 / 87-24",
				baseCost: 95e3,
				remarks: "Statutory written scheme inspection"
			},
			{
				name: "Electric Steam Generators / Electrode Boilers",
				rsl: 20,
				nrmCode: "5.5.1.1.4",
				sfgCode: "05-21 / 05-22",
				baseCost: 35e3,
				remarks: "Fast response steam"
			},
			{
				name: "Combined Heat & Power Engine (Gas CHP)",
				rsl: 15,
				nrmCode: "5.5.1.1.7",
				sfgCode: "43-07 / 43-08",
				baseCost: 98e3,
				remarks: "Base load operation >4500 hrs/yr"
			},
			{
				name: "Ground Source Heat Pump Array (GSHP Closed Loop)",
				rsl: 20,
				nrmCode: "5.5.1.1.9",
				sfgCode: "05-31 / 05-32",
				baseCost: 68e3,
				remarks: "Ground loop borehole manifold"
			},
			{
				name: "Commercial Air Source Heat Pump (Air-to-Water ASHP)",
				rsl: 15,
				nrmCode: "5.5.1.1.13",
				sfgCode: "05-31",
				baseCost: 46e3,
				remarks: "External monobloc / split"
			},
			{
				name: "Biomass Wood Pellet / Chip Boiler",
				rsl: 20,
				nrmCode: "5.5.1.1.6",
				sfgCode: "05-27 / 56-07",
				baseCost: 52e3,
				remarks: "Automated fuel auger feed"
			},
			{
				name: "Roof-Mounted Solar Thermal Collector Panels",
				rsl: 25,
				nrmCode: "5.5.1.1.12",
				sfgCode: "53-01",
				baseCost: 14e3,
				remarks: "Evacuated tube / flat plate"
			},
			{
				name: "Twin-Wall Stainless Steel Chimney Flue Headers",
				rsl: 30,
				nrmCode: "5.5.1.1.19",
				sfgCode: "24-01 / 24-02",
				baseCost: 18e3,
				remarks: "Condensing acid-resistant liner"
			},
			{
				name: "Boiler Burner Assemblies (Blown Gas/Pressure Jet)",
				rsl: 15,
				nrmCode: "5.5.1.1.2.13",
				sfgCode: "07-02 / 07-05",
				baseCost: 9500,
				remarks: "Combustion head & servomotors"
			}
		]
	},
	{
		category: "5.6 Space Heating & Air Conditioning",
		nrmCode: "5.6",
		items: [
			{
				name: "Steel Panel Radiators & Convectors",
				rsl: 20,
				nrmCode: "5.6.1.1.3.8",
				sfgCode: "28-08",
				baseCost: 350,
				remarks: "Water treatment inhibitor dependent"
			},
			{
				name: "Cast Iron Column Radiators",
				rsl: 25,
				nrmCode: "5.6.1.1.3.7",
				sfgCode: "28-08",
				baseCost: 650,
				remarks: "High thermal mass"
			},
			{
				name: "Fan Convector Units (Low Level / Ceiling Void)",
				rsl: 15,
				nrmCode: "5.6.1.1.3.2",
				sfgCode: "28-01",
				baseCost: 1200,
				remarks: "Integral speed controller"
			},
			{
				name: "Overhead Radiant Heating Strip / Tube Panels (Gas/LTHW)",
				rsl: 20,
				nrmCode: "5.6.1.1.3.4",
				sfgCode: "28-01 / 28-03",
				baseCost: 2400,
				remarks: "High bay warehouse heating"
			},
			{
				name: "Underfloor Heating Screed Pipework (PEX/Pert)",
				rsl: 30,
				nrmCode: "5.6.1.1.4",
				sfgCode: "63-01",
				baseCost: 8500,
				remarks: "Embedded manifold circuits"
			},
			{
				name: "Commercial Warm Air Cabinet Heaters (Gas Fired)",
				rsl: 15,
				nrmCode: "5.6.2.1.1.7",
				sfgCode: "28-06",
				baseCost: 7800,
				remarks: "Direct / indirect fired"
			},
			{
				name: "Electric Over-Door Air Curtains (Recirculating)",
				rsl: 15,
				nrmCode: "5.6.8.1.11",
				sfgCode: "28-10 / 28-11",
				baseCost: 3200,
				remarks: "Centrifugal cross-flow blower"
			},
			{
				name: "Water-Cooled Centrifugal Chiller Plant",
				rsl: 20,
				nrmCode: "5.6.3.1.5.1",
				sfgCode: "09-01 / 09-02",
				baseCost: 85e3,
				remarks: "VFD magnetic bearing / oil-free"
			},
			{
				name: "Air-Cooled Screw Chiller Units (Packaged)",
				rsl: 20,
				nrmCode: "5.6.3.1.5",
				sfgCode: "09-01 / 13-01",
				baseCost: 58e3,
				remarks: "Semi-hermetic twin screw"
			},
			{
				name: "Air-Cooled Scroll Chiller (Packaged)",
				rsl: 15,
				nrmCode: "5.6.3.1.5",
				sfgCode: "09-01 / 13-01",
				baseCost: 38e3,
				remarks: "Multi-compressor tandem scroll"
			},
			{
				name: "Absorption Chiller (Lithium Bromide/Steam/Gas)",
				rsl: 25,
				nrmCode: "5.6.3.1.5.2",
				sfgCode: "09-04",
				baseCost: 11e4,
				remarks: "Thermal chiller vacuum envelope"
			},
			{
				name: "Evaporative Cooling Tower (Stainless Steel)",
				rsl: 30,
				nrmCode: "5.6.3.1.7.6",
				sfgCode: "30-02 / 30-04",
				baseCost: 45e3,
				remarks: "ACOP L8 compliance regime"
			},
			{
				name: "Evaporative Cooling Tower (Galvanised Steel)",
				rsl: 12,
				nrmCode: "5.6.3.1.7.3",
				sfgCode: "30-02",
				baseCost: 28e3,
				remarks: "Vulnerable to white rust & scale"
			},
			{
				name: "Dry Air Coolers / Free Cooling Matrix (V-Block)",
				rsl: 20,
				nrmCode: "5.6.3.1.5.6",
				sfgCode: "30-01 / 30-03",
				baseCost: 32e3,
				remarks: "EC axial fan array"
			},
			{
				name: "VRV / VRF Condenser Units (3-Pipe Heat Recovery)",
				rsl: 15,
				nrmCode: "5.6.3.1.4",
				sfgCode: "59-07",
				baseCost: 28e3,
				remarks: "Simultaneous heat & cool"
			},
			{
				name: "Fan Coil Units (4-Pipe Chilled & LTHW)",
				rsl: 20,
				nrmCode: "5.6.5.1.1",
				sfgCode: "59-05 / 59-06",
				baseCost: 1500,
				remarks: "EC motor & proportional valves"
			},
			{
				name: "Active & Passive Chilled Beams",
				rsl: 20,
				nrmCode: "5.6.3.1.1",
				sfgCode: "59-08",
				baseCost: 1200,
				remarks: "Primary air induction nozzle"
			},
			{
				name: "VAV Terminal Boxes (Pressure Independent)",
				rsl: 15,
				nrmCode: "5.6.7.1.9.1",
				sfgCode: "59-01 / 59-02",
				baseCost: 950,
				remarks: "Direct digital actuator & sensor"
			},
			{
				name: "DX Split Systems (Ceiling Cassette / Wall Mount)",
				rsl: 15,
				nrmCode: "5.6.6.1.1.1",
				sfgCode: "54-02 / 54-03",
				baseCost: 3800,
				remarks: "R32 / R410A inverter circuit"
			},
			{
				name: "Computer Room Air Conditioning Units (CRAC / CCU)",
				rsl: 20,
				nrmCode: "5.6.8.1.2",
				sfgCode: "47-01",
				baseCost: 22e3,
				remarks: "Precision downflow CW / DX"
			}
		]
	},
	{
		category: "5.7 Ventilation Systems & Air Movement",
		nrmCode: "5.7",
		items: [
			{
				name: "Central Air Handling Unit - Internal Location",
				rsl: 20,
				nrmCode: "5.6.3.1.14.2",
				sfgCode: "03-01 / 04-01",
				baseCost: 34e3,
				remarks: "Double skinned pentapost frame"
			},
			{
				name: "Rooftop Packaged AHU - Weatherproof External",
				rsl: 15,
				nrmCode: "5.6.3.1.14.1",
				sfgCode: "03-01 / 04-01",
				baseCost: 42e3,
				remarks: "External marine atmosphere skin"
			},
			{
				name: "Centrifugal Supply & Extract Fans (Direct/Belt)",
				rsl: 20,
				nrmCode: "5.7.1.1.4",
				sfgCode: "20-02 / 20-03",
				baseCost: 7500,
				remarks: "Backward curved plug fan"
			},
			{
				name: "Vane Axial Flow In-Line Fans",
				rsl: 15,
				nrmCode: "5.7.1.1.4",
				sfgCode: "20-04",
				baseCost: 4800,
				remarks: "Casing mounted aerofoil impeller"
			},
			{
				name: "Rotary Thermal Wheel Heat Exchangers",
				rsl: 15,
				nrmCode: "5.6.1.1.19",
				sfgCode: "29-04",
				baseCost: 14e3,
				remarks: "Hygroscopic matrix & seal belt"
			},
			{
				name: "Plate Recuperator Air-to-Air Heat Exchangers",
				rsl: 20,
				nrmCode: "5.6.1.1.18",
				sfgCode: "29-03",
				baseCost: 11e3,
				remarks: "Crossflow aluminium plates"
			},
			{
				name: "Run-Around Coil Heat Recovery Loops",
				rsl: 25,
				nrmCode: "5.7.1.1.4",
				sfgCode: "29-05",
				baseCost: 9500,
				remarks: "Glycol water loop & circulation pump"
			},
			{
				name: "Commercial Kitchen Extract Hoods (Stainless Steel)",
				rsl: 25,
				nrmCode: "5.7.2.2.2",
				sfgCode: "17-01 / 21-02",
				baseCost: 12500,
				remarks: "Baffle filters & grease drain"
			},
			{
				name: "Laboratory Fume Cupboards & Scavenge Extract",
				rsl: 15,
				nrmCode: "5.7.2.3.3",
				sfgCode: "64-08",
				baseCost: 16e3,
				remarks: "Corrosion resistant PP/PVC fan"
			},
			{
				name: "Car Park Impulse Jet Induction Fans",
				rsl: 15,
				nrmCode: "5.7.2.11.11",
				sfgCode: "64-10 / 20-08",
				baseCost: 4500,
				remarks: "300°C 2-hour smoke rated"
			},
			{
				name: "Powered Smoke Spill Roof Exhaust Ventilators",
				rsl: 30,
				nrmCode: "5.7.3.1.1.2",
				sfgCode: "52-03",
				baseCost: 9200,
				remarks: "High temperature life safety"
			},
			{
				name: "Automatic Fire / Smoke Curtains",
				rsl: 20,
				nrmCode: "5.7.3.1.2",
				sfgCode: "52-04",
				baseCost: 8200,
				remarks: "Gravity fail-safe drop"
			},
			{
				name: "Motorised Smoke & Fire Damper Assemblies",
				rsl: 15,
				nrmCode: "5.7.3.1.1",
				sfgCode: "16-03 / 16-05",
				baseCost: 1200,
				remarks: "Fusible link / 24V spring return"
			},
			{
				name: "Galvanised Steel Ductwork Systems (General)",
				rsl: 40,
				nrmCode: "5.7.1.1.5",
				sfgCode: "16-01 / 17-01",
				baseCost: 48e3,
				remarks: "DW144 / TR19 hygiene compliance"
			}
		]
	},
	{
		category: "5.8 Electrical Mains, Generation & Distribution",
		nrmCode: "5.8",
		items: [
			{
				name: "11kV / 400V Cast Resin Dry-Type Transformers",
				rsl: 30,
				nrmCode: "5.8.1.1.8",
				sfgCode: "70-06",
				baseCost: 42e3,
				remarks: "Class F insulation / thermography"
			},
			{
				name: "11kV / 400V Oil-Immersed Distribution Transformers",
				rsl: 30,
				nrmCode: "5.8.1.1.8",
				sfgCode: "70-07",
				baseCost: 48e3,
				remarks: "Dissolved gas analysis (DGA)"
			},
			{
				name: "11kV High Voltage Vacuum / SF6 Switchgear",
				rsl: 30,
				nrmCode: "5.8.1.1.2.4",
				sfgCode: "70-04 / 70-05",
				baseCost: 58e3,
				remarks: "BS 6626 compliance"
			},
			{
				name: "11kV Ring Main Units (RMU)",
				rsl: 20,
				nrmCode: "5.8.1.1.2.5",
				sfgCode: "70-08",
				baseCost: 28e3,
				remarks: "Outdoor / indoor packaged"
			},
			{
				name: "Main LV Switchboard (Form 4 Type 2/6 ACB/MCCB)",
				rsl: 20,
				nrmCode: "5.8.1.1.1.1",
				sfgCode: "44-02 / 44-07",
				baseCost: 38e3,
				remarks: "Air circuit breakers & busbar chamber"
			},
			{
				name: "LV Distribution Boards (MCCB / MCB TP&N)",
				rsl: 20,
				nrmCode: "5.8.1.1.3.1",
				sfgCode: "44-07",
				baseCost: 4200,
				remarks: "Sub-circuit protection"
			},
			{
				name: "Busbar Trunking Systems (Overhead / Rising Mains)",
				rsl: 35,
				nrmCode: "5.8.1.1.6",
				sfgCode: "44-12",
				baseCost: 22e3,
				remarks: "Copper/aluminium sandwich busbar"
			},
			{
				name: "Power Factor Correction Units (Automatic Stages)",
				rsl: 20,
				nrmCode: "5.8.1.1.1.2",
				sfgCode: "44-03",
				baseCost: 9500,
				remarks: "Detuned capacitor stages"
			},
			{
				name: "Uninterruptible Power Supply (Static Double Conversion)",
				rsl: 20,
				nrmCode: "5.8.2.1.5",
				sfgCode: "43-05",
				baseCost: 32e3,
				remarks: "DC bus capacitor change at 5-8 yrs"
			},
			{
				name: "UPS VRLA Lead Acid Battery Strings (10-Yr Design)",
				rsl: 5,
				nrmCode: "5.8.2.1.5.1",
				sfgCode: "43-04",
				baseCost: 12500,
				remarks: "Quarterly conductance testing"
			},
			{
				name: "Diesel Rotary UPS Systems (DRUPS)",
				rsl: 20,
				nrmCode: "5.8.2.1.5.3",
				sfgCode: "43-02",
				baseCost: 165e3,
				remarks: "Kinetic flywheel energy storage"
			},
			{
				name: "Standby Diesel Generator Sets (Base Load/Auto-Start)",
				rsl: 30,
				nrmCode: "5.8.5.1.1.2",
				sfgCode: "43-02 / 43-09",
				baseCost: 55e3,
				remarks: "Monthly load bank testing"
			},
			{
				name: "Automatic Transfer Switches (ATS / 4-Pole)",
				rsl: 20,
				nrmCode: "5.8.1.1.1",
				sfgCode: "58-03",
				baseCost: 8500,
				remarks: "Mains-to-generator interlock"
			},
			{
				name: "Rooftop Solar Photovoltaic Array (PV Inverters)",
				rsl: 25,
				nrmCode: "5.8.5.5.2",
				sfgCode: "43-06",
				baseCost: 34e3,
				remarks: "String inverters RSL = 12 yrs"
			},
			{
				name: "Commercial Building Wind Turbines",
				rsl: 20,
				nrmCode: "5.8.5.4.1",
				sfgCode: "43-10",
				baseCost: 45e3,
				remarks: "Mechanical gearbox & generator"
			},
			{
				name: "Lightning Protection Tape & Earth Pit Network",
				rsl: 30,
				nrmCode: "5.8.6.1.1",
				sfgCode: "38-01",
				baseCost: 7500,
				remarks: "BS EN 62305 compliance"
			}
		]
	},
	{
		category: "5.8.3 Lighting & Specialist Lighting Installations",
		nrmCode: "5.8.3",
		items: [
			{
				name: "Commercial LED Office Luminaires & Drivers",
				rsl: 20,
				nrmCode: "5.8.3.1.1.1",
				sfgCode: "36-01",
				baseCost: 180,
				remarks: "L80B10 >50,000 hrs (Driver RSL = 10)"
			},
			{
				name: "Fluorescent / High-Bay HID Luminaires",
				rsl: 15,
				nrmCode: "5.8.3.1.1.1",
				sfgCode: "36-01",
				baseCost: 140,
				remarks: "UK RoHS phaseout liability"
			},
			{
				name: "External Floodlights & Architectural Facade Lighting",
				rsl: 15,
				nrmCode: "5.8.3.1.1.2",
				sfgCode: "36-04",
				baseCost: 650,
				remarks: "IP66 corrosion-resistant housing"
			},
			{
				name: "Self-Contained Emergency Lighting Packs",
				rsl: 25,
				nrmCode: "5.8.3.1.2.1",
				sfgCode: "37-01",
				baseCost: 160,
				remarks: "Battery pack RSL = 4-5 yrs"
			},
			{
				name: "Central Battery Emergency Lighting Systems",
				rsl: 25,
				nrmCode: "5.8.3.1.2.2",
				sfgCode: "37-02",
				baseCost: 18500,
				remarks: "BS 5266 annual 3-hr discharge test"
			},
			{
				name: "Addressable DALI Lighting Control Hubs & Sensors",
				rsl: 10,
				nrmCode: "5.8.3.1.11",
				sfgCode: "36-02 / 50-09",
				baseCost: 8500,
				remarks: "Daylight harvesting & PIR sensors"
			},
			{
				name: "Operating Theatre & Medical Examination Lights",
				rsl: 20,
				nrmCode: "5.8.4.1.5.1",
				sfgCode: "36-01",
				baseCost: 14e3,
				remarks: "Surgical shadowless articulation"
			}
		]
	},
	{
		category: "5.10 Lifts, Escalators & Materials Handling",
		nrmCode: "5.10",
		items: [
			{
				name: "Gearless Traction Passenger Lifts (MRL Overhead)",
				rsl: 20,
				nrmCode: "5.10.1.1.1.1",
				sfgCode: "82-01 / 82-05",
				baseCost: 78e3,
				remarks: "LOLER 6-monthly thorough exam"
			},
			{
				name: "Hydraulic Passenger / Heavy Goods Lifts",
				rsl: 15,
				nrmCode: "5.10.1.1.1.3",
				sfgCode: "82-03",
				baseCost: 52e3,
				remarks: "Ram cylinder & power unit seals"
			},
			{
				name: "Designated Firefighting & Evacuation Lifts",
				rsl: 20,
				nrmCode: "5.10.1.1.2",
				sfgCode: "82-05",
				baseCost: 88e3,
				remarks: "BS EN 81-72 dual power supply"
			},
			{
				name: "Commercial Public Service Escalators",
				rsl: 30,
				nrmCode: "5.10.2.1.1",
				sfgCode: "82-02",
				baseCost: 115e3,
				remarks: "Step chains, handrails & tracks"
			},
			{
				name: "Horizontal Moving Walkways / Travelators",
				rsl: 20,
				nrmCode: "5.10.3.1.2",
				sfgCode: "82-02",
				baseCost: 95e3,
				remarks: "Pallet drive & combplates"
			},
			{
				name: "Powered Disabled Platform / Stair Lifts",
				rsl: 20,
				nrmCode: "5.10.4.1.1",
				sfgCode: "82-04",
				baseCost: 14e3,
				remarks: "Screw / rack & pinion drive"
			},
			{
				name: "Commercial Kitchen Service Dumbwaiters",
				rsl: 20,
				nrmCode: "5.10.1.6.1",
				sfgCode: "84-11",
				baseCost: 11e3,
				remarks: "Bi-parting vertical shutters"
			},
			{
				name: "Hydraulic Dock Levellers & Loading Bay Scissor Lifts",
				rsl: 25,
				nrmCode: "5.10.6.1.1",
				sfgCode: "84-12 / 84-37",
				baseCost: 12500,
				remarks: "High cyclic stress"
			},
			{
				name: "Overhead Travelling Workshop Cranes (Gantry)",
				rsl: 30,
				nrmCode: "5.10.7.2.2",
				sfgCode: "84-26",
				baseCost: 45e3,
				remarks: "Wire rope hoist & festoon cables"
			},
			{
				name: "Automatic Pneumatic Cash / Document Capsule Systems",
				rsl: 20,
				nrmCode: "5.12.1.15",
				sfgCode: "60-02 / 60-04",
				baseCost: 26e3,
				remarks: "Air blower & divertor stations"
			}
		]
	},
	{
		category: "5.11 Fire Suppression & Life Safety Systems",
		nrmCode: "5.11",
		items: [
			{
				name: "Fire Hose Reel Stations (Swinging / Static)",
				rsl: 15,
				nrmCode: "5.11.1.1.1.2",
				sfgCode: "23-03",
				baseCost: 650,
				remarks: "BS EN 671 compliance"
			},
			{
				name: "Dry Riser Distribution Pipework & Landing Valves",
				rsl: 25,
				nrmCode: "5.11.1.2.2.1",
				sfgCode: "23-04 / 87-10",
				baseCost: 8500,
				remarks: "Annual hydrostatic pressure test"
			},
			{
				name: "Wet Riser High-Pressure Fire Mains & Pumps",
				rsl: 20,
				nrmCode: "5.11.1.3.3.1",
				sfgCode: "23-04",
				baseCost: 24e3,
				remarks: "Multi-stage fire booster pump"
			},
			{
				name: "Automatic Sprinkler System Pipework & Heads",
				rsl: 30,
				nrmCode: "5.11.2.1.1.2",
				sfgCode: "23-14 / 87-23",
				baseCost: 45e3,
				remarks: "BS EN 12845 life safety hazard"
			},
			{
				name: "Diesel / Electric Sprinkler Fire Pump Sets",
				rsl: 20,
				nrmCode: "5.11.2.1.1.1",
				sfgCode: "23-14",
				baseCost: 32e3,
				remarks: "LPCB approved weekly engine run"
			},
			{
				name: "Sprinkler Wet/Dry Alarm Changeover Valve Sets",
				rsl: 25,
				nrmCode: "5.11.2.1.1.3",
				sfgCode: "23-14",
				baseCost: 6800,
				remarks: "Water motor alarm gong"
			},
			{
				name: "Gas Total Flooding Fire Extinguishing (Novec/Inergen)",
				rsl: 15,
				nrmCode: "5.11.2.3.3.1",
				sfgCode: "23-05",
				baseCost: 19500,
				remarks: "10-year container pressure test"
			},
			{
				name: "Commercial Kitchen Hood Fire Suppression (Ansul)",
				rsl: 20,
				nrmCode: "5.11.2.1.1.4",
				sfgCode: "23-16",
				baseCost: 5500,
				remarks: "Wet chemical fusible link"
			},
			{
				name: "Sectional Sprinkler Water Storage Tanks",
				rsl: 25,
				nrmCode: "5.11.2.5.6",
				sfgCode: "56-02",
				baseCost: 28e3,
				remarks: "Vortex inhibitor & immersion heater"
			}
		]
	},
	{
		category: "5.12 BMS, Communication & Electronic Security",
		nrmCode: "5.12",
		items: [
			{
				name: "Addressable Fire Alarm Master Panels & Repeaters",
				rsl: 15,
				nrmCode: "5.12.1.7",
				sfgCode: "22-01 / 22-03",
				baseCost: 18500,
				remarks: "BS 5839-1 statutory compliance"
			},
			{
				name: "Optical Smoke & Thermal Heat Detectors (Loop)",
				rsl: 10,
				nrmCode: "5.12.1.8.1",
				sfgCode: "50-03 / 50-10",
				baseCost: 85,
				remarks: "Chamber contamination / cleaning"
			},
			{
				name: "Aspirating Very Early Smoke Detection (VESDA)",
				rsl: 10,
				nrmCode: "5.12.1.8.2",
				sfgCode: "50-10",
				baseCost: 6500,
				remarks: "Laser chamber & filter replacement"
			},
			{
				name: "Public Address & Voice Alarm Systems (PA/VA)",
				rsl: 20,
				nrmCode: "5.12.1.4.1",
				sfgCode: "11-01",
				baseCost: 24e3,
				remarks: "BS 5839-8 intelligibility STI"
			},
			{
				name: "Audio-Frequency Induction Loop Systems (AFILS)",
				rsl: 10,
				nrmCode: "5.12.1.4.3",
				sfgCode: "11-06",
				baseCost: 1800,
				remarks: "Hearing accessibility compliance"
			},
			{
				name: "Disabled Refuge & Emergency Call Outstations",
				rsl: 10,
				nrmCode: "5.12.1.3.2",
				sfgCode: "14-20",
				baseCost: 4500,
				remarks: "BS 5839-9 two-way communication"
			},
			{
				name: "Digital IP CCTV Cameras & Network Video Recorders",
				rsl: 15,
				nrmCode: "5.12.2.1.1",
				sfgCode: "49-02",
				baseCost: 16e3,
				remarks: "PoE cameras & RAID storage"
			},
			{
				name: "Electronic Access Control Controllers & Readers",
				rsl: 15,
				nrmCode: "5.12.2.4.4.2",
				sfgCode: "14-19 / 49-03",
				baseCost: 12e3,
				remarks: "Mifare / biometric / maglock"
			},
			{
				name: "Intruder Alarm Master Panels & PIR Sensors",
				rsl: 15,
				nrmCode: "5.12.2.2.2.1",
				sfgCode: "49-01 / 85-01",
				baseCost: 6500,
				remarks: "PD 6662 / Grade 3 compliance"
			},
			{
				name: "BMS Central Server, Supervisor Head-End & Workstation",
				rsl: 5,
				nrmCode: "5.12.3.1.2",
				sfgCode: "06-01 / 06-03",
				baseCost: 19500,
				remarks: "OS updates & cyber security"
			},
			{
				name: "BMS Direct Digital Control Outstations (DDC)",
				rsl: 10,
				nrmCode: "5.12.3.1.2.2",
				sfgCode: "06-05",
				baseCost: 14500,
				remarks: "BACnet / Modbus microprocessors"
			},
			{
				name: "Variable Speed Inverter Drives (VFD / VSD)",
				rsl: 15,
				nrmCode: "5.12.3.1.1",
				sfgCode: "14-15",
				baseCost: 4800,
				remarks: "Cooling fan & DC bus capacitors"
			},
			{
				name: "Environmental Sensors (Temp, Humidity, CO2, Air Quality)",
				rsl: 8,
				nrmCode: "5.12.3.1.2.4",
				sfgCode: "50-03 / 50-07",
				baseCost: 220,
				remarks: "Annual calibration verification"
			},
			{
				name: "Motorised Control Valves & 24V Damper Actuators",
				rsl: 15,
				nrmCode: "5.12.3.1.2.5",
				sfgCode: "01-06 / 62-01",
				baseCost: 550,
				remarks: "Spring return / 0-10V modulating"
			}
		]
	},
	{
		category: "5.13 Specialist Piped, Medical & Leisure Systems",
		nrmCode: "5.13",
		items: [
			{
				name: "Medical Gas Pipeline Systems (O2 / N2O / MedAir)",
				rsl: 30,
				nrmCode: "5.13.1.1.1",
				sfgCode: "44-15 / 50-11",
				baseCost: 45e3,
				remarks: "HTM 02-01 statutory compliance"
			},
			{
				name: "Centralised Medical / Industrial Vacuum Plant",
				rsl: 20,
				nrmCode: "5.13.1.2.2",
				sfgCode: "60-01",
				baseCost: 32e3,
				remarks: "Duplex vacuum pumps & bacterial filter"
			},
			{
				name: "Industrial Compressed Air Compressor & Receivers",
				rsl: 20,
				nrmCode: "5.13.1.5.5",
				sfgCode: "40-07 / 40-08",
				baseCost: 22e3,
				remarks: "Written scheme of examination"
			},
			{
				name: "Commercial Cold Rooms & Walk-In Freezers",
				rsl: 15,
				nrmCode: "5.13.2.1.1",
				sfgCode: "10-01 / 10-03",
				baseCost: 18500,
				remarks: "Insulated cam-lock panels & evaporator"
			},
			{
				name: "Ice Making Machines & Flakers (Commercial)",
				rsl: 15,
				nrmCode: "5.13.2.2.2.1",
				sfgCode: "34-01",
				baseCost: 4800,
				remarks: "Evaporator harvest & water filter"
			},
			{
				name: "Commercial Swimming Pool Sand Filtration Plant",
				rsl: 20,
				nrmCode: "5.13.1.4.4.2",
				sfgCode: "57-03",
				baseCost: 26e3,
				remarks: "Backwash valves & media change"
			},
			{
				name: "Sauna Equipment & Commercial Steam Rooms",
				rsl: 15,
				nrmCode: "5.13.3.1.2.1",
				sfgCode: "66-03",
				baseCost: 12500,
				remarks: "Electrode steam boiler & elements"
			},
			{
				name: "Hydrotherapy & Commercial Spa Baths (Jacuzzis)",
				rsl: 15,
				nrmCode: "5.13.3.1.3",
				sfgCode: "66-01 / 66-02",
				baseCost: 16e3,
				remarks: "Booster jets & chlorine dosing"
			}
		]
	}
];
//#endregion
//#region src/pages/calculator.astro
var calculator_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Calculator,
	file: () => $$file,
	url: () => $$url
});
var $$Calculator = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Station 05 // Plant Lifecycle Modeler (CIBSE Guide M) - Nathan Jarvis, ACABE",
		"description": "Interactive CIBSE Guide M / RICS NRM3 Asset Lifecycle & Forward Replacement Calculator by Nathan Jarvis, ACABE. Models component degradation, maintenance deratings, and inflation escalation.",
		"data-astro-cid-5jcmr5ue": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main class="responsive-shell" data-astro-cid-5jcmr5ue><a href="/" class="back-btn" aria-label="Return to Homepage" data-astro-cid-5jcmr5ue>← RETURN TO PORTFOLIO HOME</a><div class="station-grid" data-astro-cid-5jcmr5ue><aside class="hud-sidebar" aria-label="Engineering Standards &amp; Frameworks" data-astro-cid-5jcmr5ue><div class="sidebar-header" data-astro-cid-5jcmr5ue>STANDARDS & FRAMEWORKS</div><div class="meta-row" data-astro-cid-5jcmr5ue><div class="meta-label" data-astro-cid-5jcmr5ue>PRIMARY BENCHMARK</div><div class="meta-val" data-astro-cid-5jcmr5ue>CIBSE Guide M (Table 12.A1)</div></div><div class="meta-row" data-astro-cid-5jcmr5ue><div class="meta-label" data-astro-cid-5jcmr5ue>STRUCTURE ALIGNMENT</div><div class="meta-val" style="color: var(--neon-cyan);" data-astro-cid-5jcmr5ue>RICS NRM3 & BESA SFG20</div></div><div class="meta-row" data-astro-cid-5jcmr5ue><div class="meta-label" data-astro-cid-5jcmr5ue>DEPRECIATION MODEL</div><div class="meta-val" data-astro-cid-5jcmr5ue>SFG20 Maintenance & Operating Deratings</div></div><div class="meta-row" data-astro-cid-5jcmr5ue><div class="meta-label" data-astro-cid-5jcmr5ue>LIFECYCLE COSTING</div><div class="meta-val" data-astro-cid-5jcmr5ue>BS 8544:2013 In-Use Maintenance Plan</div></div><div class="meta-row" data-astro-cid-5jcmr5ue><div class="meta-label" data-astro-cid-5jcmr5ue>STATUS</div><div class="meta-val" data-astro-cid-5jcmr5ue><span class="status-pill" data-astro-cid-5jcmr5ue>CLIENT-SIDE COMPUTED</span></div></div></aside><section class="main-stream" data-astro-cid-5jcmr5ue><div class="page-tag" data-astro-cid-5jcmr5ue>STATION // 05 // LIFECYCLE MODELER</div><h1 class="page-title" data-astro-cid-5jcmr5ue>CIBSE Guide M Asset Lifecycle & Forward Capex Tool</h1><p class="page-lead" data-astro-cid-5jcmr5ue>Empirical lifecycle depreciation calculator evaluating remaining service life (RSL), maintenance derating multipliers, and forward replacement capex across commercial MEP building services.</p><div class="calc-grid" data-astro-cid-5jcmr5ue><!-- Input Form --><div class="calc-inputs-panel" data-astro-cid-5jcmr5ue><div class="panel-title" data-astro-cid-5jcmr5ue><span data-astro-cid-5jcmr5ue>PLANT PARAMETERS</span><span style="color: var(--neon-cyan); font-family: var(--font-mono); font-size: 0.72rem;" data-astro-cid-5jcmr5ue>SPECIFICATION</span></div><div class="form-group" data-astro-cid-5jcmr5ue><label class="form-label" for="discipline-select" data-astro-cid-5jcmr5ue>1. Engineering Discipline</label><select id="discipline-select" class="form-select" data-astro-cid-5jcmr5ue>${CIBSE_GUIDE_M_DATA.map((cat, idx) => renderTemplate`<option${addAttribute(idx, "value")} data-astro-cid-5jcmr5ue>${cat.category}</option>`)}</select></div><div class="form-group" data-astro-cid-5jcmr5ue><label class="form-label" for="asset-select" data-astro-cid-5jcmr5ue>2. Maintainable Asset Component</label><select id="asset-select" class="form-select" data-astro-cid-5jcmr5ue></select><div class="standards-badge-bar" data-astro-cid-5jcmr5ue><span class="std-badge" id="badge-nrm" data-astro-cid-5jcmr5ue>NRM3: --</span><span class="std-badge" id="badge-sfg" data-astro-cid-5jcmr5ue>SFG20: --</span></div></div><div class="form-group" data-astro-cid-5jcmr5ue><label class="form-label" for="install-year" data-astro-cid-5jcmr5ue>3. Installation Year</label><input type="number" id="install-year" class="form-input" value="2016" min="1980" max="2026" data-astro-cid-5jcmr5ue></div><div class="form-group" data-astro-cid-5jcmr5ue><label class="form-label" for="maint-factor" data-astro-cid-5jcmr5ue>4. Maintenance Regime Factor</label><select id="maint-factor" class="form-select" data-astro-cid-5jcmr5ue><option value="1.15" data-astro-cid-5jcmr5ue>Comprehensive SFG20 PPM (+15% Life Extension)</option><option value="1.0" selected data-astro-cid-5jcmr5ue>Standard Manufacturer Guidelines (Baseline 1.0)</option><option value="0.75" data-astro-cid-5jcmr5ue>Reactive / Neglected Maintenance (-25% Life Penalty)</option></select></div><div class="form-group" data-astro-cid-5jcmr5ue><label class="form-label" for="env-factor" data-astro-cid-5jcmr5ue>5. Operating Environment</label><select id="env-factor" class="form-select" data-astro-cid-5jcmr5ue><option value="1.05" data-astro-cid-5jcmr5ue>Benign / Clean Plant Room (+5% Life)</option><option value="1.0" selected data-astro-cid-5jcmr5ue>Standard Commercial Envelope (Baseline 1.0)</option><option value="0.8" data-astro-cid-5jcmr5ue>Harsh / Corrosive / Coastal / High Particulate (-20% Penalty)</option></select></div><div class="form-group" data-astro-cid-5jcmr5ue><label class="form-label" for="inflation-rate" data-astro-cid-5jcmr5ue>6. Capex Escalation / Inflation Rate (%)</label><input type="number" id="inflation-rate" class="form-input" value="4.5" step="0.1" min="0" data-astro-cid-5jcmr5ue></div></div><!-- Results Output --><div class="calc-results-panel" data-astro-cid-5jcmr5ue><div class="panel-title" data-astro-cid-5jcmr5ue><span data-astro-cid-5jcmr5ue>ENGINEERING APPRAISAL</span><span style="color: var(--neon-emerald); font-family: var(--font-mono); font-size: 0.72rem;" data-astro-cid-5jcmr5ue>BS 8544 OUTPUT</span></div><div class="metric-card-row" data-astro-cid-5jcmr5ue><div class="metric-card" data-astro-cid-5jcmr5ue><span class="metric-card-label" data-astro-cid-5jcmr5ue>Current Asset Age</span><span class="metric-card-val" id="out-age" data-astro-cid-5jcmr5ue>10.0 yrs</span></div><div class="metric-card" data-astro-cid-5jcmr5ue><span class="metric-card-label" data-astro-cid-5jcmr5ue>Effective Life Expectancy</span><span class="metric-card-val" id="out-life" data-astro-cid-5jcmr5ue>20.0 yrs</span></div></div><div class="metric-card-row" data-astro-cid-5jcmr5ue><div class="metric-card highlight" data-astro-cid-5jcmr5ue><span class="metric-card-label" data-astro-cid-5jcmr5ue>Remaining Useful Life (RUL)</span><span class="metric-card-val" id="out-rul" style="color: var(--neon-cyan);" data-astro-cid-5jcmr5ue>10.0 yrs</span></div><div class="metric-card" data-astro-cid-5jcmr5ue><span class="metric-card-label" data-astro-cid-5jcmr5ue>Target Renewal Year</span><span class="metric-card-val" id="out-target-year" data-astro-cid-5jcmr5ue>2036</span></div></div><div class="metric-card" style="margin-bottom: 1rem;" data-astro-cid-5jcmr5ue><span class="metric-card-label" data-astro-cid-5jcmr5ue>Forward Replacement Capex (Escalated)</span><span class="metric-card-val" id="out-cost" style="color: var(--neon-emerald);" data-astro-cid-5jcmr5ue>£34,178</span></div><div class="form-label" style="display:flex; justify-content:space-between;" data-astro-cid-5jcmr5ue><span data-astro-cid-5jcmr5ue>LIFECYCLE CONSUMPTION RATIO</span><span id="out-pct" data-astro-cid-5jcmr5ue>50%</span></div><div class="progress-track" data-astro-cid-5jcmr5ue><div class="progress-fill" id="progress-bar" data-astro-cid-5jcmr5ue></div></div><div id="status-pill-indicator" class="lifecycle-status-pill" data-astro-cid-5jcmr5ue>NOMINAL OPERATION &bull; ROUTINE PPM</div></div></div></section></div></main>${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-5jcmr5ue": true })}<script>(function(){${defineScriptVars({ dataset: CIBSE_GUIDE_M_DATA })}
        const currentYear = 2026;
        const discSelect = document.getElementById('discipline-select');
        const assetSelect = document.getElementById('asset-select');
        const badgeNrm = document.getElementById('badge-nrm');
        const badgeSfg = document.getElementById('badge-sfg');

        function populateAssets() {
            const catIdx = parseInt(discSelect.value) || 0;
            const category = dataset[catIdx];
            assetSelect.innerHTML = '';

            category.items.forEach((item, idx) => {
                const opt = document.createElement('option');
                opt.value = idx.toString();
                opt.textContent = \`\${item.name} (\${item.rsl} yrs)\`;
                opt.setAttribute('data-rsl', item.rsl.toString());
                opt.setAttribute('data-cost', item.baseCost.toString());
                opt.setAttribute('data-nrm', item.nrmCode);
                opt.setAttribute('data-sfg', item.sfgCode);
                assetSelect.appendChild(opt);
            });

            updateBadges();
            computeLifecycle();
        }

        function updateBadges() {
            const opt = assetSelect.selectedOptions[0];
            if (opt) {
                badgeNrm.textContent = \`NRM3: \${opt.getAttribute('data-nrm') || '5.x'}\`;
                badgeSfg.textContent = \`SFG20: \${opt.getAttribute('data-sfg') || 'Std'}\`;
            }
        }

        function computeLifecycle() {
            const opt = assetSelect.selectedOptions[0];
            if (!opt) return;

            const baseLife = parseFloat(opt.getAttribute('data-rsl') || '20');
            const baseCost = parseFloat(opt.getAttribute('data-cost') || '25000');
            
            const installYear = parseInt(document.getElementById('install-year').value) || currentYear;
            const maintFactor = parseFloat(document.getElementById('maint-factor').value);
            const envFactor = parseFloat(document.getElementById('env-factor').value);
            const inflationRate = (parseFloat(document.getElementById('inflation-rate').value) || 0) / 100;

            const currentAge = Math.max(0, currentYear - installYear);
            const effectiveLife = Math.round(baseLife * maintFactor * envFactor * 10) / 10;
            const remainingUsefulLife = Math.round((effectiveLife - currentAge) * 10) / 10;
            const targetYear = Math.round(installYear + effectiveLife);

            const yearsToInflation = Math.max(0, targetYear - currentYear);
            const escalatedCost = Math.round(baseCost * Math.pow(1 + inflationRate, yearsToInflation));

            const consumptionPct = Math.min(100, Math.max(0, Math.round((currentAge / effectiveLife) * 100)));

            document.getElementById('out-age').textContent = \`\${currentAge.toFixed(1)} yrs\`;
            document.getElementById('out-life').textContent = \`\${effectiveLife.toFixed(1)} yrs\`;
            
            const rulEl = document.getElementById('out-rul');
            rulEl.textContent = \`\${remainingUsefulLife > 0 ? remainingUsefulLife.toFixed(1) : '0.0'} yrs\`;
            
            document.getElementById('out-target-year').textContent = targetYear.toString();
            document.getElementById('out-cost').textContent = \`£\${escalatedCost.toLocaleString('en-GB')}\`;
            document.getElementById('out-pct').textContent = \`\${consumptionPct}%\`;
            
            document.getElementById('progress-bar').style.width = \`\${consumptionPct}%\`;

            const indicator = document.getElementById('status-pill-indicator');
            if (remainingUsefulLife <= 0) {
                rulEl.style.color = '#f43f5e';
                indicator.style.background = 'rgba(244, 63, 94, 0.15)';
                indicator.style.border = '1px solid #f43f5e';
                indicator.style.color = '#f43f5e';
                indicator.textContent = 'RUN-TO-FAIL CRITICAL • IMMEDIATE CAPITAL REPLACEMENT';
            } else if (remainingUsefulLife <= 3) {
                rulEl.style.color = '#f59e0b';
                indicator.style.background = 'rgba(245, 158, 11, 0.15)';
                indicator.style.border = '1px solid #f59e0b';
                indicator.style.color = '#f59e0b';
                indicator.textContent = 'CAPITAL RENEWAL WINDOW • FORWARD PLANNING ACTIVE';
            } else {
                rulEl.style.color = '#38bdf8';
                indicator.style.background = 'rgba(52, 211, 153, 0.12)';
                indicator.style.border = '1px solid #34d399';
                indicator.style.color = '#34d399';
                indicator.textContent = 'NOMINAL LIFECYCLE • ROUTINE SFG20 MAINTENANCE';
            }
        }

        discSelect.addEventListener('change', populateAssets);
        assetSelect.addEventListener('change', () => {
            updateBadges();
            computeLifecycle();
        });

        ['install-year', 'maint-factor', 'env-factor', 'inflation-rate'].forEach(id => {
            const el = document.getElementById(id);
            el?.addEventListener('input', computeLifecycle);
            el?.addEventListener('change', computeLifecycle);
        });

        populateAssets();
    })();<\/script>` })}`;
}, "C:/Users/natha/Documents/engineering-portfolio-v2/src/pages/calculator.astro", void 0);
var $$file = "C:/Users/natha/Documents/engineering-portfolio-v2/src/pages/calculator.astro";
var $$url = "/calculator";
//#endregion
//#region \0virtual:astro:page:src/pages/calculator@_@astro
var page = () => calculator_exports;
//#endregion
export { page };
