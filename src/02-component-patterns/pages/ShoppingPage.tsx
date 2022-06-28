import { ProductCard, ProductButtons, ProductImage } from '../components';
import { products } from '../data/products';
import '../styles/custom-styles.css';
import { useShoppingCart } from '../hooks/useShoppingCart';

export const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart();

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{
        display: 'flex',
        flexWrap: 'wrap'
      }}>
        {products.map((product) => {
          const productCount = shoppingCart[product.id]?.count || 0;
          return (
            <ProductCard
              key={product.id}
              product={product}
              className='bg-dark'
              style={{
                backgroundColor: 'teal'
              }}
              onChange={onProductCountChange}
              value={productCount}
            >
              <ProductCard.Image className='product-card-image' />
              <ProductCard.Title className='product-card-title' />
              <ProductCard.Buttons className='product-card-button' style={{ justifyContent: 'flex-end' }} />
            </ProductCard>
          )
        }
        )}



      </div>

      <div className="shopping-card">
        {
          Object.values(shoppingCart).map((productItem) => (
            <ProductCard key={productItem.id}
              product={productItem}
              className='bg-dark'
              style={{
                width: '100px'
              }}
              onChange={onProductCountChange}
              value={productItem.count}
            >
              <ProductImage className='product-card-image' />
              <ProductButtons className='product-card-button' style={{ justifyContent: 'center' }} />
            </ProductCard>
          ))
        }

      </div>
    </div>
  )
}
