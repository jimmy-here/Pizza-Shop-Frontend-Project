import { useSelector } from 'react-redux';
import PizzaCard from './PizzaCard';

const PizzaStagesSection = () => {
  const orders = useSelector(state => state.pizza.orders);

  const stages = [
    { name: 'Order Placed', icon: 'bi-cart' },
    { name: 'Order in Making', icon: 'bi-gear' },
    { name: 'Order Ready', icon: 'bi-check-circle' },
    { name: 'Order Picked', icon: 'bi-truck' }
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center display-6 fw-bold text-uppercase text-primary mb-4">Pizza Stages</h2>
      <div className="row g-4">
        {stages.map(stage => (
          <div key={stage.name} className="col-12 col-md-6 col-lg-3">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-header" style={{ backgroundColor: 'royalblue', color: 'white' }}>
                <h3 className="h5 mb-0 d-flex align-items-center justify-content-center">
                  <i className={`bi ${stage.icon} me-2`}></i>
                  {stage.name}
                </h3>
              </div>
              <div className="card-body">
                {orders
                  .filter(order => order.stage === stage.name)
                  .map(order => (
                    <PizzaCard key={order.id} pizza={order} />
                  ))}
                {orders.filter(order => order.stage === stage.name).length === 0 && (
                  <p className="text-muted text-center d-flex align-items-center justify-content-center">
                    <i className="bi bi-exclamation-circle-fill me-2"></i>
                    No orders in this stage
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PizzaStagesSection;
