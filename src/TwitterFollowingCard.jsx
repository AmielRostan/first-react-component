import { useState } from "react";

export function TwitterFollowCard ({ formatUserName, userName = 'unknown', name, initialIsFollowing }) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }


    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    alt="avatar"
                    className='tw-followCard-avatar'
                    src={`https://unavatar.io/twitter/${userName}`} />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-follow">{text}</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}
