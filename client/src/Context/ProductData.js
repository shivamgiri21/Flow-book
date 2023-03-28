import React, { createContext, useState } from "react";

export const ProductDataContext = createContext();

export const ProductDataProvider = (props) => {
    const [productDataState, setProductDataState] = useState([]);

    return (
        <ProductDataContext.Provider value={[productDataState, setProductDataState]}>
            {props.children}
        </ProductDataContext.Provider>
    );
};