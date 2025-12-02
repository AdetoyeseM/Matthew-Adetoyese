// ignore_for_file: deprecated_member_use

import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:myportfolio/theme/app_colors.dart';
import 'dart:ui';

class SkillsScreen extends StatelessWidget {
  const SkillsScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;

    // Skills data matching research portfolio exactly
    final skills = {
      'languages': [
        "GOLang",
        "Dart",
        "Java",
        "Kotlin",
        "Swift",
        "Python",
        "JavaScript",
        "TypeScript",
        "SQL"
      ],
      'frameworks': [
        "GIN",
        "NextJS",
        "Flutter",
        "React Native",
        "Android SDK",
        "iOS SDK"
      ],
      'tools': [
        "Git",
        "Docker",
        "Firebase",
        "Codemagic",
        "CI/CD",
        "GraphQL",
        "REST APIs"
      ],
      'concepts': [
        "MVC/MVVM/MVP",
        "Clean Architecture",
        "Agile/Scrum",
        "DevOps",
        "Security",
        "Performance Optimization"
      ],
    };

    return LayoutBuilder(
      builder: (context, constraints) {
        final isMobile = constraints.maxWidth < 768;
        return Container(
          padding: EdgeInsets.symmetric(
            horizontal: isMobile ? 16 : 16,
            vertical: isMobile ? 48 : 48,
          ),
          child: _GlassCard(
            isDark: isDark,
            child: Padding(
              padding: EdgeInsets.all(isMobile ? 32 : 24),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  // Title with icon
                  Row(
                    children: [
                      Icon(
                        FontAwesomeIcons.code,
                        size: 28,
                        color: isDark
                            ? AppColors.darkAccent
                            : AppColors.lightAccent,
                      ),
                      const SizedBox(width: 12),
                      Text(
                        "Skills & Competences",
                        style: TextStyle(
                          fontSize: 28,
                          fontWeight: FontWeight.bold,
                          color: isDark
                              ? AppColors.darkForeground
                              : AppColors.lightForeground,
                        ),
                      ),
                    ],
                  ),
                  SizedBox(height: isMobile ? 24 : 16),
              // 2x2 Grid layout
              (isMobile
                      ? Column(
                          children: [
                            _SkillGroup(
                              title: 'Programming Languages',
                              items: skills['languages']!,
                              icon: FontAwesomeIcons.bolt,
                              chipStyle: ChipStyle.accent,
                              isDark: isDark,
                            ),
                            const SizedBox(height: 24),
                            _SkillGroup(
                              title: 'Frameworks & Platforms',
                              items: skills['frameworks']!,
                              icon: FontAwesomeIcons.mobileAlt,
                              chipStyle: ChipStyle.primary,
                              isDark: isDark,
                            ),
                            const SizedBox(height: 24),
                            _SkillGroup(
                              title: 'Tools & Technologies',
                              items: skills['tools']!,
                              icon: FontAwesomeIcons.cloud,
                              chipStyle: ChipStyle.muted,
                              isDark: isDark,
                            ),
                            const SizedBox(height: 24),
                            _SkillGroup(
                              title: 'Concepts & Practices',
                              items: skills['concepts']!,
                              icon: FontAwesomeIcons.shield,
                              chipStyle: ChipStyle.muted,
                              isDark: isDark,
                            ),
                          ],
                        )
                      : GridView.count(
                          crossAxisCount: 2,
                          crossAxisSpacing: 16,
                          mainAxisSpacing: 16,
                          shrinkWrap: true,
                          physics: const NeverScrollableScrollPhysics(),
                          childAspectRatio: 1.1,
                          children: [
                            _SkillGroup(
                              title: 'Programming Languages',
                              items: skills['languages']!,
                              icon: FontAwesomeIcons.bolt,
                              chipStyle: ChipStyle.accent,
                              isDark: isDark,
                            ),
                            _SkillGroup(
                              title: 'Frameworks & Platforms',
                              items: skills['frameworks']!,
                              icon: FontAwesomeIcons.mobileAlt,
                              chipStyle: ChipStyle.primary,
                              isDark: isDark,
                            ),
                            _SkillGroup(
                              title: 'Tools & Technologies',
                              items: skills['tools']!,
                              icon: FontAwesomeIcons.cloud,
                              chipStyle: ChipStyle.muted,
                              isDark: isDark,
                            ),
                            _SkillGroup(
                              title: 'Concepts & Practices',
                              items: skills['concepts']!,
                              icon: FontAwesomeIcons.shield,
                              chipStyle: ChipStyle.muted,
                              isDark: isDark,
                            ),
                          ],
                        )),
                ],
              ),
            ),
          ),
        );
      },
    );
  }
}

