import React, { useState, useEffect } from 'react'
import { Col, Row, List } from 'antd';
import {HeartOutlined, DeleteOutlined} from '@ant-design/icons'

const addToFavorites = (event, favoriteEvents, setFavoriteEvents) => {
    //check if item is already in favorites list before adding
    //iterate through favoriteEvents list
    //if event.id is equal to favorite.id
    //if not equal
    //do add
    const favoriteEventExists = favoriteEvents.some(favoriteEvent => event.id === favoriteEvent.id)
    return favoriteEventExists ? undefined : setFavoriteEvents(favorites => favorites.concat(event))
}

const removeFromFavorites = (favEvent, favoriteEvents, setFavoriteEvents) => {
    //get id to remove
    //iterate through array
    //find item that matches id 
    //remove from array
    const eventIndex = favoriteEvents.findIndex(event => event.id === favEvent.id)
    const updatedFavoriteEvents = [...favoriteEvents]
    updatedFavoriteEvents.splice(eventIndex, 1)
    setFavoriteEvents(updatedFavoriteEvents)
}

const ListEvents = () => {
    //store events in state
    const [eventsList, setEventsList] = useState([])
    const [favoriteEvents, setFavoriteEvents] = useState([])

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
    
    return(
    <>  
        <Row justify="space-around">
            <Col >
                <List
                header={<div>All Wild Habitat Events</div>}
                    dataSource={eventsList}
                    renderItem={event => 
                    <List.Item 
                        key={event.id}
                        actions={[<a key="add-to-favorites" onClick={() => addToFavorites(event, favoriteEvents, setFavoriteEvents)}><HeartOutlined /></a>]}
                        >
                        {event.eventName || event.name}, {event.sport}, Duration: {event.eventDuration}
                    </List.Item>
                    }
                />
            </Col>
            <Col>
               <List
               header={<div>Favorite Wild Habitat Events</div>}
               dataSource={favoriteEvents}
               renderItem={favEvent => 
            <List.Item
                key={favEvent.id}
                actions={[<a key="remove-from-favorites" onClick={() => removeFromFavorites(favEvent, favoriteEvents, setFavoriteEvents)}><DeleteOutlined /></a>]}
                >
            {favEvent.eventName || favEvent.name}, {favEvent.sport}, Duration: {favEvent.eventDuration}
            </List.Item>
               } 
               />     
            </Col>
        </Row>
    </>
)}

export default ListEvents