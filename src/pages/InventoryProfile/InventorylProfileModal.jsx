import React, { useState, useEffect } from 'react';
import { Button, Header, Icon, Image, Modal, Input, Form, Select, Segment, Grid } from 'semantic-ui-react';
import { Formik, FieldArray } from 'formik';
import { useSelector, useDispatch } from 'react-redux';

const InventoryProfileModal = (props) => {

    const dispatch = useDispatch(); 

    const models = useSelector(state => state.models);
    const inventories = useSelector(state => state.inventoryId);

    const [currentModel, setCurrentModel] = useState([]);

    useEffect(() => {
        if (models) {
            const modelData = models.find(item => item.inventoryId == props.inventoryId);
            setCurrentModel(modelData);
        }
    }, []);

    const renderFormArray = ({ values, handleChange, setFieldValue }, fieldArrayRenderProps) => {
        return <>
            {
                values.fields && values.fields.map((item, index) => (
                    <Segment key={index}>
                        <div >
                            <Form.Field>
                                <label>{currentModel.fields[index].name}</label>
                                <Input
                                    name={`fields.${index}.value`}
                                    placeholder='Name'
                                    value={values.fields[index].value}
                                    onChange={handleChange}
                                />
                            </Form.Field>

                        </div>
                    </Segment>
                ))
            }
        </>
    }

    return <Modal trigger={<Button>{!isNaN(props.inventoryModelIndex) ? 'Edit': 'Add'}</Button>}>
        <Modal.Header>{!isNaN(props.inventoryModelIndex) ? 'Edit': 'Add'} {currentModel.name}</Modal.Header>
        <Formik
            enableReinitialize
            initialValues={{
                fields: !isNaN(props.inventoryModelIndex) ? props.inventoryModelData  : currentModel.fields
            }}

            onSubmit={(values) => {
                if (!isNaN(props.inventoryModelIndex)) {
                    const {inventoryId, inventoryModelIndex } = props;
                    dispatch({ type: "UPDATE_INVENTORY_BY_ID", payload: { values: values.fields, inventoryId, inventoryModelIndex} });
                } else {
                    dispatch({ type: "ADD_INVENTORY_BY_ID", payload: { values: values.fields, inventoryId: props.inventoryId} });
                }
            }}
        >
            {
                ({
                    values,
                    touched,
                    errors,
                    dirty,
                    isSubmitting,
                    handleChange,
                    setFieldValue,
                    handleBlur,
                    handleSubmit,
                    handleReset
                }) =>
                    (<>
                        <Modal.Content>
                            <Form onSubmit={handleSubmit}>
                                <Modal.Description>
                                    <FieldArray name="fields">
                                        {(fieldArrayRenderProps) => renderFormArray({ values, handleChange, setFieldValue }, fieldArrayRenderProps)}
                                    </FieldArray>
                                </Modal.Description>
                                <Modal.Actions>
                                    <Form.Button fluid type="submit" disabled={false}>
                                        Proceed <Icon name="chevron right" />
                                    </Form.Button>
                                </Modal.Actions>
                            </Form>
                        </Modal.Content>
                    </>)
            }
        </Formik>
    </Modal>

}

export default InventoryProfileModal;