enum ChipStyle { accent, primary, muted }

class _SkillGroup extends StatelessWidget {
  final String title;
  final List<String> items;
  final IconData icon;
  final ChipStyle chipStyle;
  final bool isDark;

  const _SkillGroup({
    Key? key,
    required this.title,
    required this.items,
    required this.icon,
    required this.chipStyle,
    required this.isDark,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final accentColor = isDark ? AppColors.darkAccent : AppColors.lightAccent;
    final isMobile = MediaQuery.of(context).size.width < 768;

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(
          children: [
            Icon(icon, size: 20, color: accentColor),
            const SizedBox(width: 8),
            Text(
              title,
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.w600,
                color: isDark
                    ? AppColors.darkForeground
                    : AppColors.lightForeground,
              ),
            ),
          ],
        ),
        SizedBox(height: isMobile ? 16 : 12),
        Wrap(
          spacing: 8.0,
          runSpacing: 8.0,
          children: items
              .map((item) => _Chip(
                    label: item,
                    chipStyle: chipStyle,
                    isDark: isDark,
                  ))
              .toList(),
        ),
      ],
    );
  }
}

class _Chip extends StatelessWidget {
  final String label;
  final ChipStyle chipStyle;
  final bool isDark;

  const _Chip({
    Key? key,
    required this.label,
    required this.chipStyle,
    required this.isDark,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    Color backgroundColor;
    Color textColor;
    Color borderColor;

    switch (chipStyle) {
      case ChipStyle.accent:
        final accentColor =
            isDark ? AppColors.darkAccent : AppColors.lightAccent;
        backgroundColor = accentColor.withOpacity(0.1);
        textColor = accentColor;
        borderColor = accentColor.withOpacity(0.2);
        break;
      case ChipStyle.primary:
        final primaryColor =
            isDark ? AppColors.darkPrimary : AppColors.lightPrimary;
        backgroundColor = primaryColor.withOpacity(0.1);
        textColor = primaryColor;
        borderColor = primaryColor.withOpacity(0.2);
        break;
      case ChipStyle.muted:
        backgroundColor = isDark
            ? Colors.white.withOpacity(0.05)
            : Colors.white.withOpacity(0.05);
        textColor = isDark
            ? AppColors.darkForeground.withOpacity(0.7)
            : AppColors.lightForeground.withOpacity(0.7);
        borderColor = isDark
            ? Colors.white.withOpacity(0.1)
            : Colors.white.withOpacity(0.1);
        break;
    }

    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 12.0, vertical: 6.0),
      decoration: BoxDecoration(
        color: backgroundColor,
        border: Border.all(color: borderColor),
        borderRadius: BorderRadius.circular(8.0),
      ),
      child: Text(
        label,
        style: TextStyle(
          fontSize: 12,
          color: textColor,
        ),
      ),
    );
  }
}

// Glassmorphism card component
class _GlassCard extends StatelessWidget {
  final Widget child;
  final bool isDark;

  const _GlassCard({
    Key? key,
    required this.child,
    required this.isDark,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: isDark
            ? AppColors.darkCard.withOpacity(0.5)
            : AppColors.lightCard.withOpacity(0.5),
        borderRadius: BorderRadius.circular(18),
        border: Border.all(
          color: isDark
              ? AppColors.darkBorder.withOpacity(0.18)
              : AppColors.lightBorder.withOpacity(0.06),
          width: 1,
        ),
      ),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(18),
        child: BackdropFilter(
          filter: ImageFilter.blur(sigmaX: 10, sigmaY: 10),
          child: child,
        ),
      ),
    );
  }
}
