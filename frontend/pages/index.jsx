import Carousel from '@/components/Home/Carousel';
import articleSlice from '@/features/articleSlice';
import fetcher from '@/lib/fetcher';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import useSWR from 'swr';

const Home = ({ initialData }) => {
  const dispatch = useDispatch();

  const { data, error, isLoading } = useSWR(
    // `${process.env.NEXT_PUBLIC_API_URL}/articles?populate=category&populate=cover&populate=author`,
    `http://127.0.0.1:3000/articles?populate=category&populate=cover&populate=author`,
    fetcher,
    { initialData: initialData }
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  if (data) {
    dispatch(articleSlice.actions.setArticles(data?.data));
    console.log(data?.data);
  }

  return (
    <main>
      <Carousel slides={data?.data?.slice(0, 3)} />
    </main>
  );
};

export const getStaticProps = async () => {
  const response = await axios(`${process.env.NEXT_PUBLIC_API_URL}/articles`);
  const data = await response.data;

  return {
    props: {
      initialData: data,
    },
  };
};

export default Home;
