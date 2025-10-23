import React from 'react'

export default function Alert(props) {
    return (
      props.alert && <div>
        <div className="alert alert-success" role="alert">
            {/* A simple success alert—check it out! */}
            {props.alert.type} :
            {props.alert.message}

        </div>
    </div >
  )
}
