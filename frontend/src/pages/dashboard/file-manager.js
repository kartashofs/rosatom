import { useCallback, useEffect, useMemo, useState } from 'react';
import Head from 'next/head';
import Upload01Icon from '@untitled-ui/icons-react/build/esm/Upload01';
import {
  Box,
  Button,
  Container,
  Stack,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material';
import { fileManagerApi } from '../../api/file-manager';
import { useMounted } from '../../hooks/use-mounted';
import { usePageView } from '../../hooks/use-page-view';
import { useSettings } from '../../hooks/use-settings';
import { Layout as DashboardLayout } from '../../layouts/dashboard';
import { FileUploader } from '../../sections/dashboard/file-manager/file-uploader';
import { ItemDrawer } from '../../sections/dashboard/file-manager/item-drawer';
import { ItemList } from '../../sections/dashboard/file-manager/item-list';
import { ItemSearch } from '../../sections/dashboard/file-manager/item-search';
import { StorageStats } from '../../sections/dashboard/file-manager/storage-stats';

const useSearch = () => {
  const [search, setSearch] = useState({
    filters: {
      query: undefined,
    },
    page: 0,
    rowsPerPage: 9,
    sortBy: 'createdAt',
    sortDir: 'desc',
  });

  return {
    search,
    updateSearch: setSearch,
  };
};

const useItems = (search) => {
  const isMounted = useMounted();
  const [state, setState] = useState({
    items: [],
    itemsCount: 0,
  });

  const getItems = useCallback(async () => {
    try {
      const response = await fileManagerApi.getItems(search);

      if (isMounted()) {
        setState({
          items: response.data,
          itemsCount: response.count,
        });
      }
    } catch (err) {
      console.error(err);
    }
  }, [search, isMounted]);

  useEffect(
    () => {
      getItems();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [search],
  );

  const handleDelete = useCallback((itemId) => {
    // api call should be made here, then get the list again
    setState((prevState) => {
      return {
        ...prevState,
        items: prevState.items.filter((item) => item.id !== itemId),
      };
    });
  }, []);

  const handleFavorite = useCallback((itemId, value) => {
    setState((prevState) => {
      return {
        ...prevState,
        items: prevState.items.map((item) => {
          if (item.id === itemId) {
            return {
              ...item,
              isFavorite: value,
            };
          }

          return item;
        }),
      };
    });
  }, []);

  return {
    items: state.items,
    itemsCount: state.itemsCount,
    handleDelete,
    handleFavorite,
  };
};

const Page = () => {
  const settings = useSettings();
  const { search, updateSearch } = useSearch();
  const { items, itemsCount, handleDelete, handleFavorite } = useItems(search);
  const [view, setView] = useState('grid');
  const [itemDrawer, setItemDrawer] = useState({
    isOpen: false,
    data: undefined,
  });
  const [openFileUploader, setOpenFileUploader] = useState(false);

  const currentItem = useMemo(() => {
    if (!itemDrawer.data) {
      return undefined;
    }

    return items.find((item) => item.id === itemDrawer.data);
  }, [items, itemDrawer]);

  usePageView();

  const handleFiltersChange = useCallback(
    (filters) => {
      updateSearch((prevState) => ({
        ...prevState,
        filters,
      }));
    },
    [updateSearch],
  );

  const handleSortChange = useCallback(
    (sortDir) => {
      updateSearch((prevState) => ({
        ...prevState,
        sortDir,
      }));
    },
    [updateSearch],
  );

  const handlePageChange = useCallback(
    (event, page) => {
      updateSearch((prevState) => ({
        ...prevState,
        page,
      }));
    },
    [updateSearch],
  );

  const handleRowsPerPageChange = useCallback(
    (event) => {
      updateSearch((prevState) => ({
        ...prevState,
        rowsPerPage: parseInt(event.target.value, 10),
      }));
    },
    [updateSearch],
  );

  const handleViewChange = useCallback((view) => {
    setView(view);
  }, []);

  const handleDetailsOpen = useCallback((itemId) => {
    setItemDrawer({
      isOpen: true,
      data: itemId,
    });
  }, []);

  const handleDetailsClose = useCallback(() => {
    setItemDrawer({
      isOpen: false,
    });
  }, []);

  const handleUploaderOpen = useCallback(() => {
    setOpenFileUploader(true);
  }, []);

  const handleUploaderClose = useCallback(() => {
    setOpenFileUploader(false);
  }, []);

  const handleDeleteClick = useCallback(
    (itemId) => {
      // This can be triggered from multiple places, ensure drawer is closed.
      setItemDrawer({
        isOpen: false,
      });
      handleDelete(itemId);
    },
    [handleDelete],
  );

  return (
    <>
      <Head>
        <title>Dashboard: File Manager | AtomAnalytics</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={settings.stretch ? false : 'xl'}>
          <Grid
            container
            spacing={{
              xs: 3,
              lg: 4,
            }}
          >
            <Grid xs={12}>
              <Stack direction="row" justifyContent="space-between" spacing={4}>
                <div>
                  <Typography variant="h4">File Manager</Typography>
                </div>
                <Stack alignItems="center" direction="row" spacing={2}>
                  <Button
                    onClick={handleUploaderOpen}
                    startIcon={
                      <SvgIcon>
                        <Upload01Icon />
                      </SvgIcon>
                    }
                    variant="contained"
                  >
                    Upload
                  </Button>
                </Stack>
              </Stack>
            </Grid>
            <Grid xs={12} md={8}>
              <Stack
                spacing={{
                  xs: 3,
                  lg: 4,
                }}
              >
                <ItemSearch
                  onFiltersChange={handleFiltersChange}
                  onSortChange={handleSortChange}
                  onViewChange={handleViewChange}
                  sortBy={search.sortBy}
                  sortDir={search.sortDir}
                  view={view}
                />
                <ItemList
                  items={items}
                  itemsCount={itemsCount}
                  onDelete={handleDeleteClick}
                  onFavorite={handleFavorite}
                  onOpen={handleDetailsOpen}
                  onPageChange={handlePageChange}
                  onRowsPerPageChange={handleRowsPerPageChange}
                  page={search.page}
                  rowsPerPage={search.rowsPerPage}
                  view={view}
                />
              </Stack>
            </Grid>
            <Grid xs={12} md={4}>
              <StorageStats />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <ItemDrawer
        item={currentItem}
        onClose={handleDetailsClose}
        onDelete={handleDeleteClick}
        onFavorite={handleFavorite}
        open={itemDrawer.isOpen}
      />
      <FileUploader onClose={handleUploaderClose} open={openFileUploader} />
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
