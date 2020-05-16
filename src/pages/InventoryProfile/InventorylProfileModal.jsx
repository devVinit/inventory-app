import React, { useState, useEffect } from 'react';
import { Button,  Icon,  Modal, Input, Form,  Segment } from 'semantic-ui-react';
import { Formik, FieldArray } from 'formik';
import { useSelector, useDispatch } from 'react-redux';

const InventoryProfileModal = (props) => {

    const dispatch = useDispatch(); 

    const models = useSelector(state => state.models);

    const [currentModel, setCurrentModel] = useState([]);

    useEffect(() => {
        if (models) {
            const modelData = models.find(item => parseInt(item.inventoryId) === parseInt(props.inventoryId));
            setCurrentModel(modelData);
        }
    }, [models, props.inventoryId]);

    const renderFormArray = ({ values, handleChange }, fieldArrayRenderProps) => {
        return <>
            {
                values.fields && values.fields.map((item, index) => (
                    <Segment key={index}>
                        <div >
                            <Form.Field>
                                <label>{currentModel.fields[index].name}</label>
                                <Input
                                    type={values.fields[index].dataType}
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

    return <Modal trigger={<Button><Icon name={!isNaN(props.inventoryModelIndex) ? `pencil alternate` : `add`} /> {!isNaN(props.inventoryModelIndex) ? 'Edit': 'Add'}</Button>}>
        <Modal.Header>{!isNaN(props.inventoryModelIndex) ? 'Edit': 'Add'} {currentModel.name}</Modal.Header>
        <Formik
            enableReinitialize
            initialValues={{
                fields: !isNaN(props.inventoryModelIndex) ? props.inventoryModelData  : currentModel.fields
            }}

            onSubmit={(values) => {
                const {inventoryId, inventoryModelIndex } = props;
                if (!isNaN(props.inventoryModelIndex)) {
                    dispatch({ type: "UPDATE_INVENTORY_BY_ID", payload: { values: values.fields, inventoryId, inventoryModelIndex} });
                } else {
                    dispatch({ type: "ADD_INVENTORY_BY_ID", payload: { values: values.fields, inventoryId } });
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