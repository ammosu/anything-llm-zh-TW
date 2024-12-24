const { v4 } = require("uuid");
const { exec } = require('child_process');
const fs = require('fs').promises;
const path = require('path');
const iconv = require('iconv-lite');
const {
  createdDate,
  trashFile,
  writeToServerDocuments,
} = require("../../utils/files");
const { tokenizeString } = require("../../utils/tokenizer");
const { default: slugify } = require("slugify");

async function convertDocToText(inputPath) {
  const outputDir = path.dirname(inputPath);
  const outputPath = path.join(outputDir, `${path.basename(inputPath, '.doc')}.txt`);
  
  return new Promise((resolve, reject) => {
    // 使用 libreoffice 將 .doc 轉換為 .txt，並指定輸出編碼為 UTF-8
    exec(`soffice --headless --convert-to "txt:Text (encoded):UTF8" "${inputPath}" --outdir "${outputDir}"`, async (error) => {
      if (error) {
        reject(error);
        return;
      }
      
      try {
        // 讀取文件內容
        const buffer = await fs.readFile(outputPath);
        
        // 嘗試不同的編碼方式
        let content;
        try {
          // 首先嘗試 UTF-8
          content = buffer.toString('utf8');
        } catch (e) {
          // 如果 UTF-8 失敗，嘗試 Big5
          content = iconv.decode(buffer, 'big5');
        }

        // 如果內容看起來像亂碼，嘗試其他編碼
        if (/[\uFFFD]/.test(content)) {
          content = iconv.decode(buffer, 'big5');
        }

        await fs.unlink(outputPath); // 刪除臨時生成的txt文件
        resolve(content);
      } catch (err) {
        reject(err);
      }
    });
  });
}

async function asDoc({ fullFilePath = "", filename = "" }) {
  console.log(`-- Working ${filename} --`);
  
  try {
    const content = await convertDocToText(fullFilePath);

    if (!content || content.length === 0) {
      console.error(`Resulting text content was empty for ${filename}.`);
      trashFile(fullFilePath);
      return {
        success: false,
        reason: `No text content found in ${filename}.`,
        documents: [],
      };
    }

    const data = {
      id: v4(),
      url: "file://" + fullFilePath,
      title: filename,
      docAuthor: "no author found",
      description: "No description found.",
      docSource: "doc file uploaded by the user.",
      chunkSource: "",
      published: createdDate(fullFilePath),
      wordCount: content.split(" ").length,
      pageContent: content,
      token_count_estimate: tokenizeString(content).length,
    };

    const document = writeToServerDocuments(
      data,
      `${slugify(filename)}-${data.id}`
    );
    trashFile(fullFilePath);
    console.log(`[SUCCESS]: ${filename} converted & ready for embedding.\n`);
    return { success: true, reason: null, documents: [document] };
  } catch (error) {
    console.error(`Error processing ${filename}:`, error);
    trashFile(fullFilePath);
    return {
      success: false,
      reason: `Failed to process ${filename}: ${error.message}`,
      documents: [],
    };
  }
}

module.exports = asDoc;
