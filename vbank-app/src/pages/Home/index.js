import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from './components/Header';
import Balance from './components/Balance';
import Movements from './components/Movements';
import Actions from './components/Actions';

const list = [
  { 
    id: 1, 
    label: 'PIX - Bruna Cateli',
    value: '600,00',
    date: '03/02/2024',
    type: 0 // saida
  },
  { 
    id: 2, 
    label: 'Boleto - DAE Marilia',
    value: '120,00',
    date: '06/02/2024',
    type: 0 // saida
  },
  { 
    id: 3, 
    label: 'PIX - Developer',
    value: '3.850,00',
    date: '11/02/2024',
    type: 1 // entrada
  },
  { 
    id: 4, 
    label: 'PIX - Freelancer',
    value: '1.500,00',
    date: '13/02/2024',
    type: 1 // entrada
  }

]

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name="Leticia J. Mariano"/>

        <Balance saldo="8.376,98" gastos="- 313,58"/>

        <Actions/>

        <Text style={styles.title}>Histórico</Text>
        
        <FlatList
          style={styles.list}
          data={list}
          keyExtractor={ (item) => String(item.id)}
          showsVerticalScrollIndicator={ false }
          renderItem={ ({ item }) => <Movements data={item}/> }
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
  },
  title: {
    color: '#333333',
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 14,
    marginLeft: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
    marginTop: 24,
  }
});
