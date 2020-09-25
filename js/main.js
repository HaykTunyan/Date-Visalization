// Main JS


// var ctx = document.getElementById('myChart').getContext('2d');



// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 4, 7, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });


//  Line Chart

var ctx = document.getElementById('myLineChart').getContext('2d');

Chart.defaults.global.hover.mode = 'nearest';

var myLineChart = new Chart(ctx, {
  type: 'line',
  fill: 'true',
  data: {

    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October', 
      'November ', 
      'December '
    ],
    datasets: [
      {
      label: [' User One ' ], 
      data: [
        {
          x: 0,
          y: 0
        },
        {
          x: 5,
          y: 1
        },
        {
          x: 12,
          y: 2
        },
        {
          x: 25,
          y: 3
        },
        {
          x: 6,
          y: 4
        },
        {
          x: 7,
          y: 5
        },
        {
          x: 18,
          y: 6
        },
        {
          x: 19,
          y: 7
        },
        {
          x: 10,
          y: 8
        },
        {
          x: 21,
          y: 9
        },
        {
          x: 12,
          y: 10
        },
        {
          x: 23,
          y: 11
        }
      ],
     
      borderColor: [
          'red', //  index 1
          '#F400A1', //  index 2
          '#CEFF00', //  index 3
          '#40E0D0', //  index 4
          '#66DDAA',  //  index 5
          '#FFDB00',  //  index 6
          '#BA55D3', //  index 7
          '#0FC0FC', //  index 8
          '#FF0800',  //  index 9
          '#0048BA', //  index 10
          '#00FF00',  //  index 11
         
      ],
      borderWidth: 3,
      color : [
        'black', 
    
      ],
      order: 1
      },
      {
      label: 'Order 2',
      data: [
        {
          x: 24,
          y: 20
        },
        {
          x: 24,
          y: 20
        },
        {
          x: 24,
          y: 20
        },
        {
          x: 24,
          y: 20
        },
        {
          x: 24,
          y: 20
        },
        {
          x: 24,
          y: 20
        },
        {
          x: 24,
          y: 20
        },
        {
          x: 24,
          y: 20
        },
        {
          x: 24,
          y: 20
        },
        {
          x: 24,
          y: 20
        }
        
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)', //  index 1
        '#F400A1', //  index 2
        '#CEFF00', //  index 3
        '#40E0D0', //  index 4
        '#66DDAA',  //  index 5
        '#FFDB00',  //  index 6
        '#BA55D3', //  index 7
        '#0FC0FC', //  index 8
        '#FF0800',  //  index 9
        '#0048BA', //  index 10
        '#00FF00',  //  index 11
   
    ],
      // this dataset is drawn below
      order: 2
      }
    ]    
  } ,

  options: {
  
    
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true,
                suggestedMax: 50
            }
        }],
        xAxes: [{
          ticks: {
            beginAtZero: true,
          }
        }]
    },
    legend: {
      labels: {
          // This more specific font property overrides the global property
          fontColor: 'black',
          defaultFontSize: '12'
      }
    },
    title: {
      display: true,
      text: 'Data Visualization',
      fontColor: 'black',
      fontSize: '26'
  }
  }

});