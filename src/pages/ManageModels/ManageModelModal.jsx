import _ from 'lodash';
import React from 'react';
import { Button, Header, Icon, Image, Modal, Input, Form, Select, Segment, Grid } from 'semantic-ui-react';
import { Formik, FieldArray } from 'formik';

const ManageModelModal = () => {

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
                                    placeholder='Name'
                                    values={values.fields[index].name}
                                    onChange={handleChange}
                                />
                            </Form.Field>

                            <Form.Field>
                                <label>Description</label>
                                <Input
                                    name={`fields.${index}.description`}
                                    placeholder='Description'
                                    values={values.fields[index].descripiton}
                                    onChange={handleChange}
                                />
                            </Form.Field>

                            <Form.Field>
                                <label>Data Type</label>
                                <Select
                                    name={`fields.${index}.dataType`}
                                    onChange={(value, event) => setFieldValue(`fields.${index}.dataType`, event.value)}
                                    placeholder='Select DataType'
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

    return <Modal trigger={<Button>Add</Button>}>
        <Modal.Header>Model</Modal.Header>
        <Formik
            initialValues={{
                title: '',
                description: '',
                fields: []
            }}

            onSubmit={(values) => console.log(values)}
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
                        <Modal.Content image scrolling>
                            <Modal.Description>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Field>
                                        <label>Name</label>
                                        <Input
                                            name="name"
                                            placeholder='Name'
                                            values={values.name}
                                            onChange={handleChange}
                                        />
                                    </Form.Field>

                                    <Form.Field>
                                        <label>Description</label>
                                        <Input
                                            name="description"
                                            placeholder='Description'
                                            values={values.description}
                                            onChange={handleChange}
                                        />
                                    </Form.Field>

                                    <FieldArray name="fields">
                                        {(fieldArrayRenderProps) => renderFormArray({ values, handleChange, setFieldValue }, fieldArrayRenderProps)}
                                    </FieldArray>
                                </Form>
                            </Modal.Description>
                        </Modal.Content>
                        <Modal.Actions>
                            <Form.Button type="submit" disabled={false}>
                            Proceed <Icon name="chevron right" />
                            </Form.Button>
                        </Modal.Actions>
                    </>)
            }
        </Formik>
    </Modal>

}

export default ManageModelModal;