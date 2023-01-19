import { useState } from 'react'

export function TwitterFollowCard ({userName, name, initialIsFollowing}) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    const textButton = isFollowing ? 'Siguiendo' : 'Seguir' ;
    const classButton = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';

    const handleClick = function() {
        setIsFollowing(!isFollowing);
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar'
                src={`https://unavatar.io/${userName}`}
                alt="avatar midu" />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>
                        @{userName}
                    </span>
                </div>
            </header>
            <aside>
                <button className={classButton} onClick={handleClick}>
                  <span className='tw-followCard-text'>{textButton}</span>
                  <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )

}