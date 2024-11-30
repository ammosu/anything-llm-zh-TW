import { useTranslation } from "react-i18next";

export function GoogleSearchOptions({ settings }) {
  const { t } = useTranslation();
  return (
    <>
      <p className="text-sm text-white/60 my-2">
        {t("agentWebSearchOptions.googleSearch.description")}{" "}
        <a
          href="https://programmablesearchengine.google.com/controlpanel/create"
          target="_blank"
          rel="noreferrer"
          className="text-blue-300 underline"
        >
          {t("agentWebSearchOptions.googleSearch.linkText")}
        </a>
      </p>
      <div className="flex gap-x-4">
        <div className="flex flex-col w-60">
          <label className="text-white text-sm font-semibold block mb-3">
            {t("agentWebSearchOptions.googleSearch.engineIdLabel")}
          </label>
          <input
            type="text"
            name="env::AgentGoogleSearchEngineId"
            className="border-none bg-theme-settings-input-bg text-white placeholder:text-theme-settings-input-placeholder text-sm rounded-lg focus:outline-primary-button active:outline-primary-button outline-none block w-full p-2.5"
            placeholder={t("agentWebSearchOptions.googleSearch.engineIdPlaceholder")}
            defaultValue={settings?.AgentGoogleSearchEngineId}
            required
            autoComplete="off"
            spellCheck={false}
          />
        </div>
        <div className="flex flex-col w-60">
          <label className="text-white text-sm font-semibold block mb-3">
            {t("agentWebSearchOptions.googleSearch.apiKeyLabel")}
          </label>
          <input
            type="password"
            name="env::AgentGoogleSearchEngineKey"
            className="border-none bg-theme-settings-input-bg text-white placeholder:text-theme-settings-input-placeholder text-sm rounded-lg focus:outline-primary-button active:outline-primary-button outline-none block w-full p-2.5"
            placeholder={t("agentWebSearchOptions.googleSearch.apiKeyPlaceholder")}
            defaultValue={
              settings?.AgentGoogleSearchEngineKey ? "*".repeat(20) : ""
            }
            required
            autoComplete="off"
            spellCheck={false}
          />
        </div>
      </div>
    </>
  );
}

export function SearchApiOptions({ settings }) {
  const { t } = useTranslation();
  const SearchApiEngines = [
    { name: t("agentWebSearchOptions.searchApi.engine.googleSearch"), value: "google" },
    { name: t("agentWebSearchOptions.searchApi.engine.googleMaps"), value: "google_maps" },
    { name: t("agentWebSearchOptions.searchApi.engine.googleShopping"), value: "google_shopping" },
    { name: t("agentWebSearchOptions.searchApi.engine.googleNews"), value: "google_news" },
    { name: t("agentWebSearchOptions.searchApi.engine.googleJobs"), value: "google_jobs" },
    { name: t("agentWebSearchOptions.searchApi.engine.googleScholar"), value: "google_scholar" },
    { name: t("agentWebSearchOptions.searchApi.engine.googleFinance"), value: "google_finance" },
    { name: t("agentWebSearchOptions.searchApi.engine.googlePatents"), value: "google_patents" },
    { name: t("agentWebSearchOptions.searchApi.engine.youtube"), value: "youtube" },
    { name: t("agentWebSearchOptions.searchApi.engine.bing"), value: "bing" },
    { name: t("agentWebSearchOptions.searchApi.engine.bingNews"), value: "bing_news" },
    { name: t("agentWebSearchOptions.searchApi.engine.amazonSearch"), value: "amazon_search" },
    { name: t("agentWebSearchOptions.searchApi.engine.baidu"), value: "baidu" },
  ];

  return (
    <>
      <p className="text-sm text-white/60 my-2">
        {t("agentWebSearchOptions.searchApi.description")}{" "}
        <a
          href="https://www.searchapi.io/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-300 underline"
        >
          {t("agentWebSearchOptions.searchApi.linkText")}
        </a>
      </p>
      <div className="flex gap-x-4">
        <div className="flex flex-col w-60">
          <label className="text-white text-sm font-semibold block mb-3">
            {t("agentWebSearchOptions.searchApi.apiKeyLabel")}
          </label>
          <input
            type="password"
            name="env::AgentSearchApiKey"
            className="border-none bg-theme-settings-input-bg text-white placeholder:text-theme-settings-input-placeholder text-sm rounded-lg focus:outline-primary-button active:outline-primary-button outline-none block w-full p-2.5"
            placeholder={t("agentWebSearchOptions.searchApi.apiKeyPlaceholder")}
            defaultValue={settings?.AgentSearchApiKey ? "*".repeat(20) : ""}
            required
            autoComplete="off"
            spellCheck={false}
          />
        </div>
        <div className="flex flex-col w-60">
          <label className="text-white text-sm font-semibold block mb-3">
            {t("agentWebSearchOptions.searchApi.engineLabel")}
          </label>
          <select
            name="env::AgentSearchApiEngine"
            required
            className="border-none bg-theme-settings-input-bg text-white placeholder:text-theme-settings-input-placeholder text-sm rounded-lg focus:outline-primary-button active:outline-primary-button outline-none block w-full p-2.5"
            defaultValue={settings?.AgentSearchApiEngine || "google"}
          >
            {SearchApiEngines.map(({ name, value }) => (
              <option key={value} value={value}>
                {name}
              </option>
            ))}
          </select>
          {/* <input
            type="text"
            name="env::AgentSearchApiEngine"
            className="border-none bg-theme-settings-input-bg text-white placeholder:text-theme-settings-input-placeholder text-sm rounded-lg focus:outline-primary-button active:outline-primary-button outline-none block w-full p-2.5"
            placeholder="SearchApi engine (Google, Bing...)"
            defaultValue={settings?.AgentSearchApiEngine || "google"}
            required={true}
            autoComplete="off"
            spellCheck={false}
          /> */}
        </div>
      </div>
    </>
  );
}

