import axios from "axios"
import {commentType} from "../state/reducers/photoReducer";


export const Photo = {
    async getAllPhoto() {
        return await axios.get('https://boiling-refuge-66454.herokuapp.com/images', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(response => response)
    },
    async getOnePhoto(imageId: number) {
        return await axios.get('https://boiling-refuge-66454.herokuapp.com/images/' + imageId, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(response => response)

    },
    async addComment(imageId: number, comment: commentType) {
        return await axios.post(`https://boiling-refuge-66454.herokuapp.com/images/${imageId}/comments`, comment)
            .then(response => console.log(response))
    }
}
