/*Vymyslete, jak použít funkci Math.random a různé zaokrouhlovací funkce probírané v této lekci k simulování hodu klasickou šestistěnnou kostkou. 
S použitím vhodných funkcí sestavte výraz, který vygeneruje náhodné celé číslo mezi 1 a 6.
Zamyslete se nad tím, zda vámi vytvořený výraz generuje všechna čísla skutečně se stejnou pravděpodobností. 
Vemte v úvahu, že funkce Math.random generuje náhodná čísla mezi 0 (včetně) a 1 (vyjma). Je tedy malinká pravěpodobnost, že občas padne přesně číslo 0. 
Naopak číslo 1 padnout nemůže.*/

document.body.innerHTML = "<h1>Lekce 2</h1>"
document.body.innerHTML = "<h2>Hazeni kostkou</h2>"

let cislo = Math.floor(Math.random() * 6) + 1
document.body.innerHTML = cislo

