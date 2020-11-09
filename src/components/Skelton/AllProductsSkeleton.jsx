const skeletonTextWidth = ['w-3/6', 'w-5/6', 'w-3/12', 'w-1/2'];

const AllProductsSkeleton = () => {
  return (
    <section className='text-gray-700 body-font'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-wrap -m-4'>
          {skeletonTextWidth.map((_, i) => (
            <div key={i} className='lg:w-1/4 md:w-1/2 p-4 w-full animate-pulse'>
              <div className='transform duration-300 hover:scale-105 shadow-md p-4'>
                <div className='block relative h-48 rounded overflow-hidden'>
                  <div
                    alt='ecommerce'
                    className='object-cover object-center w-full h-full block bg-gray-400'
                  />
                </div>
                <div className='mt-4 space-y-4'>
                  <div className='h-4 bg-gray-400 rounded w-full'></div>
                  <div className='h-4 bg-gray-400 rounded w-5/6'></div>
                  <div className='h-4 bg-gray-400 rounded w-3/12'></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProductsSkeleton;
