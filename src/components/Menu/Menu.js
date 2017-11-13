import React from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { getMenus, getMenuThunk } from '../../actions/index';
import { StatusBar } from "react-native";
import { Container, List, ListItem, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";
class Menu extends React.Component {
  componentWillMount() {
    this.props.getMenuThunk()
  }
  componentDidMount() {
    console.log('didmount', this.props.menus)
  }
  render() {
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
            <Title>Github Menu List</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <List dataArray={this.props.menus}
            renderRow={(item) =>
            <ListItem>
              <Text>{item.name}</Text>
            </ListItem>}>
          </List>
        </Content>
      </Container>
    );
  }
}
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
