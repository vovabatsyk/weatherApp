import React from 'react';

const Form = props => (
    <div>
        <form onSubmit={props.weatherMethod}>
            <input type="text" name="city" placeholder="enter the сity..." />
            <button>Show me</button>
        </form>
    </div>
)

export default Form;