import truncate from "truncate";
import { X, Trash, LinkSimple } from "@phosphor-icons/react";
import ModalWrapper from "@/components/ModalWrapper";
import { useModal } from "@/hooks/useModal";
import paths from "@/utils/paths";
import Embed from "@/models/embed";
import { useTranslation } from "react-i18next";

export default function ChatRow({ chat, onDelete }) {
  const { t } = useTranslation();

  const {
    isOpen: isPromptOpen,
    openModal: openPromptModal,
    closeModal: closePromptModal,
  } = useModal();
  const {
    isOpen: isResponseOpen,
    openModal: openResponseModal,
    closeModal: closeResponseModal,
  } = useModal();
  const {
    isOpen: isConnectionDetailsModalOpen,
    openModal: openConnectionDetailsModal,
    closeModal: closeConnectionDetailsModal,
  } = useModal();

  const handleDelete = async () => {
    if (
      !window.confirm(t("embedChatRow.confirmDelete"))
    )
      return false;
    await Embed.deleteChat(chat.id);
    onDelete(chat.id);
  };

  return (
    <>
      <tr className="bg-transparent text-white text-opacity-80 text-sm font-medium">
        <td className="px-6 py-4 font-medium whitespace-nowrap text-white">
          <a
            href={paths.settings.embedSetup()}
            target="_blank"
            rel="noreferrer"
            className="text-white flex items-center hover:underline"
          >
            <LinkSimple className="mr-2 w-5 h-5" />{" "}
            {chat.embed_config.workspace.name}
          </a>
        </td>
        <td
          onClick={openConnectionDetailsModal}
          className="px-6 py-4 cursor-pointer transform transition-transform duration-200 hover:scale-105 hover:shadow-lg"
        >
          <div className="flex flex-col">
            <p>{truncate(chat.session_id, 20)}</p>
            <ConnectionDetails
              connection_information={chat.connection_information}
            />
          </div>
        </td>
        <td
          onClick={openPromptModal}
          className="px-6 py-4 border-transparent cursor-pointer transform transition-transform duration-200 hover:scale-105 hover:shadow-lg"
        >
          {truncate(chat.prompt, 40)}
        </td>
        <td
          onClick={openResponseModal}
          className="px-6 py-4 cursor-pointer transform transition-transform duration-200 hover:scale-105 hover:shadow-lg"
        >
          {truncate(JSON.parse(chat.response)?.text, 40)}
        </td>
        <td className="px-6 py-4">{chat.createdAt}</td>
        <td className="px-6 py-4 flex items-center gap-x-6">
          <button
            onClick={handleDelete}
            className="border-none font-medium px-2 py-1 rounded-lg text-theme-text-primary hover:text-red-500"
          >
            <Trash className="h-5 w-5" />
          </button>
        </td>
      </tr>
      <ModalWrapper isOpen={isPromptOpen}>
        <TextPreview text={chat.prompt} closeModal={closePromptModal} />
      </ModalWrapper>
      <ModalWrapper isOpen={isResponseOpen}>
        <TextPreview
          text={JSON.parse(chat.response)?.text}
          closeModal={closeResponseModal}
        />
      </ModalWrapper>
      <ModalWrapper isOpen={isConnectionDetailsModalOpen}>
        <TextPreview
          text={
            <ConnectionDetails
              sessionId={chat.session_id}
              verbose={true}
              connection_information={chat.connection_information}
            />
          }
          closeModal={closeConnectionDetailsModal}
        />
      </ModalWrapper>
    </>
  );
}

const TextPreview = ({ text, closeModal }) => {
  return (
    <div className="relative w-full md:max-w-2xl max-h-full">
      <div className="w-full max-w-2xl bg-theme-bg-secondary rounded-lg shadow border-2 border-theme-modal-border overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b rounded-t border-theme-modal-border">
          <h3 className="text-xl font-semibold text-white">
            {t("embedChatRow.viewingText")}
          </h3>
          <button
            onClick={closeModal}
            type="button"
            className="bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center bg-sidebar-button hover:bg-theme-modal-border hover:border-theme-modal-border hover:border-opacity-50 border-transparent border"
          >
            <X className="text-white text-lg" />
          </button>
        </div>
        <div className="w-full p-6">
          <pre className="w-full h-[200px] py-2 px-4 whitespace-pre-line overflow-auto rounded-lg bg-zinc-900 light:bg-theme-bg-secondary border border-gray-500 text-white text-sm">
            {text}
          </pre>
        </div>
      </div>
    </div>
  );
};

const ConnectionDetails = ({
  sessionId,
  verbose = false,
  connection_information,
}) => {
  const { t } = useTranslation();
  let details = {};
  try {
    details = JSON.parse(connection_information);
  } catch {}

  if (Object.keys(details).length === 0) return null;

  if (verbose) {
    return (
      <>
        <p className="text-xs text-theme-text-secondary">
          {t("chatRow.connectionDetails.sessionId")}: {sessionId}
        </p>
        {details.username && (
          <p className="text-xs text-theme-text-secondary">
            {t("chatRow.connectionDetails.username")}: {details.username}
          </p>
        )}
        {details.ip && (
          <p className="text-xs text-theme-text-secondary">
            {t("chatRow.connectionDetails.ip")}: {details.ip}
          </p>
        )}
        {details.host && (
          <p className="text-xs text-theme-text-secondary">
            {t("chatRow.connectionDetails.host")}: {details.host}
          </p>
        )}
      </>
    );
  }

  return (
    <>
      {details.username && (
        <p className="text-xs text-theme-text-secondary">{details.username}</p>
      )}
      {details.ip && (
        <p className="text-xs text-theme-text-secondary">{details.ip}</p>
      )}
      {details.host && (
        <p className="text-xs text-theme-text-secondary">{details.host}</p>
      )}
    </>
  );
};
