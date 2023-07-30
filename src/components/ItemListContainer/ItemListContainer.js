import React from "react";

const ItemListContainer = ({ greeting }) => {
    return (
      <div className="item-list-container">
        <h2>{greeting}</h2>
         
        {/* Otros elementos del contenedor si los hubiera */}
      </div>
    );
};

export default ItemListContainer