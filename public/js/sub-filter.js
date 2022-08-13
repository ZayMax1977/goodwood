function hidden_block_subfilter(){
    var el = document.getElementsByClassName('do-hidden-filter');
    var el1 = document.getElementsByClassName('close-filter');
    
    // var arr = el[0].children
    // var arr = Array.from(el);
    // console.log(arr);      
    if (el[0].style.display !== 'none') {
        el[0].style.display = 'none';
        el1[0].textContent = 'Раскрыть';
    
    }else{
        el[0].style.display = 'block';
        el1[0].textContent = 'Скрыть';
    }
}
