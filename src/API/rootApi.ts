import axios from "axios"


export const Photo = {
      async getAllPhoto(){
       return await axios.get('https://boiling-refuge-66454.herokuapp.com/images',{
           headers : {
               'Content-Type': 'application/json',
               'Accept': 'application/json'
           }
       }).then(response => response)
     },
    async getOnePhoto(imageId:number){
        return await  axios.get('https://boiling-refuge-66454.herokuapp.com/images/'+imageId, {
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(response=> response)

          //https://boiling-refuge-66454.herokuapp.com/images/:imageId
    },
    addComment(imageId:number){
        //https://boiling-refuge-66454.herokuapp.com/images/:imageId/comments
    }
}
