"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeroFallback } from "./HeroFallback";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Helper: Custom Float wrapper that uses useFrame without external dependencies
function CustomFloat({
  children,
  speed = 1.5,
  rotationIntensity = 0.3,
  floatIntensity = 0.4,
  offset = 0,
}: {
  children: React.ReactNode;
  speed?: number;
  rotationIntensity?: number;
  floatIntensity?: number;
  offset?: number;
}) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime() * speed + offset;
    groupRef.current.position.y = Math.sin(t) * (floatIntensity * 0.25);
    groupRef.current.rotation.x = Math.cos(t * 0.8) * (rotationIntensity * 0.08);
    groupRef.current.rotation.z = Math.sin(t * 0.6) * (rotationIntensity * 0.06);
  });

  return <group ref={groupRef}>{children}</group>;
}

// 1. Sleek Laptop Device with Dashboard UI Screen
function LaptopModel({
  position = [0, 0, 0] as [number, number, number],
  rotation = [0, 0, 0] as [number, number, number],
  scale = 1,
}) {
  return (
    <group position={position} rotation={rotation} scale={scale}>
      {/* Base / Keyboard Chassis */}
      <mesh position={[0, -0.06, 0]}>
        <boxGeometry args={[3.2, 0.12, 2.2]} />
        <meshStandardMaterial color="#221C16" roughness={0.35} metalness={0.8} />
      </mesh>

      {/* Trackpad */}
      <mesh position={[0, 0.01, 0.65]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1.0, 0.65]} />
        <meshStandardMaterial color="#1A1510" roughness={0.5} />
      </mesh>

      {/* Keyboard Bed */}
      <mesh position={[0, 0.01, -0.25]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[2.8, 1.0]} />
        <meshStandardMaterial color="#16120E" roughness={0.8} />
      </mesh>

      {/* Screen Lid (Tilted back at ~115 degrees) */}
      <group position={[0, 0, -1.05]} rotation={[0.42, 0, 0]}>
        {/* Screen Chassis Back */}
        <mesh position={[0, 1.05, 0]}>
          <boxGeometry args={[3.2, 2.1, 0.08]} />
          <meshStandardMaterial color="#221C16" roughness={0.35} metalness={0.8} />
        </mesh>

        {/* Screen Bezel & Display Panel */}
        <mesh position={[0, 1.05, 0.045]}>
          <planeGeometry args={[3.0, 1.9]} />
          <meshStandardMaterial color="#14100C" roughness={0.2} metalness={0.3} />
        </mesh>

        {/* Screen Content Mock (Dashboard UI Layout) */}
        <group position={[0, 1.05, 0.05]}>
          {/* Top Header Bar */}
          <mesh position={[0, 0.78, 0]}>
            <planeGeometry args={[2.8, 0.18]} />
            <meshStandardMaterial color="#2A221A" roughness={0.4} />
          </mesh>
          <mesh position={[-1.2, 0.78, 0.001]}>
            <circleGeometry args={[0.04, 16]} />
            <meshBasicMaterial color="#C1673B" />
          </mesh>
          <mesh position={[-1.08, 0.78, 0.001]}>
            <circleGeometry args={[0.04, 16]} />
            <meshBasicMaterial color="#6B7A4E" />
          </mesh>
          <mesh position={[-0.96, 0.78, 0.001]}>
            <circleGeometry args={[0.04, 16]} />
            <meshBasicMaterial color="#8A6F52" />
          </mesh>

          {/* Left Sidebar */}
          <mesh position={[-0.95, -0.05, 0]}>
            <planeGeometry args={[0.7, 1.3]} />
            <meshStandardMaterial color="#1F1914" roughness={0.5} />
          </mesh>

          {/* Main Content Area: Chart / Code Cards */}
          <mesh position={[0.4, 0.25, 0]}>
            <planeGeometry args={[1.8, 0.6]} />
            <meshStandardMaterial color="#261E17" roughness={0.4} />
          </mesh>
          <mesh position={[0.4, -0.35, 0]}>
            <planeGeometry args={[1.8, 0.5]} />
            <meshStandardMaterial color="#1C1611" roughness={0.5} />
          </mesh>

          {/* Accent Graph Lines */}
          <mesh position={[-0.2, 0.25, 0.002]}>
            <planeGeometry args={[0.4, 0.04]} />
            <meshBasicMaterial color="#C1673B" />
          </mesh>
          <mesh position={[0.3, 0.32, 0.002]}>
            <planeGeometry args={[0.4, 0.04]} />
            <meshBasicMaterial color="#6B7A4E" />
          </mesh>
          <mesh position={[0.8, 0.22, 0.002]}>
            <planeGeometry args={[0.4, 0.04]} />
            <meshBasicMaterial color="#C1673B" />
          </mesh>
        </group>
      </group>
    </group>
  );
}

