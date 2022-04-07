import { makeStyles } from '@material-ui/core';

export const to = (i) => ({
	x: 0,
	y: i * -4,
	scale: 1,
	rot: -5 + Math.random() * 9.5,
	delay: i * 100
});
export const from = (i) => ({ x: 1000, rot: 0, scale: 1.5, y: 0 });

export const cards = [ 'CachySelect.svg', 'Messenger.png', 'GetCachy.svg', 'feeds.svg' ];

export const useStyles = makeStyles((theme) => ({
	card: {
		WebkitUserDrag: 'none',
		boxShadow: 'rgba(0, 0, 0, 0.1) 2px 5px 27px !important',

		[theme.breakpoints.down('sm')]: {
			height: '300px',
			width: '300px',
            objectFit:"cover",
	  
     
		},
		[theme.breakpoints.up('sm')]: {
			height: '360px',
			width: '360px',
            objectFit:"cover",
	  
    
		},
		[theme.breakpoints.up('md')]: {
			height: '400px',
			width: '400px',
			objectFit:"cover",
    
	
		},
		[theme.breakpoints.up('lg')]: {
			height: '450px',
			width: '450px',
            objectFit:"cover",
	  
    
		},
		[theme.breakpoints.up('xl')]: {
			
			height: '800px',
			width: '800px',
            objectFit:"cover",
  
		}
	}
}));


export const trans = (r, s) => `rotateY(${r}deg) rotateZ(${r}deg) scale(${s})`;
export const Colors = [ '#F9FBEF', '#FFF6F1', '#EFFBF7', '#EFF5FD' ];
export const titles = [ 'Cachy Select', 'Feeds', 'Get Cachy', 'Messenger' ];
export const bgCardColor = ["#EDFFEE","#231F20","#F2E8FD","#F9F3E4"]

export const texts = [
	'Breaking the Barrier World is now Open',
	'Discover and Explore the beyond Flash side',
	'Talk Right instead of Swipe Right',
	'Data Security and Privacy as you deserve'
];

export const CardDetails = [
	{
		titles: 'Cachy Select',
		description: 'Breaking the Barrier World is now Open',
		Colors: '#F9FBEF',
		bgCardColor: '#EDFFEE'
	},
	{
		titles: 'Feeds',
		Description: 'Discover and Explore the beyond Flash side',
		Colors: '#FFF6F1',
		bgCardColor: '#231F20'
	},
	{
		titles: 'Get Cachy',
		Description: 'Talk Right instead of Swipe Right',
		Colors: '#EFFBF7',
		bgCardColor: '#F2E8FD'
	},
	{
		titles: 'Messenger',
		Description: 'Data Security and Privacy as you deserve',
		Colors: '#EFF5FD',
		bgCardColor: '#F9F3E4'
	}
];
