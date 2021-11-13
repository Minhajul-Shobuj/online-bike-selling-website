import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute';
import Register from './Pages/Login/Register';
import Navigation from './Pages/Navigation/Navigation';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import Products from './Pages/Products/Products';
import Admin from './Pages/MakeAdmin/MakeAdmin';
import AddProduct from './Pages/AddProduct/AddProduct';
import ManageProduct from './Pages/ManageProduct/ManageProduct';
import ManageOrder from './Pages/ManageOrder/ManageOrder';
import Footer from './Pages/Footer/Footer';
import About from './Pages/About/About';
import NotFound from './Pages/NotFound/NotFound'

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navigation />
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <PrivateRoute exact path="/admin">
              <Admin></Admin>
            </PrivateRoute>
            <Route path="/products">
              <Products></Products>
            </Route>
            <PrivateRoute path="/placeOrder/:id">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/addProduct">
              <AddProduct></AddProduct>
            </PrivateRoute>          
            <PrivateRoute path="/manageProduct">
              <ManageProduct></ManageProduct>
            </PrivateRoute>          
            <PrivateRoute path="/manageOrder">
              <ManageOrder></ManageOrder>
            </PrivateRoute>          
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
