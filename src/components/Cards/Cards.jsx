import React from 'react';
import { Card , CardContent , Typography , Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Cards = ({ data : {confirmed , recovered, deaths, lastUpdate}}) => {
  if(!confirmed){
    return 'Loading..';
  }

  const dataCard = [
    {
      name : 'Infected',
      description : 'Number of active cases of COVID-19', 
      data_value : confirmed.value, 
      key_data : 'confirmed'    
    },
    {
      name : 'Recovered',
      description : 'Number of recoveries from COVID-19',  
      data_value : recovered.value, 
      key_data : 'recovered'    
    },
    {
      name : 'Deaths',
      description : 'Number of deaths by COVID-19',  
      data_value : deaths.value, 
      key_data : 'deaths'    
     
    },
  ]
  
  console.log(dataCard);

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center" >
        {
          dataCard.map(dataCardItem => {
            return (
              <Grid item component={Card} xs={12} md={3} className={cx(styles.card , styles[dataCardItem.key_data])}>
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>{dataCardItem.name}</Typography>
                  <Typography variant="h5">
                    <CountUp start={0} end={dataCardItem.data_value} duration={2.5} separator="," />
                  </Typography>
                  <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                  <Typography variant="body2" >Number of active cases of COVID-19</Typography>
                </CardContent>
            </Grid>
            );
           
          })
        }

       
      </Grid>
    </div>
  )
}

export default Cards;
