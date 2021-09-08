import { Dispatch } from "redux"
import {Photo} from "../../API/rootApi";


const SET_PHOTOS = 'SET_PHOTOS'
const SET_ONE_PHOTO = 'SET_ONE_PHOTO'
const ADD_COMMENT = 'ADD_COMMENT'


interface commentType {
    id: number,
    text: string,
    date: string
}

 export interface PhotoType {
    id: number,
    url: string,
    comments: commentType[]
}

interface InitStateType {
    photos: PhotoType[],
    currentPhoto: PhotoType
}

let initState: InitStateType = {
    photos: [],
    currentPhoto: {} as PhotoType
}

interface setAllPhotos {
    type: typeof SET_PHOTOS,
    payload: PhotoType[]
}

interface setOnePhoto {
    type: typeof SET_ONE_PHOTO,
    payload: PhotoType
}

interface addComment {
    type: typeof ADD_COMMENT,
    comment: commentType
}

type actionType = setAllPhotos | setOnePhoto | addComment

export const PhotoReducer = (state: InitStateType = initState, action: actionType): InitStateType => {
    switch (action.type) {

        case "SET_PHOTOS": {
            return {...state, photos: action.payload}
        }
        case "SET_ONE_PHOTO": {
            return {...state, currentPhoto: action.payload}
        }
        case "ADD_COMMENT": {
            return {
                ...state,
                currentPhoto: {
                    ...state.currentPhoto,
                    comments: [...state.currentPhoto.comments, action.comment]
                }
            }
        }
        default: {
            return state;
        }
    }
}


const setPhotos = (photos: any): setAllPhotos => ({
    type: SET_PHOTOS,
    payload: photos
})

const setOnePhoto = (photo: PhotoType): setOnePhoto => ({type: SET_ONE_PHOTO, payload: photo})
const addComment = (comment: commentType): addComment => ({type: ADD_COMMENT, comment: comment})

export const getPhotos = ()=>async (dispatch:Dispatch)=>{
    const response = await Photo.getAllPhoto().then(data=> data.data)
    dispatch(setPhotos(response));
}
