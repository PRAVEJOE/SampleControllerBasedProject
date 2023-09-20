import React, { useState, useEffect } from 'react'
import './Banner.css'
import RowPost from '../RowPost/RowPost'
import Spinner from '../../CommonComponents/Spinner';
import axios from 'axios';
import UserController from '../../Controllers/MoviesListController';
import useMovieController from '../../Controllers/MoviesListController';
function Banner() {

var{movieList,lastMovieName,getMovieList,isloader}=useMovieController();
    return (
        <div>
            <div className='banner'>
                <div className='content' >
                    <h1 className='title'>{lastMovieName}  </h1>
                    <div className='banner_buttons' >
                        <button className='button' onClick={getMovieList} >Play</button>
                        <button className='button' >My list</button>
                    </div>
                    <h1 className='description'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content</h1>
                </div>
                <div className="fade_bottom"></div>
            </div>
            {isloader ? (<Spinner />) : movieList.length === 0 ? (<div>No DATA FOUND</div>) : (<RowPost list={movieList} />)}
        </div>
    )
}


export default Banner