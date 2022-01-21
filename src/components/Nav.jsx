import React, { useState } from "react";
import { AppBar, Grid, Link, Typography, IconButton, Drawer, Box, List, ListItem, ListItemText, useTheme, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import { typography } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  link: {
    color: theme.palette.text.primary,
    textTransform: "capitalize",
    textDecoration: "none",
  },
}));


export const Nav = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const tabs = ["about", "give", "progress"];
  return (
    <AppBar>
      <Grid
        container
        bgcolor="background.paper"
        sx={{ px: 3, py: 1, display: "flex", alignItems: "center" }}
      >
        <Grid item>
          <Link
            href={`/`}
            color="textPrimary"
            sx={{ textDecoration: "none", fontWeight: 500 }}
          >
            GiveApp
          </Link>
        </Grid>
        <Grid item sx={{ display: "flex", flexGrow: 1 }} />
        {isMobile ? <NavMobile tabs={tabs} /> : <NavDesktop tabs={tabs} />}
      </Grid>
    </AppBar>
  );
};

const NavDesktop = ({ tabs }) => {
  const classes = useStyles();
  return (
    <List sx={{ display: 'flex', flexDirection: 'row', p: 0 }}>
      {tabs.map((tab, i) => (
        <ListItem key={i}>
          <ListItemText>
            <Link href={`/${tab}`} className={classes.link}>{tab}</Link>
          </ListItemText>
        </ListItem>
      ))}
    </List>
  );
};

const NavMobile = ({ tabs }) => {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <React.Fragment>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Box sx={{ width: window.innerWidth, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Box sx={{ px: 4, pt: 2, width: window.innerWidth, display: 'flex', justifyContent: 'end' }}>
            <CloseIcon onClick={() => setOpenDrawer(false)} />
          </Box>
          <List>
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <Link href="/" className={classes.link}><Typography align="center" variant="h5">home</Typography></Link>
              </ListItemText>
            </ListItem>
            {tabs.map((tab, i) => (
              <ListItem key={i} onClick={() => setOpenDrawer(false)}>
                <ListItemText>
                  <Link href={`/${tab}`} className={classes.link}><Typography align="center" variant="h5">{tab}</Typography></Link>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  );
};