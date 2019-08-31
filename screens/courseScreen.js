import React from 'react';
import { StyleSheet, Text, View , TextInput, Button } from 'react-native';  
import {connect} from 'react-redux' 
import * as courseActions  from '../redux/actions/coursesActions'

  class CourseScreen extends  React.Component{ 
    state = {
        course: {
          title: ""
        }
    };
      onTextChange = (event)=> { 
        const {text} = event.nativeEvent;
        const course = {...this.state.course,title:text } 

         
        this.setState({ course})
            console.log(course) ; 
        
      } 
      handelSubmit = ()=> 
      {  
          this.props.dispatch(courseActions.createCourse(this.state.course))
        alert(this.state.course.title); 
      }
     
      render(){ 
          return (<View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <TextInput  placeholder ="input " value={this.state.title}  onChange={this.onTextChange} />  
            <Button title="submit " onPress={this.handelSubmit}/>  
      { 
      console.log(this.props)      
      }
       
            { this.props.course.map(c=> ( 
               <Text  key={c.title} > 
                {c.title}
               </Text>    
            ))}  
          </View>
     ); 
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

      function mapStateToProps(state ){ 
        return { 
          course : state.course  
        }
      } 
 export default connect(mapStateToProps)(CourseScreen)