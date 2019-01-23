import React, { Component } from 'react';
import { Header, Segment, Input } from 'semantic-ui-react';

class MessagesHeader extends Component {
  render() {
    const {
      channelName,
      numUniqueUsers,
      handleSearchChange,
      searchLoading
    } = this.props;

    return (
      <Segment clearing>
        <Header fluid="true" as="h2" floated="left">
          <span>{channelName}</span>

          <Header.Subheader>{numUniqueUsers}</Header.Subheader>
        </Header>

        <Header floated="right">
          <Input
            name="search"
            size="mini"
            icon="search"
            placeholder="Search Messages"
            loading={searchLoading}
            onChange={handleSearchChange}
          />
        </Header>
      </Segment>
    );
  }
}

export default MessagesHeader;
