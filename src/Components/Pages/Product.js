import React from "react";
import { useParams } from "react-router-dom";
import Onee from "./Bypages/Onee";
import Two from "./Bypages/Two";
import Three from "./Bypages/Three";
import Four from "./Bypages/Four";

const Product = () => {
    const params = useParams();

    let content;

    switch (params.productId) {
        case '1':
            content = <Onee />;
            break;
        case '2':
            content = <Two />;
            break;
        case '3':
            content = <Three />;
            break;
        case '4':
            content = <Four />;
            break;
        default:
            content = <p>Product Images and Reviews...</p>;
            break;
    }

    return (
        <div>
            {content}
        </div>
    );
}

export default Product;
