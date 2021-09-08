import React, {useState} from 'react';
import './modal.css'
import {useDispatch, useSelector} from "react-redux";
import {appStateType} from "../../state/store";
import {addPost, PhotoType} from "../../state/reducers/photoReducer";

interface Props {
    id: number
    active: boolean,
    setActive: (active: boolean) => void
}

const Modal: React.FC<Props> = ({id, active, setActive}) => {
    const [name, setName] = useState<string>('');
    const [comment, setComment] = useState<string>('')
    const currentPhoto = useSelector<appStateType, PhotoType>(state => state.PhotoReducer.currentPhoto)
    const dispatch = useDispatch()
    const onClickHandler = async () => {
        await dispatch(addPost({id: Math.random() * 1000, text: comment, date:new Date().toLocaleString().split(',')[0]}, currentPhoto.id))
        setName('');
        setComment('');
    }
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={'modal_content'} onClick={e => e.stopPropagation()}>
                {
                    <React.Fragment>
                        <div className={'imageForm'}>
                            <img src={currentPhoto.url} alt="" width={330} height={205}/>
                            <div className={'form'}>
                                <input type="text"
                                       placeholder={'Ваше имя'}
                                       value={name}
                                       onChange={e => setName(e.currentTarget.value)}
                                />
                                <input
                                    value={comment}
                                    onChange={e => setComment(e.currentTarget.value)}
                                    type="text"
                                    placeholder={'Ваш комментарий'}
                                />
                                <button onClick={onClickHandler}>Оставить комментарий</button>
                            </div>
                        </div>
                        <div>
                            <div className={'comments'}>
                                {currentPhoto.comments && currentPhoto.comments.map(comment =>
                                    <div key={comment.id} className={'comment'}>
                                        <span className={'date'}>{comment.date}</span>
                                        <span className={'text'}>{comment.text}</span>
                                    </div>
                                )}


                            </div>
                        </div>
                    </React.Fragment>


                }

            </div>
        </div>
    );
};

export default Modal;
