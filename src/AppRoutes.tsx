import { Route, Routes } from "react-router-dom";

import MainPage from "./pages";

import { PATH } from "./consts";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path={PATH.MAIN} element={<MainPage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
