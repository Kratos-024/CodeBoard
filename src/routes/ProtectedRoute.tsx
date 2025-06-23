import { useEffect, useState, type JSX } from "react";
import { Navigate } from "react-router-dom";
import { getRefreshTokenFromCookie, verifyUserAuth } from "../apis/UserAuth";
import Loader from "../components/Loader";

interface Props {
  children: JSX.Element;
}

export const ProtectedRoute = ({ children }: Props) => {
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
        console.log(res.success);
        setIsVerified(!!res?.success);
      } catch (err) {
        console.log("Error occurred in protected route:", err);
        setIsVerified(false);
      }
    };

    verifyUserAuthHandler();
  }, []);

  if (isVerified === null)
    return (
      <div>
        <Loader />
      </div>
    );

  return isVerified ? children : <Navigate to="/create-acc" />;
};
