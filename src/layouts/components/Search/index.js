//HeadlessTippy headless để custom
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper'
import classNames from 'classnames/bind';
import { useEffect, useState, useRef } from 'react';

import * as searchService from '~/services/searchService'
import styles from './Search.module.scss'
import AccountItem from '../../AccountItem';
import { useDebounce } from '~/hooks';
import { SearchIcon } from '~/components/icons';


const cx = classNames.bind(styles)

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const debounced = useDebounce(searchValue, 500);

    const inputRef = useRef()
    // ${searchValue}
    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([])
            return
        }

        setIsLoading(true);

        const fetchApi = async () => {
            setIsLoading(true);

            const result = await searchService.search(searchValue);

            setSearchResult(result);

            setIsLoading(false)

        }

        fetchApi()

    }, [debounced])

    const handleChange = e => {
        const searchValue = e.target.value;

        if (!searchValue.startsWith(' '))
            setSearchValue(searchValue)
    }

    const handleSubmit = e => {
        e.preventDefault();

    }

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus()
    }

    const handleHideResult = () => {
        setShowResult(false)
    }
    return (

        //Using a wrapper <div> tag arround the reference element solves
        //this by creating a new parentNode context

        <div>
            <HeadlessTippy
                //interactive để có thể tương tác
                interactive
                appendTo={() => document.body}
                placement='bottom'
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {
                                searchResult.map((result) => (
                                    <AccountItem key={result.id} data={result} />
                                ))
                            }
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
                        onChange={handleChange}
                        spellCheck={false}
                    />

                    {!isLoading && !!searchValue &&
                        <button className={cx('clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    }

                    {/* Loading */}
                    {
                        isLoading &&
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    }

                    <button className={cx('search-btn')} onMouseDown={e => e.preventDefault()} onClick={handleSubmit}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy >
        </div>
    );
}

export default Search;