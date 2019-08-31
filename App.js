import React from 'react';
import { StyleSheet, Text, View } from 'react-native'; 
import CourseScreen from './screens/courseScreen' 
import  configureStore  from './redux/configureStore'
 
import {Provider} from 'react-redux'

 const store = configureStore();
export default class App extends React.Component {
 render (){   
  return (
    <Provider store={store}> 
    <View style={styles.container}>
      <CourseScreen  />
    </View>
    </Provider>
  ) 
 } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
