import React, { useState, useEffect, Fragment } from 'react';
import { Formik, FieldArray } from 'formik';
import moment from 'moment';
import { Header, Input, Form, Button, Select, Container, Table, Segment, Icon, TableRow } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import InventoryProfileModal from './InventorylProfileModal';


const InventoryProfilePage = (props) => {

    const dispatch = useDispatch();

    const models = useSelector(state => state.models);
    const inventories = useSelector(state => state.inventories);

    const [data, setData] = useState([]);
    const [currentModel, setCurrentModel] = useState([]);

    useEffect(() => {
        if (inventories) {
            const inventoryData = inventories.find(item => item.inventoryId == props.match.params.id);
            console.log(inventoryData);
            setData(inventoryData.data);
        }

        if (models) {
            const modelData = models.find(item => item.inventoryId == props.match.params.id);
            console.log(modelData);
            setCurrentModel(modelData);
        }

    }, [props.match.params.id]);

    return <Container style={{ margin: 20, paddingRight: 20 }}>
        <Header as="h2" attached="top" style={{ display: 'flex', justifyContent: 'space-between' }}>
            {currentModel.name}
            <div floated="right">
                <InventoryProfileModal inventoryId={props.match.params.id} />
            </div>
        </Header>

        <Segment>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        {
                            currentModel && currentModel.fields && currentModel.fields.length > 0 && currentModel.fields.map((field, index) => (
                                <Fragment key={index}>
                                    <Table.HeaderCell>{field.name}</Table.HeaderCell>
                                </Fragment>
                            ))
                        }
                        <Table.HeaderCell>
                            Actions
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>

                    {
                        data && data.length > 0 && data.map((inventory, index) => (
                            <Table.Row key={index}>
                                {/* {JSON.stringify(inventory)} */}
                                {
                                    inventory && inventory.length > 0 && inventory.map((field, index) => (
                                        <Fragment key={index}>
                                            <Table.Cell>{field.value}</Table.Cell>
                                        </Fragment>
                                    ))
                                }
                                <Table.Cell>
                                    <InventoryProfileModal inventoryId={props.match.params.id} inventoryModelIndex={index} inventoryModelData={inventory}/>
                                    <Button onClick={() => dispatch({ type: "DELETE_INVENTORY_BY_ID_FROM_INDEX", payload: {
                                        inventoryId: props.match.params.id,
                                        inventoryModelIndex: index
                                    }})}>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        </Segment>
    </Container>
}

export default InventoryProfilePage;
