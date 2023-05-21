import { Draggable, Droppable } from 'react-beautiful-dnd';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { useSelector } from '../../../../store';
import { TaskAdd } from '../task-add';
import { TaskCard } from '../task-card';
import { ColumnHeader } from './column-header';

const useColumn = (columnId) => {
  return useSelector((state) => {
    const { columns } = state.kanban;

    return columns.byId[columnId];
  });
};

export const ColumnCard = (props) => {
  const {
    columnId,
    onTaskAdd,
    onTaskOpen,
    onClear,
    onDelete,
    onRename,
    ...other
  } = props;
  const column = useColumn(columnId);

  if (!column) {
    return null;
  }

  const tasksCount = column.taskIds.length;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxHeight: '100%',
        overflowX: 'hidden',
        overflowY: 'hidden',
        width: {
          xs: 300,
          sm: 380,
        },
      }}
      {...other}
    >
      <ColumnHeader
        name={column.name}
        onClear={onClear}
        onDelete={onDelete}
        onRename={onRename}
        tasksCount={tasksCount}
      />
      <Box
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? 'neutral.900' : 'neutral.100',
          borderRadius: 2.5,
        }}
      >
        <Droppable droppableId={column.id} type="task">
          {(droppableProvider) => (
            <Box
              ref={droppableProvider.innerRef}
              sx={{
                flexGrow: 1,
                minHeight: 80,
                overflowY: 'auto',
                px: 3,
                pt: 1.5,
              }}
            >
              {column?.taskIds.map((taskId, index) => (
                <Draggable key={taskId} draggableId={taskId} index={index}>
                  {(draggableProvided, snapshot) => (
                    <Box
                      ref={draggableProvided.innerRef}
                      style={{ ...draggableProvided.draggableProps.style }}
                      sx={{
                        outline: 'none',
                        py: 1.5,
                      }}
                      {...draggableProvided.draggableProps}
                      {...draggableProvided.dragHandleProps}
                    >
                      <TaskCard
                        key={taskId}
                        dragging={snapshot.isDragging}
                        onOpen={() => onTaskOpen?.(taskId)}
                        taskId={taskId}
                      />
                    </Box>
                  )}
                </Draggable>
              ))}
              {droppableProvider.placeholder}
            </Box>
          )}
        </Droppable>
        <Box
          sx={{
            pt: 1.5,
            pb: 3,
            px: 3,
          }}
        >
          <TaskAdd onAdd={onTaskAdd} />
        </Box>
      </Box>
    </Box>
  );
};

ColumnCard.propTypes = {
  columnId: PropTypes.string.isRequired,
  onClear: PropTypes.func,
  onDelete: PropTypes.func,
  onRename: PropTypes.func,
  onTaskAdd: PropTypes.func,
  onTaskOpen: PropTypes.func,
};
