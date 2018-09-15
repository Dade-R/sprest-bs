export class Breadcrumb {
    // Component loaded event
    componentDidLoad() {
        // Get the items property
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
        // Render the breadcrumb
        return GD.Components.Breadcrumb({
            className: this.className,
            el: this.el.children[0],
            items: items
        });
    }
    // Render the breadcrumb
    render() {
        return (h("div", null));
    }
    static get is() { return "bs-breadcrumb"; }
    static get properties() { return {
        "className": {
            "type": String,
            "attr": "class-name"
        },
        "el": {
            "elementRef": true
        },
        "items": {
            "type": String,
            "attr": "items"
        }
    }; }
}
