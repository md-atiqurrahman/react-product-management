import React from 'react';
import { useForm } from "react-hook-form";

const AddProducts = () => {
    const { register, handleSubmit,reset} = useForm();


    const onSubmit = data => {
        
        const url = `http://localhost:5000/products`;

        fetch(url, {
            method: 'POST',
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
            <h2>Please add products</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' required placeholder='Product Name'{...register("productName", { required: true, maxLength: 20 })} />
                <input className='mb-2' required placeholder='Quantity' type='number' {...register("quantity")} />
                <input className='mb-2' required placeholder='Price' type="number" {...register("price")} />
                <input type="submit" value="Add product" />
            </form>
        </div>
    );
};

export default AddProducts;