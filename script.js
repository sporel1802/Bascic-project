let input = document.querySelector("#inputbox");
let buttons = document.querySelectorAll("button");

let string = ""; // Stores the input expression
let arr = Array.from(buttons);

arr.forEach((button) => {
    button.addEventListener("click", (e) => {
        let buttonText = e.target.innerHTML;

        if (buttonText === "=") {
            try {
                string = eval(string); // Evaluate the mathematical expression
                input.value = string;
            } catch {
                input.value = "Error"; // Handle invalid expressions
                string = "";
            }
        } else if (buttonText === "Ac") { // All Clear button
            string = "";
            input.value = string;
        } else if (buttonText === "Del") { // Delete last character
            string = string.slice(0, -1);
            input.value = string;
        } else {
            string += buttonText;
            input.value = string;
        }
    });
});
