import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orders: [],
  deliveredCount: 0,
};

const getPizzaMakingTime = (size) => {
  switch (size) {
    case 'Small': return 180; // 3 minutes
    case 'Medium': return 240; // 4 minutes
    case 'Large': return 300; // 5 minutes
    default: return 240;
  }
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    addOrder: (state, action) => {
      if (state.orders.length < 10) {
        state.orders.push({
          ...action.payload,
          id: Date.now(),
          stage: 'Order Placed',
          timeSpent: {
            'Order Placed': 0,
            'Order in Making': 0,
            'Order Ready': 0,
            'Order Picked': 0,
          },
          totalTime: 0,
          stageStartTime: Date.now(),
          makingTime: getPizzaMakingTime(action.payload.size),
          remainingTime: getPizzaMakingTime(action.payload.size),
        });
      }
    },
    updateOrderStage: (state, action) => {
      const { id, newStage } = action.payload;
      const order = state.orders.find(order => order.id === id);
      if (order) {
        const currentTime = Date.now();
        const timeInStage = (currentTime - order.stageStartTime) / 1000;
        order.timeSpent[order.stage] += timeInStage;
        order.stage = newStage;
        order.stageStartTime = currentTime;
      }
    },
    cancelOrder: (state, action) => {
      state.orders = state.orders.filter(order => order.id !== action.payload);
    },
    completeOrder: (state, action) => {
      state.deliveredCount++;
      state.orders = state.orders.filter(order => order.id !== action.payload);
    },
    updateTimes: (state) => {
      const currentTime = Date.now();
      state.orders.forEach(order => {
        const timeInStage = (currentTime - order.stageStartTime) / 1000;
        order.timeSpent[order.stage] = timeInStage;
        order.totalTime = Object.values(order.timeSpent).reduce((a, b) => a + b, 0);
        if (order.stage === 'Order in Making') {
          order.remainingTime = Math.max(0, order.makingTime - order.timeSpent['Order in Making']);
        }
      });
      
      // Sort orders based on delay in each stage
      state.orders.sort((a, b) => {
        const aDelay = Math.max(0, a.timeSpent[a.stage] - 180);
        const bDelay = Math.max(0, b.timeSpent[b.stage] - 180);
        return bDelay - aDelay;
      });
    },
  },
});

export const { addOrder, updateOrderStage, cancelOrder, completeOrder, updateTimes } = pizzaSlice.actions;
export default pizzaSlice.reducer;