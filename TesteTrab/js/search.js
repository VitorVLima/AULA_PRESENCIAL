const bottomSearch = document.getElementById('btnSearch');
const divInvisible = document.getElementById('bottomSearch')
const invisibleBar = document.getElementById('form')
bottomSearch.addEventListener('click', function(){
    if(bottomSearch.classList.contains('invisible')){
        bottomSearch.classList.remove('invisible');
        bottomSearch.classList.add('search');
        invisibleBar.style.display = 'flex'
    }else{
        bottomSearch.classList.remove('search');
        bottomSearch.classList.add('invisible');
        invisibleBar.style.display = 'none'
    }

})