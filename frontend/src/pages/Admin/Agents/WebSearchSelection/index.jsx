import React, { useEffect, useRef, useState } from "react";
import Admin from "@/models/admin";
import AnythingLLMIcon from "@/media/logo/anything-llm-icon.png";
import GoogleSearchIcon from "./icons/google.png";
import SearchApiIcon from "./icons/searchapi.png";
import SerperDotDevIcon from "./icons/serper.png";
import BingSearchIcon from "./icons/bing.png";
import SerplySearchIcon from "./icons/serply.png";
import SearXNGSearchIcon from "./icons/searxng.png";
import TavilySearchIcon from "./icons/tavily.svg";
import DuckDuckGoIcon from "./icons/duckduckgo.png";
import {
  CaretUpDown,
  MagnifyingGlass,
  X,
  ListMagnifyingGlass,
} from "@phosphor-icons/react";
import SearchProviderItem from "./SearchProviderItem";
import WebSearchImage from "@/media/agents/scrape-websites.png";
import {
  SearchApiOptions,
  SerperDotDevOptions,
  GoogleSearchOptions,
  BingSearchOptions,
  SerplySearchOptions,
  SearXNGOptions,
  TavilySearchOptions,
  DuckDuckGoOptions,
} from "./SearchProviderOptions";
import { useTranslation } from "react-i18next";

const SEARCH_PROVIDERS = [
  {
    name: "searchProviders.none.name",
    value: "none",
    logo: AnythingLLMIcon,
    options: () => <React.Fragment />,
    description: "searchProviders.none.description",
  },
  {
    name: "searchProviders.duckduckgo.name",
    value: "duckduckgo-engine",
    logo: DuckDuckGoIcon,
    options: () => <DuckDuckGoOptions />,
    description: "searchProviders.duckduckgo.description",
  },
  {
    name: "searchProviders.google.name",
    value: "google-search-engine",
    logo: GoogleSearchIcon,
    options: (settings) => <GoogleSearchOptions settings={settings} />,
    description: "searchProviders.google.description",
  },
  {
    name: "searchProviders.searchApi.name",
    value: "searchapi",
    logo: SearchApiIcon,
    options: (settings) => <SearchApiOptions settings={settings} />,
    description: "searchProviders.searchApi.description",
  },
  {
    name: "searchProviders.serper.name",
    value: "serper-dot-dev",
    logo: SerperDotDevIcon,
    options: (settings) => <SerperDotDevOptions settings={settings} />,
    description: "searchProviders.serper.description",
  },
  {
    name: "searchProviders.bing.name",
    value: "bing-search",
    logo: BingSearchIcon,
    options: (settings) => <BingSearchOptions settings={settings} />,
    description: "searchProviders.bing.description",
  },
  {
    name: "searchProviders.serply.name",
    value: "serply-engine",
    logo: SerplySearchIcon,
    options: (settings) => <SerplySearchOptions settings={settings} />,
    description: "searchProviders.serply.description",
  },
  {
    name: "searchProviders.searxng.name",
    value: "searxng-engine",
    logo: SearXNGSearchIcon,
    options: (settings) => <SearXNGOptions settings={settings} />,
    description: "searchProviders.searxng.description",
  },
  {
    name: "searchProviders.tavily.name",
    value: "tavily-search",
    logo: TavilySearchIcon,
    options: (settings) => <TavilySearchOptions settings={settings} />,
    description: "searchProviders.tavily.description",
  },
];

