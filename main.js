import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { CSS2DRenderer, CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
import gsap from 'gsap';
import { getPanelContent } from './content.js'; // Import the content function

// --- 1. SETUP ---
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#scene-canvas'), antialias: true, alpha: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

const initialCameraPosition = new THREE.Vector3(0, 5, 40);
camera.position.copy(initialCameraPosition);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enableZoom = false;
controls.enablePan = false;
controls.minDistance = 25;
controls.maxDistance = 60;

const initialControlsTarget = new THREE.Vector3(0, 0, 0);
controls.target.copy(initialControlsTarget);

let currentView = 'hub';
let isAnimating = false;

const labelRenderer = new CSS2DRenderer();
labelRenderer.setSize(window.innerWidth, window.innerHeight);
labelRenderer.domElement.style.position = 'absolute';
labelRenderer.domElement.style.top = '0px';
labelRenderer.domElement.style.pointerEvents = 'none';
document.body.appendChild(labelRenderer.domElement);

// --- 2. 3D OBJECTS & SCENE CREATION ---
scene.add(new THREE.AmbientLight(0xffffff, 0.2));
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
directionalLight.position.set(5, 10, 7.5);
scene.add(directionalLight);

const nexusCore = new THREE.Mesh(
    new THREE.IcosahedronGeometry(4, 8),
    new THREE.MeshStandardMaterial({ color: 0x00e6d0, emissive: 0x00e6d0, emissiveIntensity: 0.3, metalness: 0.5, roughness: 0.4, wireframe: true })
);
scene.add(nexusCore);

const particleCount = 7000;
const positions = new Float32Array(particleCount * 3);
for (let i = 0; i < particleCount; i++) {
    positions[i * 3 + 0] = (Math.random() - 0.5) * 300;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 300;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 300;
}
const particleGeometry = new THREE.BufferGeometry();
particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
const particleField = new THREE.Points(particleGeometry, new THREE.PointsMaterial({ color: 0xa0b4c8, size: 0.1, transparent: true, opacity: 0.5 }));
scene.add(particleField);

const nodeGroup = new THREE.Group();
scene.add(nodeGroup);

const nodeData = [
    { name: 'ABOUT', position: new THREE.Vector3(20, 0, 0) },
    { name: 'SKILLS', position: new THREE.Vector3(-15, 10, 8) },
    { name: 'PROJECTS', position: new THREE.Vector3(0, -12, -18) },
    { name: 'EXPERIENCE', position: new THREE.Vector3(15, -10, 8) },
    { name: 'EDUCATION', position: new THREE.Vector3(0, 15, -5) },
    { name: 'CERTIFICATIONS', position: new THREE.Vector3(-10, -5, 15) },
    { name: 'CONTACT', position: new THREE.Vector3(-18, 5, -10) },
];

const nodeGeometry = new THREE.SphereGeometry(1.5, 32, 16);
const nodeMaterial = new THREE.MeshStandardMaterial({ color: 0x0099ff, emissive: 0x0099ff, emissiveIntensity: 0.4, metalness: 0.2, roughness: 0.5 });

const nodes = nodeData.map(data => {
    const node = new THREE.Mesh(nodeGeometry, nodeMaterial.clone());
    node.position.copy(data.position);
    node.userData = { name: data.name, isNode: true };
    
    const labelDiv = document.createElement('div');
    labelDiv.className = 'node-label';
    labelDiv.textContent = data.name;
    const label = new CSS2DObject(labelDiv);
    label.position.set(0, 2.5, 0);
    node.add(label);
    node.label = label;
    nodeGroup.add(node);
    
    return node;
});

function createBrandingText() {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const fontSize = 80, text = "SAIRAM'S SPACE";
    context.font = `bold ${fontSize}px 'Fira Code', monospace`;
    canvas.width = context.measureText(text).width + 40;
    canvas.height = fontSize * 1.5;
    Object.assign(context, { font: `bold ${fontSize}px 'Fira Code', monospace`, fillStyle: 'rgba(0, 230, 208, 0.4)', textAlign: 'center', textBaseline: 'middle' });
    context.fillText(text, canvas.width / 2, canvas.height / 2);
    const material = new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(canvas), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending });
    const geometry = new THREE.PlaneGeometry(8 * (canvas.width / canvas.height), 8);
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(0, 0, -35);
    return mesh;
}

const brandingText = createBrandingText();
particleField.add(brandingText);

// --- 3. INTERACTIVITY & ANIMATION LOOP ---
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2(-100, -100);
let hoveredObject = null;

function onPointerMove(event) {
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = - (event.clientY / window.innerHeight) * 2 + 1;
}

function onPointerDown() {
    if (isAnimating || !hoveredObject || currentView !== 'hub') return;
    if (hoveredObject.userData.isNode) {
        navigateToSection(hoveredObject);
    } else if (hoveredObject === nexusCore) {
        gsap.to(nexusCore.scale, { x: 1.2, y: 1.2, z: 1.2, duration: 0.3, ease: 'power2.inOut', yoyo: true, repeat: 1 });
        setTimeout(() => showUIPanel('CORE_PROFILE'), 300);
    }
}

window.addEventListener('pointermove', onPointerMove);
window.addEventListener('pointerdown', onPointerDown);

function startIntroAnimation() {
    const tl = gsap.timeline();
    tl.to("#loader-overlay .message", { opacity: 1, stagger: 0.8, duration: 1.5, ease: 'power2.inOut' })
      .to("#loader-overlay .message", { delay: 1, opacity: 0, duration: 1, ease: 'power2.inOut' })
      .to("#loader-overlay", { opacity: 0, duration: 1.5, ease: 'power1.inOut', onComplete: () => {
          document.getElementById('loader-overlay').classList.add('hidden');
          populateNavBar();
      }}, "-=0.5");
}

