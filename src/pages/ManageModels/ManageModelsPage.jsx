import React from 'react';
import moment from 'moment';
import { Header,  Container, Table, Segment } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import ManageModelModal from './ManageModelModal';


const ManageModelsPage = () => {

    const models = useSelector(state => state.models);

    return <Container style={{ margin: 20, paddingRight: 20 }}>
        <Header as="h2" attached="top" style={{ display: 'flex', justifyContent: 'space-between' }}>
            Manage Models
            <div floated="right">
                <ManageModelModal />
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
                    {
                        models && models.length > 0 && models.map((item, index) => (
                            <Table.Row key={index}>
                                <Table.Cell>{item.name}</Table.Cell>
                                <Table.Cell>{moment(item.creationDate).format('lll')}</Table.Cell>
                                <Table.Cell>
                                    <ManageModelModal data={item}/>
                                </Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        </Segment>
    </Container>
}

export default ManageModelsPage;
