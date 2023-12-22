function calculationTime(){
    console.log('client.js is sourced!');

    axios({
        method: 'GET',
        url:'/calculations'
    })
        .then(function(response) {
            console.log(response.data);
            let calculationServer = response.data;
            let calculationDisplay = document.querySelector('#recentResult');  
            for (let calculation of calculationServer) {
                calculationDisplay.innerHTML = ''
                calculationDisplay.innerHTML += `
                <ul>
                    <p1>${calculation.result} </p1>
                </ul>
                `; 

            let calHistoryDisplay = document.querySelector('#resultHistory');
                calHistoryDisplay.innerHTML += `
                <ul>
                    <li> ${calculation.numOne} ${calculation.operator} ${calculation.numTwo} =  ${calculation.result}</li>
                </ul>
                `    
            } 
         }) .catch(function(error){
            console.log(error)
            alert('Something happened whats going on')
         });


}

calculationTime();

function letsOperator(event){
    let opoElement = document.querySelector('#operate');
    opoElement.innerHTML = event.target.innerText   
    console.log(opoElement.innerHTML)
}
    

function submitCalculations(event){ 
   
    event.preventDefault();
    let oneNum = document.querySelector('#numberOne');
    let twoNum = document.querySelector('#numberTwo'); 
    let opoElement = document.querySelector('#operate');
     console.log('yo yo', opoElement.innerHTML); 
    let opoOpe = opoElement.innerHTML;
    

    

    let letsCalculate = {
        numOne: oneNum.value,
        numTwo: twoNum.value,    
        operator: opoOpe
    }; 
        axios({
        method: 'POST',
        url: '/calculations',
        data: letsCalculate
    }) .then ((response) => {
        const calculateElement = document.querySelector('#resultHistory');
        calculateElement.innerHTML = '';
        calculationTime()

    }) .catch(function(error){
        console.error('somethings wrong')
    })
}