// 2. Sleek Floating Mobile Device
function PhoneModel({
  position = [0, 0, 0] as [number, number, number],
  rotation = [0, 0, 0] as [number, number, number],
  scale = 1,
}) {
  return (
    <group position={position} rotation={rotation} scale={scale}>
      {/* Phone Chassis */}
      <mesh>
        <boxGeometry args={[1.1, 2.2, 0.09]} />
        <meshStandardMaterial color="#1F1B16" roughness={0.3} metalness={0.85} />
      </mesh>

      {/* Screen Panel */}
      <mesh position={[0, 0, 0.05]}>
        <planeGeometry args={[0.98, 2.05]} />
        <meshStandardMaterial color="#14100C" roughness={0.2} metalness={0.2} />
      </mesh>

      {/* App Interface UI Cards */}
      <group position={[0, 0, 0.055]}>
        {/* Dynamic Island / Notch */}
        <mesh position={[0, 0.9, 0]}>
          <planeGeometry args={[0.35, 0.08]} />
          <meshBasicMaterial color="#000000" />
        </mesh>

        {/* Top Feed Card */}
        <mesh position={[0, 0.5, 0]}>
          <planeGeometry args={[0.84, 0.55]} />
          <meshStandardMaterial color="#261F18" roughness={0.4} />
        </mesh>
        <mesh position={[-0.2, 0.62, 0.001]}>
          <planeGeometry args={[0.32, 0.05]} />
          <meshBasicMaterial color="#C1673B" />
        </mesh>

        {/* Middle Metric Card */}
        <mesh position={[0, -0.15, 0]}>
          <planeGeometry args={[0.84, 0.6]} />
          <meshStandardMaterial color="#1E1813" roughness={0.4} />
        </mesh>
        <mesh position={[-0.1, -0.05, 0.001]}>
          <planeGeometry args={[0.45, 0.05]} />
          <meshBasicMaterial color="#6B7A4E" />
        </mesh>

        {/* Bottom Navigation Pill */}
        <mesh position={[0, -0.92, 0]}>
          <planeGeometry args={[0.4, 0.04]} />
          <meshBasicMaterial color="#EFE6D8" />
        </mesh>
      </group>
    </group>
  );
}

// 3. Floating Glassmorphic Analytics Panel (Pure Three.js canvas texture)
function AnalyticsGlassCard({
  position = [0, 0, 0] as [number, number, number],
  rotation = [0, 0, 0] as [number, number, number],
  scale = 1,
}) {
  const cardTexture = useMemo(() => {
    if (typeof document === "undefined") return null;
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 320;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    // Background fill
    ctx.fillStyle = "#EFE6D8";
    ctx.fillRect(0, 0, 512, 320);

    // Label
    ctx.fillStyle = "#6E655A";
    ctx.font = "bold 20px monospace";
    ctx.fillText("PERFORMANCE METRICS", 32, 54);

    // Main Stat
    ctx.fillStyle = "#1F1B16";
    ctx.font = "bold 64px monospace";
    ctx.fillText("99.8%", 32, 136);

    // Secondary subtext
    ctx.fillStyle = "#6B7A4E";
    ctx.font = "bold 24px monospace";
    ctx.fillText("+140% OPTIMIZED", 32, 180);

    // Graph bars
    ctx.fillStyle = "#6B7A4E";
    ctx.fillRect(32, 230, 200, 24);

    ctx.fillStyle = "#C1673B";
    ctx.fillRect(244, 230, 236, 24);

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }, []);

  return (
    <group position={position} rotation={rotation} scale={scale}>
      <mesh>
        <boxGeometry args={[2.2, 1.4, 0.05]} />
        <meshPhysicalMaterial
          color="#EFE6D8"
          transmission={0.7}
          opacity={0.95}
          transparent
          roughness={0.2}
          ior={1.4}
        />
      </mesh>

      {/* Surface graphic */}
      {cardTexture && (
        <mesh position={[0, 0, 0.027]}>
          <planeGeometry args={[2.14, 1.34]} />
          <meshBasicMaterial map={cardTexture} transparent opacity={0.95} />
        </mesh>
      )}
    </group>
  );
}

