class TextBuilder {

    private text: string = '';

    get value(): string {
        return this.text;
    }

    set(value: string) {
        this.text = value;
        return this;
    }

    cut(length: number) {
        if (this.text.length > length) {
            this.text = this.text.slice(0, length) + '...';
        }
        return this;
    }

    capitalizeFirstLetter() {
        this.text = this.text[0].toUpperCase() + this.text.slice(1);
        return this;
    }
    
}

export default new TextBuilder();

