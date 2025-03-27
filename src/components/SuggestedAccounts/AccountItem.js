import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper'


import styles from './SuggestedAccounts.module.scss'
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles)

function AccountItem() {

    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        )

    }
    return (
        //using a wrapper <div> tag around the reference element
        //solves this by creating a new parentNode context
        <div>
            <Tippy
                interactive
                delay={[900, 0]}
                offset={[0, 0]}
                placement='bottom'
                render={renderPreview}
            >
                <div className={cx('account-item')}>
                    <img className={cx('avatar')} src='https://scontent.fhan19-1.fna.fbcdn.net/v/t39.30808-1/426337183_1866914863807453_2289062827612497101_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=102&ccb=1-7&_nc_sid=e99d92&_nc_ohc=FPkFs_6506oQ7kNvgHyphgF&_nc_oc=AdmQz-QAzqAuaa6Cg0P4RNfLE9Zzs-rBp59TT3R-n8qUEUT2Xif3gjHVrScVVtJPKmg&_nc_zt=24&_nc_ht=scontent.fhan19-1.fna&_nc_gid=q2DUyqyec7c3ZYyegevH4A&oh=00_AYHSQoezt-xYfqagjN_qGfjstNs5rrR6GBij1HBUoLGPlw&oe=67EAC232' alt='' />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>hhtrang</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Hà Hùng Tráng</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}
AccountItem.propTypes = {

}
export default AccountItem;