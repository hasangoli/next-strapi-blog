const Content = () => {
  return (
    <section className='container my-8'>
      <div className='flex items-center justify-center group'>
        <div className='w-[4rem] h-[1px] me-3 bg-primary group-hover:w-[8rem] transition-all duration-500'></div>
        <h2 className='text-center text-3xl text-primary font-bold uppercase'>
          Recent Blogs
        </h2>
        <div className='w-[4rem] h-[1px] ms-3 bg-primary group-hover:w-[8rem] transition-all duration-500'></div>
      </div>
      <h1>CONTENT</h1>
    </section>
  );
};

export default Content;
