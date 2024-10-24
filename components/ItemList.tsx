import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { getItems, deleteItem } from '../api/api';

interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
}

const ItemList: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await getItems();
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteItem(id);
      fetchItems(); // Refresh daftar setelah penghapusan
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const renderItem = ({ item }: { item: Item }) => (
    <View>
      <Text>{item.name}</Text>
      <Button title="Edit" onPress={() => navigation.navigate('ItemForm', { item })} />
      <Button title="Delete" onPress={() => handleDelete(item.id)} />
    </View>
  );

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default ItemList;
