import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import SignIn from "./signIn";
import SignUp from "./signUp";
import Blog from "./blog";
import SingleBlogPage from "./singleBlogPage";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/blog">
            <Route path="" element={<Blog />} />
            <Route path={":slug"} element={<SingleBlogPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
