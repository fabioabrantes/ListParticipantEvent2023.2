import { TouchableOpacity,TouchableOpacityProps} from 'react-native';
import { Ionicons,FontAwesome } from '@expo/vector-icons';


import {styles} from './styles';

interface Props extends TouchableOpacityProps{
  iconName:'add-circle-outline' | 'trash-outline' |'check-circle' | 'circle-o';
  transparent?:boolean;
}
export function Button({iconName,transparent=false, ...rest}:Props){
  let backgroundColorButton = "#8b14f9";
  if(transparent){
    backgroundColorButton='#333333'
  }
  
  return (
     <TouchableOpacity 
        style={[styles.button, !transparent && {backgroundColor:backgroundColorButton}]} {...rest}>
          {
            (iconName !== 'circle-o' && iconName !== 'check-circle') ? 
              <Ionicons name={iconName} size={32} color={iconName==='add-circle-outline' ?'white':'#4EA8DE'} />
            :
              <FontAwesome 
                name={iconName} 
                size={32} 
                color="#4EA8DE" 
                
                />
          }
      </TouchableOpacity>
  )
}