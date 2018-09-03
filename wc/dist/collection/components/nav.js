export class Nav {
    // Component loaded event
    componentDidLoad() {
        // Remove the id attribute
        this.el.removeAttribute("id");
        // Get the items
        let items = [];
        if (this.items) {
            try {
                items = JSON.parse(this.items);
            }
            catch (_a) {
                items = [];
                // Log an error
                console.log("Error parsing the JSON string.");
                console.log(this.items);
            }
        }
        // Render the navigation
        return GD.Components.Nav({
            className: this.className,
            el: this.el.children[0],
            enableFade: this.enableFade,
            enableFill: this.enableFill,
            id: this.id,
            items,
            isJustified: this.isJustified,
            isPills: this.isPills,
            isTabs: this.isTabs,
            isVertical: this.isVertical
        });
    }
    // Render the navigation
    render() {
        return (h("div", null));
    }
    static get is() { return "bs-nav"; }
    static get properties() { return {
        "className": {
            "type": String,
            "attr": "class-name"
        },
        "el": {
            "elementRef": true
        },
        "enableFade": {
            "type": Boolean,
            "attr": "enable-fade"
        },
        "enableFill": {
            "type": Boolean,
            "attr": "enable-fill"
        },
        "id": {
            "type": String,
            "attr": "id"
        },
        "isJustified": {
            "type": Boolean,
            "attr": "is-justified"
        },
        "isPills": {
            "type": Boolean,
            "attr": "is-pills"
        },
        "isTabs": {
            "type": Boolean,
            "attr": "is-tabs"
        },
        "isVertical": {
            "type": Boolean,
            "attr": "is-vertical"
        },
        "items": {
            "type": String,
            "attr": "items"
        }
    }; }
}
