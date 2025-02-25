
import classNames from 'classnames';
import { useState, forwardRef } from 'react';
import images from '~/asset/images';
import styles from './Image.module.scss';
const Image = forwardRef(({ src, alt = 'avatar', className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('')
    const handleError = () => {
        setFallback(customFallback)
    }
    return (
        <img
            className={classNames(styles.wrapper, className)}
            src={fallback || src} ref={ref} alt={alt}  {...props} onError={handleError}></img>
    );
})

export default Image