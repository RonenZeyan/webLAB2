
let lastResult=0,flag=''
let operator=''
let result =''
let monitorSTR = ''
let previousNum = 0
let nextNum = 0
monitor = document.getElementById('monitor')


function addCharToMonitor(x){
 monitor.innerHTML += x
 if(x=='pi'){
    result+=Math.PI
 }
 else if(x=='e'){
    result+=Math.E
 }
 else if(x=='sqrt'){
    result=Math.sqrt(result)
    calculateResult()
 }
 else if(x=='^2')
 {
    result=Math.pow(result,2)
    calculateResult()
 }
 else if(x=='10^')
 {
    result = Math.pow(10,result)
    calculateResult()
 }
 else if(x=='abs')
 {
    result = Math.abs(result)
    calculateResult()
 }
 else if(x=='fact')
 {
    previousNum=parseInt(result)
    nextNum=previousNum
    for(let i=1;i<previousNum;i++)
    {
        nextNum=nextNum*i
    }
    result=String(nextNum)
    previousNum=0
    previousNum=0
    calculateResult()
 }
 else if(x=='ln(')
 {
    result = Math.log(result)
    calculateResult()
 }
 else if(x=='log(')
 {
    result = Math.log10(result)
    calculateResult()
 }
 else if(x=='mod'){
    result+=x
    flag='mod'
 }
 else{
    result+=x
 }
}



function clearMonitor(){
    monitor.innerHTML= ''
    lastResult = 0
    result = ''
    monitorSTR = ''
}

function delete_Last_char(){
    monitorSTR = monitor.innerHTML
    monitorSTR = monitorSTR.substring(0,monitorSTR.length-1)
    monitor.innerHTML = monitorSTR
}

function calculateResult(){
    if(flag=='mod')
    {
        flag=''
        let start
        start = result.indexOf('mod')
        nextNum=result.substring(0,start)
        previousNum=result.slice(start+3,result.length)
        result = nextNum%previousNum
        previousNum=0
        nextNum=0
    }
    lastResult = eval(result)
    result=lastResult
    monitor.innerHTML = lastResult
}