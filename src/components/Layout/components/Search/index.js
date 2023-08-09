//HeadlessTippy headless để custom

import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper'
import classNames from 'classnames/bind';
import { useEffect, useState, useRef } from 'react';

import styles from './Search.module.scss'
import AccountItem from '../../AccountItem';
import { SearchIcon } from '~/components/icons';


const cx = classNames.bind(styles)

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);

    const inputRef = useRef()

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3, 4])
        }, 0)
    }, [])

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus()
    }

    const handleHideResult = () => {
        setShowResult(false)
    }


    return (
        <HeadlessTippy
            //interactive để có thể tương tác
            interactive
            placement='bottom'
            visible={showResult && searchResult.length > 0}
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
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder='Search accounts and videos'
                    onFocus={() => setShowResult(true)}
                    onChange={e => setSearchValue(e.target.value)}
                    spellCheck={false}
                />
                {!!searchValue &&
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                }

                {/* Loading */}
                {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}

                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;