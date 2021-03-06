/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React, { useState } from 'react';


import {
  StyleSheet,
  View,
  Text,


} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



class surveyPage extends React.Component{


  render(){
    console.log(this.props.route.params.date)
    
    return (
      <View>
                    <View style={styles.titlecontainer}>
              <Text style={styles.title}>Successful!</Text>
            </View>

      
            <Text style={styles.info}>Survey entry has been saved as below</Text>

      <View style={styles.questionContainer}>
      

      <Text style={styles.question}> Name: {this.props.route.params.name}</Text>
      <Text style={styles.question}> Surname: {this.props.route.params.surname}</Text>
      <Text style={styles.question}> Birth Date: {this.props.route.params.date}</Text>
      <Text style={styles.question}> City: {this.props.route.params.city}</Text>
      <Text style={styles.question}> Gender: {this.props.route.params.gender}</Text>
      <Text style={styles.question}> Vaccine Type: {this.props.route.params.vaccinetype}</Text>
      <Text style={styles.question}> Side Effect(s): {this.props.route.params.sideeffect}</Text>
      </View>

      



    </View>

      
);

  }


}

const styles = StyleSheet.create({
  titlecontainer: {
    marginVertical: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: Colors.black,
    textAlign: 'center',
    fontFamily: 'Cochin',
  },
  info: {
    fontSize: 20,
    fontWeight: '500',
    color: Colors.black,
    textAlign: 'center',
    fontFamily: 'Cochin',
  },
  questionContainer: {
    margin: 5,
    borderRadius: 10,
    padding: 15,
    backgroundColor: "#dee0e0",
  },
  question: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.black,
    fontFamily: 'Cochin',
  },
  textinput: {
    height: 40,
    borderBottomWidth: 1,
    borderColor: "#018786",

  },


  button: {
    marginHorizontal: 120,
    marginVertical: 10,
    alignItems: "center",
    backgroundColor: "#007aff",
    padding: 10,


    borderRadius: 20,
  },
  scrollView: {
    backgroundColor: "#ededed",
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.black,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});


export default surveyPage;

