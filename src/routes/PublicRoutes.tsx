import { useEffect, useState, type JSX } from "react";
import { Navigate } from "react-router-dom";
import { verifyUserAuth } from "../apis/UserAuth";

interface Props {
  children: JSX.Element;
}

// Properly decode cookie and extract refresh token
const getRefreshTokenFromCookie = (): string => {
  const match = document.cookie.match(/(?:^|;\s*)UseRrefreshToken=([^;]+)/);
  if (!match) return "";

  try {
    const decoded = decodeURIComponent(match[1]); // decode URL-encoded JSON
    const parsed = JSON.parse(decoded); // parse JSON string
    return parsed.refresh || "";
  } catch (err) {
    console.error("Error parsing refresh token from cookie:", err);
    return "";
  }
};

export const PublicRoutes = ({ children }: Props) => {
  const [isVerified, setIsVerified] = useState<null | boolean>(null);

  useEffect(() => {
    const verifyUserAuthHandler = async () => {
      const refreshToken = getRefreshTokenFromCookie();
      console.log("Extracted Refresh Token:", refreshToken);

      if (!refreshToken) {
        setIsVerified(false);
        return;
      }

      try {
        const res = await verifyUserAuth(refreshToken);
        setIsVerified(!!res?.success);
      } catch (err) {
        console.log("Error occurred in public routes:", err);
        setIsVerified(false);
      }
    };

    verifyUserAuthHandler();
  }, []);

  if (isVerified === null) return <div>Loading...</div>;

  return !isVerified ? children : <Navigate to="/profile" />;
};
