import React, { useState } from 'react'
import Form from './Form'
import foodSchema from "../validations/FoodSchema"
import { connect } from 'react-redux'
import { addFoods, postPotluck } from '../actions'

const initialState = {
    food: ""
}

function AddGuests(props) {
    const { potluck, postPotluck, addFoods } = props
    const [foods, setFoods] = useState([])

    const submit = ({ food }) => {
        setFoods([...foods, food])
    }
    
    const finalSubmit = () => {
        addFoods(foods)
        postPotluck(potluck)
    }

    return (
        <div>
            <ul>
                {
                    foods.map(guest => 
                        <li>{guest}</li>    
                    )
                }
            </ul>
            <Form
                initialState={initialState}
                submit={submit}
                schema={foodSchema}
            />
            <button onClick={finalSubmit}>
                Submit All Info
            </button>
        </div>
    )
}

const mapStateToProps = state => ({
    potluck: state.potlucks.potluckPayload
})

export default connect(mapStateToProps, { addFoods, postPotluck })(AddGuests)