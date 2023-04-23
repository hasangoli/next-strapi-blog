import axios from 'axios';
import { useEffect, useState } from 'react';
import BlogItem from '../Global/BlogItem';

const Content = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      axios(
        `${process.env.NEXT_PUBLIC_API_URL}/articles?sort=date:desc&populate=*`
      )
        .then(res => res.data)
        .then(data => setArticles(data?.data))
        .catch(err => console.log(err));
    };

    getArticles();
  }, []);

  return (
    <section className='container my-16'>
      <div className='flex items-center justify-center group'>
        <div className='w-[4rem] h-[1px] me-3 bg-primary group-hover:w-[8rem] transition-all duration-500'></div>
        <h2 className='text-center text-xl md:text-3xl text-primary font-bold uppercase'>
          Recent Blogs
        </h2>
        <div className='w-[4rem] h-[1px] ms-3 bg-primary group-hover:w-[8rem] transition-all duration-500'></div>
      </div>

      <div className='mt-16'>
        <div class='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-4'>
          {articles?.slice(0, 1).map(article => (
            <BlogItem item={article} key={article.id} />
          ))}
          <div>hello</div>
          {articles?.slice(1).map(article => (
            <BlogItem item={article} key={article.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Content;
