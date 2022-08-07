import React from 'react'
import { AppBar, Container, Typography, Toolbar } from '@mui/material'

const NavBar = () => {
    return (
        <AppBar position="static" color=  'transparent'>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color:  'inherit',
                            textDecoration: 'none',
                            postion :'sticky'
                        }}
                    >
                        Music App
                    </Typography>            
                </Toolbar>
            </Container>
        </AppBar>

    )
}
export default NavBar 