const previousOperation = document.querySelector("#previous-operation")
const currentOperation = document.querySelector("#current-operation")
const buttons = document.querySelectorAll("#buttons-container button")

class Calculator {
    constructor(previousOperation, currentOperation) {
        this.previousOperation = previousOperation
        this.currentOperation = currentOperation
        this.current = ""
    }

    addDigit(digit) {

        if (digit === "." && this.currentOperation.innerText.includes(".")) {
            return
        }

        this.current = digit
        this.updateScreen()
    }

    processOperation(operation) {
        if (this.currentOperation.innerText === "" && operation != "C") {
            if (this.previousOperation.innerText !== "") {
                this.changeOperation(operation)

            }
            return
        }

        let operationValue
        let previous = +this.previousOperation.innerText.split(" ")[0]
        let current = +this.currentOperation.innerText

        switch (operation) {
            case "+":
                operationValue = previous + current
                this.updateScreen(operationValue, operation, current, previous)
                break;
            case "-":
                operationValue = previous - current
                this.updateScreen(operationValue, operation, current, previous)
                break;
            case "/":
                operationValue = previous / current
                this.updateScreen(operationValue, operation, current, previous)
                break;
            case "*":
                operationValue = previous * current
                this.updateScreen(operationValue, operation, current, previous)
                break;
            case "DEL":
                this.processDelOperator()
                break;
            case "CE":
                this.processClearCurrentOperation()
                break;
            case "C":
                this.processClearOperation()
                break;
            case "=":
                this.processEqualOperator()
                break;

            default:
                break;
        }

    }

    updateScreen(operationValue = null, operation = null, current = null, previous = null) {

        console.log(operationValue, operation, current, previous)

        if (operationValue === null) {
            this.currentOperation.innerText += this.current
        } else {
            if (previous === 0) {
                operationValue = current
            }

            this.previousOperation.innerText = `${operationValue} ${operation}`
            this.currentOperation.innerText = ""
        }
    }

    changeOperation(operation) {
        const mathOperations = ["*", "/", "+", "-"]

        if (!mathOperations.includes(operation)) {
            return
        }
        this.previousOperation.innerText =
            this.previousOperation.innerText = this.previousOperation.innerText.slice(0, -1) + operation
    }

    processDelOperator() {
        this.currentOperation.innerText = this.currentOperation.innerText.slice(0, - 1)
    }

    processClearCurrentOperation() {
        this.currentOperation.innerText = ""
    }

    processClearOperation() {
        this.currentOperation.innerText = ""
        this.previousOperation.innerText = ""
    }

    processEqualOperator(){
        const operation = previousOperation.innerText.split(" ")[1]
        this.processOperation(operation)
    }

}

const calc = new Calculator(previousOperation, currentOperation)

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText

        if (+value >= 0 || value === ".") {
            calc.addDigit(value)
        }

        else {
            calc.processOperation(value)
        }
    })

})