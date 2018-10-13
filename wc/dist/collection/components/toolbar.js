import { getProps } from "../common";
export class Toolbar {
    render() {
        let props = getProps(this.el, {
            className: this.className,
            el: this.el,
            spacing: this.spacing
        });
        return GD.Components.Toolbar(props);
    }
    static get is() { return "bs-toolbar"; }
    static get properties() { return {
        "className": {
            "type": String,
            "attr": "class-name"
        },
        "el": {
            "elementRef": true
        },
        "spacing": {
            "type": Number,
            "attr": "spacing"
        }
    }; }
}
