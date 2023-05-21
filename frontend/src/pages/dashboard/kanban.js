import { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import { DragDropContext } from 'react-beautiful-dnd';
import toast from 'react-hot-toast';
import { Box, Stack, Typography } from '@mui/material';
import { usePageView } from '../../hooks/use-page-view';
import { Layout as DashboardLayout } from '../../layouts/dashboard';
import { TaskModal } from '../../sections/dashboard/kanban/task-modal';
import { ColumnCard } from '../../sections/dashboard/kanban/column-card';
import { ColumnAdd } from '../../sections/dashboard/kanban/column-add';
import { useDispatch, useSelector } from '../../store';
import { thunks } from '../../thunks/kanban';

const useColumnsIds = () => {
  const { columns } = useSelector((state) => state.kanban);

  return columns.allIds;
};

const useBoard = () => {
  const dispatch = useDispatch();

  const getBoard = useCallback(() => {
    dispatch(thunks.getBoard());
  }, [dispatch]);

  useEffect(
    () => {
      getBoard();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
};

const Page = () => {
  const dispatch = useDispatch();
  const columnsIds = useColumnsIds();
  const [currentTaskId, setCurrentTaskId] = useState(null);

  usePageView();

  useBoard();

  const handleDragEnd = useCallback(
    async ({ source, destination, draggableId }) => {
      try {
        // Dropped outside the column
        if (!destination) {
          return;
        }

        // Task has not been moved
        if (
          source.droppableId === destination.droppableId &&
          source.index === destination.index
        ) {
          return;
        }

        if (source.droppableId === destination.droppableId) {
          // Moved to the same column on different position
          await dispatch(
            thunks.moveTask({
              taskId: draggableId,
              position: destination.index,
            }),
          );
        } else {
          // Moved to another column
          await dispatch(
            thunks.moveTask({
              taskId: draggableId,
              position: destination.index,
              columnId: destination.droppableId,
            }),
          );
        }
      } catch (err) {
        console.error(err);
        toast.error('Something went wrong!');
      }
    },
    [dispatch],
  );

  const handleColumnAdd = useCallback(
    async (name) => {
      try {
        await dispatch(
          thunks.createColumn({
            name: name || 'Untitled Column',
          }),
        );
        toast.success('Column created');
      } catch (err) {
        console.error(err);
        toast.error('Something went wrong!');
      }
    },
    [dispatch],
  );

  const handleColumnClear = useCallback(
    async (columnId) => {
      try {
        await dispatch(
          thunks.clearColumn({
            columnId,
          }),
        );
        toast.success('Column cleared');
      } catch (err) {
        console.error(err);
        toast.error('Something went wrong!');
      }
    },
    [dispatch],
  );

  const handleColumnDelete = useCallback(
    async (columnId) => {
      try {
        await dispatch(
          thunks.deleteColumn({
            columnId,
          }),
        );
        toast.success('Column deleted');
      } catch (err) {
        console.error(err);
        toast.error('Something went wrong!');
      }
    },
    [dispatch],
  );

  const handleColumnRename = useCallback(
    async (columnId, name) => {
      try {
        await dispatch(
          thunks.updateColumn({
            columnId,
            update: { name },
          }),
        );
      } catch (err) {
        console.error(err);
        toast.error('Something went wrong!');
      }
    },
    [dispatch],
  );

  const handleTaskAdd = useCallback(
    async (columnId, name) => {
      try {
        await dispatch(
          thunks.createTask({
            columnId,
            name: name || 'Untitled Task',
          }),
        );
      } catch (err) {
        console.error(err);
        toast.error('Something went wrong!');
      }
    },
    [dispatch],
  );

  const handleTaskOpen = useCallback((taskId) => {
    setCurrentTaskId(taskId);
  }, []);

  const handleTaskClose = useCallback(() => {
    setCurrentTaskId(null);
  }, []);

  return (
    <>
      <Head>
        <title>Dashboard: Kanban | AtomAnalytics</title>
      </Head>
      <Box
        component="main"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          overflow: 'hidden',
          pt: 8,
        }}
      >
        <Box sx={{ px: 3 }}>
          <Typography variant="h4">Kanban</Typography>
        </Box>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Box
            sx={{
              display: 'flex',
              flexGrow: 1,
              flexShrink: 1,
              overflowX: 'auto',
              overflowY: 'hidden',
              px: 3,
              py: 3,
            }}
          >
            <Stack alignItems="flex-start" direction="row" spacing={3}>
              {columnsIds.map((columnId) => (
                <ColumnCard
                  key={columnId}
                  columnId={columnId}
                  onClear={() => handleColumnClear(columnId)}
                  onDelete={() => handleColumnDelete(columnId)}
                  onRename={(name) => handleColumnRename(columnId, name)}
                  onTaskAdd={(name) => handleTaskAdd(columnId, name)}
                  onTaskOpen={handleTaskOpen}
                />
              ))}
              <ColumnAdd onAdd={handleColumnAdd} />
            </Stack>
          </Box>
        </DragDropContext>
      </Box>
      <TaskModal
        onClose={handleTaskClose}
        open={!!currentTaskId}
        taskId={currentTaskId || undefined}
      />
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
