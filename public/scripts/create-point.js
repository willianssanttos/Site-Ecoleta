
function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json() )
    .then( states => {

        for( const state of states ) {
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
    } )
}


populateUFs()

function getCities(event) {
    const citySelect = document.querySelector("[name=city]")
    const stateInput = document.querySelector("[name=state]")

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
 
    citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
    citySelect.disabled = true

    fetch(url)
    .then( res => res.json() )
    .then( cities => {
        for( const city of cities ) {
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }

        citySelect.disabled = false
    } )
}


document.querySelector("select[name=uf]")
        .addEventListener("change", getCities)


//Itens de coleta
//pegar todos os li´s
const itensToCollect = document.querySelectorAll(".itens-grid li")

for (const item of itensToCollect) {
    item.addEventListener("click", handleSelectedItem)
}

const collectedItens = document.querySelector("input[name=itens]")

let selectedItens = []

function handleSelectedItem(event) {
    const itemLi = event.target

    // adicionar ou remover uma classe com javascript
    itemLi.classList.toggle("selected")

    const itemId = event.target.dataset.id


    //verificar se existem itens selecinados, se sim 
    //pegar os itens selecionados

    const alreadySelected = selectedItens.findIndex(item => {
        const itemFound = item == itemId //isso será true ou false
        return itemFound
    })

    //se ja estiver selecionado, adicionar á seleção 
    if( alreadySelected >= 0) {
        // tirar da seleção
        const filteredItens = selectedItens.filter(item => {
            const itemIsDifferent = item != itemId 
            return itemIsDifferent
        })

        selectedItens = filteredItens
    } else {
        //se não estiver selecionado
        //adicionar à seleção
        selectedItens.push(itemId)
    }
    
    //atualizar o campo escondido com os itens selecionados 
    collectedItens.value = selectedItens
    
}