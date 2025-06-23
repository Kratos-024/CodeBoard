import { useEffect, useState, type JSX } from "react";
import { Navigate } from "react-router-dom";
import { getRefreshTokenFromCookie, verifyUserAuth } from "../apis/UserAuth";

interface Props {
  children: JSX.Element;
}

export const PublicRoutes = ({ children }: Props) => {
  const [isVerified, setIsVerified] = useState<null | boolean>(null);

  useEffect(() => {
    const verifyUserAuthHandler = async () => {
      const refreshToken = getRefreshTokenFromCookie();

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
