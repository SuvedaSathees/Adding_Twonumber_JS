
        var b1 = document.getElementById("num1");
        var b2 = document.getElementById("num2");
        var result = document.getElementById("res");
        function ch() {
            var bb1 = Number(b1.value);
            var bb2 = Number(b2.value);
            var total = bb1 + bb2;
            result.textContent = "Total: " + total;
        }
