import { useState, forwardRef } from 'react'
import images from '~/assets/images';
import styles from './Image.module.scss'
import classNames from 'classnames';

const Image = forwardRef(({ fallBack: customFallBack = images.noImage, src, className, ...props }, ref) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    const [fallBack, setFallBack] = useState('');

    const handleError = () => {
        setFallBack(customFallBack || images.noImage)
    }

    return <img className={classNames(styles.wrapper, className)} src={fallBack || src} ref={ref} {...props} onError={handleError} />
})

export default Image;