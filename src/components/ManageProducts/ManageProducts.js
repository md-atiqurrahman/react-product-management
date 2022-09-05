import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleDelete = id => {
        const url = `http://localhost:5000/products/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                const proceed = window.confirm('Are you sure');
                if (proceed) {
                    if (data.deletedCount > 0) {
                        const remaining = products.filter(product => product._id !== id);
                        setProducts(remaining);
                    }
                }
            })
    }

    return (
        <div className='w-50 mx-auto text-center'>
            <h2>Available products: {products.length}</h2>
            {
                products.map(product => <h5 key={product._id}>{product.productName}
                    <Link to={`/update/${product._id}`}><button>update</button></Link>
                    <button onClick={() => handleDelete(product._id)}>X</button></h5>)
            }
        </div>
    );
};

export default ManageProducts;