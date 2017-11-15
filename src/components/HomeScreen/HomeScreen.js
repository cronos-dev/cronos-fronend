// React
import React from "react";
// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// React Native Components
import { StatusBar, Text, View, StyleSheet } from "react-native";
// Native Base UI Components
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, Card, CardItem } from "native-base";
// Expo Components
import { BarCodeScanner, Permissions } from 'expo';
// Action (Redux)
import { restaurantScanned, orderStart } from '../../actions/index';
// Navigation
import Menu from '../Menu/index.js'

class HomeScreen extends React.Component {
  state = {
    hasCameraPermission: null,
  }
  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    console.log('cameraPermission', status)
    this.setState({hasCameraPermission: status === 'granted'});
  }

  render() {
    const { hasCameraPermission } = this.state;
    let qrComponent = null;
    if (hasCameraPermission === null) {
      qrComponent = <Text>Requesting for camera permission</Text>;
    } else if (hasCameraPermission === false) {
      qrComponent = <Text>No access to camera</Text>;
    } else {
      qrComponent = (
        <View style={{ flex: 1, height: 500}}>
          <BarCodeScanner
            onBarCodeRead={this._handleBarCodeRead}
            style={StyleSheet.absoluteFill}
          />
        </View>
      );
    }

    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Scan QR Code</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          { qrComponent }
          <View>
            <Button info style={{width: 100}}
              onPress={() => this._handleManualCodeRead(2)}>
              <Text style={{textAlign: 'center'}}> Restaurant 2 </Text>
            </Button>
            <Button warning style={{width: 100}}
              onPress={() => this._handleManualCodeRead(3)}>
              <Text style={{textAlign: 'center'}}> Restaurant 3 </Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
  
  _handleManualCodeRead = (restaurantId) => {
    this._handleBarCodeRead({type: '', data: restaurantId + ':2'});
  }

  _handleBarCodeRead = ({ type, data }) => {
    console.log('Bar code has been scanned!', data)
    let restaurantId = data.split(':')[0];
    let tableId = data.split(':')[1];
    this.props.restaurantScanned({
      restaurantId: restaurantId,
      tableId: tableId
    })
    this.props.orderStart();
    this.props.navigation.navigate("Menu")
  }
}


function mapStateToProps(state){
  return{};
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({
    restaurantScanned: restaurantScanned,
    orderStart: orderStart
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(HomeScreen);
