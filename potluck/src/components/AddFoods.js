import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Form from './helpers/Form'
import foodSchema from "../validations/FoodSchema"
import { connect } from 'react-redux'
import { addFoods, postPotluck } from '../actions'

const initialState = {
    food: ""
}

function AddGuests(props) {
    const { potluck, postPotluck, addFoods } = props
    const [foods, setFoods] = useState([])
    const { push } = useHistory()

    const submit = ({ food }) => {
        setFoods([...foods, food])
    }

    const finalSubmit = () => {
        addFoods(foods)
        postPotluck(potluck)
        push('/potlucks')
    }

    return (
        <div className='add-foods-wrapper'>
            <div className='foods-list'>
                <h1>Foods List:</h1>
                <ul>
                    {
                        foods.map(guest =>
                            <li>{guest}</li>
                        )
                    }
                </ul>
            </div>

            <Form
                initialState={initialState}
                submit={submit}
                schema={foodSchema}
            />
            <button className='submit-potluck' onClick={finalSubmit}>
                Submit All Info
            </button>
        </div>
    )
}

const mapStateToProps = state => ({
    potluck: state.potlucks.potluckPayload
})

export default connect(mapStateToProps, { addFoods, postPotluck })(AddGuests)