export function SerperDotDevOptions({ settings }) {
  const { t } = useTranslation();
  return (
    <>
      <p className="text-sm text-white/60 my-2">
        {t("agentWebSearchOptions.serper.description")}{" "}
        <a
          href="https://serper.dev"
          target="_blank"
          rel="noreferrer"
          className="text-blue-300 underline"
        >
          {t("agentWebSearchOptions.serper.linkText")}
        </a>
      </p>
      <div className="flex gap-x-4">
        <div className="flex flex-col w-60">
          <label className="text-white text-sm font-semibold block mb-3">
            {t("agentWebSearchOptions.serper.apiKeyLabel")}
          </label>
          <input
            type="password"
            name="env::AgentSerperApiKey"
            className="border-none bg-theme-settings-input-bg text-white placeholder:text-theme-settings-input-placeholder text-sm rounded-lg focus:outline-primary-button active:outline-primary-button outline-none block w-full p-2.5"
            placeholder={t("agentWebSearchOptions.serper.apiKeyPlaceholder")}
            defaultValue={settings?.AgentSerperApiKey ? "*".repeat(20) : ""}
            required
            autoComplete="off"
            spellCheck={false}
          />
        </div>
      </div>
    </>
  );
}

export function BingSearchOptions({ settings }) {
  const { t } = useTranslation();
  return (
    <>
      <p className="text-sm text-white/60 my-2">
        {t("agentWebSearchOptions.bing.description")}{" "}
        <a
          href="https://portal.azure.com/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-300 underline"
        >
          {t("agentWebSearchOptions.bing.linkText")}
        </a>
      </p>
      <div className="flex gap-x-4">
        <div className="flex flex-col w-60">
          <label className="text-white text-sm font-semibold block mb-3">
            {t("agentWebSearchOptions.bing.apiKeyLabel")}
          </label>
          <input
            type="password"
            name="env::AgentBingSearchApiKey"
            className="border-none bg-theme-settings-input-bg text-white placeholder:text-theme-settings-input-placeholder text-sm rounded-lg focus:outline-primary-button active:outline-primary-button outline-none block w-full p-2.5"
            placeholder={t("agentWebSearchOptions.bing.apiKeyPlaceholder")}
            defaultValue={settings?.AgentBingSearchApiKey ? "*".repeat(20) : ""}
            required
            autoComplete="off"
            spellCheck={false}
          />
        </div>
      </div>
      <p className="text-sm text-white/60 my-2">{t("agentWebSearchOptions.bing.setupInstructions")}</p>
      <ol className="list-decimal text-sm text-white/60 ml-6">
        <li>
          {t("agentWebSearchOptions.bing.step1")}{" "}
          <a
            href="https://portal.azure.com/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-300 underline"
          >
            {t("agentWebSearchOptions.bing.step1Link")}
          </a>
        </li>
        <li>{t("agentWebSearchOptions.bing.step2")}</li>
        <li>{t("agentWebSearchOptions.bing.step3")}</li>
        <li>{t("agentWebSearchOptions.bing.step4")}</li>
        <li>{t("agentWebSearchOptions.bing.step5")}</li>
        <li>{t("agentWebSearchOptions.bing.step6")}</li>
      </ol>
    </>
  );
}

