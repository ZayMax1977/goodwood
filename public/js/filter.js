

function filter_category(e){
   
    // var tr = document.getElementsByClassName('hidden-for-transport');
    var ma = document.getElementsByClassName('hidden-main');
    var wo = document.getElementsByClassName('hidden-for-work');
    // var re = document.getElementsByClassName('hidden-for-realty');
    var subtr = document.getElementsByClassName('subhidden-for-transport');
    var subel = document.getElementsByClassName('subhidden-for-electronic');
    var subre = document.getElementsByClassName('subhidden-for-realty');
    var subec = document.getElementsByClassName('subhidden-for-economy');
    var subho = document.getElementsByClassName('subhidden-for-hobby');
    var subjo = document.getElementsByClassName('subhidden-for-job');
    var close_filter = document.getElementsByClassName('close-open-filter');
    var border = document.getElementsByClassName('do-hidden-filter');
    border[0].style.border = '1px solid white' ;
    

        switch(e) {
          case 'all':   
          ma[0].style.display = 'none';
          wo[0].style.display = 'none';
          subtr[0].style.display = 'none';
          subel[0].style.display = 'none';
          subre[0].style.display = 'none';
          subec[0].style.display = 'none';
          subho[0].style.display = 'none';
          subjo[0].style.display = 'none';
          close_filter[0].style.display = 'none';
          border[0].style.border = 0;

        break;
        case 'transport':

            ma[0].style.display = 'flex';
            wo[0].style.display = 'none';
            subtr[0].style.display = 'grid';
            subel[0].style.display = 'none';
            subre[0].style.display = 'none';
            subec[0].style.display = 'none';
            subho[0].style.display = 'none';
            subjo[0].style.display = 'none';
            close_filter[0].style.display = 'block';

          break;
      
        case 'electronic':
            ma[0].style.display = 'flex';
            wo[0].style.display = 'none';
            subtr[0].style.display = 'none';
            subel[0].style.display = 'grid';
            subre[0].style.display = 'none';
            subec[0].style.display = 'none';
            subho[0].style.display = 'none';
            subjo[0].style.display = 'none';



          break;
        case 'economy':
            ma[0].style.display = 'flex';
            wo[0].style.display = 'none';
            subtr[0].style.display = 'none';
            subel[0].style.display = 'none';
            subre[0].style.display = 'none';
            subec[0].style.display = 'grid';
            subho[0].style.display = 'none';
            subjo[0].style.display = 'none';



          break;
        case'hobby':
            ma[0].style.display = 'flex';
            wo[0].style.display = 'none';
            subtr[0].style.display = 'none';
            subel[0].style.display = 'none';
            subre[0].style.display = 'none';
            subec[0].style.display = 'none';
            subho[0].style.display = 'grid';
            subjo[0].style.display = 'none';


          break;
        case 'realty':
            ma[0].style.display = 'flex';
            wo[0].style.display = 'none';
            subtr[0].style.display = 'none';
            subel[0].style.display = 'none';
            subre[0].style.display = 'grid';
            subec[0].style.display = 'none';
            subho[0].style.display = 'none';
            subjo[0].style.display = 'none';



        break;
        case 'job':
            ma[0].style.display = 'none';
            wo[0].style.display = 'flex';
            subtr[0].style.display = 'none';
            subel[0].style.display = 'none';
            subre[0].style.display = 'none';
            subec[0].style.display = 'none';
            subho[0].style.display = 'none';
            subjo[0].style.display = 'grid';

       
          break;
        
      }
}

// function do_filter_on_advsPage(id){
//   var form =  document.getElementsByName('formochka');
//   var w = document.getElementById(id).textContent;
//   // console.log(w);
//   var q = document.getElementById('hidden-input');
//   q.value = w;
//   // console.log(q.value);

  
//   form[0].submit();
  
// }