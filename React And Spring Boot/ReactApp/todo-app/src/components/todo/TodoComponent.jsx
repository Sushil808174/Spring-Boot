import { useNavigate, useParams } from "react-router-dom";
import { retrieveTodoApi,updateTodoApi,createTodoApi } from "./api/TodoApiService";
import { useAuth } from "./security/AuthContext";
import { useEffect, useState } from "react";
import {Formik,Form,Field,ErrorMessage} from 'formik'
import moment from 'moment'

function TodoComponent(){

    const {id} =useParams();
    const authContext = useAuth();
    const username = authContext.username;
    const [description, setDesc] = useState('');
    const [targetDate, setTargetDate] = useState('');
    const navigate = useNavigate();

    useEffect(
        () => retrieveTodos(),[id]
    )

    function retrieveTodos(){
        if(id !== -1){
            retrieveTodoApi(username,id)
            .then(response => {
                setDesc(response.data.description);
                setTargetDate(response.data.targetDate)
            })
            .catch(error => console.log(error))
        }
    }
    function onsubmit(values){
        console.log(values)
        
        const todo = {
            id: id,
            username: username,
            description: values.description,
            targetDate: values.targetDate,
            done: false
        }

        console.log(todo)

        if(id===-1) {
            createTodoApi(username, todo)
            .then(response => {
                navigate('/list-todo')
            })
            .catch(error => console.log(error))
    
        } else {
            updateTodoApi(username, id, todo)
            .then(response => {
                navigate(`/list-todos`)
            })
            .catch(error => console.log(error))
        }
    }
    function validate(values){
        let error = {
            // description:'Enter a valid details',
            // targetDate:'Enter a valid Target date'
        }

        if(values.description.length<5){
            error.description = 'Enter a valid details'
        }
        if(values.targetDate==null || values.targetDate=='' || !moment(values.targetDate).isValid()){
            error.targetDate = 'Enter valid target date'
        }
        console.log(values)
        return error;
    }
    return(
        <div className="container">
            <h1>Enter todo details</h1>
            <div>
                <Formik initialValues={{description,targetDate}}
                    enableReinitialize={true}
                    onSubmit={onsubmit}
                    validate={validate}
                    validateOnBlur={false}
                    validateOnChange={false}
                >
                    {
                        (props) => (
                            <Form>
                                <ErrorMessage
                                    name="description"
                                    component="div"
                                    className="alert alert-warning"
                                />
                                <ErrorMessage
                                    name="targetDate"
                                    component="div"
                                    className="alert alert-warning"
                                />
                                <fieldset className="form-group">
                                    <label>Description</label>
                                    <Field type="text" className="form-control" name="description"/>
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Target Date</label>
                                    <Field type="date" className="form-control" name="targetDate"/>
                                </fieldset>
                                <div>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </div>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>
        
    )
}

export default TodoComponent;