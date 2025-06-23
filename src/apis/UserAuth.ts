export const userAuthorized = async () => {
  window.location.href =
    "https://github.com/login/oauth/authorize" +
    "?client_id=Ov23li85Y3yFVTDbiodF" +
    "&redirect_uri=http://localhost:5173" +
    "&scope=read:user user:email public_repo" +
    "&state=apple123@";
};

export const sendTheAuthTokenToBackend = async (code: string) => {
  try {
    const response = await fetch(
      "http://localhost:8000/api/v1/users/authorize",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code,
        }),
      }
    );
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log("Error", error);
  }
};

export const generateSecretToken = async (
  payload: {
    userName: string;
    email: string;
    fullName: string;
    avatar_url: string;
    userId: string;
  },
  token: string
) => {
  try {
    const response = await fetch(
      "http://localhost:8000/api/v1/users/generateSecret",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `${token}`,
        },
        body: JSON.stringify({
          payload,
        }),
      }
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.log("Error", error);
  }
};

export const verifyUserAuth = async (token: string) => {
  try {
    const response = await fetch(
      "http://localhost:8000/api/v1/users/verify-user-auth",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `${token}`,
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error", error);
  }
};

export const logOut = async (token: string, userId: string) => {
  try {
    console.log(token);
    const response = await fetch("http://localhost:8000/api/v1/users/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `${token}`,
      },
      body: JSON.stringify({
        username: userId,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error", error);
  }
};

export const getUserStats = async (token: string) => {
  try {
    const response = await fetch(
      "http://localhost:8000/api/v1/users/get-user-stats",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `${token}`,
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error", error);
  }
};
