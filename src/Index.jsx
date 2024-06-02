import { Provider } from "react-redux";
import Detail from "./components/Detail";
import Header from "./components/Header";
import Home from "./components/Home";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Login from "./components/Login";
import Movies from "./components/Movies";
import { store } from "./app/store";

const App = () => {
  return (
    <Router>
    <Provider store={store}>
        <Header/>
    </Provider>
    <Routes>
      <Route exact path="/" element={<Home />} />
       <Route exact path="/detail/:id" element={<Detail />} />
       <Route exact path="/login" element={<Login />} />
    </Routes> 
    
    // </Router>
  )
};

export default App;