import { Button, Box } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';

import { Header } from '../components/Header';
import { CardList } from '../components/CardList';
import { api } from '../services/api';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';

interface AxiosResponse {
  data: Image[],
  after: string | null
}

type Image = {
  id: string,
  title: string,
  url: string,
  description: string,
  ts: number,
}

export default function Home(): JSX.Element {
  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    'images', async ({ pageParam = null }) => {
      const {data} = await api.get('/images', { params: { after: pageParam } })
      return data
    }, {
    getNextPageParam: nextPage => nextPage.after ?? null
  }

  );

  const formattedData = useMemo(() => {
    return data?.pages.flatMap(page => page.data)
  }, [data]);

  //if (isLoading) return <Loading />
  //if (isError) return <Error />

  return (
    <>
      <Header />

      <Box maxW={1120} px={20} mx="auto" my={20}>
        <CardList cards={formattedData} />

        {hasNextPage && (
          <Button 
            disabled={isFetchingNextPage}
            onClick={() => fetchNextPage()}>
            {
              isFetchingNextPage ? 'Carregando' : 'Carregar mais...'
            }
          </Button>
        )}
      </Box>
    </>
  );
}
