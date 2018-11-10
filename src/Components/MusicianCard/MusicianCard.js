import React from 'react'
import './MusicianCard.css'

const MusicianCard = ({item, navigateTo, handleMusicianLike}) => {
    
    const handleImageClick = () => {
        navigateTo(item.id)
    }

    const handleLikeClick = () => {
        handleMusicianLike(item.id)
    }

    return (
        <div className="musician-card">
            <div className="musician-card-image-conatiner">
                <img className="image musician-card-image" onClick={handleImageClick} src={item.imageURL} alt={item.name} />
            </div>
            <div className="musician-card-content">
                <div className="musician-card-data">
                    <div className="musician-card-data-name">{item.name}</div>
                    <div className="musician-card-data-likes">{item.likes > 0 ? item.likes : '0'}</div>
                </div>
                <div className="musician-card-actions">
                    <button className="button" onClick={handleLikeClick} >Like</button>
                </div>
            </div>
        </div>
    )
}

export default MusicianCard