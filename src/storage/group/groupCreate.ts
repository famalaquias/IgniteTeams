import { groupGetAll } from './groupGetAll';
import { GROUP_COLLECTION } from '@storage/storageConfig';

import { AppError } from '@utils/AppError';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function groupCreate(newGroup: string) {
  try {
    const storagedGroups = await groupGetAll();

    const groupAlreadExists = storagedGroups.includes(newGroup);
    if (groupAlreadExists) {
      throw new AppError('Já existe um grupo cadastrado com esse nome.');   
    }

    const storage = JSON.stringify([...storagedGroups, newGroup]);

    await AsyncStorage.setItem(GROUP_COLLECTION, storage);

  } catch (error) {
    throw error;
  }
}
