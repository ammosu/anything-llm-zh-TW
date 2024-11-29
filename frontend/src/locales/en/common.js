const TRANSLATIONS = {
  common: {
    "workspaces-name": "Workspaces Name",
    error: "error",
    success: "success",
    user: "User",
    selection: "Model Selection",
    saving: "Saving...",
    save: "Save changes",
    previous: "Previous Page",
    next: "Next Page",
    // additional
    Save: "Save",
    cancel: "Cancel",
    unsavedChanges: "Unsaved Changes",
  },

  // Setting Sidebar menu items.
  settings: {
    title: "Instance Settings",
    system: "General Settings",
    invites: "Invites",
    users: "Users",
    workspaces: "Workspaces",
    "workspace-chats": "Workspace Chats",
    customization: "Customization",
    "api-keys": "Developer API",
    llm: "LLM",
    transcription: "Transcription",
    embedder: "Embedder",
    "text-splitting": "Text Splitter & Chunking",
    "voice-speech": "Voice & Speech",
    "vector-database": "Vector Database",
    embeds: "Chat Embed",
    "embed-chats": "Chat Embed History",
    security: "Security",
    "event-logs": "Event Logs",
    privacy: "Privacy & Data",
    "ai-providers": "AI Providers",
    "agent-skills": "Agent Skills",
    admin: "Admin",
    tools: "Tools",
    "experimental-features": "Experimental Features",
    contact: "Contact Support",
    "browser-extension": "Browser Extension",
  },

  // Page Definitions
  login: {
    "multi-user": {
      welcome: "Welcome to",
      "placeholder-username": "Username",
      "placeholder-password": "Password",
      login: "Login",
      validating: "Validating...",
      "forgot-pass": "Forgot password",
      reset: "Reset",
    },
    "sign-in": {
      start: "Sign in to your",
      end: "account.",
    },
    "password-reset": {
      title: "Password Reset",
      description:
        "Provide the necessary information below to reset your password.",
      "recovery-codes": "Recovery Codes",
      "recovery-code": "Recovery Code {{index}}",
      "back-to-login": "Back to Login",
    },
    error: "Error: ",
    resetPasswordForm:{
      title: "Reset Password",
      description: "Enter your new password.",
      newPassword: "New Password",
      confirmPassword: "Confirm Password",
      resetPasswordButton: "Reset Password"
    },
  },

  welcomeMessage: {
    part1:
      "Welcome to AnythingLLM, AnythingLLM is an open-source AI tool by Mintplex Labs that turns anything into a trained chatbot you can query and chat with. AnythingLLM is a BYOK (bring-your-own-keys) software so there is no subscription, fee, or charges for this software outside of the services you want to use with it.",
    part2:
      "AnythingLLM is the easiest way to put powerful AI products like OpenAi, GPT-4, LangChain, PineconeDB, ChromaDB, and other services together in a neat package with no fuss to increase your productivity by 100x.",
    part3:
      "AnythingLLM can run totally locally on your machine with little overhead you wont even notice it's there! No GPU needed. Cloud and on-premises installation is available as well.\nThe AI tooling ecosystem gets more powerful everyday. AnythingLLM makes it easy to use.",
    githubIssue: "Create an issue on Github",
    user1: "How do I get started?!",
    part4:
      "It's simple. All collections are organized into buckets we call \"Workspaces\". Workspaces are buckets of files, documents, images, PDFs, and other files which will be transformed into something LLM's can understand and use in conversation.\n\nYou can add and remove files at anytime.",
    createWorkspace: "Create your first workspace",
    user2:
      "Is this like an AI dropbox or something? What about chatting? It is a chatbot isn't it?",
    part5:
      "AnythingLLM is more than a smarter Dropbox.\n\nAnythingLLM offers two ways of talking with your data:\n\n<i>Query:</i> Your chats will return data or inferences found with the documents in your workspace it has access to. Adding more documents to the Workspace make it smarter! \n\n<i>Conversational:</i> Your documents + your on-going chat history both contribute to the LLM knowledge at the same time. Great for appending real-time text-based info or corrections and misunderstandings the LLM might have. \n\nYou can toggle between either mode \n<i>in the middle of chatting!</i>",
    user3: "Wow, this sounds amazing, let me try it out already!",
    part6: "Have Fun!",
    starOnGithub: "Star on GitHub",
    contact: "Contact Mintplex Labs",
  },

  "new-workspace": {
    title: "New Workspace",
    placeholder: "My Workspace",
    error: "Error: {{error}}",
    save: "Save",
  },

  // Workspace Settings menu items
  "workspaces—settings": {
    general: "General Settings",
    chat: "Chat Settings",
    vector: "Vector Database",
    members: "Members",
    agent: "Agent Configuration",
  },

  // Manage Workspace
  manageWorkspace: {
    editing: "Editing",
    mobileWarning: "Editing these settings are only available on a desktop device. Please access this page on your desktop to continue.",
    dismiss: "Dismiss",
    documents: "Documents",
    dataConnectors: "Data Connectors"
  },

  // Document Settings
  documentSettings: {
    updatingWorkspace: "Updating workspace...",
    updatingWorkspaceInfo: "This may take a while for large documents",
    workspaceUpdated: "Workspace updated successfully.",
    workspaceUpdateError: "Workspace update failed: {{error}}",
    moveSelectedItems: "Move selected items",
    costEstimationInfo: "Cost estimation based on selected items",
    openaiCostPerToken: "OpenAI cost per token: {{cost}}",
    highlightWorkspace: "Highlight workspace",
    saveChanges: "Save changes"
  },

  // Recovery Codes
  recoveryCodes: {
    title: "Recovery Codes",
    description: "In order to reset your password in the future, you will need these recovery codes. Download or copy your recovery codes to save them.",
    warning: "These recovery codes are only shown once!",
    copySuccessMessage: "Recovery codes copied to clipboard",
    fileName: "recovery_codes.txt",
    downloadButton: "Download",
    closeButton: "Close"
  },

  // Data Connector
  dataConnectors: {
    searchPlaceholder: "Search data connectors",
    noResults: "No data connectors found.",
    github: {
      name: "GitHub Repo",
      description: "Import an entire public or private Github repository in a single click.",
      repoLabel: "GitHub Repo URL",
      repoDescription: "URL of the GitHub repository you want to collect.",
      repoPlaceholder: "https://github.com/username/repository",
      tokenLabel: "GitHub Access Token",
      tokenOptional: "optional",
      tokenDescription: "Access Token to prevent rate limiting.",
      tokenPlaceholder: "github_pat_1234_abcdefg",
      ignoreLabel: "File Ignores",
      ignoreDescription: "List in .gitignore format to ignore specific files during collection. Press enter after each entry you want to save.",
      ignorePlaceholder: "!*.js, images/*, .DS_Store, bin/*",
      branchLabel: "Branch",
      branchDescription: "Branch you want to collect files from.",
      branchLoading: "-- loading available branches --",
      loadingButton: "Collecting files...",
      submitButton: "Submit",
      loadingHint: "Once complete, all files will be available for embedding into workspaces in the document picker.",
      patAlert: "Without filling out the GitHub Access Token, this data connector will only collect top-level files due to GitHub API rate limits. Get a free Personal Access Token with a GitHub account here.",
      patTooltip: "Without a Personal Access Token, the GitHub API may limit the number of files collected due to rate limits. Create a temporary Access Token to avoid this issue.",
      toastFetchingFiles: "Fetching all files for repo - this may take a while.",
      toastFilesCollected: "{{files}} {{filePlural}} collected from {{author}}/{{repo}}:{{branch}}. Output folder is {{destination}}."
    },
    gitlab: {
      name: "GitLab Repo",
      description: "Import an entire public or private GitLab repository in a single click.",
      repoLabel: "GitLab Repo URL",
      repoDescription: "URL of the GitLab repo you wish to collect.",
      repoPlaceholder: "https://gitlab.com/gitlab-org/gitlab",
      accessTokenLabel: "GitLab Access Token",
      optional: "optional",
      accessTokenDescription: "Access Token to prevent rate limiting.",
      accessTokenPlaceholder: "glpat-XXXXXXXXXXXXXXXXXXXX",
      fileIgnoresLabel: "File Ignores",
      fileIgnoresDescription: "List in .gitignore format to ignore specific files during collection. Press enter after each entry you want to save.",
      fileIgnoresPlaceholder: "!*.js, images/*, .DS_Store, bin/*",
      toastFetching: "Fetching all files for repo - this may take a while.",
      toastSuccess: "{{files}} {{fileLabel}} collected from {{author}}/{{repo}}:{{branch}}. Output folder is {{destination}}.",
      submit: "Submit",
      submitLoading: "Collecting files...",
      submitDescription: "Once complete, all files will be available for embedding into workspaces in the document picker.",
      branchLabel: "Branch",
      branchDescription: "Branch you wish to collect files from.",
      branchLoading: "-- loading available branches --",
      patAlertMessage: "Without filling out the GitLab Access Token, this data connector will only be able to collect the top-level files of the repo due to GitLab's public API rate-limits.",
      patAlertLinkText: "Get a free Personal Access Token with a GitLab account here.",
      patTooltipMessage: "Without a Personal Access Token, the GitLab API may limit the number of files that can be collected due to rate limits. You can ",
      patTooltipLinkText: "create a temporary Access Token",
      patTooltipMessageSuffix: " to avoid this issue.",
      settingsLabel: "Settings",
      settingsDescription: "Select additional entities to fetch from the GitLab API.",
      fetchIssuesLabel: "Fetch Issues as Documents"
    },
    youtubeTranscript: {
      name: "YouTube Transcript",
      description: "Import the transcription of an entire YouTube video from a link.",
      toastFetching: "Fetching transcript for YouTube video.",
      toastSuccess: "{{title}} by {{author}} transcription completed. Output folder is {{destination}}.",
      formLabel: "YouTube Video URL",
      formDescription: "URL of the YouTube video you wish to transcribe.",
      formPlaceholder: "https://youtube.com/watch?v=abc123",
      formSubmitButton: "Collect transcript",
      formLoading: "Collecting transcript...",
      formLoadingHint: "Once complete, the transcription will be available for embedding into workspaces in the document picker."
    },
    websiteDepth: {
      name: "Bulk Link Scraper",
      description: "Scrape a website and its sub-links up to a certain depth.",
      scrapingInfo: "Scraping website - this may take a while.",
      scrapingSuccess: "Successfully scraped {{count}} {{pages}}!",
      scrapingButtonSubmit: "Submit",
      scrapingButtonLoading: "Scraping website...",
      scrapingNote: "Once complete, all scraped pages will be available for embedding into workspaces in the document picker.",
      urlLabel: "Website URL",
      urlDescription: "URL of the website you want to scrape.",
      urlPlaceholder: "https://example.com",
      depthLabel: "Depth",
      depthDescription: "This is the number of child-links that the worker should follow from the origin URL.",
      maxLinksLabel: "Max Links",
      maxLinksDescription: "Maximum number of links to scrape.",
      page: "page"
    },
    confluence: {
      name: "Confluence",
      description: "Import an entire Confluence page in a single click.",
      toastFetchingPages: "Fetching all pages for Confluence space - this may take a while.",
      toastPagesCollected: "Pages collected from Confluence space {{spaceKey}}. Output folder is {{destination}}.",
      deploymentType: "Confluence deployment type",
      deploymentTypeDescription: "Determine if your Confluence instance is hosted on Atlassian cloud or self-hosted.",
      atlassianCloud: "Atlassian Cloud",
      selfHosted: "Self-hosted",
      baseUrl: "Confluence base URL",
      baseUrlDescription: "This is the base URL of your Confluence space.",
      baseUrlPlaceholder: "eg: https://example.atlassian.net, http://localhost:8211, etc...",
      spaceKey: "Confluence space key",
      spaceKeyDescription: "This is the space key of your Confluence instance. Usually begins with ~",
      spaceKeyPlaceholder: "eg: ~7120208c08555d52224113949698b933a3bb56",
      username: "Confluence Username",
      usernameDescription: "Your Confluence username.",
      usernamePlaceholder: "jdoe@example.com",
      accessToken: "Confluence Access Token",
      accessTokenTooltip: "You need to provide an access token for authentication.",
      accessTokenLinkText: "here",
      accessTokenDescription: "Access token for authentication.",
      accessTokenPlaceholder: "abcd1234",
      submit: "Submit",
      collectingPages: "Collecting pages...",
      loadingMessage: "Once complete, all pages will be available for embedding into workspaces."

    }
  },

  contextMenu: {
    selectAll: "Select All",
    unselectAll: "Unselect All",
    cancel: "Cancel"
  },

  fileRow: {
    cached: "Cached"
  },

  newFolderModal: {
    title: "Create New Folder",
    folderNameLabel: "Folder Name",
    placeholder: "Enter folder name",
    error: "Failed to create folder",
    cancel: "Cancel",
    create: "Create Folder"
  },

  directory: {
    myDocuments: "My Documents",
    searchPlaceholder: "Search for document",
    newFolder: "New Folder",
    name: "Name",
    noDocuments: "No Documents",
    deleteConfirmation: "Are you sure you want to delete these files and folders?\nThis will remove the files from the system and remove them from any existing workspaces automatically.\nThis action is not reversible.",
    removingDocuments: "Removing {{toRemove}} documents and {{foldersToRemove}} folders. Please wait.",
    movingDocuments: "Moving {{count}} documents. Please wait.",
    moveToWorkspace: "Move to Workspace",
    errorMovingFiles: "Error moving files: {{message}}",
    successfullyMoved: "Successfully moved {{count}} documents.",
    searching: "Searching...",
    remove: "Remove",
    uploading: "Uploading..."
  },

  // Documents Upload
  uploadFile: {
    "documentProcessorUnavailable": "Document Processor Unavailable",
    "uploadUnavailableMessage": "We can't upload your files right now because the document processor is offline. Please try again later.",
    "clickToUpload": "Click to upload or drag and drop",
    "supportMessage": "supports text files, csv's, spreadsheets, audio files, and more!",
    "submitLink": "or submit a link",
    "placeholderUrl": "https://example.com",
    "fetchWebsite": "Fetch website",
    "fetching": "Fetching...",
    "disclaimer": "These files will be uploaded to the document processor running on this AnythingLLM instance. These files are not sent or shared with a third party.",
    "scrapingLink": "Scraping link...",
    "uploadLinkSuccess": "Link uploaded successfully",
    "uploadLinkError": "Error uploading link: {{error}}",
    "uploading": "Uploading file...",
  },

  // Workspace Directory
  workspaceDirectory: {
    "name": "Workspace Name",
    "nameColumn": "Name",
    "loadingMessage": "Loading selected files...",
    "noDocuments": "No Documents",
    "estimatedCost": "Estimated Cost: {{cost}}",
    "oneTimeCost": "*One time cost for embeddings",
    "saveAndEmbed": "Save and Embed",
    "selectAll": "Select All",
    "deselectAll": "Deselect All",
    "removeSelected": "Remove Selected",
    "date": "Date: ",
    "type": "Type: ",

    alerts: {
      "pinningTitle": "What is document pinning?",
      "pinningDescription1": "When you <b>pin</b> a document in AnythingLLM we will inject the entire content of the document into your prompt window for your LLM to fully comprehend.",
      "pinningDescription2": "This works best with <b>large-context models</b> or small files that are critical to its knowledge-base.",
      "pinningDescription3": "If you are not getting the answers you desire from AnythingLLM by default then pinning is a great way to get higher quality answers in a click.",
      "watchingTitle": "What does watching a document do?",
      "watchingDescription1": "When you <b>watch</b> a document in AnythingLLM we will <i>automatically</i> sync your document content from its original source on regular intervals. This will automatically update the content in every workspace where this file is managed.",
      "watchingDescription2": "This feature currently supports online-based content and will not be available for manually uploaded documents."
    },

  },

  workspaceFileRow: {
    "removingFileMessage": "Removing file from workspace",
    "removeFileError": "Failed to remove document",
    "pinError": "Failed to {action} document.",
    "pinSuccess": "Document {action} workspace.",
    "pinErrorMessage": "Failed to pin document. {error}",
    "pinTooltip": "Pin to workspace",
    "unpinTooltip": "Un-Pin from workspace",
    "watchError": "Failed to {action} document.",
    "watchSuccess": "Document {action}.",
    "watchErrorMessage": "Failed to watch document. {error}",
    "watchTooltip": "Watch document for changes",
    "unwatchTooltip": "Stop watching for changes",
    "removeTooltip": "Remove document from workspace",
    "removingFileMessage": "Removing file from workspace",
    "nameColumn": "Name",
    "noDocuments": "No Documents"
  },

  // Thread container
  threads: {
    loading: "Loading threads...",
    listAriaLabel: "Threads",
    defaultThreadName: "default",
    startingThread: "Starting Thread...",
    newThread: "New Thread",
    deleteSelected: "Delete Selected",
    newThreadError: "Could not create thread - {{error}}",
    deleted: "deleted thread",
    rename: "Rename",
    delete: "Delete Thread",
    options: "Thread options",
    renamePrompt: "What would you like to rename this thread to?",
    renameError: "Thread could not be updated! {{message}}",
    deleteConfirm: "Are you sure you want to delete this thread? All of its chats will be deleted. You cannot undo this.",
    deleteError: "Thread could not be deleted!",
    deleteSuccess: "Thread deleted successfully!"
  },
  
  // STT
  browserNativeSTT: {
    noConfigurationNeeded: "There is no configuration needed for this provider."
  },

  // TTS
  browserNativeTTS: {
    noConfigurationNeeded: "There is no configuration needed for this provider."
  },

  elevenLabsTTS: {
    apiKeyLabel: "API Key",
    apiKeyPlaceholder: "ElevenLabs API Key",
    modelSelectionLabel: "Chat Model Selection",
    loadingModels: "-- loading available models --"
  },

  openAiGenericTTS: {
    baseUrlLabel: "Base URL",
    baseUrlPlaceholder: "http://localhost:7851/v1",
    baseUrlDescription: "This should be the base URL of the OpenAI compatible TTS service you will generate TTS responses from.",
    apiKeyLabel: "API Key",
    apiKeyPlaceholder: "API Key",
    apiKeyDescription: "Some TTS services require an API key to generate TTS responses - this is optional if your service does not require one.",
    voiceModelLabel: "Voice Model",
    voiceModelPlaceholder: "Your voice model identifier",
    voiceModelDescription: "Most TTS services will have several voice models available, this is the identifier for the voice model you want to use."
  },

  openAiTTS: {
    apiKeyLabel: "API Key",
    apiKeyPlaceholder: "OpenAI API Key",
    voiceModelLabel: "Voice Model",
  }, 

  piperTTS: {
    description: "All PiperTTS models will run in your browser locally. This can be resource intensive on lower-end devices.",
    voiceSelection: "Voice Model Selection",
    loadingModels: "-- loading available models --",
    fetchError: "Could not fetch voices from web worker.",
    flushSuccess: "All voices flushed from browser storage",
    storedModelInfo: "The '✔' indicates this model is already stored locally and does not need to be downloaded when run.",
    flushCache: "Flush voice cache",
    demoMessage: "Hello, welcome to AnythingLLM!",
    stopDemo: "Stop demo",
    loadingVoice: "Loading voice",
    playSample: "Play sample"
  },

  // Transcription
  nativeTranscription: {
    "selection": "Select Whisper Model",
    "warn": {
      "start": "This model is optimized for local usage.",
      "recommend": "We recommend using this model for small tasks.",
      "end": "Expected memory usage: {{size}}"
    }
  },

  openAiWhisperOptions: {
    apiKeyLabel: "API Key",
    apiKeyPlaceholder: "OpenAI API Key",
    whisperModelLabel: "Whisper Model",
    whisperModelOption: "Whisper Large"
  },

  // User Menu
  accountModal: {
    title: "Edit Account",
    pfp: {
      "label": "Profile Picture",
      "dimensions": "800 x 800",
      "remove": "Remove Profile Picture",
      "altText": "User profile picture"
    },
    form: {
      "username": {
        "label": "Username",
        "placeholder": "User's username",
        "helperText": "Username must only contain lowercase letters, numbers, underscores, and hyphens with no spaces"
      },
      "password": {
        "label": "New Password",
        "placeholder": "{{username}}'s new password",
        "helperText": "Password must be at least 8 characters long"
      }
    },
    buttons: {
      "cancel": "Cancel",
      "update": "Update Account"
    },
    errors: {
      "uploadPfp": "Failed to upload profile picture: {{error}}",
      "removePfp": "Failed to remove profile picture: {{error}}",
      "updateProfile": "Failed to update user: {{error}}"
    },
    success: {
      "uploadPfp": "Profile picture uploaded.",
      "removePfp": "Profile picture removed.",
      "updateProfile": "Profile updated."
    },
    languagePreference: {
      "label": "Preferred Language"
    },
    themePreference: {
      "label": "Theme Preference"
    }
  },
  
  userButton: {
    account: "Account",
    support: "Support",
    signOut: "Sign out",
    profilePictureAlt: "User profile picture",
    defaultUsername: "AA"
  },

  // Workspace Chat
  workspaceChat: {
    workspaceNotFound: "Workspace not found!",
    workspaceUnavailable: "It looks like a workspace by this name is not available.",
    goToHomepage: "Go back to homepage",
    copied: "Copied!"
  },

  // Chartable
  chartable: {
    unsupported: "Unsupported chart type.",
  },

  // Citation
  citations: {
    show: "Show Citations",
    hide: "Hide Citations",
    referenced: "Referenced {{count}} times.",
    similarityTooltip: "This is the semantic similarity score of this chunk of text compared to your query calculated by the vector database.",
    match: "match"
  },

  // Historical Message
  historicalMessage: {
    errorMessage: "Could not respond to message.",
    workspaceProfileImage: "Workspace profile picture",
    attachmentImageAlt: "Attachment image: {{name}}"
  },

  // Prompt
  promptReply: {
    loading: "Loading...",
    errorIcon: "Error icon",
    errorMessage: "Could not respond to message.",
    errorReason: "Reason: {{reason}}",
    unknownReason: "unknown",
    response: "Response from assistant"
  },
  workspaceProfileImage: {
    alt: "Workspace profile picture"
  },
  
  // Chat History
  chatHistory: {
    welcomeMessage: "Welcome to your new workspace.",
    getStartedUpload: "To get started either",
    uploadDocument: "upload a document",
    orSendChat: "or send a chat.",
    getStartedSendChat: "To get started send a chat.",
    statusResponse: "{{content}}"
  },
  
  // DnD Uploader
  dndUploader: {
    "addAnything": "Add anything",
    "dropFile": "Drop your file here to embed it into your workspace automatically."
  },

  // Attachments
  attachment: {
    uploading: "Uploading file of size {{size}}...",
    failed: "{{error}}. This file failed to upload and will not be available in the workspace.",
    defaultError: "An error occurred",
    attached: "{{name}} will be attached to this prompt. It will not be embedded permanently.",
    imageAttached: "Image attached!",
    embedded: "{{name}} was uploaded and embedded into this workspace. It will be available for RAG chat now.",
    fileEmbedded: "File embedded!"
  },

  // Reset Command
  resetCommand: {
    "command": "/reset",
    "description": "Clear your chat history and begin a new chat"
  },

  // Exit Command
  agentSession: {
    "exitCommand": "/exit",
    "exitDescription": "Halt the current agent session."
  },

  // Slash Presets
  slashPresets: {
    "toastError": "An error occurred while processing the preset.",
    "addNewPreset": "Add New Preset"
  },

  // Edit Presets
  editPreset: {
    title: "Edit Preset",
    commandLabel: "Command",
    commandPlaceholder: "your-command",
    promptLabel: "Prompt",
    promptPlaceholder: "This is a test prompt. Please respond with a poem about LLMs.",
    descriptionLabel: "Description",
    descriptionPlaceholder: "Responds with a poem about LLMs.",
    confirmDelete: "Are you sure you want to delete this preset?",
    deleteButton: "Delete Preset",
    deleting: "Deleting...",
    cancelButton: "Cancel",
    saveButton: "Save"
  },

  // Add Presets
  addPresetModal: {
    title: "Add New Preset",
    commandLabel: "Command",
    commandPlaceholder: "your-command",
    promptLabel: "Prompt",
    promptPlaceholder: "This is the content that will be injected in front of your prompt.",
    descriptionLabel: "Description",
    descriptionPlaceholder: "Responds with a poem about LLMs.",
    cancelButton: "Cancel",
    saveButton: "Save"
  },

  // General Appearance
  general: {
    vector: {
      title: "Vector Count",
      description: "Total number of vectors in your vector database.",
    },
    names: {
      description: "This will only change the display name of your workspace.",
    },
    message: {
      title: "Suggested Chat Messages",
      description:
        "Customize the messages that will be suggested to your workspace users.",
      add: "Add new message",
      save: "Save Messages",
      heading: "Explain to me",
      body: "the benefits of AnythingLLM",
    },
    pfp: {
      title: "Assistant Profile Image",
      description:
        "Customize the profile image of the assistant for this workspace.",
      image: "Workspace Image",
      remove: "Remove Workspace Image",
    },
    delete: {
      title: "Delete Workspace",
      description:
        "Delete this workspace and all of its data. This will delete the workspace for all users.",
      delete: "Delete Workspace",
      deleting: "Deleting Workspace...",
      "confirm-start": "You are about to delete your entire",
      "confirm-end":
        "workspace. This will remove all vector embeddings in your vector database.\n\nThe original source files will remain untouched. This action is irreversible.",
    },
  },

  // ChangeWarning
  changeWarning: {
    "title": "Warning",
    "confirmMessage": "Are you sure you want to proceed?",
    "cancel": "Cancel",
    "confirm": "Confirm"
  },

  // Chat Settings
  chat: {
    llm: {
      title: "Workspace LLM Provider",
      description:
        "The specific LLM provider & model that will be used for this workspace. By default, it uses the system LLM provider and settings.",
      search: "Search all LLM providers",
    },
    model: {
      title: "Workspace Chat model",
      description:
        "The specific chat model that will be used for this workspace. If empty, will use the system LLM preference.",
      wait: "-- waiting for models --",
    },
    mode: {
      title: "Chat mode",
      chat: {
        title: "Chat",
        "desc-start": "will provide answers with the LLM's general knowledge",
        and: "and",
        "desc-end": "document context that is found.",
      },
      query: {
        title: "Query",
        "desc-start": "will provide answers",
        only: "only",
        "desc-end": "if document context is found.",
      },
    },
    history: {
      title: "Chat History",
      "desc-start":
        "The number of previous chats that will be included in the response's short-term memory.",
      recommend: "Recommend 20. ",
      "desc-end":
        "Anything more than 45 is likely to lead to continuous chat failures depending on message size.",
    },
    prompt: {
      title: "Prompt",
      description:
        "The prompt that will be used on this workspace. Define the context and instructions for the AI to generate a response. You should to provide a carefully crafted prompt so the AI can generate a relevant and accurate response.",
    },
    refusal: {
      title: "Query mode refusal response",
      "desc-start": "When in",
      query: "query",
      "desc-end":
        "mode, you may want to return a custom refusal response when no context is found.",
    },
    temperature: {
      title: "LLM Temperature",
      "desc-start":
        'This setting controls how "creative" your LLM responses will be.',
      "desc-end":
        "The higher the number the more creative. For some models this can lead to incoherent responses when set too high.",
      hint: "Most LLMs have various acceptable ranges of valid values. Consult your LLM provider for that information.",
    },
  },

  // Vector Database
  "vector-workspace": {
    identifier: "Vector database identifier",
    snippets: {
      title: "Max Context Snippets",
      description:
        "This setting controls the maximum amount of context snippets the will be sent to the LLM for per chat or query.",
      recommend: "Recommended: 4",
    },
    doc: {
      title: "Document similarity threshold",
      description:
        "The minimum similarity score required for a source to be considered related to the chat. The higher the number, the more similar the source must be to the chat.",
      zero: "No restriction",
      low: "Low (similarity score ≥ .25)",
      medium: "Medium (similarity score ≥ .50)",
      high: "High (similarity score ≥ .75)",
    },
    reset: {
      reset: "Reset Vector Database",
      resetting: "Clearing vectors...",
      confirm:
        "You are about to reset this workspace's vector database. This will remove all vector embeddings currently embedded.\n\nThe original source files will remain untouched. This action is irreversible.",
      error: "Workspace vector database could not be reset!",
      success: "Workspace vector database was reset!",
    },
  },

  // Agent Configuration
  agent: {
    "performance-warning":
      "Performance of LLMs that do not explicitly support tool-calling is highly dependent on the model's capabilities and accuracy. Some abilities may be limited or non-functional.",
    provider: {
      title: "Workspace Agent LLM Provider",
      description:
        "The specific LLM provider & model that will be used for this workspace's @agent agent.",
    },
    mode: {
      chat: {
        title: "Workspace Agent Chat model",
        description:
          "The specific chat model that will be used for this workspace's @agent agent.",
      },
      title: "Workspace Agent model",
      description:
        "The specific LLM model that will be used for this workspace's @agent agent.",
      wait: "-- waiting for models --",
    },

    skill: {
      title: "Default agent skills",
      description:
        "Improve the natural abilities of the default agent with these pre-built skills. This set up applies to all workspaces.",
      rag: {
        title: "RAG & long-term memory",
        description:
          'Allow the agent to leverage your local documents to answer a query or ask the agent to "remember" pieces of content for long-term memory retrieval.',
      },
      view: {
        title: "View & summarize documents",
        description:
          "Allow the agent to list and summarize the content of workspace files currently embedded.",
      },
      scrape: {
        title: "Scrape websites",
        description:
          "Allow the agent to visit and scrape the content of websites.",
      },
      generate: {
        title: "Generate charts",
        description:
          "Enable the default agent to generate various types of charts from data provided or given in chat.",
      },
      save: {
        title: "Generate & save files to browser",
        description:
          "Enable the default agent to generate and write to files that save and can be downloaded in your browser.",
      },
      web: {
        title: "Live web search and browsing",
        "desc-start":
          "Enable your agent to search the web to answer your questions by connecting to a web-search (SERP) provider.",
        "desc-end":
          "Web search during agent sessions will not work until this is set up.",
      },
    },
  },

  // Workspace Chats
  recorded: {
    title: "Workspace Chats",
    description:
      "These are all the recorded chats and messages that have been sent by users ordered by their creation date.",
    export: "Export",
    table: {
      id: "Id",
      by: "Sent By",
      workspace: "Workspace",
      prompt: "Prompt",
      response: "Response",
      at: "Sent At",
    },
  },

  // Appearance
  appearance: {
    title: "Appearance",
    description: "Customize the appearance settings of your platform.",
    logo: {
      title: "Customize Logo",
      description: "Upload your custom logo to make your chatbot yours.",
      add: "Add a custom logo",
      recommended: "Recommended size: 800 x 200",
      remove: "Remove",
      replace: "Replace",
    },
    message: {
      title: "Customize Messages",
      description: "Customize the automatic messages displayed to your users.",
      new: "New",
      system: "system",
      user: "user",
      message: "message",
      assistant: "AnythingLLM Chat Assistant",
      "double-click": "Double click to edit...",
      save: "Save Messages",
    },
    icons: {
      title: "Custom Footer Icons",
      description:
        "Customize the footer icons displayed on the bottom of the sidebar.",
      icon: "Icon",
      link: "Link",
    },
  },

  // API Keys
  api: {
    title: "API Keys",
    description:
      "API keys allow the holder to programmatically access and manage this AnythingLLM instance.",
    link: "Read the API documentation",
    generate: "Generate New API Key",
    table: {
      key: "API Key",
      by: "Created By",
      created: "Created",
    },
  },

  llm: {
    title: "LLM Preference",
    description:
      "These are the credentials and settings for your preferred LLM chat & embedding provider. Its important these keys are current and correct or else AnythingLLM will not function properly.",
    provider: "LLM Provider",
  },

  transcription: {
    title: "Transcription Model Preference",
    description:
      "These are the credentials and settings for your preferred transcription model provider. Its important these keys are current and correct or else media files and audio will not transcribe.",
    provider: "Transcription Provider",
    "warn-start":
      "Using the local whisper model on machines with limited RAM or CPU can stall AnythingLLM when processing media files.",
    "warn-recommend":
      "We recommend at least 2GB of RAM and upload files <10Mb.",
    "warn-end":
      "The built-in model will automatically download on the first use.",
  },

  embedding: {
    title: "Embedding Preference",
    "desc-start":
      "When using an LLM that does not natively support an embedding engine - you may need to additionally specify credentials to for embedding text.",
    "desc-end":
      "Embedding is the process of turning text into vectors. These credentials are required to turn your files and prompts into a format which AnythingLLM can use to process.",
    provider: {
      title: "Embedding Provider",
      description:
        "There is no set up required when using AnythingLLM's native embedding engine.",
    },
  },

  text: {
    title: "Text splitting & Chunking Preferences",
    "desc-start":
      "Sometimes, you may want to change the default way that new documents are split and chunked before being inserted into your vector database.",
    "desc-end":
      "You should only modify this setting if you understand how text splitting works and it's side effects.",
    "warn-start": "Changes here will only apply to",
    "warn-center": "newly embedded documents",
    "warn-end": ", not existing documents.",
    size: {
      title: "Text Chunk Size",
      description:
        "This is the maximum length of characters that can be present in a single vector.",
      recommend: "Embed model maximum length is",
    },

    overlap: {
      title: "Text Chunk Overlap",
      description:
        "This is the maximum overlap of characters that occurs during chunking between two adjacent text chunks.",
    },
  },

  // Vector Database
  vector: {
    title: "Vector Database",
    description:
      "These are the credentials and settings for how your AnythingLLM instance will function. It's important these keys are current and correct.",
    provider: {
      title: "Vector Database Provider",
      description: "There is no configuration needed for LanceDB.",
    },
  },

  // Embeddable Chat Widgets
  embeddable: {
    title: "Embeddable Chat Widgets",
    description:
      "Embeddable chat widgets are public facing chat interfaces that are tied to a single workspace. These allow you to build workspaces that then you can publish to the world.",
    create: "Create embed",
    table: {
      workspace: "Workspace",
      chats: "Sent Chats",
      Active: "Active Domains",
    },
  },

  "embed-chats": {
    title: "Embed Chats",
    export: "Export",
    description:
      "These are all the recorded chats and messages from any embed that you have published.",
    table: {
      embed: "Embed",
      sender: "Sender",
      message: "Message",
      response: "Response",
      at: "Sent At",
    },
  },

  multi: {
    title: "Multi-User Mode",
    description:
      "Set up your instance to support your team by activating Multi-User Mode.",
    enable: {
      "is-enable": "Multi-User Mode is Enabled",
      enable: "Enable Multi-User Mode",
      description:
        "By default, you will be the only admin. As an admin you will need to create accounts for all new users or admins. Do not lose your password as only an Admin user can reset passwords.",
      username: "Admin account username",
      password: "Admin account password",
    },
    password: {
      title: "Password Protection",
      description:
        "Protect your AnythingLLM instance with a password. If you forget this there is no recovery method so ensure you save this password.",
    },
    instance: {
      title: "Password Protect Instance",
      description:
        "By default, you will be the only admin. As an admin you will need to create accounts for all new users or admins. Do not lose your password as only an Admin user can reset passwords.",
      password: "Instance password",
    },
  },

  // Event Logs
  event: {
    title: "Event Logs",
    description:
      "View all actions and events happening on this instance for monitoring.",
    clear: "Clear Event Logs",
    table: {
      type: "Event Type",
      user: "User",
      occurred: "Occurred At",
    },
  },

  // Privacy & Data-Handling
  privacy: {
    title: "Privacy & Data-Handling",
    description:
      "This is your configuration for how connected third party providers and AnythingLLM handle your data.",
    llm: "LLM Selection",
    embedding: "Embedding Preference",
    vector: "Vector Database",
    anonymous: "Anonymous Telemetry Enabled",
  },
};

export default TRANSLATIONS;
