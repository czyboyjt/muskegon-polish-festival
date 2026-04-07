import React from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';

type LegendItem = {
  key: string;
  label: string;
  description: string;
  iconSource: number;
};

type LegendModalProps = {
  visible: boolean;
  legendItems: LegendItem[];
  onClose: () => void;
};

export default function LegendModal({
  visible,
  legendItems,
  onClose,
}: LegendModalProps) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.card}>
          <View style={styles.headerRow}>
            <View>
              <Text style={styles.title}>Legend</Text>
              <Text style={styles.subtitle}>Map icons and what they mean</Text>
            </View>
          </View>

          <View style={styles.legendList}>
            {legendItems.map((item) => (
              <View key={item.key} style={styles.legendRow}>
                <Image source={item.iconSource} style={styles.legendIcon} contentFit="contain" />
                <View style={{ flex: 1 }}>
                  <Text style={styles.legendLabel}>{item.label}</Text>
                  <Text style={styles.legendDescription}>{item.description}</Text>
                </View>
              </View>
            ))}
          </View>

          <Pressable style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(23, 27, 29, 0.34)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  card: {
    width: '100%',
    maxWidth: 520,
    borderRadius: 24,
    backgroundColor: 'rgba(255,255,255,0.98)',
    padding: 24,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 6 },
  },
  headerRow: {
    marginBottom: 18,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: '#2F3437',
  },
  subtitle: {
    marginTop: 4,
    fontSize: 14,
    color: '#6A7175',
  },
  legendList: {
    gap: 14,
  },
  legendRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  legendIcon: {
    width: 26,
    height: 26,
    marginTop: 2,
  },
  legendLabel: {
    fontSize: 15,
    fontWeight: '700',
    color: '#2F3437',
  },
  legendDescription: {
    marginTop: 2,
    fontSize: 14,
    lineHeight: 20,
    color: '#515558',
  },
  closeButton: {
    alignSelf: 'flex-start',
    marginTop: 24,
    paddingHorizontal: 18,
    paddingVertical: 11,
    borderRadius: 999,
    backgroundColor: '#2F3437',
  },
  closeButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
});