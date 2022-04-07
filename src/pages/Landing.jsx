import React, {useState, useRef } from 'react';
import Deck from '../components/Deck';
import myIcon from "../assets/logo.svg"

import { makeStyles, withStyles, createStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import IconButton from '@material-ui/core/IconButton';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import ShuffleIcon from '@material-ui/icons/Shuffle';

import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import { useSprings } from 'react-spring';
import { cards, Colors, from, texts, titles, to} from './services';

import Footer from '../components/Footer';


const useStyles = makeStyles((theme) =>
  createStyles({
    landingRoot: {
      position: 'relative',
      height: '100vh',
      width: '100vw',
      overflowX: 'hidden',
    },
    item: {
      width: '',
    },
    paper: {
      padding: theme.spacing(3),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      background: 'transparent',
    },
    deckBox: {
      position: 'relative',
      zIndex: '2',
      [theme.breakpoints.down('sm')]: { height: '35vh' },
      [theme.breakpoints.up('sm')]: { height: '50vh' },
      [theme.breakpoints.up('md')]: { height: '70vh' },
      [theme.breakpoints.up('lg')]: { height: '70vh' },
      [theme.breakpoints.up('xl')]: { height: '70vh' },
    },
    iconGridContainer: {
      [theme.breakpoints.down('md')]: {
        flexDirection: 'row',
        justify: 'flex-start',
      },
      [theme.breakpoints.up('md')]: {
        flexDirection: 'column',
        justify: 'center',
        alignItems: 'center',
      },
    },
    footer: {
      margin: '0px',
      position: 'absolute',
      bottom: '0px',
      width: '100vw',
      '& a': {
        color: 'rgb(255, 255, 255, 0.6)',
      },
      '& span': {
        color: 'red',
      },

      padding: '1rem',
      fontSize: '16px',
      textAlign: 'center',
      backgroundColor: '#3a3939',
      color: 'rgb(255, 255, 255, 0.6)',
    },
  })
);

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 1)',
    boxShadow: theme.shadows[2],
    fontSize: '14px',
    borderRadius: '25px',
  },
}))(Tooltip);


const Landing = () => {
  const { current: gone } = useRef(new Set())
  const topCardIndex = useRef(cards.length - 1)
  const [props, set] = useSprings(cards.length, (i) => ({
    ...to(i),
    
    from: from(i)
  }));
  
  const handleNext = () => {
    set((i) => {
      if (i !== topCardIndex.current || topCardIndex.current < 0) return;
      topCardIndex.current--; 
      // topCardIndex.current = index;

			let x = (200 + window.innerWidth - 2 * 0) * 1;
			let rot = 2 + (1 * 10 * 0.2 );
			let scale = 1.1;

			setTheme({ bgColor: Colors[i], text: texts[i], title: titles[i] });
      if (topCardIndex.current < 0) setTimeout(() => {
        gone.clear();
        set((i) => to(i));
        topCardIndex.current = cards.length - 1;
      }, 1500);

			return {
				x,
				rot,
				scale,
				delay: undefined,
				config: {
					friction: 400,
					tension: 800
				}
			};
		});
  }

  
  const handlePrev = () => {
    let x = (200 + window.innerWidth - 2 * 0) * -1;
			let rot = 2 + (1 * 10 * 0.2 );
			let scale = 1.1;
   set((i) => i === topCardIndex.current+1 ? to(topCardIndex.current + 1) : null)
      topCardIndex.current++
      return {
				x,
				rot,
				scale,
				delay: undefined,
				config: {
					friction: 400,
					tension: 800
				}
			};
    
    
    
  }
  
  const handleShuffle = () =>{
    console.log("handle Shuffle")
    // CardDetails[Math.floor(Math.random()*CardDetails.length)]
  }
  

  // const [bgColor, setBgColor] = useState("yellow");
  const [theme, setTheme] = useState({bgColor:"#F9FBEF",text:"Breaking the Barrier World is now Open",title:"Cachy Select",bgCardColor:"#EDFFEE"})
  const classes = useStyles();

  setTimeout(() => {
    handleNext()
  }, 4500);
  return (
    <>
    

      <div id='landing_root' className={classes.landingRoot} style={{backgroundColor: theme.bgColor}}>
      <nav> 
        <img 
        style={{marginTop:"32px",
                marginLeft:"60px",
                height: "40px"}} 
        src={myIcon} 
        alt="" /> 
      </nav>
        <br />
        <Box>
          
          <Grid
            container
            direction="row-reverse"
            spacing={3}
            alignItems="center"
            // style={{margin:"0px"}}
            justify="center"
            
            
          >

          <Grid item xs={12} md={7}>
              <Box className={classes.deckBox} >
                <Deck setTheme={setTheme} 
                      theme={theme} 
                      gone={gone} 
                      set={set}  
                      props={props} 
                      topCardIndex={topCardIndex} 
                      />
              </Box>
          </Grid>      
            
          <Grid item xs={12} md={4}>
             <div style={{color:"#231F20"}}>
                <div style={{font:" normal normal bold 24px/66px Avenir Next"}}>{theme.title}</div>
                <div style={{font: "normal normal 50px/80px Avenir Next",letterSpacing: "-1.52px",opacity: "1"}}>{theme.text}</div>
             </div>
            </Grid>

          <Grid
              container
              item
              className={classes.iconGridContainer}
              xs={12}
              md={1}
              alignItems="center"
              spacing={2}
            >
             
            <Grid item>
              <LightTooltip
                  TransitionComponent={Zoom}
                  title="Previous Post"
                  placement="right"
                >
                  <IconButton aria-label="delete">
                    <SkipPreviousIcon onClick={handlePrev} style={{ color: 'black' }} />
                  </IconButton>
                </LightTooltip>
              </Grid>
              <Grid item>
                <LightTooltip
                  TransitionComponent={Zoom}
                  title="Next Post"
                  placement="right"
                >
                  <IconButton aria-label="next">
                    <SkipNextIcon onClick={handleNext} style={{ color: 'black' }} />
                  </IconButton>
                </LightTooltip>
              </Grid>
              <Grid item>
                <LightTooltip
                  TransitionComponent={Zoom}
                  title="Shuffle Posts"
                  placement="right"
                >
                  <IconButton aria-label="shuffle">
                    <ShuffleIcon onClick={handleShuffle}style={{ color: 'black' }} />
                  </IconButton>
                </LightTooltip>
              </Grid>
            </Grid>
          
          </Grid>
        </Box>
        <Footer/>
       
      </div>
    </>
  );
};

export default Landing;

