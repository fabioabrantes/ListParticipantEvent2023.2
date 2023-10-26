import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
} from 'react-native';

import {styles} from './styles';

interface Props extends TouchableOpacityProps{
  title:string;
  transparent?:string;
}
export function Button({title,transparent, ...rest}:Props){
  let backgroundColorButton = "#8b14f9";
  if( title ==='+'){
    backgroundColorButton='#31CF67'
  }else if( title ==='-' ){
    backgroundColorButton='#E23C44';
  }

  
  return (
     <TouchableOpacity style={[styles.button,{backgroundColor:backgroundColorButton, }]} {...rest}>
          <Text style={styles.textButton}>{title}</Text>
      </TouchableOpacity>
  )
}