import React, { useState } from 'react';
import { Formik, FieldArray } from 'formik';
import { Header, Input, Form, Button, Select, Container, Table, Segment } from 'semantic-ui-react';
import { useSelector } from 'react-redux';


const ManageModelsPage = () => {

    const models = useSelector(state => state.models);

    const [data, setData] = useState();

    const renderFormArray = ({ values, handleChange, setFieldValue }, fieldArrayRenderProps) => {
        console.log(values);
        return <>
            <Form.Field>
                <Button type="button" onClick={() => {
                    fieldArrayRenderProps.insert(0, {
                        name: '',
                        description: '',
                        dataType: ''
                    });
                }}>
                    Add Field
                </Button>
            </Form.Field>

            {
                values.fields && values.fields.map((item, index) => (
                    <div key={index}>
                        <Form.Field>
                            <Button onClick={() => fieldArrayRenderProps.remove(index)}>
                                Remove
                            </Button>
                        </Form.Field>

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
                ))
            }
        </>
    }

    return <Container style={{ margin: 20, paddingRight: 20 }}>
        {console.log(models)}
        <Header as="h2" attached="top">
            Manage Models
            <div floated="right">
                <Button>Add</Button>
            </div>
        </Header>

        <Segment>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Creation Date</Table.HeaderCell>
                        <Table.HeaderCell>Actions</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>John Lilki</Table.Cell>
                        <Table.Cell>September 14, 2013</Table.Cell>
                        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                        <Table.Cell>No</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Jamie Harington</Table.Cell>
                        <Table.Cell>January 11, 2014</Table.Cell>
                        <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
                        <Table.Cell>Yes</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Jill Lewis</Table.Cell>
                        <Table.Cell>May 11, 2014</Table.Cell>
                        <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
                        <Table.Cell>Yes</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </Segment>


        {/* <Formik
            initialValues={{
                title: '',
                description: '',
                fields: []
            }}

            // validationSchema={Yup.object().shape({
            //   name: Yup.string().required('Required'),
            //   address: Yup.string().required('Required'),
            //   phone: Yup.number().required('Required'),
            //   occupation: Yup.string().required('Required'),
            // })}

            onSubmit={(values) => setData(values)}
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
                }) => (
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


                            <Form.Button type="submit" disabled={false}>
                                Submit
                            </Form.Button>
                        </Form>
                    )
            }
        </Formik> */}

        <div>
            Data Starts from here
            {
                data && data.fields.length > 0 && data.fields.map((item, index) => (
                    <Form.Field key={index}>
                        <Input
                            type={item.dataType}
                            name={item.name}
                            placeholder={item.name}
                        />
                    </Form.Field>
                ))
            }
        </div>
    </Container>
}

export default ManageModelsPage;
