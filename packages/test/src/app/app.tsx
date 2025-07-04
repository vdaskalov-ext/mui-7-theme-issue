// Uncomment this line to use CSS modules
// import styles from './app.module.css';
import {
  Button,
  MenuItem,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
  useTheme,
} from '@mui/material';
import {
  ThemeLanguage,
  Themes,
  UniperThemeProvider,
} from '@uniper/ues-react-style';
import {
  DisableFields,
  DisableFieldsTranslationProvider,
} from '@uniper/ues-sales-portal-components';
import { FC, PropsWithChildren } from 'react';
import { DisabledTheme } from 'style-provider';

export default function App() {
  return (
    <div>
      <UniperThemeProvider
        theme={Themes.UNIPER_LIGHT}
        language={ThemeLanguage.EN}
      >
        <Typography variant="h3">Disabled Theme in local lib works</Typography>

        <DisabledTheme>
          <TestComponents logPrefix={'Disabled Theme local lib'} />
        </DisabledTheme>

        <DisableFieldsTranslationProvider defaultMessage="This field is disabled">
          <DisableFields rules={[{ disabled: true }]}>
            <Typography variant="h3">
              Disabled Theme from an exxternal lib
            </Typography>
            <TestComponents logPrefix={'DisableFields'} />
          </DisableFields>
        </DisableFieldsTranslationProvider>

        <DisableFieldsTranslationProvider defaultMessage="This field is disabled">
          <DisableFields rules={[{ disabled: true }]}>
            <ReinitTheme>
              <Typography variant="h3">ReinitTheme ThemeProvider</Typography>
              <TestComponents logPrefix={'ReinitTheme'} />
            </ReinitTheme>
          </DisableFields>
        </DisableFieldsTranslationProvider>
      </UniperThemeProvider>
    </div>
  );
}

const TestComponents: FC<{ logPrefix: string }> = ({ logPrefix }) => {
  const theme = useTheme();
  console.log(`Current theme ${logPrefix}:`, theme);
  return (
    <Stack spacing={2} margin="20px">
      <Button
        onClick={() => {
          console.log('Button clicked');
        }}
      >
        Test
      </Button>
      <TextField
        value="test"
        label="Input"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
      <TextField
        value="test"
        select
        label="Select"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      >
        <MenuItem value="test">Test</MenuItem>
        <MenuItem value="2">Option 2</MenuItem>
        <MenuItem value="3">Option 3</MenuItem>
      </TextField>
    </Stack>
  );
};

const ReinitTheme: FC<PropsWithChildren> = ({ children }) => {
  const theme = useTheme();
  console.log(`Reinit theme:`, theme);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
