import React from 'react'
import { StyleSheet,Text,View,Image } from 'react-native'
import { TextInput,Button } from 'react-native-paper';
const App=()=>{
  return(
    <View style={styles.Container}>
      <View style={{alignItems:'center'}}>
        <Image source={{uri:'https://www.instituteofexcellence.com/wp-content/uploads/LinkedIn-logo.png'}} 
        style={{width:50,height:50}}/>
        <Text style={{flex:0,marginBottom:100}}>Make the most of Proffesional life</Text>
      </View>
         <View >
            <TextInput style={styles.input}
                placeholder={"Example@gmail.com"} mode='outlined' label={'Email'}  />
            <TextInput style={styles.input1} placeholder= {"Password"}
            secureTextEntry
            mode='outlined' label={'Password'}  />
      <Button mode="contained" style={{margin:'5%'}}  
      onPress={()=>console.log('Pressed')}>
        Login 
      </Button>
            </View>
    </View>
  );
}
export default App;
const styles=StyleSheet.create({
Container:{
  flex:1,
  backgroundColor:'#f8f8f8',
  justifyContent:'center'
}  ,
input:{
  marginTop:20,
  margin:'5%'
},
input1:{
  marginTop:20,
  marginBottom:20,
  margin:'5%'
},
})
  
