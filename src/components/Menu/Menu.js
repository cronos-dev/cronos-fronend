// React
import React from "react";
// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Redux Thunk
import { getMenus, getMenuThunk } from '../../actions/index';
// React Native Components
import { StatusBar } from "react-native";
// Native Base UI Components
import { Container, List, ListItem, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";
class Menu extends React.Component {
  componentWillMount() {
    this.props.getMenuThunk()
  }

  render() {
    if (this.props.menus.hasError) {
      return (
        <Container style={{ backgroundColor: '#FFF' }}>
          <Content style={{paddingTop: 20}}>
            <Text style={{textAlign: 'center'}}>Please go back to Home and scan any restaurant's QR code</Text>
          </Content>
        </Container>
      )
    }
    return (
      <Container style={{ backgroundColor: '#FFF' }}>
        <Content>
          <List 
            dataArray={this.props.menus.menus}
            renderRow={(item) =>
            <ListItem icon>
              <Left>
                <Icon name="pizza" style={{ color: 'grey'}}/>
              </Left>
              <Body>
                <Text>{item.name}</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

Menu.navigationOptions = ({ navigation }) => ({
  header: (
    <Header>
      <Left>
        <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>Menu</Title>
      </Body>
      <Right />
    </Header>
  )
});


function mapStateToProps(state){
  return{
    menus : state.menus
  };
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({
    getMenus: getMenus,
    getMenuThunk: getMenuThunk
  }, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(Menu);
