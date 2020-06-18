<template>
  <div id="echarts" ref="echarts" style="width:100%; height: 370px;"></div>
</template>
<script>
import echarts from 'echarts';

const ERR_OK = 0;
export default {
  name: 'TradingChart',
  data() {
    return {
      youEchartData: [],
    };
  },
  mounted() {
    this.youFunc();
  },
  methods: {
    // 你的图表函数
    youFunc() {
      let myData = '';
      this.$http.get('/api/YoukLine').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.youEchartData = response.data;
          myData = this.youEchartData;
          console.log('+++++++++++++++++++++++++++++++++');
          console.log(myData);
          console.log('+++++++++++++++++++++++++++++++++');
        }
        const rawData = this.youEchartData.reverse();
        function calculateMA(dayCount, data) {
          const result = [];
          for (let i = 0, len = data.length; i < len; i++) {
            if (i < dayCount) {
              result.push('-');
              continue;
            }
            let sum = 0;
            for (let j = 0; j < dayCount; j++) {
              sum += data[i - j][1];
            }
            result.push(sum / dayCount);
          }
          return result;
        }
        const dates = rawData.map((item) => {
          return item[0];
        });
        const data = rawData.map((item) => {
          return [+item[1], +item[2], +item[5], +item[6]];
        });
        const option = {
          backgroundColor: '#21202D',
          legend: {
            data: ['日K', 'MA5', 'MA10', 'MA20', 'MA30'],
            inactiveColor: '#777',
            textStyle: {
              color: '#fff',
            },
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              animation: false,
              type: 'cross',
              lineStyle: {
                color: '#376df4',
                width: 2,
                opacity: 1,
              },
            },
          },
          xAxis: {
            type: 'category',
            data: dates,
            axisLine: { lineStyle: { color: '#8392A5' } },
          },
          yAxis: {
            scale: true,
            axisLine: { lineStyle: { color: '#8392A5' } },
            splitLine: { show: false },
          },
          grid: {
            // bottom: 80,
            left: 50,
            right: 50,
            bottom: 80,
          },
          dataZoom: [
            {
              textStyle: {
                color: '#8392A5',
              },
              handleSize: '80%',
              dataBackground: {
                areaStyle: {
                  color: '#8392A5',
                },
                lineStyle: {
                  opacity: 0.8,
                  color: '#8392A5',
                },
              },
              handleStyle: {
                color: '#fff',
                shadowBlur: 3,
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowOffsetX: 2,
                shadowOffsetY: 2,
              },
            },
            {
              type: 'inside',
            },
          ],
          animation: false,
          series: [
            {
              type: 'candlestick',
              name: '日K',
              // data: data,
              data,
              itemStyle: {
                color: '#FD1050',
                color0: '#0CF49B',
                borderColor: '#FD1050',
                borderColor0: '#0CF49B',
              },
            },
            {
              name: 'MA5',
              type: 'line',
              data: calculateMA(5, data),
              smooth: true,
              showSymbol: false,
              lineStyle: {
                width: 1,
              },
            },
            {
              name: 'MA10',
              type: 'line',
              data: calculateMA(10, data),
              smooth: true,
              showSymbol: false,
              lineStyle: {
                width: 1,
              },
            },
            {
              name: 'MA20',
              type: 'line',
              data: calculateMA(20, data),
              smooth: true,
              showSymbol: false,
              lineStyle: {
                width: 1,
              },
            },
            {
              name: 'MA30',
              type: 'line',
              data: calculateMA(30, data),
              smooth: true,
              showSymbol: false,
              lineStyle: {
                width: 1,
              },
            },
          ],
        };
        // 初始化图表
        const charts = echarts.init(document.getElementById('echarts'));
        charts.setOption(option);
        charts.resize();
      });
    },
  },
};
</script>
<style scoped>
</style>
