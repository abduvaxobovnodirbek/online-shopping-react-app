import React from 'react'
import "../App.css"
export default function Title({name,title}) {
    return (
        <div className = "container text-center Title p-3">
            <span>{name}</span>
            <span>{title}</span>
        </div>
    )
}
