import { getProps } from "../common";
export class ListGroup {
    render() {
        let props = getProps(this.el, {
            className: this.className,
            colWidth: this.colWidth,
            el: this.el,
            enableFade: this.enableFade,
            isFlush: this.isFlush,
            isTabs: this.isTabs
        });
        return GD.Components.ListGroup(props);
    }
    static get is() { return "bs-listGroup"; }
    static get properties() { return {
        "className": {
            "type": String,
            "attr": "class-name"
        },
        "colWidth": {
            "type": Number,
            "attr": "col-width"
        },
        "el": {
            "elementRef": true
        },
        "enableFade": {
            "type": Boolean,
            "attr": "enable-fade"
        },
        "isFlush": {
            "type": Boolean,
            "attr": "is-flush"
        },
        "isTabs": {
            "type": Boolean,
            "attr": "is-tabs"
        }
    }; }
}
