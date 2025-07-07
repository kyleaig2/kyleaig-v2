import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import React, { useMemo } from "react";
import { Color, PlaneGeometry, Points, TextureLoader } from "three";
import { createNoise3D } from "simplex-noise";

function ParticleGrid() {
  const circleTexture = useLoader(TextureLoader, '/assets/circle.png');

  const pointsRef = React.useRef<Points>(null);
  const [positions, originalPositions, colors, noise3d, lowColor, highColor] = useMemo(() => {
    const geo = new PlaneGeometry(100, 100, 300, 300);
    const pos = geo.attributes.position.array.slice(); // Float32Array
    const colorArray = new Float32Array(pos.length);
    const hCol = new Color(0xeeeeee);
    const lCol = new Color(0xffffff);

    const n = createNoise3D();

    return [new Float32Array(pos), new Float32Array(pos), colorArray, n, lCol, hCol];
  }, []);

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    const time = clock.getElapsedTime();
    const color = new Color();

    for (let i = 0; i < positions.length; i += 3) {
      const x = originalPositions[i];
      const y = originalPositions[i + 1];

      const z = noise3d(0.1 * (x + time), 0.1 * (y + time), time * 0.1);

      const zNormalized = z * 2;
      // const zNormalized = z * 2 + Math.sin(time);

      positions[i + 2] = zNormalized; // wave effect

      color.lerpColors(lowColor, highColor, zNormalized * Math.sin(time * 0.3));

      colors[i] = color.r;
      colors[i + 1] = color.g;
      colors[i + 2] = color.b;
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    pointsRef.current.geometry.attributes.color.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={positions.length / 3}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
          count={colors.length / 3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        map={circleTexture}
        alphaTest={0.5}
        // opacity={0.2}
      />
    </points>
  );
}

function Background() {
  return (
    <div className="fixed top-0 left-0 w-full h-full animate-appear -z-10 max-md:hidden">
      <Canvas camera={{ position: [0, 60, 0], fov: 100 }}>
        <ParticleGrid />
      </Canvas>
    </div>
  );
}

export default Background;
