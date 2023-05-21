import { useState } from 'react';
import { format, subDays, subHours, subMinutes } from 'date-fns';
import Mail01Icon from '@untitled-ui/icons-react/build/esm/Mail01';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';

const now = new Date();

const emails = [
  {
    id: '5ece2ce3613486d95ffaea58',
    createdAt: subDays(subHours(subMinutes(now, 34), 5), 3).getTime(),
    description: 'Order confirmation',
  },
  {
    id: '5ece2ce8cebf7ad1d100c0cd',
    createdAt: subDays(subHours(subMinutes(now, 49), 11), 4).getTime(),
    description: 'Order confirmation',
  },
];

const emailOptions = [
  'Resend last invoice',
  'Send password reset',
  'Send verification',
];

export const DetailList4 = () => {
  const [emailOption, setEmailOption] = useState(emailOptions[0]);

  return (
    <Box
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? 'neutral.800' : 'neutral.100',
        p: 3,
      }}
    >
      <Card>
        <CardHeader title="Emails" />
        <Divider />
        <CardContent>
          <TextField
            fullWidth
            name="option"
            onChange={(event) => setEmailOption(event.target.value)}
            select
            SelectProps={{ native: true }}
            value={emailOption}
            variant="outlined"
          >
            {emailOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </TextField>
          <Box sx={{ mt: 2 }}>
            <Button
              startIcon={
                <SvgIcon>
                  <Mail01Icon />
                </SvgIcon>
              }
              variant="contained"
            >
              Send email
            </Button>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Table>
              <TableBody>
                {emails.map((email) => {
                  const createdAt = format(
                    email.createdAt,
                    'dd/MM/yyyy | HH:mm',
                  );

                  return (
                    <TableRow key={email.id}>
                      <TableCell>
                        <Typography variant="subtitle2">
                          {email.description}
                        </Typography>
                      </TableCell>
                      <TableCell>{createdAt}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
