console.log(beers)

const beerSectionComponent = function (inner, beers) {

    return `
        <section ${beers}>${inner}</section>`

}

const beerCardComponent = function (title, sub, text) {

    return `
        <div class="card">
            <p class=${title}>${title}</p>
            <p class=${sub}>${sub}</p>
            <p class=${text}>${text}</p>
        </div>
    `

}

const loadEvent = function () {

    const rootElement = document.getElementById("root");

    let sectionInner = "";

    for (let index = 1; index < cards.length; index++) {
        
        sectionInner += beerCardComponent(title, sub, text)
    }

    rootElement.insertAdjacentHTML("beforeend", beerSectionComponent(sectionInner,)) 
}

