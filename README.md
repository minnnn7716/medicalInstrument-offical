# 醫療器材形象網站｜作品集展示版

以虛構品牌 **Medical Instrument** 呈現的醫療器材形象網站，展示響應式版面、頁面切換、捲動動畫與表單互動的前端實作。品牌名稱、公司里程碑、產品範例及聯絡資訊均已匿名化，不代表真實公司的經營資訊或製造商合作關係。

## 專案功能

- 首頁、關於我們、合作優勢與產品介紹等頁面。
- 適用桌面與行動裝置的響應式版面及導覽選單。
- 進場動畫、捲動效果與跨頁聯絡區塊定位。
- 聯絡表單欄位驗證與 Sonner 提示訊息。
- 本機提供字型，啟動與建置時不需連線下載 Google Fonts。

## 使用技術

- Next.js 16、React 19、TypeScript
- Tailwind CSS 4
- React Hook Form、Zod
- AOS、Sonner

## 本機啟動

需要 Node.js 20.9 以上版本及 npm。

```sh
npm ci
npm run dev
```

啟動後開啟 [http://localhost:3000](http://localhost:3000)。

本專案會匯出靜態網站至 `out/`。本機預覽請先完成建置，再啟動靜態伺服器：

```sh
npm run build
npm start
```

`npm start` 只提供 `out/` 的靜態檔案，會自動辨識建置時的子路徑；日常開發請使用 `npm run dev`。

## 程式檢查

```sh
npm run typecheck
npm run lint
npm run build
npm run test:static
```

## 展示資料與表單行為

聯絡表單只在瀏覽器中驗證欄位並顯示展示提示，不會寄送或儲存訊息。網站不提供 `/api/contact` 後端路由，也沒有串接正式寄信服務或分析追蹤服務。本機開發不需要環境變數；本機 `.env` 檔案已排除 Git 追蹤。

一般情境圖片與各頁 banner 保留素材照；Product Experience 的產品圖片改為展示用 SVG 圖片，Logo 也使用虛構品牌圖示。

## 字型與素材

字型檔案位於 `public/fonts`，同目錄附有各字型的 SIL Open Font License 授權文件。正常啟動及建置使用本機字型，不會下載 Google Fonts。

如需重新下載字型，可執行以下維護指令；此指令需要網路連線：

```sh
node scripts/vendor-fonts.mjs
```

展示產品插圖與品牌圖示均保留 SVG 原始檔，方便後續調整。

## GitHub Pages 部署

展示網址：[Medical Instrument](https://minnnn7716.github.io/medicalInstrument-offical/)

推送到 `main` 後，GitHub Actions 會安裝依賴、執行檢查、建置與驗證靜態網站，再部署到 GitHub Pages。部署來源使用 GitHub Actions，工作流程位於 `.github/workflows/pages.yml`。

部署時會依 Pages 設定傳入 `NEXT_PUBLIC_BASE_PATH`，讓導覽、圖片、字型及其他資源支援儲存庫子路徑。若要在本機驗證相同路徑：

```sh
npm run build:pages
npm run test:static
npm start
```

依終端機顯示的網址開啟預覽，預設為 [http://127.0.0.1:3000/medicalInstrument-offical/](http://127.0.0.1:3000/medicalInstrument-offical/)。靜態匯出不使用 Next.js 伺服器圖片最佳化，聯絡表單仍維持純展示模式。

## 分支與發布流程

| 分支                          | 用途                                   |
| ----------------------------- | -------------------------------------- |
| `feature/Rolling-logo-vision` | Logo 捲動動畫原型                      |
| `feature/first-build`         | 網站初版、元件整理與表單提示等開發節點 |
| `release/1.0.0`               | 整合功能、展示版內容與啟動設定         |
| `main`                        | 合併 release 後的完成版本              |

Git 歷程保留功能開發、release 整合及合併回主線的節點。維護與啟動指令不會自動推送或部署網站。

## 匿名化與歷程整理

此儲存庫供獨立作品集展示使用。保留的開發節點已從原專案重新整理，每個版本中的客戶識別資料與正式服務設定均已移除或替換。

原開發節點的時間及訊息予以保留，作者與提交者資料已統一設定，因此 commit hash 與原專案不同。原始客戶歷程不包含在此展示版的發布分支中。

## 常見啟動問題

若開發伺服器顯示 Ready，但網頁請求持續等待，請先停止該伺服器，只清除自動產生的 `.next/dev` 快取，再執行 `npm run dev`。同一份專案請避免同時啟動多個開發伺服器。

若 `npm start` 提示找不到正式建置，請先執行 `npm run build`。
