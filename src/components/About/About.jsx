import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function About() {
  return (

    <Box sx={{ width: '100%'  ,margin:"33px"}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={6}>
          <Item>Forbidden Strings, a music producer, born and raised in Bharat, has worked with leading Hindi/Punjabi ,garhwali artists  and as a background scorer for Viacom 18, Zoom TV, Vodafone, Punjab Police, Indian Oil, Bharat Petroleum, State & Central govt. projects etc. Official producer of Bollywood Dubstep, one of the most viral stuff Nationwide and has taught countless number of students online as well as offline from each side of the world including Pakistan, Australia, UK, New Zealand, Nepal, Canada, Abu Dhabi etc with students giving massive hits like: Subah, Dynamite - Ammy Virk, Bille Bille Naina Waliye, 2 Cheene - Khan Bhaini , P.U Diyan Yaarian, Cute Munda - Sharry Maan, Atom Bamb - Bohemia etc</Item>
        </Grid>
        <Grid xs={6}>
          <Item>
          {/* <img src={require('../../img/priyanshu.jpg') }/> */}
          </Item>
        </Grid>

      </Grid>
    </Box>
  );
}