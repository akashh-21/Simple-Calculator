const bnts = document.querySelectorAll(".num");
const answer = document.querySelector(".answer");
console.log(bnts);

let currentInput = "";


bnts.forEach((button)=>{
    button.addEventListener("click",()=>{
        const value = button.innerText;
        if(value==="C"){
            answer.innerText = "";
            currentInput = "";

        }
        else if(value==="="){
            try {
                let result = eval(currentInput);
                answer.innerText = currentInput + value + result;
                // answer.style.textAlign = "center";
            } catch (error) {
                answer.innerText = "Error";
                currentInput = "";
            }
        }
        else if(value=="⌫"){
            currentInput = currentInput.slice(0,-1);
            answer.innerText = currentInput;
        }
        else{
            // Add number or operator
            currentInput += value;
            answer.innerText = currentInput;
        }
    });
    
});