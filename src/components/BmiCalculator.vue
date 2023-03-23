<template>
  <div>
    <a-card :title="$t('bmiCalculator')" style="width: 400px; margin: 0 auto">
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
  </div>
</template>


<script>
  export default {
    data() {
      return {
        height: null,
        weight: null,
        bmi: null,
      };
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