/**
 * Button
 */
export const Button: (props: IButtonProps) => IButton;

/**
 * Button Types
 */
export const ButtonTypes: IButtonTypes;

/**
 * Button
 */
export interface IButton {
    /** Destroys an element’s button. */
    dispose: () => void;

    /** The element. */
    el: Element;

    /** Toggles push state. Gives the button the appearance that it has been activated. */
    toggle: () => void;
}

/**
 * Button Properties
 */
export interface IButtonProps {
    badgeType?: number;
    badgeValue?: string;
    className?: string;
    controls?: Array<string>;
    el?: Element | HTMLElement;
    id?: string;
    isBlock?: boolean;
    isDisabled?: boolean;
    isExpanded?: boolean;
    isLarge?: boolean;
    isLink?: boolean;
    isOutline?: boolean;
    isSmall?: boolean;
    onClick?: (ev?: Event) => void;
    target?: string;
    text?: string;
    toggle?: string;
    trigger?: string;
    type?: number;
}

/**
 * Button Types
 */
export type IButtonTypes = {
    Danger: number;
    Dark: number;
    Info: number;
    Light: number;
    Link: number;
    Primary: number;
    Secondary: number;
    Success: number;
    Warning: number;
}