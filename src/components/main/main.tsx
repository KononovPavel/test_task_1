import React, {useEffect} from 'react';
import styles from './main.module.css'
import {useDispatch, useSelector} from "react-redux";
import {appStateType} from "../../state/store";
import {getPhotos, PhotoType} from "../../state/reducers/photoReducer";
import { NavLink } from 'react-router-dom';

const Main = () => {
    const dispatch = useDispatch()
    const photos = useSelector<appStateType, PhotoType[]>( state=> state.PhotoReducer.photos)
    useEffect(()=>{
        dispatch(getPhotos());
    }, [dispatch])
    if(!Object.keys(photos).length) return <div>Loading...</div>
    return (
        <div className={styles.photos}>
            {photos.map(photo=> <div key={photo.id}>
                <img src={photo.url} alt="" className={styles.img}/>
            </div>)}
        </div>
    );
};

export default Main;
