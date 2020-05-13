import React from 'react';
import {Field, reduxForm} from "redux-form";

const PostForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="post"/>
            </div>
            <div>
                <button onClick={props.addPost}>add post</button>
            </div>
        </form>
    );
};

export default reduxForm({
    form: 'post'
})(PostForm);