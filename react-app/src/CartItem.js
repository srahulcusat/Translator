import React from 'react';

const CartItem = (props) => {

    const { price, title, qty } =props.product;
    const { product,
            onIncreaseQuantity, 
            onDecreaseQuantity, 
            onDeleteQuantity 
        } = props;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} src={product.img} />
        </div>
        <div className="right-block">
          <div style={ { fontSize: 25 } }>{title}</div>
          <div style={ { color: '#777' } }>Rs {price} </div>
          <div style={ { color: '#777' } }>Qty: {qty} </div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img 
                alt="increase" 
                className="action-icons" 
                src="https://as2.ftcdn.net/v2/jpg/01/07/62/07/1000_F_107620769_UwNVSoXnKS4VNcOKoZjPohlEPn83oE38.jpg" 
                onClick={()=> onIncreaseQuantity(props.product)}
                />
            <img 
                alt="decrease" 
                className="action-icons" 
                src="https://as1.ftcdn.net/v2/jpg/03/73/49/86/1000_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg" 
                onClick={()=> onDecreaseQuantity(props.product)}
                />
            <img 
                alt="delete" 
                className="action-icons" 
                src="https://t4.ftcdn.net/jpg/01/90/89/15/240_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg" 
                onClick={()=> onDeleteQuantity(props.product.id)}
                />
          </div>
        </div>
      </div>
    );
  
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc'
  }
}

export default CartItem;