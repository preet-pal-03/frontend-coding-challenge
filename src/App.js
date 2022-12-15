import Cookies from 'js-cookie';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";
import { useContext, useEffect, useState } from 'react';
import AuthApi from './AuthApi';
import Login from './Login/Login';
import { Dashboard } from './Dashboard/Dashboard';
import { Layout } from 'antd';

const { Sider, Content } = Layout;

function App() {
  const [auth, setAuth] = useState(false)
  const readCookie = () => {
    const user = Cookies.get("user")
    if (user) {
      setAuth(true)
    }
  }

  useEffect(() => readCookie())
  return (
    <>
      <AuthApi.Provider value={{ auth, setAuth }}>
        <Router>
          <RoutesComp />
        </Router>
      </AuthApi.Provider>
    </>
  );
}


const RoutesComp = () => {
  return <Routes>
    <Route
      path="/"
      element={
        <ProtectedLogin >
          <Layout>
            <Layout>
              <Sider handleStyle={{ backgroundColor: 'red' }} >
                <img style={{ height: '100vh', width: '500px' }} alt="logo" src="/oren-logo.png" /></Sider>
              <Content><Login /></Content>
            </Layout>
          </Layout>
        </ProtectedLogin>
      }
    />
    <Route
      path="/login"
      element={
        <ProtectedLogin >
          <Layout>
            <Layout>
              <Sider></Sider>
              <Content><Login /></Content>
            </Layout>
          </Layout>
        </ProtectedLogin>
      }
    />
    <Route
      path="/dashboard"
      element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      }
    />
  </Routes>
}

export const ProtectedRoute = ({ children }) => {
  const Auth = useContext(AuthApi)
  if (!Auth.auth) {
    return <Login />;
  } else {
    <Navigate to="/dashboard" />;
    return <Dashboard />;
  }
};

export const ProtectedLogin = ({ children }) => {
  const Auth = useContext(AuthApi)
  if (!Auth.auth) {
    // user is not authenticated
    return children;
  } else {
    <Navigate to="/dashboard" />;
    return <Dashboard />;
  }
};
export default App;