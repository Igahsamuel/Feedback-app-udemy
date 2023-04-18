import {FaTimes, FaEdit} from "react-icons/fa"
import Card from "./shared/card"
// import PropTypes from 'prop-types'
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"

function FeedbackItem({item}){
    // const handleDelete = (id) => {  
    //     console.log(id)
    // }
    const {deleteItem, editFeedback} = useContext(FeedbackContext)
  return (
    <Card >
        <div className="num-display">{item.rating}</div>
        <button onClick = {() => deleteItem(item.id)} className="close"><FaTimes color = "purple"/></button>
        <button className="edit" onClick= {() => editFeedback(item)}><FaEdit color="purple"/></button>
        <div className="text-display">
            {item.text}
        </div>
    </Card>
  )
}

// FeedbackItem.propTypes = {
//         item: PropTypes.object.isRequired
// }

export default FeedbackItem