import * as jQuery from "jquery";
import { IBreadcrumb, IBreadcrumbProps } from "./types/breadcrumb";

/**
 * Breadcrumb
 */
export const Breadcrumb = (props: IBreadcrumbProps): IBreadcrumb => {
    // Set the class names
    let classNames = ["breadcrumb"];
    props.className ? classNames.push(props.className) : null;

    // Set the starting tag
    let html = [
        '<nav aria-label="breadcrumb">',
        '<ol class="' + classNames.join(' ') + '">'
    ];

    // Parse the items
    let items = props.items || [];
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        let isActive = i == items.length - 1;

        // Set the class names
        let itemClassNames = ["breadcrumb-item"];
        isActive ? itemClassNames.push("active") : null;

        // Set the attributes
        let attributes = [
            'class="' + itemClassNames.join(' ') + '"',
            isActive ? 'aria-current="page"' : null
        ].join(' ');

        // Add the item
        html.push([
            '<li ' + attributes + '>',
            item.href ? '<a href="' + item.href + '">' : '',
            item.text || "",
            item.href ? '</a>' : '',
            '</li>'
        ].join('\n'));
    }

    // Add the closing tag
    html.push([
        '</ol>',
        '</nav>'
    ].join('\n'));

    // Get the element to render to
    let el = props.el || document.createElement("div");

    // Set the boostrap class
    el.classList.contains("bs") ? null : el.classList.add("bs");

    // Set the html
    el.innerHTML = html.join('\n');

    // Return the breadcrumb
    let breadcrumb = jQuery(el.children[0]);
    return { el };
}