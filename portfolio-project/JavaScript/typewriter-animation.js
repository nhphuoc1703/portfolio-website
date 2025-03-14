class Typewriter {
    constructor(el, options) {
        this.el = el;
        /*the '...' is the SPREAD operator - to take an iterable and make it into a new array*/
        /*this is to make sure there are no errors when trying reference the original array*/
        this.words = [... this.el.dataset.typewriter.split(' ')];
        this.speed = options?.speed || 150;
        this.delay = options?.delay || 1500;
        this.repeat = options?.repeat;
        this.initTyping();
    }

    wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    toogleTyping = () => this.el.classList.toggle('typing');

    async typewrite(word) {
        await this.wait(this.delay);
        this.toogleTyping();
        for (const letter of word.split('')) {
            this.el.textContent += letter;
            await this.wait(this.speed);
        }
        this.toogleTyping();
        await this.wait(this.delay);
        this.toogleTyping();
        while (this.el.textContent.length != 0) {
            this.el.textContent = this.el.textContent.slice(0, -1);
            await this.wait(this.speed);
        }
        this.toogleTyping();
    }

    async initTyping() {
        for (const word of this.words) {
            await this.typewrite(word);
        }
        if(this.repeat) {
            await this.initTyping();
        }
    }
}

/*just for debugging purposes - I could have just gotten the element with its class*/
const el1 = new Typewriter(document.querySelector('[data-typewriter]'), {
    speed: 100,
    repeat: true
})
console.log(el1)
