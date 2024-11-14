import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from '@pages/Login';
import Dashboard from '@pages/Dashboard';
import PrivateRoute from '@components/PrivateRoute';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />}></PrivateRoute>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
