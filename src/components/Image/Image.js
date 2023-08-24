import { useState, forwardRef } from 'react'
import PropTypes from 'prop-types'

import images from '~/assets/images';
import styles from './Image.module.scss'
import classNames from 'classnames';

const Image = forwardRef(({ fallBack: customFallBack = images.noImage, src, alt, className, ...props }, ref) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    const [fallBack, setFallBack] = useState('');

    const handleError = () => {
        setFallBack(customFallBack || images.noImage)
    }

    return <img className={classNames(styles.wrapper, className)} src={fallBack || src} ref={ref} {...props} onError={handleError} />
})

Image.propTypes = {
    alt: PropTypes.string,
    fallBack: PropTypes.string,
    src: PropTypes.string,
    className: PropTypes.string
}
export default Image;