export const userAuthorized = async () => {
  window.location.href =
    "https://github.com/login/oauth/authorize" +
    "?client_id=Ov23li85Y3yFVTDbiodF" +
    "&redirect_uri=http://localhost:5173/profile" +
    "&scope=read:user user:email public_repo" +
    "&state=apple123@";
};

export const sendTheAuthTokenToBackend = async (code: string) => {
  try {
    console.log(code);
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

    console.log(data);
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