// 4. Floating Code Snippet Terminal Card
function CodeTerminalCard({
  position = [0, 0, 0] as [number, number, number],
  rotation = [0, 0, 0] as [number, number, number],
  scale = 1,
}) {
  return (
    <group position={position} rotation={rotation} scale={scale}>
      <mesh>
        <boxGeometry args={[2.0, 1.2, 0.05]} />
        <meshStandardMaterial color="#1B1713" roughness={0.4} metalness={0.6} />
      </mesh>

      {/* Code Header Dots */}
      <group position={[-0.7, 0.42, 0.03]}>
        <mesh position={[-0.14, 0, 0]}>
          <circleGeometry args={[0.035, 16]} />
          <meshBasicMaterial color="#C1673B" />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <circleGeometry args={[0.035, 16]} />
          <meshBasicMaterial color="#8A6F52" />
        </mesh>
        <mesh position={[0.14, 0, 0]}>
          <circleGeometry args={[0.035, 16]} />
          <meshBasicMaterial color="#6B7A4E" />
        </mesh>
      </group>

      {/* Code Lines Mock */}
      <group position={[-0.78, 0.15, 0.03]}>
        <mesh position={[0.35, 0, 0]}>
          <planeGeometry args={[0.7, 0.04]} />
          <meshBasicMaterial color="#C1673B" />
        </mesh>
        <mesh position={[0.55, -0.15, 0]}>
          <planeGeometry args={[0.9, 0.04]} />
          <meshBasicMaterial color="#EFE6D8" />
        </mesh>
        <mesh position={[0.4, -0.3, 0]}>
          <planeGeometry args={[0.6, 0.04]} />
          <meshBasicMaterial color="#6B7A4E" />
        </mesh>
      </group>
    </group>
  );
}

// 5. Floating Color Swatches Card
function SwatchesCard({
  position = [0, 0, 0] as [number, number, number],
  rotation = [0, 0, 0] as [number, number, number],
  scale = 1,
}) {
  return (
    <group position={position} rotation={rotation} scale={scale}>
      <mesh>
        <boxGeometry args={[1.5, 0.9, 0.04]} />
        <meshStandardMaterial color="#EFE6D8" roughness={0.3} />
      </mesh>

      {/* Swatch color chips */}
      <group position={[0, 0, 0.025]}>
        <mesh position={[-0.45, 0, 0]}>
          <circleGeometry args={[0.18, 24]} />
          <meshBasicMaterial color="#C1673B" />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <circleGeometry args={[0.18, 24]} />
          <meshBasicMaterial color="#6B7A4E" />
        </mesh>
        <mesh position={[0.45, 0, 0]}>
          <circleGeometry args={[0.18, 24]} />
          <meshBasicMaterial color="#1F1B16" />
        </mesh>
      </group>
    </group>
  );
}

// 6. Floating Kinetic Wireframe Mesh Accent
function WireframeAccent({
  position = [0, 0, 0] as [number, number, number],
  rotation = [0, 0, 0] as [number, number, number],
  scale = 1,
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.3;
      meshRef.current.rotation.y += delta * 0.4;
    }
  });

  return (
    <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
      <octahedronGeometry args={[0.65, 0]} />
      <meshStandardMaterial color="#C1673B" wireframe />
    </mesh>
  );
}

