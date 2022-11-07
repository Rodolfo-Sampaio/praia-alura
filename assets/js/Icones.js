class Icones {
    constructor () {
        this.listaIcones = document.querySelectorAll('.icone');
    }

    animaIcones () {
        gsap.to(this.listaIcones, {scale: 0.95, repeat: -1, yoyo: true});
    }
}

export { Icones }




