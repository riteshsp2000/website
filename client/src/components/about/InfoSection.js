import React from 'react';

// Libraries
import { makeStyles, Typography, Container } from '@material-ui/core';

function About({ direction, first, DATA }) {
  const classes = useStyles();

  const renderImgContainer = (
    <div className={classes.imgContainer}>
      <img src={DATA.IMG} alt='People' className={classes.img} />
    </div>
  );

  const renderContentContainer = (
    <div className={classes.contentContainer}>
      <Typography variant='h2' className={classes.question}>
        {DATA.QUESTION}
        {/* eslint-disable-next-line */}
        <span className={classes.highlight}> {DATA.HIGHLIGHT}</span>
      </Typography>

      <Typography variant='body2' className={classes.content}>
        {DATA.CONTENT}
      </Typography>
    </div>
  );

  return (
    <Container
      className={classes.root}
      style={{ marginTop: first ? '100px' : '50px' }}
    >
      {direction === 'left-right' ? (
        <>
          {renderImgContainer}
          {renderContentContainer}
        </>
      ) : (
        <>
          {renderContentContainer}
          {renderImgContainer}
        </>
      )}
    </Container>
  );
}

export default About;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: theme.palette.common.white,
    height: '100%',
    minHeight: '300px',
    margin: '30px auto',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  imgContainer: {
    margin: '30px',
    width: '60%',
    [theme.breakpoints.down('md')]: {
      width: '90%',
    },
  },
  contentContainer: {
    margin: '30px',
    width: '40%',
    [theme.breakpoints.down('md')]: {
      width: '90%',
    },
  },
  question: {
    fontFamily: 'Zilla Slab',
    color: 'rgba(255,255,255,0.5)',
  },
  content: {
    fontFamily: 'Helvetica',
    marginTop: '20px',
  },
  highlight: {
    color: theme.palette.secondary.main,
    fontSize: '2.5rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.5rem',
    },
  },
  img: {
    width: '100%',
    height: 'auto',
  },
}));
