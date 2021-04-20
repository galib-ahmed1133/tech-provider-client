import React from 'react';
import { useForm } from 'react-hook-form';

const OrderConfirmed = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
    return (
        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <div className="col-md-6 mt-3">
            <h5>Full Name</h5>
            <input className='form-control' name="name"  {...register("name")} />
            </div>
            <div className="col-md-6 mt-3">
            <h5>Email Name</h5>
            <input className='form-control' email="email"  {...register("author")} />
            </div>
        </div>
        <div>
            <div className="col-md-6 mt-3">
            <h5>Service Name</h5>
            <input className='form-control' service="service" {...register("price")} />
            </div>
        </div>

        <input className="btn btn-primary mt-3 ml-3" type="submit" />
      </form>
        </div>
    );
};

export default OrderConfirmed;