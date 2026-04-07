import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type LegendCardProps = {
  onPress?: () => void;
};

export default function LegendCard({ onPress }: LegendCardProps) {
  return (
    <View style={styles.wrapper}>
      <Pressable
        onPress={onPress}
        style={[
          styles.card,
          {
            borderColor: 'rgba(255,255,255,0.2)',
            borderWidth: 1.5,
            backgroundColor: 'rgba(255,255,255,0.92)',
          },
        ]}
      >
        <View style={styles.headerRow}>
          <View style={styles.headerTextWrap}>
            <Text style={styles.title}>Legend</Text>
            <Text style={styles.subtitle}>Tap to see more</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    zIndex: 20,
  },
  card: {
    width: 140,
    borderRadius: 20,
    borderWidth: 1.5,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTextWrap: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
    color: '#2F3437',
  },
  subtitle: {
    marginTop: 2,
    fontSize: 10,
    color: '#6A7175',
  },
});