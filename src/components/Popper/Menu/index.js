import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import MenuItem from './MenuItem';

const cx = classNames.bind(styles)


const Menu = ({ children, items = [] }) => {

    const renderItem = () => {
        return items.map((item, index) => (
            <MenuItem key={index} data={item} />
        ))
    }

    return (
        <Tippy
            //interactive để có thể tương tác
            interactive
            delay={[0, 700]}
            placement='bottom-end'
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {renderItem()}
                    </PopperWrapper>
                </div>
            )}
        >

            {children}
        </Tippy>
    )
}

export default Menu