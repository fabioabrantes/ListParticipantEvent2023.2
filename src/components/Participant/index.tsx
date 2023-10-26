import {Text, View} from 'react-native';

import { Button } from '../Button';

import { useState } from 'react';

import {styles} from './styles';

interface Props{
  name:string;
  remove:(name:string)=>void;
}

export function Participant({name,remove}:Props){
  const [checkout, setCheckout] = useState(false);

  console.log(checkout)
  function handleCeckout(){
    setCheckout(!checkout)
  }

  return (
    <View style={styles.container}>
      <Button title='ok' transparent='transparent'  onPress={handleCeckout}/>
      <View 
        style={[styles.containerText, checkout && { backgroundColor:'#1A1A1A'}]}
      >
        <Text style={[styles.nameParticipant, checkout && {textDecorationLine:'line-through',color:'red'}]}>{name}</Text>
      </View>
      <Button title='-'  onPress={()=>remove(name)}/>
    </View>
  )
}