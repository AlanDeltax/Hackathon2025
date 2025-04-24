let data = [400, 430, 448, -470, 540, -580, 690, 1100, 1200, 1380, 400, 430, 448, -470, 540, -580, 690, 1100, 1200, 1380, 400, 430, 448, -470, 540, -580, 690, 1100, 1200, 1380,];
let colors = data.map(value => value < 0 ? '#DC3545' : '#28A745');

aux = [];
for(i=0;i<=data.length-1;i++){
  aux[i] = String(i);
}

var options = {
  series: [{
    data: data
  }],
  chart: {
    type: 'bar',
    height: 350
  },
  colors: colors,
  plotOptions: {
    bar: {
      borderRadius: 4,
      borderRadiusApplication: 'end',
      horizontal: false,
      distributed: true,
    }
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    categories: aux,
  },
  // Configuración para mover el eje Y a la derecha
  yaxis: {
    opposite: true,          // Mueve el eje Y a la derecha
  },
  legend: {
    show: false
  }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

// fondo de emergencia -> dinero tipo
// 70,500 anual



// meta de ahorro -> aumentar a

// import * as fs from 'node:fs';

// const html = fs.readFileSync('index.html', { encoding: 'utf8' });

// /**
//  * Returns an HTML page containing an interactive Web-based tutorial.
//  * Visit the function URL to see it and learn how to build with lambda.
//  */
// export const handler = async () => {
//     const response = {
//         statusCode: 200,
//         headers: {
//             'Content-Type': 'text/html',
//         },
//         body: html,
//     };
//     return response;
// };
