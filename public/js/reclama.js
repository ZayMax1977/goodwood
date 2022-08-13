function open_categoris_service(){
    var q = document.getElementsByClassName('dropdown');
    var w = document.getElementsByClassName('green');
    if(q[0].style.display !== 'block'){
        q[0].style.display = 'block';
        w[0].style.display = 'block';
        w[0].style.cursor = 'pointer';
     
    
    }else{
        q[0].style.display = 'none';
        w[0].style.display = 'none';
 }
    }
    