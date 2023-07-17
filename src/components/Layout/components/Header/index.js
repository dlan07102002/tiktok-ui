import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
//Tippy headless để custom
// import 'tippy.js/dist/tippy.css'; // optional
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSignIn } from '@fortawesome/free-solid-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import styles from './Header.module.scss'
import images from '~/assets/images'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import AccountItem from '../../AccountItem';
const cx = classNames.bind(styles)
// giúp viết classname dưới dạng dấu gạch ngang 

function Header() {
    const [searchResult, setSearchResult] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
        }, 0)
    }, [searchResult])

    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <img src={images.logo} alt="Tiktok"></img>
            <Tippy
                //interactive để có thể tương tác
                interactive
                visible={searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <input placeholder='Search accounts and videos' spellCheck={false} />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    {/* Loading */}
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>


                </div>
            </Tippy>
            <div className={cx('action')}>
                <Button text >Upload</Button>

                <Button primary >Log in</Button>
            </div>
        </div>
    </header >
}

export default Header;