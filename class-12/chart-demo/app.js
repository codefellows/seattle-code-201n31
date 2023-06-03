const ctx = document.getElementById('myChart');

const chartConfig = {
  type: 'bar',
  data: {
    labels: ['Lemonade', 'Tea', 'Coke'],
    datasets: [{
      label: 'Level of Tastiness',
      data: [100, 70, 20,],
      borderWidth: 5,
      backgroundColor:['yellow', 'brown', 'black'],
      borderColor: 'blue',
    },
    {
      label: 'Sugar level',
      data: [50, 20, 80,],
      borderWidth: 5,
      backgroundColor:['white'],
      borderColor: 'black',
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero:true
      }
    }
  }
}

new Chart(ctx, chartConfig);
