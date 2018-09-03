export class Card {
    // Component loaded event
    componentDidLoad() {
        // Get the body property
        let body = [];
        if (this.body) {
            try {
                body = JSON.parse(this.body);
            }
            catch (_a) {
                body = [];
                // Log an error
                console.log("Error parsing the JSON string.");
                console.log(this.body);
            }
        }
        // Render the card
        return GD.Components.Card({
            body: body,
            className: this.className,
            el: this.el.children[0],
            footer: this.footer,
            header: this.header,
            imgBottom: this.imgBottom,
            imgTop: this.imgTop
        });
    }
    // Render the card
    render() {
        return (h("div", null));
    }
    static get is() { return "bs-card"; }
    static get properties() { return {
        "body": {
            "type": String,
            "attr": "body"
        },
        "className": {
            "type": String,
            "attr": "class-name"
        },
        "el": {
            "elementRef": true
        },
        "footer": {
            "type": String,
            "attr": "footer"
        },
        "header": {
            "type": String,
            "attr": "header"
        },
        "imgBottom": {
            "type": "Any",
            "attr": "img-bottom"
        },
        "imgTop": {
            "type": "Any",
            "attr": "img-top"
        }
    }; }
}
