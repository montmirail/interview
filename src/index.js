import validator from './validator';

let Validator = validator();

Validator.isEmail("not an email ")
    .then( res => {
        console.log(res);
    }).catch( err => {
        console.log(err);
});

Validator.isEmail("contact@nucleos.ch")
    .then( res => {
        console.log(res);
    }).catch( err => {
        console.log(err);
});

Validator.regExp();