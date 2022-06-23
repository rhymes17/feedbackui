import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {

    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This item is from context',
            rating : 10
        },
        {
            id: 2,
            text: 'This item is context',
            rating : 6
        },
        {
            id: 3,
            text: 'This from context',
            rating : 4
        },
        {
            id: 4,
            text: 'This item from context',
            rating : 7
        },
    ])
 
    const [feedbackEdit, setFeedbackEdit] = useState({
      item : {},
      edit: false
    })

    const editFeedback = (item) => {
      setFeedbackEdit({
        item,
        edit : true
      })
    }   
    
    const updateFeedback = (id, updItem) => {
      setFeedback(feedback.map((item) => item.id === id ? {
        ...item, ...updItem } : item
      ))
    }

    const addFeedback = (item) => {
        item.id = uuidv4();
        setFeedback([item, ...feedback])
        
      }

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete this item ?')){
          setFeedback(feedback.filter((item) => item.id !== id))
        }
      }

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
        feedbackEdit,
        editFeedback,
        updateFeedback
    }}>
        { children }
    </FeedbackContext.Provider>
}

export default FeedbackContext