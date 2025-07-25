
        document.addEventListener("keydown", (e) => {
            if (e.key == "Enter") {
                myFunction();
                document.getElementById("input1").value = "";
                document.getElementById("input2").value = "";
                document.getElementById("input3").value = "";
            }
        })
  function myFunction() {
            let a = document.getElementById("input1").value;
            let b = document.getElementById("input2").value;
            let c = document.getElementById("input3").value;
            let result;
            let com1 = String(a) + String(b) + String(c);
            let com2 = String(a) + String(c) + String(b);
            let com3 = String(b) + String(a) + String(c);
            let com4 = String(b) + String(c) + String(a);
            let com5 = String(c) + String(a) + String(b);
            let com6 = String(c) + String(b) + String(a);

            if (a == b == c) {
                result = `All Inputs ${a}, ${b} and ${c} are equal so their is only One combination: <br> ${com1}`

            }
            else if (a == b) {
                result = `Your Entered ${a}, ${b} , ${c} and There is Three Possible combination are: <br> 1. ${com1} B.${com2} C. ${com6}`
            }
            else if (b == c) {
                result = `Your Entered ${a}, ${b} , ${c} and There is Three Possible combination are: <br> 1. ${com1} B.${com3} C. ${com4}`
            }
            else if (a == c) {
                result = `Your Entered ${a}, ${b} , ${c} and There is Three Possible combination are: <br> A. ${com1} B.${com3} C. ${com5}`
            }
            else {
                result = `Your Entered ${a}, ${b} , ${c} and All Digits are Different. So Sir Possible combination are: <br>  A. ${com1}  B.${com2} C. ${com3}  D. ${com4}  E. ${com5}  F. ${com6} <br>`
            }
            document.getElementById("output").style.display = "flex";
            document.getElementById('output').innerHTML = result;
            document.getElementById("input1").value = "";
            document.getElementById("input2").value = "";
            document.getElementById("input3").value = "";
        }
