var mainDisplay = function(elementId) {
       
    var operator = null;
    var result = null;
    var number1 = "";
    var number2 = "";

    var div = document.getElementById(elementId);
    div.style.display = "block";
    var inputBox = document.createElement("input");
    inputBox.type = "text";
    inputBox.id = "display-box";
    div.append(inputBox);
    var br = document.createElement("br");

    div.append(br);

    for(var i=9;i>=0;i--)
    {    
        if(i%3 == 0)
            div.append(document.createElement("br"));
        var button = document.createElement("button");
        button.innerText=i;
        button.onclick = Calculator;
        div.append(button);

    }

    var decimalButton = document.createElement("button");
    decimalButton.innerText = ".";
    decimalButton.onclick = Calculator;
    div.append(decimalButton);

    var eqButton = document.createElement("button");
    eqButton.innerText = "=";
    eqButton.onclick = Calculator;
    div.append(eqButton);

    var resetButton = document.createElement("button");
    resetButton.onclick = Calculator;
    resetButton.innerText = "C";
    div.append(resetButton);

    div.append(document.createElement("br"));

    var addButton = document.createElement("button");
    addButton.innerText = "+";
    addButton.onclick = Calculator;
    div.append(addButton);

    var subButton = document.createElement("button");
    subButton.innerText = "-";
    subButton.onclick = Calculator;
    div.append(subButton);

    var mulButton = document.createElement("button");
    mulButton.innerText = "*";
    mulButton.onclick = Calculator;
    div.append(mulButton);

    var divButton = document.createElement("button");
    divButton.innerText = "/";
    divButton.onclick = Calculator;
    div.append(divButton);

    function Calculator(event){

        var inputValue = event.target.innerText;
        console.log(inputValue);

        if(inputValue.match(/[0-9]/))
        {
            if(operator == null)
            {
                number1 += inputValue;
                inputBox.value = number1;
            }
            else{
                number2 += inputValue;
                inputBox.value = number2;
            }
        }
        else if(inputValue == ".")
            {
                if(operator == null)
                {
                    if(number1.includes("."))
                    {}
                    else{
                        number1 += inputValue;
                        inputBox.value = number1;
                    }                   
                }
                else{
                    if(number2.includes("."))
                    {}
                    else{
                        number2 += inputValue;
                        inputBox.value = number2;
                    }
                }
            }
        else if (inputValue == "+" || inputValue == "-" || inputValue == "*" || inputValue == "/")
            {
                operator="";
                operator = inputValue;
                inputBox.value = operator;
            }
        else if(inputValue == "=")
        {
            var num1 = parseFloat(number1);
            var num2 = parseFloat(number2);

            result = eval(num1 + operator + num2);
                
            inputBox.value = result;
        }
        else if(inputValue == "C")
        {
            inputBox.value = "";
            number1 = "";
            number2 = "";
            operator = "";
        }
    }       
            
}

