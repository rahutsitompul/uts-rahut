import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
  Image,
  TextInput,
  ProgressBarAndroidComponent,
} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import images from '/Applications/JETRO/assets/index.js';

const EditProfile = ({ navigation }) => {
  const [name, setName] = useState('');
  const [accountName, setAccountName] = useState('');
  const [assets, setAssets] = useState('');

  const TostMessage = () => {
    ToastAndroid.show('Edited Successfully!', ToastAndroid.SHORT);
  };

  const changeProfilePicture = () => {
    // Implement the logic to change the profile picture here
    // You can open a file picker or camera to select a new picture
    // After selecting a new picture, update the 'assets' state with the new image URI
  };

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionic name="close-outline" style={{ fontSize: 35 }} />
        </TouchableOpacity>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Edit Profile</Text>
        <TouchableOpacity
          onPress={() => {
            TostMessage();
            navigation.goBack();
          }}>
          <Ionic name="checkmark" style={{ fontSize: 35, color: '#3493D9' }} />
        </TouchableOpacity>
      </View>
      <View style={{ padding: 20, alignItems: 'center' }}>
        <TouchableOpacity onPress={changeProfilePicture}>
        <Image
  source={require('/Applications/JETRO/assets/jetro.jpeg')}
  style={{ width: 80, height: 80, borderRadius: 100, marginLeft: 12, }}
/>

          <Text
            style={{
              color: '#3493D9',
            }}>
            Edit profil picture
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ padding: 10 }}>
        <View>
          <Text
            style={{
              opacity: 0.5,
            }}>
            Name
          </Text>
          <TextInput
            placeholder="name"
            value={name}
            onChangeText={(text) => setName(text)}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
            }}
          />
        </View>
        <View style={{ paddingVertical: 10 }}>
          <Text
            style={{
              opacity: 0.5,
            }}>
            Username
          </Text>
          <TextInput
            placeholder="accountname"
            value={accountName}
            onChangeText={(text) => setAccountName(text)}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
            }}
          />
        </View>
        <View style={{ paddingVertical: 10 }}>
          <TextInput
            placeholder="Pronouns"
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
            }}
          />
        </View>
        <View style={{ paddingVertical: 10 }}>
          <TextInput
            placeholder="Bio"
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
            }}
          />
        </View>
      </View>
      <View>
        <Text
          style={{
            marginVertical: 10,
            padding: 10,
            color: '#3493D9',
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: '#EFEFEF',
          }}>
          Switch to Professional account
        </Text>
        <Text
          style={{
            marginVertical: 10,
            padding: 10,
            color: '#3493D9',
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: '#EFEFEF',
          }}>
          Personal information setting
        </Text>
        <Text
          style={{
            marginVertical: 10,
            padding: 10,
            color: '#3493D9',
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: '#EFEFEF',
          }}>
          Sign up for meta verified
        </Text>
      </View>
    </View>
  );
};

export default EditProfile;
