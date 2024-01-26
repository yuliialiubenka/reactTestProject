// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import SignUp from './pages/signUpPage';
import SignIn from './pages/signInPage';
import ForgotPassPage from './pages/forgotPassPage.jsx';

const App = () => {
  return (
    <Router basename="/reactTestProject">
      <Header />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/forgotpassword" element={<ForgotPassPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
