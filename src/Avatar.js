import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';
import assignDeep from 'object-assign-deep';
import AvatarUI from 'material-ui/Avatar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const defaultStyle = {
  container: {
    marginLeft: '1%',
    marginRight: '1%',
    order: 3,
  },
};

const muiTheme = getMuiTheme({
});

const Avatar = ({ styles, src }) => {
  const override = StyleSheet.create(assignDeep({}, defaultStyle, styles));

  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div className={css(override.container)}>
        <AvatarUI src={src} />
      </div>
    </MuiThemeProvider>
  );
};

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  styles: PropTypes.object,
};

export default Avatar;
