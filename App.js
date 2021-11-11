import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, View, Text, TextInput,Button,Alert,Linking } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from './colors';
import STYLES from './index';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

export default function App() {
  return (
      <SafeAreaView
      style={{paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.white}}>
    
        <View style={{flexDirection: 'row', marginTop: 40}}>
        <Icon
              name="payment"
              color = "COLORS.navy"
              size={50}
              style={{marginLeft:160,marginBottom:0}}
            />
          <Text style={{fontWeight: 'bold', fontSize: 22, color:COLORS.navy,marginLeft:-85}}>
            {'\n\n'}JoyPay.com
          </Text>
        </View>
        <View style={{marginTop: 30}}>
          <Text style={{fontSize: 27, fontWeight: 'bold', color: COLORS.dark}}>
            Sign Up
          </Text>
          <Text style={{fontSize: 19, fontWeight: 'bold', color: COLORS.light}}>
            Welcome to JoyPay
          </Text>
        </View>
        <View style={{marginTop: 20}}>
          <View>
            <Text style={{fontSize: 19, fontWeight: 'bold', color:COLORS.navy}}>
              First Name:
            </Text>
          </View>
          <View style={STYLES.inputContainer}>            
            <Icon
              name="person-outline"
              color={COLORS.light}
              size={20}
              style={STYLES.inputIcon}
            />            
            <TextInput placeholder="First Name" style={STYLES.input} />
          </View>
          <View>
            <Text style={{fontSize: 19, fontWeight: 'bold',color:COLORS.navy}}>
              Last Name:
            </Text>
          </View>
          <View style={STYLES.inputContainer}>
            <Icon
              name="person-outline"
              color={COLORS.light}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput placeholder="LastName" style={STYLES.input} />
          </View>
          <View>
            <Text style={{fontSize: 19, fontWeight: 'bold',color:COLORS.navy}}>
              Email:
            </Text>
          </View>
          <View style={STYLES.inputContainer}>
            <Icon
              name="mail-outline"
              color={COLORS.light}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput placeholder="Email" style={STYLES.input} />
          </View>

          <View style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'center',
            marginTop: 10,
            marginBottom: 0,
          }}>
            
            <Text style={{fontSize: 15,  color: 'black'}}>
              I agree to the Terms of Service and Privacy Policy
            </Text>
          </View>
         
          <View  style={{            
            marginTop: 25,
            marginBottom: 20,
          }}>
          {/* <Button 
          title ="sign up"
        color="navy"
        onPress={() => Alert.alert('Sign Up Button pressed')} style={STYLES.btnPrimary}
      />
        */}

      <TouchableOpacity onPress={() => Alert.alert('Sign Up Button pressed')}  style={STYLES.btnPrimary}>
        <Text style={STYLES.btnText}>Sign Up</Text>
      </TouchableOpacity>
          
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'center',
            marginTop: 25,
            marginBottom: 20,
          }}>
          <Text style={{fontSize: 18,color: COLORS.light, fontWeight: 'bold'}}>
            Have an account ?
          </Text>        
          <View style={{width: 10}}></View>  
            <Text style={{fontSize: 18,color:COLORS.navy, fontWeight: 'bold'}} onPress={() => Alert.alert('Sign In Button pressed')} >
               Sign in
            </Text>
        </View>
      
    </SafeAreaView>


   
  );
}



