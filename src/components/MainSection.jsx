import { useSelector, useDispatch } from 'react-redux';
import { cancelOrder } from '../feature/OrderSlice';
import { formatTime } from '../utils/time';

const MainSection = () => {
  const orders = useSelector(state => state.pizza.orders);
  const deliveredCount = useSelector(state => state.pizza.deliveredCount);
  const dispatch = useDispatch();

  const handleCancel = (id) => {
    dispatch(cancelOrder(id));
  };

  const getStageClass = (stage) => {
    switch (stage) {
      case 'Order Placed': return 'badge bg-primary';
      case 'Order in Making': return 'badge bg-warning text-dark';
      case 'Order Ready': return 'badge bg-success';
      case 'Order Picked': return 'badge bg-info';
      default: return 'badge bg-secondary';
    }
  };

  return (
    <div className="container py-5 bg-light">
      <div className="text-center mb-4">
        <h2 className="display-6 fw-bold text-uppercase text-primary">Main Section</h2>
        <h3 className="text-secondary">Pizzas in Progress</h3>
      </div>
      <div className="table-responsive shadow">
        <table className="table table-striped table-hover align-middle">
          <thead className="table-primary">
            <tr>
              <th scope="col" className="text-center">Order ID</th>
              <th scope="col" className="text-center">Stage</th>
              <th scope="col" className="text-center">Total Time Spent</th>
              <th scope="col" className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order.id}>
                <td className="text-center fw-bold">#{String(index + 1).padStart(3, '0')}</td>
                <td className="text-center">
                  <span className={getStageClass(order.stage)}>
                    {order.stage}
                  </span>
                </td>
                <td className="text-center text-muted">{formatTime(order.totalTime)}</td>
                <td className="text-center">
                  {order.stage !== 'Order Ready' && order.stage !== 'Order Picked' && (
                    <button 
                      className="btn btn-danger btn-sm shadow-sm"
                      onClick={() => handleCancel(order.id)}
                    >
                      Delete
                    </button>
                  )}
                </td>
              </tr>
            ))}
            <tr className="table-light">
              <td className="text-center fw-bold">Total Orders Delivered</td>
              <td className="text-center fw-bold" colSpan={2}>{deliveredCount}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MainSection;
