import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "./Button.module.scss"
import { keyboard } from "@testing-library/user-event/dist/keyboard";

const cx = classNames.bind(styles)

const Button = ({ to, href, primary = false, outline = false, text = false, disabled = false, rounded = false, small = false, large = false, className, children, leftIcon, onClick, ...passProps }) => {
    let Comp = 'button'
    const props = {
        onClick,
        ...passProps
    }

    if (disabled) {
        delete props.onClick
    }

    if (disabled) {
        Object.keys(props).forEach(propKey => {
            if (propKey.startsWith('on') && typeof propKey === 'function') {
                delete props[propKey]
            }
        })
    }

    if (to) {
        props.to = to
        Comp = Link
    } else if (href) {
        props.href = href
        Comp = 'a'
    }

    const classes = cx('wrapper', { [className]: className, primary, outline, text, rounded, disabled, small, large })

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>
                {children}
            </span>
        </Comp>
    )
}

export default Button