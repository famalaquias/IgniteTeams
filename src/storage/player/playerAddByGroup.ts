import { PlayerStorageDTO } from './PlayerStorageDTO';
import { playerGetByGroup } from './playerGetByGroup';
import { PLAYER_COLLECTION } from '@storage/storageConfig';

import { AppError } from '@utils/AppError';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function playerAddByGroup(newPlayer: PlayerStorageDTO, group: string) {
  try {
    const storagedPlayers = await playerGetByGroup(group);

    const playerAlreadyExists = storagedPlayers
      .filter(player => player.name === newPlayer.name);
    if (playerAlreadyExists.length > 0) {
      throw new AppError('Essa pessoa já está cadastrada em um time.');
    }

    const storage = JSON.stringify([...storagedPlayers, newPlayer]);

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage);    
  } catch (error) {
    throw(error);    
  }
}
