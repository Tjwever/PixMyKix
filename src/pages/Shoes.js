import Card from '../components/Card'
import './Shoes.css'
import { useEffect, useState } from 'react'

export default function Shoes() {
    const [shoes, setShoes] = useState()

    useEffect(() => {
        fetch('https://xinqi.dev:443/shoes?pagesize=60')
            .then((response) => response.json())
            .then((data) => {
                setShoes(data.data)
            })
    }, [])

    return (
        <>
            <h1 className='header'>List of all the shoes</h1>
            <div className='card-list'>
                {shoes
                    ? shoes.map((shoe) => {
                          return (
                              <Card
                                  key={shoe.id}
                                  brand={shoe.brand}
                                  model={shoe.model}
                                  pic={shoe.pic}
                              />
                          )
                      })
                    : null}
            </div>
        </>
    )
}
