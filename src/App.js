import { useEffect, useState, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "./redux/slice/sliceUser";
import axios from "axios";
import PrivateRouter from "./components/PrivateRouter";
import ProfileDataCars from "./pages/profile-data-cars";

const Home = lazy(() => import("./pages/home"));
const SignIn = lazy(() => import("./pages/sign-in"));
const Promotions = lazy(() => import("./pages/promotions"));
const PromotionsItem = lazy(() => import("./pages/promotions-item"));
const NotFound = lazy(() => import("./pages/404"));
const Wash = lazy(() => import("./pages/wash"));
const WashItem = lazy(() => import("./pages/wash-item"));
const HistoryOrder = lazy(() => import("./pages/history-order"));
const Profile = lazy(() => import("./pages/profile"));
const ProfileSettings = lazy(() => import("./pages/profile-settings"));
const ProfileSupport = lazy(() => import("./pages/profile-support"));
const ProfileQuestions = lazy(() => import("./pages/profile-questions"));
const ProfileQuestionsItem = lazy(() =>
  import("./pages/profile-questions-item")
);
const ProfileData = lazy(() => import("./pages/profile-data"));
const InfoPage = lazy(() => import("./pages/info"));
const MyCards = lazy(() => import("./pages/my-cards"));
const PaymentPage = lazy(() => import("./pages/payment"));
const QR = lazy(() => import("./pages/qr"));

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
    <Suspense>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRouter
              isAuthenticated={!isAuthenticated}
              element={<Home />}
              pathNotAuthenticated="/info"
            />
          }
        />
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
        <Route
          path="/signin/:number"
          element={
            <PrivateRouter
              isAuthenticated={!isAuthenticated}
              element={<SignIn />}
              pathNotAuthenticated="/info"
            />
          }
        />
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
            <PrivateRouter
              isAuthenticated={isAuthenticated}
              element={<Wash />}
            />
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
        <Route path="/qr-scan" element={<QR />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default App;
