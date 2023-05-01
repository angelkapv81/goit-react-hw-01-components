import PropTypes from "prop-types";
import style from "./FriendList.module.css";

export default function FriendList({ friends }) {
    return (
        <div className={style.friend}>
            <ul className={style.friendList}>
                {friends.map(({ avatar, name, isOnline, id }) => (
                    <li key={id} className={style.friendItem}>
                        <span
                            className={isOnline ? style.Online : style.Offline}
                        >
                            {isOnline}
                        </span>
                        <img
                            className={style.friendAvatar}
                            src={avatar}
                            alt={name}
                            width="48"
                        />
                        <p className={style.friendName}>{name}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        }).isRequired
    ).isRequired,
};
