import React from 'react';
import Slide from '@material-ui/core/Slide';
import { useScrollTrigger } from '@material-ui/core';

const HideOnScroll = ({children, window})=>{
    const trigger = useScrollTrigger({target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    )
}

export default HideOnScroll;