import {motion, AnimatePresence} from 'framer-motion'
import { useContext } from 'react'
// import PropTypes from 'prop-types'
import FeedbackItem from "./FeedbackItem"
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList() {
    const {feedback} = useContext(FeedbackContext)
    if(!feedback || feedback.length === 0){
        return <p>NO feed back yet</p>
    }
    // console.log(feedback)
    
    return (
        <div className="feedback-list">
            <AnimatePresence>
            {/* use the props to map through each item */}
           {feedback.map((item) => (
            <motion.div 
            key = {item.id}
            initial= {{opacity: 0}}
            animate = {{opacity: 1}}
            exit= {{opacity: 0}}
            >
           <FeedbackItem key = {item.id} item={item} />
           </motion.div>
           ))}
           </AnimatePresence>
        </div>
      )

//   return (
//     <div className="feedback-list">
//         {/* use the props to map through each item */}
//        {feedback.map((item) => (
//        <FeedbackItem key = {item.id} item={item} handleDelete = {handleDelete}/>
//        ))}
//     </div>
//   )
}


export default FeedbackList