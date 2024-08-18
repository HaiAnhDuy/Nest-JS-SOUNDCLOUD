'use client'
import { useSearchParams } from 'next/navigation'
const DetailPageTrack = (props: any) => {
    const searchParams = useSearchParams()

    const audio = searchParams.get('audio')
    console.log('>>> check audio :', audio)

    return (
        <div>
            DetailPageTrack
        </div>
    )
}
export default DetailPageTrack