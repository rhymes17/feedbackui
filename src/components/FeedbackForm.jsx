import React, { useState, useContext } from 'react'
import { useEffect } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import RatingSelect from './RatingSelect'
import Button from './shared/Button'
import Card from './shared/Card'

const FeedbackForm = () => {

    const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext)

    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [msg, setMsg] = useState('')

    useEffect(() => {
        if(feedbackEdit.edit === true){
            setText(feedbackEdit.item.text)
            setBtnDisabled(false)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    const handleTextChange = (e) => {

        if(text === ''){
            setBtnDisabled(true)
            setMsg(null)
        }else if(text !== '' && text.trim().length < 10){
            setMsg('Text Must Be Atleast 10 Characters')
            setBtnDisabled(true)
        }else{
            setBtnDisabled(false)
            setMsg(null)
        }

        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(text.trim().length > 10){
            const newFeedBack = {
                text,
                rating,
            }

            if(feedbackEdit.edit === true){
                updateFeedback(feedbackEdit.item.id, newFeedBack)
            }else{
                addFeedback(newFeedBack);
            }
            
            setText('');
        }
    
    }

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us?</h2>
            
            <RatingSelect select = {(rating) => setRating(rating)}/>

            <div className='input-group'>
                <input
                type='text'
                placeholder='Write a review'
                value = {text}
                onChange={handleTextChange}
                />
                <Button type='submit' isDisabled={btnDisabled}>Send</Button>
            </div>

            {msg && <div className='message'>{msg}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm