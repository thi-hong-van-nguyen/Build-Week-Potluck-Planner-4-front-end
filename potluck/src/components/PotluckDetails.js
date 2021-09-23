import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"

export default function PotluckDetails() {
    const { potluck_id } = useParams()
    const [potluck, setPotlcuk] = useState({})
    useEffect(() => {
        // request potluck details
    }, [potluck_id])

    if (!potluck) return null

    const { potluck_name, date, location, time, foods, guests } = potluck

    return (
        <div>
            
        </div>
    )
}
