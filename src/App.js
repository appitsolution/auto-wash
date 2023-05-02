import { Route, Routes } from "react-router-dom";
import PrivateRouter from "./components/PrivateRouter";
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
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "./redux/slice/sliceUser";
import ProfileDataCars from "./pages/profile-data-cars";
import InfoPage from "./pages/info";
import MyCards from "./pages/my-cards";
import PaymentPage from "./pages/payment";
import axios from "axios";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const tokenLocal = localStorage.getItem("token");
    if (tokenLocal !== "") {
      dispatch(setToken(tokenLocal));
      try {
        if (tokenLocal === null || tokenLocal === "") {
          setIsReady(true);
          return;
        }
        axios
          .post(`${process.env.REACT_APP_SERVER}/user/verify`, {
            token: tokenLocal,
          })
          .then((res) => {
            console.log(res.data);
            if (Object.keys(res.data).length !== 0) setIsAuthenticated(true);
            setIsReady(true);
          });
      } catch (err) {
        console.log(err);
      }
    }
  }, [dispatch]);

  if (!isReady) return null;

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/payment/:id"
        element={
          <PrivateRouter
            isAuthenticated={isAuthenticated}
            element={<PaymentPage />}
          />
        }
      />
      <Route
        path="/info/my-cards"
        element={
          <PrivateRouter
            isAuthenticated={isAuthenticated}
            element={<MyCards />}
          />
        }
      />
      <Route
        path="/info"
        element={
          <PrivateRouter
            isAuthenticated={isAuthenticated}
            element={<InfoPage />}
          />
        }
      />
      <Route path="/signin/:number" element={<SignIn />} />
      <Route
        path="/promotions/:id"
        element={
          <PrivateRouter
            isAuthenticated={isAuthenticated}
            element={<PromotionsItem />}
          />
        }
      />
      <Route
        path="/promotions"
        element={
          <PrivateRouter
            isAuthenticated={isAuthenticated}
            element={<Promotions />}
          />
        }
      />
      <Route
        path="/wash/:id"
        element={
          <PrivateRouter
            isAuthenticated={isAuthenticated}
            element={<WashItem />}
          />
        }
      />
      <Route
        path="/wash"
        element={
          <PrivateRouter isAuthenticated={isAuthenticated} element={<Wash />} />
        }
      />
      <Route
        path="/history-order"
        element={
          <PrivateRouter
            isAuthenticated={isAuthenticated}
            element={<HistoryOrder />}
          />
        }
      />
      <Route
        path="/profile"
        element={
          <PrivateRouter
            isAuthenticated={isAuthenticated}
            element={<Profile />}
          />
        }
      />
      <Route
        path="/profile/data"
        element={
          <PrivateRouter
            isAuthenticated={isAuthenticated}
            element={<ProfileData />}
          />
        }
      />
      {/* <Route
        path="/profile/data/cars"
        element={
          <PrivateRouter
            isAuthenticated={isAuthenticated}
            element={<ProfileDataCars />}
          />
        }
      /> */}
      <Route
        path="/profile/settings"
        element={
          <PrivateRouter
            isAuthenticated={isAuthenticated}
            element={<ProfileSettings />}
          />
        }
      />
      <Route
        path="/profile/support"
        element={
          <PrivateRouter
            isAuthenticated={isAuthenticated}
            element={<ProfileSupport />}
          />
        }
      />
      <Route
        path="/profile/questions/:id"
        element={
          <PrivateRouter
            isAuthenticated={isAuthenticated}
            element={<ProfileQuestionsItem />}
          />
        }
      />
      <Route
        path="/profile/questions"
        element={
          <PrivateRouter
            isAuthenticated={isAuthenticated}
            element={<ProfileQuestions />}
          />
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
