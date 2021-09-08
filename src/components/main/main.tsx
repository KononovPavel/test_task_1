import React, {useEffect, useState} from 'react';
import styles from './main.module.css'
import {useDispatch, useSelector} from "react-redux";
import {appStateType} from "../../state/store";
import {getCurrentPhoto, getPhotos, PhotoType} from "../../state/reducers/photoReducer";
import { NavLink } from 'react-router-dom';
import Modal from "../photoContainer/Modal";

const Main = () => {
    const [modalActive, setModalActive] = useState(false)
    const dispatch = useDispatch()
    const photos = useSelector<appStateType, PhotoType[]>( state=> state.PhotoReducer.photos)
    useEffect(()=>{
        dispatch(getPhotos());
    }, [dispatch])
    if(!Object.keys(photos).length) return <div>Loading...</div>
    return (
        <div className={styles.photos}>
            {photos.map(photo=> <div key={photo.id}>
                <img
                    onClick={()=> {setModalActive(true); dispatch(getCurrentPhoto(photo.id))}}
                    src={photo.url}
                    alt=""
                    className={styles.img}
                />
                <Modal id={photo.id} active={modalActive} setActive={setModalActive}/>
            </div>)}

        </div>
    );
};

export default Main;
