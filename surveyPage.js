import React, { useState } from 'react';
import DatePicker from 'react-native-date-picker';
import RNPickerSelect from 'react-native-picker-select';
import { SafeAreaProvider } from 'react-native-safe-area-context';


import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TextInput,
  Alert,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,

} from 'react-native';


class surveyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      surname: '',
      date: new Date(),
      gender: null,
      city: null,
      vaccineType: null,
      sideEffect: '',
      buttonShow: false,
    };
  }


  check = () => {
    console.log(this.state)
    if(this.state.name !== '' &&
      this.state.surname !== ''  &&
      this.state.date.getFullYear() !== 2021 &&
      this.state.gender !== null &&
      this.state.city !== null &&
      this.state.vaccineType !== null &&
      this.state.sideEffect !== ''){
        this.setState({ buttonShow: true });
      }
      else{
        this.setState({ buttonShow: false });
      }
  };

  sendButton = () => {
    this.props.navigation.navigate('Success Page',{name : this.state.name,
                                                  surname: this.state.surname,
                                                  date: this.state.date.getDate() + '/' + (this.state.date.getMonth()+1) +'/'+this.state.date.getFullYear(),
                                                  gender: this.state.gender,
                                                  city: this.state.city,
                                                  vaccinetype: this.state.vaccineType,
                                                  sideeffect: this.state.sideEffect})
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.name !== this.state.name ||
      prevState.surname !== this.state.surname ||
      prevState.date !== this.state.date ||
      prevState.gender !== this.state.gender ||
      prevState.city !== this.state.city ||
      prevState.vaccineType !== this.state.vaccineType ||
      prevState.sideEffect !== this.state.sideEffect) {
      this.check();
      console.log(this.state.date.getDate())
    }
  
  }



  render() {
    return (

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >


        <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={styles.titlecontainer}>
              <Text style={styles.title}>Covid-19 Vaccine Survey</Text>
            </View>

            <View style={styles.questionContainer}>

              <Text style={styles.question}>Name</Text>


              <TextInput
                style={styles.textinput}
                placeholder="Enter your name..."
                onChangeText={name => this.setState({ name: name })}
                defaultValue={this.state.name}
              />
            </View>

            <View style={styles.questionContainer}>
              <Text style={styles.question}>Surname</Text>
              <TextInput
                style={styles.textinput}
                placeholder="Enter your surname..."
                onChangeText={surname => this.setState({ surname: surname })}
                defaultValue={this.state.surname}
              />
            </View>

            <View style={styles.questionContainer}>
              <Text style={styles.question}>Birth Date</Text>
              <DatePicker
                date={this.state.date}
                onDateChange={date => this.setState({ date: date })}
                maximumDate = {new Date("2020-12-31")}
                minimumDate = {new Date("1920-01-01")}
                androidVariant="nativeAndroid"
                mode="date"
              />
            </View>

            <View style={styles.questionContainer}>
              <Text style={styles.question}>City</Text>
              <RNPickerSelect
                onValueChange={(value) => this.setState({ city: value })}
                placeholder={{
                  label: 'Choose your city...',
                  value: null,
                }}
                items={[
                  { label: 'Adana', value: 'Adana' },
                  { label: 'Adıyaman', value: 'Adıyaman' },
                  { label: 'Afyonkarahisar', value: 'Afyonkarahisar' },
                  { label: 'Ağrı', value: 'Ağrı' },
                  { label: 'Aksaray', value: 'Aksaray' },
                  { label: 'Amasya', value: 'Amasya' },
                  { label: 'Ankara', value: 'Ankara' },
                  { label: 'Antalya', value: 'Antalya' },
                  { label: 'Ardahan', value: 'Ardahan' },
                  { label: 'Artvin', value: 'Artvin' },
                  { label: 'Aydın', value: 'Aydın' },
                  { label: 'Balıkesir', value: 'Balıkesir'},
                  { label: 'Bartın', value: 'Bartın' },
                  { label: 'Batman', value: 'Batman' },
                  { label: 'Bayburt', value: 'Bayburt' },
                  { label: 'Bilecik', value: 'Bilecik' },
                  { label: 'Bingöl', value: 'Bingöl' },
                  { label: 'Bitlis', value: 'Bitlis' },
                  { label: 'Bolu', value: 'Bolu' },
                  { label: 'Burdur', value: 'Burdur' },
                  { label: 'Bursa', value: 'Bursa' },
                  { label: 'Çanakkale', value: 'Çanakkale' },
                  { label: 'Çankırı', value: 'Çankırı' },
                  { label: 'Çorum', value: 'Çorum' },
                  { label: 'Denizli', value: 'Denizli' },
                  { label: 'Diyarbakır', value: 'Diyarbakır' },
                  { label: 'Düzce', value: 'Düzce' },
                  { label: 'Edirne', value: 'Edirne' },
                  { label: 'Elazığ', value: 'Elazığ' },
                  { label: 'Erzincan', value: 'Erzincan' },
                  { label: 'Erzurum', value: 'Erzurum' },
                  { label: 'Eskişehir', value: 'Eskişehir' },
                  { label: 'Gaziantep', value: 'Gaziantep' },
                  { label: 'Giresun', value: 'Giresun' },
                  { label: 'Gümüşhane', value: 'Gümüşhane' },
                  { label: 'Hakkâri', value: 'Hakkâri' },
                  { label: 'Hatay', value: 'Hatay' },
                  { label: 'Iğdır', value: 'Iğdır' },
                  { label: 'Isparta', value: 'Isparta' },
                  { label: 'İstanbul', value: 'İstanbul' },
                  { label: 'İzmir', value: 'İzmir' },
                  { label: 'Kahramanmaraş', value: 'Kahramanmaraş' },
                  { label: ' Karabük', value: ' Karabük' },
                  { label: 'Karaman', value: 'Karaman' },
                  { label: 'Kars', value: 'Kars' },
                  { label: 'Kastamonu', value: 'Kastamonu' },
                  { label: 'Kayseri', value: 'Kayseri' },
                  { label: 'Kilis', value: 'Kilis' },
                  { label: 'Kırıkkale', value: 'Kırıkkale' },
                  { label: 'Kırklareli', value: 'Kırklareli' },
                  { label: 'Kırşehir', value: 'Kırşehir' },
                  { label: 'Kocaeli', value: 'Kocaeli' },
                  { label: 'Konya', value: 'Konya' },
                  { label: 'Kütahya', value: 'Kütahya' },
                  { label: 'Malatya', value: 'Malatya' },
                  { label: 'Manisa', value: 'Manisa' },
                  { label: 'Mardin', value: 'Mardin' },
                  { label: 'Mersin', value: 'Mersin' },
                  { label: 'Muğla', value: 'Muğla' },
                  { label: 'Muş', value: 'Muş' },
                  { label: ' Nevşehir', value: ' Nevşehir' },
                  { label: 'Niğde', value: 'Niğde' },
                  { label: 'Ordu', value: 'Ordu' },
                  { label: 'Osmaniye', value: 'Osmaniye' },
                  { label: 'Rize', value: 'Rize' },
                  { label: 'Sakarya', value: 'Sakarya' },
                  { label: 'Samsun', value: 'Samsun' },
                  { label: 'Şanlıurfa', value: 'Şanlıurfa' },
                  { label: 'Siirt', value: 'Siirt' },
                  { label: 'Sinop', value: 'Sinop' },
                  { label: 'Sivas', value: 'Sivas' },
                  { label: 'Şırnak', value: 'Şırnak' },
                  { label: 'Tekirdağ', value: 'Tekirdağ' },
                  { label: 'Tokat', value: 'Tokat' },
                  { label: 'Trabzon', value: 'Trabzon' },
                  { label: 'Tunceli', value: 'Tunceli' },
                  { label: 'Uşak', value: 'Uşak' },
                  { label: 'Van', value: 'Van' },
                  { label: 'Yalova', value: 'Yalova' },
                  { label: 'Yozgat', value: 'Yozgat' },
                  { label: 'Zonguldak', value: 'Zonguldak' }
                ]}
              />

            </View>

            <View style={styles.questionContainer}>
              <Text style={styles.question}>Gender</Text>
              <RNPickerSelect
                onValueChange={(value) => this.setState({ gender: value })}
                placeholder={{
                  label: 'Choose your gender...',
                  value: null,
                }}
                items={[
                  { label: 'Female', value: 'female' },
                  { label: 'Male', value: 'male' },
                  { label: 'Other', value: 'other' },
                ]}
              />
            </View>

            <View style={styles.questionContainer}>
              <Text style={styles.question}>Vaccine type you applied</Text>
              <RNPickerSelect
                onValueChange={(value) => this.setState({ vaccineType: value })}
                style={styles.textinput}
                placeholder={{
                  label: 'Choose your vaccine type...',
                  value: null,
                }}
                items={[
                  { label: 'Pfizer–BioNTech', value: 'Pfizer–BioNTech' },
                  { label: 'Sputnik V ', value: 'Sputnik V ' },
                  { label: 'Oxford–AstraZeneca', value: 'Oxford–AstraZeneca' },
                  { label: 'BBIBP-CorV', value: 'BBIBP-CorV' },
                  { label: 'CoronaVac', value: 'CoronaVac' },
                  { label: 'Moderna', value: 'Moderna' },
                  { label: 'Johnson & Johnson', value: 'Johnson & Johnson' },
                  { label: 'Ad5-nCoV', value: 'Ad5-nCoV' },
                  { label: 'EpiVacCorona', value: 'EpiVacCorona' },
                  { label: 'BBV152', value: 'BBV152' },
                  { label: 'CoviVac', value: 'CoviVac' },
                ]}
              />
            </View>

            <View style={styles.questionContainer}>
              <Text style={styles.question}>Any side effect after vaccination</Text>
              <TextInput
                style={{ height: 80, textAlignVertical: 'top', }}
                multiline={true}
                maxLength={400}
                placeholder="Enter side effects..."
                onChangeText={sideEffect => this.setState({ sideEffect: sideEffect })}
                defaultValue={this.state.sideEffect}
                blurOnSubmit={true}
              />
            </View>
            <View style={{ height: 30 }}></View>

            {this.state.buttonShow ? (
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.sendButton()}
              >
                <Text style={{ color: "#ffffff", fontFamily:'Cochin',fontSize:25,fontWeight:'bold'}}>Send</Text>
              </TouchableOpacity>

            ) : (<View style={{ height: 50 }}><Text style={styles.info}>*TO ACTIVATE SEND BUTTON,{"\n"}ALL AREAS MUST BE FILLED </Text></View>)}




            <View style={{ height: 100 }}></View>






          </ScrollView>
        </SafeAreaView>

      </KeyboardAvoidingView>

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
    color: "#000000",
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
    color: "#000000",
    fontFamily: 'Cochin',
  },
  textinput: {
    height: 40,
    borderBottomWidth: 1,
    borderColor: "#018786",

  },
  info: {
    fontSize: 20,
    fontWeight: '500',
    color: "#FF0000",
    textAlign: 'center',
    fontFamily: 'Cochin',
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


});


export default surveyPage;

