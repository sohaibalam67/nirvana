import React, {Component} from 'react';
import Modal from 'react-native-modal';
import {View, Text, Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');

export default class SongOptionsModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Modal
        isVisible={this.props.songOptionsModalVisible}
        onBackdropPress={() => this.props.toggleSongOptionsModal(false)}
        onSwipeComplete={() => this.props.toggleSongOptionsModal(false)}
        backdropOpacity={0}
        swipeDirection={['down']}
        style={styles.bottomModal}>
        <View style={{backgroundColor: '#fff', height: height / 3}}>
          <Text>Option 1</Text>
          <Text>Option 2</Text>
          <Text>Option 3</Text>
          <Text>Option 4</Text>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});
