import { createContext, useState } from "react";
import {v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
        id: 1,
        text: 'This is from the item 1',
        rating: 10,
        },
        {
        id: 2,
        text: 'This is from the item 2',
        rating: 9,
        },
        {
        id: 3,
        text: 'This is from the item 3',
        rating: 8,
        },
])

const  [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false    
})
    

    const addFeedBack = (newFeedBack)  => {
    newFeedBack.id = uuidv4()
    setFeedback([newFeedBack, ...feedback])
  }
    const deleteItem = (id) => {
    if(window.confirm('Are you sure you want to delete')){
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  } 

//   edit feedback item
  const editFeedback = (item) => {
    setFeedbackEdit({
        item,
        edit: true
    })
  }
  // update feedback
  const updateFeedback = (id, updFeed) => {
    setFeedback(feedback.map((item) => item.id === id ? {...item, ...updFeed} : item))
  }

    return  <FeedbackContext.Provider value = {{
        feedback,
        deleteItem,
        addFeedBack,
        editFeedback,
        feedbackEdit,
        updateFeedback,
    }}>{children}</FeedbackContext.Provider> 
}

export default FeedbackContext