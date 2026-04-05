import { Modal, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, { Easing, FadeIn, FadeInUp } from 'react-native-reanimated';

import { FontFamily, MainColors } from '@/constants/theme';

const SCREEN_BG = MainColors.backgroundBeige;

type Props = {
  visible: boolean;
  onContinue: () => void;
  onRequestClose: () => void;
};

const easeOut = Easing.out(Easing.cubic);

export function EndJourneyFullScreen({ visible, onContinue, onRequestClose }: Props) {
  return (
    <Modal visible={visible} animationType="none" presentationStyle="fullScreen" onRequestClose={onRequestClose}>
      <Animated.View
        style={styles.root}
        entering={FadeIn.duration(420).easing(easeOut)}
      >
        <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
            bounces
          >
            <Animated.View
              style={styles.content}
              entering={FadeInUp.delay(120).duration(520).easing(easeOut)}
            >
              <Animated.View
                style={styles.titleWrap}
                entering={FadeInUp.delay(180).duration(560).springify().damping(22).stiffness(140)}
              >
                <Text style={styles.title}>Congratulations!</Text>
              </Animated.View>

              <Animated.View entering={FadeInUp.delay(280).duration(520).easing(easeOut)}>
                <Text style={styles.bodyMuted}>
                  {"You've traveled across centuries of Polish history—\nwitnessing change, resilience, and transformation."}
                </Text>
              </Animated.View>

              <Animated.View entering={FadeInUp.delay(400).duration(520).easing(easeOut)}>
                <View style={styles.bodyDivider} />
                <Text style={styles.body}>
                  {"Every place you explored tells a story.\n\nAnd there's always more waiting to be discovered."}
                </Text>
              </Animated.View>

              <Animated.View entering={FadeInUp.delay(540).duration(480).easing(easeOut)}>
                <TouchableOpacity
                  style={styles.continueButton}
                  onPress={onContinue}
                  activeOpacity={0.88}
                  accessibilityRole="button"
                  accessibilityLabel="Continue to guide"
                >
                  <Text style={styles.continueLabel}>Back to Guide</Text>
                </TouchableOpacity>
              </Animated.View>
            </Animated.View>
          </ScrollView>
        </SafeAreaView>
      </Animated.View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: SCREEN_BG,
  },
  safe: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 36,
    paddingVertical: 32,
    maxWidth: 720,
    width: '100%',
    alignSelf: 'center',
  },
  content: {
    gap: 28,
    width: '100%',
  },
  titleWrap: {
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    lineHeight: 46,
    fontWeight: '800',
    color: MainColors.pointRed,
    fontFamily: FontFamily.khula,
    textAlign: 'center',
  },
  body: {
    fontSize: 21,
    lineHeight: 32,
    fontWeight: '400',
    color: MainColors.primaryBlack,
    fontFamily: FontFamily.interMedium,
    textAlign: 'center',
  },
  bodyMuted: {
    fontSize: 21,
    lineHeight: 32,
    fontWeight: '400',
    color: MainColors.secondaryGrey,
    fontFamily: FontFamily.interMedium,
    textAlign: 'center',
  },
  bodyDivider: {
    height: 1,
    backgroundColor: 'rgba(46, 42, 42, 0.12)',
    marginBottom: 24,
    marginHorizontal: 8,
  },
  continueButton: {
    marginTop: 8,
    alignSelf: 'center',
    paddingVertical: 16,
    paddingHorizontal: 48,
    borderRadius: 40,
    backgroundColor: MainColors.pointRed,
  },
  continueLabel: {
    color: '#FFFFFF',
    fontSize: 18,
    lineHeight: 24,
    fontFamily: FontFamily.interMedium,
  },
});
