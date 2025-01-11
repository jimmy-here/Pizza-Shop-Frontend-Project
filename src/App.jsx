import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateTimes } from './feature/OrderSlice';
import OrderForm from './components/OrderForm';
import Header from './components/Header'; 
import PizzaStagesSection from './components/StagesSection';
import MainSection from './components/MainSection';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(updateTimes());
    }, 1000);

    return () => clearInterval(timer);
  }, [dispatch]);

  return (
    <div className="app-container">
      <Header /> 
      <OrderForm />
      <MainSection />
      <PizzaStagesSection /> 
    </div>
  );
}

export default App;
