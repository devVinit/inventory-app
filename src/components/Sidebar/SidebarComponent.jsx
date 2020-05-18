import React from 'react';
import { Header, Icon, Menu, } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Nav = props => (
    <NavLink
        exact
        {...props}
        activeClassName="active"
    />
);

const SidebarComponent = () => {

    const dispatch = useDispatch();

    const models = useSelector(state => state.models);

    return (
        <div className="side-bar">
            <Menu fluid vertical tabular>
                <Header icon textAlign="center" style={{ padding: 20 }}>
                    <Icon name="settings" circular />
                    <p>Construction Machine Management Inc</p>
                </Header>
                <Menu.Item
                    to="/manage-models"
                    as={Nav}
                    name="Manage Models"
                    onClick={() => dispatch({ type: 'TOGGLE_SIDEBAR', payload: false })}
                />
                <div>
                    {
                        models && models.length > 0 && models.map((item, index) => (
                            <Menu.Item
                                as={Nav}
                                key={item.inventoryId}
                                name={item.name}
                                onClick={() => dispatch({ type: 'TOGGLE_SIDEBAR', payload: false })}
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