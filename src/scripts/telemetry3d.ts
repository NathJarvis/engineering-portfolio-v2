import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export function init3DGrid() {
	const canvas = document.getElementById('webgl-canvas') as HTMLCanvasElement;
	if (!canvas) return;

	const callouts = [
		{ el: document.getElementById('callout-0') as HTMLAnchorElement, url: '/about' },
		{ el: document.getElementById('callout-1') as HTMLAnchorElement, url: '/blog' },
		{ el: document.getElementById('callout-2') as HTMLAnchorElement, url: '/research' },
		{ el: document.getElementById('callout-3') as HTMLAnchorElement, url: '/contact' },
		{ el: document.getElementById('callout-4') as HTMLAnchorElement, url: '/calculator' },
	];

	const scene = new THREE.Scene();
	scene.fog = new THREE.FogExp2(0x030712, 0.015);

	const camera = new THREE.PerspectiveCamera(46, window.innerWidth / window.innerHeight, 0.1, 100);

	const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

	const controls = new OrbitControls(camera, canvas);
	controls.enableDamping = true;
	controls.dampingFactor = 0.05;
	controls.maxPolarAngle = Math.PI / 2 - 0.05;
	controls.minDistance = 10;
	controls.maxDistance = 46;
	controls.target.set(0, 0, 0);

	function updateCameraFraming() {
		const width = window.innerWidth;
		const height = window.innerHeight;
		const aspect = width / height;

		camera.aspect = aspect;

		const baseDistance = 19.5;
		if (aspect < 1.7) {
			camera.position.set(0, 11.5 * (1.7 / aspect), baseDistance * (1.7 / aspect));
		} else {
			camera.position.set(0, 11.5, baseDistance);
		}

		camera.updateProjectionMatrix();
		renderer.setSize(width, height);
	}

	updateCameraFraming();

	const ambientLight = new THREE.AmbientLight(0xffffff, 0.65);
	scene.add(ambientLight);

	const busLight = new THREE.PointLight(0x38bdf8, 4.2, 48);
	busLight.position.set(0, 6, 2);
	scene.add(busLight);

	const grid = new THREE.GridHelper(54, 54, 0x38bdf8, 0x1e293b);
	grid.position.y = -2.6;
	scene.add(grid);

	// Central Transformer Core
	const coreGroup = new THREE.Group();
	for (let i = -1; i <= 1; i++) {
		const torusGeo = new THREE.TorusGeometry(1.2, 0.06, 16, 40);
		const torusMat = new THREE.MeshStandardMaterial({
			color: 0x38bdf8,
			emissive: 0x0284c7,
			emissiveIntensity: 0.6,
			metalness: 0.8,
			roughness: 0.2,
		});
		const torus = new THREE.Mesh(torusGeo, torusMat);
		torus.rotation.x = Math.PI / 2;
		torus.position.y = i * 0.45;
		coreGroup.add(torus);
	}

	const shieldGeo = new THREE.OctahedronGeometry(1.7, 1);
	const shieldMat = new THREE.MeshStandardMaterial({
		color: 0x38bdf8,
		wireframe: true,
		transparent: true,
		opacity: 0.35,
	});
	const shield = new THREE.Mesh(shieldGeo, shieldMat);
	coreGroup.add(shield);
	scene.add(coreGroup);

	// Multi-Tiered Asymmetrical Substation Assemblies & Dedicated Non-Crossing Conduits
	const stations: {
		group: THREE.Group;
		mesh: THREE.Mesh;
		url: string;
		pos: THREE.Vector3;
		waypoints: THREE.Vector3[];
	}[] = [];

	function registerStation(
		group: THREE.Group,
		hitMesh: THREE.Mesh,
		url: string,
		pos: THREE.Vector3,
		waypoints: THREE.Vector3[]
	) {
		group.position.copy(pos);
		hitMesh.userData = { url };
		scene.add(group);
		stations.push({ group, mesh: hitMesh, url, pos, waypoints });
	}

	// 01: LV Switchgear (/about) - High Upper-Left Tier (Y = 1.4, R = 8.5)
	const node01Group = new THREE.Group();
	const switchgearGeo = new THREE.BoxGeometry(1.2, 1.5, 0.8);
	const switchgearMat = new THREE.MeshStandardMaterial({
		color: 0x0369a1,
		emissive: 0x0284c7,
		emissiveIntensity: 0.4,
		wireframe: true,
	});
	const switchgearMesh = new THREE.Mesh(switchgearGeo, switchgearMat);
	node01Group.add(switchgearMesh);

	for (let b = -0.3; b <= 0.3; b += 0.3) {
		const barGeo = new THREE.CylinderGeometry(0.04, 0.04, 1.6, 12);
		const barMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.9, roughness: 0.1 });
		const bar = new THREE.Mesh(barGeo, barMat);
		bar.position.set(b, 0, 0);
		node01Group.add(bar);
	}
	const pos01 = new THREE.Vector3(-8.2, 1.4, -3.8);
	const waypoints01 = [
		new THREE.Vector3(0, 0.45, 0),
		new THREE.Vector3(-4.0, 0.45, 0),
		new THREE.Vector3(-4.0, 1.4, -3.8),
		pos01.clone(),
	];
	registerStation(node01Group, switchgearMesh, '/about', pos01, waypoints01);

	// 02: Chiller Impeller (/blog) - Mid-High East Tier (Y = 0.6, R = 8.9)
	const node02Group = new THREE.Group();
	const impellerCoreGeo = new THREE.CylinderGeometry(0.85, 0.85, 0.65, 20);
	const chillerMat = new THREE.MeshStandardMaterial({
		color: 0x0284c7,
		emissive: 0x38bdf8,
		emissiveIntensity: 0.5,
		wireframe: true,
	});
	const chillerMesh = new THREE.Mesh(impellerCoreGeo, chillerMat);
	chillerMesh.rotation.x = Math.PI / 2;
	node02Group.add(chillerMesh);

	const voluteGeo = new THREE.TorusGeometry(1.1, 0.09, 12, 32);
	const voluteMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, metalness: 0.8, roughness: 0.2 });
	const volute = new THREE.Mesh(voluteGeo, voluteMat);
	node02Group.add(volute);
	const pos02 = new THREE.Vector3(8.6, 0.6, -2.4);
	const waypoints02 = [
		new THREE.Vector3(0, 0.2, 0),
		new THREE.Vector3(3.5, 0.2, -1.0),
		new THREE.Vector3(8.6, 0.2, -1.0),
		pos02.clone(),
	];
	registerStation(node02Group, chillerMesh, '/blog', pos02, waypoints02);

	// 03: Typst Manifold (/research) - Lower Deep-Left Trench (Y = -1.2, R = 7.9)
	const node03Group = new THREE.Group();
	const manifoldGeo = new THREE.DodecahedronGeometry(0.95, 0);
	const manifoldMat = new THREE.MeshStandardMaterial({
		color: 0x0ea5e9,
		emissive: 0x38bdf8,
		emissiveIntensity: 0.6,
		wireframe: true,
	});
	const manifoldMesh = new THREE.Mesh(manifoldGeo, manifoldMat);
	node03Group.add(manifoldMesh);

	const crystalGeo = new THREE.OctahedronGeometry(0.5, 0);
	const crystalMat = new THREE.MeshStandardMaterial({ color: 0x34d399, emissive: 0x34d399, emissiveIntensity: 0.8 });
	const crystal = new THREE.Mesh(crystalGeo, crystalMat);
	node03Group.add(crystal);
	const pos03 = new THREE.Vector3(-6.8, -1.2, 4.4);
	const waypoints03 = [
		new THREE.Vector3(0, -0.45, 0),
		new THREE.Vector3(-2.2, -0.45, 2.4),
		new THREE.Vector3(-2.2, -1.2, 4.4),
		pos03.clone(),
	];
	registerStation(node03Group, manifoldMesh, '/research', pos03, waypoints03);

	// 04: Transceiver Mast (/contact) - Mid-Right Forward Wing (Y = 0.0, R = 8.6)
	const node04Group = new THREE.Group();
	const mastGeo = new THREE.ConeGeometry(0.9, 1.8, 6);
	const mastMat = new THREE.MeshStandardMaterial({
		color: 0x38bdf8,
		emissive: 0x0284c7,
		emissiveIntensity: 0.5,
		wireframe: true,
	});
	const mastMesh = new THREE.Mesh(mastGeo, mastMat);
	mastMesh.rotation.x = Math.PI;
	node04Group.add(mastMesh);

	const emitterRingGeo = new THREE.RingGeometry(0.95, 1.15, 24);
	const emitterRingMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, side: THREE.DoubleSide, transparent: true, opacity: 0.4 });
	const emitterRing = new THREE.Mesh(emitterRingGeo, emitterRingMat);
	emitterRing.rotation.x = Math.PI / 2;
	node04Group.add(emitterRing);
	const pos04 = new THREE.Vector3(7.2, 0.0, 4.8);
	const waypoints04 = [
		new THREE.Vector3(0, -0.2, 0),
		new THREE.Vector3(4.8, -0.2, 1.2),
		new THREE.Vector3(7.2, -0.2, 1.2),
		pos04.clone(),
	];
	registerStation(node04Group, mastMesh, '/contact', pos04, waypoints04);

	// 05: Capacitor Bank / Lifecycle Modeler (/calculator) - Center Deep Trench (Y = -0.8, R = 7.8)
	const node05Group = new THREE.Group();
	const capBaseGeo = new THREE.CylinderGeometry(0.95, 0.95, 0.35, 24);
	const capBaseMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.8, roughness: 0.3 });
	const capBase = new THREE.Mesh(capBaseGeo, capBaseMat);
	node05Group.add(capBase);

	const cellGeo = new THREE.CylinderGeometry(0.2, 0.2, 0.95, 16);
	const cellMat = new THREE.MeshStandardMaterial({
		color: 0xf59e0b,
		emissive: 0xd97706,
		emissiveIntensity: 0.5,
		metalness: 0.9,
		roughness: 0.2,
	});
	for (let angle = 0; angle < Math.PI * 2; angle += Math.PI / 2) {
		const cell = new THREE.Mesh(cellGeo, cellMat);
		cell.position.set(Math.cos(angle) * 0.45, 0.45, Math.sin(angle) * 0.45);
		node05Group.add(cell);
	}

	const dialRingGeo = new THREE.RingGeometry(1.05, 1.2, 32);
	const dialRingMat = new THREE.MeshBasicMaterial({ color: 0xf59e0b, side: THREE.DoubleSide, transparent: true, opacity: 0.5 });
	const dialRing = new THREE.Mesh(dialRingGeo, dialRingMat);
	dialRing.rotation.x = Math.PI / 2;
	dialRing.position.y = 0.95;
	node05Group.add(dialRing);
	const pos05 = new THREE.Vector3(0.0, -0.8, 7.8);
	const waypoints05 = [
		new THREE.Vector3(0, -0.45, 0),
		new THREE.Vector3(0.0, -0.8, 3.8),
		pos05.clone(),
	];
	registerStation(node05Group, capBase, '/calculator', pos05, waypoints05);

	// Build Clean Non-Crossing Conduit Network
	const busbarLinesGroup = new THREE.Group();
	const pulseParticles: {
		mesh: THREE.Mesh;
		curve: THREE.CatmullRomCurve3;
		progress: number;
		speed: number;
	}[] = [];

	stations.forEach((st) => {
		const curve = new THREE.CatmullRomCurve3(st.waypoints, false, 'catmullrom', 0.05);
		const points = curve.getPoints(60);
		const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
		const lineMat = new THREE.LineBasicMaterial({
			color: 0x38bdf8,
			transparent: true,
			opacity: 0.32,
		});
		const line = new THREE.Line(lineGeo, lineMat);
		busbarLinesGroup.add(line);

		// Glowing junction boxes at conduit bends
		st.waypoints.slice(1, -1).forEach((wp) => {
			const juncGeo = new THREE.BoxGeometry(0.14, 0.14, 0.14);
			const juncMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, wireframe: true });
			const junc = new THREE.Mesh(juncGeo, juncMat);
			junc.position.copy(wp);
			busbarLinesGroup.add(junc);
		});

		for (let p = 0; p < 2; p++) {
			const pulseGeo = new THREE.SphereGeometry(0.07, 12, 12);
			const pulseMat = new THREE.MeshBasicMaterial({ color: 0x34d399 });
			const pulseMesh = new THREE.Mesh(pulseGeo, pulseMat);
			scene.add(pulseMesh);

			pulseParticles.push({
				mesh: pulseMesh,
				curve: curve,
				progress: Math.random(),
				speed: 0.18 + Math.random() * 0.15,
			});
		}
	});
	scene.add(busbarLinesGroup);

	// Mouse & Raycasting Handlers
	const raycaster = new THREE.Raycaster();
	const mouse = new THREE.Vector2(-999, -999);
	let hoveredIdx = -1;
	let isDragging = false;
	let pointerDownTime = 0;
	let pointerDownPos = { x: 0, y: 0 };

	window.addEventListener('pointerdown', (e) => {
		pointerDownTime = performance.now();
		pointerDownPos = { x: e.clientX, y: e.clientY };
		isDragging = false;
	});

	window.addEventListener('pointermove', (e) => {
		mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
		mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

		if (Math.abs(e.clientX - pointerDownPos.x) > 6 || Math.abs(e.clientY - pointerDownPos.y) > 6) {
			isDragging = true;
		}
	});

	const hitMeshes = stations.map((s) => s.mesh);

	window.addEventListener('pointerup', () => {
		if (!isDragging && performance.now() - pointerDownTime < 300) {
			raycaster.setFromCamera(mouse, camera);
			const intersects = raycaster.intersectObjects(hitMeshes);
			if (intersects.length > 0) {
				const targetUrl = intersects[0].object.userData.url;
				if (targetUrl) window.location.href = targetUrl;
			}
		}
	});

	callouts.forEach((c, idx) => {
		c.el?.addEventListener('mouseenter', () => {
			hoveredIdx = idx;
			c.el?.classList.add('hovered');
		});
		c.el?.addEventListener('mouseleave', () => {
			hoveredIdx = -1;
			c.el?.classList.remove('hovered');
		});
	});

	let lastTime = performance.now();

	function animate() {
		requestAnimationFrame(animate);

		if (window.innerWidth <= 640) {
			return;
		}

		const currentTime = performance.now();
		const delta = Math.min((currentTime - lastTime) / 1000, 0.1);
		lastTime = currentTime;

		controls.update();

		coreGroup.rotation.y += 0.2 * delta;
		shield.rotation.x += 0.12 * delta;

		node01Group.rotation.y += 0.15 * delta;
		chillerMesh.rotation.z += 0.6 * delta;
		volute.rotation.z -= 0.3 * delta;
		node03Group.rotation.y += 0.25 * delta;
		crystal.rotation.x -= 0.4 * delta;
		node04Group.rotation.y += 0.35 * delta;
		emitterRing.rotation.z += 0.5 * delta;
		node05Group.rotation.y -= 0.3 * delta;
		dialRing.rotation.z += 0.4 * delta;

		pulseParticles.forEach((p) => {
			p.progress += p.speed * delta;
			if (p.progress > 1) p.progress = 0;
			const pointOnCurve = p.curve.getPointAt(p.progress);
			if (pointOnCurve) p.mesh.position.copy(pointOnCurve);
		});

		// Dynamic Distance Depth Sorting
		stations.forEach((st, i) => {
			const vector = st.group.position.clone();
			vector.y += 1.35;

			const distToCamera = camera.position.distanceTo(vector);
			vector.project(camera);

			const screenX = (vector.x * 0.5 + 0.5) * window.innerWidth;
			const screenY = (-(vector.y * 0.5) + 0.5) * window.innerHeight;

			const callout = callouts[i]?.el;
			if (callout) {
				if (vector.z < 1) {
					callout.style.display = 'inline-flex';
					callout.style.left = `${screenX}px`;
					callout.style.top = `${screenY}px`;

					const dynamicZIndex = Math.max(1, Math.round(1000 - distToCamera * 20));
					callout.style.zIndex = dynamicZIndex.toString();

					const isHovered = hoveredIdx === i || callout.matches(':hover');
					if (!isHovered) {
						const normalizedDepth = THREE.MathUtils.clamp((distToCamera - 12) / 22, 0, 1);
						const depthScale = THREE.MathUtils.lerp(1.0, 0.78, normalizedDepth);
						const depthOpacity = THREE.MathUtils.lerp(1.0, 0.55, normalizedDepth);

						callout.style.opacity = depthOpacity.toString();
						callout.style.transform = `translate(-50%, -100%) scale(${depthScale})`;
					} else {
						callout.style.opacity = '1';
						callout.style.zIndex = '2000';
					}
				} else {
					callout.style.display = 'none';
				}
			}
		});

		if (!isDragging) {
			raycaster.setFromCamera(mouse, camera);
			const intersects = raycaster.intersectObjects(hitMeshes);
			if (intersects.length > 0) {
				const hit = intersects[0].object as THREE.Mesh;
				const idx = hitMeshes.indexOf(hit);
				if (hoveredIdx !== idx) {
					hoveredIdx = idx;
					callouts.forEach((c, cIdx) => {
						if (cIdx === idx) c.el?.classList.add('hovered');
						else c.el?.classList.remove('hovered');
					});
				}
			} else if (hoveredIdx !== -1 && !callouts.some((c) => c.el?.matches(':hover'))) {
				hoveredIdx = -1;
				callouts.forEach((c) => c.el?.classList.remove('hovered'));
			}
		}

		renderer.render(scene, camera);
	}

	animate();

	window.addEventListener('resize', () => {
		updateCameraFraming();
	});
}