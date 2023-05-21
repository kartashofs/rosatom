import '@fullcalendar/common/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import '@fullcalendar/list/main.css';
import '@fullcalendar/timeline/main.css';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Head from 'next/head';
import Calendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';
import timelinePlugin from '@fullcalendar/timeline';
import { Box, Card, Container, Stack, useMediaQuery } from '@mui/material';
import { usePageView } from '../../hooks/use-page-view';
import { Layout as DashboardLayout } from '../../layouts/dashboard';
import { CalendarEventDialog } from '../../sections/dashboard/calendar/calendar-event-dialog';
import { CalendarToolbar } from '../../sections/dashboard/calendar/calendar-toolbar';
import { CalendarContainer } from '../../sections/dashboard/calendar/calendar-container';
import { useDispatch, useSelector } from '../../store';
import { thunks } from '../../thunks/calendar';

const useEvents = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.calendar.events);

  const getEvents = useCallback(() => {
    dispatch(thunks.getEvents());
  }, [dispatch]);

  useEffect(
    () => {
      getEvents();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return events;
};

const useCurrentEvent = (dialog, events) => {
  return useMemo(() => {
    if (!dialog.data) {
      return undefined;
    }

    return events.find((event) => event.id === dialog.data.eventId);
  }, [dialog, events]);
};

const Page = () => {
  const dispatch = useDispatch();
  const calendarRef = useRef(null);
  const events = useEvents();
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState(mdUp ? 'timeGridDay' : 'dayGridMonth');
  const [dialog, setDialog] = useState({
    isOpen: false,
    data: undefined,
  });
  const currentEvent = useCurrentEvent(dialog, events);

  usePageView();

  const handleScreenResize = useCallback(() => {
    const calendarEl = calendarRef.current;

    if (calendarEl) {
      const calendarApi = calendarEl.getApi();
      const newView = mdUp ? 'dayGridMonth' : 'timeGridDay';

      calendarApi.changeView(newView);
      setView(newView);
    }
  }, [calendarRef, mdUp]);

  useEffect(
    () => {
      handleScreenResize();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [mdUp],
  );

  const handleViewChange = useCallback((view) => {
    const calendarEl = calendarRef.current;

    if (calendarEl) {
      const calendarApi = calendarEl.getApi();

      calendarApi.changeView(view);
      setView(view);
    }
  }, []);

  const handleDateToday = useCallback(() => {
    const calendarEl = calendarRef.current;

    if (calendarEl) {
      const calendarApi = calendarEl.getApi();

      calendarApi.today();
      setDate(calendarApi.getDate());
    }
  }, []);

  const handleDatePrev = useCallback(() => {
    const calendarEl = calendarRef.current;

    if (calendarEl) {
      const calendarApi = calendarEl.getApi();

      calendarApi.prev();
      setDate(calendarApi.getDate());
    }
  }, []);

  const handleDateNext = useCallback(() => {
    const calendarEl = calendarRef.current;

    if (calendarEl) {
      const calendarApi = calendarEl.getApi();

      calendarApi.next();
      setDate(calendarApi.getDate());
    }
  }, []);

  const handleAddClick = useCallback(() => {
    setDialog({
      isOpen: true,
    });
  }, []);

  const handleRangeSelect = useCallback((arg) => {
    const calendarEl = calendarRef.current;

    if (calendarEl) {
      const calendarApi = calendarEl.getApi();

      calendarApi.unselect();
    }

    setDialog({
      isOpen: true,
      data: {
        range: {
          start: arg.start.getTime(),
          end: arg.end.getTime(),
        },
      },
    });
  }, []);

  const handleEventSelect = useCallback((arg) => {
    setDialog({
      isOpen: true,
      data: {
        eventId: arg.event.id,
      },
    });
  }, []);

  const handleEventResize = useCallback(
    async (arg) => {
      const { event } = arg;

      try {
        await dispatch(
          thunks.updateEvent({
            eventId: event.id,
            update: {
              allDay: event.allDay,
              start: event.start?.getTime(),
              end: event.end?.getTime(),
            },
          }),
        );
      } catch (err) {
        console.error(err);
      }
    },
    [dispatch],
  );

  const handleEventDrop = useCallback(
    async (arg) => {
      const { event } = arg;

      try {
        await dispatch(
          thunks.updateEvent({
            eventId: event.id,
            update: {
              allDay: event.allDay,
              start: event.start?.getTime(),
              end: event.end?.getTime(),
            },
          }),
        );
      } catch (err) {
        console.error(err);
      }
    },
    [dispatch],
  );

  const handleCloseDialog = useCallback(() => {
    setDialog({
      isOpen: false,
    });
  }, []);

  return (
    <>
      <Head>
        <title>Dashboard: Calendar | AtomAnalytics</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <CalendarToolbar
              date={date}
              onAddClick={handleAddClick}
              onDateNext={handleDateNext}
              onDatePrev={handleDatePrev}
              onDateToday={handleDateToday}
              onViewChange={handleViewChange}
              view={view}
            />
            <Card>
              <CalendarContainer>
                <Calendar
                  allDayMaintainDuration
                  dayMaxEventRows={3}
                  droppable
                  editable
                  eventClick={handleEventSelect}
                  eventDisplay="block"
                  eventDrop={handleEventDrop}
                  eventResizableFromStart
                  eventResize={handleEventResize}
                  events={events}
                  headerToolbar={false}
                  height={800}
                  initialDate={date}
                  initialView={view}
                  plugins={[
                    dayGridPlugin,
                    interactionPlugin,
                    listPlugin,
                    timeGridPlugin,
                    timelinePlugin,
                  ]}
                  ref={calendarRef}
                  rerenderDelay={10}
                  select={handleRangeSelect}
                  selectable
                  weekends
                />
              </CalendarContainer>
            </Card>
          </Stack>
        </Container>
      </Box>
      <CalendarEventDialog
        event={currentEvent}
        onAddComplete={handleCloseDialog}
        onClose={handleCloseDialog}
        onDeleteComplete={handleCloseDialog}
        onEditComplete={handleCloseDialog}
        open={dialog.isOpen}
        range={dialog.data?.range}
      />
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