export function SerplySearchOptions({ settings }) {
  const { t } = useTranslation();
  return (
    <>
      <p className="text-sm text-white/60 my-2">
        {t("agentWebSearchOptions.serply.description")}{" "}
        <a
          href="https://serply.io"
          target="_blank"
          rel="noreferrer"
          className="text-blue-300 underline"
        >
          {t("agentWebSearchOptions.serply.linkText")}
        </a>
      </p>
      <div className="flex gap-x-4">
        <div className="flex flex-col w-60">
          <label className="text-white text-sm font-semibold block mb-3">
            {t("agentWebSearchOptions.serply.apiKeyLabel")}
          </label>
          <input
            type="password"
            name="env::AgentSerplyApiKey"
            className="border-none bg-theme-settings-input-bg text-white placeholder:text-theme-settings-input-placeholder text-sm rounded-lg focus:outline-primary-button active:outline-primary-button outline-none block w-full p-2.5"
            placeholder={t("agentWebSearchOptions.serply.apiKeyPlaceholder")}
            defaultValue={settings?.AgentSerplyApiKey ? "*".repeat(20) : ""}
            required
            autoComplete="off"
            spellCheck={false}
          />
        </div>
      </div>
    </>
  );
}

export function SearXNGOptions({ settings }) {
  const { t } = useTranslation();
  return (
    <div className="flex gap-x-4">
      <div className="flex flex-col w-60">
        <label className="text-white text-sm font-semibold block mb-3">
          {t("agentWebSearchOptions.searxng.apiBaseUrlLabel")}
        </label>
        <input
          type="url"
          name="env::AgentSearXNGApiUrl"
          className="border-none bg-theme-settings-input-bg text-white placeholder:text-theme-settings-input-placeholder text-sm rounded-lg focus:outline-primary-button active:outline-primary-button outline-none block w-full p-2.5"
          placeholder={t("agentWebSearchOptions.searxng.apiBaseUrlPlaceholder")}
          defaultValue={settings?.AgentSearXNGApiUrl}
          required
          autoComplete="off"
          spellCheck={false}
        />
      </div>
    </div>
  );
}

export function TavilySearchOptions({ settings }) {
  const { t } = useTranslation();
  return (
    <>
      <p className="text-sm text-white/60 my-2">
        {t("agentWebSearchOptions.tavily.description")}{" "}
        <a
          href="https://tavily.com/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-300 underline"
        >
          {t("agentWebSearchOptions.tavily.linkText")}
        </a>
      </p>
      <div className="flex gap-x-4">
        <div className="flex flex-col w-60">
          <label className="text-white text-sm font-semibold block mb-3">
            {t("agentWebSearchOptions.tavily.apiKeyLabel")}
          </label>
          <input
            type="password"
            name="env::AgentTavilyApiKey"
            className="border-none bg-theme-settings-input-bg text-white placeholder:text-theme-settings-input-placeholder text-sm rounded-lg focus:outline-primary-button active:outline-primary-button outline-none block w-full p-2.5"
            placeholder={t("agentWebSearchOptions.tavily.apiKeyPlaceholder")}
            defaultValue={settings?.AgentTavilyApiKey ? "*".repeat(20) : ""}
            required
            autoComplete="off"
            spellCheck={false}
          />
        </div>
      </div>
    </>
  );
}

export function DuckDuckGoOptions() {
  const { t } = useTranslation();
  return (
    <>
      <p className="text-sm text-white/60 my-2">
        {t("agentWebSearchOptions.duckDuckGo.readyToUse")}
      </p>
    </>
  );
}

