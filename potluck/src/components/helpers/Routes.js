import React from 'react'
import NavLink from './NavLink'
import { connect } from "react-redux"

const privateRoutes = ["Log_out", "View_Potlucks", "Create_Potluck"]
const routes = ["Sign_up", "Log_in"]

function Routes(props) {
    const { isLogin } = props
    return (
        <>
            {isLogin ?
                privateRoutes.map(route => 
                    <NavLink route={route}/>
                )
            :
                routes.map(route => 
                    <NavLink route={route}/>
                )
            }
        </>
    )
}

const mapStateToProps = state => ({
    isLogin: state.login.isLogin
});

export default connect(mapStateToProps)(Routes)
