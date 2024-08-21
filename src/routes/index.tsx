import { component$, useSignal } from '@builder.io/qwik';
import { Chartjs } from '~/components/chartjs/chartjs';

export const sampleData1 =  {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [{
    label: '# of Votes',
    data: [12, 19, 3, 5, 2, 3],
    borderWidth: 1
  }] 
}

export const sampleData2 =  {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [{
    label: '# of Votes',
    data: [6, 11, 12, 50, 21, 3],
    borderWidth: 1
  }] 
}

export const sampleData3 =  {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [{
    label: '# of Votes',
    data: [2, 9, 30, 25, 2, 3],
    borderWidth: 1
  }] 
}

export const sampleData4 =  {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [{
    label: '# of Votes',
    data: [6, 6, 2, 50, 99, 3],
    borderWidth: 1
  }] 
}

export default component$(() => {

  const title = useSignal("Chart Title")
  const data1 = useSignal(sampleData1)
  const data2 = useSignal(sampleData2)

  return (
      <>
      <button onClick$={() => (       
          data1.value=sampleData3, 
          data2.value=sampleData4,
          title.value="Chart Title changed"
        )} >change data and title</button> 
      <Chartjs
            id="chart1"
            chartType='bar'
            title={title}
            data={data1}
        ></Chartjs>

      <Chartjs
            id="chart2"
            chartType='line'
            title={title}
            data={data2}
        ></Chartjs>
      </>
    )
});