import React, { useEffect, useState } from 'react';

function EventsSection() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('./data/events.json')
            .then(res => res.json())
            .then(data => setEvents(data))
            .catch(err => console.error('Failed to load events:', err));
    }, []);

    const getCountdown = (dateStr) => {
        const eventDate = new Date(dateStr);
        const now = new Date();
        const diffTime = eventDate - now;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        if (diffDays > 0) return `${diffDays} days left`;
        else if (diffDays === 0) return 'Event is today!';
        else return 'Event passed';
    };

    return (
        <>
        <div>
            <h2 style={{textAlign: "center"}}>Upcoming Events</h2>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: "center" }}>
                {events.map(event => (
                    <div key={event.title} style={{
                        border: '1px solid #ddd',
                        width: '250px',
                        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                        borderRadius: '8px',
                        position: 'relative'
                    }}>
                        <img
                            src={event.thumbnail}
                            alt={event.title}
                            style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: '5px' }}
                        />
                        <div style={{padding: "10px"}}>
                        <h3>{event.title}</h3>
                        <p><strong>Date:</strong> {new Date(event.date).toDateString()}</p>
                        <p>{event.description}</p>
                        <p style={{ fontWeight: 'bold', color: '#e74c3c', marginTop: '8px' }}>
                            {getCountdown(event.date)}
                        </p>
                        <a
                            href={event.detailPage}
                            style={{
                                display: 'inline-block',
                                marginTop: '12px',
                                backgroundColor: '#3498db',
                                color: 'white',
                                padding: '7px 12px',
                                borderRadius: '5px',
                                textDecoration: 'none'
                            }}
                        >
                            Learn More
                        </a>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </>
    );
}

export default EventsSection;
