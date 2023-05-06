import { type TelegramWebApps } from "@/types/globals";
import { useEffect, useState } from "react";

export const useTelgeram = () => {
  const [telegram, setTelegram] = useState<TelegramWebApps.WebApp | null>(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setTelegram(window.Telegram.WebApp);
    }
  }, []);
  return telegram;
};
