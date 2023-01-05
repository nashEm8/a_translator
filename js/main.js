const selects = document.querySelectorAll('select');
const textAreaFrom = document.querySelector('#textAreaFrom');
const textAreaTo = document.querySelector('#textAreaTo');
const btnTranslate = document.querySelector('#btnTranslate');
const btnDelete = document.querySelector('#btnDelete');

const contries = {
    'en-GB' : 'Inglês',
    'es-Es' : 'Espanhol',
    'it-It' : 'Italiano',
    'ja-JP' : 'Japão',
    'pt-BR' : 'Português'
};

selects.forEach((tag) => {
    for(let country in contries){
        let selected;
        tag.className.includes('selectFrom') && country === 'pt-BR' ? selected = 'selected' : '';
        tag.className.includes('selectTo') && country === 'en-GB' ? selected = 'selected' : '';
        
        const option = `<option value="${country}" ${selected}>${contries[country]}</option>`
        tag.insertAdjacentHTML('beforeend', option)   
    }
});




btnTranslate.addEventListener('click', () => {
    textAreaFrom.value ? translation() : alert('Digite o texto ou palavra que deseja traduzir!');
});

btnDelete.addEventListener('click', () => {
    if(!(textAreaFrom.value === '') && !(textAreaTo.value === '')){
        textAreaFrom.value = '';
        textAreaTo.value = '';
    } else if((textAreaFrom.value === '') && (textAreaTo.value === '')){
        alert('Não há nenhum dado inserido para ser apagado!')
    }
});

const translation = () => {
const baseUrl = `https://api.mymemory.translated.net/get?q=`;
const url = `${baseUrl}${textAreaFrom.value}&langpair=${selects[0].value}|${selects[1].value}`;

    const diceTranslator = async () => await fetch(url).then(response => response.json());

    const showTranslation = async () => {
        const showResponse = await diceTranslator();
        textAreaTo.textContent = showResponse.responseData.translatedText;
    }   

    showTranslation()
}