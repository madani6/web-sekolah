import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import '../App.css';
import Gambar from '../img/hmm.jpg'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className="jumbotron">
          <h1 className="jumbotron-h1">SMK Bina Nusantara Semarang A Revolutionary That Invest in You</h1>
          <p className="jumbotron-p">Smk Bina Nusantara Semarang adalah sekolah Berbasis industri dengan penerapan kurikulum dan pembelajaran yang disiapkan untuk mengisi pasar kerja.</p>
          <button className="jumbotron-button">Selengkapnya</button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
