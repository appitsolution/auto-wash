import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { setToken } from "../../redux/slice/sliceUser.js";
import deleteProfile from "../../assets/profile/delete-profile.svg";
import outProfile from "../../assets/profile/out-profile.svg";
import back from "../../assets/profile/back.svg";

const Settings = () => {
  const token = useSelector((state) => state.user.token);
  const [data, setData] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_SERVER}/user/verify`, { token })
      .then((res) => {
        setData(res.data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const [outActive, setOutActive] = useState(false);
  const [deleteActive, setDeleteActive] = useState(false);

  const outProfileFunc = () => {
    setOutActive(true);
  };

  const deleteProfileFunc = () => {
    setDeleteActive(true);
  };

  const outProfileRequest = () => {
    localStorage.removeItem("token");
    dispatch(setToken(""));
    navigate("/");
  };

  const deleteProfileRequest = async () => {
    try {
      await axios.post(`${process.env.REACT_APP_SERVER}/user/delete`, {
        idUser: data.idUser,
      });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="profile__settings">
      <div className="container">
        <h2 className="profile__settings-title">Налаштування</h2>
        <button className="profile__settings-out" onClick={outProfileFunc}>
          <img
            className="profile__settings-out-icon"
            alt="out-icon"
            src={outProfile}
          />
          Вийти з аккаунту
        </button>
        <button
          className="profile__settings-delete"
          onClick={deleteProfileFunc}
        >
          <img
            className="profile__settings-out-icon"
            alt="out-icon"
            src={deleteProfile}
          />
          Видалити аккаунт
        </button>
      </div>
      <Link to="/profile" className="profile__settings-back">
        <img className="profile__settings-back-icon" src={back} alt="back" />
      </Link>

      <div
        className={`profile__settings-accept-out ${outActive ? "active" : ""}`}
      >
        <h3 className="profile__settings-accept-out-title">
          Ви дійсно бажаєте вийти з аккаунту ?
        </h3>
        <div className="profile__settings-accept-out-block">
          <button
            onClick={outProfileRequest}
            className="profile__settings-accept-out-block-yes"
          >
            Так
          </button>
          <button
            className="profile__settings-accept-out-block-no"
            onClick={() => setOutActive(false)}
          >
            Ні
          </button>
        </div>
      </div>

      <div
        className={`profile__settings-accept-delete ${
          deleteActive ? "active" : ""
        }`}
      >
        <h3 className="profile__settings-accept-delete-title">
          Ви дійсно бажаєте видалити аккаунт ?
        </h3>
        <div className="profile__settings-accept-delete-block">
          <button
            className="profile__settings-accept-delete-block-yes"
            onClick={deleteProfileRequest}
          >
            Так
          </button>
          <button
            className="profile__settings-accept-delete-block-no"
            onClick={() => setDeleteActive(false)}
          >
            Ні
          </button>
        </div>
      </div>
    </section>
  );
};

export default Settings;
