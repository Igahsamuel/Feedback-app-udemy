import Card from "./shared/card"
import Button from "./shared/Button"
import { useState, useContext, useEffect } from "react"
import RatingSelect from "./RatingSelect"
import FeedbackContext from "../context/FeedbackContext"

function FeedbackForm (){
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const {addFeedBack, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

    useEffect(() => {
        if(feedbackEdit.edit === true){
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
        
    },[feedbackEdit])
     const changeText = (e) => {
        if(text === ''){
            setBtnDisabled(true)
            setMessage(null)
        }else if(text !== '' && text.trim().length <= 10){
            setMessage('Must be atleast 10 characters long')
            setBtnDisabled(true)
        }else{
            setBtnDisabled(false)
            setMessage(null)
        }
        setText(e.target.value)
     }
     const handleSubmit = (e) =>{
        e.preventDefault()
        if(text.trim().length > 10){
            const newFeedback = {
                text,
                rating,
            }
            if(feedbackEdit.edit === true){
                updateFeedback(feedbackEdit.item.id, newFeedback)
            }else{
                addFeedBack(newFeedback)
            }
        }
        setText('')
     }
    return (
        <Card>
            <h4>How would you rate your service with us?</h4>
            {/* submit event handler */}
            <form onSubmit={handleSubmit}>
                <RatingSelect select={(rating) => setRating(rating)} /> 
                <div className="input-group">
            <input type="text" placeholder="Write a review" onChange={changeText}/>
            <Button type="submit" isDisabled={btnDisabled}>Send</Button>
                </div>
                {message && <div className="message">{message}</div>}
            </form>
        </Card>
    )
}
export default FeedbackForm