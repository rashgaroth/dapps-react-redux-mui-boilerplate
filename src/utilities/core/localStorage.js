/* eslint-disable no-console */
export const getLocalStorageItem = key => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (err) {
    console.error(err);
    return false;
  }
};

export const setLocalStorageItem = async (key, item) => {
  try {
    return await localStorage.setItem(key, item);
  } catch (err) {
    console.error(err);
    return false;
  }
};

export const removeLocalStorageItem = async key => {
  try {
    return await localStorage.removeItem(key);
  } catch (error) {
    console.error(error);
    return false;
  }
};

const any = null;
export const setMultipleLocalStorageItem = async (items = [{ key: '', item: any }]) => {
  try {
    items.forEach(el => setLocalStorageItem(el.key, el.item));
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
};

export const getMultipleLocalStorageItems = async (keys = ['']) => {
  try {
    const data = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < keys.length; i++) {
      const item = getLocalStorageItem(keys[i]);
      const obj = {
        key: keys[i],
        item,
      };
      data.push(obj);
    }
    return data;
  } catch (err) {
    console.error(err);
    return false;
  }
};
