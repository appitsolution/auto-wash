import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import SignIn from "./pages/sign-in";
import Promotions from "./pages/promotions";
import PromotionsItem from "./pages/promotions-item";
import NotFound from "./pages/404";
import Wash from "./pages/wash";
import WashItem from "./pages/wash-item";
import HistoryOrder from "./pages/history-order";
import Profile from "./pages/profile";
import ProfileSettings from "./pages/profile-settings";
import ProfileSupport from "./pages/profile-support";
import ProfileQuestions from "./pages/profile-questions";
import ProfileQuestionsItem from "./pages/profile-questions-item";
import ProfileData from "./pages/profile-data";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "./redux/slice/sliceUser";
import ProfileDataCars from "./pages/profile-data-cars";
import InfoPage from "./pages/info";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const tokenLocal = localStorage.getItem("token");
    if (tokenLocal !== "") {
      dispatch(setToken(tokenLocal));
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/info" element={<InfoPage />} />
      <Route path="/signin/:number" element={<SignIn />} />
      <Route path="/promotions/:id" element={<PromotionsItem />} />
      <Route path="/promotions" element={<Promotions />} />
      <Route path="/wash/:id" element={<WashItem />} />
      <Route path="/wash" element={<Wash />} />
      <Route path="/history-order" element={<HistoryOrder />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/data" element={<ProfileData />} />
      <Route path="/profile/data/cars" element={<ProfileDataCars />} />
      <Route path="/profile/settings" element={<ProfileSettings />} />
      <Route path="/profile/support" element={<ProfileSupport />} />
      <Route path="/profile/questions/:id" element={<ProfileQuestionsItem />} />
      <Route path="/profile/questions" element={<ProfileQuestions />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