export default function AgentWebSearchSelection({
  skill,
  settings,
  toggleSkill,
  enabled = false,
  setHasChanges,
}) {
  const { t } = useTranslation();
  const searchInputRef = useRef(null);
  const [filteredResults, setFilteredResults] = useState([]);
  const [selectedProvider, setSelectedProvider] = useState("none");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchMenuOpen, setSearchMenuOpen] = useState(false);

  function updateChoice(selection) {
    setSearchQuery("");
    setSelectedProvider(selection);
    setSearchMenuOpen(false);
    setHasChanges(true);
  }

  function handleXButton() {
    if (searchQuery.length > 0) {
      setSearchQuery("");
      if (searchInputRef.current) searchInputRef.current.value = "";
    } else {
      setSearchMenuOpen(!searchMenuOpen);
    }
  }

  useEffect(() => {
    const filtered = SEARCH_PROVIDERS.filter((provider) =>
      t(provider.name).toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredResults(filtered);
  }, [searchQuery, selectedProvider]);

  useEffect(() => {
    Admin.systemPreferencesByFields(["agent_search_provider"])
      .then((res) =>
        setSelectedProvider(res?.settings?.agent_search_provider ?? "none")
      )
      .catch(() => setSelectedProvider("none"));
  }, []);

  const selectedSearchProviderObject = SEARCH_PROVIDERS.find(
    (provider) => provider.value === selectedProvider
  );

  return (
    <div className="p-2">
      <div className="flex flex-col gap-y-[18px] max-w-[500px]">
        <div className="flex items-center gap-x-2">
          <ListMagnifyingGlass
            size={24}
            color="var(--theme-text-primary)"
            weight="bold"
          />
          <label
            htmlFor="name"
            className="text-theme-text-primary text-md font-bold"
          >
            {t("agentWebSearch.title")}
          </label>
          <label className="border-none relative inline-flex items-center ml-auto cursor-pointer">
            <input
              type="checkbox"
              className="peer sr-only"
              checked={enabled}
              onChange={() => toggleSkill(skill)}
            />
            <div className="peer-disabled:opacity-50 pointer-events-none peer h-6 w-11 rounded-full bg-[#CFCFD0] after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:shadow-xl after:border-none after:bg-white after:box-shadow-md after:transition-all after:content-[''] peer-checked:bg-[#32D583] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-transparent"></div>
            <span className="ml-3 text-sm font-medium"></span>
          </label>
        </div>
        <img
          src={WebSearchImage}
          alt={t("agentWebSearch.imageAlt")}
          className="w-full rounded-md"
        />
        <p className="text-theme-text-secondary text-opacity-60 text-xs font-medium py-1.5">
          {t("agentWebSearch.description")}
        </p>
        <div hidden={!enabled}>
          <div className="relative">
            <input
              type="hidden"
              name="system::agent_search_provider"
              value={selectedProvider}
            />
            {searchMenuOpen && (
              <div
                className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 backdrop-blur-sm z-10"
                onClick={() => setSearchMenuOpen(false)}
              />
            )}
            {searchMenuOpen ? (
              <div className="absolute top-0 left-0 w-full max-w-[640px] max-h-[310px] overflow-auto white-scrollbar min-h-[64px] bg-theme-settings-input-bg rounded-lg flex flex-col justify-between cursor-pointer border-2 border-primary-button z-20">
                <div className="w-full flex flex-col gap-y-1">
                  <div className="flex items-center sticky top-0 border-b border-[#9CA3AF] mx-4 bg-theme-settings-input-bg">
                    <MagnifyingGlass
                      size={20}
                      weight="bold"
                      className="absolute left-4 z-30 text-theme-text-primary -ml-4 my-2"
                    />
                    <input
                      type="text"
                      name="web-provider-search"
                      autoComplete="off"
                      placeholder={t("agentWebSearch.searchPlaceholder")}
                      className="border-none -ml-4 my-2 bg-transparent z-20 pl-12 h-[38px] w-full px-4 py-1 text-sm outline-none text-theme-text-primary placeholder:text-theme-text-primary placeholder:font-medium"
                      onChange={(e) => setSearchQuery(e.target.value)}
                      ref={searchInputRef}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") e.preventDefault();
                      }}
                    />
                    <X
                      size={20}
                      weight="bold"
                      className="cursor-pointer text-white hover:text-x-button"
                      onClick={handleXButton}
                    />
                  </div>
                  <div className="flex-1 pl-4 pr-2 flex flex-col gap-y-1 overflow-y-auto white-scrollbar pb-4">
                    {filteredResults.map((provider) => {
                      return (
                        <SearchProviderItem
                          provider={{
                            ...provider,
                            name: t(provider.name),
                            description: t(provider.description),
                          }}
                          key={provider.name}
                          checked={selectedProvider === provider.value}
                          onClick={() => updateChoice(provider.value)}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              <button
                className="w-full max-w-[640px] h-[64px] bg-theme-settings-input-bg rounded-lg flex items-center p-[14px] justify-between cursor-pointer border-2 border-transparent hover:border-primary-button transition-all duration-300"
                type="button"
                onClick={() => setSearchMenuOpen(true)}
              >
                <div className="flex gap-x-4 items-center">
                  <img
                    src={selectedSearchProviderObject.logo}
                    alt={`${t(selectedSearchProviderObject.name)} logo`}
                    className="w-10 h-10 rounded-md"
                  />
                  <div className="flex flex-col text-left">
                    <div className="text-sm font-semibold text-white">
                      {t(selectedSearchProviderObject.name)}
                    </div>
                    <div className="mt-1 text-xs text-description">
                      {t(selectedSearchProviderObject.description)}
                    </div>
                  </div>
                </div>
                <CaretUpDown size={24} weight="bold" className="text-white" />
              </button>
            )}
          </div>
          {selectedProvider !== "none" && (
            <div className="mt-4 flex flex-col gap-y-1">
              {selectedSearchProviderObject.options(settings)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
