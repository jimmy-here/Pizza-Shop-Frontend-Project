import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addOrder } from '../feature/OrderSlice';
import 'bootstrap/dist/css/bootstrap.min.css';

const OrderForm = () => {
  const [order, setOrder] = useState({
    type: '',
    size: '',
    base: '',
  });

  const dispatch = useDispatch();
  const orderCount = useSelector((state) => state.pizza.orders.length);

  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (orderCount < 10) {
      dispatch(addOrder(order));
      setOrder({ type: '', size: '', base: '' });
    } else {
      alert('Not taking any order for now');
    }
  };

  const isFormValid = order.type && order.size && order.base;

  return (
    <div className="container py-4 d-flex justify-content-center">
      <div className="card p-4 shadow-lg" style={{ width: '50%', backgroundColor: '#f9f9f9' }}>
        <form onSubmit={handleSubmit}>
          <h2 className="text-primary text-center fw-bold mb-4">🍕 Build Your Pizza</h2>

          {/* Pizza Type Select */}
          <div className="mb-4">
            <label htmlFor="typeSelect" className="form-label fs-5">Pizza Type:</label>
            <select 
              id="typeSelect"
              name="type"
              value={order.type}
              onChange={handleChange}
              className="form-select form-select-lg"
              required
            >
              <option value="" disabled hidden>Choose Pizza Type</option>
              <option value="Veg">Veg</option>
              <option value="Non-Veg">Non-Veg</option>
            </select>
          </div>

          {/* Pizza Size Select */}
          <div className="mb-4">
            <label htmlFor="sizeSelect" className="form-label fs-5">Pizza Size:</label>
            <select 
              id="sizeSelect"
              name="size"
              value={order.size}
              onChange={handleChange}
              className="form-select form-select-lg"
              required
            >
              <option value="" disabled hidden>Select Size</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>

          {/* Base Type Select */}
          <div className="mb-4">
            <label htmlFor="baseSelect" className="form-label fs-5">Base Type:</label>
            <select 
              id="baseSelect"
              name="base"
              value={order.base}
              onChange={handleChange}
              className="form-select form-select-lg"
              required
            >
              <option value="" disabled hidden>Choose Base Type</option>
              <option value="Thin">Thin</option>
              <option value="Thick">Thick</option>
            </select>
          </div>

          {/* Submit Button */}
          <button 
            type="submit"
            disabled={!isFormValid}
            className="btn btn-primary btn-lg w-100 mt-3"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderForm;
