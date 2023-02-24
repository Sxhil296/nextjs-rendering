import { useRouter } from "next/router"
import { useState } from "react"

function eventList({ eventList }) {

    const [events, setEvents] = useState(eventList)
    const router = useRouter()

    const fetchSportsEvents = async() => {
        const response = await fetch(`http://localhost:4000/events?category=sports`)
        const data = await response.json()
        setEvents(data)
        router.push('/events?category=sports', undefined, {shallow: true})
    }

    return (
        <>
        <button onClick={fetchSportsEvents}>Sports Events</button>
         <h1>List of events</h1>
         {events.map(event => {
            return (
                <div key={event.id}>
                    <h2>{event.id} - {event.title} | {event.category}</h2>
                    <p>{event.description}</p>
                </div>
            )
         })}
        </>
    )
}

export default eventList

export async function getServerSideProps(context) {
    const {query} = context
    const {category} = query
    const queryString = category ? 'category=sports' : ''
    const response = await fetch(`http://localhost:4000/events?${queryString}`)
    const data = await response.json()

    return {
        props: {
            eventList: data,
        },
    }
}