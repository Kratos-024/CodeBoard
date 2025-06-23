import { useEffect, useState, type JSX } from "react";
import { Navigate } from "react-router-dom";
import { verifyUserAuth } from "../apis/UserAuth";

interface Props {
  children: JSX.Element;
}

// Extract and parse refresh token from cookie
const getRefreshTokenFromCookie = (): string => {
  const match = document.cookie.match(/(?:^|;\s*)UseRrefreshToken=([^;]+)/);
  if (!match) return "";

  try {
    const decoded = decodeURIComponent(match[1]);
    const parsed = JSON.parse(decoded);
    return parsed.refresh || "";
  } catch (err) {
    console.error("Error parsing refresh token from cookie:", err);
    return "";
  }
};

export const ProtectedRoute = ({ children }: Props) => {
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
        console.log("Error occurred in protected route:", err);
        setIsVerified(false);
      }
    };

    verifyUserAuthHandler();
  }, []);

  if (isVerified === null) return <div>Loading...</div>;

  return isVerified ? children : <Navigate to="/create-acc" />;
};
