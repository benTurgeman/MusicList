import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {Link} from 'react-router-dom'
import './index.css'

import { musiciansFetch, musicianLike } from '../../Actions/rootActions'

function mapStateToProps(state) {
    return {
      musicians: state.musicians
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ musiciansFetch, musicianLike }, dispatch)
}

class MusicianPage extends Component {

    componentWillMount() {
        if(this.props.musicians.length <= 0) {
            this.props.musiciansFetch()
        }
    }

    navigateBackHome = () => {
        this.props.history.push('/MusicList')
    }

    handleMusicianLike = () => {
        console.log(this.props.match.params.id)
        this.props.musicianLike(+this.props.match.params.id)
    }

    render() {
        let musicianId = this.props.match.params.id
        let musician = this.props.musicians.find((item) => {
            return item.id === +musicianId
        })
        if(!musician) {
            return (
                <div>
                    Someting went wrong <Link to='/'>Back Home</Link>
                </div>
            )
        }
        return (
            <div className="musician-page">
                <div className="musician-page-image-conatiner">
                    <img className="image" src={musician.imageURL} alt={musician.name} />
                </div>
                <div className="musician-page-content">
                    <div className="musician-page-content-header">
                        <div className="musician-page-content-header-title">{musician.name}</div>
                        <div className="likes-counter">
                            Likes: {musician.likes > 0 ? musician.likes : '0'}
                        </div>
                    </div>
                    <div className="musician-page-content-description">
                        {musician.description}
                    </div>
                    <div className="musician-page-content-actions">
                        <button onClick={this.navigateBackHome} className="button musician-page-button">Back to list</button>
                        <button onClick={this.handleMusicianLike} className="button musician-page-button">Like</button>
                    </div>
                </div>
            </div>
        )
    }
}

MusicianPage = connect(mapStateToProps, mapDispatchToProps)(MusicianPage)

export default MusicianPage