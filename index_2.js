const Logger = require('./logger');
const fs = require('fs');
const path = require('path');
let monJournal = new Logger();

function toto(data) {
    console.log('avertissement:', data);
    // il faut completer ici pour que cela fonctionne...
    // fs.appendFile(
    //     path.join(...),
    //     `avertissement: { \n  id: ${data.id}, temps: ${data.temps}  },`,
    //     err => {
    //         if (err) throw err;
    //     }
    // );
}
monJournal.on('avertissement', (data) => toto(data));
monJournal.on('information', (data) => console.log('information:', data));
monJournal.on('erreur', (data) => console.log('monJournal erreur:', data));

monJournal.log('Salut');
monJournal.error('voici l\'erreur');
monJournal.log('2e message');
monJournal.log('kekchose');
monJournal.info('truc machin....');