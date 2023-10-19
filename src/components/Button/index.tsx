import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
} from 'react-native';

import {styles} from './styles';


export function Button(){
  
  return (
     <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>+</Text>
      </TouchableOpacity>
  )
}