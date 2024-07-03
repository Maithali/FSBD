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
    userlogin ? console.log('logout') : console.log('login');

    //Array
    let name1 = ['Maithali','Sanjeevan','Navin','Anurag','Hitesh','Patrick','Hyder'];
    console.log(name1);
    console.log(name1[6]);
    console.log(name1[4]);

    //Object

    let bankaccount = {
        firstName:'Maithali',
        LastName:'Gharde',
        mobileno: 8546789231,
        balance: 1009000000,
    };
    console.log(bankaccount);
    console.log(bankaccount.balance);
    console.log(bankaccount.firstName);

    // Date 
    const now = new Date();
    console.log(now.toString());
    console.log(now.getFullYear());
    console.log(now.getDay());
    console.log(now.getDate());
    console.log(now.getHours());
    console.log(now.getMilliseconds());
    console.log(now.getTimezoneOffset());
    console.log(now.getMonth());
    console.log(now.getSeconds());