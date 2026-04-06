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

export default function GuideCard({
  guideStyle,
  isRelevant = false,
  onExitGuide,
}: GuideCardProps) {
  const [expanded, setExpanded] = useState(false);

  if (!guideStyle) return null;

  return (
    <View style={styles.wrapper}>
      <Pressable
        onPress={() => setExpanded((prev) => !prev)}
        style={[
          styles.card,
          {
            borderColor: isRelevant
              ? guideStyle.color
              : guideStyle.chipBorder ?? 'rgba(255,255,255,0.2)',
            borderWidth: isRelevant ? 1.5 : 1.5,
            backgroundColor: isRelevant ? 'rgba(255,255,255, 1)' : 'rgba(255,255,255,0.92)',
            
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
              <Text
                style={[
                  styles.relevantLabel,
                  { color: guideStyle.color },
                ]}
              >
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
            <Text style={styles.subtitle}>
              {expanded ? 'Tap to close' : 'Tap to learn more'}
            </Text>
          </View>
        </View>

        {expanded ? (
          <View style={styles.expandedContent}>
            {guideStyle.description ? (
              <Text style={styles.description}>
                {guideStyle.description}
              </Text>
            ) : null}

            {guideStyle.focusesOn?.length ? (
              <View style={styles.section}>
                <Text style={styles.sectionLabel}>This guide focuses on</Text>
                {guideStyle.focusesOn.map((item) => (
                  <Text key={item} style={styles.bulletText}>
                    • {item}
                  </Text>
                ))}
              </View>
            ) : null}

            <View style={styles.actionRow}>
              <Pressable
                onPress={() => {}}
                style={styles.secondaryButton}
              >
                <Text style={styles.secondaryButtonText}>
                  Legend
                </Text>
              </Pressable>

              <Pressable
                onPress={onExitGuide}
                style={[
                  styles.primaryButton,
                  { backgroundColor: guideStyle.color },
                ]}
              >
                <Text style={styles.primaryButtonText}>
                  Exit Guide
                </Text>
              </Pressable>
            </View>
          </View>
        ) : null}
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