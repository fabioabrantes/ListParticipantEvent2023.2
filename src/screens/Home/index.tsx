import {useState} from 'react';
import {View, Text, TextInput, Alert} from 'react-native';

import { Participant } from '../../components/Participant';
import { Button } from '../../components/Button';

import {styles} from './styles';

export function Home(){
 const [nameParticipant,setNameParticipant] = useState('');
 const [names,setNames] = useState([] as string []);

 
 console.log(names)
 
  function addParticipant(){
    if(names.includes(nameParticipant) || nameParticipant === ''){
      Alert.alert('Error','Participate ja existe ou não foi digitado');
    } else{
      setNames([...names,nameParticipant]);
    }
    setNameParticipant('');
  }
  
  function removeParticipant(name:string){
    Alert.alert('Remove', `Deseja realmente remover ${name}`,[
      {
        text:'sim',
        onPress:()=>{
          setNames(names.filter(participant => participant !==name))
        }
      },{
        text:'não'
      } 
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nome do evento</Text>

      <Text style={styles.date}>Sexta, 4 de Novembro de 2022.</Text>

      <View style={styles.containerRegisterParticipant}>
        <TextInput 
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor='#FDFCFE'
          onChangeText={text =>setNameParticipant(text)}
          value={nameParticipant}
        />
        <Button 
          title="+"
          onPress={addParticipant}
        />
      </View>

      <Text  style={styles.subTitleListParticipant}>Participantes</Text>
    
      <View style={styles.containerListParticipant}>
        {
          names.length === 0 ? (
            <Text style={styles.listEmpty}>Ninguém chegou no evento ainda? 
            Adicione participantes a sua lista de presença.
            </Text>
          ) : (
            names.map(item =>(
              <Participant key={item} name={item} remove={()=>removeParticipant(item)}/>
            ))
          )
        }
       {/*  <FlatList
         data={names}
          keyExtractor={name =>name}
          renderItem={({item})=>(<Participant name={item}/>)}
          ListEmptyComponent={()=>(
            <Text style={styles.listEmpty}>Ninguém chegou no evento ainda? 
            Adicione participantes a sua lista de presença.
            </Text>
          )} */}
      </View>
    </View>
  )
}