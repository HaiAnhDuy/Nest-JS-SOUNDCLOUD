'use client'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import shadows from '@mui/material/styles/shadows';
import { useHasMounted } from '@/utils/CustomHooks';

const FooterAppBar = () => {
    const HasMount = useHasMounted()
    if (HasMount === false) return (<></>)

    // console.log(process.env.NEXT_PUBLIC_BACKEND_URL)
    return (

        <AppBar position="fixed" sx={{ top: 'auto', bottom: 0, margin: '0 auto', backgroundColor: '#f2f2f2' }}>
            <Container maxWidth='lg' sx={{ display: 'flex', gap: '10px' }}>
                <AudioPlayer
                    autoPlay
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/tracks/CHILL.mp3`}
                    // onPlay={e => console.log("onPlay")}
                    style={
                        {
                            boxShadow: 'none',
                            backgroundColor: '#f2f2f2'
                        }
                    }

                // other props here
                />
                <div
                    style={{
                        marginLeft: '20px',
                        // border: '1px solid red',
                        padding: '20px 15px',


                    }}
                >
                    <div style={{ fontSize: '13px', color: '#999' }}>
                        Eric
                    </div>
                    <div style={{ color: '#666', display: 'flex' }}>
                        Deadpool and Wolverine Anthems
                    </div>
                </div>


            </Container>
        </AppBar>
    )
}

export default FooterAppBar