const clock = new THREE.Clock();
function animate() {
    requestAnimationFrame(animate);
    const elapsedTime = clock.getElapsedTime();
    
    nexusCore.rotation.y = elapsedTime * 0.1;
    nodeGroup.rotation.y = -elapsedTime * 0.05;
    particleField.rotation.y = -elapsedTime * 0.02;

    nodes.forEach((node, i) => {
        node.position.y = nodeData[i].position.y + Math.sin(elapsedTime * 0.5 + i) * 0.5;
    });

    if(currentView === 'hub') {
        raycaster.setFromCamera(pointer, camera);
        const intersects = raycaster.intersectObjects([...nodes, nexusCore]);
        const newHoveredObject = intersects.length > 0 ? intersects[0].object : null;

        if (hoveredObject !== newHoveredObject) {
            if (hoveredObject) {
                gsap.to(hoveredObject.scale, { x: 1, y: 1, z: 1, duration: 0.3 });
                if(hoveredObject.material.emissive) gsap.to(hoveredObject.material, { emissiveIntensity: hoveredObject === nexusCore ? 0.3 : 0.4, duration: 0.5 });
                if (hoveredObject.label) gsap.to(hoveredObject.label.element, { opacity: 0, duration: 0.3 });
            }
            hoveredObject = newHoveredObject;
            if (hoveredObject) {
                gsap.to(hoveredObject.scale, { x: 1.5, y: 1.5, z: 1.5, duration: 0.3 });
                if(hoveredObject.material.emissive) gsap.to(hoveredObject.material, { emissiveIntensity: 1.5, duration: 0.5 });
                if (hoveredObject.label) gsap.to(hoveredObject.label.element, { opacity: 1, duration: 0.3 });
                document.body.style.cursor = 'pointer';
            } else {
                document.body.style.cursor = 'default';
            }
        }
    } else {
        if(hoveredObject) {
            gsap.to(hoveredObject.scale, { x: 1, y: 1, z: 1, duration: 0.3 });
            if(hoveredObject.material.emissive) gsap.to(hoveredObject.material, { emissiveIntensity: hoveredObject === nexusCore ? 0.3 : 0.4, duration: 0.5 });
            if (hoveredObject.label) gsap.to(hoveredObject.label.element, { opacity: 0, duration: 0.3 });
            hoveredObject = null;
            document.body.style.cursor = 'default';
        }
    }

    controls.update();
    renderer.render(scene, camera);
    labelRenderer.render(scene, camera);
}

// --- 4. NAVIGATION & UI MANAGEMENT ---
function navigateToSection(node) {
    isAnimating = true;
    currentView = 'section';
    controls.enabled = false;
    
    const worldPosition = new THREE.Vector3();
    node.getWorldPosition(worldPosition);

    const direction = worldPosition.clone().normalize();
    const finalPosition = worldPosition.clone().add(direction.multiplyScalar(20));
    finalPosition.y += 5;
    
    document.querySelectorAll('.nav-button').forEach(b => b.classList.remove('active'));
    document.querySelector(`.nav-button[data-target="${node.userData.name}"]`)?.classList.add('active');

    gsap.timeline({ onComplete: () => { isAnimating = false; showUIPanel(node.userData.name); } })
        .to(camera.position, { ...finalPosition, duration: 1.6, ease: 'power3.inOut' }, 0)
        .to(controls.target, { ...worldPosition, duration: 1.6, ease: 'power3.inOut' }, 0);
}

function returnToHub() {
    if (isAnimating) return;
    isAnimating = true;
    hideAllPanels();
    document.querySelectorAll('.nav-button').forEach(b => b.classList.remove('active'));

    gsap.timeline({ onComplete: () => { isAnimating = false; controls.enabled = true; currentView = 'hub'; } })
        .to(camera.position, { ...initialCameraPosition, duration: 1.6, ease: 'power3.inOut' }, 0)
        .to(controls.target, { ...initialControlsTarget, duration: 1.6, ease: 'power3.inOut' }, 0);
}

const uiContainer = document.getElementById('ui-container');
function showUIPanel(sectionName) {
    hideAllPanels();
    const panel = document.createElement('div');
    panel.className = 'ui-panel';
    panel.innerHTML = `<button class="back-button">&times;</button>${getPanelContent(sectionName)}`;
    
    panel.querySelector('.back-button').onclick = sectionName === 'CORE_PROFILE' ? hideAllPanels : returnToHub;

    uiContainer.appendChild(panel);
    setTimeout(() => panel.classList.add('visible'), 50);
}

function hideAllPanels() {
    document.querySelectorAll('.ui-panel').forEach(panel => {
        panel.classList.remove('visible');
        setTimeout(() => panel.remove(), 500);
    });
}

function populateNavBar() {
    const navBarInner = document.querySelector('.nav-bar-inner');
    if(!navBarInner) return;
    navBarInner.innerHTML = '';
    nodeData.forEach(data => {
        const button = document.createElement('button');
        button.className = 'nav-button';
        button.textContent = data.name;
        button.dataset.target = data.name;
        button.onclick = () => {
            if(isAnimating || (currentView === 'section' && document.querySelector('.nav-button.active')?.dataset.target === data.name)) return;
            hideAllPanels();
            const targetNode = nodes.find(n => n.userData.name === data.name);
            if(targetNode) navigateToSection(targetNode);
        };
        navBarInner.appendChild(button);
    });
}

// --- 5. INITIALIZATION ---
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    labelRenderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener('resize', onWindowResize);

startIntroAnimation();
animate();