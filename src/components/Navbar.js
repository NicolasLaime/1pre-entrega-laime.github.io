import React from "react";
import CartWidget from "./CartWidget/CartWidget"
import ItemListContainer from "./ItemListContainer/ItemListContainer"

export const NavBar = () => {
    return (
         
        <nav>
        <ul>
     <li><a href="#home">Nosotros</a></li>
     <li><a href="#news">Productos</a></li>
     <li><a href="#contact">Contacto</a></li>
     <li><a class="active" href="#">
        <CartWidget/>
     </a></li></ul>

      
     </nav>
       
       
      
     
     
    );   
    
}