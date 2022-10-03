import { Link, useParams } from "react-router-dom"
import useFetch from "../useFetch"
import PropTypes from "prop-types"
import React from "react"

const FlightDetails = () => {
  const { id } = useParams()
  // data : flight -> Make "data" accessible with the variable "flight"
  const { data: flight, error, isPending } = useFetch(`http://localhost:6005/flights/${id}`)

  return (
        <div>
            {/* Conditional loading */}
            {isPending && <div>Loading flight data...</div>}
            {error && <div>{error}</div>}
            {flight &&
                <div>
                    <h2>Flight Details for Flight {id}:</h2>
                    <p>From {flight.start_name} to {flight.destination_name} by {flight.airlineName}</p>
                </div>
            }

            <Link to="/flights">Back</Link>
        </div>
  )
}

FlightDetails.propTypes = {
  flights: PropTypes.array,
}

export default FlightDetails
