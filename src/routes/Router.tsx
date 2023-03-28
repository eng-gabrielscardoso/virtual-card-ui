import { Routes, Route } from "react-router-dom";
import NotFoundView from "../views/errors/NotFoundView";

import HomeView from "../views/home/HomeView";
import ProfileView from "../views/profile/ProfileView";

export default function Router(): JSX.Element {
  return (
    <Routes>
      <Route path="/" Component={HomeView} />
      <Route path="/profile/:name" element={<ProfileView />} />
      <Route path="*" Component={NotFoundView} />
    </Routes>
  );
}
