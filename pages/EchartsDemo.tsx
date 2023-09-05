import React, {useRef, useEffect} from 'react';
import * as echarts from 'echarts/core';
import {LineChart, BarChart} from 'echarts/charts';
import {
  DataZoomComponent,
  GraphicComponent,
  GridComponent,
} from 'echarts/components';
import {SVGRenderer, SkiaChart} from '@wuba/react-native-echarts';

echarts.use([
  SVGRenderer,
  LineChart,
  BarChart,
  GridComponent,
  GraphicComponent,
  DataZoomComponent,
]);

const yAxisRange = [10, 35] as [number, number];
const dataRange = [16, 32] as [number, number];
const xData = Array.from({length: 24}).map((v, i) => `${i}`);

console.log('xData', xData);

function EchartsDemo() {
  const yDataRef = useRef<number[]>(
    xData.map(() => Math.round(Math.random() * (32 - 16) + 16)),
  );
  const skiaRef = useRef<any>(null);
  const myChartRef = useRef<any>(null);

  function onPointDragging(dataIndex, pos) {
    const newPointData = myChartRef?.current.convertFromPixel('grid', pos)[1];
    yDataRef.current.splice(
      dataIndex,
      1,
      restrictInRange(newPointData, dataRange),
    );
    myChartRef?.current.setOption({
      series: [
        {
          id: 'a',
          data: yDataRef.current || [],
        },
      ],
    });
  }

  function updatePosition() {
    myChartRef?.current.setOption({
      graphic: yDataRef.current.map(function (item, dataIndex) {
        return {
          position: myChartRef?.current.convertToPixel('grid', [
            xData[dataIndex],
            item,
          ]),
        };
      }),
    });
  }

  useEffect(() => {
    const option = {
      xAxis: {
        type: 'category',
        data: xData,
        // axisPointer: {label: '1'},
        axisLabel: {show: false},
      },
      yAxis: {
        type: 'value',
        min: yAxisRange[0],
        max: yAxisRange[1],
      },
      dataZoom: [
        {
          type: 'slider',
          xAxisIndex: 0,
          filterMode: 'none',
          realtime: true,
          start: 0,
          end: 40, // 初始展示40%
          height: 4,
          fillerColor: 'rgba(17, 100, 210, 0.42)', // 滚动条颜色
          borderColor: 'rgba(17, 100, 210, 0.12)',
          handleSize: 0, // 两边手柄尺寸
          showDetail: false, // 拖拽时是否展示滚动条两侧的文字
          top: '96%',
        },
      ],
      // grid: {
      // left: '20%',
      // },
      series: [
        {
          id: 'a',
          data: yDataRef.current,
          type: 'bar',
          barWidth: '99%',
          label: {
            show: true,
            position: 'insideBottomLeft', //put the label where you want
            offset: [-4, 30],
            align: 'center',
            formatter: function (params) {
              return params.name; //display series name
            },
          },
        },
      ],
    };

    if (skiaRef.current) {
      myChartRef.current = echarts.init(skiaRef.current, 'light', {
        width: 400,
        height: 400,
      });
      myChartRef?.current.setOption(option);
    }
    return () => myChartRef?.current.dispose();
  }, []);

  useEffect(() => {
    setTimeout(function () {
      myChartRef?.current.setOption({
        graphic: yDataRef.current.map(function (item, dataIndex) {
          return {
            type: 'rect',
            position: myChartRef?.current.convertToPixel('grid', [
              xData[dataIndex],
              item,
            ]),
            shape: {
              x: -15,
              y: -8,
              width: 30,
              height: 16,
            },
            style: {
              fill: 'red',
            },
            // invisible: true,
            draggable: 'vertical',
            ondrag: function (e) {
              // console.log('***', this.x, this.y, '\n', dx, '\n', dy);
              onPointDragging(dataIndex, [e.target.x, e.target.y]);
            },
            ondragend: function () {
              updatePosition();
            },
            z: 3,
          };
        }),
      });
    }, 0);
    // window.addEventListener('resize', updatePosition);
    myChartRef?.current.on('dataZoom', () => {
      setTimeout(() => {
        updatePosition();
      }, 500);
    });
    // myChartRef?.current.on('finished', () => {
    //   console.log('render');
    // });
  }, []);

  return <SkiaChart ref={skiaRef} />;
}

export default EchartsDemo;

const restrictInRange = (num: number, range: [number, number]) => {
  return Math.min(Math.max(num, range[0]), range[1]);
};
