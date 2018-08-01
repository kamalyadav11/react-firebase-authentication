import React from 'react';
// import { Dimensions } from 'react-native';
import { ButtonCard, Card, CardSection, Input } from './Common'; 
//we are importing input where we define our textInput

// const { height, width } = Dimensions.get('window');

export default class LoginForm extends React.Component {
  state = {
    email: '',
    password: ''
  }; 

  render() {
    return (
        <Card>
          <CardSection>
            <Input
              placeholder={'user@gmail.com'}
              label='Email'
              value={this.state.email}
              onChangeText={email => this.setState({ email })} 
            />
          </CardSection>

          <CardSection>
            <Input 
              secureTextEntry
              placeholder={'password'}
              label={'Password'}
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
            />
          </CardSection>

          <CardSection>
            <ButtonCard>Login</ButtonCard> 
          </CardSection>
        </Card>
    );
  }
}
