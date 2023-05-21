import PropTypes from 'prop-types';
import { Box, Stack, Table, TableBody, TablePagination } from '@mui/material';
import { Scrollbar } from '../../../components/scrollbar';
import { ItemListCard } from './item-list-card';
import { ItemListRow } from './item-list-row';

export const ItemList = (props) => {
  const {
    items,
    itemsCount,
    onDelete,
    onFavorite,
    onOpen,
    onPageChange,
    onRowsPerPageChange,
    page,
    rowsPerPage,
    view = 'grid',
  } = props;

  let content;

  if (view === 'grid') {
    content = (
      <Box
        sx={{
          display: 'grid',
          gap: 3,
          gridTemplateColumns: 'repeat(3, 1fr)',
        }}
      >
        {items.map((item) => (
          <ItemListCard
            key={item.id}
            item={item}
            onDelete={onDelete}
            onFavorite={onFavorite}
            onOpen={onOpen}
          />
        ))}
      </Box>
    );
  } else {
    // Negative margin is a fix for the box shadow. The virtual scrollbar cuts it.
    content = (
      <Box sx={{ m: -3 }}>
        <Scrollbar>
          <Box sx={{ p: 3 }}>
            <Table
              sx={{
                minWidth: 600,
                borderCollapse: 'separate',
                borderSpacing: '0 8px',
              }}
            >
              <TableBody>
                {items.map((item) => (
                  <ItemListRow
                    key={item.id}
                    item={item}
                    onDelete={onDelete}
                    onFavorite={onFavorite}
                    onOpen={onOpen}
                  />
                ))}
              </TableBody>
            </Table>
          </Box>
        </Scrollbar>
      </Box>
    );
  }

  return (
    <Stack spacing={4}>
      {content}
      <TablePagination
        component="div"
        count={itemsCount}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[9, 18]}
      />
    </Stack>
  );
};

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
  itemsCount: PropTypes.number.isRequired,
  onDelete: PropTypes.func,
  onFavorite: PropTypes.func,
  onOpen: PropTypes.func,
  onPageChange: PropTypes.func.isRequired,
  onRowsPerPageChange: PropTypes.func,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  view: PropTypes.oneOf(['grid', 'list']),
};
