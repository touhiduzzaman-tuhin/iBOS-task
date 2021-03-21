import React from 'react';
import { Button } from 'react-bootstrap';

const ProductList = (props) => {
    console.log(props)
    const {product, deleteProduct} = props;
    const {name, price, uom, type, id} = product;
    return (
        <tbody>
            <tr>
                <td>{name}</td>
                <td>{price}</td>
                <td>{uom}</td>
                <td>{type}</td>
                <td>
                    <Button variant='danger' onClick={() => deleteProduct(id)}>
                        Delete
                    </Button>
                </td>
            </tr>
        </tbody>
    );
};

export default ProductList;