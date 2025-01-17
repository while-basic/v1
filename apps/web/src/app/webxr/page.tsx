"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";
import { useRouter } from "next/navigation";

export default function WebXRPage() {
  const router = useRouter();
  const sceneInitialized = useRef(false);

  useEffect(() => {
    if (sceneInitialized.current) return;

    const initScene = () => {
      const scene = document.createElement('a-scene');
      scene.innerHTML = `
        <!-- Ground -->
        <a-plane 
          position="0 0 0" 
          rotation="-90 0 0" 
          width="500" 
          height="50" 
          color="#6B8E23">
        </a-plane>

        <!-- Main Platform -->
        <a-entity position="0 0 -5">
          <!-- Project Section -->
          <a-box 
            position="-3 1 0"
            width="2" 
            height="1" 
            depth="0.5" 
            color="#4CC3D9" 
            class="clickable" 
            data-link="/projects/system-integration">
            <a-text 
              value="Projects" 
              align="center" 
              color="#FFFFFF" 
              position="0 0 0.26" 
              scale="1 1 1">
            </a-text>
          </a-box>

          <!-- Music Section -->
          <a-box 
            position="0 1 0"
            width="2" 
            height="1" 
            depth="0.5" 
            color="#EF2D5E" 
            class="clickable" 
            data-link="/projects">
            <a-text 
              value="Music" 
              align="center" 
              color="#FFFFFF" 
              position="0 0 0.26"
              scale="1 1 1">
            </a-text>
          </a-box>

          <!-- Gallery Section -->
          <a-box 
            position="3 1 0"
            width="2" 
            height="1" 
            depth="0.5" 
            color="#FFC65D" 
            class="clickable" 
            data-link="/projects/software-development">
            <a-text 
              value="Gallery" 
              align="center" 
              color="#FFFFFF" 
              position="0 0 0.26"
              scale="1 1 1">
            </a-text>
          </a-box>
        </a-entity>

        <!-- Ambient Light -->
        <a-light type="ambient" color="#BBB"></a-light>
        
        <!-- Directional Light -->
        <a-light type="directional" color="#FFF" intensity="0.6" position="-1 1 2"></a-light>

        <!-- Sky -->
        <a-sky color="#87CEEB"></a-sky>

        <!-- Camera -->
        <a-entity position="0 1.6 2">
          <a-camera>
            <a-cursor
              color="white"
              position="0 0 -1"
              geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03">
            </a-cursor>
          </a-camera>
        </a-entity>
      `;

      // Add click event listeners
      scene.addEventListener('loaded', () => {
        const clickables = scene.querySelectorAll('.clickable');
        clickables.forEach((element) => {
          element.addEventListener('click', (e) => {
            const link = (e.target as HTMLElement).getAttribute('data-link');
            if (link) {
              router.push(link);
            }
          });
        });
      });

      const container = document.getElementById('aframe-container');
      if (container) {
        container.innerHTML = '';
        container.appendChild(scene);
        sceneInitialized.current = true;
      }
    };

    // Initialize scene after A-Frame is loaded
    if (typeof window !== 'undefined' && (window as any).AFRAME) {
      initScene();
    } else {
      window.addEventListener('aframe-loaded', initScene);
    }

    return () => {
      window.removeEventListener('aframe-loaded', initScene);
    };
  }, [router]);

  return (
    <>
      <Script 
        src="https://aframe.io/releases/1.6.0/aframe.min.js"
        strategy="beforeInteractive"
        onLoad={() => {
          window.dispatchEvent(new Event('aframe-loaded'));
        }}
      />
      <div id="aframe-container" style={{ width: "100vw", height: "100vh" }} />
    </>
  );
} 