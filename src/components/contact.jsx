import { useTranslation } from "react-i18next";
import logo from "../assets/logo-grande.svg";

export default function Contact() {
  const { t } = useTranslation();

  // Função para abrir o cliente de e-mail
  const handleSendEmail = () => {
    window.location.href = "mailto:contato@background-hub.com";
  };

  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8 mx-8 my-24"
      id="contact"
    >
      {/* Logo */}
      <div className="flex justify-center">
        <img src={logo} alt="Logo" className="w-3/4 max-w-md h-auto" />
      </div>

      {/* Texto e botão */}
      <div className="text-left space-y-6">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
          {t("contact.title")}
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          contato@background-hub.com
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          {t("contact.description")}
        </p>
        {/* Botão que abre o e-mail */}
        <button
          onClick={handleSendEmail}
          className="w-full md:w-auto h-16 p-4 bg-[#0353a4] link-home text-xl md:text-2xl font-bold rounded-md shadow-md flex items-center justify-center transition-all"
        >
          {t("contact.title")}
        </button>
      </div>
    </section>
  );
}