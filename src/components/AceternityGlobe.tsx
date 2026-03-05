import { useEffect, useRef, useState } from 'react';
// @ts-ignore
import createGlobe from '@/lib/cobe.js';

export function AceternityGlobe() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const pointerInteracting = useRef<number | null>(null);
    const pointerInteractionMovement = useRef(0);
    const [{ r }, setR] = useState({ r: 0 });

    useEffect(() => {
        let currentPhi = 4.2; // roughly focusing on SE Asia initially
        let currentTheta = 0.3;
        let width = 0;

        // Setup resize handler
        const onResize = () => {
            if (canvasRef.current) width = canvasRef.current.offsetWidth;
        };
        window.addEventListener('resize', onResize);
        onResize();

        const globe = createGlobe(canvasRef.current!, {
            devicePixelRatio: 2,
            width: width * 2,
            height: width * 2,
            phi: currentPhi,
            theta: currentTheta,
            dark: 1, // Full dark mode
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: [10 / 255, 22 / 255, 40 / 255], // matches #0A1628
            markerColor: [0 / 255, 200 / 255, 150 / 255], // matches #00C896 (teal)
            glowColor: [1, 1, 1],
            markers: [
                // ASEAN capitals approx bounding
                { location: [14.5995, 120.9842], size: 0.08 }, // Manila
                { location: [10.7769, 106.7009], size: 0.06 }, // HCMC
                { location: [-6.2088, 106.8456], size: 0.09 }, // Jakarta
                { location: [13.7563, 100.5018], size: 0.07 }, // Bangkok
                { location: [3.1390, 101.6869], size: 0.06 },  // KL
                { location: [1.3521, 103.8198], size: 0.05 },  // Singapore
            ],
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onRender: (state: any) => {
                // Called on every animation frame.
                if (pointerInteracting.current === null) {
                    currentPhi += 0.005;
                }
                state.phi = currentPhi + r;
                state.width = width * 2;
                state.height = width * 2;
            }
        });
        setTimeout(() => {
            if (canvasRef.current) canvasRef.current.style.opacity = '1';
        });

        return () => {
            globe.destroy();
            window.removeEventListener('resize', onResize);
        };
    }, [r]);

    return (
        <div
            style={{
                width: '100%',
                maxWidth: 700,
                aspectRatio: 1,
                margin: 'auto',
                position: 'relative',
            }}
        >
            <canvas
                ref={canvasRef}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                onPointerDown={(e: any) => {
                    pointerInteracting.current =
                        e.clientX - pointerInteractionMovement.current;
                    if (canvasRef.current) {
                        canvasRef.current.style.cursor = 'grabbing';
                    }
                }}
                onPointerUp={() => {
                    pointerInteracting.current = null;
                    if (canvasRef.current) {
                        canvasRef.current.style.cursor = 'grab';
                    }
                }}
                onPointerOut={() => {
                    pointerInteracting.current = null;
                    if (canvasRef.current) {
                        canvasRef.current.style.cursor = 'grab';
                    }
                }}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                onMouseMove={(e: any) => {
                    if (pointerInteracting.current !== null) {
                        const delta = e.clientX - pointerInteracting.current;
                        pointerInteractionMovement.current = delta;
                        setR({ r: delta / 200 });
                    }
                }}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                onTouchMove={(e: any) => {
                    if (pointerInteracting.current !== null && e.touches[0]) {
                        const delta = e.touches[0].clientX - pointerInteracting.current;
                        pointerInteractionMovement.current = delta;
                        setR({ r: delta / 100 });
                    }
                }}
                style={{
                    width: '100%',
                    height: '100%',
                    cursor: 'grab',
                    contain: 'layout paint size',
                    opacity: 0,
                    transition: 'opacity 1s ease',
                }}
            />
        </div>
    );
}
