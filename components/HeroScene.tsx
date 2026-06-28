"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HeroScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // ---- Renderer / scene / camera ----
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050505, 0.045);

    const camera = new THREE.PerspectiveCamera(42, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.set(0, 1.55, 7.2);
    camera.lookAt(0, 0.4, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // ---- Grid floor (garage-vloer perspectief) ----
    const gridGroup = new THREE.Group();
    const gridMat = new THREE.LineBasicMaterial({ color: 0x3a3a3d, transparent: true, opacity: 0.45 });
    const gridSize = 40;
    const gridDivisions = 28;
    const step = gridSize / gridDivisions;
    const gridGeo = new THREE.BufferGeometry();
    const gridPoints: number[] = [];
    for (let i = 0; i <= gridDivisions; i++) {
      const p = -gridSize / 2 + i * step;
      gridPoints.push(p, 0, -gridSize / 2, p, 0, gridSize / 2);
      gridPoints.push(-gridSize / 2, 0, p, gridSize / 2, 0, p);
    }
    gridGeo.setAttribute("position", new THREE.Float32BufferAttribute(gridPoints, 3));
    const gridLines = new THREE.LineSegments(gridGeo, gridMat);
    gridLines.position.y = -1.4;
    gridGroup.add(gridLines);
    scene.add(gridGroup);

    // ---- Koplamp / headlight glow rings (KVL signature) ----
    const headlightGroup = new THREE.Group();

    function makeRing(radius: number, tube: number, color: number, opacity: number) {
      const geo = new THREE.TorusGeometry(radius, tube, 32, 100);
      const mat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity });
      return new THREE.Mesh(geo, mat);
    }

    const ringLeft = new THREE.Group();
    const r1 = makeRing(1.05, 0.012, 0xffffff, 0.9);
    const r2 = makeRing(1.05, 0.05, 0xe5070f, 0.25);
    ringLeft.add(r1, r2);
    ringLeft.position.set(-1.65, 0.4, 0);
    headlightGroup.add(ringLeft);

    const ringRight = new THREE.Group();
    const r3 = makeRing(1.05, 0.012, 0xffffff, 0.9);
    const r4 = makeRing(1.05, 0.05, 0xe5070f, 0.25);
    ringRight.add(r3, r4);
    ringRight.position.set(1.65, 0.4, 0);
    headlightGroup.add(ringRight);

    headlightGroup.rotation.x = 0.04;
    scene.add(headlightGroup);

    // Point lights for the headlight glow (cast onto fog/particles)
    const lightLeft = new THREE.PointLight(0xffffff, 4.5, 12, 2);
    lightLeft.position.set(-1.65, 0.4, 0.5);
    scene.add(lightLeft);

    const lightRight = new THREE.PointLight(0xffffff, 4.5, 12, 2);
    lightRight.position.set(1.65, 0.4, 0.5);
    scene.add(lightRight);

    const redRim = new THREE.PointLight(0xe5070f, 3, 14, 2);
    redRim.position.set(0, 2.2, -3);
    scene.add(redRim);

    const ambient = new THREE.AmbientLight(0x202022, 1.2);
    scene.add(ambient);

    // ---- Volumetric dust / mist particles ----
    const particleCount = 420;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const speeds = new Float32Array(particleCount);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 1] = Math.random() * 5 - 1;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 14;
      speeds[i] = 0.05 + Math.random() * 0.12;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.028,
      transparent: true,
      opacity: 0.35,
      depthWrite: false,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // ---- Render loop ----
    const clock = new THREE.Clock();
    let frameId: number;
    let targetRotation = 0;
    let currentRotation = 0;
    let scrollProgress = 0;

    function onPointerMove(e: PointerEvent) {
      const rect = mount!.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      targetRotation = x * 0.35;
    }
    window.addEventListener("pointermove", onPointerMove);

    function animate() {
      frameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        currentRotation += (targetRotation - currentRotation) * 0.04;
        headlightGroup.rotation.y = currentRotation;
        gridGroup.rotation.y = currentRotation * 0.5;

        ringLeft.scale.setScalar(1 + Math.sin(t * 1.4) * 0.012);
        ringRight.scale.setScalar(1 + Math.sin(t * 1.4 + 0.6) * 0.012);

        const posAttr = particleGeo.getAttribute("position") as THREE.BufferAttribute;
        for (let i = 0; i < particleCount; i++) {
          const y = posAttr.getY(i) + speeds[i] * 0.01;
          posAttr.setY(i, y > 4 ? -1 : y);
        }
        posAttr.needsUpdate = true;

        camera.position.x = Math.sin(t * 0.1) * 0.15;
      }

      // scroll-driven dolly handled by GSAP, but we also ease here for fog density
      scene.fog!.density = 0.045 + scrollProgress * 0.03;

      renderer.render(scene, camera);
    }
    animate();

    // ---- Scroll-driven camera dolly + light intensity (cinematic reveal) ----
    let st: ScrollTrigger | undefined;
    if (!prefersReducedMotion) {
      st = ScrollTrigger.create({
        trigger: mount,
        start: "top top",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          scrollProgress = self.progress;
          camera.position.z = 7.2 - self.progress * 2.4;
          camera.position.y = 1.55 - self.progress * 0.6;
          headlightGroup.position.z = -self.progress * 1.5;
          lightLeft.intensity = 4.5 + self.progress * 3;
          lightRight.intensity = 4.5 + self.progress * 3;
        },
      });
    }

    // ---- Resize handling ----
    function onResize() {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    }
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointerMove);
      st?.kill();
      renderer.dispose();
      gridGeo.dispose();
      particleGeo.dispose();
      gridMat.dispose();
      particleMat.dispose();
      if (renderer.domElement.parentElement === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />;
}