// Main Scene Container with GSAP ScrollTrigger Integration
function SceneExperience({ isMobile }: { isMobile: boolean }) {
  const { camera } = useThree();
  const sceneGroupRef = useRef<THREE.Group>(null);
  const laptopGroupRef = useRef<THREE.Group>(null);
  const phoneGroupRef = useRef<THREE.Group>(null);
  const analyticsGroupRef = useRef<THREE.Group>(null);
  const codeGroupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Initial Assembly Animation (Branded Preloader Entrance using safe proxies)
    const items = [
      laptopGroupRef.current,
      phoneGroupRef.current,
      analyticsGroupRef.current,
      codeGroupRef.current,
    ].filter(Boolean) as THREE.Group[];

    const tweens: gsap.core.Tween[] = [];

    items.forEach((item, index) => {
      const initialZ = 3 + index * 1.5;
      const initialScale = 0.8;

      item.position.z = initialZ;
      item.scale.setScalar(initialScale);

      const proxy = { z: initialZ, scale: initialScale };
      const tween = gsap.to(proxy, {
        z: 0,
        scale: 1,
        duration: prefersReducedMotion ? 0.01 : 1.2,
        delay: index * 0.1,
        ease: "power3.out",
        onUpdate: () => {
          item.position.z = proxy.z;
          item.scale.setScalar(proxy.scale);
        },
      });
      tweens.push(tween);
    });

    // GSAP ScrollTrigger Camera & Object Choreography (Suppressed if reduced motion is preferred)
    let trigger: ScrollTrigger | null = null;
    if (!prefersReducedMotion) {
      trigger = ScrollTrigger.create({
        trigger: "#hero-section",
        start: "top top",
        end: "bottom top",
        scrub: 1.2,
        onUpdate: (self) => {
          const progress = self.progress;

          // Camera trajectory
          camera.position.x = THREE.MathUtils.lerp(0, isMobile ? 0.6 : 1.8, progress);
          camera.position.y = THREE.MathUtils.lerp(0, -0.8, progress);
          camera.position.z = THREE.MathUtils.lerp(
            isMobile ? 8.2 : 6.8,
            isMobile ? 6.5 : 5.4,
            progress
          );
          camera.lookAt(0, 0, 0);

          // Scene group rotation
          if (sceneGroupRef.current) {
            sceneGroupRef.current.rotation.y = THREE.MathUtils.lerp(0, -0.35, progress);
            sceneGroupRef.current.rotation.x = THREE.MathUtils.lerp(0, 0.18, progress);
          }

          // Individual floating elements parallax drift
          if (phoneGroupRef.current) {
            phoneGroupRef.current.position.y = THREE.MathUtils.lerp(
              isMobile ? -1.2 : -0.3,
              isMobile ? -1.6 : -0.7,
              progress
            );
          }
          if (analyticsGroupRef.current) {
            analyticsGroupRef.current.position.y = THREE.MathUtils.lerp(
              isMobile ? 1.6 : 1.4,
              isMobile ? 2.0 : 1.9,
              progress
            );
          }
        },
      });
    }

    return () => {
      tweens.forEach((t) => t.kill());
      trigger?.kill();
    };
  }, [camera, isMobile]);

  const baseScale = isMobile ? 0.72 : 0.95;

  return (
    <>
      {/* Warm Ambient & Directional Lights */}
      <ambientLight intensity={1.3} color="#FFF5EA" />
      <directionalLight position={[6, 8, 5]} intensity={2.4} color="#FFEEDD" />
      <directionalLight position={[-6, -4, 3]} intensity={0.9} color="#F6F0E4" />
      <pointLight position={[3, 3, 2]} intensity={1.2} color="#C1673B" distance={8} />
      <pointLight position={[-3, -2, 2]} intensity={0.9} color="#6B7A4E" distance={8} />

      {/* Main Assembly Group */}
      <group ref={sceneGroupRef} scale={baseScale}>
        {/* Central Laptop Device */}
        <group ref={laptopGroupRef}>
          <CustomFloat speed={1.5} rotationIntensity={0.25} floatIntensity={0.35} offset={0}>
            <LaptopModel
              position={[isMobile ? 0 : 0.2, isMobile ? 0.1 : 0.0, 0]}
              rotation={[-0.12, -0.28, 0.04]}
              scale={isMobile ? 1.05 : 1.25}
            />
          </CustomFloat>
        </group>

        {/* Floating Mobile Phone Device */}
        <group ref={phoneGroupRef}>
          <CustomFloat speed={2.0} rotationIntensity={0.4} floatIntensity={0.6} offset={1.2}>
            <PhoneModel
              position={[isMobile ? -1.3 : -2.4, isMobile ? -1.1 : -0.3, isMobile ? 1.2 : 1.4]}
              rotation={[0.15, 0.35, -0.1]}
              scale={isMobile ? 1.0 : 1.15}
            />
          </CustomFloat>
        </group>

        {/* Floating Analytics Glass Card */}
        <group ref={analyticsGroupRef}>
          <CustomFloat speed={1.8} rotationIntensity={0.3} floatIntensity={0.5} offset={2.4}>
            <AnalyticsGlassCard
              position={[isMobile ? 1.2 : 2.3, isMobile ? 1.4 : 1.3, isMobile ? 0.9 : 1.1]}
              rotation={[-0.1, -0.25, 0.08]}
              scale={isMobile ? 0.9 : 1.05}
            />
          </CustomFloat>
        </group>

        {/* Floating Code Terminal Card */}
        <group ref={codeGroupRef}>
          <CustomFloat speed={1.4} rotationIntensity={0.2} floatIntensity={0.4} offset={3.6}>
            <CodeTerminalCard
              position={[isMobile ? -1.1 : -2.2, isMobile ? 1.3 : 1.5, isMobile ? 0.4 : 0.6]}
              rotation={[0.12, 0.3, -0.05]}
              scale={isMobile ? 0.85 : 0.95}
            />
          </CustomFloat>
        </group>

        {/* Floating Swatches Card */}
        <CustomFloat speed={2.2} rotationIntensity={0.5} floatIntensity={0.7} offset={4.8}>
          <SwatchesCard
            position={[isMobile ? 1.3 : 2.4, isMobile ? -1.2 : -1.2, isMobile ? 1.1 : 1.3]}
            rotation={[0.15, -0.2, 0.1]}
            scale={isMobile ? 0.9 : 1.0}
          />
        </CustomFloat>

        {/* Floating Kinetic Accent Octahedron */}
        <CustomFloat speed={2.5} rotationIntensity={0.8} floatIntensity={0.8} offset={5.5}>
          <WireframeAccent
            position={[isMobile ? 0.2 : 0.5, isMobile ? 2.0 : 2.1, 0.8]}
            scale={0.85}
          />
        </CustomFloat>
      </group>
    </>
  );
}

