const fs = require('fs');
const path = require('path');

// fs.mkdirSync(path.join(__dirname, 'test'), {});              //commande fait attendre les utilisateurs sur le serveur web
// console.log('Dossier test cree');

// fs.mkdir(path.join(__dirname, 'test2'), {}, err => {          //commande asynchrone         et arrow function
//     if (err) throw err;
//     console.log('Dossier test2 cree avec succes!!');
// }); 
// fs.writeFile(
//     path.join(__dirname, 'test', 'salut.txt'),
//     'Salut tout le monde!!!!!',
//     err => {
//         if (err) throw err;
//         console.log('Fichier salut.txt cree');
//     }
// ); 
fs.appendFile(
    path.join(__dirname, 'test', 'salut.txt'),
    'et pourquoi pas, encore plussssssssssssssss de texte ajoute\n',
    err => {
        if (err) throw err;
        console.log('Fichier salut.txt cree');
    }
);  
console.log('fin du programme');
