import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import styles from './FollowingAccounts.module.scss'
import AccountItem from '~/components/SuggestedAccounts/AccountItem'

const cx = classNames.bind(styles)

function FollowingAccounts({ label, data = [], onSeeMore }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {data.map((result) => (
                <AccountItem key={result.id} data={result} />
            ))}
            <p className={cx('more')} onClick={onSeeMore}>Xem thêm</p>
        </div>
    );
}
FollowingAccounts.propTypes = {
    label: PropTypes.string.isRequired,
    data: PropTypes.array,

}
export default FollowingAccounts;