export const userAuthorized = async () => {
  console.log("gedklefhsejkfkj");
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

    return data;
  } catch (error) {
    console.log("Error", error);
  }
};

export const generateSecretToken = async (username: string) => {
  try {
    const response = await fetch(
      "http://localhost:8000/api/v1/extension/generate-token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
        }),
      }
    );
    const data = await response.json();

    console.log(data);
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
