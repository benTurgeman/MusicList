import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {Link} from 'react-router-dom'
import './index.css'

import { musiciansFetch, musicianLike } from '../../Actions/rootActions'
import MusicianCard from '../MusicianCard/MusicianCard';

function mapStateToProps(state) {
    return {
      musicians: state.musicians
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ musiciansFetch, musicianLike }, dispatch)
}


class Home extends Component {

    componentWillMount() {
        if(this.props.musicians.length > 0) return
        this.props.musiciansFetch()
    }

    navigateTo = (id) =>  {
        console.log(id)
        this.props.history.push(`/MusicList/${id}`)
    }

    handleMusicianLike = (id) => {
        this.props.musicianLike(id)
    }

    orderByLikes= (musicians) => {
        let res = musicians.sort((a,b) => { 
            return b.likes - a.likes
        })
        return res
    }

    render(){
        const { musicians } = this.props
        const musiciansList = this.orderByLikes(musicians).map((musician, idx) => (
            <div className="musician-card-container" key={ idx }>
              <MusicianCard item={ musician } navigateTo={this.navigateTo} handleMusicianLike={this.handleMusicianLike} />
            </div>
        ))
        
        return(
            <div className="home-page">
                <div className="musician-list">
                    {musiciansList}
                </div>
                
            </div>
        )
    }
}

Home = connect(mapStateToProps, mapDispatchToProps)(Home)

export default Home