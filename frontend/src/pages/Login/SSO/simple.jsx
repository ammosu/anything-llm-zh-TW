import React, { useEffect, useState } from "react";
import { FullScreenLoader } from "@/components/Preloader";
import { Navigate } from "react-router-dom";
import paths from "@/utils/paths";
import useQuery from "@/hooks/useQuery";
import System from "@/models/system";
import { AUTH_TIMESTAMP, AUTH_TOKEN, AUTH_USER } from "@/utils/constants";
import { useTranslation } from "react-i18next";

export default function SimpleSSOPassthrough() {
  const { t } = useTranslation();
  const query = useQuery();
  const redirectPath = query.get("redirectTo") || paths.home();
  const [ready, setReady] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      if (!query.get("token")) throw new Error(t("sso.errors.noToken"));

      // Clear any existing auth data
      window.localStorage.removeItem(AUTH_USER);
      window.localStorage.removeItem(AUTH_TOKEN);
      window.localStorage.removeItem(AUTH_TIMESTAMP);

      System.simpleSSOLogin(query.get("token"))
        .then((res) => {
          if (!res.valid) throw new Error(res.message);

          window.localStorage.setItem(AUTH_USER, JSON.stringify(res.user));
          window.localStorage.setItem(AUTH_TOKEN, res.token);
          window.localStorage.setItem(AUTH_TIMESTAMP, Number(new Date()));
          setReady(res.valid);
        })
        .catch((e) => {
          setError(e.message || t("sso.errors.loginFailed"));
        });
    } catch (e) {
      setError(e.message || t("sso.errors.unknownError"));
    }
  }, []);

  if (error)
    return (
      <div className="w-screen h-screen overflow-hidden bg-sidebar flex items-center justify-center flex-col gap-4">
        <p className="text-white font-mono text-lg">{error}</p>
        <p className="text-white/80 font-mono text-sm">
          {t("sso.contactAdmin")}
        </p>
      </div>
    );
  if (ready) return <Navigate to={redirectPath} />;

  // Loading state by default
  return <FullScreenLoader />;
}
