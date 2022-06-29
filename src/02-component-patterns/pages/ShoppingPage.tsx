import { ProductCard } from '../components';
import { products } from '../data/products';
import '../styles/custom-styles.css';

export const ShoppingPage = () => {

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <ProductCard
        key={products[0].id}
        product={products[0]}
        className='bg-dark'
        style={{
          backgroundColor: 'teal'
        }}
        initialValues={{
          count: 4,
          maxCount: 10
        }}
      >
        {
          ({ count, maxCount, isMaxCountReached, reset, increaseBy }) => {
            return (
              <>
                <ProductCard.Image className='product-card-image' />
                <ProductCard.Title className='product-card-title' />
                <ProductCard.Buttons className='product-card-button' style={{ justifyContent: 'flex-end' }} />

                <button onClick={reset}>Reset</button>
                <button onClick={() => increaseBy(-2)}>-2</button>
                {
                  !isMaxCountReached && <button onClick={() => increaseBy(2)}>+2</button>
                }
                <span>{count} - {maxCount}</span>
              </>
            )
          }
        }
      </ProductCard>
    </div>
  )
}
