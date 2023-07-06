import axios from "axios";

const requestVerify = async (token) => {
  try {
    const result = await axios.post(
      `${process.env.REACT_APP_SERVER}/user/verify`,
      { token }
    );

    if (result.data.status === 404) {
      localStorage.setItem("token", "");
      document.location.reload();
      return result.data;
    }
    if (result.data.status === 500) {
      localStorage.setItem("token", "");
      document.location.reload();
      return result.data;
    }
    if (result.data.status === 200) {
      return result.data;
    }

    return result.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export default requestVerify;
