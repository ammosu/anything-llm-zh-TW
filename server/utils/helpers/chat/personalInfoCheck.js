const axios = require("axios");
require('dotenv').config(); // 添加 dotenv 支援

async function checkPersonalInfo(message) {
  // 從環境變數讀取設定
  const envCheck = {
    OPENROUTER_API_KEY: process.env.OPENROUTER_API_KEY,
    OPENROUTER_API_URL: process.env.OPENROUTER_API_URL || 'https://openrouter.ai/api/v1/chat/completions',
    OPENROUTER_MODEL_PREF: process.env.OPENROUTER_MODEL_PREF || 'meta-llama/llama-3.3-70b-instruct',
  };

  console.log("Environment variables check:", {
    OPENROUTER_API_KEY: envCheck.OPENROUTER_API_KEY ? "Set" : "Not set",
    OPENROUTER_API_URL: envCheck.OPENROUTER_API_URL,
    OPENROUTER_MODEL_PREF: envCheck.OPENROUTER_MODEL_PREF,
  });

  if (!envCheck.OPENROUTER_API_KEY) {
    throw new Error("OpenRouter API key not configured in environment variables");
  }

  const apiUrl = envCheck.OPENROUTER_API_URL;
  const model = envCheck.OPENROUTER_MODEL_PREF;

  try {
    console.log("Starting OpenRouter API call...");
    console.log("API URL:", apiUrl);
    console.log("Using model:", model);
    console.log("Message to check:", message);

    const requestBody = {
      model: model,
      messages: [
        {
          role: "system",
          content: `You are a personal information detection system. Your task is to analyze text in both English and Traditional Chinese (繁體中文) and identify if it contains sensitive personal information.

Check for the following types of personal information:
1. Names (姓名) - Including both English and Chinese names
2. Phone numbers (電話號碼) - Various formats including international
3. Email addresses (電子郵件)
4. Physical addresses (地址) - Both English and Chinese addresses
5. ID numbers (身份證字號) - Including Taiwan ID format
6. Credit card numbers (信用卡號)
7. Bank account information (銀行帳戶資訊)
8. Passwords (密碼)
9. Social media accounts (社群媒體帳號)
10. Other sensitive personal data (其他敏感個人資料)

Respond in the following JSON format only:
{
  "containsPersonalInfo": boolean,
  "detectedItems": string[], // List of found personal info types in Traditional Chinese
  "explanation": string // Brief explanation in Traditional Chinese of what was found
}

Example response for "我的電話是0912345678":
{
  "containsPersonalInfo": true,
  "detectedItems": ["電話號碼"],
  "explanation": "訊息中包含一個台灣手機號碼格式的電話號碼"
}`
        },
        {
          role: "user",
          content: message
        }
      ],
      temperature: 0.1,
      max_tokens: 500
    };

    console.log("Sending request to OpenRouter...");
    console.log("Request headers:", {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer <API_KEY_PRESENT>',
      'HTTP-Referer': 'https://github.com/mintplex-labs/anything-llm',
      'X-Title': 'AnythingLLM'
    });

    const response = await axios.post(
      apiUrl,
      requestBody,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${envCheck.OPENROUTER_API_KEY}`,
          'HTTP-Referer': 'https://github.com/mintplex-labs/anything-llm',
          'X-Title': 'AnythingLLM'
        },
        timeout: 30000 // 30 second timeout
      }
    );

    console.log("OpenRouter API Response Status:", response.status);
    console.log("OpenRouter API Response Headers:", response.headers);
    console.log("OpenRouter API Response Data:", JSON.stringify(response.data, null, 2));

    if (!response.data?.choices?.[0]?.message?.content) {
      console.error("Invalid response structure from OpenRouter");
      throw new Error("Invalid response structure from OpenRouter API");
    }

    try {
      const content = response.data.choices[0].message.content;
      console.log("Raw LLM response:", content);
      
      const result = JSON.parse(content);
      console.log("Parsed result:", result);

      if (typeof result !== 'object' || !('containsPersonalInfo' in result)) {
        throw new Error('Response not in expected format');
      }

      return result;
    } catch (parseError) {
      console.error("Failed to parse LLM response:", parseError);
      throw new Error(`Failed to parse OpenRouter response: ${parseError.message}`);
    }
  } catch (error) {
    console.error("OpenRouter API Error Details:");
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error("Error response data:", error.response.data);
      console.error("Error response status:", error.response.status);
      console.error("Error response headers:", error.response.headers);
      throw new Error(`OpenRouter API error (${error.response.status}): ${JSON.stringify(error.response.data)}`);
    } else if (error.request) {
      // The request was made but no response was received
      console.error("No response received from OpenRouter API");
      console.error("Request details:", error.request);
      throw new Error("No response received from OpenRouter API");
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error message:", error.message);
      throw error;
    }
  }
}

module.exports = { checkPersonalInfo };
