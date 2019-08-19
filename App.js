import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';

export default class App extends React.Component{
  render(){
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.login}style={styles.button}>
          <Text>click to get for  backend</Text>
        </TouchableOpacity>
      </View>
    );
  }
  login = ()=>{
    //get data from php backend
    fetch('http:/192.168.0.1:19002/rn-second-app/backendconnect/conn.php',{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
    },
      body:JSON.stringify({
        key:'test',
      })//close body

    })//close fetch
   
    .then((response)=>response.json())
    .then((res)=>{
        alert(res.message);
    })//cose res
    .done();

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    padding:20,
    borderWidth:1,
  }
});
