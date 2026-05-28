import { memo } from 'react';

interface GetProductsButtonProps {
  fetchProducts: () => void;
}

const GetProductsButton = memo(({ fetchProducts }: GetProductsButtonProps) => {
  console.log('Rendered Button Component');

  return (
    <button onClick={fetchProducts}>
      Fetch Products
    </button>
  );
});

GetProductsButton.displayName = 'GetProductsButton';

export default GetProductsButton;
