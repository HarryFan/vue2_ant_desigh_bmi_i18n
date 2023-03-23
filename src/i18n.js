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
        language: '語言',
        normal: '正常',
        overweight: '過重',
        obesity: '肥胖',
        severeObesity: '嚴重肥胖',
        underweight: '體重過輕',
    },
    'zh-CN': {
        bmiCalculator: 'BMI 计算器',
        height: '身高（公分）',
        weight: '体重（公斤）',
        calculate: '计算',
        yourBMI: '您的 BMI',
        language: '语言',
        normal: '正常',
        overweight: '过重',
        obesity: '肥胖',
        severeObesity: '严重肥胖',
        underweight: '体重过轻',
    },
    'en': {
        bmiCalculator: 'BMI Calculator',
        height: 'Height (cm)',
        weight: 'Weight (kg)',
        calculate: 'Calculate',
        yourBMI: 'Your BMI',
        language: 'Language',
        normal: 'Normal',
        overweight: 'Overweight',
        obesity: 'Obesity',
        severeObesity: 'Severe Obesity',
        underweight: 'Underweight',
    },
    'ko': {
        bmiCalculator: 'BMI 계산기',
        height: '키 (cm)',
        weight: '체중 (kg)',
        calculate: '계산',
        yourBMI: '당신의 BMI',
        language: '언어',
        normal: '정상',
        overweight: '과체중',
        obesity: '비만',
        severeObesity: '심각한 비만',
        underweight: '저체중',
    },
};


const i18n = new VueI18n({
    locale: 'zh-TW', // 預設語言
    messages,
});

export default i18n;