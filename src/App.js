import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import SignIn from "./pages/sign-in";
import Promotions from "./pages/promotions";
import PromotionsItem from "./pages/promotions-item";
import NotFound from "./pages/404";
import Wash from "./pages/wash";
import WashItem from "./pages/wash-item";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/promotions/:id" element={<PromotionsItem />} />
      <Route path="/promotions" element={<Promotions />} />
      <Route path="/wash/:id" element={<WashItem />} />
      <Route path="/wash" element={<Wash />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
