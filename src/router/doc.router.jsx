import { Routes, Route } from "react-router-dom";
import Doc from "../pages/Doc";
import Aside from "../layout/Aside/Aside";

const DocRouter = () => {
  return (
    <div className="flex">
      <Aside />
      <Routes>
        <Route path="/" element={<Doc />}></Route>
      </Routes>
    </div>
  );
};

export default DocRouter;
