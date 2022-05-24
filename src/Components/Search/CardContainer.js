import React from 'react'
import './search.css'

export default function CardContainer({ data }) {
    return (
        <div className="body">
            {data && data.image && data.image.medium ?   <img src={data.image.medium  } className="card-img" alt={data.name} />: <h6>Data not found</h6>}
            {/* <img src={data.image.medium} className="card-img" alt={data.name} /> */}
            <span className="toolTip">
                Tittle:{data.name}<br />
                Language:{data.language}<br />
                Genre:{data.genres.map(item => " " + item + "|")}<br />
                Ratings:{data.rating.average}<br />
                Duration:{data.runtime}minutes<br />
                Release Date:{data.premiered}
            </span>
        </div>
    )
}
