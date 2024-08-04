'use client'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import shadows from '@mui/material/styles/shadows';

const FooterAppBar = () => {
    return (

        <AppBar position="fixed" color="transparent" sx={{ top: 'auto', bottom: 0, margin: '0 auto' }}>
            <Container maxWidth='lg' sx={{ display: 'flex' }}>
                <AudioPlayer
                    autoPlay
                    src="http://example.com/audio.mp3"
                    onPlay={e => console.log("onPlay")}
                    style={
                        {
                            boxShadow: 'none'
                        }
                    }

                // other props here
                />
                <Box
                    sx={{
                        marginLeft: '20px',
                        // border: '1px solid red',
                        padding: '20px 15px'
                    }}
                >
                    <div style={{ width: 'fit-content', fontSize: '13px', color: 'gray' }}>
                        Eric
                    </div>
                    <div style={{ width: '200px' }}>
                        Who am i ?
                    </div>
                </Box>


            </Container>
        </AppBar>
    )
}

export default FooterAppBar