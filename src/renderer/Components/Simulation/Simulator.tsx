import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

const Simulator: React.FC = () => {
  const refContainer = useRef(null);
  useEffect(() => {
    // === THREE.JS CODE START ===
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    var renderer = new THREE.WebGLRenderer();
    if (refContainer.current) {
      renderer.setSize(800, 600);
    }
    // document.body.ap
    // pendChild( renderer.domElement );
    // use ref as a mount point of the Three.js scene instead of the document.body
    refContainer.current &&
      refContainer.current.appendChild(renderer.domElement);
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0x800080 });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 5;
    var animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();
  }, []);
  return (
    <div className="sim-container w-full h-full p-5 flex items-center justify-center">
      <div
        className="border-gray p-4 rounded-xl bg-black border"
        ref={refContainer}
      ></div>
    </div>
  );
};

export default Simulator;
