import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss'
import config from '~/config';
import { HomeIcon, ExploreIcon, FollowingIcon, FriendIcon, LiveIcon, HomeActiveIcon, ExploreActiveIcon, FriendActiveIcon, FollowingActiveIcon } from '~/components/Icons';
import Menu, { MenuItem } from './Menu';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import FollowingAccounts from '~/components/FollowingAccounts';
import * as followingService from '~/services/followingService'
import * as userService from '~/services/userService'
import FooterSidebar from './FooterSidebar';

const cx = classNames.bind(styles)

const INIT_PAGE = 1;
const PER_PAGE = 5;

function Sidebar() {

    const [suggestedPage, setSuggestedPage] = useState(INIT_PAGE)
    const [followingPage, setFollowingPage] = useState(INIT_PAGE)

    const [suggestedUsers, setSuggestedUsers] = useState([]);

    const [followingUsers, setFollowingUsers] = useState([]);

    useEffect(() => {
        userService
            .getSuggested(suggestedPage, PER_PAGE)
            .then((data) => {
                setSuggestedUsers((prevUsers) => [...prevUsers, ...data])
            })
            .catch((error) => console.log(error))
    }, [suggestedPage]);

    const handleSeeMore = () => {
        setSuggestedPage(suggestedPage + 1);
    }

    useEffect(() => {
        followingService
            .getFollowing(followingPage)
            .then((data) => {
                setFollowingUsers(data)
            })
            .catch((error) => console.log(error))
    }, [followingPage]);

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="Đề xuất" to={config.routes.home} icon={<HomeIcon />} iconActive={<HomeActiveIcon />} />
                <MenuItem title="Khám phá" to={config.routes.explore} icon={<ExploreIcon />} iconActive={<ExploreActiveIcon />} />
                <MenuItem title="Đã follow" to={config.routes.following} icon={<FollowingIcon />} iconActive={<FollowingActiveIcon />} />
                <MenuItem title="Bạn bè" to={config.routes.friends} icon={<FriendIcon />} iconActive={<FriendActiveIcon />} />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} iconActive={<LiveIcon />} />
            </Menu>
            <SuggestedAccounts label='Tài khoản được đề xuất' data={suggestedUsers} onSeeMore={handleSeeMore} />
            {/* <SuggestedAccounts label='Tài khoản được đề xuất' data={suggestedUsers} onSeeMore={handleSeeMore} /> */}
            <FollowingAccounts label='Tài khoản Đã follow' data={followingUsers} onSeeMore={handleSeeMore} />
            <FooterSidebar />
        </aside>
    )

}

export default Sidebar;