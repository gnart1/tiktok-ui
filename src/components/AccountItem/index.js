import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Image from "~/components/Image";
const cx = classNames.bind(styles)

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')}
                src={data.avatar}
                alt={data.full_name}
            //fallback='https://scontent.fhan19-1.fna.fbcdn.net/v/t39.30808-1/426337183_1866914863807453_2289062827612497101_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=102&ccb=1-7&_nc_sid=e99d92&_nc_ohc=WgpF1Q5WcCYQ7kNvgFgb_JT&_nc_oc=AdipNfgBdaP-82cS4Aa15DawdAkDBX6VLCy6ytoISopkNx3wuvT8xA0ALi_h9GX76D4&_nc_zt=24&_nc_ht=scontent.fhan19-1.fna&_nc_gid=AsCHVaKoCgW0eH8AUmStTA9&oh=00_AYDnyredpu4tVnfnIaJJj44cm-u4Xe08j23sXgZ_9yUbsA&oe=67C2FCF2'
            //src="https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-1/409230331_1550777295733960_7475790569764296994_n.jpg?stp=dst-jpg_s200x200&_nc_cat=106&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=8Kb7_NN39NEQ7kNvgFlg5eS&_nc_ht=scontent.fhan18-1.fna&_nc_gid=A_BRJMnMC_pj7m6QR2xxB8O&oh=00_AYDk6tvDx3VHdmBX1wzzhEVi4bcbM83a35YV2ekh62yNqw&oe=66F9B340" alt="Hien" 
            />
            <div className={cx('info')}>
                <div className={cx('name')}>
                    <h4>{data.full_name} </h4>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />}

                </div>

                <span className={cx('username')}>{data.nickname}</span>
                <span className={cx('follower')}>{data.followers_count} Follower</span>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
}
export default AccountItem;