import Home from './Pages/Home';
import Cart from './Pages/Cart';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/carrinho', element: <Cart /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
