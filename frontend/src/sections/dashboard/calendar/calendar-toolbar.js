import { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import ChevronLeftIcon from '@untitled-ui/icons-react/build/esm/ChevronLeft';
import ChevronRightIcon from '@untitled-ui/icons-react/build/esm/ChevronRight';
import PlusIcon from '@untitled-ui/icons-react/build/esm/Plus';
import {
  Button,
  IconButton,
  Stack,
  SvgIcon,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material';

const viewOptions = [
  {
    label: 'Month',
    value: 'dayGridMonth',
  },
  {
    label: 'Week',
    value: 'timeGridWeek',
  },
  {
    label: 'Day',
    value: 'timeGridDay',
  },
  {
    label: 'Agenda',
    value: 'listWeek',
  },
];

export const CalendarToolbar = (props) => {
  const {
    date,
    onAddClick,
    onDateNext,
    onDatePrev,
    onDateToday,
    onViewChange,
    view,
    ...other
  } = props;
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));

  const handleViewChange = useCallback(
    (event) => {
      onViewChange?.(event.target.value);
    },
    [onViewChange],
  );

  const dateMonth = format(date, 'MMMM');
  const dateDay = format(date, 'y');

  // On mobile allow only timeGridDay and agenda views

  const availableViewOptions = useMemo(() => {
    return mdUp
      ? viewOptions
      : viewOptions.filter((option) =>
          ['timeGridDay', 'listWeek'].includes(option.value),
        );
  }, [mdUp]);

  return (
    <Stack
      alignItems="center"
      flexWrap="wrap"
      justifyContent="space-between"
      flexDirection={{
        xs: 'column',
        md: 'row',
      }}
      spacing={3}
      sx={{ px: 3 }}
      {...other}
    >
      <Stack alignItems="center" direction="row" spacing={1}>
        <Typography variant="h5">{dateMonth}</Typography>
        <Typography sx={{ fontWeight: 400 }} variant="h5">
          {dateDay}
        </Typography>
      </Stack>
      <Stack alignItems="center" direction="row" spacing={1}>
        <IconButton onClick={onDatePrev}>
          <SvgIcon>
            <ChevronLeftIcon />
          </SvgIcon>
        </IconButton>
        <IconButton onClick={onDateNext}>
          <SvgIcon>
            <ChevronRightIcon />
          </SvgIcon>
        </IconButton>
        <TextField
          label="View"
          name="view"
          onChange={handleViewChange}
          select
          SelectProps={{ native: true }}
          size="small"
          sx={{
            minWidth: 120,
            order: {
              xs: -1,
              md: 0,
            },
          }}
          value={view}
        >
          {availableViewOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <Button
          onClick={onAddClick}
          startIcon={
            <SvgIcon>
              <PlusIcon />
            </SvgIcon>
          }
          sx={{
            width: {
              xs: '100%',
              md: 'auto',
            },
          }}
          variant="contained"
        >
          New Event
        </Button>
      </Stack>
    </Stack>
  );
};

CalendarToolbar.propTypes = {
  children: PropTypes.node,
  date: PropTypes.instanceOf(Date).isRequired,
  onAddClick: PropTypes.func,
  onDateNext: PropTypes.func,
  onDatePrev: PropTypes.func,
  onDateToday: PropTypes.func,
  onViewChange: PropTypes.func,
  view: PropTypes.oneOf([
    'dayGridMonth',
    'timeGridWeek',
    'timeGridDay',
    'listWeek',
  ]).isRequired,
};
