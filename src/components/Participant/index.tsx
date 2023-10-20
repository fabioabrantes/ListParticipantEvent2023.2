import {Text, View} from 'react-native';

import { Button } from '../Button';

import {styles} from './styles';
interface Props{
  name:string;
  remove:(name:string)=>void;
}
export function Participant({name,remove}:Props){
  return (
    <View style={styles.container}>
      <Text style={styles.nameParticipant}>{name}</Text>
      <Button title='-'  onPress={()=>remove(name)}/>
    </View>
  )
}