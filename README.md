# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Pizza Shop Application

Project Overview
This application simulates the behavior of a pizza restaurant, from taking customer orders to preparing and delivering them. It features order management, real-time stage tracking, manual stage transitions, and cancellation options for an efficient and user-friendly experience.

Features
1. Order Placement:
   - A form allows users to configure and order pizzas with options for:
     - Type: Veg, Non-Veg
     - Size: Large, Medium, Small
     - Base: Thin, Thick

2. Order Management:
   - The restaurant can handle up to 10 orders simultaneously.
   - If the maximum limit is reached, a message displays: "Not taking any order for now."

3. Order Stages:
   - Stages include:
     - Order Placed
     - Order in Making
     - Order Ready
     - Order Picked
   - Orders highlighted in red if in the same stage for more than 3 minutes.
   - Display time spent in each stage on the pizza card.

4. Main Display Section:
   - Lists all pizzas in progress, showing remaining time and order ID.
   - Displays the total number of pizzas delivered today.

5. Order Cancellation:
   - Orders can be canceled at any stage before they reach the Ready status.

6. Manual Stage Transitions:
   - Orders move between stages through buttons for Next, Picked, or Cancel actions.

7. UI Layout:
   - Columns for each order stage with pizza cards.
   - A comprehensive main display section for efficient order tracking.

Installation Instructions
1. Clone the repository:
   git clone <repository_url>
2. Navigate to the project directory:
   cd pizza-shop-app
3. Install dependencies:
   npm install
4. Run the application:
   npm start

Technologies Used
- Frontend: React.js
- Backend: Node.js, Express.js (if applicable)
- Database: MongoDB (if applicable)
- Styling: CSS, Bootstrap, or Tailwind CSS

Usage Instructions
1. Access the pizza order form to place an order.
2. Monitor order stages and time spent via the pizza cards.
3. Transition orders between stages manually using provided action buttons.
4. Cancel orders as required before the Ready stage.
5. Track total deliveries and ongoing orders in the main display.

Future Enhancements
- Implement real-time notifications for stage updates.
- Integrate payment gateway options.
- Add user authentication and order history tracking.

License
This project is licensed under the MIT License.

---
