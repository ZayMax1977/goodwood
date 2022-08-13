


function category(e){
    var el1 = document.getElementsByClassName('second-line');
    var el2 = document.getElementsByClassName('second-line-for-job');

    var car_subcategory = document.getElementsByClassName('car-subcategory');
    var electronic_subcategory = document.getElementsByClassName('electronic-subcategory');
    var realty_subcategory = document.getElementsByClassName('realty-subcategory');
    var economy_subcategory = document.getElementsByClassName("economy-subcategory");
    var hobby_subcategory = document.getElementsByClassName("hobby-subcategory");
    var job_subcategory = document.getElementsByClassName("job-subcategory");
    let discribe = document.getElementsByClassName("discribe-for-car");
    let flat = document.getElementsByClassName("for-flat");

    

    
    switch (e) {
        case 'transport':
            car_subcategory[0].hidden = false;
            electronic_subcategory[0].hidden = true;
            realty_subcategory[0].hidden = true;
            economy_subcategory[0].hidden = true;
            hobby_subcategory[0].hidden = true;
            job_subcategory[0].hidden = true;
            el2[0].style.display = 'none';
            el1[0].style.display = 'grid';
            discribe[0].style.display = 'grid';
            flat[0].style.display = 'none';

             break;
        case "electronic":
            car_subcategory[0].hidden = true;
            electronic_subcategory[0].hidden = false;
            realty_subcategory[0].hidden = true;
            economy_subcategory[0].hidden = true;
            hobby_subcategory[0].hidden = true;
            job_subcategory[0].hidden = true;
            el2[0].style.display = 'none';
            el1[0].style.display = 'grid';
            discribe[0].style.display = 'none';
            flat[0].style.display = 'none';

            break;
        case 'realty':
            car_subcategory[0].hidden = true;
            electronic_subcategory[0].hidden = true;
            realty_subcategory[0].hidden = false;
            economy_subcategory[0].hidden = true;
            hobby_subcategory[0].hidden = true;
            job_subcategory[0].hidden = true;
            el2[0].style.display = 'none';
            el1[0].style.display = 'grid';
            discribe[0].style.display = 'none';
            flat[0].style.display = 'grid';

            break;
        case 'economy':
            car_subcategory[0].hidden = true;
            electronic_subcategory[0].hidden = true;
            realty_subcategory[0].hidden =true ;
            economy_subcategory[0].hidden = false;
            hobby_subcategory[0].hidden = true;
            job_subcategory[0].hidden = true;
            el2[0].style.display = 'none';
            el1[0].style.display = 'grid';
            discribe[0].style.display = 'none';
            flat[0].style.display = 'none';

            break;
        case 'hobby':
            car_subcategory[0].hidden = true;
            electronic_subcategory[0].hidden = true;
            realty_subcategory[0].hidden =true ;
            economy_subcategory[0].hidden = true;
            hobby_subcategory[0].hidden = false;
            job_subcategory[0].hidden = true;
            el2[0].style.display = 'none';
            el1[0].style.display = 'grid';
            discribe[0].style.display = 'none';
            flat[0].style.display = 'none';

            break;
        case 'job':
            car_subcategory[0].hidden = true;
            electronic_subcategory[0].hidden = true;
            realty_subcategory[0].hidden =true ;
            economy_subcategory[0].hidden = true;
            hobby_subcategory[0].hidden = true;
            job_subcategory[0].hidden = false;
            el1[0].style.display = 'none';
            el2[0].style.display = 'grid';
            discribe[0].style.display = 'none';
            flat[0].style.display = 'none';

            break;
        

      }
}

// function show_for(e){
//     // console.log('123');
//     let flat = document.getElementsByClassName('for-flat');

//     switch (e){
//         case  "Квартиры":
//             flat[0].style.display = 'grid';
//     }
// }
