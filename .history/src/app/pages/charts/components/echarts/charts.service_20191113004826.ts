import { Injectable } from '@angular/core';

@Injectable()
export class ChartsService {

    constructor() {
   
    }
    
    PieOption = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data: ['Example1', 'Example2', 'Example3']
        },
        roseType: 'angle',
        series: [
            {
                name: 'PieChart',
                type: 'pie',
                radius: [0, '50%'],
                data: [
                    { value: 235, name: 'Example1' },
                    { value: 210, name: 'Example2' },
                    { value: 162, name: 'Example3' }
                ]
            }
        ]
    }
  

    BarOption = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: 'Birds Hunted',
                type: 'bar',
                barWidth: '60%',
                data: [10, 52, 20, 34, 39, 33, 22, 40,50,70,78,]
            }
        ]
    };

 

    getBarOption() {
        return this.BarOption;
    }
   
}
