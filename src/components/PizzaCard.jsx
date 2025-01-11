import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { updateOrderStage, cancelOrder, completeOrder } from '../feature/OrderSlice';
import { formatTime } from '../utils/time';

const PizzaCard = ({ pizza }) => {
  const dispatch = useDispatch();
  const isDelayed = pizza.timeSpent[pizza.stage] > 180;

  const handleNextStage = () => {
    const stages = ['Order Placed', 'Order in Making', 'Order Ready', 'Order Picked'];
    const currentIndex = stages.indexOf(pizza.stage);
    if (currentIndex < stages.length - 1) {
      dispatch(updateOrderStage({ id: pizza.id, newStage: stages[currentIndex + 1] }));
    }
  };

  const handleCancel = () => {
    dispatch(cancelOrder(pizza.id));
  };

  const handleOrderPicked = () => {
    dispatch(completeOrder(pizza.id));
  };

  // Format Order ID to start from #001
  const formattedOrderId = `#${String(pizza.id).padStart(3, '0')}`;

  return (
    <div className={`pizza-card ${isDelayed ? 'delayed' : ''}`}>
      <h3>Order ID: {formattedOrderId}</h3>
      {pizza.stage !== 'Order Picked' && (
        <p>Total time: {formatTime(pizza.totalTime)}</p>
      )}
      {pizza.stage === 'Order in Making' && (
        <p>Remaining time: {formatTime(pizza.remainingTime)}</p>
      )}
      {pizza.stage !== 'Order Ready' && pizza.stage !== 'Order Picked' && (
        <button onClick={handleCancel}>Cancel</button>
      )}
      {pizza.stage !== 'Order Picked' && (
        <button onClick={handleNextStage}>
          {pizza.stage === 'Order Ready' ? 'Next' : 'Next Stage'}
        </button>
      )}
      {pizza.stage === 'Order Picked' && (
        <button onClick={handleOrderPicked}>Order Picked</button>
      )}
    </div>
  );
};

PizzaCard.propTypes = {
  pizza: PropTypes.shape({
    id: PropTypes.string.isRequired,
    timeSpent: PropTypes.objectOf(PropTypes.number).isRequired,
    totalTime: PropTypes.number.isRequired,
    remainingTime: PropTypes.number,
    stage: PropTypes.oneOf([
      'Order Placed',
      'Order in Making',
      'Order Ready',
      'Order Picked'
    ]).isRequired
  }).isRequired
};

export default PizzaCard;
