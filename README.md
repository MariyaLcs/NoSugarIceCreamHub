# Sugar-Free Ice Cream Hub

This project, inspired by the LinkedIn Learning course [Building Modern UIs with React Router v6](https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6), showcases a dynamic web application for exploring and subscribing to sugar-free ice cream deliveries. Utilizing React Router v6 and React Hooks, it demonstrates advanced routing techniques and state management to create an engaging user experience for discovering delicious, health-conscious ice cream flavors.

## Live Demo

Check out the live demo of the project here: [Sugar-Free Ice Cream Hub Live Demo](https://mariyalcs.github.io/NoSugarIceCreamHub/)

## About The Project

The Sugar-Free Ice Cream Hub allows users to browse through a variety of sugar-free ice cream flavors, each with detailed descriptions, ingredients, and nutritional information. It features a subscription form for monthly deliveries, enhancing the connection between ice cream enthusiasts and their favorite treats.

### Key Features

- **Flavor Exploration**: Discover sugar-free ice cream flavors with detailed descriptions and images.
- **Monthly Subscription**: Subscribe for monthly delivery of your favorite ice cream flavors right to your door.
- **Responsive Design**: Enjoy a seamless experience across all your devices.
- **Built with React Hooks**: Implements functional components and state management using React Hooks for efficient and modern UI development.
- **Built with React Hooks**: This project leverages React's powerful Hooks API for efficient and modern UI development, including:
  - `useState` for managing component state.
  - `useEffect` for performing side effects in function components, such as data fetching, subscriptions, or manually changing the DOM.
  - `useRef` for accessing DOM elements directly and persisting values across renders without causing re-renders.
  - `useContext` for managing global state and avoiding prop drilling.
- **React Router Features**: The application makes extensive use of `react-router-dom` for routing and navigation, incorporating the following elements:
  - `Routes` and `Route` for defining the structure of the application's routes and rendering components based on the URL path.
  - `Link` for creating navigable links that allow for changing routes while avoiding full page reloads, enhancing the single-page application (SPA) experience.
  - `NavLink` for creating links that can style themselves as "active" based on the current location, making it easy to highlight the current menu item.
  - `useParams` for capturing dynamic segments of the URL, enabling component rendering based on parameter values.
  - `useLocation` for accessing the location object to read the current pathname, search string, and other URL components, useful for making decisions based on the current route.
  - `useNavigate` for programmatically navigating to different routes, offering a method to redirect users after certain actions, like form submissions or login.
