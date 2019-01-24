import React from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';

import ColorPanel from './colorPanel/ColorPanel';
import SidePanel from './sidePanel/SidePanel';
import Messages from './messages/Messages';
import MetaPanel from './metaPanel/MetaPanel';

const Chat = ({
  currentUser,
  currentChannel,
  isPrivateChannel,
  userMessages
}) => {
  return (
    <Grid columns="equal" className="app">
      <Grid.Column>
        <ColorPanel />
        <SidePanel
          key={currentUser && currentUser.id}
          currentUser={currentUser}
          currentChannel={currentChannel}
        />
      </Grid.Column>

      <Grid.Column>
        <Messages
          key={currentChannel && currentChannel.id}
          currentChannel={currentChannel}
          currentUser={currentUser}
          isPrivateChannel={isPrivateChannel}
        />
      </Grid.Column>

      <Grid.Column width={4}>
        <MetaPanel
          key={currentChannel && currentChannel.id}
          userMessages={userMessages}
          currentChannel={currentChannel}
          isPrivateChannel={isPrivateChannel}
        />
      </Grid.Column>
    </Grid>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  currentChannel: state.channel.currentChannel,
  isPrivateChannel: state.channel.isPrivateChannel,
  userMessages: state.channel.userMessages
});

export default connect(mapStateToProps)(Chat);
