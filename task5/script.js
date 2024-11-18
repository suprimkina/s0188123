function price()
{
    let product = document.getElementById("product").value;
    let n = document.getElementById("number").value;
    if (!Number.isNaN(n) && parseFloat(parseInt(n)) == parseFloat(n) && n > 0)
    {
        let cena = n * product;
        cena = cena.toFixed(2);
        document.getElementById("stoimost").textContent = cena + " руб.";
    }
    else
    {
        document.getElementById("stoimost").textContent = "Ошибка";
    }
}
