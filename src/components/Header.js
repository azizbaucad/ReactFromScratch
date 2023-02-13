import { AppBar, Badge, Grid, IconButton, InputBase, Toolbar } from '@material-ui/core'
import React from 'react'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import SearchIcon from '@material-ui/icons/Search'
import { makeStyles } from '@material-ui/core/styles'



const useStyles = makeStyles( theme => ({
    root: {
        backgroundColor: '#fff' ,
        transform: 'translateZ(0)'
        
    },
    searchInput: {
        opacity: '1',
        padding: '0px 8px',
        fontSize: '1.2rem',
        '&:hover': {
            backgroundColor: '#DEDCD9'
        },
        '& .MuiSvgIcon-root': {
            marginRight: theme.spacing(1)
        }
    },
    


})) 

export default function Header() {

    const classes = useStyles();

    return (

        <AppBar position='static' className={classes.root}>
            <Toolbar>
                <Grid container
                alignItems='center'>
                    <Grid item>
                        <InputBase
                            placeholder="Search topics"
                            /*  eslint-disable-next-line :  call the class searchInput*/
                            className={classes.searchInput}
                            startAdornment={<SearchIcon fontSize="small" />}
                        />

                    </Grid>
                    <Grid item sm></Grid>
                    <Grid item>

                        {/*  eslint-disable-next-line :  */}
                        <IconButton>
                            <Badge badgeContent={4} color="primary">
                                <NotificationsNoneIcon fontSize="small" />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={4} color="secondary">
                                <ShoppingCartIcon fontSize="small" />
                            </Badge>
                        </IconButton>
                        {/*  eslint-disable-next-line : separate IconButton  */}
                        <IconButton>
                            <Badge badgeContent={100} color="primary">
                                <ChatBubbleOutlineIcon fontSize="small" />
                            </Badge>
                        </IconButton>
                        {/*  eslint-disable-next-line : Add PowerSettingButton  */}
                        <IconButton>
                            <Badge badgeContent={100} color="secondary">
                                <PowerSettingsNewIcon />
                            </Badge>
                        </IconButton>

                    </Grid>
                </Grid>

            </Toolbar>
        </AppBar>
    )
}
