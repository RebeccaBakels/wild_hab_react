import React, {useEffect, useState} from 'react'
import { submitForm } from './apiCalls'

const showSuccess = (responseMessage) => {
    return(
        alert(responseMessage)
    )
}

const WildHabEventForm = () => {
const [formValues, setFormValues] = useState({
    eventName: '',
    sport: '',
    eventDuration: 0
})
const [responseMessage, setResponseMessage] = useState(undefined)

console.log('response message', responseMessage)

useEffect(() => {
    if(responseMessage !== undefined) {
        showSuccess(responseMessage)
    }
    return () => {setResponseMessage(undefined)}
}, [responseMessage])

        return(
            <>
            <h1>Create Wild Habitat Event</h1>
        <form onSubmit={(event) => submitForm(event, formValues, setResponseMessage)}>
        <label>
            Event Name:&nbsp;
            </label>
        <input 
            name="eventName"
            type="text"
            value={formValues.eventName}
            onChange={e => setFormValues({...formValues, eventName: e.target.value})} />
            <br/>
        <label>
            Sport:&nbsp;
        </label>
            <input 
            name="sport"
            type="text"
            value={formValues.sport}
            onChange={e => setFormValues({...formValues, sport: e.target.value})} />
            <br/>
        <label>
            Event Duration:&nbsp;
        </label>
            <input 
            name="eventDuration"
            type="number"
            value={formValues.eventDuration}
            onChange={e => setFormValues({...formValues, eventDuration: e.target.value})} />
            <br/>
            <button type="submit">Submit</button>
        </form>
            </>
        )
    
}

export default WildHabEventForm





//creat a form
//get form values
//store the from values in state
//get form values from state
//submit form values to wildhab endpoint
//return message if data is submitted successfully or not