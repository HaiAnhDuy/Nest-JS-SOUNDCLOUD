'use client'
import { useSearchParams } from 'next/navigation';
import WaveTrack from '@/components/track/wave.track';
const DetailPageTrack = (props: any) => {
    const searchParams = useSearchParams()

    const audio = searchParams.get('audio')
    console.log('>>> check audio :', audio)

    return (
        <div>
            DetailPageTrack
            <WaveTrack />
        </div>
    )
}
export default DetailPageTrack