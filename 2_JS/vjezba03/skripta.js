// Operatori

// aritmetički operator
// + - * /
const a=2, b=3; // u jednom redu deklarirao dvije varijable. Ovdje simuliram da je korisnik unio 2 i 3 (ulaz)
let rez; // undefined
rez = a + b; // algoritam
console.log(rez); // izlaz

// modulo operator (%)
// ostatak nakon cjelobrojnog djeljenja
// najjednostavniji primjer korištenja modulo operatora je parnost broja
console.log (9 % 2); // 1
console.log (8 % 2); // 0

// operatori dodjele 
// = je operator dodjelivanja. Desna strana se dodjeljuje lijevoj
rez = rez + 2; // na desnoj strani rez ima vrijednost 5 i doda mu se 2 pa se 7 dodijeli varijabli s lijeve strane koja je opet rez
console.log(rez); // 7

// +=
rez += 2;
console.log(rez); // 9

const x = 2;
rez -= x;
console.log(rez); // 7

rez *= x; 
console.log(rez); //14

rez /= x;
console.log(rez); // 7

// uvećanje za 1
rez = rez + 1; // 8
rez +=1; // 9
rez ++; // 10 -> Ovako napisati u redu NIJE DOBRO

// increment (++) i decrement (--)
// imaju dvojaku ulogu: korištenje i uvećavanje/umanjivanje

// koristiti pa uvećati
console.log(rez++); // ispiše 10 i uveća na 11
console.log (rez); // 11¸

// uvećati pa koristiti
console.log(++rez); // 12 

// koristiti pa umanjiti 
console.log(rez--); // 12

// umanjiti pa koristiti
console.log(--rez); // 10

// znalo biti na razgovorima za posao

let i = 2; j = 1;
i = j++ - i;
j += --i - ++j;
console.log(i-j); //1

// operatori uspoređivanja
// == jednako po vrijednosti
// === jednako po vrijednosti i tipu
console.log(5 == 5); // true
console.log('5' == 5); // true
console.log (3 == 7); // false

console.log('Osijek' === 'osijek'); // false
console.log (5 === '5+'); // false

// različito !=
console.log(3 !=5); // true

// <, >, <=, >=
let godine = 18;
console.log(godine > 18); // false
console.log(godine >= 18); // true


// dva izraza koja mogu biti true ili false
// logički operatori
// boolovi operatori koji su : AND, OR I NOT (I, ILI I NE)
console.log(godine >= 18); // true
console.log(godine >= 21); // false
// punoljetan u svim državama
// logički AND (I) && -> u JS se ne smije koristiti &
const i1 = godine >= 18; // true
const i2 = godine >= 21; // false
console.log(godine >= 18 && godine >= 21); // false

// logički OR (ILI) || ALTGR + W - u js se ne smije koristiti |
console.log(i1 || i2); // true



console.log(!i1); // false

// ternarni operator ( ? : )
godine = 16;
console.log(godine >= 18 ? 'Punoljetan' : 'Maloljetan');


// operator spajanja (nadoljepljivanja) - konkatenacija 
const skola ='Edunova';
console.log('Najbolja škola je ' + skola); // OVO SE NE PREPORUČA
console.log(`Najbolja škola je  ${skola}`)
const razred = 4;
console.log ('Idem u ' + razred + '. razred');
console.log(`Idem u ${razred}. razred`)


// spread operator - operator proširivanja (...)
// na nizu
const niz = [2,2,1,1]; // varijablu nijz ne smijem  mjenjati
console.log(niz);
const noviNiz =[0, ...niz, 3];
console.log(noviNiz);

// na objektu
const osoba={
    ime: 'Pero',
    prezime: 'Perić'
};

console.table(osoba);

const polaznik ={
    ...osoba,
    edukacija: 'Frontend developer'
}

console.table (polaznik);

// suprotno od spread operatora je postupak koji se zove destrukcija

// niz
const [prvi, drugi] = [1, 2]; 
console.log (prvi);
console.log (drugi);

// objekt
const {prezime, ...objektBezPrezimena} = polaznik; // razbij ga na dvije varijable. 1. je prezime, 2. je objektBezPrezimena koji ima sva svojstva od polazika (desna strana) osim prezimena
console.table(objektBezPrezimena)
// škart ili nusproizvod
console.log(prezime)

// nullish coalescing operator (??)
// ako je vrijednost varijable null koristi nešto drugo
let sifra=null;
console.log(sifra ?? 'Šifra nije definirana')

// malo kompleksniji JSON
const korisnik ={
    adresa: {
        grad: 'Osijek',
        ulica: 'Jagerova',
    }
};

console.table(korisnik);
console.log(korisnik.adresa.grad); // Osijek
console.log('Ulica' + korisnik.adresa.ulica.toUpperCase()); //  Jagerova
// ?. mi pomaže da ne dobijem grešku
console.log(korisnik?.adresa?.ulica?.toUpperCase())


// dva pšosebna operatora u JS: typeof i instanceof
const n = [2, 3];
console.log(typeof n); // object 
console.log(n instanceof Array); // true


// in operator: provjerava u objektu postoji li svojstvo
console.log ('prezime' in osoba); // true
console.log('prezime' in objektBezPrezimena); // false 


// 0101 binarno je broj 5
// 0011 binarno je broj 3
// 0111 binarno 7
const binarno 5 | 3; // ovo nije logički ILI već je bitwise binarni operator kao što postoji i & 
console.log(binarno);

console.log(5 & 3);
