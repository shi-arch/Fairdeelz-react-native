import AsyncStorage from '@react-native-community/async-storage';

export const setAsyncStorage = async (key, value) => {

	const jsonValue = JSON.stringify(value)
	try {
		await AsyncStorage.setItem(`@orissa:${key}`, jsonValue)
	} catch (e) {


		// saving error
	}


}

export const getAsyncStorage = async (key) => {

	try {
		const value = await AsyncStorage.getItem(`@orissa:${key}`);
		if (value !== null) {
			return JSON.parse(value)
			// value previously stored
		}
	} catch (e) {

		// error reading value
	}


}

export const removeAsyncStorage = async (key) => {
	
		try {
			await AsyncStorage.removeItem(key);
			return true;
		}
		catch(exception) {
			return false;
		}
	
}
