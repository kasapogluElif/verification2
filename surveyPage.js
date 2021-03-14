import React, { useState } from 'react';
import moment from 'moment';
import { SegmentedControls } from 'react-native-radio-buttons'

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

const genderbuttons = ['Female', 'Male', 'Other']
class surveyPage extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      name: '',
      surname: '',
      date: '',
      gender: null,
      city: '',
      vaccineType: null,
      sideEffect: '',
      buttonShow: false,
      invalidName: false,
      invalidSurname: false,
      invalidDate: false,
      invalidCity: false,
    };
  }


  check = () => {

    if (this.state.name !== '' &&
      this.state.invalidName === false &&
      this.state.surname !== '' &&
      this.state.invalidSurname === false &&
      this.state.date !== '' &&
      this.state.invalidDate === false &&
      this.state.gender !== null &&
      this.state.city !== '' &&
      this.state.invalidCity === false &&
      this.state.vaccineType !== null &&
      this.state.sideEffect !== '') {
      this.setState({ buttonShow: true });

    }
    else {
      this.setState({ buttonShow: false });
    }
  };

  sendButton = () => {
    this.props.navigation.navigate('Success Page', {
      name: this.state.name,
      surname: this.state.surname,
      date: this.state.date,
      gender: this.state.gender,
      city: this.state.city,
      vaccinetype: this.state.vaccineType,
      sideeffect: this.state.sideEffect
    })
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.name !== this.state.name ||
      prevState.invalidName !== this.state.invalidName ||
      prevState.surname !== this.state.surname ||
      prevState.invalidSurname !== this.state.invalidSurname ||
      prevState.date !== this.state.date ||
      prevState.invalidDate!== this.state.invalidDate ||
      prevState.gender !== this.state.gender ||
      prevState.city !== this.state.city ||
      prevState.invalidCity !== this.state.invalidCity ||
      prevState.vaccineType !== this.state.vaccineType ||
      prevState.sideEffect !== this.state.sideEffect) {
      this.check();
      //console.log(this.state.date.getDate())
    }

  }
  endEditingName = (e) => {
    this.setState({ invalidName: false })
    let nameregex = /^[a-zA-ZğüşöçİĞÜŞÖÇ][a-zA-ZğüşöçİĞÜŞÖÇ ]*$/;
    if (!nameregex.test(this.state.name)) {
      this.setState({ invalidName: true });
    }
  }
  endEditingSurname = (e) => {
    this.setState({ invalidSurname: false })
    let surnameregex = /^[a-zA-ZğüşöçİĞÜŞÖÇ][a-zA-ZğüşöçİĞÜŞÖÇ ]*$/;
    if (!surnameregex.test(this.state.surname)) {
      this.setState({ invalidSurname: true });
    }
  }
  endEditingDate = (e) => {
    this.setState({ invalidDate: false });
    if (!moment(this.state.date, ["DD-MM-YYYY", "D-M-YYYY"], true).isValid() ||
      moment(this.state.date, ["DD-MM-YYYY", "D-M-YYYY"], true).isAfter() ||
      moment(this.state.date, ["DD-MM-YYYY", "D-M-YYYY"], true).isBefore('1801-01-01')
    ) {
      this.setState({ invalidDate: true });
    }
  }
  endEditingCity = (e) => {
    this.setState({ invalidCity: false });
    const cities = ["İSTANBUL", "ANKARA", "İZMİR", "ADANA", "ADIYAMAN", "AFYONKARAHİSAR", "AĞRI", "AKSARAY", "AMASYA",
      "ANTALYA", "ARDAHAN", "ARTVİN", "AYDIN", "BALIKESİR", "BARTIN", "BATMAN", "BAYBURT", "BİLECİK", "BİNGÖL",
      "BİTLİS", "BOLU", "BURDUR", "BURSA", "ÇANAKKALE", "ÇANKIRI", "ÇORUM", "DENİZLİ", "DİYARBAKIR", "DÜZCE", "EDİRNE",
      "ELAZIĞ", "ERZİNCAN", "ERZURUM", "ESKİŞEHİR", "GAZİANTEP", "GİRESUN", "GÜMÜŞHANE", "HAKKARİ", "HATAY", "IĞDIR",
      "ISPARTA", "KAHRAMANMARAŞ", "KARABÜK", "KARAMAN", "KARS", "KASTAMONU", "KAYSERİ", "KIRIKKALE", "KIRKLARELİ",
      "KIRŞEHİR", "KİLİS", "KOCAELİ", "KONYA", "KÜTAHYA", "MALATYA", "MANİSA", "MARDİN", "MERSİN", "MUĞLA", "MUŞ",
      "NEVŞEHİR", "NİĞDE", "ORDU", "OSMANİYE", "RİZE", "SAKARYA", "SAMSUN", "SİİRT", "SİNOP", "SİVAS", "ŞIRNAK",
      "TEKİRDAĞ", "TOKAT", "TRABZON", "TUNCELİ", "ŞANLIURFA", "UŞAK", "VAN", "YALOVA", "YOZGAT", "ZONGULDAK"]
    var city = this.state.city.toLocaleUpperCase('tr-TR');
    if (!cities.includes(city)) {
      this.setState({ invalidCity: true });
    }
  }



  render() {
    return (

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >


        <SafeAreaView testID="app-root" accessibilityLabel="app-root">
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
                onEndEditing={() => this.endEditingName()}
                defaultValue={this.state.name}
                accessibilityLabel="name_input"
              />

              {this.state.invalidName ? (
                <View style={{ height: 40 }}><Text style={styles.info2}> Invalid Name! {"\n"} Your name must contain only letters and/or spaces</Text></View>

              ) : (<View style={{ height: 10 }}></View>)}
            </View>

            <View style={styles.questionContainer}>
              <Text style={styles.question}>Surname</Text>
              <TextInput
                style={styles.textinput}
                placeholder="Enter your surname..."
                onChangeText={surname => this.setState({ surname: surname })}
                onEndEditing={() => this.endEditingSurname()}
                defaultValue={this.state.surname}
                accessibilityLabel="surname_input"
              />

              {this.state.invalidSurname ? (
                <View style={{ height: 40 }}><Text style={styles.info2}> Invalid Surname! {"\n"} Your surname must contain only letters and/or spaces</Text></View>

              ) : (<View style={{ height: 10 }}></View>)}
            </View>

            <View style={styles.questionContainer}>
              <Text style={styles.question}>Birth Date</Text>

              <TextInput
                style={styles.textinput}
                placeholder="dd-mm-yyyy"
                onChangeText={date => this.setState({ date: date })}
                onEndEditing={() => this.endEditingDate()}
                accessibilityLabel="date_picker"
                defaultValue={this.state.date}
              />
              {this.state.invalidDate ? (
                <View style={{ height: 40 }}><Text style={styles.info2}> Invalid Date!</Text></View>

              ) : (<View style={{ height: 10 }}></View>)}

            </View>

            <View style={styles.questionContainer}>
              <Text style={styles.question}>City</Text>

              <TextInput
                style={styles.textinput}
                accessibilityLabel= "city_picker"
                placeholder="Enter your city..."
                onChangeText={city => this.setState({ city: city })}
                onEndEditing={() => this.endEditingCity()}
                defaultValue={this.state.city}
              />
              {this.state.invalidCity ? (
                <View style={{ height: 40 }}><Text style={styles.info2}> Invalid City!</Text></View>
              ) : (<View style={{ height: 10 }}></View>)}
            </View>

            <View style={styles.questionContainer}>
              <Text style={styles.question}>Gender</Text>

              <SegmentedControls
                options={['Female', 'Male', 'Other']}
                onSelection={selectedOption => this.setState({ gender: selectedOption })}
                selectedOption={this.state.gender}
                accessibilityLabel="gender_picker"
                tint={'#018786'}
                selectedTint={'white'}
                backTint={'#EDEDED'}
                />
            </View>

            <View style={styles.questionContainer}>
              <Text style={styles.question}>Vaccine type you applied</Text>

              <View >
                <SegmentedControls
                  options={['Pfizer–BioNTech', 'Sputnik V ', 'Oxford–AstraZeneca',
                    'BBIBP-CorV', 'CoronaVac', 'Moderna', 'Johnson & Johnson',
                    'Ad5-nCoV', 'EpiVacCorona', 'BBV152', 'CoviVac']}
                  onSelection={selectedOption => this.setState({ vaccineType: selectedOption })}
                  selectedOption={this.state.vaccineType}
                  accessibilityLabel= "vaccine_picker"
                  tint={'#018786'}
                  direction={'column'}
                  selectedTint={'white'}
                  backTint={'#EDEDED'}
                />
              </View>

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
                accessibilityLabel="effect_input"
              />
            </View>

            <View style={{ height: 30 }}></View>


            {this.state.buttonShow ? (
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.sendButton()}
                accessibilityLabel="send_button"
              >
                <Text style={{ color: "#ffffff", fontFamily: 'Cochin', fontSize: 25, fontWeight: 'bold' }}>Send</Text>
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
  info2: {
    fontSize: 14,
    color: "#FF0000",
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

