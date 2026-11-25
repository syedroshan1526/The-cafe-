/**
 * Adaptive Scene Color & Contrast Themes
 * Controls navbar and UI styling based on current video scene background brightness.
 */

export interface SceneThemeConfig {
  chapter: number;
  isBrightScene: boolean;
  navBackground: string;
  navBorder: string;
  textColor: string;
  textMutedColor: string;
  logoColor: string;
  logoBg: string;
  logoBorder: string;
  buttonBg: string;
  buttonText: string;
  buttonHoverBg: string;
  activeIndicatorColor: string;
}

export const SCENE_THEMES: Record<number, SceneThemeConfig> = {
  // Acts 1 to 7: Dark / rich coffee bar footage
  1: {
    chapter: 1,
    isBrightScene: false,
    navBackground: 'bg-coffee-950/45 backdrop-blur-md',
    navBorder: 'border-coffee-300/15',
    textColor: 'text-coffee-100',
    textMutedColor: 'text-coffee-300/80',
    logoColor: 'text-coffee-50',
    logoBg: 'bg-coffee-900/80',
    logoBorder: 'border-coffee-300/30',
    buttonBg: 'bg-coffee-200',
    buttonText: 'text-coffee-950',
    buttonHoverBg: 'hover:bg-coffee-100',
    activeIndicatorColor: 'bg-coffee-300',
  },
  2: {
    chapter: 2,
    isBrightScene: false,
    navBackground: 'bg-coffee-950/50 backdrop-blur-md',
    navBorder: 'border-coffee-300/15',
    textColor: 'text-coffee-100',
    textMutedColor: 'text-coffee-300/80',
    logoColor: 'text-coffee-50',
    logoBg: 'bg-coffee-900/80',
    logoBorder: 'border-coffee-300/30',
    buttonBg: 'bg-coffee-200',
    buttonText: 'text-coffee-950',
    buttonHoverBg: 'hover:bg-coffee-100',
    activeIndicatorColor: 'bg-coffee-300',
  },
  3: {
    chapter: 3,
    isBrightScene: false,
    navBackground: 'bg-coffee-950/50 backdrop-blur-md',
    navBorder: 'border-coffee-300/15',
    textColor: 'text-coffee-100',
    textMutedColor: 'text-coffee-300/80',
    logoColor: 'text-coffee-50',
    logoBg: 'bg-coffee-900/80',
    logoBorder: 'border-coffee-300/30',
    buttonBg: 'bg-coffee-200',
    buttonText: 'text-coffee-950',
    buttonHoverBg: 'hover:bg-coffee-100',
    activeIndicatorColor: 'bg-coffee-300',
  },
  4: {
    chapter: 4,
    isBrightScene: false,
    navBackground: 'bg-coffee-950/50 backdrop-blur-md',
    navBorder: 'border-coffee-300/15',
    textColor: 'text-coffee-100',
    textMutedColor: 'text-coffee-300/80',
    logoColor: 'text-coffee-50',
    logoBg: 'bg-coffee-900/80',
    logoBorder: 'border-coffee-300/30',
    buttonBg: 'bg-coffee-200',
    buttonText: 'text-coffee-950',
    buttonHoverBg: 'hover:bg-coffee-100',
    activeIndicatorColor: 'bg-coffee-300',
  },
  5: {
    chapter: 5,
    isBrightScene: false,
    navBackground: 'bg-coffee-950/50 backdrop-blur-md',
    navBorder: 'border-coffee-300/15',
    textColor: 'text-coffee-100',
    textMutedColor: 'text-coffee-300/80',
    logoColor: 'text-coffee-50',
    logoBg: 'bg-coffee-900/80',
    logoBorder: 'border-coffee-300/30',
    buttonBg: 'bg-coffee-200',
    buttonText: 'text-coffee-950',
    buttonHoverBg: 'hover:bg-coffee-100',
    activeIndicatorColor: 'bg-coffee-300',
  },
  6: {
    chapter: 6,
    isBrightScene: false,
    navBackground: 'bg-coffee-950/50 backdrop-blur-md',
    navBorder: 'border-coffee-300/15',
    textColor: 'text-coffee-100',
    textMutedColor: 'text-coffee-300/80',
    logoColor: 'text-coffee-50',
    logoBg: 'bg-coffee-900/80',
    logoBorder: 'border-coffee-300/30',
    buttonBg: 'bg-coffee-200',
    buttonText: 'text-coffee-950',
    buttonHoverBg: 'hover:bg-coffee-100',
    activeIndicatorColor: 'bg-coffee-300',
  },
  7: {
    chapter: 7,
    isBrightScene: false,
    navBackground: 'bg-coffee-950/50 backdrop-blur-md',
    navBorder: 'border-coffee-300/15',
    textColor: 'text-coffee-100',
    textMutedColor: 'text-coffee-300/80',
    logoColor: 'text-coffee-50',
    logoBg: 'bg-coffee-900/80',
    logoBorder: 'border-coffee-300/30',
    buttonBg: 'bg-coffee-200',
    buttonText: 'text-coffee-950',
    buttonHoverBg: 'hover:bg-coffee-100',
    activeIndicatorColor: 'bg-coffee-300',
  },
  // Act 8: Keep consistent luxury espresso frosted pill for 100% legibility and seamless continuity
  8: {
    chapter: 8,
    isBrightScene: false,
    navBackground: 'bg-coffee-950/65 backdrop-blur-md shadow-2xl',
    navBorder: 'border-coffee-300/20',
    textColor: 'text-coffee-100',
    textMutedColor: 'text-coffee-300/80',
    logoColor: 'text-coffee-50',
    logoBg: 'bg-coffee-900/80',
    logoBorder: 'border-coffee-300/30',
    buttonBg: 'bg-coffee-200',
    buttonText: 'text-coffee-950',
    buttonHoverBg: 'hover:bg-coffee-100',
    activeIndicatorColor: 'bg-coffee-300',
  },
  // Dark Editorial mode for Menu and Visit sections
  9: {
    chapter: 9,
    isBrightScene: false,
    navBackground: 'bg-coffee-950/75 backdrop-blur-md shadow-2xl',
    navBorder: 'border-coffee-800/50',
    textColor: 'text-coffee-100',
    textMutedColor: 'text-coffee-300/80',
    logoColor: 'text-coffee-50',
    logoBg: 'bg-coffee-900/90',
    logoBorder: 'border-coffee-300/30',
    buttonBg: 'bg-coffee-200',
    buttonText: 'text-coffee-950',
    buttonHoverBg: 'hover:bg-coffee-100',
    activeIndicatorColor: 'bg-coffee-300',
  },
};
