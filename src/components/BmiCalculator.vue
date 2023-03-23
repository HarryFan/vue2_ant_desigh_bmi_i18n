<template>
  <div>



    <a-card :title="$t('bmiCalculator')" style="width: 400px; margin: 1em auto">
      <a-form :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }">
        <a-form-item :label="$t('height')">
          <a-input-number v-model="height" style="width: 100%" />
        </a-form-item>
        <a-form-item :label="$t('weight')">
          <a-input-number v-model="weight" style="width: 100%" />
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 24, offset: 8 }">
          <a-button type="primary" @click="calculateBMI">{{ $t('calculate') }}</a-button>
        </a-form-item>
        <a-alert v-if="bmi" :message="`${$t('yourBMI')}: ${bmi}`" type="info" show-icon />
      </a-form>
    </a-card>

    <a-alert v-if="bmi" :message="`${$t('yourBMI')}: ${bmi} (${bmiStatusText})`" :type="bmiStatus" show-icon />
  </div>
</template>


<script>
  // 這是一個計算BMI值的Vue組件。

  // 模板部分：

  // template中有一個card，卡片內包含了一個form，用來收集使用者的身高和體重數據，並且有一個按鈕，點擊按鈕後會觸發calculateBMI方法，計算使用者的BMI值。如果已經計算出了BMI值，會顯示一個alert，展示BMI值和使用者的BMI狀態。

  // 腳本部分：

  // 在腳本中，定義了一個data對象，包含了三個變量：height（身高），weight（體重）和bmi（BMI值）。還有兩個computed屬性：bmiStatus和bmiStatusText，用來根據BMI值來顯示不同的狀態和文本。最後還有一個calculateBMI方法，用來計算BMI值。

  // 在computed屬性中，如果已經計算出了BMI值，會根據不同的BMI值範圍，返回不同的狀態。如果BMI值小於18.5，返回warning（體重過輕）；如果BMI值在18.5到24之間，返回success（正常體重）；如果BMI值在24到30之間，返回warning（超重）；如果BMI值大於等於30，返回error（嚴重肥胖）。

  // 在computed屬性中的bmiStatusText中，也是根據不同的BMI值範圍，返回不同的文本。如果BMI值小於18.5，返回體重過輕；如果BMI值在18.5到24之間，返回正常體重；如果BMI值在24到30之間，返回超重；如果BMI值大於等於30，返回嚴重肥胖。

  // 在calculateBMI方法中，會計算使用者的BMI值，並將計算出的BMI值賦值給bmi變量。如果使用者沒有輸入身高或體重數據，則不進行計算。


  export default {
    data() {
      return {
        height: null,
        weight: null,
        bmi: null,
      };
    },
    computed: {
      bmiStatus() {
        if (this.bmi) {
          if (this.bmi < 18.5) {
            return 'warning';
          } else if (this.bmi >= 18.5 && this.bmi < 24) {
            return 'success';
          } else if (this.bmi >= 24 && this.bmi < 30) {
            return 'warning';
          } else {
            return 'error';
          }
        }
        return '';
      },
      bmiStatusText() {
        if (this.bmi) {
          if (this.bmi < 18.5) {
            return this.$t('underweight');
          } else if (this.bmi >= 18.5 && this.bmi < 24) {
            return this.$t('normal');
          } else if (this.bmi >= 24 && this.bmi < 30) {
            return this.$t('overweight');
          } else {
            return this.$t('severeObesity');
          }
        }
        return '';
      },
    },
    methods: {
      calculateBMI() {
        if (this.height && this.weight) {
          const heightInMeters = this.height / 100;
          this.bmi = (this.weight / (heightInMeters * heightInMeters)).toFixed(1);
        }
      },
    },
  };
</script>