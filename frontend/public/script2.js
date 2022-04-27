// "const beerCardComponent" ezzel a functionnal rakjuk bele a htmlbe 
// ha beerCardComponent nem fuggveny lenne, hanem sima string, akkor nem lehetne beletenni valtozo ertekeket parameterkent
// const utan egyes szam egyes szemlyben mindig
// a fuggveny parameterinek (name, company, type) barmilyen szo megadhato csak azt kovetkezetesen kell hasznalni
// id-t akkor adunk ha egyedi, most nem kell mert 10db sor van
const beerCardComponent = function (name, company, type) {
    return `
        <div class="card">
            <div class="beerName">${name}</div>
            <div class="beerCompany">${company}</div>
            <div class="beerType">${type}</div>
        </div>
    `
} 
// ez egy terv hogy fog kinezni majd az oldal


//console.log(company);
//nem letezik igy nem tudja mi ez 

const beerTitleComponent = `
    <h1>Beers</h1>
`;


const loadEvent = function () {
    const rootElement = document.getElementById("root");
    
    console.log(rootElement);
    
    rootElement.insertAdjacentHTML("beforeend", beerTitleComponent);
    // az insertAdjacentHTML egy metodus, 2 stringet ker egy position stringet es egy olyan stringet amit html kodda tud alakitani
    // metodus vagy fuggveny ugyanaz (itt pedig argumentumok vannak ami string)
    
    console.log(beers.cards);

    console.log(beers.logo)
    // tomb === for ciklus hasznalat (vegig kell citeralni)
    // ha van adat forof ciklust hasznaljuk ha nincs adat akkor a sima for loop (i++)

    for (const beer of beers.cards) {
        console.log(beer);
        // ha ide company-t irunk beer helyett akkor kiscica vagy azt amit masodiknak irtunk fog megjelenni
        //console.log(beers.cards[0].title) -> ehelyett hoztuk letre a beer iteratort

        rootElement.insertAdjacentHTML("beforeend", beerCardComponent(beer.title, beer.sub, beer.text));


        //rootElement.insertAdjacentHTML("beforeend", beerCardComponent("kiskutya", "kiscica", "i love frontend"));
        // beerCardComponent "()" nelkul a fuggvenyt fogja megjeleniteni ha az adatokat akarom megjeleniteni akkor a fuggveny utan ez esetben beerCardComponent utan "()" zarojeleket kell tenni 
    }
    //ezzel a ciklussal vegig lepkedem egy tomb elemein ennek a tombnek az eleresi utvonala a beers nevu valtozo cards kulcsan levo tomb. es ezt a folyamaot elnevezem, ez az elnevezes az iterator. kesobb erre hivatkozom
    // object helyere a tomb nevet, az iterator-ra pedig olyan tetszoleges nevet ami szamunka megfelelo most "beer"
    // fontos hogy ugy hatarozzuk meg anevet mint a data.js-ben jelen esetben beers.js
    //adott beer title-ja ugy adjuk be 
}

window.addEventListener("load", loadEvent)

console.log(window)

// addEventListener = esemenyfigyelo
// a "load" az esemenyt hivja meg 

// feladat: ugyanilyen strukturaju feladatot kapunk tok uj repoban ugyanezt megcsinalni csak mozifilmmel 