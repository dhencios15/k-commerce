const Products = ({ product }) => {
  return (
    <div className='lg:w-1/4 md:w-1/2 p-4 w-full shadow-lg'>
      <a className='block relative h-48 rounded overflow-hidden'>
        <img
          alt='ecommerce'
          className='object-cover object-center w-full h-full block'
          src={product.imageCover}
        />
      </a>
      <div className='mt-4'>
        <h3 className='text-gray-500 text-xs tracking-widest title-font mb-1'>
          {product.category.name}
        </h3>
        <h2 className='text-gray-900 title-font text-lg font-medium'>
          {product.name}
        </h2>
        <p className='mt-1'>₱{product.price}</p>
      </div>
    </div>
  );
};

export default Products;
