import React from 'react';
import { Alert, Button, SxProps } from '@mui/material';

type ErrorAlertProps = {
  message: string;
  action?: () => {};
  sx?: SxProps;
};

const ErrorAlert = ({ message, action, sx }: ErrorAlertProps) => {
  return (
    <Alert
      sx={sx}
      severity="error"
      action={
        action ? (
          <Button color="secondary" onClick={() => action()}>
            Retry
          </Button>
        ) : null
      }
    >
      {message}
    </Alert>
  );
};

export default ErrorAlert;
