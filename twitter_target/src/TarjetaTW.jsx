import { useState } from "react"

export function TarjetaTW ({userName = 'unkown', name, imgPerfil, initialisFollowing}) {
    const [isFollowing, setIsFollowing] = useState(initialisFollowing)
    
    //const state = useState(false)
    //const isFollowing = state[0]
    //const setIsFollowing = state[1]

    const stateFollow = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tarjeta-twitter-button is-following' : 'tarjeta-twitter-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tarjeta-twitter'>
            <header className='tarjeta-twitter-header'>
            <img 
                className='tarjeta-twitter-avatar'
                src={imgPerfil}/>
            <div className='tarjeta-twitter-info'>
                <strong>{name}</strong>
                <span className='tarjeta-twitter-infoUserName'>@{userName}</span>
            </div>
            </header>
            <aside>
            <button className={buttonClassName} onClick={handleClick}>
                {stateFollow}
            </button>
            </aside>
        </article>
    )
} 