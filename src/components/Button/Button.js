import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"

import styles from "./Button.module.scss"
import { keyboard } from "@testing-library/user-event/dist/keyboard";

const cx = classNames.bind(styles)

const Button = ({ to, href, primary = false, outline = false, text = false, disabled = false, rounded = false, small = false, large = false, className, children, leftIcon, rightIcon, onClick, ...passProps }) => {
    let Comp = 'button'

    const props = {
        onClick,
        ...passProps
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
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    )
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    text: PropTypes.bool,
    disabled: PropTypes.bool,
    rounded: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    onClick: PropTypes.func
}

export default Button