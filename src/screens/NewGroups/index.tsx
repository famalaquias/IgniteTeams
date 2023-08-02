import { useState } from 'react';

import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Input } from '@components/Input';
import { Header } from '@components/Header';
import { Button } from '@components/Button';
import { Highlight } from '@components/Highlight';

import { AppError } from '@utils/AppError';
import { groupCreate } from '@storage/group/groupCreate';

import { Container, Content, Icon } from './styles';

export function NewGroups() {
  const [group, setGroup] = useState('');
  
  const navigation = useNavigation();

  async function handlePlayers() {
    try {
      if (group.trim().length === 0) {
        return Alert.alert('Novo grupo', 'Informe o nome da Turma.');
      }

      await groupCreate(group);

      navigation.navigate('players', { group });    

    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo grupo', error.message);

      } else {
        Alert.alert('Novo grupo', 'Não foi possível criar uma nova turma.');
        console.log(error);
      }
    }
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight 
          title='Nova Turma'
          subtitle='crie uma turma para adicionar as pessoas'
        />

        <Input 
          placeholder='Nome da turma'
          onChangeText={setGroup}
        />

        <Button 
          title='Criar' 
          style={{ marginTop: 20 }} 
          onPress={handlePlayers}
        />   
      </Content>   
    </Container>
  );
}
