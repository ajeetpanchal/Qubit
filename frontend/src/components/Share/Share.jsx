import React, { useRef, useState } from 'react'
import "./share.css"
import { PermMedia, EmojiEmotions } from "@material-ui/icons";
import QuizIcon from '@mui/icons-material/Quiz';
import axios from 'axios';

export default function Share() {

    let user = localStorage.getItem("userInfo")
    user = JSON.parse(user);
    const username = user.name;
    const desc = useRef();
    const [file, setFile] = useState(null)
    const PostPic = require('./pic.jpg');


    const submitHandler = async (e) =>{
        e.preventDefault()
        const newPost = {
            userId: user._id,
            desc:desc.currentObject.value 
        }
        
        try{ 
            await axios.post("/post",newPost)
        }catch(err){}


    }
    return (
        <div className="share">
            <div className='shareWrapper'>
                <div className='shareTop'>
                    <img className='shareProfileImg' src={PostPic} alt="" />
                    <input placeholder={`what's in your mind  ${username}`} className="shareInput" ref={desc} />
                    <hr className='shareHr' />
                </div>
                <form className='shareBottom' onSubmit={submitHandler}>
                    <div className='shareOptions'>
                        <label htmlFor="file" className='shareOption'>
                            <PermMedia htmlColor='blue' className='shareIcon' />
                            <span className='shareOptionText'>Photo and video</span>
                            <input style={{ display: "none" }} type="file" id="file" accept='.jpg,.png,.jpeg' onChange={(e) => setFile(e.target.files[0])} />
                        </label>

                        <div className='shareOption'>
                            <EmojiEmotions htmlColor='tomato' className='shareIcon' />
                            <span className='shareOptionText'>share Achievement</span>
                        </div>


                        <div className='shareOption'>
                            <QuizIcon htmlColor='red' className='shareIcon' />
                            <span className='shareOptionText'>Ask Question</span>
                        </div>
                    </div>
                    <button className='shareButton' type='submit'>Share</button>
                </form>
            </div>
        </div>
    )
}
