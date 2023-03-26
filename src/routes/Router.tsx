import { Routes, Route } from "react-router-dom";
import NotFoundView from "../views/errors/NotFoundView";

import HomeView from "../views/home/HomeView";

export default function Router(): JSX.Element {
  return (
    <Routes>
      <Route path="/" Component={HomeView} />
      <Route path="*" Component={NotFoundView} />
    </Routes>
  );
}
