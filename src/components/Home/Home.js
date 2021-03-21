import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { createProduct, deleteProduct } from '../../redux/products/productAction';
import ProductList from '../ProductList/ProductList';
import './Home.css'
const Home = (props) => {

    console.log(props);
    const {products, createProduct, deleteProduct} = props;

    const [item, setItem] = useState({
        name : '',
        price : '',
        uom : '',
        type : ''
    })

    const handleBlur = (event) => {
        let vlaidForm = true;
        if(vlaidForm){
            const itemInfo = {...item};
            itemInfo[event.target.name] = event.target.value;
            setItem(itemInfo);
        }
    }

    const handleSaveProduct = (event) => {
        event.preventDefault();
        createProduct(item);
        document.getElementById('name').value = '';
        document.getElementById('price').value = '';
        document.getElementById('uom').value = '';
        document.getElementById('type').value = '';
    }

    console.log(item);

    return (
        <div className='container'>
            <div className='item-create'>
                <h3 className='my-5'>Create Item</h3>
                <form>
                    <div className='form-group'>
                        <input type='text' name ='name' id='name' placeholder='Enter Item Name' onBlur={handleBlur} className='form-control' required/>
                    </div>

                    <div className='form-group'>
                        <input type='number' name ='price' id='price' placeholder='Enter Item Price' onBlur={handleBlur} className='form-control' required/>
                    </div>

                    <div className='form-group'>
                        <input type='text' name ='uom' id='uom' placeholder='Enter Item UOM' onBlur={handleBlur} className='form-control' required/>
                    </div>

                    <div className='form-group'>
                        <input type='text' name ='type' id='type' placeholder='Enter Item Type' onBlur={handleBlur} className='form-control' required/>
                    </div>

                    <div className='form-group'>
                        <Button variant='success' onClick={handleSaveProduct}>
                            Save
                        </Button>
                    </div>
                </form>
            </div>
            {
                products.length > 0 && <div className='item-list'>
                <h3 className='my-5'>Item List</h3>
                <table align='center'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>UOM</th>
                            <th>Type</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                        {
                            products.map(product => <ProductList key={product.id} product={product} deleteProduct={deleteProduct}></ProductList>)
                        }
                </table>
            </div>
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        products : state.products.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProduct : (name, price, uom, type) => dispatch(createProduct(name, price, uom, type)),
        deleteProduct : (id) => dispatch(deleteProduct(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

