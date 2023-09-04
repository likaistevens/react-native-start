import {
  View,
  Button,
  StyleSheet,
  SafeAreaView,
  Text,
  FlatList,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({title}) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Ionicons name="accessibility" color="red"></Ionicons>
    </View>
  );
};

const FlatListDemo = props => {
  console.log('props', props);
  const renderItem = ({item}) => <Item title={item.title} />;
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(DATA);

  const loadData = async () => {
    setLoading(true);
    const res = await new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        resolve([
          ...data,
          ...Array.from({length: 3}).map(() => ({
            id: `${Math.random()}`,
            title: `${Math.random()}`,
          })),
        ]);
      }, 1000);
    });
    setLoading(false);
    setData(res);
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        refreshing={loading}
        onRefresh={() => {
          loadData();
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default FlatListDemo;
