import React, { useState, useEffect } from 'react'

const ListEvents = () => {
    //store events in state
    const [eventsList, setEventsList] = useState([]) 

    useEffect(() => {
    //api call get events
    fetch("https://wildhab-api-a.web.app/events")
        .then(result => result.json())
        .then(data => setEventsList(data.data))
        .catch(error => console.log('error', error))
    }, [])
    

    // eventName: '',
    // sport: '',
    // eventDuration: 0
    //shape

    
    //display events
    console.log(eventsList)
    return(
        <>
    <div>Hello List Events</div>
    {eventsList && eventsList.map(event => 
        <p>{event.eventName || event.name}, {event.sport}, Duration: {event.eventDuration}</p>
        )}
    </>
    )
}

export default ListEvents