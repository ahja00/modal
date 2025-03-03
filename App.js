import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {Modal,Text,Pressable,StyleSheet,View}from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
         <StatusBar style="auto" />
      <Modal
      animationType='slide'
      transparent={true}
      visible={modalVisible}
      onRequestClose={()=>{
      setModalVisible(!modalVisible);
      }}>
        <View style={styles.modalOverlay}>
        <View style={styles.modalView}>
        <Text style={styles.modalText}>This is a modal...</Text>
        <Pressable
        style={[styles.button,styles.buttonClose]}
        onPress={()=> setModalVisible(!modalVisible)}>
        <Text style={styles.textStyle}>Close</Text>
        </Pressable>
        </View>
       </View>
    </Modal>
        <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={()=>setModalVisible(true)}>
        <Text style={styles.textStyle}>Show modal message</Text>
        </Pressable>
      </View>
  );
  }
  
     
  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalOverlay: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      // Ensuring modalOverlay does not obscure StatusBar
      zIndex: 1, // Higher value to ensure it's above modal
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
  });