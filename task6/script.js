function calculateTotalPrice() {
    let quantity = parseInt(document.getElementById("quantity").value);
    let selectedService = document.querySelector('input[name="service"]:checked').value;
    let totalPrice = 0;
    if (quantity>-1)
    {
        if (selectedService === "service1") {
            totalPrice = quantity * 5000;
        } else if (selectedService === "service2") {
            let selectedOption = document.getElementById("option").value;
            if (selectedOption === "option1") {
                totalPrice = quantity * 6000;
            } else if (selectedOption === "option2") {
                totalPrice = quantity * 2000;
            }
        } else if (selectedService === "service3") {
            let propertyCheckbox = document.getElementById("property");
            if (propertyCheckbox.checked) {
                totalPrice = quantity * 8000;
            } else {
                totalPrice = quantity*3000;
            }
    }

        document.getElementById("totalPrice").textContent = "Итоговая стоимость: " + totalPrice + " руб.";
    }
    else
        document.getElementById("totalPrice").textContent = "Невозможен рассчет товара ";
        
}

document.getElementById("quantity").addEventListener("input", calculateTotalPrice);
document.querySelectorAll('input[name="service"]').forEach(function (radio) {
    radio.addEventListener("change", function () {
        let optionSelect = document.getElementById("option");
        let propertyCheckbox = document.getElementById("property");

        if (radio.value === "service1") {
            optionSelect.style.display = "none";
            propertyCheckbox.style.display = "none";
        } else if (radio.value === "service2") {
            optionSelect.style.display = "inline-block";
            propertyCheckbox.style.display = "none";
        } else if (radio.value === "service3") {
            optionSelect.style.display = "none";
            propertyCheckbox.style.display = "inline-block";
        }

        calculateTotalPrice();
    });
});

document.getElementById("option").addEventListener("change", calculateTotalPrice);
document.getElementById("property").addEventListener("change", calculateTotalPrice);
