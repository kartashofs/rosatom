import PropTypes from 'prop-types';
import DotsHorizontalIcon from '@untitled-ui/icons-react/build/esm/DotsHorizontal';
import Mail01Icon from '@untitled-ui/icons-react/build/esm/Mail01';
import User01Icon from '@untitled-ui/icons-react/build/esm/User01';
import {
  Avatar,
  Button,
  Card,
  CardContent,
  IconButton,
  InputAdornment,
  Stack,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material';
import { Scrollbar } from '../../../components/scrollbar';
import { SeverityPill } from '../../../components/severity-pill';

export const AccountTeamSettings = (props) => {
  const { members } = props;

  return (
    <Card>
      <CardContent>
        <Grid container spacing={3}>
          <Grid xs={12} md={4}>
            <Stack spacing={1}>
              <Typography variant="h6">Invite members</Typography>
              <Typography color="text.secondary" variant="body2">
                You currently pay for 2 Editor Seats.
              </Typography>
            </Stack>
          </Grid>
          <Grid xs={12} md={8}>
            <Stack alignItems="center" direction="row" spacing={3}>
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon>
                        <Mail01Icon />
                      </SvgIcon>
                    </InputAdornment>
                  ),
                }}
                label="Email address"
                name="email"
                sx={{ flexGrow: 1 }}
                type="email"
              />
              <Button variant="contained">Send Invite</Button>
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
      <Scrollbar>
        <Table sx={{ minWidth: 400 }}>
          <TableHead>
            <TableRow>
              <TableCell>Member</TableCell>
              <TableCell>Role</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {members.map((member, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Stack alignItems="center" direction="row" spacing={1}>
                    <Avatar
                      src={member.avatar}
                      sx={{
                        height: 40,
                        width: 40,
                      }}
                    >
                      <SvgIcon>
                        <User01Icon />
                      </SvgIcon>
                    </Avatar>
                    <div>
                      <Typography variant="subtitle2">{member.name}</Typography>
                      <Typography color="text.secondary" variant="body2">
                        {member.email}
                      </Typography>
                    </div>
                  </Stack>
                </TableCell>
                <TableCell>
                  {member.role === 'Owner' ? (
                    <SeverityPill>{member.role}</SeverityPill>
                  ) : (
                    member.role
                  )}
                </TableCell>
                <TableCell align="right">
                  <IconButton>
                    <SvgIcon>
                      <DotsHorizontalIcon />
                    </SvgIcon>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Scrollbar>
    </Card>
  );
};

AccountTeamSettings.propTypes = {
  members: PropTypes.array.isRequired,
};
