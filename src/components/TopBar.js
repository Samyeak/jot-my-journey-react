import React from 'react';
import { AppBar, Toolbar, Typography, Grid, Drawer, ListItem, List, ListItemText } from '@material-ui/core'

const TopBar = () => {
    return (
    //     <AppBar position="static">
    //         <Toolbar>
    //             <IconButton edge="start" color="inherit" aria-label="menu">
    //             </IconButton>
    //             <Typography variant="h6">
    //                 News
    // </Typography>
    //             <Button color="inherit">Login</Button>
    //         </Toolbar>
    //     </AppBar>
        <AppBar position="static">
            <Toolbar>
                {/* <Grid container spacing={10}> */}
                    {/* <Grid item xs={12}> */}
                        <Typography variant="h5">Jot My Journey Beta</Typography>
                    {/* </Grid> */}
                {/* </Grid> */}
            </Toolbar>
        </AppBar>
    );
}

export default TopBar;