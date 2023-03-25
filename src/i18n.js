import Vue from 'vue'; // 引入Vue
import VueI18n from 'vue-i18n'; // 引入VueI18n

Vue.use(VueI18n);

// 載入所有語言檔案並合併成一個訊息物件
function loadLocaleMessages() { // 載入語言檔案
    const locales = require.context('./locales', true, /[A-Za-z0-9-,\s]+.js$/i); // 載入語言檔案
    const messages = {}; // 建立訊息物件
    locales.keys().forEach(key => { // 遍歷語言檔案
        const matched = key.match(/([A-Za-z0-9-]+)./i); // 取得語言檔案名稱
        if (matched && matched.length > 1) { // 如果取得語言檔案名稱
            const locale = matched[1]; // 取得語言檔案名稱
            messages[locale] = locales(key).default; // 將語言檔案加入訊息物件
        }
    });
    return messages; // 回傳訊息物件
}

// 創建 VueI18n 實例
const i18n = new VueI18n({
    locale: 'zh-TW', // 預設語言
    messages: loadLocaleMessages(), // 訊息物件
});

export default i18n;

// loadLocaleMessages() 函式使用 Webpack 的 require.context() 方法加載所有在 locales 資料夾下的檔案，並根據檔案名稱取得語言區域代碼。最後將所有訊息合併成一個物件返回。

// 這樣修改後，您只需要在 locales 資料夾中新增一個語言檔案，就可以自動載入該語言，不需要在 i18n.js 中手動新增語言。例如，如果您要新增日語支援，只需在 locales 資料夾中新增一個 ja.js 檔案，其中包含日語對應的訊息，就能自動載入日語語言支援。

