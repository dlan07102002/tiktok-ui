import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import Image from "~/components/Image";
const cx = classNames.bind(styles)

function AccountItem() {
    return (<div className={cx('wrapper')}>
        <Image src="https://antimatter.vn/wp-content/uploads/2022/12/hinh-anh-avatar-tiktok-dep-nam.jpg" alt="Duc" className={cx("avatar")} />
        <div className={cx('info')}>
            <h4 className={cx("name")}>
                <span>
                    Nguyen Van A
                </span>
                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </h4>
            <span className={cx("username")}>nguyenvana</span>
        </div>
    </div>);
}

export default AccountItem;