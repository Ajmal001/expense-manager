import React from 'react'
import { Drawer, Divider } from '@material-ui/core'
import { withStyles } from '@material-ui/styles';
import  DashboardIcon from '@material-ui/icons/Dashboard'
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import SettingsIcon from '@material-ui/icons/Settings';

import Profile from './Profile'
import SidebarNav from './SidebarNav';

const styles = theme => ({

    drawer :{
        width:240,
        [theme.breakpoints.up('lg')]:{
            marginTop :64,
            height:'calc(100%-64px)'
        }
    },
    root:{
        backgroundColor:theme.palette.white,
        display:'flex',
        flexDirection: 'column',
        height:'100%',
        padding:theme.spacing(2)
    },
    divider:{
        margin : theme.spacing(2,0)
    },
    nav :{
        marginBottom:theme.spacing(2)
    }
})

const pages = [
    {
        title:'Dashboard',
        href:'Dashboard',
        icon:<DashboardIcon/>
    },
    {
        title: 'Account',
        href: '/account',
        icon: <AccountBoxIcon />
    },
    {
        title: 'Settings',
        href: '/settings',
        icon: <SettingsIcon />
    }
];
class Sidebar extends React.Component{
    render(){
        const {open , variant , onClose ,className,classes,...rest} = this.props;
        console.log(this.props)
        return(
            <Drawer anchor="left" open ={open} variant ={variant} 
            classes ={{ paper : classes.drawer} }>
                <div className = {classes.root}>
                    <Profile></Profile>
                    <Divider className ={classes.divider}></Divider>
                    <SidebarNav className ={classes.nav} pages={pages}></SidebarNav>
                </div>
            </Drawer>
        );
        
    }
}

export default withStyles(styles)(Sidebar)