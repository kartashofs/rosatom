import Lock01Icon from '@untitled-ui/icons-react/build/esm/Lock01';
import User01Icon from '@untitled-ui/icons-react/build/esm/User01';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  Stack,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material';
import { SeverityPill } from '../../../components/severity-pill';

export const DetailList2 = () => (
  <Box
    sx={{
      backgroundColor: (theme) =>
        theme.palette.mode === 'dark' ? 'neutral.800' : 'neutral.100',
      p: 3,
    }}
  >
    <Card>
      <CardHeader title="Contact Details" />
      <Divider />
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>
              <Typography variant="subtitle2">Email</Typography>
            </TableCell>
            <TableCell>
              <Typography color="text.secondary" variant="body2">
                miron.vitold@atomanalytics.ru
              </Typography>
              <SeverityPill color="success">Email verified</SeverityPill>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography variant="subtitle2">Phone</Typography>
            </TableCell>
            <TableCell>
              <Typography color="text.secondary" variant="body2">
                +55 748 327 439
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography variant="subtitle2">Country</Typography>
            </TableCell>
            <TableCell>
              <Typography color="text.secondary" variant="body2">
                USA
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography variant="subtitle2">State/Region</Typography>
            </TableCell>
            <TableCell>
              <Typography color="text.secondary" variant="body2">
                New York
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography variant="subtitle2">Address 1</Typography>
            </TableCell>
            <TableCell>
              <Typography color="text.secondary" variant="body2">
                Street John Wick, no. 7
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography variant="subtitle2">Address 2</Typography>
            </TableCell>
            <TableCell>
              <Typography color="text.secondary" variant="body2">
                House #25
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Stack alignItems="flex-start" spacing={1} sx={{ p: 1 }}>
        <Button
          color="inherit"
          startIcon={
            <SvgIcon>
              <Lock01Icon />
            </SvgIcon>
          }
        >
          Reset &amp; Send Password
        </Button>
        <Button
          color="inherit"
          startIcon={
            <SvgIcon>
              <User01Icon />
            </SvgIcon>
          }
        >
          Login as Customer
        </Button>
      </Stack>
    </Card>
  </Box>
);
