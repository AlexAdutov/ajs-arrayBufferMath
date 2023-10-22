import Daemon from './daemon';
import Magician from './magician';

const magician = new Magician('Mag');

const daemon = new Daemon('Devil');

console.log(magician, daemon);
