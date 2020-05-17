import React, { useState, useEffect, Fragment } from 'react';
import moment from 'moment';
import { Header, Button, Container, Table, Segment, Icon, Image, Grid } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import InventoryProfileModal from './InventorylProfileModal';
import EmptySvg from '../../undraw_empty_xct9.svg';


const InventoryProfilePage = (props) => {

    const dispatch = useDispatch();

    const models = useSelector(state => state.models);
    const inventories = useSelector(state => state.inventories);

    const [data, setData] = useState();
    const [currentModel, setCurrentModel] = useState([]);

    useEffect(() => {
        if (inventories) {
            const inventoryData = inventories.find(item => parseInt(item.inventoryId) === parseInt(props.match.params.id));
            setData(inventoryData.data);
        }

        if (models) {
            const modelData = models.find(item => parseInt(item.inventoryId) === parseInt(props.match.params.id));
            setCurrentModel(modelData);
        }

    }, [props.match.params.id, inventories, models]);

    return <Container style={{ margin: 20, paddingRight: 20 }}>
        <Header as="h2" attached="top" style={{ display: 'flex', justifyContent: 'space-between' }}>
            {currentModel.name}
            <div floated="right">
                <InventoryProfileModal inventoryId={props.match.params.id} />
            </div>
        </Header>

        <Segment size="large">
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
                                {
                                    inventory && inventory.length > 0 && inventory.map((field, index) => (
                                        <Fragment key={index}>
                                            <Table.Cell>{typeof field.value === "object" ? moment(field.value).format('lll') : field.value}</Table.Cell>
                                        </Fragment>
                                    ))
                                }
                                <Table.Cell>
                                    <InventoryProfileModal inventoryId={props.match.params.id} inventoryModelIndex={index} inventoryModelData={inventory} />
                                    <Button onClick={() => dispatch({
                                        type: "DELETE_INVENTORY_BY_ID_FROM_INDEX", payload: {
                                            inventoryId: props.match.params.id,
                                            inventoryModelIndex: index
                                        }
                                    })}>
                                        <Icon name="delete" />
                                        Delete
                                    </Button>
                                </Table.Cell>
                            </Table.Row>
                        ))
                    }

                </Table.Body>
            </Table>
        </Segment>

        {
            data && data.length === 0 &&
            <Segment size="massive">
                <Grid centered columns="1">
                    <Image size="large" src={EmptySvg} />
                </Grid>
            </Segment>
        }
    </Container>
}

export default InventoryProfilePage;
