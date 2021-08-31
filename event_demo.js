const EventEmitter = require('events');
class MaClasseEmeteur extends EventEmitter{  }

const emeteur = new MaClasseEmeteur();
// enregistrement du gestionnaire d'evenements
emeteur.on('evenement', () => console.log('evenement est allume'));
emeteur.on('autre', () => console.log('autre chose'));

// initier quelques evenements...
emeteur.emit('evenement');
emeteur.emit('autre');
emeteur.emit('autre');
emeteur.emit('autre');
emeteur.emit('evenement');
emeteur.emit('evenement');
emeteur.emit('evenement');
emeteur.emit('autre');