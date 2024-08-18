'use client'
import { useEffect, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';
import { useHasMounted } from '@/utils/CustomHooks';

const WaveTrack = () => {
    const effectRan = useRef(false);
    useEffect(() => {
        if (effectRan.current || process.env.NODE_ENV !== "development") {
            const element = document.getElementById('div')
            if (element) {
                const wavesurfer = WaveSurfer.create({
                    container: element,
                    waveColor: 'rgb(200, 0, 200)',
                    progressColor: 'rgb(100, 0, 100)',
                    url: `/audio/hoidanit.mp3`,
                })
                console.log('i fire once');
            }
        }
        return () => effectRan.current = true;

    }, [])

    return (
        <div id='div'>
            Wave Track
        </div>
    )
}

export default WaveTrack