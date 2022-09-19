import React from 'react'
import Navbar from './Navbar'
import Card from './Card'
import data from './data'

export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}  /*Use this instead of (id ={item.id}  
                                                  title={item.title} 
                                                  location={item.location} etc... */
            />
            
        )
    })
    return (
        <div className="container">
        
            <Navbar/>
            <section className="card--list">
                {cards}
            </section>
            
        </div>
    )
}