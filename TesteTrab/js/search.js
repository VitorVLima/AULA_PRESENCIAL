const bottomSearch = document.getElementById('btnSearch');
const invisibleDiv = document.getElementById('bottomSearch')
const invisibleBar = document.getElementById('form')
bottomSearch.addEventListener('click', function(){
    if(invisibleDiv.classList.contains('invisible')){
        invisibleDiv.classList.remove('invisible');
        invisibleDiv.classList.add('search');
        invisibleBar.style.display = 'flex'
    }else{
        invisibleDiv.classList.remove('search');
        invisibleDiv.classList.add('invisible');
        invisibleBar.style.display = 'none'
    }


    if (bottomSearch.classList.contains('fa-magnifying-glass')) {
        bottomSearch.classList.remove('fa-magnifying-glass');
        bottomSearch.classList.add('fa-xmark');
    } else {
        bottomSearch.classList.remove('fa-xmark');
        bottomSearch.classList.add('fa-magnifying-glass');
    }

})