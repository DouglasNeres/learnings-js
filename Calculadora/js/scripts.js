const previousOperation = document.querySelector("#previous-operation")
const currentOperation = document.querySelector("#current-operation")
const buttons = document.querySelectorAll("#buttons-container button")

class Calculator{
    constructor(previousOperation, currentOperation) {
        this.previousOperation = previousOperation
        this.currentOperation = currentOperation
        this.current = ""
    }

    addDigit(digit){

        if(digit === "." && this.currentOperation.innerText.includes(".")){
            return 
        }

        this.current = digit
        this.updateScreen()
    }

    processOperation(operation){
        let operationValue
        let previous = +this.previousOperation.innerText
        let current = +this.currentOperation.innerText
    }

    updateScreen(){
        this.currentOperation.innerText += this.current
    }

}

const calc = new Calculator(previousOperation, currentOperation)

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) =>{
        const value = e.target.innerText

        if (+value >= 0 || value === ".") {
            calc.addDigit(value)
        }

        else{
            calc.processOperation(value)
        }
    })

})