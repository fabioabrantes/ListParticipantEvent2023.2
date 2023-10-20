import {useState} from 'react';
import {View, Text, TextInput, Alert} from 'react-native';

import { Participant } from '../../components/Participant';
import { Button } from '../../components/Button';

import {styles} from './styles';

export function Home(){
 
  function addParticipant(){
   
  }
  function removeParticipant(name:string){
    
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nome do evento</Text>

      <Text style={styles.date}>Sexta, 4 de Novembro de 2022.</Text>

      <View style={styles.containerRegisterParticipant}>
        <TextInput />
        <Button title="+"/>
      </View>

      <Text  style={styles.subTitleListPaticipant}>Participantes</Text>
    
      <View style={styles.containerListParticipant}>
        <Text>Ninguém chegou no evento ainda? 
          Adicione participantes a sua lista de presença.
        </Text>
        <Participant name="fabio"/>
        <Participant name="jose"/>
      </View>
    </View>
  )
}