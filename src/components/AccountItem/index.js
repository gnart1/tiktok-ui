import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-1/409230331_1550777295733960_7475790569764296994_n.jpg?stp=dst-jpg_s200x200&_nc_cat=106&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=8Kb7_NN39NEQ7kNvgFlg5eS&_nc_ht=scontent.fhan18-1.fna&_nc_gid=A_BRJMnMC_pj7m6QR2xxB8O&oh=00_AYDk6tvDx3VHdmBX1wzzhEVi4bcbM83a35YV2ekh62yNqw&oe=66F9B340" alt="Hien" />
            <div className={cx('info')}>
                <div className={cx('name')}>
                    <h4>Hiền Lê </h4>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                </div>

                <span className={cx('username')}>HienLe</span>
            </div>
        </div>
    );
}

export default AccountItem;