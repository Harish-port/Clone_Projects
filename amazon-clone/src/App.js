import "./App.css";
import Cart from "./Cart";
import { useState, useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import styled from "styled-components";
import { db ,auth} from "./firebase";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [cartItems, setCartItems] = useState([]);
  const getCartItems = () => {
    db.collection("cartItems").onSnapshot((snapshot) => {
      const tempItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data(),
      }));
      setCartItems(tempItems);
    });
  };
  const signOut = () =>{
    auth.signOut().then(()=>{
      setUser(null)
    })
  }
  useEffect(() => {
    getCartItems();
  }, []);
 
  return (
    <Router>
      {!user ? (
        <Login setUser={setUser}/>
      ) : (
        <Container>
          <Header signOut={signOut} user={user} cartItems={cartItems} />
          <Switch>
            <Route path="/cart">
              <Cart cartItems={cartItems} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Container>
      )}
    </Router>
  );
}

export default App;

const Container = styled.div`
  background-color: #eaeded;
`;
