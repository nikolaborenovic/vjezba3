import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useState } from 'react';
import { useOrderStore } from '../../store/order.store';

export const Notification = () => {
    const {dialogContent, setDialogContent} = useOrderStore();

  

  const handleClose = () => {
    setDialogContent({
        isVisible: false,
        message: '',
        severity: 'info'
    })
  };

  return (
    <Snackbar open={dialogContent.isVisible} autoHideDuration={2000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={dialogContent.severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {dialogContent.message}
        </Alert>
      </Snackbar>
  );
}