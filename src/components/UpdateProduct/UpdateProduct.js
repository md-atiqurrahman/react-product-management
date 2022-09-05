import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';

const UpdateProduct = () => {
    const { productId } = useParams();
    const { register, handleSubmit, reset} = useForm();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/products/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])


    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/products/${productId}`;

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
              if(result){
                  reset();
              }
            })
    }

    return (
        <div className='w-50 mx-auto'>
            <h2>Please update product: {product.productName}</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' required placeholder={product.productName}{...register("productName")} />
                <input className='mb-2' required placeholder={product.quantity} type='number' {...register("quantity")} />
                <input className='mb-2' required placeholder={product.price} type="number" {...register("price")} />
                <input type="submit" value="Update product" />
            </form>
        </div>
    );
};

export default UpdateProduct;