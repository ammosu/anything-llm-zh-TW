// Anything with "null" requires a translation. Contribute to translation via a PR!
const TRANSLATIONS = {
  common: {
    "workspaces-name": "工作区名称",
    error: "错误",
    success: "成功",
    user: "用户",
    selection: "模型选择",
    save: "保存更改",
    saving: "保存中...",
    previous: "上一页",
    next: "下一页",
    Save: "保存",
    cancel: "取消",
    unsavedChanges: "尚未保存的變更",
  },

  // Setting Sidebar menu items.
  settings: {
    title: "设置",
    system: "系统",
    invites: "邀请",
    users: "用户",
    workspaces: "工作区",
    "workspace-chats": "对话历史记录", //  "workspace-chats" should be  "对话历史记录", means "chat history",or "chat history records"
    customization: "外观",
    "api-keys": "API 密钥",
    llm: "LLM 首选项",
    transcription: "转录模型",
    embedder: "Embedder 首选项",
    "text-splitting": "文本分割",
    "voice-speech": "语音和讲话",
    "vector-database": "向量数据库",
    embeds: "嵌入式对话",
    "embed-chats": "嵌入式对话历史记录",
    security: "用户与安全",
    "event-logs": "事件日志",
    privacy: "隐私与数据",
    "ai-providers": "人工智能提供商",
    "agent-skills": "代理技能",
    admin: "管理员",
    tools: "工具",
    "experimental-features": "实验功能",
    contact: "联系支持",
    "browser-extension": "浏览器扩展",
  },

  // Page Definitions
  login: {
    "multi-user": {
      welcome: "欢迎！",
      "placeholder-username": "请输入用户名",
      "placeholder-password": "请输入密码",
      login: "登录",
      validating: "登录",
      "forgot-pass": "忘记密码",
      reset: "重置",
    },
    "sign-in": {
      start: "登录你的",
      end: "账户",
    },
    "password-reset": {
      title: "重置密码",
      description: 
        "请提供以下必要信息以重置您的密码。",
      "recovery-codes": "恢复代码",
      "recovery-code": "恢复代码 {{index}}",
      "back-to-login": "返回登录",
    },
    error: "错误: ",
    resetPasswordForm:{
      title: "重置密码",
      description: "输入您的新密码。",
      newPassword: "新密码",
      confirmPassword: "确认密码",
      resetPasswordButton: "重置密码"
    },
  },

  welcomeMessage: {
    part1:
      "欢迎使用 AnythingLLM，这是由 Mintplex Labs 开发的开源 AI 工具，可以将任何东西转换为您可以查询和聊天的训练有素的聊天机器人。AnythingLLM 是一款 BYOK（自带密钥）软件，因此除了您想使用的服务外，此软件不收取订阅费、费用或其他费用。",
    part2:
      "AnythingLLM 是将强大的 AI 产品（如 OpenAi、GPT-4、LangChain、PineconeDB、ChromaDB 等）整合在一个整洁的包中而无需繁琐操作的最简单方法，可以将您的生产力提高 100 倍。",
    part3:
      "AnythingLLM 可以完全在您的本地计算机上运行，几乎没有开销，您甚至不会注意到它的存在！无需 GPU。也可以进行云端和本地安装。\nAI 工具生态系统每天都在变得更强大。AnythingLLM 使其易于使用。",
    githubIssue: "在 Github 上创建问题",
    user1: "我该如何开始?!",
    part4:
      "很简单。所有集合都组织成我们称之为“工作区”的桶。工作区是文件、文档、图像、PDF 和其他文件的存储桶，这些文件将被转换为 LLM 可以理解和在对话中使用的内容。\n\n您可以随时添加和删除文件。",
    createWorkspace: "创建您的第一个工作区",
    user2: 
      "这像是一个 AI Dropbox 吗？那么聊天呢？它是一个聊天机器人，不是吗？",
    part5:
      "AnythingLLM 不仅仅是一个更智能的 Dropbox。\n\nAnythingLLM 提供了两种与您的数据交流的方式：\n\n<i>查询：</i> 您的聊天将返回在您的工作区中访问的文档中找到的数据或推论。向工作区添加更多文档会使其更智能！\n\n<i>对话：</i> 您的文档和正在进行的聊天记录同时为 LLM 知识做出贡献。非常适合添加基于文本的实时信息或纠正 LLM 可能存在的误解。\n\n您可以在聊天过程中 <i>切换模式！</i>",
    user3: "哇，这听起来很棒，让我马上试试！",
    part6: "玩得开心！",
    starOnGithub: "在 GitHub 上加星",
    contact: "联系 Mintplex Labs",
  },

  "new-workspace": {
    "title": "新增工作区",
    "placeholder": "我的工作区",
    "error": "错误: {{error}}",
    "save": "存档"
  },

  // Workspace Settings menu items
  "workspaces—settings": {
    general: "通用设置",
    chat: "聊天设置",
    vector: "向量数据库",
    members: "成员",
    agent: "代理配置",
  },

  // 管理工作区
  "manageWorkspace": {
    "editing": "编辑",
    "mobileWarning": "仅可在桌面设备上编辑这些设置。请在桌面设备上访问此页面以继续。",
    "dismiss": "关闭",
    "documents": "文件",
    "dataConnectors": "数据连接器"
  },

  // 文件设置
  "documentSettings": {
    "updatingWorkspace": "正在更新工作区...",
    "updatingWorkspaceInfo": "对于大型文件可能需要一些时间",
    "workspaceUpdated": "工作区更新成功。",
    "workspaceUpdateError": "工作区更新失败：{{error}}",
    "moveSelectedItems": "移动选中的项目",
    "costEstimationInfo": "基于选择的项目进行成本估算",
    "openaiCostPerToken": "OpenAI 每个 Token 的成本：{{cost}}",
    "highlightWorkspace": "高亮显示工作区",
    "saveChanges": "保存更改"
  },

  // 恢复码
  "recoveryCodes": {
    "title": "恢复码",
    "description": "为了在未来重设您的密码，您需要这些恢复码。下载或复制恢复码以进行保存。",
    "warning": "这些恢复码只会显示一次！",
    "copySuccessMessage": "恢复码已复制到剪贴板",
    "fileName": "recovery_codes.txt",
    "downloadButton": "下载",
    "closeButton": "关闭"
  },

  // 数据连接器
  "dataConnectors": {
    "searchPlaceholder": "搜索数据连接器",
    "noResults": "未找到数据连接器。",
    "github": {
      "name": "GitHub 仓库",
      "description": "一键导入整个公开或私有的 GitHub 仓库。",
      "repoLabel": "GitHub 仓库 URL",
      "repoDescription": "您希望收集的 GitHub 仓库 URL。",
      "repoPlaceholder": "https://github.com/username/repository",
      "tokenLabel": "GitHub Access Token",
      "tokenOptional": "可选",
      "tokenDescription": "Access Token 可避免速率限制。",
      "tokenPlaceholder": "github_pat_1234_abcdefg",
      "ignoreLabel": "忽略的文件",
      "ignoreDescription": "以 .gitignore 格式列出在收集中需要忽略的特定文件。按 Enter 保存每个条目。",
      "ignorePlaceholder": "!*.js, images/*, .DS_Store, bin/*",
      "branchLabel": "分支",
      "branchDescription": "您希望收集文件的分支。",
      "branchLoading": "-- 正在加载可用分支 --",
      "loadingButton": "正在收集文件...",
      "submitButton": "提交",
      "loadingHint": "完成后，所有文件都将可嵌入到文件选择器的工作区中。",
      "patAlert": "如果不填写 GitHub Access Token，则此数据连接器只能收集顶层文件，因为 GitHub API 的速率限制。点击此处获取免费的个人 Access Token。",
      "patTooltip": "如果没有个人 Access Token，GitHub API 可能会限制可收集的文件数量。建议创建临时 Access Token 以避免此问题。",
      "toastFetchingFiles": "正在为仓库提取所有文件 - 这可能需要一些时间。",
      "toastFilesCollected": "{{files}} 个 {{filePlural}} 从 {{author}}/{{repo}}:{{branch}} 收集完成。输出文件夹为 {{destination}}。"
    },
    "gitlab": {
      "name": "GitLab 仓库",
      "description": "一键导入整个公开或私有的 GitLab 仓库。",
      "repoLabel": "GitLab 仓库 URL",
      "repoDescription": "您希望收集的 GitLab 仓库 URL。",
      "repoPlaceholder": "https://gitlab.com/gitlab-org/gitlab",
      "accessTokenLabel": "GitLab Access Token",
      "optional": "可选",
      "accessTokenDescription": "Access Token 可避免速率限制。",
      "accessTokenPlaceholder": "glpat-XXXXXXXXXXXXXXXXXXXX",
      "fileIgnoresLabel": "忽略的文件",
      "fileIgnoresDescription": "以 .gitignore 格式列出在收集中需要忽略的特定文件。按 Enter 保存每个条目。",
      "fileIgnoresPlaceholder": "!*.js, images/*, .DS_Store, bin/*",
      "toastFetching": "正在为仓库提取所有文件 - 这可能需要一些时间。",
      "toastSuccess": "{{files}} 个 {{fileLabel}} 从 {{author}}/{{repo}}:{{branch}} 收集完成。输出文件夹为 {{destination}}。",
      "submit": "提交",
      "submitLoading": "正在收集文件...",
      "submitDescription": "完成后，所有文件都将可嵌入到文件选择器的工作区中。",
      "branchLabel": "分支",
      "branchDescription": "您希望收集文件的分支。",
      "branchLoading": "-- 正在加载可用分支 --",
      "patAlertMessage": "如果不填写 GitLab Access Token，则此数据连接器只能收集顶层文件，因为 GitLab API 的速率限制。",
      "patAlertLinkText": "点击此处获取免费的个人 Access Token。",
      "patTooltipMessage": "如果没有个人 Access Token，GitLab API 可能会限制可收集的文件数量。",
      "patTooltipLinkText": "创建临时 Access Token",
      "patTooltipMessageSuffix": "以避免此问题。",
      "settingsLabel": "设置",
      "settingsDescription": "选择要从 GitLab API 中提取的其他实体。",
      "fetchIssuesLabel": "将问题作为文件提取"
    },
    "youtubeTranscript": {
      "name": "YouTube 字幕",
      "description": "导入整个 YouTube 视频的字幕。",
      "toastFetching": "正在为 YouTube 视频提取字幕。",
      "toastSuccess": "{{title}} 由 {{author}} 的字幕完成。输出文件夹为 {{destination}}。",
      "formLabel": "YouTube 视频 URL",
      "formDescription": "您希望提取字幕的 YouTube 视频 URL。",
      "formPlaceholder": "https://youtube.com/watch?v=abc123",
      "formSubmitButton": "收集字幕",
      "formLoading": "正在收集字幕...",
      "formLoadingHint": "完成后，字幕将可嵌入到文件选择器的工作区中。"
    },
    "websiteDepth": {
      "name": "批量链接抓取器",
      "description": "抓取网站及其子链接至一定深度。",
      "scrapingInfo": "正在抓取网站 - 这可能需要一些时间。",
      "scrapingSuccess": "成功抓取了 {{count}} 个 {{pages}}！",
      "scrapingButtonSubmit": "提交",
      "scrapingButtonLoading": "正在抓取网站...",
      "scrapingNote": "完成后，所有抓取的页面将可嵌入到文件选择器的工作区中。",
      "urlLabel": "网站 URL",
      "urlDescription": "您希望抓取的网站 URL。",
      "urlPlaceholder": "https://example.com",
      "depthLabel": "深度",
      "depthDescription": "工作者应从起始 URL 跟随的子链接层数。",
      "maxLinksLabel": "最大链接数",
      "maxLinksDescription": "要抓取的最大链接数。",
      "page": "页面"
    },
    "confluence": {
      "name": "Confluence",
      "description": "一键导入整个 Confluence 页面。",
      "toastFetchingPages": "正在为 Confluence 空间提取所有页面 - 这可能需要一些时间。",
      "toastPagesCollected": "已从 Confluence 空间 {{spaceKey}} 中收集页面。输出文件夹为 {{destination}}。",
      "deploymentType": "Confluence 部署类型",
      "deploymentTypeDescription": "确定您的 Confluence 实例是托管于 Atlassian 云端还是自托管。",
      "atlassianCloud": "Atlassian 云端",
      "selfHosted": "自托管",
      "baseUrl": "Confluence 基本 URL",
      "baseUrlDescription": "这是您的 Confluence 空间的基本 URL。",
      "baseUrlPlaceholder": "例如：https://example.atlassian.net, http://localhost:8211 等",
      "spaceKey": "Confluence 空间键值",
      "spaceKeyDescription": "这是您的 Confluence 实例的空间键值。通常以 ~ 开头。",
      "spaceKeyPlaceholder": "例如：~7120208c08555d52224113949698b933a3bb56",
      "username": "Confluence 用户名",
      "usernameDescription": "您的 Confluence 用户名。",
      "usernamePlaceholder": "jdoe@example.com",
      "accessToken": "Confluence Access Token",
      "accessTokenTooltip": "您需要提供 Access Token 以进行验证。",
      "accessTokenLinkText": "点击此处",
      "accessTokenDescription": "验证所需的 Access Token。",
      "accessTokenPlaceholder": "abcd1234",
      "submit": "提交",
      "collectingPages": "正在收集页面...",
      "loadingMessage": "完成后，所有页面都将可嵌入到文件选择器的工作区中。"
    }
  },

  "contextMenu": {
    "selectAll": "全选",
    "unselectAll": "取消全选",
    "cancel": "取消"
  },

  "fileRow": {
    "cached": "已缓存"
  },

  "newFolderModal": {
    "title": "创建新文件夹",
    "folderNameLabel": "文件夹名称",
    "placeholder": "输入文件夹名称",
    "error": "创建文件夹失败",
    "cancel": "取消",
    "create": "创建文件夹"
  },

  "directory": {
    "myDocuments": "我的文件",
    "searchPlaceholder": "搜索文件",
    "newFolder": "新文件夹",
    "name": "名称",
    "noDocuments": "没有文件",
    "deleteConfirmation": "您确定要删除这些文件和文件夹吗？\n这将从系统中移除文件，并自动将其从任何现有的工作区中移除。\n此操作无法撤销。",
    "removingDocuments": "正在移除 {{toRemove}} 个文件及 {{foldersToRemove}} 个文件夹。请稍候。",
    "movingDocuments": "正在移动 {{count}} 个文件。请稍候。",
    "moveToWorkspace": "移动到工作区",
    "errorMovingFiles": "移动文件时发生错误：{{message}}",
    "successfullyMoved": "成功移动了 {{count}} 个文件。",
    "searching": "正在搜索...",
    "remove": "移除",
    "uploading": "正在上传..."
  },

  // 文件上传
  "uploadFile": {
    "documentProcessorUnavailable": "文件处理器不可用",
    "uploadUnavailableMessage": "我们现在无法上传您的文件，因为文件处理器已离线。请稍后再试。",
    "clickToUpload": "点击上传或拖放文件",
    "supportMessage": "支持文本文件、CSV、电子表格、音頻文件等！",
    "submitLink": "或提交一个链接",
    "placeholderUrl": "https://example.com",
    "fetchWebsite": "抓取网站",
    "fetching": "正在抓取...",
    "disclaimer": "这些文件将上传至此 AnythingLLM 实例中的文件处理器。这些文件不会发送或共享至第三方。",
    "scrapingLink": "正在抓取链接...",
    "uploadLinkSuccess": "链接上传成功",
    "uploadLinkError": "上传链接时出现错误：{{error}}",
    "uploading": "正在上传文件..."
  },

  // 工作区目录
  "workspaceDirectory": {
    "name": "工作区名称",
    "nameColumn": "名称",
    "loadingMessage": "正在加载选定的文件...",
    "noDocuments": "没有文件",
    "estimatedCost": "预估成本：{{cost}}",
    "oneTimeCost": "*嵌入的单次成本",
    "saveAndEmbed": "保存并嵌入",
    "selectAll": "全选",
    "deselectAll": "取消全选",
    "removeSelected": "移除选定的项目",
    "date": "日期：",
    "type": "类型：",

    "alerts": {
      "pinningTitle": "什么是文件钉选？",
      "pinningDescription1": "当您在 AnythingLLM 中<b>钉选</b>一个文件时，我们将把该文件的完整内容加入到提示词窗口中，以便 LLM 完全理解。",
      "pinningDescription2": "这对于<b>大上下文模型</b>或对知识库至关重要的小文件效果最好。",
      "pinningDescription3": "如果默认情况下未能从 AnythingLLM 获得理想的答案，钉选是一键获得高质量答案的好方法。",
      "watchingTitle": "监控文件有什么作用？",
      "watchingDescription1": "当您在 AnythingLLM 中<b>监控</b>一个文件时，我们将<i>自动</i>从原始来源定期同步文件内容。这将自动更新该文件所在的每个工作区中的内容。",
      "watchingDescription2": "此功能目前支持基于线上的内容，对于手动上传的文件将不可用。"
    }
  },

  "workspaceFileRow": {
    "removingFileMessage": "正在从工作区移除文件",
    "removeFileError": "移除文件失败",
    "pinError": "文件 {action} 失败。",
    "pinSuccess": "文件已 {action} 工作区。",
    "pinErrorMessage": "钉选文件失败：{error}",
    "pinTooltip": "钉选到工作区",
    "unpinTooltip": "从工作区取消钉选",
    "watchError": "文件 {action} 失败。",
    "watchSuccess": "文件已 {action}。",
    "watchErrorMessage": "监控文件失败：{error}",
    "watchTooltip": "监控文件更改",
    "unwatchTooltip": "停止监控更改",
    "removeTooltip": "从工作区移除文件",
    "removingFileMessage": "从工作区移除文件",
    "nameColumn": "名称",
    "noDocuments": "没有文件"
  },

  // 消息主题容器
  "threads": {
    "loading": "正在加载消息主题...",
    "listAriaLabel": "消息主题",
    "defaultThreadName": "默认",
    "startingThread": "正在开始新的主题...",
    "newThread": "新主题",
    "deleteSelected": "删除选定的项目",
    "newThreadError": "无法创建主题 - {{error}}",
    "deleted": "已删除主题",
    "rename": "重命名",
    "delete": "删除主题",
    "options": "主题选项",
    "renamePrompt": "您希望将此主题重命名为什么？",
    "renameError": "无法更新主题！{{message}}",
    "deleteConfirm": "您确定要删除此主题吗？它的所有聊天内容将被删除，无法恢复。",
    "deleteError": "无法删除主题！",
    "deleteSuccess": "主题删除成功！"
  },

  // 语音识别
  "browserNativeSTT": {
    "noConfigurationNeeded": "此提供者不需要任何配置。"
  },

  // 语音合成
  "browserNativeTTS": {
    "noConfigurationNeeded": "此提供者不需要任何配置。"
  },

  "elevenLabsTTS": {
    "apiKeyLabel": "API 密钥",
    "apiKeyPlaceholder": "ElevenLabs API 密钥",
    "modelSelectionLabel": "聊天模型选择",
    "loadingModels": "-- 正在加载可用模型 --"
  },

  "openAiGenericTTS": {
    "baseUrlLabel": "基本 URL",
    "baseUrlPlaceholder": "http://localhost:7851/v1",
    "baseUrlDescription": "这应是您将从中生成 TTS 音频响应的 OpenAI 兼容 TTS 服务的基本 URL。",
    "apiKeyLabel": "API 密钥",
    "apiKeyPlaceholder": "API 密钥",
    "apiKeyDescription": "某些 TTS 服务需要 API 密钥来生成 TTS 响应 - 如果您的服务不需要，可以不填。",
    "voiceModelLabel": "语音模型",
    "voiceModelPlaceholder": "您的语音模型标识符",
    "voiceModelDescription": "大多数 TTS 服务将有多个语音模型可用，这是您要使用的语音模型标识符。"
  },

  "openAiTTS": {
    "apiKeyLabel": "API 密钥",
    "apiKeyPlaceholder": "OpenAI API 密钥",
    "voiceModelLabel": "语音模型"
  },

  "piperTTS": {
    "description": "所有 PiperTTS 模型将在您的浏览器中本地运行。这可能会对低端设备造成较大的资源占用。",
    "voiceSelection": "语音模型选择",
    "loadingModels": "-- 正在加载可用模型 --",
    "fetchError": "无法从网页工作者获取语音。",
    "flushSuccess": "所有语音已从浏览器存储中清除",
    "storedModelInfo": "'✔' 表示此模型已本地存储，无需在运行时下载。",
    "flushCache": "清除语音缓存",
    "demoMessage": "您好，欢迎使用 AnythingLLM！",
    "stopDemo": "停止示范",
    "loadingVoice": "正在加载语音",
    "playSample": "播放样本"
  },

  // 字幕选项
  "nativeTranscription": {
    "selection": "选择 Whisper 模型",
    "warn": {
      "start": "此模型已针对本地使用进行优化。",
      "recommend": "我们建议将此模型用于小型任务。",
      "end": "预期内存使用量：{{size}}"
    }
  },

  "openAiWhisperOptions": {
    "apiKeyLabel": "API 密钥",
    "apiKeyPlaceholder": "OpenAI API 密钥",
    "whisperModelLabel": "Whisper 模型",
    "whisperModelOption": "Whisper Large"
  },

  // 用户菜单
  "accountModal": {
    "title": "编辑账户",
    "pfp": {
      "label": "个人头像",
      "dimensions": "800 x 800",
      "remove": "移除个人头像",
      "altText": "用户个人头像"
    },
    "form": {
      "username": {
        "label": "用户名",
        "placeholder": "用户的名称",
        "helperText": "用户名只能包含小写字母、数字、下划线和连字符，不允许空格"
      },
      "password": {
        "label": "新密码",
        "placeholder": "{{username}} 的新密码",
        "helperText": "密码必须至少包含 8 个字符"
      }
    },
    "buttons": {
      "cancel": "取消",
      "update": "更新账户"
    },
    "errors": {
      "uploadPfp": "上传个人头像失败：{{error}}",
      "removePfp": "移除个人头像失败：{{error}}",
      "updateProfile": "更新用户失败：{{error}}"
    },
    "success": {
      "uploadPfp": "个人头像上传成功。",
      "removePfp": "个人头像移除成功。",
      "updateProfile": "用户资料更新成功。"
    },
    "languagePreference": {
      "label": "偏好语言"
    },
    "themePreference": {
      "label": "主题偏好"
    }
  },

  "userButton": {
    "account": "帳戶",
    "support": "支援",
    "signOut": "登出",
    "profilePictureAlt": "使用者個人頭像",
    "defaultUsername": "AA"
  },

  // 工作區聊天
  "workspaceChat": {
    "workspaceNotFound": "找不到工作區！",
    "workspaceUnavailable": "似乎無法使用此名稱的工作區。",
    "goToHomepage": "返回首頁",
    "copied": "已複製！"
  },

  // Chartable
  "chartable": {
    "unsupported": "不支援的圖表類型。"
  },

  // 引用
  "citations": {
    "show": "顯示引用",
    "hide": "隱藏引用",
    "referenced": "被引用 {{count}} 次。",
    "similarityTooltip": "這是此段文字與您查詢之間的語義相似度分數，由向量資料庫計算。",
    "match": "匹配"
  },

  // 歷史訊息
  "historicalMessage": {
    "errorMessage": "無法回應訊息。",
    "workspaceProfileImage": "工作區個人頭像",
    "attachmentImageAlt": "附件圖片：{{name}}"
  },

  // 提示回覆
  "promptReply": {
    "loading": "正在載入...",
    "errorIcon": "錯誤圖標",
    "errorMessage": "無法回應訊息。",
    "errorReason": "原因：{{reason}}",
    "unknownReason": "未知",
    "response": "助手回應"
  },

  "workspaceProfileImage": {
    "alt": "工作區個人頭像"
  },

  // 聊天歷史
  "chatHistory": {
    "welcomeMessage": "歡迎來到您的新工作區。",
    "getStartedUpload": "要開始，請",
    "uploadDocument": "上傳文件",
    "orSendChat": "或發送聊天訊息。",
    "getStartedSendChat": "要開始，請發送聊天訊息。",
    "statusResponse": "{{content}}"
  },

  // 拖放上傳
  "dndUploader": {
    "addAnything": "添加任何內容",
    "dropFile": "將您的文件拖放至此處以自動嵌入到工作區中。"
  },

  // 附件
  "attachment": {
    "uploading": "正在上傳大小為 {{size}} 的文件...",
    "failed": "{{error}}。此文件上傳失敗，將無法在工作區中使用。",
    "defaultError": "發生錯誤",
    "attached": "{{name}} 將附加至此提示。它將不會被永久嵌入。",
    "imageAttached": "圖片已附加！",
    "embedded": "{{name}} 已上傳並嵌入到此工作區中。它現在可以用於 RAG 聊天。",
    "fileEmbedded": "文件嵌入成功！"
  },

  // 重置指令
  "resetCommand": {
    "command": "/reset",
    "description": "清除您的聊天記錄並開始新的聊天"
  },

  // 退出指令
  "agentSession": {
    "exitCommand": "/exit",
    "exitDescription": "停止當前的代理會話。"
  },

  // 快捷指令預設
  "slashPresets": {
    "toastError": "處理預設時發生錯誤。",
    "addNewPreset": "新增預設"
  },

  // 編輯預設
  "editPreset": {
    "title": "編輯預設",
    "commandLabel": "指令",
    "commandPlaceholder": "您的指令",
    "promptLabel": "提示",
    "promptPlaceholder": "這是一個測試提示。請回應一首關於 LLM 的詩。",
    "descriptionLabel": "描述",
    "descriptionPlaceholder": "回應一首關於 LLM 的詩。",
    "confirmDelete": "您確定要刪除此預設嗎？",
    "deleteButton": "刪除預設",
    "deleting": "正在刪除...",
    "cancelButton": "取消",
    "saveButton": "儲存"
  },

  // 字體大小
  "textSize": {
    "tooltip": "更改文字大小",
    "ariaLabel": "更改文字大小",
    "small": "小",
    "normal": "正常",
    "large": "大"
  },

  // 新增預設
  "addPresetModal": {
    "title": "新增預設",
    "commandLabel": "指令",
    "commandPlaceholder": "您的指令",
    "promptLabel": "提示",
    "promptPlaceholder": "這是將被注入到提示前的內容。",
    "descriptionLabel": "描述",
    "descriptionPlaceholder": "回應一首關於 LLM 的詩。",
    "cancelButton": "取消",
    "saveButton": "儲存"
  },

  // General Appearance
  general: {
    vector: {
      title: "向量数量",
      description: "向量数据库中的总向量数。",
    },
    names: {
      description: "这只会更改工作区的显示名称。",
    },
    message: {
      title: "建议的聊天消息",
      description: 
        "自定义将向您的工作区用户建议的消息。",
      add: "添加新消息",
      save: "保存消息",
      heading: "向我解释",
      body: "AnythingLLM 的好处",
    },
    pfp: {
      title: "助理头像",
      description: 
        "为此工作区自定义助手的个人资料图像。",
      image: "工作区图像",
      remove: "移除工作区图像",
    },
    delete: {
      title: "删除工作区",
      description: 
        "删除此工作区及其所有数据。这将删除所有用户的工作区。",
      delete: "删除工作区",
      deleting: "正在删除工作区...",
      "confirm-start": "您即将删除整个",
      "confirm-end":
        "工作区。这将删除矢量数据库中的所有矢量嵌入。\n\n原始源文件将保持不变。此操作是不可逆转的。",
    },
  },

  "agentDbConnection": {
    "confirmation": "确定要从可用的 SQL 连接列表中删除 {{database_id}}？此操作无法撤销。",
    "logoAlt": "{{engine}} 标志"
  },

  "agentWebSearch": {
    "title": "即时网络搜索与浏览",
    "imageAlt": "网络搜索",
    "description": "通过连接到网络搜索（SERP）提供商，启用您的代理以搜索网络回答您的问题。在设置完成之前，代理会话期间无法使用网络搜索。",
    "searchPlaceholder": "搜索可用的网络搜索提供商"
  },

  "searchProviders": {
    "none": {
      "name": "请选择一个选项",
      "description": "提供者和密钥未设置前，网络搜索将被禁用。"
    },
    "duckduckgo": {
      "name": "DuckDuckGo",
      "description": "免费且注重隐私的 DuckDuckGo HTML 界面网络搜索。"
    },
    "google": {
      "name": "Google 搜索引擎",
      "description": "由自定义的 Google 搜索引擎提供支持，每天免费 100 次查询。"
    },
    "searchApi": {
      "name": "SearchApi",
      "description": "SearchApi 提供来自多个搜索引擎的结构化数据，免费提供 100 次查询，之后需付费。"
    },
    "serper": {
      "name": "Serper.dev",
      "description": "Serper.dev 网络搜索，免费账户提供 2,500 次查询，之后需付费。"
    },
    "bing": {
      "name": "Bing 搜索",
      "description": "由 Bing 搜索 API 提供支持，每月免费 1000 次查询。"
    },
    "serply": {
      "name": "Serply.io",
      "description": "Serply.io 网络搜索，永久免费账户提供每月 100 次查询。"
    },
    "searxng": {
      "name": "SearXNG",
      "description": "免费、开源的网络元搜索引擎，无跟踪功能。"
    },
    "tavily": {
      "name": "Tavily 搜索",
      "description": "Tavily 搜索 API，免费层提供每月 1000 次查询。"
    }
  },

  "agentWebSearchOptions": {
    "googleSearch": {
      "description": "您可以免费获取搜索引擎和 API 密钥",
      "linkText": "从 Google 获取",
      "engineIdLabel": "搜索引擎 ID",
      "engineIdPlaceholder": "Google 搜索引擎 ID",
      "apiKeyLabel": "程序化访问 API 密钥",
      "apiKeyPlaceholder": "Google 搜索引擎 API 密钥"
    },
    "searchApi": {
      "description": "您可以免费获取 API 密钥",
      "linkText": "从 SearchApi 获取。",
      "apiKeyLabel": "API 密钥",
      "apiKeyPlaceholder": "SearchApi API 密钥",
      "engineLabel": "引擎",
      "engine": {
        "googleSearch": "Google 搜索",
        "googleMaps": "Google 地图",
        "googleShopping": "Google 购物",
        "googleNews": "Google 新闻",
        "googleJobs": "Google 工作",
        "googleScholar": "Google 学术搜索",
        "googleFinance": "Google 财经",
        "googlePatents": "Google 专利",
        "youtube": "YouTube",
        "bing": "Bing",
        "bingNews": "Bing 新闻",
        "amazonSearch": "Amazon 产品搜索",
        "baidu": "百度"
      }
    },
    "serper": {
      "description": "您可以免费获取 API 密钥",
      "linkText": "从 Serper.dev 获取。",
      "apiKeyLabel": "API 密钥",
      "apiKeyPlaceholder": "Serper.dev API 密钥"
    },
    "bing": {
      "description": "您可以从 Azure 门户获取 Bing 网络搜索 API 订阅密钥",
      "linkText": "从 Azure 获取。",
      "apiKeyLabel": "API 密钥",
      "apiKeyPlaceholder": "Bing 网络搜索 API 密钥",
      "setupInstructions": "设置 Bing 网络搜索 API 订阅的步骤：",
      "step1": "进入 Azure 门户",
      "step1Link": "https://portal.azure.com/",
      "step2": "创建一个新的 Azure 帐户或使用现有帐户登录。",
      "step3": "导航至「创建资源」部分，搜索「Bing 搜索 v7」。",
      "step4": "选择「Bing 搜索 v7」资源并创建新订阅。",
      "step5": "选择适合您需求的定价层（提供免费层）。",
      "step6": "获取您的 Bing 网络搜索订阅 API 密钥。"
    },
    "serply": {
      "description": "您可以免费获取 API 密钥",
      "linkText": "从 Serply.io 获取。",
      "apiKeyLabel": "API 密钥",
      "apiKeyPlaceholder": "Serply API 密钥"
    },
    "searxng": {
      "apiBaseUrlLabel": "SearXNG API 基本 URL",
      "apiBaseUrlPlaceholder": "SearXNG API 密钥"
    },
    "tavily": {
      "description": "您可以获取 API 密钥",
      "linkText": "从 Tavily 获取。",
      "apiKeyLabel": "API 密钥",
      "apiKeyPlaceholder": "Tavily API 密钥"
    },
    "duckDuckGo": {
      "readyToUse": "DuckDuckGo 可直接使用，无需额外配置。"
    }
  },

  // Admin invitation
  "adminInvites": {
    "title": "邀请",
    "description": "为组织中的人员创建邀请链接，供他们接受并注册。每个邀请只能被单一用户使用。",
    "createInviteButton": "创建邀请链接",
    "table": {
      "status": "状态",
      "acceptedBy": "接受者",
      "createdBy": "创建者",
      "created": "创建时间"
    }
  },

  "adminInviteModal": {
    "createTitle": "创建新邀请",
    "error": "错误：{{error}}",
    "description": "创建后，您可以复制邀请并发送给新用户，让他们以<b>默认</b>角色创建账号，并自动加入所选工作区。",
    "workspaceLabel": "自动将受邀者加入工作区",
    "workspaceDescription": "您可以选择性地将用户自动分配到以下工作区。默认情况下，用户将无法查看任何工作区。接受邀请后，您也可以分配工作区。",
    "createButton": "创建邀请",
    "copyButton": "复制邀请链接",
    "linkCopied": "链接已复制"
  },

  // Log row
  "logRow": {
    "metadata": {
      "title": "事件元数据",
      "show": "显示",
      "hide": "隐藏"
    },
    "events": {
      "login_event": "登录事件",
      "update": "更新事件",
      "failed_event": "失败事件",
      "deleted_event": "删除事件"
    }
  },

  // Admin User
  "adminUsers": {
    "usersTitle": "用户",
    "usersDescription": "这些是此实例中所有的账号。删除账号将立即移除其对此实例的访问权限。",
    "addUser": "添加用户",
    "username": "用户名",
    "role": "角色",
    "dateAdded": "添加日期",
    "permissionsTitle": "权限",
    "roleHint": {
      "default1": "仅能向其被管理员或管理者添加到的工作区发送消息。",
      "default2": "无法修改任何设置。",
      "manager1": "可以查看、创建和删除任何工作区，并修改工作区特定设置。",
      "manager2": "可以创建、更新并邀请新用户加入此实例。",
      "manager3": "无法修改 LLM、向量数据库、嵌入或其他连接。",
      "admin1": "最高权限用户等级。可以查看并操作系统中的所有功能。"
    },
    "limitMessagesTitle": "每日消息限制",
    "limitMessagesDescription": "限制该用户在 24 小时内的成功查询或对话数量。",
    "messageLimitLabel": "每日消息限制"
  },

  // Admin User Row
  "adminUserRow": {
    "confirmSuspend": "确定要暂停 {{username}} 吗？\\n此操作完成后，他们将被登出，且无法重新登录此 AnythingLLM 实例，直至由管理员取消暂停。",
    "suspendSuccess": "用户已被暂停。",
    "unsuspendSuccess": "用户已恢复正常状态。",
    "confirmDelete": "确定要删除 {{username}} 吗？\\n此操作完成后，他们将被登出，且无法使用此 AnythingLLM 实例。\\n\\n此操作无法撤销。",
    "deleteSuccess": "用户已从系统中删除。",
    "editButton": "编辑",
    "suspendButton": "暂停",
    "unsuspendButton": "取消暂停",
    "deleteButton": "删除"
  },

  // Edit User Modal
  "editUserModal": {
    "title": "编辑 {{username}}",
    "username": {
      "label": "用户名",
      "placeholder": "用户名",
      "hint": "用户名只能包含小写字母、数字、下划线和连字符，且不能包含空格"
    },
    "password": {
      "label": "新密码",
      "placeholder": "{{username}} 的新密码",
      "hint": "密码必须至少包含 8 个字符"
    },
    "role": {
      "label": "角色",
      "default": "默认",
      "manager": "管理者",
      "admin": "管理员"
    },
    "error": "错误：{{error}}",
    "cancelButton": "取消",
    "updateButton": "更新用户"
  },

  // Admin workspace
  "adminWorkspaces": {
    "title": "实例工作区",
    "description": "这些是此实例中所有存在的工作区。删除工作区将删除其所有相关的对话和设置。",
    "newWorkspaceButton": "新建工作区",
    "tableHeaders": {
      "name": "名称",
      "link": "链接",
      "users": "用户数量",
      "createdOn": "创建日期",
      "actions": "操作"
    }
  },

  // Admin Workspace Row
  "adminWorkspaceRow": {
    "deleteConfirmation": "确定要删除 {{name}} 吗？\\n此操作完成后，该工作区将无法在此 AnythingLLM 实例中使用。\\n\\n此操作无法撤销。"
  },

  // Admin Workspace Modal
  "adminNewWorkspaceModal": {
    "title": "创建新工作区",
    "workspaceNameLabel": "工作区名称",
    "workspaceNamePlaceholder": "我的工作区",
    "errorMessage": "错误：{{error}}",
    "infoMessage": "创建此工作区后，只有管理员可以查看。您可以在创建后添加用户。",
    "createButton": "创建工作区"
  },

  // API key modal
  "newApiKeyModal": {
    "title": "创建新 API 密钥",
    "description": "创建后，API 密钥可用于以程序化方式访问和配置此 AnythingLLM 实例。",
    "readDocs": "阅读 API 文档",
    "cancel": "取消",
    "create": "创建 API 密钥",
    "copy": "复制 API 密钥",
    "copied": "API 密钥已复制",
    "error": "错误：{{error}}"
  },

  // API Keys
  "apiKey": {
    "confirmDelete": "确定要停用此 API 密钥吗？\\n此操作完成后，它将无法再使用。\\n\\n此操作无法撤销。",
    "deletedMessage": "API 密钥已永久删除",
    "copiedMessage": "API 密钥已复制到剪贴板",
    "anonymousUser": "--",
    "copied": "已复制",
    "copy": "复制 API 密钥"
  },

  // Custom APP Name
  "customAppName": {
    "title": "自定义应用程序名称",
    "description": "设置在登录页面显示的自定义应用名称。",
    "placeholder": "AnythingLLM",
    "clearButton": "清除",
    "saveButton": "保存",
    "updateSuccess": "已成功更新应用名称。",
    "updateError": "更新应用名称失败：{{error}}"
  },

  // Custom site settings
  "customSiteSettings": {
    "title": "自定义网站设置",
    "description": "更改浏览器标签内容以进行自定义与品牌化。",
    "saveButton": "保存",
    "tabTitle": {
      "title": "标签标题",
      "description": "设置当应用程序在浏览器中打开时的自定义标签标题。",
      "placeholder": "AnythingLLM | 您的专属 LLM 训练工具"
    },
    "tabFavicon": {
      "title": "标签 Favicon",
      "description": "定义用于 favicon 的图片 URL。",
      "placeholder": "图片的 URL"
    },
    "toast": {
      "sitePreferencesUpdated": "网站偏好已更新！重新加载页面后即可生效。"
    }
  },

  // New Icon Form
  "newIconForm": {
    "iconSelector": {
      "tooltip": "选择一个图标",
      "dropdown": "图标选择下拉菜单",
      "option": "选择图标：{{iconName}}"
    },
    "urlInput": {
      "placeholder": "https://example.com",
      "label": "输入 URL"
    },
    "actions": {
      "save": "保存",
      "remove": "移除"
    }
  },

  languagePreference: {
    "title": "显示语言",
    "description": "选择首选语言以渲染 AnythingLLM 的界面（如果适用）。",
    "languages": {
      "en": "英语",
      "zh": "中文",
      "zh-tw": "繁体中文",
      "es": "西班牙语",
      "de": "德语",
      "fr": "法语",
      "ko": "韩语",
      "ru": "俄语",
      "it": "意大利语",
      "pt": "葡萄牙语",
      "he": "希伯来语",
      "nl": "荷兰语",
      "vi": "越南语"
    }
  },

  // Show scrollbar
  "showScrollbar": {
    "title": "显示聊天窗口滚动条",
    "description": "启用或禁用聊天窗口中的滚动条",
    "updateError": "更新外观设置失败",
    "fetchError": "获取外观设置失败"
  },

  // Support email
  "supportEmail": {
    "title": "支持电子邮件",
    "description": "设置在用户登录此实例时，显示于用户菜单中的支持电子邮件地址。",
    "placeholder": "support@mycompany.com",
    "clearButton": "清除",
    "saveButton": "保存",
    "updateSuccess": "支持电子邮件已成功更新。",
    "updateFailed": "更新支持电子邮件失败：{{error}}"
  },

  // Theme preference
  "themePreference": {
    "title": "主题",
    "description": "选择您偏好的应用程序主题。",
    "themes": {
      "default": "默认",
      "light": "浅色"
    }
  },

  // Speech-to-text and text-to-speech
  "audioPreference": {
    "speechToText": {
      "title": "语音转文字偏好设置",
      "description": "在这里您可以指定想要使用的语音转文字提供商。默认情况下，我们使用浏览器内置的服务，但您也可以选择其他服务。",
      "saving": "正在保存...",
      "saveChanges": "保存更改",
      "saveSuccess": "语音转文字偏好已成功保存。",
      "saveError": "保存偏好失败：{{error}}",
      "provider": "提供商",
      "searchPlaceholder": "搜索语音转文字提供商",
      "native": "系统内置",
      "nativeDescription": "使用浏览器内置的语音转文字服务（若支持）。"
    },
    "textToSpeech": {
      "preferenceTitle": "文字转语音偏好设置",
      "preferenceDescription": "在这里您可以指定想要使用的文字转语音提供商。默认情况下，我们使用浏览器内置的服务，但您也可以选择其他服务。",
      "providerLabel": "提供商",
      "saveChanges": "保存更改",
      "saving": "正在保存...",
      "saveSuccess": "文字转语音偏好已成功保存。",
      "saveError": "保存偏好失败：{{error}}",
      "searchPlaceholder": "搜索文字转语音提供商",
      "native": "系统内置",
      "nativeDescription": "使用浏览器内置的文字转语音服务（如支持）。",
      "openai": "OpenAI",
      "openaiDescription": "使用 OpenAI 的文字转语音服务。",
      "elevenlabs": "ElevenLabs",
      "elevenlabsDescription": "使用 ElevenLabs 的文字转语音技术。",
      "piper_local": "PiperTTS",
      "piperDescription": "在浏览器中本地运行文字转语音模型，保持隐私。",
      "generic-openai": "OpenAI 兼容",
      "genericOpenAiDescription": "连接到本地或远程运行的 OpenAI 兼容 TTS 服务。"
    }
  },

  // Settings Chats
  "settingsChats": {
    "viewingText": "查看文字",
    "promptModalTitle": "查看提示",
    "responseModalTitle": "查看回应",
    "confirmDelete": "确定要删除此聊天吗？\\n\\n此操作无法撤销。"
  },

  // Embed Chat Row
  "embedChatRow": {
    "confirmDelete": "确定要删除此聊天吗？\\n\\n此操作无法撤销。",
    "viewingText": "查看文字"
  },

  // New Embed Modal
  "newEmbedModal": {
    "title": "为工作区创建新嵌入",
    "info": "创建嵌入后，您将获得一个链接，您可以将其发布在网站上，作为简单的聊天窗口。",
    "inputs": {
      "maxChatsPerDay": {
        "title": "每日最大聊天次数",
        "hint": "限制此嵌入在 24 小时内可以处理的聊天次数。0 表示无限制。"
      },
      "maxChatsPerSession": {
        "title": "每次会话最大聊天次数",
        "hint": "限制此嵌入在 24 小时内每个会话用户可以发送的聊天次数。0 表示无限制。"
      },
      "allowModelOverride": {
        "title": "启用动态模型使用",
        "hint": "允许设置首选的 LLM 模型以覆盖工作区的默认值。"
      },
      "allowTemperatureOverride": {
        "title": "启用动态 LLM 温度",
        "hint": "允许设置 LLM 的温度以覆盖工作区的默认值。"
      },
      "allowPromptOverride": {
        "title": "启用提示覆盖",
        "hint": "允许设置系统提示以覆盖工作区的默认值。"
      }
    },
    "buttons": {
      "cancel": "取消",
      "createEmbed": "创建嵌入"
    },
    "workspaceSelection": {
      "label": "工作区",
      "description": "此嵌入的聊天窗口将基于此工作区。所有默认值将继承自工作区，除非在此配置中覆盖。"
    },
    "chatModeSelection": {
      "label": "允许的聊天方式",
      "description": "设置您的聊天机器人的运行方式。「查询」模式仅在文档有助于回答问题时响应。「聊天」模式可以回答与工作区无关的问题。",
      "chatOption": "聊天：回应所有问题，无论是否相关",
      "queryOption": "查询：仅回应与工作区文档相关的问题"
    },
    "permittedDomains": {
      "label": "限制请求的来源域名",
      "description": "此过滤器将阻止来自下列域名以外的请求。若保持空白，表示任何人都可以在任何网站上使用您的嵌入。",
      "placeholder": "https://mysite.com, https://anythingllm.com"
    }
  },

  // Embed Row
  "embedRow": {
    "confirmDisable": "确定要禁用嵌入 '{{embedName}}' 吗？\\n禁用后，此嵌入将不再响应任何聊天请求。",
    "disabledSuccess": "嵌入已禁用。",
    "enabledSuccess": "嵌入已启用。",
    "confirmDelete": "确定要删除嵌入 '{{embedName}}' 吗？\\n删除后，此嵌入将不再响应聊天或被启用。\\n\\n此操作无法撤销。",
    "deleteSuccess": "嵌入已从系统中删除。",
    "showCode": "显示代码",
    "disable": "禁用",
    "enable": "启用",
    "delete": "删除",
    "allDomains": "所有"
  },

  // Edit Embed
  "editEmbed": {
    "title": "更新嵌入 #{{id}}",
    "toast": {
      "success": "嵌入已成功更新。"
    },
    "maxChatsPerDay": {
      "title": "每日最大聊天次数",
      "hint": "限制此嵌入在 24 小时内可以处理的聊天次数。0 表示无限制。"
    },
    "maxChatsPerSession": {
      "title": "每次会话最大聊天次数",
      "hint": "限制此嵌入在 24 小时内每个会话用户可以发送的聊天次数。0 表示无限制。"
    },
    "allowModelOverride": {
      "title": "启用动态模型使用",
      "hint": "允许设置首选的 LLM 模型以覆盖工作区的默认值。"
    },
    "allowTemperatureOverride": {
      "title": "启用动态 LLM 温度",
      "hint": "允许设置 LLM 的温度以覆盖工作区的默认值。"
    },
    "allowPromptOverride": {
      "title": "启用提示覆盖",
      "hint": "允许设置系统提示以覆盖工作区的默认值。"
    },
    "error": "错误：{{error}}",
    "info": "创建嵌入后，您将获得一个链接，您可以将其发布在网站上，作为简单的聊天窗口。",
    "infoCode": "标签。",
    "cancelButton": "取消",
    "updateButton": "更新嵌入"
  },

  // Code Snippet Modal
  "codeSnippetModal": {
    "title": "复制嵌入代码",
    "closeButton": "关闭",
    "embedCodeLabel": "HTML Script 标签嵌入代码",
    "embedCodeDescription": "将您的工作区聊天嵌入设置为网站角落的帮助台聊天窗口。",
    "viewDocsLink": "查看所有样式和配置选项",
    "copiedMessage": "代码片段已复制到剪贴板！"
  },

  // Invite
  "invite": {
    "noCodeProvided": "未提供邀请代码。",
    "invalidCode": "邀请代码无效。错误：{{error}}"
  },

  // New User Modal
  "newUserModal": {
    "title": "创建新账号",
    "usernameLabel": "用户名",
    "usernamePlaceholder": "我的用户名",
    "passwordLabel": "密码",
    "passwordPlaceholder": "您的密码",
    "error": "错误：{{error}}",
    "description": "创建账号后，您可以使用这些凭据登录并开始使用工作区。",
    "submitButton": "接受邀请"
  },

  // SSO
  "sso": {
    "errors": {
      "noToken": "未提供令牌。",
      "loginFailed": "SSO 登录失败，请重试。",
      "unknownError": "发生未知错误。"
    },
    "contactAdmin": "请联系系统管理员以了解此错误的相关信息。"
  },

  "userSetup": {
    "title": "用户设置",
    "description": "配置您的用户设置。",
    "question": "此实例将由多少人使用？",
    "just_Me": "只有我",
    "my_Team": "我的团队",

    "justMe": {
      "passwordSetupQuestion": "您是否希望设置密码？",
      "passwordLabel": "实例密码",
      "passwordPlaceholder": "您的管理员密码",
      "passwordRequirement": "密码必须至少包含 8 个字符。",
      "errorSettingPassword": "设置密码失败：{{error}}"
    },
    "yes": "是",
    "no": "否",

    "myTeam": {
      "usernameLabel": "管理员账号用户名",
      "usernamePlaceholder": "您的管理员用户名",
      "usernameRequirement": "用户名必须至少 6 个字符，仅能包含小写字母、数字、下划线和连字符，且不得包含空格。",
      "passwordLabel": "管理员账号密码",
      "passwordPlaceholder": "您的管理员密码",
      "passwordRequirement": "密码必须至少包含 8 个字符。",
      "additionalInfo": "默认情况下，您将是唯一的管理员。完成设置后，您可以创建并邀请其他人成为用户或管理员。请勿遗失密码，因为只有管理员可以重置密码。",
      "error": "错误：{{error}}"
    }
  },

  // Onboarding
  "onboarding": {
    "welcomeMessage": "欢迎使用",
    "logoAlt": "AnythingLLM 标志",
    "getStartedButton": "开始使用"
  },

  // Data Handling
  "dataHandling": {
    "llmSelection": "LLM 选择",
    "embeddingPreference": "嵌入偏好",
    "vectorDatabase": "向量数据库",
    "footer": "您可以随时在设置中重新配置这些设置。",
    "alt": {
      "llmLogo": "LLM 标志",
      "embeddingLogo": "嵌入引擎标志",
      "vectorDbLogo": "向量数据库标志"
    }
  },

  // Create Workspace
  "createWorkspace": {
    "title": "创建您的第一个工作区",
    "description": "创建您的第一个工作区并开始使用 AnythingLLM。",
    "illustrationAlt": "创建工作区插图",
    "inputLabel": "工作区名称",
    "inputPlaceholder": "我的工作区",
    "successToast": "工作区创建成功！正在跳转到首页...",
    "errorToast": "创建工作区失败：{{error}}"
  },

  // Vector Database
  "vectorDatabase": {
    "updateSuccess": "工作区已成功更新！",
    "updateError": "错误：{{message}}",
    "updating": "正在更新...",
    "updateWorkspace": "更新工作区"
  },

  // Attach Item
  "attachItem": {
    "tooltip": "附加文件到此聊天",
    "ariaLabel": "附加文件到此聊天"
  },

  // Change warning
  "changeWarning": {
    "title": "警告",
    "confirmMessage": "您确定要继续吗？",
    "cancel": "取消",
    "confirm": "确认"
  },

  // Chat Settings
  chat: {
    llm: {
      title: "工作区 LLM 提供者",
      description:
        "将用于此工作区的特定 LLM 提供商和模型。默认情况下，它使用系统 LLM 提供程序和设置。",
      search: "搜索所有 LLM 提供商",
    },
    model: {
      title: "工作区聊天模型",
      description:
        "将用于此工作区的特定聊天模型。如果为空，将使用系统 LLM 首选项。",
      wait: "-- 等待模型 --",
    },
    mode: {
      title: "聊天模式",
      chat: {
        title: "聊天",
        "desc-start": "将提供 LLM 的一般知识",
        and: "和",
        "desc-end": "找到的文档上下文的答案。",
      },
      query: {
        title: "查询",
        "desc-start": "将",
        only: "仅",
        "desc-end": "提供找到的文档上下文的答案。",
      },
    },
    history: {
      title: "聊天历史记录",
      "desc-start": 
        "将包含在响应的短期记忆中的先前聊天的数量。",
      recommend: "推荐 20。",
      "desc-end":
        "任何超过 45 的值都可能导致连续聊天失败，具体取决于消息大小。",
    },
    prompt: {
      title: "聊天提示",
      description:
        "将在此工作区上使用的提示。定义 AI 生成响应的上下文和指令。您应该提供精心设计的提示，以便人工智能可以生成相关且准确的响应。",
    },
    refusal: {
      title: "查询模式拒绝响应",
      "desc-start": "当处于",
      query: "查询",
      "desc-end": 
        "模式时，当未找到上下文时，您可能希望返回自定义拒绝响应。",
    },
    temperature: {
      title: "LLM 温度",
      "desc-start":
        "此设置控制您的 LLM 回答的“创意”程度",
      "desc-end":
        "数字越高越有创意。对于某些模型，如果设置得太高，可能会导致响应不一致。",
      hint: "大多数 LLM 都有各种可接受的有效值范围。请咨询您的吗 LLM 提供商以获取该信息。",
    },
  },

  // Vector Database Settings
  "vector-workspace": {
    identifier: "向量数据库标识符",
    snippets: {
      title: "最大上下文片段",
      description:
        "此设置控制每次聊天或查询将发送到 LLM 的上下文片段的最大数量。",
      recommend: "推荐: 4",
    },
    doc: {
      title: "文档相似性阈值",
      description:
        "源被视为与聊天相关所需的最低相似度分数。数字越高，来源与聊天就越相似。",
      zero: "无限制",
      low: "低（相似度分数 ≥ .25）",
      medium: "中（相似度分数 ≥ .50）",
      high: "高（相似度分数 ≥ .75）",
    },
    reset: {
      reset: "重置向量数据库",
      resetting: "清除向量...",
      confirm:
        "您将重置此工作区的矢量数据库。这将删除当前嵌入的所有矢量嵌入。\n\n原始源文件将保持不变。此操作是不可逆转的。",
      success: "向量数据库已重置。",
      error: "无法重置工作区向量数据库！",
    },
  },

  // Agent Configuration
  agent: {
    "performance-warning":
      "不明确支持工具调用的 LLMs 的性能高度依赖于模型的功能和准确性。有些能力可能受到限制或不起作用。",
    provider: {
      title: "工作区代理 LLM 提供商",
      description: 
        "将用于此工作区的 @agent 代理的特定 LLM 提供商和模型。",
    },
    mode: {
      chat: {
        title: "工作区代理聊天模型",
        description: 
          "将用于此工作区的 @agent 代理的特定聊天模型。",
      },
      title: "工作区代理模型",
      description: 
        "将用于此工作区的 @agent 代理的特定 LLM 模型。",
      wait: "-- 等待模型 --",
    },
    skill: {
      title: "默认代理技能",
      description:
        "使用这些预构建的技能提高默认代理的自然能力。此设置适用于所有工作区。",
      rag: {
        title: "RAG 和长期记忆",
        description:
          '允许代理利用您的本地文档来回答查询，或要求代理"记住"长期记忆检索的内容片段。',
      },
      view: {
        title: "查看和总结文档",
        description: 
          "允许代理列出和总结当前嵌入的工作区文件的内容。",
      },
      scrape: {
        title: "抓取网站",
        description: 
          "允许代理访问和抓取网站的内容。",
      },
      generate: {
        title: "生成图表",
        description: 
          "使默认代理能够从提供的数据或聊天中生成各种类型的图表。",
      },
      save: {
        title: "生成并保存文件到浏览器",
        description:
          "使默认代理能够生成并写入文件，这些文件可以保存并在您的浏览器中下载。",
      },
      web: {
        title: "实时网络搜索和浏览",
        "desc-start":
          "通过连接到网络搜索（SERP）提供者，使您的代理能够搜索网络以回答您的问题。",
        "desc-end": 
          "在代理会话期间，网络搜索将不起作用，直到此设置完成。",
      },
    },
  },

  // Workspace Chat
  recorded: {
    title: "工作区聊天历史记录",
    description: 
      "这些是用户发送的所有聊天记录和消息，按创建日期排序。",
    export: "导出",
    "exportSuccess": "聊天成功导出为 {{name}}。",
    "exportFail": "聊天导出失败。",
    "clearChats": "清除聊天",
    "clearConfirm": "确定要清除所有聊天吗？\\n\\n此操作无法撤销。",
    "clearSuccess": "已清除所有聊天。",
    "description": "这是您记录的聊天列表。您可以根据需要导出或清除它们。",
    "orderFineTune": "订购微调模型",
    "previousPage": "上一页",
    "nextPage": "下一页",
    table: {
      id: "Id",
      by: "发送者",
      workspace: "工作区",
      prompt: "提示",
      response: "响应",
      at: "发送时间",
    },
  },

  // 外觀
  appearance: {
    title: "外观",
    description: "自定义平台的外观设置。",
    logo: {
      title: "自定义图标",
      description: "上传您的自定义图标，让您的聊天机器人成为您的。",
      add: "添加自定义图标",
      recommended: "建议尺寸：800 x 200",
      remove: "移除",
      replace: "替换",
      "uploaded": "标志已上传",
      "uploadFailed": "标志上传失败：{{error}}",
      "uploadSuccess": "图片上传成功。",
      "removeFailed": "移除标志失败：{{error}}",
      "removeSuccess": "图片已成功移除。"
    },
    message: {
      title: "自定义消息",
      description: "自定义向用户显示的自动消息。",
      new: "新建",
      system: "系统",
      user: "用户",
      message: "消息",
      assistant: "AnythingLLM 聊天助手",
      "double-click": "双击以编辑...",
      save: "保存消息",
      "doubleClick": "双击以编辑此消息。",
      "success": "欢迎消息已成功更新。",
      "error": "更新欢迎消息失败：{{error}}"
    },
    icons: {
      title: "自定义页脚图标",
      description: "自定义侧边栏底部显示的页脚图标。",
      icon: "图标",
      link: "链接",
      "updateSuccess": "页脚图标更新成功。",
      "updateError": "页脚图标更新失败：{{error}}"
    },
  },

  // Agents Badge
  "defaultBadge": {
    "tooltip": "此技能为默认启用，无法关闭。",
    "label": "默认"
  },

  // Skills
  "skills": {
    "activated": "技能已启用。",
    "deactivated": "技能已停用。",
    "errorRequired": "{{key}} 必须有一个值。",
    "errorType": "{{key}} 必须是 {{type}} 类型。",
    "success": "技能配置已成功更新。",
    "name": "{{name}}",
    "description": "{{description}}，作者：{{author}}",
    "fieldLabel": "{{key}}",
    "saveButton": "保存",
    "noOptions": "此技能无可修改的选项。",
    "confirmDelete": "确定要删除此技能吗？此操作无法撤销。",
    "deleteSuccess": "技能已成功删除。",
    "deleteFailure": "删除技能失败。",
    "deleteButton": "删除技能",
    "noImportedSkills": "未找到已导入的技能",
    "learnAboutAgentSkills": "在以下文档中了解代理技能：",
    "agentDocs": "AnythingLLM 代理文档",
    "status": {
      "on": "开启",
      "off": "关闭"
    }
  },

  // Agent SQL
  "agentSql": {
    "newConnectionTitle": "新 SQL 连接",
    "addConnectionInfo": "在下方添加您的数据库连接信息，之后可用于 SQL 代理调用。",
    "warningMessage": "<b>警告：</b> SQL 代理被<i>指示</i>仅执行非修改性查询。这<b>无法</b>防止因错误行为而删除数据。仅连接具有<b>只读</b>权限的用户。",
    "selectEngine": "选择您的 SQL 引擎",
    "connectionName": "连接名称",
    "connectionNamePlaceholder": "用于识别此 SQL 连接的唯一名称",
    "dbUser": "数据库用户",
    "dbUserPlaceholder": "root",
    "dbPassword": "数据库用户密码",
    "dbPasswordPlaceholder": "password123",
    "serverEndpoint": "服务器端点",
    "serverEndpointPlaceholder": "您的数据库的主机名称或端点",
    "port": "端口",
    "portPlaceholder": "3306",
    "database": "数据库",
    "databasePlaceholder": "代理将与之交互的数据库",
    "cancel": "取消",
    "saveConnection": "保存连接",
    "engine": {
      "postgresql": "PostgreSQL",
      "mysql": "MySQL",
      "sql-server": "SQL Server"
    }
  },

  // API Keys
  api: {
    title: "API 密钥",
    description: 
      "API 密钥允许持有者以编程方式访问和管理此 AnythingLLM 实例。",
    link: "阅读 API 文档",
    generate: "生成新的 API 密钥",
    table: {
      key: "API 密钥",
      by: "创建者",
      created: "创建",
    },
  },

  // LLM Preferences
  llm: {
    title: "LLM 首选项",
    description:
      "这些是您首选的 LLM 聊天和嵌入提供商的凭据和设置。重要的是，这些密钥是最新的和正确的，否则 AnythingLLM 将无法正常运行。",
    provider: "LLM 提供商",
    "toastSaveSuccess": "LLM 偏好设置已成功保存。",
    "toastSaveError": "保存 LLM 设置失败：{{error}}",
    "searchPlaceholder": "搜索所有 LLM 提供商",
    "noneSelected": "尚未选择",
    "noProviderSelected": "您需要选择一个 LLM"
  },

  transcription: {
    title: "转录模型首选项",
    description:
      "这些是您的首选转录模型提供商的凭据和设置。重要的是这些密钥是最新且正确的，否则媒体文件和音频将无法转录。",
    provider: "转录提供商",
    "warn-start":
      "在 RAM 或 CPU 有限的计算机上使用本地耳语模型可能会在处理媒体文件时停止 AnythingLLM。",
    "warn-recommend": 
      "我们建议至少 2GB RAM 并上传 <10Mb 的文件。",
    "warn-end": 
      "内置模型将在首次使用时自动下载。",
    "toast": {
      "success": "转录偏好设置已成功保存。",
      "error": "保存偏好设置失败：{{error}}"
    },
    "searchPlaceholder": "搜索音频转录服务提供商",
    "providers": {
      "openai": {
        "name": "OpenAI",
        "description": "使用您的 API 密钥利用 OpenAI Whisper-large 模型。"
      },
      "local": {
        "name": "AnythingLLM 内建",
        "description": "在此实例上私密地运行内建的 Whisper 模型。"
      }
    }
  },

  embedding: {
    title: "嵌入首选项",
    "desc-start":
      "当使用本身不支持嵌入引擎的 LLM 时，您可能需要额外指定用于嵌入文本的凭据。",
    "desc-end":
      "嵌入是将文本转换为矢量的过程。需要这些凭据才能将您的文件和提示转换为 AnythingLLM 可以用来处理的格式。",
    provider: {
      title: "嵌入引擎提供商",
      description: "使用 AnythingLLM 的本机嵌入引擎时不需要设置。",
    },
  },

  text: {
    title: "文本拆分和分块首选项",
    "desc-start":
      "有时，您可能希望更改新文档在插入到矢量数据库之前拆分和分块的默认方式。",
    "desc-end": 
      "只有在了解文本拆分的工作原理及其副作用时，才应修改此设置。",
    "warn-start": "此处的更改仅适用于",
    "warn-center": "新嵌入的文档",
    "warn-end": "，而不是现有文档。",
    size: {
      title: "文本块大小",
      description: "这是单个向量中可以存在的字符的最大长度。",
      recommend: "嵌入模型的最大长度为",
      placeholder: "輸入最大長度",
    },
    overlap: {
      title: "文本块重叠",
      description: "这是在两个相邻文本块之间分块期间发生的最大字符重叠。",
      "placeholder": "输入最大重叠大小"
    },
  },

  // Vector Database
  vector: {
    title: "向量数据库",
    description:
      "这些是 AnythingLLM 实例如何运行的凭据和设置。重要的是，这些密钥是最新的和正确的。",
    provider: {
      title: "向量数据库提供商",
      description: "LanceDB 不需要任何配置。",
    },
    "saveError": "保存向量数据库设置失败：{{error}}",
    "saveSuccess": "向量数据库偏好设置已成功保存。",
    "providers": {
      "lancedb": {
        "name": "LanceDB",
        "description": "100% 本地化的向量数据库，与 AnythingLLM 运行于同一实例上。"
      },
      "chroma": {
        "name": "Chroma",
        "description": "开源向量数据库，可自行托管或使用云端服务。"
      },
      "pinecone": {
        "name": "Pinecone",
        "description": "100% 云端向量数据库，适用于企业用例。"
      },
      "zilliz": {
        "name": "Zilliz Cloud",
        "description": "专为企业设计的云端托管向量数据库，符合 SOC 2 规范。"
      },
      "qdrant": {
        "name": "QDrant",
        "description": "开源本地及分布式云端向量数据库。"
      },
      "weaviate": {
        "name": "Weaviate",
        "description": "开源本地及云端托管的多模态向量数据库。"
      },
      "milvus": {
        "name": "Milvus",
        "description": "开源、高度可扩展且速度极快的向量数据库。"
      },
      "astra": {
        "name": "AstraDB",
        "description": "为真实世界生成式 AI 提供向量搜索功能。"
      }
    }
  },

  // Embeddable Chats
  embeddable: {
    title: "可嵌入的聊天小部件",
    description:
      "可嵌入的聊天小部件是与单个工作区绑定的面向公众的聊天界面。这些允许您构建工作区，然后您可以将其发布到全世界。",
    create: "创建嵌入式对话",
    table: {
      workspace: "工作区",
      chats: "已发送聊天",
      Active: "活动域",
    },
  },

  // Embeddable Chat History
  "embed-chats": {
    title: "嵌入的聊天历史纪录",
    export: "导出",
    "exportSuccess": "嵌入对话已成功导出为 {{name}}。",
    "exportFailure": "嵌入对话导出失败。",
    description: "这些是您发布的任何嵌入的所有记录的聊天和消息。",
    table: {
      embed: "嵌入",
      sender: "发送者",
      message: "消息",
      response: "响应",
      at: "发送时间",
    },
  },

  multi: {
    title: "多用户模式",
    description: "通过激活多用户模式来设置您的实例以支持您的团队。",
    enable: {
      "is-enable": "多用户模式已启用",
      enable: "启用多用户模式",
      description:
        "默认情况下，您将是唯一的管理员。作为管理员，您需要为所有新用户或管理员创建账户。不要丢失您的密码，因为只有管理员用户可以重置密码。",
      username: "管理员账户用户名",
      password: "管理员账户密码",
      "isEnabled": "多用户模式已启用",
      "usernamePlaceholder": "输入管理员用户名",
      "passwordPlaceholder": "输入管理员密码"
    },
    password: {
      title: "密码保护",
      description:
        "用密码保护您的AnythingLLM实例。如果您忘记了密码，那么没有恢复方法，所以请确保保存这个密码。",
      "instance": {
        "title": "实例密码",
        "password": "系统密码",
        "description": "使用密码保护您的系统，以限制未授权的访问。"
      }
    },
    instance: {
      title: "实例密码保护",
      description:
        "默认情况下，您将是唯一的管理员。作为管理员，您需要为所有新用户或管理员创建账户。不要丢失您的密码，因为只有管理员用户可以重置密码。",
      password: "实例密码",
    },
    "success": "多用户模式已成功启用。",
    "failure": "启用多用户模式失败：{{error}}"
  },

  // Event Logs
  event: {
    title: "事件日志",
    description: "查看此实例上发生的所有操作和事件以进行监控。",
    clear: "清除事件日志",
    table: {
      type: "事件类型",
      user: "用户",
      occurred: "发生时间",
    },
  },

  // Privacy & Data-Handling
  privacy: {
    title: "隐私和数据处理",
    description:
      "这是您对如何处理连接的第三方提供商和AnythingLLM的数据的配置。",
    llm: "LLM 选择",
    embedding: "嵌入首选项",
    vector: "向量数据库",
    anonymous: "启用匿名遥测",
    "llmLogoAlt": "LLM 标志",
    "llmDescription": {
      "desc1": "您的数据将被安全处理。",
      "desc2": "支持先进的语言模型。",
      "desc3": "数据在处理后不会被存储。"
    },
    "embeddingLogoAlt": "嵌入引擎标志",
    "embeddingDescription": {
      "desc1": "嵌入用于文本向量化。",
      "desc2": "高效且可扩展的处理。",
      "desc3": "支持与各种工具的集成。"
    },
    "vectorLogoAlt": "向量数据库标志",
    "vectorDescription": {
      "desc1": "存储嵌入以快速检索。",
      "desc2": "为 AI 工作负载高度优化。",
      "desc3": "注重隐私与安全性。"
    },
    "telemetryToast": {
      "enabled": "已启用匿名遥测。",
      "disabled": "已停用匿名遥测。"
    },
    "telemetryDescription": "所有事件不会记录 IP 地址，且不包含任何识别性内容。请参考 GitHub 上的事件标签列表。",
    "feedbackRequest": "如果您关闭遥测，请考虑提供反馈以帮助我们改进。"
  },
};

export default TRANSLATIONS;
