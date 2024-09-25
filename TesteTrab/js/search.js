const bottomSearch = document.getElementById('btnSearch');
const invisibleDiv = document.getElementById('bottomSearch')
const invisibleBar = document.getElementById('form')

function closeSearch(){
    if(invisibleDiv.classList.contains('search')){
        invisibleDiv.classList.remove('search');
        invisibleDiv.classList.add('invisible');
        invisibleBar.style.display = 'none'
        bottomSearch.classList.remove('fa-xmark');
        bottomSearch.classList.add('fa-magnifying-glass');
    }

}
bottomSearch.addEventListener('click', function(){
    if(invisibleDiv.classList.contains('invisible')){
        invisibleDiv.classList.remove('invisible');
        invisibleDiv.classList.add('search');
        invisibleBar.style.display = 'flex'
    }else{
        closeSearch();
    }


    if (bottomSearch.classList.contains('fa-magnifying-glass')) {
        bottomSearch.classList.remove('fa-magnifying-glass');
        bottomSearch.classList.add('fa-xmark');
    } else {
        bottomSearch.classList.remove('fa-xmark');
        bottomSearch.classList.add('fa-magnifying-glass');
    }

})

document.addEventListener('click', function(event) {
    const isClickInside = invisibleDiv.contains(event.target);
    if(!isClickInside){
        closeSearch();
    }
})