function show_models(){
    
    let string_blue = document.getElementsByClassName('drop-string');
    let string_green = document.getElementsByClassName('drop-string-green');

    let el = document.getElementsByClassName('dropdownModel');
    // console.log(el[0].style.display);
    if (el[0].style.display !== 'flex'){
        el[0].style.display = 'flex';
        string_blue[0].style.display =  'none';
        string_green[0].style.display =  'block';

    }else{
        el[0].style.display = 'none';
        string_blue[0].style.display =  'block';
        string_green[0].style.display =  'none';
    }
}

function get_model(e){
    let string_green = document.getElementsByClassName('drop-string-green');
    let mark = document.getElementById('mark');
    let hidden_mark = document.getElementById('hidden_mark');
    

    let res = document.getElementById('reset_model');
    let see_block = document.getElementsByClassName('dropdownModel');


    hidden_mark.value = e;
    res.style.display = 'inline-block';
    mark.textContent = e;
    mark.style.color = 'white';
    mark.style.font =  '1.1em Lato';
    string_green[0].style.display =  'none';
    see_block[0].style.display = 'none';
    console.log(hidden_mark.value);


}
function res_model(){
    let res = document.getElementById('reset_model');
    let string = document.getElementsByClassName('drop-string');
    let t = document.getElementById('mark');

    t.textContent = "";
    res.style.display = 'none';
    string[0].style.display = 'block';
    
}