import React, { useState } from 'react';
import { Header, Icon, Image, Menu, } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const SidebarComponent = () => {
    const [visible, setVisible] = useState(true);
    const models = useSelector(state => state.models);

    return (
        <div className="side-bar">
            <Menu fluid vertical tabular>
                <Header as='h1' icon textAlign="center" style={{ padding: 20 }}>
                    <Icon name="settings" circular />
                    <Header.Content as="h2">Construction Machine Management Inc</Header.Content>
                </Header>
                <Link to="/manage-models">
                    <Menu.Item
                        name="Manage Models"
                        active={true}
                    />
                </Link>
                <div>
                    {
                        models && models.length > 0 && models.map((item, index) => (
                            <Link to={`/inventory-profile/${item.inventoryId}`}>
                                <Menu.Item
                                    key={item.inventoryId}
                                    name={item.name}
                                    active={false}
                                />
                            </Link>
                        ))
                    }
                </div>
            </Menu>
        </div>
    )
}

export default SidebarComponent;