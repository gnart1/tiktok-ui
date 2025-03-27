import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import styles from './SuggestedAccounts.module.scss'
import AccountItem from './AccountItem';

const cx = classNames.bind(styles)

function SuggestedAccounts({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>

            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />

            {/* <div className={cx('more')}>
                <MenuItem title='Xem thêm' to='/' icon={<ArrowDownIcon />} />
            </div> */}
            <p className={cx('more')}>Xem thêm</p>
        </div>
    );
}
SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired
}
export default SuggestedAccounts;