import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from 'react-awesome-slider/src/styles';
import './styles2.css';
import './patrocinio.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { MenuContainer } from '../styles';
import Link from '@material-ui/core/Link';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import Container from '@material-ui/core/Container';

import ListItemAvatar from '@material-ui/core/ListItemAvatar';

const newPhoto = require('../../assets/foto5.jpg');
const imagens = require('../../assets/banner.PNG');
const imgs = require('../../assets/banner-slider.jpg');
const ft = require('../../assets/foto5.jpg');
const logo = require('../../assets/logo.png')

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
 
    maxWidth: 600,
  },

  Typography:{
    marginLeft:100,
  },
  
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  es: {
    height:70,
    alignItems:'center',
    backgroundColor:'#388E3C',
    color:'white',
  },
  img: {
    marginLeft:'10',
    objectFit:'cover',
    height: 328,
     display: 'block',
     maxWidth: 1243,
     overflow: 'hidden',
     width: '100%',
     WebkitBorderRadius: '20px',
    },
    image: {
      width: 150,
      height: 80,
      objectFit:'cover',
    },
    imgs: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
      objectFit:'cover',
      WebkitBorderRadius: '10px',
    },
}));


function HomePage() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const preventDefault = (event) => event.preventDefault();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className="all_componentss">
      <CssBaseline />
      <MenuContainer
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <img style={{marginLeft: '36%'}} alt="Logo do icasa" className="logo" src={logo} />


        </Toolbar>
      </MenuContainer>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Inicio', 'O clube', 'Tabelas', 'Noticias'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Programação', 'Contato'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />

      </main>


      <AwesomeSlider className='aws-btn b' >
        <div data-src={imgs} />
        <div data-src={imgs} />
        <div data-src={imgs} />
      </AwesomeSlider>
      {/*section de noticias aqui*/}

      <div className="newsJogossss">
      <Typography className="txtnot" variant="h6" color="initial">
        Notícias do Time
      </Typography>
      <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <img className="blc" alt="Travis Howard" src={logo} />
        </ListItemAvatar>
        <ListItemText
          primary="Titulo da noticia"
          secondary={
            <React.Fragment>
              {' — Aqui fica localizado um pouco da notica…'}
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                10/10/20
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <img className="blc" alt="Travis Howard" src={logo} />
        </ListItemAvatar>
        <ListItemText
          primary="Titulo da noticia"
          secondary={
            <React.Fragment>
              {'Aqui fica localizado um pouco da notica…'}
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                10/10/20
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
         <img className="blc" alt="Travis Howard" src={imgs} />
        </ListItemAvatar>
        <ListItemText
          primary="Titulo da noticia"
          secondary={
            <React.Fragment>
              {' — Aqui fica localizado um pouco da notica…'}
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                10/10/20
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
    </div>

    {/* outro */}

    <div className="newsJogossss">
      <Typography className="txtnot" variant="h6" color="initial">
        Notícias do Time
      </Typography>
      <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <img className="blc" alt="Travis Howard" src={logo} />
        </ListItemAvatar>
        <ListItemText
          primary="Titulo da noticia"
          secondary={
            <React.Fragment>
              {' — Aqui fica localizado um pouco da notica…'}
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                10/10/20
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <img className="blc" alt="Travis Howard" src={logo} />
        </ListItemAvatar>
        <ListItemText
          primary="Titulo da noticia"
          secondary={
            <React.Fragment>
              {'Aqui fica localizado um pouco da notica…'}
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                10/10/20
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
         <img className="blc" alt="Travis Howard" src={imgs} />
        </ListItemAvatar>
        <ListItemText
          primary="Titulo da noticia"
          secondary={
            <React.Fragment>
              {' — Aqui fica localizado um pouco da notica…'}
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                10/10/20
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
    </div>
    

      <section className="cta" >
        <div className="inner">
          <img className="img-address" alt=""/>
          <h1>Nossa Localização</h1>
          <p>Rua Frei Damião, 1720 - CEP: 63040-640 - Lagoa Seca - Juazeiro do Norte-CE</p>
          <p>Fone-Fax: (88)3571- 3060.</p>
        </div>
      </section>

      <React.Fragment>
    <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" style={{marginTop:100, }} />
      </Container>
      <Grid  style={{marginLeft: '30px', marginBottom: 5,}}>
      <FacebookIcon />
      <InstagramIcon />
      </Grid>
        <Typography style={{ margintTop: 30, padding:'10px',}} variant="body1" color="initial">
        Associação Desportiva Recreativa e Cultural Icasa
        Icasafc.com - Todos os direitos reservados.
        </Typography>
    </React.Fragment>

    </div>

  )
}

export default HomePage;
