import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from '@pages/Login';
import Dashboard from '@pages/Dashboard';
import BasePage from "@components/BasePage";
import List from "@pages/List";
import Details from "@pages/Details";
import NotFound from "@pages/NotFound";
import PrivateRoute from '@components/PrivateRoute';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<PrivateRoute element={<BasePage />}></PrivateRoute>}>
            <Route index element={<Dashboard />} />
            <Route path="characters" element={<List />} />
            <Route path="characters/:id" element={<Details />} />
            <Route path="events" element={<List />} />
            <Route path="events/:id" element={<Details />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
