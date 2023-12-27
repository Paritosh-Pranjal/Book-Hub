import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from '@mui/material';
import React from 'react';

const TextField = (props: MuiTextFieldProps) => {
  return (
    <div>
      <MuiTextField {...props}>{props.children} </MuiTextField>
    </div>
  );
};

export default TextField;
