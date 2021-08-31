const Logger = require('./logger');
let monJournal = new Logger();

monJournal.on('message', (data) => console.log('monJournal appelle avec:', data));
monJournal.on('erreur', (data) => console.log('monJournal erreur:', data));

monJournal.log('Salut');
monJournal.error('voici l\'erreur');
monJournal.log('2e message');
monJournal.log('kekchose');