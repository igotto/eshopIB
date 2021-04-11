import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
//import background from './img/Background.jpg';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';

function App() {
  return (
    <div className="classic">
      <Router>
        <Header />
        <main className="py-3">
          <Container>
            <Switch>
              <Route path="/shipping" component={ShippingScreen} exact />
              <Route path="/payment" component={PaymentScreen} exact />
              <Route path="/placeorder" component={PlaceOrderScreen} exact />
              <Route path="/login" component={LoginScreen} exact />
              <Route path="/register" component={RegisterScreen} exact />
              <Route path="/profile" component={ProfileScreen} exact />
              <Route path="/product/:id" component={ProductScreen} exact />
              <Route path="/cart/:id?" component={CartScreen} exact />
              <Route path="/" component={HomeScreen} exact />
            </Switch>
          </Container>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
