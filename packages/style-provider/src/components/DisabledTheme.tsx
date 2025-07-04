import { createTheme, ThemeProvider } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

export const DisabledTheme: FC<Required<PropsWithChildren>> = ({
  children,
}) => {
  return (
    <ThemeProvider
      theme={createTheme({
        components: {
          MuiButton: {
            defaultProps: {
              size: 'medium',
              variant: 'outlined',
              disabled: true,
            },
          },
          MuiTextField: {
            defaultProps: {
              disabled: true,
            },
          },
          MuiSelect: {
            defaultProps: {
              disabled: true,
            },
          },
        },
      })}
    >
      {children}
    </ThemeProvider>
  );
};
