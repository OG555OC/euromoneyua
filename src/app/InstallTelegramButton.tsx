"use client";

import { useEffect, useState } from "react";

const DEFAULT_INSTALL_LINK = "https://telegram.org/apps";
const IOS_APP_STORE =
  "https://apps.apple.com/app/telegram-messenger/id686449807";
const ANDROID_PLAY =
  "https://play.google.com/store/apps/details?id=org.telegram.messenger";

export default function InstallTelegramButton() {
  const [installLink, setInstallLink] = useState(DEFAULT_INSTALL_LINK);

  useEffect(() => {
    const ua = navigator.userAgent || "";

    if (/android/i.test(ua)) {
      setInstallLink(ANDROID_PLAY);
      return;
    }

    if (/iphone|ipad|ipod/i.test(ua)) {
      setInstallLink(IOS_APP_STORE);
      return;
    }

    setInstallLink(DEFAULT_INSTALL_LINK);
  }, []);

  return (
    <a
      className="button button-secondary"
      href={installLink}
      target="_blank"
      rel="noreferrer"
    >
      У меня нет Телеграм.
    </a>
  );
}
