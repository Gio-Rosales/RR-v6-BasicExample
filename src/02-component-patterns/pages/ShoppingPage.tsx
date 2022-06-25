import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../components';
import '../styles/custom-styles.css';

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: "./coffee-mug.png"
}

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{
        display: 'flex',
        flexWrap: 'wrap'
      }}>

        <ProductCard product={product} className='bg-dark' style={{
          backgroundColor: 'teal'
        }}>
          <ProductCard.Image className='product-card-image'  />
          <ProductCard.Title className='product-card-title'/>
          <ProductCard.Buttons className='product-card-button' style={{justifyContent: 'flex-end'}} />
        </ProductCard>

        <ProductCard 
          product={product}
          className='bg-dark'
        >
          <ProductTitle className='product-card-title' style={{fontWeight: 'bold'}} />
          <ProductImage className='product-card-image' style={{padding: '1rem', boxSizing:'border-box'}}/>
          <ProductButtons className='product-card-button' style={{justifyContent: 'center'}}/>
        </ProductCard>
      </div>
    </div>
  )
}
