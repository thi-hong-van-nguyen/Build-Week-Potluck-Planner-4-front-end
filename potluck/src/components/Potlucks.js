import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getPotlucks } from '../actions';
import Potluck from './Potluck';

function Potlucks(props) {
    useEffect(() => {
        props.getPotlucks();
    }, [])

    return (
        <div>
            <h1>Potlucks list</h1>
            <div style={{display: 'flex'}}>
                {props.potlucks.map(item => {
                    return (<Potluck potluck={item} key={item.id} />)
                })}
            </div>
        </div>
    )
};

const mapStateToProps = state => ({ potlucks: state.potlucks.potlucks });

export default connect(mapStateToProps, { getPotlucks })(Potlucks);