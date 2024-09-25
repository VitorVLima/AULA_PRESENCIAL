const searchImput = document.getElementById('search');

searchImput.addEventListener('input', (event) => {
    const value = formatString(event.target.value);
    const items = document.querySelectorAll('.items .item');
    let hasResults = false;
    if(value != ''){
        items.forEach(item => {
        const itemTitle = item.querySelector('.item-title').textContent;
        if(formatString(itemTitle).indexOf(value) !==-1){
            item.style.display = 'flex';  
            hasResults = true;  
        }else{
            item.style.display = 'none';
        }
    })
    if(hasResults){
        document.getElementById('no-results').style.display = 'none';
    }else{
        document.getElementById('no-results').style.display = 'block';
    }
    }else{
        items.forEach(item => item.style.display = 'none');
        noResults.style.display = 'none '
    }
});


function formatString(value){
    return value.toLowerCase().trim().normalize('NFD').replace(/[\u0300-\u036f]/g, ''); 
    //retorna tudo em letra minuscula
    //elimina os espacos caso seja digitado no inicio e fim do input
}