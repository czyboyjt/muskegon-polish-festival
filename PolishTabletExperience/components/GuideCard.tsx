import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type GuideCardProps = {
  guideStyle?: {
    label: string;
    color: string;
    chipBorder?: string;
    description?: string;
    focusesOn?: string[];
  } | null;
  isRelevant?: boolean;
  onPress?: () => void;
};

export default function GuideCard({
  guideStyle,
  isRelevant = false,
  onPress,
}: GuideCardProps) {
  if (!guideStyle) return null;

  return (
    <View style={styles.wrapper}>
      <Pressable
        onPress={onPress}
        style={[
          styles.card,
          {
            borderColor: isRelevant
              ? guideStyle.color
              : guideStyle.chipBorder ?? 'rgba(255,255,255,0.2)',
            borderWidth: 1.5,
            backgroundColor: isRelevant ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.92)',
          },
        ]}
      >
        <View style={styles.headerRow}>
          <View
            style={[
              styles.dot,
              {
                backgroundColor: isRelevant ? guideStyle.color : 'transparent',
                borderColor: guideStyle.color,
                borderWidth: 2,
                transform: [{ scale: isRelevant ? 1.1 : 1 }, { rotate: '45deg' }],
                shadowColor: guideStyle.color,
                shadowOpacity: isRelevant ? 0.25 : 0,
                shadowRadius: isRelevant ? 6 : 0,
                shadowOffset: { width: 0, height: 0 },
              },
            ]}
          />
          <View style={styles.headerTextWrap}>
            {isRelevant ? (
              <Text style={[styles.relevantLabel, { color: guideStyle.color }]}>
                Year Highlighted by Guide
              </Text>
            ) : null}
            <Text
              style={[
                styles.title,
                { color: isRelevant ? guideStyle.color : '#2F3437' },
              ]}
            >
              {guideStyle.label}
            </Text>
            <Text style={styles.subtitle}>Tap to learn more</Text>
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
    width: 220,
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
  dot: {
    width: 12,
    height: 12,
    transform: [{ rotate: '45deg' }],
    borderRadius: 2,
    marginRight: 12,
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
  relevantLabel: {
    marginBottom: 2,
    top: -4,
    fontSize: 10,
    fontWeight: '600',
    opacity: 0.9,
  },
});