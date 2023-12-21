function calculationTime(){
    console.log('client.js is sourced!');

    axios({
        method: 'GET',
        url:'/calculations'
    })
        .then(function(response) {
            console.log(response.data);
            let calculationServer = response.data;
            let calculationDisplay = document.querySelector('#resultHistory');  
            for (let calculation of calculationServer) {
                calculationDisplay.innerHTML += `
                <ul>
                    <li> ${calculation.numOne} ${calculation.operator} ${calculation.numTwo} = ${calculation.result} </li>
                </ul>
                `; 
            } 
         }) .catch(function(error){
            console.log(error)
            alert('Something happened whats going on')
         });


}

calculationTime();






  // let recentcalculationDisplay = document.querySelector('#recentResult');
            //     recentcalculationDisplay.innerHTML +=`
            //     <p1> ${calculation.result} </p>
            //     `
