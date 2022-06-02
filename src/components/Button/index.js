/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';

const useStyles = makeStyles(_theme => {
  return {
    root: {
      backgroundColor: props => props.bgColor || _theme.palette.primary[800],
      minHeight: _theme.shape.button.size.medium,
      borderRadius: _theme.shape.button.large,
      boxShadow: _theme.shape.button.large,
    },
  };
});

function ButtonComponent({ variant = 'contained', title = 'Click Me!', ...other }) {
  const classes = useStyles(other);
  return <Button variant={variant} className={classes.root} title={title} {...other} />;
}

ButtonComponent.propTypes = {
  variant: PropTypes.string,
  title: PropTypes.string,
};

export default ButtonComponent;
