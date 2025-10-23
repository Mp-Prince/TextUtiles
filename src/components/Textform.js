import React, { useState } from 'react'
import PropTypes from 'prop-types' // Add this import


export default function Textform(props) {

    const [text, settext] = useState("")

    const onChangeHanding = (event) => {
        settext(
            event.target.value
        );
    }

    const sup = () => {
        let newtext = text.toUpperCase();
        settext(newtext);
        props.showAlert('success',"The text has been SuperScroipt");
    }
    
    const sub = () => {
        let newtext = text.toLowerCase();
        settext(newtext);
        props.showAlert('success',"The text has been SubScript");
    }
    
    const Cap = () => {
        let newtext = text.split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
        settext(newtext);
        props.showAlert('success',"The text has been Capitalizied");
    }
    
    const Rev = () => {
        let newtext = text.split("").reverse().join("");
        settext(newtext);
        props.showAlert('success',"The text has been Reversed");
    }
    
    const Clean = () => {
        let newtext = '';
        settext(newtext);
        props.showAlert('success',"The text has been cleared");
    }

    return (
        <>
            {/* <div className="container my-3" data-bs-theme={`${props.mode}`}> */}
            <div className="container my-3" data-bs-theme={props.mode}>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.label}</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={text} onChange={onChangeHanding} placeholder='Type Hear'></textarea>
                </div>
                <button type="submit" className="btn btn-primary m-2" onClick={sup}>Conver to Superscript</button>
                <button type="submit" className="btn btn-primary m-2" onClick={sub}>Conver to Subscript</button>
                <button type="submit" className="btn btn-primary m-2" onClick={(Cap)}>Text Capitileze</button>
                <button type="submit" className="btn btn-primary m-2" onClick={Rev}>Revers </button>
                {/* <button type="submit" className="btn btn-primary m-2" onClick={cpcb}>Copyed to Clipboard </button> */}
                <button type="submit" className="btn btn-primary m-2" onClick={Clean}>Clear Text</button>
            </div>
            <div className="contariner my-3">
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} Words </p>
                <p>{text.length} Charactrets</p>
            </div>
        </>
    )
}

Textform.propsType = {
    mode: PropTypes.string
    // label : PropTypes.string
}

Textform.defaultProps = {
    mode: 'light'
    // lable : 'Enter text hear'
}

// export default Textform