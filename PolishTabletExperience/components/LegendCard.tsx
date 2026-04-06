import React, { useState } from 'react';
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
  onExitGuide?: () => void;
};

export default function LegendCard({
  isRelevant = false,
  onExitGuide,
}: GuideCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={styles.wrapper}>
      <Pressable
        style={[
          styles.card,
          {
            borderColor:'rgba(255,255,255,0.2)',
            borderWidth: 1.5,
            backgroundColor: 'rgba(255,255,255,0.92)',
          },
        ]}
      >
        <View style={styles.headerRow}>
          <View style={styles.headerTextWrap}>
          <Text
              style={[
                styles.title,
                { color: '#2F3437' },
              ]}
            >
              Legend
            </Text>
            <Text style={styles.subtitle}>
              Tap to see more
            </Text>
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
  expandedContent: {
    marginTop: 14,
    paddingTop: 14,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.08)',
  },
  description: {
    fontSize: 14,
    lineHeight: 21,
    color: '#42484a',
  },
  section: {
    marginTop: 14,
  },
  sectionLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: '#2F3437',
    marginBottom: 6,
  },
  bulletText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#515558',
    marginBottom: 2,
  },
  actionRow: {
    flexDirection: 'row',
    marginTop: 18,
    gap: 10,
  },
  secondaryButton: {
    flex: 1,
    height: 40,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  secondaryButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#42484a',
  },
  primaryButton: {
    flex: 1,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#ffffff',
  },
  relevantLabel: {
    marginBottom: 2,
    top: -4,
    fontSize: 10,
    fontWeight: '600',
    opacity: 0.9,
  },
});