import React from "react";
import { useParams } from "react-router-dom";

const ProductScreen = () => {
    const { id: ProducId } = useParams()
  return <div>{ProducId}</div>;
};

export default ProductScreen;
