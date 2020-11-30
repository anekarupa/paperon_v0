import React from 'react'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { AppBar, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: '3em',
        [theme.breakpoints.down("md")]: {
            marginBottom: '2em'
        },
        [theme.breakpoints.down("xs")]: {
            marginBottom: '1.25em'
        },
    },
}))

export default function Header() {
    const classes = useStyles()

    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar>
                    <Toolbar disableGutters>
                        Nice
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </React.Fragment>
    )
}