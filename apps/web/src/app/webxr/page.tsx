"use client";

import { useEffect } from "react";
import Script from "next/script";
import { useRouter } from "next/navigation";

export default function WebXRPage() {
  const router = useRouter();

  const createAboutScene = () => {
    const scene = document.createElement('a-scene');
    scene.setAttribute('embedded', '');
    scene.setAttribute('vr-mode-ui', 'enabled: true');
    
    scene.innerHTML = `
      <a-assets>
        <img id="grid" src="https://cdn.aframe.io/a-painter/images/floor.jpg" crossorigin="anonymous">
      </a-assets>

      <!-- Environment -->
      <a-gradient-sky material="shader: gradient; topColor: #2B1B67; bottomColor: #1B1464"></a-gradient-sky>
      <a-plane position="0 0 0" rotation="-90 0 0" width="100" height="100" 
              material="src: #grid; repeat: 50 50; transparent: true; metalness:0.6; roughness: 0.4">
      </a-plane>

      <!-- About Content -->
      <a-entity position="0 2 -4">
        <a-text value="About Me" align="center" color="#FFFFFF" scale="2 2 2"></a-text>
        
        <!-- Bio Text -->
        <a-entity position="0 -1 0">
          <a-text value="Full Stack Developer" align="center" color="#7B68EE" scale="1 1 1"></a-text>
          <a-text value="with a passion for creating" align="center" color="#FFFFFF" position="0 -0.3 0" scale="1 1 1"></a-text>
          <a-text value="innovative digital experiences" align="center" color="#7B68EE" position="0 -0.6 0" scale="1 1 1"></a-text>
        </a-entity>

        <!-- Skills Showcase -->
        <a-entity position="-3 -2 0">
          <a-box width="2" height="2" depth="0.1" color="#7B68EE">
            <a-animation attribute="rotation" dur="5000" to="0 360 0" repeat="indefinite" easing="linear"></a-animation>
          </a-box>
          <a-text value="Technical Skills" align="center" color="#FFFFFF" position="0 -1.5 0"></a-text>
        </a-entity>

        <a-entity position="0 -2 0">
          <a-sphere radius="1" color="#50C878">
            <a-animation attribute="rotation" dur="5000" to="0 360 0" repeat="indefinite" easing="linear"></a-animation>
          </a-sphere>
          <a-text value="Creative Work" align="center" color="#FFFFFF" position="0 -1.5 0"></a-text>
        </a-entity>

        <a-entity position="3 -2 0">
          <a-cylinder height="2" radius="1" color="#FF6B6B">
            <a-animation attribute="rotation" dur="5000" to="0 360 0" repeat="indefinite" easing="linear"></a-animation>
          </a-cylinder>
          <a-text value="Experience" align="center" color="#FFFFFF" position="0 -1.5 0"></a-text>
        </a-entity>
      </a-entity>

      <!-- Back Button -->
      <a-entity position="0 1 2" class="clickable" data-link="/webxr" data-raycastable>
        <a-ring color="#FFFFFF" radius-inner="0.5" radius-outer="0.7">
          <a-animation attribute="rotation" dur="5000" to="0 360 0" repeat="indefinite" easing="linear"></a-animation>
        </a-ring>
        <a-text value="Back" align="center" color="#FFFFFF" position="0 -0.5 0"></a-text>
      </a-entity>

      <!-- Camera -->
      <a-entity position="0 1.6 4">
        <a-camera look-controls wasd-controls>
          <a-cursor
            raycaster="objects: [data-raycastable]"
            color="#FFFFFF"
            position="0 0 -1"
            geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03">
            <a-animation attribute="scale" begin="click" dur="150" from="0.1 0.1 0.1" to="1 1 1"></a-animation>
            <a-animation attribute="scale" begin="fusing" dur="1500" from="1 1 1" to="0.1 0.1 0.1"></a-animation>
          </a-cursor>
        </a-camera>
      </a-entity>

      <!-- Lighting -->
      <a-light type="ambient" color="#222"></a-light>
      <a-light type="directional" color="#7B68EE" intensity="0.5" position="-1 1 2"></a-light>
      <a-light type="directional" color="#50C878" intensity="0.5" position="1 1 2"></a-light>
      <a-light type="spot" color="#FF6B6B" intensity="0.5" position="0 4 0" angle="45"></a-light>
    `;

    return scene;
  };

  const createProjectsScene = () => {
    const scene = document.createElement('a-scene');
    scene.setAttribute('embedded', '');
    scene.setAttribute('vr-mode-ui', 'enabled: true');
    
    scene.innerHTML = `
      <a-assets>
        <img id="grid" src="https://cdn.aframe.io/a-painter/images/floor.jpg" crossorigin="anonymous">
      </a-assets>

      <!-- Environment -->
      <a-gradient-sky material="shader: gradient; topColor: #004466; bottomColor: #001133"></a-gradient-sky>
      <a-plane position="0 0 0" rotation="-90 0 0" width="100" height="100" 
              material="src: #grid; repeat: 50 50; transparent: true; metalness:0.8; roughness: 0.2">
      </a-plane>

      <!-- Projects Title -->
      <a-entity position="0 4 -4">
        <a-text value="Projects" align="center" color="#4CC3D9" scale="3 3 3"></a-text>
      </a-entity>

      <!-- Project Displays -->
      <a-entity position="0 2 -4">
        <!-- Project 1 -->
        <a-entity position="-4 0 0" class="clickable project" data-link="/webxr/projects/full-stack" data-raycastable>
          <a-box width="2.5" height="2" depth="0.1" color="#4CC3D9">
            <a-animation attribute="rotation" dur="15000" to="0 360 0" repeat="indefinite" easing="linear"></a-animation>
          </a-box>
          <a-text value="Full Stack Applications" align="center" color="#FFFFFF" position="0 -1.2 0"></a-text>
          <a-text value="Next.js • React • Node.js" align="center" color="#4CC3D9" scale="0.5 0.5 0.5" position="0 -1.5 0"></a-text>
        </a-entity>

        <!-- Project 2 -->
        <a-entity position="0 0 0" class="clickable project" data-link="/webxr/projects/ai-ml" data-raycastable>
          <a-box width="2.5" height="2" depth="0.1" color="#4CC3D9">
            <a-animation attribute="rotation" dur="15000" to="0 360 0" repeat="indefinite" easing="linear"></a-animation>
          </a-box>
          <a-text value="AI/ML Projects" align="center" color="#FFFFFF" position="0 -1.2 0"></a-text>
          <a-text value="Python • TensorFlow • PyTorch" align="center" color="#4CC3D9" scale="0.5 0.5 0.5" position="0 -1.5 0"></a-text>
        </a-entity>

        <!-- Project 3 -->
        <a-entity position="4 0 0" class="clickable project" data-link="/webxr/projects/webxr" data-raycastable>
          <a-box width="2.5" height="2" depth="0.1" color="#4CC3D9">
            <a-animation attribute="rotation" dur="15000" to="0 360 0" repeat="indefinite" easing="linear"></a-animation>
          </a-box>
          <a-text value="WebXR Experiences" align="center" color="#FFFFFF" position="0 -1.2 0"></a-text>
          <a-text value="A-Frame • Three.js • WebGL" align="center" color="#4CC3D9" scale="0.5 0.5 0.5" position="0 -1.5 0"></a-text>
        </a-entity>
      </a-entity>

      <!-- Interactive Elements -->
      <a-entity position="0 0 -4">
        <!-- Project Details -->
        <a-entity position="-4 -1 0" class="clickable" data-link="/webxr/projects/full-stack" data-raycastable>
          <a-cylinder height="0.2" radius="1" color="#4CC3D9">
            <a-animation attribute="rotation" dur="8000" to="0 360 0" repeat="indefinite" easing="linear"></a-animation>
          </a-cylinder>
          <a-text value="View Details" align="center" color="#FFFFFF" position="0 0.5 0"></a-text>
        </a-entity>

        <a-entity position="0 -1 0" class="clickable" data-link="/webxr/projects/ai-ml" data-raycastable>
          <a-cylinder height="0.2" radius="1" color="#4CC3D9">
            <a-animation attribute="rotation" dur="8000" to="0 360 0" repeat="indefinite" easing="linear"></a-animation>
          </a-cylinder>
          <a-text value="View Details" align="center" color="#FFFFFF" position="0 0.5 0"></a-text>
        </a-entity>

        <a-entity position="4 -1 0" class="clickable" data-link="/webxr/projects/webxr" data-raycastable>
          <a-cylinder height="0.2" radius="1" color="#4CC3D9">
            <a-animation attribute="rotation" dur="8000" to="0 360 0" repeat="indefinite" easing="linear"></a-animation>
          </a-cylinder>
          <a-text value="View Details" align="center" color="#FFFFFF" position="0 0.5 0"></a-text>
        </a-entity>
      </a-entity>

      <!-- Back Button -->
      <a-entity position="0 1 2" class="clickable" data-link="/webxr" data-raycastable>
        <a-ring color="#FFFFFF" radius-inner="0.5" radius-outer="0.7">
          <a-animation attribute="rotation" dur="5000" to="0 360 0" repeat="indefinite" easing="linear"></a-animation>
        </a-ring>
        <a-text value="Back" align="center" color="#FFFFFF" position="0 -0.5 0"></a-text>
      </a-entity>

      <!-- Camera -->
      <a-entity position="0 1.6 4">
        <a-camera look-controls wasd-controls>
          <a-cursor
            raycaster="objects: [data-raycastable]"
            color="#FFFFFF"
            position="0 0 -1"
            geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03">
            <a-animation attribute="scale" begin="click" dur="150" from="0.1 0.1 0.1" to="1 1 1"></a-animation>
            <a-animation attribute="scale" begin="fusing" dur="1500" from="1 1 1" to="0.1 0.1 0.1"></a-animation>
          </a-cursor>
        </a-camera>
      </a-entity>

      <!-- Lighting -->
      <a-light type="ambient" color="#222"></a-light>
      <a-light type="directional" color="#4CC3D9" intensity="0.8" position="-1 1 2"></a-light>
      <a-light type="directional" color="#4CC3D9" intensity="0.8" position="1 1 2"></a-light>
      <a-light type="spot" color="#FFFFFF" intensity="0.5" position="0 4 0" angle="45"></a-light>
    `;

    return scene;
  };

  const createExperienceScene = () => {
    const scene = document.createElement('a-scene');
    scene.setAttribute('embedded', '');
    scene.setAttribute('vr-mode-ui', 'enabled: true');
    
    scene.innerHTML = `
      <a-assets>
        <img id="grid" src="https://cdn.aframe.io/a-painter/images/floor.jpg" crossorigin="anonymous">
      </a-assets>

      <!-- Environment -->
      <a-gradient-sky material="shader: gradient; topColor: #006644; bottomColor: #003322"></a-gradient-sky>
      <a-plane position="0 0 0" rotation="-90 0 0" width="100" height="100" 
              material="src: #grid; repeat: 50 50; transparent: true; metalness:0.7; roughness: 0.3">
      </a-plane>

      <!-- Experience Title -->
      <a-entity position="0 4 -4">
        <a-text value="Professional Experience" align="center" color="#50C878" scale="2 2 2"></a-text>
      </a-entity>

      <!-- Timeline -->
      <a-entity position="0 2.5 -4">
        <!-- Experience 1 -->
        <a-entity position="-4 0 0">
          <a-tetrahedron radius="0.5" color="#50C878">
            <a-animation attribute="rotation" dur="10000" to="0 360 0" repeat="indefinite" easing="linear"></a-animation>
          </a-tetrahedron>
          <a-text value="Senior Developer" align="center" color="#FFFFFF" position="0 -0.8 0"></a-text>
          <a-text value="2020 - Present" align="center" color="#50C878" scale="0.5 0.5 0.5" position="0 -1.1 0"></a-text>
          <a-text value="Tech Leadership" align="center" color="#FFFFFF" scale="0.5 0.5 0.5" position="0 -1.4 0"></a-text>
        </a-entity>

        <!-- Experience 2 -->
        <a-entity position="0 0 0">
          <a-tetrahedron radius="0.5" color="#50C878">
            <a-animation attribute="rotation" dur="10000" to="0 360 0" repeat="indefinite" easing="linear"></a-animation>
          </a-tetrahedron>
          <a-text value="Full Stack Developer" align="center" color="#FFFFFF" position="0 -0.8 0"></a-text>
          <a-text value="2018 - 2020" align="center" color="#50C878" scale="0.5 0.5 0.5" position="0 -1.1 0"></a-text>
          <a-text value="Web Applications" align="center" color="#FFFFFF" scale="0.5 0.5 0.5" position="0 -1.4 0"></a-text>
        </a-entity>

        <!-- Experience 3 -->
        <a-entity position="4 0 0">
          <a-tetrahedron radius="0.5" color="#50C878">
            <a-animation attribute="rotation" dur="10000" to="0 360 0" repeat="indefinite" easing="linear"></a-animation>
          </a-tetrahedron>
          <a-text value="Software Engineer" align="center" color="#FFFFFF" position="0 -0.8 0"></a-text>
          <a-text value="2016 - 2018" align="center" color="#50C878" scale="0.5 0.5 0.5" position="0 -1.1 0"></a-text>
          <a-text value="System Architecture" align="center" color="#FFFFFF" scale="0.5 0.5 0.5" position="0 -1.4 0"></a-text>
        </a-entity>
      </a-entity>

      <!-- Skills Section -->
      <a-entity position="0 0 -4">
        <!-- Technical Skills -->
        <a-entity position="-3 0 0">
          <a-box width="2" height="0.1" depth="2" color="#50C878">
            <a-animation attribute="rotation" dur="8000" to="0 360 0" repeat="indefinite" easing="linear"></a-animation>
          </a-box>
          <a-text value="Technical Skills" align="center" color="#FFFFFF" position="0 0.5 0"></a-text>
          <a-text value="Architecture • DevOps • Cloud" align="center" color="#50C878" scale="0.5 0.5 0.5" position="0 0.2 0"></a-text>
        </a-entity>

        <!-- Leadership -->
        <a-entity position="0 0 0">
          <a-box width="2" height="0.1" depth="2" color="#50C878">
            <a-animation attribute="rotation" dur="8000" to="0 360 0" repeat="indefinite" easing="linear"></a-animation>
          </a-box>
          <a-text value="Leadership" align="center" color="#FFFFFF" position="0 0.5 0"></a-text>
          <a-text value="Team Lead • Mentoring • Agile" align="center" color="#50C878" scale="0.5 0.5 0.5" position="0 0.2 0"></a-text>
        </a-entity>

        <!-- Innovation -->
        <a-entity position="3 0 0">
          <a-box width="2" height="0.1" depth="2" color="#50C878">
            <a-animation attribute="rotation" dur="8000" to="0 360 0" repeat="indefinite" easing="linear"></a-animation>
          </a-box>
          <a-text value="Innovation" align="center" color="#FFFFFF" position="0 0.5 0"></a-text>
          <a-text value="R&D • AI/ML • WebXR" align="center" color="#50C878" scale="0.5 0.5 0.5" position="0 0.2 0"></a-text>
        </a-entity>
      </a-entity>

      <!-- Back Button -->
      <a-entity position="0 1 2" class="clickable" data-link="/webxr" data-raycastable>
        <a-ring color="#FFFFFF" radius-inner="0.5" radius-outer="0.7">
          <a-animation attribute="rotation" dur="5000" to="0 360 0" repeat="indefinite" easing="linear"></a-animation>
        </a-ring>
        <a-text value="Back" align="center" color="#FFFFFF" position="0 -0.5 0"></a-text>
      </a-entity>

      <!-- Camera -->
      <a-entity position="0 1.6 4">
        <a-camera look-controls wasd-controls>
          <a-cursor
            raycaster="objects: [data-raycastable]"
            color="#FFFFFF"
            position="0 0 -1"
            geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03">
            <a-animation attribute="scale" begin="click" dur="150" from="0.1 0.1 0.1" to="1 1 1"></a-animation>
            <a-animation attribute="scale" begin="fusing" dur="1500" from="1 1 1" to="0.1 0.1 0.1"></a-animation>
          </a-cursor>
        </a-camera>
      </a-entity>

      <!-- Lighting -->
      <a-light type="ambient" color="#222"></a-light>
      <a-light type="directional" color="#50C878" intensity="0.8" position="-1 1 2"></a-light>
      <a-light type="directional" color="#50C878" intensity="0.8" position="1 1 2"></a-light>
      <a-light type="spot" color="#FFFFFF" intensity="0.5" position="0 4 0" angle="45"></a-light>
    `;

    return scene;
  };

  const createAudioScene = () => {
    const scene = document.createElement('a-scene');
    scene.setAttribute('embedded', '');
    scene.setAttribute('vr-mode-ui', 'enabled: true');
    
    scene.innerHTML = `
      <a-assets>
        <img id="grid" src="https://cdn.aframe.io/a-painter/images/floor.jpg" crossorigin="anonymous">
      </a-assets>

      <!-- Environment -->
      <a-gradient-sky material="shader: gradient; topColor: #660033; bottomColor: #330033"></a-gradient-sky>
      <a-plane position="0 0 0" rotation="-90 0 0" width="100" height="100" 
              material="src: #grid; repeat: 50 50; transparent: true; metalness:0.9; roughness: 0.1">
      </a-plane>

      <!-- Audio Title -->
      <a-entity position="0 4 -4">
        <a-text value="Audio Production" align="center" color="#FF6B6B" scale="2 2 2"></a-text>
      </a-entity>

      <!-- Audio Categories -->
      <a-entity position="0 2 -4">
        <!-- Music Production -->
        <a-entity position="-4 0 0" class="clickable" data-link="/webxr/audio/music" data-raycastable>
          <a-torus radius="1" radius-tubular="0.1" color="#FF6B6B">
            <a-animation attribute="rotation" dur="10000" to="0 360 0" repeat="indefinite" easing="linear"></a-animation>
          </a-torus>
          <a-text value="Music Production" align="center" color="#FFFFFF" position="0 -1.5 0"></a-text>
          <a-text value="Original Compositions" align="center" color="#FF6B6B" scale="0.5 0.5 0.5" position="0 -1.8 0"></a-text>
        </a-entity>

        <!-- Sound Design -->
        <a-entity position="0 0 0" class="clickable" data-link="/webxr/audio/sound-design" data-raycastable>
          <a-torus radius="1" radius-tubular="0.1" color="#FF6B6B">
            <a-animation attribute="rotation" dur="10000" to="0 360 0" repeat="indefinite" easing="linear"></a-animation>
          </a-torus>
          <a-text value="Sound Design" align="center" color="#FFFFFF" position="0 -1.5 0"></a-text>
          <a-text value="Audio Engineering" align="center" color="#FF6B6B" scale="0.5 0.5 0.5" position="0 -1.8 0"></a-text>
        </a-entity>

        <!-- Live Performance -->
        <a-entity position="4 0 0" class="clickable" data-link="/webxr/audio/live" data-raycastable>
          <a-torus radius="1" radius-tubular="0.1" color="#FF6B6B">
            <a-animation attribute="rotation" dur="10000" to="0 360 0" repeat="indefinite" easing="linear"></a-animation>
          </a-torus>
          <a-text value="Live Performance" align="center" color="#FFFFFF" position="0 -1.5 0"></a-text>
          <a-text value="Stage & Studio" align="center" color="#FF6B6B" scale="0.5 0.5 0.5" position="0 -1.8 0"></a-text>
        </a-entity>
      </a-entity>

      <!-- Audio Visualizer Elements -->
      <a-entity position="0 0 -8">
        <!-- Center Visualizer -->
        <a-entity position="0 2 0">
          <a-ring color="#FF6B6B" radius-inner="0.5" radius-outer="0.6">
            <a-animation attribute="scale" dur="1000" to="1.5 1.5 1.5" direction="alternate" repeat="indefinite"></a-animation>
          </a-ring>
          <a-ring color="#FF6B6B" radius-inner="0.8" radius-outer="0.9">
            <a-animation attribute="scale" dur="1500" to="1.5 1.5 1.5" direction="alternate" repeat="indefinite"></a-animation>
          </a-ring>
          <a-ring color="#FF6B6B" radius-inner="1.1" radius-outer="1.2">
            <a-animation attribute="scale" dur="2000" to="1.5 1.5 1.5" direction="alternate" repeat="indefinite"></a-animation>
          </a-ring>
        </a-entity>

        <!-- Side Visualizers -->
        <a-entity position="-4 2 0">
          <a-box width="0.2" height="2" depth="0.2" color="#FF6B6B">
            <a-animation attribute="scale" dur="1000" to="1 2 1" direction="alternate" repeat="indefinite"></a-animation>
          </a-box>
        </a-entity>

        <a-entity position="4 2 0">
          <a-box width="0.2" height="2" depth="0.2" color="#FF6B6B">
            <a-animation attribute="scale" dur="1000" to="1 2 1" direction="alternate" repeat="indefinite"></a-animation>
          </a-box>
        </a-entity>
      </a-entity>

      <!-- Back Button -->
      <a-entity position="0 1 2" class="clickable" data-link="/webxr" data-raycastable>
        <a-ring color="#FFFFFF" radius-inner="0.5" radius-outer="0.7">
          <a-animation attribute="rotation" dur="5000" to="0 360 0" repeat="indefinite" easing="linear"></a-animation>
        </a-ring>
        <a-text value="Back" align="center" color="#FFFFFF" position="0 -0.5 0"></a-text>
      </a-entity>

      <!-- Camera -->
      <a-entity position="0 1.6 4">
        <a-camera look-controls wasd-controls>
          <a-cursor
            raycaster="objects: [data-raycastable]"
            color="#FFFFFF"
            position="0 0 -1"
            geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03">
            <a-animation attribute="scale" begin="click" dur="150" from="0.1 0.1 0.1" to="1 1 1"></a-animation>
            <a-animation attribute="scale" begin="fusing" dur="1500" from="1 1 1" to="0.1 0.1 0.1"></a-animation>
          </a-cursor>
        </a-camera>
      </a-entity>

      <!-- Lighting -->
      <a-light type="ambient" color="#222"></a-light>
      <a-light type="directional" color="#FF6B6B" intensity="0.8" position="-1 1 2"></a-light>
      <a-light type="directional" color="#FF6B6B" intensity="0.8" position="1 1 2"></a-light>
      <a-light type="spot" color="#FFFFFF" intensity="0.5" position="0 4 0" angle="45"></a-light>
    `;

    return scene;
  };

  useEffect(() => {
    const initScene = () => {
      const existingScene = document.querySelector('a-scene');
      if (existingScene) {
        existingScene.remove();
      }

      let scene;
      const path = window.location.pathname;

      // Create the appropriate scene based on the current path
      switch (path) {
        case '/webxr/about':
          scene = createAboutScene();
          break;
        case '/webxr/projects':
          scene = createProjectsScene();
          break;
        case '/webxr/experience':
          scene = createExperienceScene();
          break;
        case '/webxr/audio':
          scene = createAudioScene();
          break;
        default:
          // Create main scene for the home page
          scene = document.createElement('a-scene');
          scene.setAttribute('embedded', '');
          scene.setAttribute('vr-mode-ui', 'enabled: true');
          scene.innerHTML = `
            <a-assets>
              <img id="grid" src="https://cdn.aframe.io/a-painter/images/floor.jpg" crossorigin="anonymous">
            </a-assets>

            <!-- Environment -->
            <a-gradient-sky material="shader: gradient; topColor: #1F1F1F; bottomColor: #000000"></a-gradient-sky>
            
            <!-- Main Platform -->
            <a-entity position="0 0 0">
              <!-- Ground -->
              <a-plane position="0 0 0" rotation="-90 0 0" width="100" height="100" 
                      material="src: #grid; repeat: 50 50; transparent: true; metalness:0.6; roughness: 0.4">
              </a-plane>

              <!-- Navigation Menu -->
              <a-entity position="0 1.6 -2">
                <a-text value="Navigation Menu" align="center" color="#FFFFFF" scale="1.5 1.5 1.5" position="0 1.2 0"></a-text>
                
                <!-- Menu Items -->
                <a-entity position="-2 0 0" class="clickable" data-link="/webxr/about" data-raycastable>
                  <a-box width="1" height="0.5" depth="0.1" color="#7B68EE"
                         animation="property: rotation; to: 0 360 0; loop: true; dur: 15000">
                    <a-text value="About" align="center" color="#FFFFFF" position="0 0 0.06" scale="0.8 0.8 0.8"></a-text>
                  </a-box>
                </a-entity>

                <a-entity position="-0.67 0 0" class="clickable" data-link="/webxr/projects" data-raycastable>
                  <a-box width="1" height="0.5" depth="0.1" color="#4CC3D9"
                         animation="property: rotation; to: 0 360 0; loop: true; dur: 15000">
                    <a-text value="Projects" align="center" color="#FFFFFF" position="0 0 0.06" scale="0.8 0.8 0.8"></a-text>
                  </a-box>
                </a-entity>

                <a-entity position="0.67 0 0" class="clickable" data-link="/webxr/experience" data-raycastable>
                  <a-box width="1" height="0.5" depth="0.1" color="#50C878"
                         animation="property: rotation; to: 0 360 0; loop: true; dur: 15000">
                    <a-text value="Experience" align="center" color="#FFFFFF" position="0 0 0.06" scale="0.8 0.8 0.8"></a-text>
                  </a-box>
                </a-entity>

                <a-entity position="2 0 0" class="clickable" data-link="/webxr/audio" data-raycastable>
                  <a-box width="1" height="0.5" depth="0.1" color="#FF6B6B"
                         animation="property: rotation; to: 0 360 0; loop: true; dur: 15000">
                    <a-text value="Audio" align="center" color="#FFFFFF" position="0 0 0.06" scale="0.8 0.8 0.8"></a-text>
                  </a-box>
                </a-entity>
              </a-entity>

              <!-- Welcome Text -->
              <a-entity position="0 3.5 -4">
                <a-text value="Christopher Celaya" align="center" color="#FFFFFF" scale="2 2 2"></a-text>
                <a-text value="Full Stack Developer | Musician | Artist" position="0 -0.5 0" align="center" color="#00ff00" scale="1 1 1"></a-text>
              </a-entity>

              <!-- Floating Skills -->
              <a-entity position="0 4 -6">
                <a-text value="TypeScript • React • Next.js • Node.js • Python" 
                        color="#00ff00" align="center" scale="0.8 0.8 0.8">
                  <a-animation attribute="position" to="0 0.2 0" dir="alternate" dur="2000" repeat="indefinite"></a-animation>
                </a-text>
              </a-entity>

              <!-- Decorative Elements -->
              <a-entity position="-8 2 -8">
                <a-box width="0.5" height="4" depth="0.5" color="#00ff00">
                  <a-animation attribute="position" to="0 0.5 0" dir="alternate" dur="2000" repeat="indefinite"></a-animation>
                </a-box>
              </a-entity>

              <a-entity position="8 2 -8">
                <a-box width="0.5" height="4" depth="0.5" color="#4CC3D9">
                  <a-animation attribute="position" to="0 0.5 0" dir="alternate" dur="2500" repeat="indefinite"></a-animation>
                </a-box>
              </a-entity>

              <!-- Floating Rings -->
              <a-entity position="0 5 -10">
                <a-ring color="#00ff00" radius-inner="2" radius-outer="2.2">
                  <a-animation attribute="rotation" to="0 360 0" dur="8000" repeat="indefinite" easing="linear"></a-animation>
                </a-ring>
              </a-entity>
            </a-entity>

            <!-- Camera -->
            <a-entity position="0 1.6 2">
              <a-camera look-controls wasd-controls>
                <a-cursor
                  raycaster="objects: [data-raycastable]"
                  color="#FFFFFF"
                  position="0 0 -1"
                  geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03">
                  <a-animation attribute="scale" begin="click" dur="150" from="0.1 0.1 0.1" to="1 1 1"></a-animation>
                  <a-animation attribute="scale" begin="fusing" dur="1500" from="1 1 1" to="0.1 0.1 0.1"></a-animation>
                </a-cursor>
              </a-camera>
            </a-entity>

            <!-- Lighting -->
            <a-light type="ambient" color="#222"></a-light>
            <a-light type="directional" color="#00ff00" intensity="0.5" position="-1 1 2"></a-light>
            <a-light type="directional" color="#4CC3D9" intensity="0.5" position="1 1 2"></a-light>
            <a-light type="spot" color="#7B68EE" intensity="0.5" position="-4 4 0" angle="45"></a-light>
            <a-light type="spot" color="#FF6B6B" intensity="0.5" position="4 4 0" angle="45"></a-light>
          `;
      }

      // Add click event listeners after the scene is loaded
      scene.addEventListener('loaded', () => {
        const clickables = document.querySelectorAll('.clickable');
        clickables.forEach((element) => {
          element.addEventListener('click', (event) => {
            const link = element.getAttribute('data-link');
            if (link) {
              router.push(link);
            }
          });

          // Add hover effect
          element.addEventListener('mouseenter', () => {
            const scale = element.getAttribute('scale') || '1 1 1';
            element.setAttribute('scale', '1.1 1.1 1.1');
          });

          element.addEventListener('mouseleave', () => {
            element.setAttribute('scale', '1 1 1');
          });
        });
      });

      const container = document.getElementById('aframe-container');
      if (container) {
        container.appendChild(scene);
      }
    };

    // Initialize scene when A-Frame is ready
    const aframeCheck = setInterval(() => {
      if (typeof window !== 'undefined' && (window as any).AFRAME) {
        clearInterval(aframeCheck);
        initScene();
      }
    }, 100);

    return () => {
      clearInterval(aframeCheck);
    };
  }, [router]);

  return (
    <>
      <Script 
        src="https://aframe.io/releases/1.4.0/aframe.min.js"
        strategy="beforeInteractive"
      />
      <Script 
        src="https://unpkg.com/aframe-gradient-sky@1.4.0/dist/aframe-gradient-sky.min.js"
        strategy="beforeInteractive"
      />
      <div id="aframe-container" style={{ width: "100vw", height: "100vh" }} />
    </>
  );
} 