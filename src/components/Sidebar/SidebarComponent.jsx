import React, { useState } from 'react';
import { Header, Icon, Image, Menu, } from 'semantic-ui-react';
import './Sidebar.css';

const SidebarComponent = () => {
    const [visible, setVisible] = useState(true)

    return (
        <div className="side-bar">
            <Menu fluid vertical tabular>
                <Header as='h1' icon textAlign="center" style={{ padding: 20 }}>
                    <Icon name="settings" circular />
                    {/* <Header.Content as="h2">Construction Machine Management Inc</Header.Content> */}
                </Header>
                <Menu.Item
                    name="Manage Models"
                    active={true}
                />
            </Menu>
        </div>
    )
}

export default SidebarComponent;