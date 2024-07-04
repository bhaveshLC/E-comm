import React,{createContext, useEffect, useState} from 'react'
export const Context= createContext(null);

const ContextProvider = (props)  =>{
    const [all_product, setAllProduct] = useState([]);
    const getDefaultCart = () => {
      let cart = {};
      for (let i = 0; i < all_product.length; i++) {
        cart[i] = 0;
      }
      return cart;
    };
    const [cartItems, setCartItems] = useState(getDefaultCart());
  
    
  
    const addToCart = (itemId) => {
        setCartItems((prev) => {
          if (prev.hasOwnProperty(itemId)) {
            return { ...prev, [itemId]: prev[itemId] + 1 };
          } else {
            return { ...prev, [itemId]: 1 };
          }
        });
      };
      
    const removeFromCart = (itemId) => {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const handleOrder= () => {
      setTimeout(()=> {
        setCartItems(getDefaultCart())},
      2000)
    }
    const getTotalCartAmount = () => {
      let totalAmount = 0;
      for (const item in cartItems) {
        if (cartItems[item] > 0) {
          let itemInfo = all_product.find((product) => product.id === Number(item));
          totalAmount += itemInfo.price * cartItems[item];
        }
      }
      return totalAmount;
    };
  
    const getTotalCartItems = () => {
      let totalItem = 0;
      for (const item in cartItems) {
        if (cartItems[item] > 0) {
          totalItem += cartItems[item];
        }
      }
      return totalItem;
    };
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const jwtToken = localStorage.getItem('jwtToken'); // Retrieve JWT token from local storage
          const response = await fetch('http://localhost:3001/api/user/products', {
            method: 'GET', // Specify the HTTP method (GET in this case)
            headers: {
              'Content-Type': 'application/json', // Set the content type header if needed
              Authorization: `Bearer ${jwtToken}`, // Add your JWT token in the Authorization header
            },
          });
    
          if (!response.ok) {
            throw new Error('Failed to fetch product data');
          }
    
          const data = await response.json();
          setAllProduct(data);
        } catch (error) {
          console.error('Error fetching product data:', error);
        }
      };
    
      fetchData();
    }, []);
    
    
    useEffect(()=>{
    },
     [cartItems]); 

    const contextValue= {all_product,cartItems, handleOrder,addToCart,removeFromCart, getTotalCartAmount,getTotalCartItems};
    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider;