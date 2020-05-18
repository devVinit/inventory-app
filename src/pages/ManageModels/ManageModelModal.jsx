import React, { useState } from 'react';
import { Button, Icon, Modal, Input, Form, Select, Segment, Responsive } from 'semantic-ui-react';
import { Formik, FieldArray } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

const ManageModelModal = (props) => {

    const dispatch = useDispatch();
    const newInventoryId = useSelector(state => state.models.length);

    const [isShowModal, setIsShowModal] = useState();

    const renderFormArray = ({ values, handleChange, setFieldValue }, fieldArrayRenderProps) => {
        return <>
            <Button type="button" onClick={() => {
                fieldArrayRenderProps.insert(0, {
                    name: '',
                    description: '',
                    dataType: ''
                });
            }} fluid>
                <Icon name="add" />
                    Add Field
                </Button>
            {
                values.fields && values.fields.map((item, index) => (
                    <Segment key={index}>
                        <div >
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <h3>Field {index + 1}</h3>
                                <Button onClick={() => fieldArrayRenderProps.remove(index)}>
                                    Remove
                            </Button>
                            </div>

                            <Form.Field>
                                <label>Name</label>
                                <Input
                                    name={`fields.${index}.name`}
                                    placeholder="Name"
                                    value={values.fields[index].name}
                                    onChange={handleChange}
                                />
                            </Form.Field>

                            <Form.Field>
                                <label>Description</label>
                                <Input
                                    name={`fields.${index}.description`}
                                    placeholder="Description"
                                    value={values.fields[index].description}
                                    onChange={handleChange}
                                />
                            </Form.Field>

                            <Form.Field>
                                <label>Data Type</label>
                                <Select
                                    name={`fields.${index}.dataType`}
                                    onChange={(value, event) => setFieldValue(`fields.${index}.dataType`, event.value)}
                                    placeholder='Select DataType'
                                    value={values.fields[index].dataType}
                                    options={[
                                        {
                                            key: 'text',
                                            value: 'text',
                                            text: 'Text'
                                        },
                                        {
                                            key: 'number',
                                            value: 'number',
                                            text: 'Number'
                                        },
                                        {
                                            key: 'date',
                                            value: 'date',
                                            text: 'date'
                                        }
                                    ]}
                                />
                            </Form.Field>
                        </div>
                    </Segment>
                ))
            }
        </>
    }

    return <Modal
            trigger={<Button 
                onClick={() => setIsShowModal(true)}>
                    <Icon name={props.data ? `eye` : `add`} />
                    <Responsive minWidth={768} style={{ display: 'inline-block' }}>
                        {props.data ? `View` : `Add`}
                    </Responsive>
                </Button>}
            open={isShowModal}
            closeIcon
            onClose={() => setIsShowModal(false)}
        >
        <Modal.Header>Model</Modal.Header>
        <Formik
            enableReinitialize
            initialValues={props.data || {
                title: '',
                description: '',
                fields: []
            }}

            onSubmit={(values) => {
                dispatch({ type: "ADD_MODEL", payload: values });
                dispatch({
                    type: "ADD_INVENTORY", payload: {
                        inventoryId: newInventoryId,
                        data: []
                    }
                });
                setIsShowModal(false);
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
                                <fieldset disabled={props.data} style={{ border: 0 }}>
                                    <Modal.Description>
                                        <Form.Field>
                                            <label>Name</label>
                                            <Input
                                                name="name"
                                                placeholder="Name"
                                                value={values.name}
                                                onChange={handleChange}
                                            />
                                        </Form.Field>

                                        <Form.Field>
                                            <label>Description</label>
                                            <Input
                                                name="description"
                                                placeholder="Description"
                                                value={values.description}
                                                onChange={handleChange}
                                            />
                                        </Form.Field>

                                        <FieldArray name="fields">
                                            {(fieldArrayRenderProps) => renderFormArray({ values, handleChange, setFieldValue }, fieldArrayRenderProps)}
                                        </FieldArray>
                                    </Modal.Description>
                                    <Modal.Actions style={{ marginTop: 10 }}>
                                        <Form.Button fluid type="submit" disabled={false}>
                                            Proceed <Icon name="chevron right" />
                                        </Form.Button>
                                    </Modal.Actions>
                                </fieldset>
                            </Form>
                        </Modal.Content>
                    </>)
            }
        </Formik>
    </Modal>

}

export default ManageModelModal;