import React, { useState, createContext } from "react";

export const CartContent = createContext({}); //inicia vazio

export default function CartProvider({children}) {
    
    const [cartList, setCartList] = useState([]);
    const [totalCarrinho, setTotalCarrinho] = useState(0);

    function addCart(cartObj) {
      // -1 quando não tem o item passado na lista, se for diferente de -1 quer dizer que existe o item na lista  
      const indexCart = cartList.findIndex(item => item.id == cartObj.id); 

      if(indexCart != -1) {
        //Se ele existe precisa add quantidade no item
        let list = cartList;
        list[indexCart].quantity = list[indexCart].quantity + 1;
        
        list[indexCart].total = list[indexCart].quantity * list[indexCart].price;

        setCartList(list); 
        totalResultCart(list);
        console.log(cartList);
        return;
      } else {

      let data = {
        ...cartObj,
        quantity: 1,
        total: cartObj.price
      }
     
      // cartObj.quantity = 1;
      // cartObj.total = cartObj.quantity * cartObj.price;

      setCartList(items => [...items, data]);  
      totalResultCart([...cartList, data]);
      return;
      }
    }

    function subCart(cartObj) {
      // -1 quando não tem o item passado na lista, se for diferente de -1 quer dizer que existe o item na lista  
      const indexCart = cartList.findIndex(item => item.id == cartObj.id); 

      if(indexCart !== -1) {
    
        if (cartList[indexCart]?.quantity > 1) {
          let list = cartList; 
        
          list[indexCart].quantity = list[indexCart].quantity - 1;
          list[indexCart].total = list[indexCart].quantity * list[indexCart].price;

          setCartList(list); 
          totalResultCart(list);
          return;
        } else {

        // if(cartList[indexCart]?.quantity == 1) {
          
          const newList = cartList.filter((item) => item.id != cartObj.id);
          
          setCartList(newList);
          totalResultCart(newList);
          return;
         
        }
        // }
       
      } 

    }

    function totalResultCart(items) {
      let itemsCarrinho = items;
      let result = itemsCarrinho.reduce((acc, obj) => acc + obj.total , 0); //reduce calcula até chegar em um resultado
      setTotalCarrinho(result);
    }

    return (
        <CartContent.Provider value={{cartList, addCart, subCart, totalCarrinho}}>
            {children}
        </CartContent.Provider>
    );
}
