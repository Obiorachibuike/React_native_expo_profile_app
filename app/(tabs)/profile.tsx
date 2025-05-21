import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: 'https://via.placeholder.com/80' }} style={styles.avatar} />
        <View>
          <Text style={styles.name}>andaz Kumar</Text>
          <Text style={styles.memberSince}>member since Dec, 2020</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>get to know your vehicles, inside out</Text>
        <Text style={styles.cardLink}>CRED garage →</Text>
      </TouchableOpacity>

      <View style={styles.itemRow}>
        <Text style={styles.itemLabel}>credit score</Text>
        <Text style={styles.itemValue}>757 • REFRESH AVAILABLE</Text>
      </View>

      <View style={styles.itemRow}>
        <Text style={styles.itemLabel}>lifetime cashback</Text>
        <Text style={styles.itemValue}>₹3</Text>
      </View>

      <View style={styles.itemRow}>
        <Text style={styles.itemLabel}>bank balance</Text>
        <Text style={styles.itemValue}>check →</Text>
      </View>

      <Text style={styles.sectionTitle}>YOUR REWARDS & BENEFITS</Text>

      <View style={styles.itemRow}>
        <Text style={styles.itemLabel}>cashback balance</Text>
        <Text style={styles.itemValue}>₹0</Text>
      </View>

      <View style={styles.itemRow}>
        <Text style={styles.itemLabel}>coins</Text>
        <Text style={styles.itemValue}>26,46,583</Text>
      </View>

      <TouchableOpacity style={styles.referCard}>
        <Text style={styles.referText}>win upto Rs 1000</Text>
        <Text style={styles.referSub}>refer and earn</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>TRANSACTIONS & SUPPORT</Text>
      <TouchableOpacity>
        <Text style={styles.itemLabel}>all transactions</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#111',
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  name: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  memberSince: {
    color: '#aaa',
  },
  card: {
    backgroundColor: '#222',
    borderRadius: 10,
    padding: 16,
    marginBottom: 24,
  },
  cardTitle: {
    color: '#ccc',
  },
  cardLink: {
    color: '#00FFAA',
    marginTop: 8,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomColor: '#333',
    borderBottomWidth: 1,
  },
  itemLabel: {
    color: '#aaa',
  },
  itemValue: {
    color: '#fff',
  },
  sectionTitle: {
    marginTop: 24,
    marginBottom: 8,
    color: '#888',
    fontWeight: 'bold',
  },
  referCard: {
    backgroundColor: '#222',
    borderRadius: 10,
    padding: 16,
    marginVertical: 16,
  },
  referText: {
    color: '#fff',
    fontSize: 16,
  },
  referSub: {
    color: '#aaa',
    marginTop: 4,
  },
});

export default ProfileScreen;