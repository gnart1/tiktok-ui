import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';


const cx = classNames.bind(styles)

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>

            <div className={cx('header')}>
                <img className={cx('avatar')} src='https://scontent.fhan19-1.fna.fbcdn.net/v/t39.30808-1/426337183_1866914863807453_2289062827612497101_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=102&ccb=1-7&_nc_sid=e99d92&_nc_ohc=FPkFs_6506oQ7kNvgHyphgF&_nc_oc=AdmQz-QAzqAuaa6Cg0P4RNfLE9Zzs-rBp59TT3R-n8qUEUT2Xif3gjHVrScVVtJPKmg&_nc_zt=24&_nc_ht=scontent.fhan19-1.fna&_nc_gid=q2DUyqyec7c3ZYyegevH4A&oh=00_AYHSQoezt-xYfqagjN_qGfjstNs5rrR6GBij1HBUoLGPlw&oe=67EAC232' alt='' />
                <Button className={cx('follow-btn')} primary >Follow</Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>hhtrang</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Hà Hùng Tráng</p>

                <p className={cx('info')}>
                    <strong className={cx('value')}>8.2M</strong>
                    <span className={cx('label')}> Followers</span>
                    <strong className={cx('value')}>20M</strong>
                    <span className={cx('label')}> Likes</span>
                </p>
            </div>

        </div>
    );
}

export default AccountPreview;