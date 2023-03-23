import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);
const messages = {
    'zh-TW': {
      bmiCalculator: 'BMI 計算器',
      height: '身高（公分）',
      weight: '體重（公斤）',
      calculate: '計算',
      yourBMI: '您的 BMI',
      language:'語言',
    },
    'zh-CN': {
      bmiCalculator: 'BMI 计算器',
      height: '身高（公分）',
      weight: '体重（公斤）',
      calculate: '计算',
      yourBMI: '您的 BMI',
      language: '语言',
    },
    'en': {
      bmiCalculator: 'BMI Calculator',
      height: 'Height (cm)',
      weight: 'Weight (kg)',
      calculate: 'Calculate',
      yourBMI: 'Your BMI',
      language: 'Language',
    },
    'ko': {
      bmiCalculator: 'BMI 계산기',
      height: '키 (cm)',
      weight: '체중 (kg)',
      calculate: '계산',
      yourBMI: '당신의 BMI',
      language: '언어',
    },
  };
  
  
const i18n = new VueI18n({
  locale: 'zh-TW', // 預設語言
  messages,
});

export default i18n;
