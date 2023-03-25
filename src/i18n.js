import Vue from 'vue'; // 引入Vue
import VueI18n from 'vue-i18n'; // 引入VueI18n

Vue.use(VueI18n);

// 載入所有語言檔案並合併成一個訊息物件
function loadLocaleMessages() {
    // 使用 Webpack 的 require.context() 方法載入所有符合條件的語言檔案
    const locales = require.context('./locales', true, /[A-Za-z0-9-,\s]+.js$/i);

    // 建立一個空物件來存放所有語言的訊息
    const messages = {};

    // 遍歷所有語言檔案，取得語言代碼和該語言對應的訊息
    locales.keys().forEach(key => {
        // 取得語言代碼，例如：'zh-TW'
        const matched = key.match(/([A-Za-z0-9-]+)./i);

        // 如果成功取得語言代碼
        if (matched && matched.length > 1) {
            const locale = matched[1]; // 取得語言代碼
            const messagesForLocale = locales(key).default; // 取得該語言的訊息

            // 將該語言的訊息加入 messages 物件
            messages[locale] = messagesForLocale;
        }
    });

    // 回傳所有語言的訊息
    return messages;
}


// 載入語言包
const messages = loadLocaleMessages();

// 創建 VueI18n 實例並設定預設語言和訊息
const i18n = new VueI18n({
    locale: 'zh-TW', // 預設語言
    messages: messages, // 合併所有語言的訊息成一個物件
});

export default i18n;

// loadLocaleMessages() 函式使用 Webpack 的 require.context() 方法加載所有在 locales 資料夾下的檔案，並根據檔案名稱取得語言區域代碼。最後將所有訊息合併成一個物件返回。

// 這樣修改後，您只需要在 locales 資料夾中新增一個語言檔案，就可以自動載入該語言，不需要在 i18n.js 中手動新增語言。例如，如果您要新增日語支援，只需在 locales 資料夾中新增一個 ja.js 檔案，其中包含日語對應的訊息，就能自動載入日語語言支援。

