import React from 'react';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import {TextArea} from "../../../common/FormsControl/FormsControl";

const maxLength10 = maxLengthCreator(10);

const PostForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={TextArea}
                       name="post"
                       validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>add post</button>
            </div>
        </form>
    );
};

export default reduxForm({
    form: 'post'
})(PostForm);