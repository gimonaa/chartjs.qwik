/* eslint-disable qwik/valid-lexical-scope */
import { component$, useSignal, useVisibleTask$, type Signal, } from '@builder.io/qwik';
import { Chart, type ChartData, type ChartTypeRegistry, registerables } from 'chart.js';

type ChartProps = {
  id: string,
  title?: Signal<string>,
  chartType: keyof ChartTypeRegistry,
  data: Signal<ChartData>
}

export const Chartjs = component$<ChartProps>(({ id, title, chartType, data }) => {

  const myChart  = useSignal<HTMLCanvasElement>();

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(( { track }) => {
    track(() => title?.value);
    track(() => data.value);

    Chart.getChart(id)?.destroy();

    if (myChart.value) {   
      Chart.register(...registerables,);
      new Chart(myChart.value, {
        type: chartType,
        data: data.value,
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          },
          plugins: {
            title: {
              display: true,
              text: title?.value,
            }
          }
        }
      });
    }

  });

  return (
    <div>
      <canvas ref={myChart} id={id}></canvas>
    </div>
  );
});
