<template>
  <div class="user-page">
    <p>Mean of Q1: {{ meanQ1 }} /10</p>
    <p>Mean of Q2: {{ meanQ2*100 }} %</p>
    <p>mean of Q3: {{ meanQ3 }} /10</p>
    <p>Mean of Q4: {{ meanQ4*100 }}% </p>
    <p>Mean of Q5: {{ meanQ5 }} /10</p>
    <p>Mean of Q6: {{ meanQ6 }} /10</p>
    <p>Mean of Q7: {{ meanQ7*100 }}% </p>
    <p>Mean of Q8: {{ meanQ8 }} /10</p>
    <p>Mean of Q9: {{ meanQ9 *100}}% </p>
    <p>Mean of Q10: {{ meanQ10 }} /10</p>
    <canvas id="myChart" width="400" height="400"></canvas>
  </div>
</template>

<script>
import axios from "axios";
import Chart from 'chart.js';

export default {
  name: "dashboard",
  data() {
    return {
      info: [],
      token: '8ee092f7f3a9e806fe1d580bb0f0e399f475c059e56a63e36db862883349322fd3cc863678f988df8fd3a89daf726c632b14964e87ef90fa76b8bbe32fc72f620336227c4929821d2136286439ddfb2ae883f360563cdf50488d74d8287a51bebeac29bd19c4f4843dc0ff87d613448cc9595c0341e5ceaed67f5d10521f08e3'
    };
  },
  methods: {
    getUser() {
      axios
        .get("http://localhost:1337/api/requests", {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })
        .then((response) => {
          console.log(JSON.stringify(response.data, null, 2));
          this.info = response.data;
          this.$nextTick(() => {
            this.createChart();
          });
        });
    },
    createChart() {
      new Chart(document.getElementById('myChart'), {
        type: 'bar',
        data: {
          labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9', 'Q10'],
          datasets: [{
            label: 'Mean values',
            data: [
              this.meanQ1*10,
              this.meanQ2*100,
              this.meanQ3*10,
              this.meanQ4*100,
              this.meanQ5*10,
              this.meanQ6*10,
              this.meanQ7*100,
              this.meanQ8*10,
              this.meanQ9*100,
              this.meanQ10*10
            ],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });
    },
    mean(questionNumber) {
      if (this.info.data && this.info.data.length > 0) {
        const sum = this.info.data.reduce((total, item) => total + item.attributes[questionNumber], 0);
        return sum / this.info.data.length;
      }
      return 0;
    }
  },
  computed: {
    meanQ1() {
      return this.mean('Q1');
    },
    meanQ2() {
      return this.mean('Q2');
    },
    meanQ3() {
      return this.mean('Q3');
    },
    meanQ4() {
      return this.mean('Q4');
    },
    meanQ5() {
      return this.mean('Q5');
    },
    meanQ6() {
      return this.mean('Q6');
    },
    meanQ7() {
      return this.mean('Q7');
    },
    meanQ8() {
      return this.mean('Q8');
    },
    meanQ9() {
      return this.mean('Q9');
    },
    meanQ10() {
      return this.mean('Q10');
    },
  },
  created() {
    this.getUser();
  },
};
</script>

