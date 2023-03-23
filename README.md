BMI 計算器元件
=========
 
這是一個用 Vue.js 製作的 BMI 計算器元件。使用者可以輸入身高和體重數據，計算 BMI 值，並顯示 BMI 狀態和數值。該元件可以輕鬆地集成到任何 Vue.js 應用程式中，並進行自定義。
 
使用方法
----
 
1.  在 Vue.js 應用程式中引入 BMI 計算器元件
    
 
```
javascriptCopy codeimport BMICalculator from '@/components/BMICalculator.vue';export default {  name: 'App',  components: {    BMICalculator,
  },
};
```
 
2.  在模板中使用 BMI 計算器元件
    
 
```
htmlCopy code<template>
  <div>
    <bmi-calculator />
  </div></template>
```
 
屬性
--
 
### height
 
*   類型：`Number`
    
*   預設值：`null`
    
 
使用者的身高數據。
 
### weight
 
*   類型：`Number`
    
*   預設值：`null`
    
 
使用者的體重數據。
 
計算屬性
----
 
### bmiStatus
 
*   類型：`String`
    
 
根據計算出的 BMI 值，返回 BMI 狀態。
 
### bmiStatusText
 
*   類型：`String`
    
 
根據計算出的 BMI 值，返回 BMI 狀態的文本標籤。
 
方法
--
 
### calculateBMI()
 
根據使用者輸入的身高和體重數據，計算 BMI 值。