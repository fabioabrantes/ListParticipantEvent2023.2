import {Text, View} from 'react-native';

import { Button } from '../Button';

import {styles} from './styles';
interface Props{
  name:string;
}
export function Participant({name}:Props){
  return (
    <View style={styles.container}>
      <Text style={styles.nameParticipant}>{name}</Text>
      <Button title='-' />
    </View>
  )
}