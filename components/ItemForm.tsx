import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { createItem, updateItem } from '../api/api';

const ItemForm: React.FC<{ navigation: any; route: any }> = ({ navigation, route }) => {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const item = route.params?.item;

  useEffect(() => {
    if (item) {
      setName(item.name);
      setDescription(item.description);
      setPrice(item.price.toString());
    }
  }, [item]);

  const handleSubmit = async () => {
    const newItem = { name, description, price: parseFloat(price) };

    try {
      if (item) {
        await updateItem(item.id, newItem);
        Alert.alert('Item updated successfully!');
      } else {
        await createItem(newItem);
        Alert.alert('Item created successfully!');
      }
      navigation.goBack();
    } catch (error) {
      console.error('Error saving item:', error);
    }
  };

  return (
    <View>
      <TextInput placeholder="Name" value={name} onChangeText={setName} />
      <TextInput placeholder="Description" value={description} onChangeText={setDescription} />
      <TextInput placeholder="Price" value={price} onChangeText={setPrice} keyboardType="numeric" />
      <Button title={item ? 'Update Item' : 'Create Item'} onPress={handleSubmit} />
    </View>
  );
};

export default ItemForm;
