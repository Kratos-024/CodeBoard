import { useEffect, useState, type JSX } from "react";
import { Navigate } from "react-router-dom";
import { verifyUserAuth } from "../apis/UserAuth";

interface Props {
  children: JSX.Element;
}

export const PublicRoutes = ({ children }: Props) => {
  const [isVerified, setIsVerified] = useState<null | boolean>(null);
  const refreshToken = localStorage.getItem("refreshToken") || "";

  useEffect(() => {
    const verifyUserAuthHandler = async () => {
      try {
        const res = await verifyUserAuth(refreshToken);
        if (res?.success) {
          setIsVerified(true);
        } else {
          setIsVerified(false);
        }
      } catch (err: unknown) {
        console.log("Error has been occured on protected routes", err);
        setIsVerified(false);
      }
    };

    if (refreshToken) {
      verifyUserAuthHandler();
    } else {
      setIsVerified(false);
    }
  }, [refreshToken]);

  if (isVerified === null) return <div>Loading...</div>;

  return !isVerified ? children : <Navigate to="/profile" />;
};
