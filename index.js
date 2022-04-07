/* 1. Generuoti atsitiktinius skaičius nuo 1 iki 10 tol, kol skaičių suma bus mažesnė už 100.*/
let sum = 1;
while (sum < 90) {
    sum += Math.round(Math.random()*(10-1+1)+1);
} 
console.log(sum);

/* 2. Generuoti atsitiktinius skaičius nuo 1 iki 10 tol, kol sugeneruotų skaičių suma bus dali iš 7. */
let sumTwo = 1;
while (sumTwo % 7) {
    sumTwo += Math.round(Math.random()*(10-1+1)+1);
} 
console.log(sumTwo);

/* 3. Tadas mėgsta skaityti knygas, per kelias dienas d Tadas perskaitys visą knygą ir kelis skyrius s 
vidutiniškai per dieną perskaito Tadas. Paskutinei dienai gali likti mažiau skyrių. */
const skyriu = 8; let dienu = 0; let counSkyriu = skyriu;
while ( counSkyriu >= 0){ 
    dienu ++;
    counSkyriu = counSkyriu - dienu;
} console.log(`dienu: ${dienu}, vidutiniskai per diena ${Math.round(skyriu *10 / dienu * 10) / 100}`);

/* 4. Naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 
(vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5. */
let skaiciai = 0; let paskutinis = 0; 
while(skaiciai !== 5){
    paskutinis = (Math.round(Math.random() * 10));
    ++ skaiciai;
    if (skaiciai === 5) {
        paskutinis = 5;
    } 
    console.log(paskutinis + ' - paskutinis 5');
} 

/* 5.*/
let s = 0; let pask = 0; counter = 0;
while(s !== 5){
    pask = (Math.round(Math.random() * 10));
    ++ s;
    ++ counter;
    if (s === 5) {
        while (!(pask === 5 || pask === 7)) {
            pask = (Math.round(Math.random() * (7-5))+5);
            ++counter;
        }
    } 
    console.log(`ciklu:${counter}, gale ${pask}`);
} 