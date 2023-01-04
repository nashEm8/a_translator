const textAreaFrom = document.querySelector('#textAreaFrom');
const textAreaTo = document.querySelector('#textAreaTo');
const btnTranslate = document.querySelector('#btnTranslate');
const selects = document.querySelectorAll('select');

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
        if(tag.className.includes('selectFrom') && country === 'pt-BR'){
            selected = 'selected';
        } else if(tag.className.includes('selectTo') && country === 'en-GB'){
            selected = 'selected';
        }

        const option = `<option value="${country}" ${selected}>${contries[country]}</option>`
        
        tag.insertAdjacentHTML('beforeend', option)   
    }
});
