import { Routes, Route } from "react-router-dom";
import UserPage from "./pages/UserPage";
import PostPage from "./pages/PostPage";
import Header from "@/components/Header";

function App() {
  return (
    <div className="max-w-2xl flex flex-col items-center justify-center mx-auto">
      <Header />
      <div className="w-full">
        <Routes>
          <Route path=":/username" element={<UserPage />} />
          <Route path=":/username/post/:id" element={<PostPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