export default function Hero3DScene() {
  const [hasWebGL, setHasWebGL] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Check WebGL availability & viewport
  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl2") ||
        canvas.getContext("webgl") ||
        canvas.getContext("experimental-webgl");
      if (!gl) {
        setHasWebGL(false);
      }
    } catch {
      setHasWebGL(false);
    }

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Mark loaded after short assembly interval
    const timer = setTimeout(() => setIsLoaded(true), 600);

    return () => {
      window.removeEventListener("resize", checkMobile);
      clearTimeout(timer);
    };
  }, []);

  if (!hasWebGL) {
    return <HeroFallback />;
  }

  return (
    <div className="w-full h-full min-h-[460px] sm:min-h-[560px] lg:min-h-[640px] relative select-none">
      {/* Canvas */}
      <Canvas
        camera={{
          position: [0, 0, isMobile ? 8.2 : 6.8],
          fov: isMobile ? 52 : 45,
          near: 0.1,
          far: 100,
        }}
        dpr={[1, Math.min(typeof window !== "undefined" ? window.devicePixelRatio : 1, 1.5)]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        className="w-full h-full"
      >
        <SceneExperience isMobile={isMobile} />
      </Canvas>

      {/* Subtle Space Mono Status Indicator (Initial Mount Assembly) */}
      {!isLoaded && (
        <div className="absolute bottom-4 right-4 bg-surface/90 border border-border/80 px-3 py-1.5 rounded-full font-mono text-[10px] text-muted flex items-center gap-2 pointer-events-none transition-opacity duration-500">
          <span className="w-1.5 h-1.5 rounded-full bg-terracotta animate-ping" />
          <span>[ RAULTZ // ASSEMBLING WORKSPACE ]</span>
        </div>
      )}
    </div>
  );
}
