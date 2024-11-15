import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from '@pages/Login';
import Dashboard from '@pages/Dashboard';
import BasePage from "@components/BasePage";
import CharacterList from "@pages/CharacterList";
import CharacterProfile from "@pages/CharacterProfile";
import PrivateRoute from '@components/PrivateRoute';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<PrivateRoute element={<BasePage />}></PrivateRoute>}>
              <Route index element={<Dashboard />} />
              <Route path="characters" element={<CharacterList />} />
              <Route path="characters/:id" element={<CharacterProfile />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
