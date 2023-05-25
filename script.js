// console.log('about to feetch a rainbo')
// fetch('img/imgb.jpeg').then(response =>{
//     console.log (response);
//     return response.blob();
// })
// .then(blob =>{
//     console.log(blob);
//     document.getElementById('rainbow').src = URL.createObjectURL(blob);
// });

// //
const xlabel = [];
const ytemps = [];


ChartIt();
async function getData(){
    const response = await fetch('test.csv');
    const data = await response.text();

    const table = data.split('\n').slice(1);
    table.forEach(row =>{
        const cols = row.split(',');
        const year = cols[0];
        const temp = cols[1];
        xlabel.push(year);
        ytemps.push(parseFloat(temp) + 14)
        // console.log(year,temp);
    });
}

async function ChartIt(){
    await getData();
    const ctx = document.getElementById('chart');
    new Chart(ctx, {
    type: 'line',
    data: {
        labels: xlabel,
            datasets: [{
        label: 'Avg temp',
        data: ytemps,
        borderWidth: 1
        }]
    },
    options: {
        scales: {
        y: {
            beginAtZero: true
        }
        }
    }
    });
}