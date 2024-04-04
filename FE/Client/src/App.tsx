import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { Home } from "./pages/Home";
import { CharactersAI } from "./pages/CharactersAI";
import { AddCollection } from "./pages/AddCollection";
import { Collection } from "./pages/Collection";
import { PageNotFound } from "./pages/PageNotFound";
import { EditCollection } from "./pages/EditCollection";
import { Learn } from "./pages/Learn";
import { RoomAI } from "./pages/RoomAI";

function App() {
  const isAuth = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={isAuth ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={isAuth ? <Navigate to="/" /> : <SignUp />}
        />
        {
          !isAuth ? (
            <Navigate to="/login" />
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/characters-ai" element={<CharactersAI />} />
              <Route path="/add-collection" element={<AddCollection />} />
              <Route path="/collection/:idCollection" element={<Collection />} />
              <Route
                path="/collection/:idCollection/edit"
                element={<EditCollection />}
              />
              <Route path="/collection/:idCollection/learn" element={<Learn />} />
              <Route path="/roomai/:idCharacterAI" element={<RoomAI />} />
            </>
          )
        }
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
