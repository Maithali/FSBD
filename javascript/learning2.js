    // Conditions
    // Rating mini App
    let rating = 5;
    if (rating == 5) {
        console.log('5 Stars');
    }else if (rating ==4) {
        console.log('4 stars');
    }else if (rating == 3) {
        console.log('3 Stars');
    }else{
        console.log('i am else');
    }

    // Switch Case
    let user = 'Admin';

    switch (user) {
        case 'Admin':
            console.log('redirect him/Her to the Admin Page');
            break;
        case 'Mentor':
            console.log('Redirect him/her to Mentor page');
            break;
        default:
            console.log('Simple user');
            break;
    }

    // Ternary Opertor / Ternanry Condition
    // Condition ? True : Flase
    let userlogin = false;
    userlogin ? console.log('logout') : console.log('login');;