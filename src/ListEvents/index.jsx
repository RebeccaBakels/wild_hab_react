import React, { useState, useEffect } from 'react'
import { Col, Row, List } from 'antd';

const addToFavorites = (eventId) => {
    console.log('button clicked', eventId)
}
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
    
    <Row justify="space-around">
        <Col xs={24} sm={12}>
            <h1 style={{textAlign:"center"}}>Hello List Events</h1>
        </Col>
        </Row>
        <Row justify="space-around">
        <Col >
        <List
         dataSource={eventsList}
             renderItem={event => 
                <List.Item 
                key={event.id}
                actions={[<a key="add-to-favorites" onClick={addToFavorites.bind(undefined, event.id)}>add to favorites</a>]}
                >
                    {event.eventName || event.name}, {event.sport}, Duration: {event.eventDuration}
                </List.Item>
                }
        />
        </Col>
        </Row>
    
        </>
    )
}

export default ListEvents