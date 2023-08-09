import 'tippy.js/dist/tippy.css'; // optional
import Tippy from '@tippyjs/react';


import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faCoins, faEarthAsia, faEllipsisVertical, faGear, faKeyboard, faSignOut, faUser } from '@fortawesome/free-solid-svg-icons';


import { UploadIcon, MessageIcon, InboxIcon } from '~/components/icons';
import Button from '~/components/Button';
import Image from '~/components/Image';
import styles from './Header.module.scss'
import images from '~/assets/images'

import Menu from '~/components/Popper/Menu';
import Search from '../Search';
const cx = classNames.bind(styles)
// giúp viết classname dưới dạng dấu gạch ngang 

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English'
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt'
                },

            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',

    }
]

let currentUser = true;

function Header() {


    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                break;
            default:
        }
    }

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@lann'
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin'
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/Settings'
        },
        ...MENU_ITEMS
        ,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            seperate: true
        },
    ]

    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <img src={images.logo} alt="Tiktok"></img>

            {/* Search */}

            <Search />

            <div className={cx('actions')}>

                {
                    currentUser ? (
                        <>

                            <a href="#" className={cx('upload-btn')}>
                                <div className={cx('upload-icon')}>
                                    <UploadIcon />
                                </div>
                                <div>Upload</div>

                            </a>
                            <Tippy content='Messages' placement='bottom' delay={[0, 200]}>
                                <div className={cx('message-icon')}>
                                    <MessageIcon />
                                </div>
                            </Tippy>
                            <Tippy content='Inbox' placement='bottom' delay={[0, 200]}>
                                <div className={cx('inbox-icon')}>
                                    <InboxIcon />
                                    <sub className={cx('inbox-number')}>
                                        1
                                    </sub>
                                </div>
                            </Tippy>

                        </>
                    ) : (
                        <>
                            <Button text >Upload</Button>

                            <Button primary >Log in</Button>

                        </>
                    )
                }

                <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                    {
                        currentUser ? (
                            <Image className={cx('user-avatar')} src='https://avatars.githubusercontent.com/u/18712667?v=4' alt='Nguyen Van A' />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )
                    }
                </Menu>
            </div>
        </div>
    </header >
}

export default Header;