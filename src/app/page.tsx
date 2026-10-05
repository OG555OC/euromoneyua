import Image from "next/image";
import InstallTelegramButton from "./InstallTelegramButton";

const TELEGRAM_LINK = "https://t.me/Wolfgang_Money";
const TELEGRAM_MANAGER_LINK = "https://t.me/Wolfgang_Money";

export default function Home() {
  return (
    <div className="page">
      <main className="card">
        <a
          className="avatar-link"
          href={TELEGRAM_LINK}
          target="_blank"
          rel="noreferrer"
          aria-label="Zum Telegram-Kanal"
        >
          <span className="avatar-frame">
            <Image
              src="/avatar.png"
              alt="Euro Money Avatar"
              width={176}
              height={176}
              priority
              className="avatar"
            />
          </span>
        </a>

        <p className="description">
          Напиши нашему менеджеру в Telegram и узнай, как ты можешь получать по 600 € в неделю!
        </p>

        <div className="actions">
          <a
            className="button button-primary"
            href={TELEGRAM_MANAGER_LINK}
            target="_blank"
            rel="noreferrer"
          >
            <svg
              className="tg-icon"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M21.6 3.7c.4-.1.8.2.7.6l-3.4 16.2c-.1.5-.7.7-1.1.4l-4.9-3.6-2.4 2.3c-.3.3-.8.1-.8-.3l.1-3.8 9.1-8.2c.3-.3 0-.7-.4-.5l-11.4 7-4.7-1.5c-.5-.2-.5-.9.1-1.1L21.6 3.7z"
                fill="#0b2f4f"
              />
            </svg>
            Связаться с менеджером в Телеграм.
          </a>

          <InstallTelegramButton />
        </div>
      </main>
    </div>
  );
}
