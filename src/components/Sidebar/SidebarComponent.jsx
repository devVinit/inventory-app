import React, { useState } from 'react';
import { Header, Icon, Image, Menu, } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import './Sidebar.css';

const Nav = props => (
	<NavLink
		exact
		{...props}
		activeClassName="active"
	/>
);

const SidebarComponent = () => {
    const [visible, setVisible] = useState(true);
    const models = useSelector(state => state.models);

    return (
        <div className="side-bar">
            <Menu fluid vertical tabular>
                <Header as='h1' icon textAlign="center" style={{ padding: 20 }}>
                    <Icon name="settings" circular />
                    <p>Construction Machine Management Inc</p>
                </Header>
                <Menu.Item
                    to="/manage-models"
                    as={Nav}
                    name="Manage Models"
                />
                <div>
                    {
                        models && models.length > 0 && models.map((item, index) => (
                            <Menu.Item
                                as={Nav}
                                key={item.inventoryId}
                                name={item.name}
                                to={`/inventory-profile/${item.inventoryId}`}
                            />
                        ))
                    }
                </div>
            </Menu>
        </div>
    )
}

export default SidebarComponent;