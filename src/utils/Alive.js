import Interactable from './Interactable'

class Alive extends Interactable {
    constructor(name, hp) {
        super()
        this.name = name
        this.hp = hp
    }

    attack() {
        console.log('attacked');
    }
}

export default Alive