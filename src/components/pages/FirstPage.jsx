import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  root2: {
    marginTop: '1em',
  }
})

export default function FirstPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.root2}>
        <Grid container justify="center">
          <Hidden smDown>
            <Grid item xs={12} sm={6}>
              <Card>
                <CardContent>
                  Xs 1
                </CardContent>
              </Card>
            </Grid>
          </Hidden>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                Xs 2
                </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}