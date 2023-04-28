import Carousel from '@/components/Home/Carousel';
import Content from '@/components/Home/Content';
import { getArticles } from '@/features/articleSlice';
import { wrapper } from '@/store';
import { useSelector } from 'react-redux';

const Home = () => {
  const articles = useSelector(state => state.articles);
  console.log('articles: ', articles);

  return (
    <main>
      <Carousel />
      <Content />
    </main>
  );
};

export const getStaticProps = wrapper.getStaticProps(
  store =>
    async ({ preview }) => {
      // axios(`${process.env.NEXT_PUBLIC_API_URL}/articles`)
      //   .then(res => res.data)
      //   .then(data =>
      //     store.dispatch(articleSlice.actions.setArticles(data.data))
      //   )
      //   .catch(err => console.log(err));
      // store.dispatch(
      //   articleSlice.actions.setArticles([
      //     { id: 0, attributes: { title: 'Article No 01' } },
      //   ])
      // );
      store.dispatch(getArticles());
    }
);

export default Home;
