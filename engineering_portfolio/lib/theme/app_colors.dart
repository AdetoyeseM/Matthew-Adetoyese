import 'package:flutter/material.dart';

class AppColors {
  // Research Portfolio Color System (converted from OKLCH)
  // Light theme
  static const Color lightBackground = Color(0xFFFFFFFF); // oklch(1 0 0) - white
  static const Color lightForeground = Color(0xFF262626); // oklch(0.15 0 0) - dark text
  static const Color lightCard = Color(0xFFFCFCFC); // oklch(0.99 0 0) - off-white
  static const Color lightCardForeground = Color(0xFF262626); // oklch(0.15 0 0)
  static const Color lightPrimary = Color(0xFF2B4A6F); // oklch(0.35 0.15 240) - blue
  static const Color lightPrimaryForeground = Color(0xFFFAFAFA); // oklch(0.98 0 0)
  static const Color lightSecondary = Color(0xFFF5F5F5); // oklch(0.96 0 0)
  static const Color lightSecondaryForeground = Color(0xFF333333); // oklch(0.2 0 0)
  static const Color lightAccent = Color(0xFF6B4A8F); // oklch(0.45 0.2 280) - purple
  static const Color lightAccentForeground = Color(0xFFFAFAFA); // oklch(0.98 0 0)
  static const Color lightMuted = Color(0xFFF2F2F2); // oklch(0.95 0 0)
  static const Color lightMutedForeground = Color(0xFF737373); // oklch(0.45 0 0)
  static const Color lightBorder = Color(0xFFE6E6E6); // oklch(0.9 0 0)
  static const Color lightInput = Color(0xFFF2F2F2); // oklch(0.95 0 0)
  static const Color lightRing = Color(0xFF737373); // oklch(0.45 0.2 240)

  // Dark theme
  static const Color darkBackground = Color(0xFF141414); // oklch(0.08 0 0) - very dark
  static const Color darkForeground = Color(0xFFFAFAFA); // oklch(0.98 0 0) - light text
  static const Color darkCard = Color(0xFF1F1F2E); // oklch(0.15 0.02 240) - dark blue-grey
  static const Color darkCardForeground = Color(0xFFF2F2F2); // oklch(0.95 0 0)
  static const Color darkPrimary = Color(0xFF5B7FA8); // oklch(0.55 0.22 240) - lighter blue
  static const Color darkPrimaryForeground = Color(0xFF262626); // oklch(0.15 0 0)
  static const Color darkSecondary = Color(0xFF404040); // oklch(0.25 0 0)
  static const Color darkSecondaryForeground = Color(0xFFF2F2F2); // oklch(0.95 0 0)
  static const Color darkAccent = Color(0xFF8B6BAF); // oklch(0.65 0.25 280) - lighter purple
  static const Color darkAccentForeground = Color(0xFF141414); // oklch(0.08 0 0)
  static const Color darkMuted = Color(0xFF595959); // oklch(0.35 0 0)
  static const Color darkMutedForeground = Color(0xFFB3B3B3); // oklch(0.7 0 0)
  static const Color darkBorder = Color(0xFF404040); // oklch(0.25 0.02 240)
  static const Color darkInput = Color(0xFF1F1F2E); // oklch(0.12 0.01 240)
  static const Color darkRing = Color(0xFF6B7FA8); // oklch(0.6 0.2 240)

  // Legacy aliases for compatibility
  static const Color lightBackgroundColor = lightBackground;
  static const Color lightTextColor = lightForeground;
  static const Color lightAccentColor = lightAccent;
  static const Color lightCardColor = lightCard;
  static const Color lightShadowColor = lightBorder;
  static const Color lightDividerColor = lightBorder;

  static const Color darkBackgroundColor = darkBackground;
  static const Color darkTextColor = darkForeground;
  static const Color darkAccentColor = darkAccent;
  static const Color darkCardColor = darkCard;
  static const Color darkShadowColor = darkBackground;
  static const Color darkDividerColor = darkBorder;
}
