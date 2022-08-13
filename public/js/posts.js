function open_categoris_service1(){
    var q = document.getElementsByClassName('dropdown-posts');
    var w = document.getElementsByClassName('green1');
    if(q[0].style.display !== 'block'){
        q[0].style.display = 'block';
        w[0].style.display = 'block';
        w[0].style.cursor = 'pointer';
     
    
    }else{
        q[0].style.display = 'none';
        w[0].style.display = 'none';
 }
    }
    