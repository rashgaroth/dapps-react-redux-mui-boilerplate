/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import { Backdrop, Box, Fade, Grid, IconButton, Modal, Stack, Typography } from '@mui/material';
import { Close } from '@mui/icons-material';

const modalStyle = {};

const useStyles = makeStyles(_theme => ({
  root: {},
  backdrop: {
    backdropFilter: 'blur(3px)',
    backgroundColor: 'rgba(0,0,30,0.4)',
  },
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: props => props.minWidth || 200,
    maxWidth: props => props.maxWidth || 700,
    width: props => props.width || 500,
    backgroundColor: props => props.backgroundColor || _theme.palette.background.paper,
    border: `1px solid ${_theme.palette.primary[800]}`,
    boxShadow: 24,
    padding: 10,
    borderRadius: _theme.shape.button.large,
  },
}));

function ModalWrapper({ children, open, handleClose, ...others }) {
  // eslint-disable-next-line no-unused-vars
  const classes = useStyles(others);

  return (
    <div>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
          className: classes.backdrop,
        }}
        {...others}>
        <Fade in={open}>
          <Box className={classes.modal}>
            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
              <Grid item width='100%'>
                <Stack direction='row' justifyContent='space-between' alignItems='center'>
                  <Typography variant='h4' color='white' fontWeight='bold'>
                    Connect Modal
                  </Typography>
                  <IconButton onClick={handleClose}>
                    <Close color='white' sx={{ color: 'white' }} />
                  </IconButton>
                </Stack>
              </Grid>
            </Grid>
            {children}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

ModalWrapper.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  children: PropTypes.node,
};

export default ModalWrapper;
