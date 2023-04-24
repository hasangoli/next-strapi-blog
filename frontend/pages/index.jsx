import Carousel from "@/components/Home/Carousel";
import Content from "@/components/Home/Content";
import articleSlice from "@/features/articleSlice";
import { wrapper } from "@/store";
import { useDispatch, useSelector } from "react-redux";
// import articleSlice from '@/features/articleSlice';
// import { wrapper } from '@/store';

const Home = () => {
  const data = useSelector((state) => state.articles);
  console.log("data", data);
  return (
    <main>
      <Carousel />
      <Content />
    </main>
  );
};

export const getStaticProps = wrapper.getStaticProps(
  (store) =>
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
      store.dispatch(
        articleSlice.actions.setArticles([
          {
            id: 0,
            attributes: {
              title: "Article No 01",
              cover: { data: { attributes: { url: "" } } },
            },
          },
        ])
      );
    }
);

export default Home;
