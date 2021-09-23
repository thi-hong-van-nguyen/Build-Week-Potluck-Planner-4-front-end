import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
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
    const [selectedFoods, setSelectedFoods] = useState([])

    const submit = ({ food }) => {
        axiosWithAuth().get(`/api/foods/${food}`)
            .then(res => {
                setSelectedFoods(res.data)
                if (selectedFoods.some(g => g === food)) {
                    setFoods([...foods, food])
                }
            }).catch(err => {
                console.log(err)
            })
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
            <ol>
                {
                    selectedFoods.map(guest => 
                        <li>{guest}</li>
                    )
                }
            </ol>
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
    potluck: state.potlucks.potluck
})

export default connect(mapStateToProps, { addFoods, postPotluck })(AddGuests)