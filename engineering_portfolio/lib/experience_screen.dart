import 'package:flutter/material.dart';
import 'package:myportfolio/theme/app_colors.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'dart:ui';

class ExperienceScreen extends StatelessWidget {
  const ExperienceScreen({Key? key}) : super(key: key);

  // Professional Experience data matching research portfolio
  final List<Map<String, dynamic>> professionalExperience = const [
    {
      'title': 'Mobile Engineer',
      'organization': 'Chapel Hill Denham',
      'period': 'Dec. 2022 - Present',
      'role': 'Lead Mobile Engineer',
      'achievements': [
        'Designed and maintained secure, regulatory-compliant mobile applications for pension fund management',
        'Achieved 70% boost in customer satisfaction through improved UX and performance optimizations',
        'Collaborated with QA, designers, backend developers, and stakeholders in agile environment',
        'Leveraged DevOps practices (Codemagic, Docker, Firebase) to improve deployment efficiency by 75%',
        'Architected scalable mobile solutions handling \$10M+ in assets under management',
      ],
    },
    {
      'title': 'Mobile Engineer',
      'organization': 'Nitax Technologies',
      'period': 'Oct. 2021 - Jan. 2023',
      'role': 'Senior Mobile Developer',
      'achievements': [
        'Developed and maintained mobile applications using Dart (Flutter) and Java (Android)',
        'Increased development speed by 15% through implementation of MVC/MVVM/MVP architectures',
        'Reduced time-to-market by 30% and boosted user retention by 60%',
        'Applied DevOps tools to streamline deployment and improve efficiency by 30%',
        'Built real-time data synchronization features for trading and investment platforms',
      ],
    },
    {
      'title': 'Mobile App Developer',
      'organization': 'Esusu Africa Technology Innovation Hub',
      'period': 'Mar. 2020 - Dec. 2021',
      'role': 'Mobile Engineer',
      'achievements': [
        'Supported the full fintech application lifecycle from concept to release',
        'Designed and developed fully functional mobile apps with clean, bug-free code',
        'Deployed applications to official repositories (Google Play Store, Apple App Store)',
        'Collaborated with product teams to ensure quality standards and regulatory compliance',
        'Implemented payment gateway integrations for crypto and traditional transactions',
      ],
    },
  ];

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 48),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisSize: MainAxisSize.min,
        children: [
          // Title with icon
          Row(
            children: [
              Icon(
                FontAwesomeIcons.briefcase,
                size: 28,
                color: isDark ? AppColors.darkAccent : AppColors.lightAccent,
              ),
              const SizedBox(width: 12),
              Text(
                "Professional Experience",
                style: TextStyle(
                  fontSize: 28,
                  fontWeight: FontWeight.bold,
                  color: isDark ? AppColors.darkForeground : AppColors.lightForeground,
                ),
              ),
            ],
          ),
          const SizedBox(height: 24),
          // Experience cards
          ...professionalExperience.map((exp) => Padding(
                padding: const EdgeInsets.only(bottom: 24),
                child: _ExperienceCard(
                  title: exp['title'] as String,
                  organization: exp['organization'] as String,
                  period: exp['period'] as String,
                  role: exp['role'] as String?,
                  achievements: (exp['achievements'] as List<String>),
                  isDark: isDark,
                ),
              )),
        ],
      ),
    );
  }
}

class _ExperienceCard extends StatelessWidget {
  final String title;
  final String organization;
  final String period;
  final String? role;
  final List<String> achievements;
  final bool isDark;

  const _ExperienceCard({
    Key? key,
    required this.title,
    required this.organization,
    required this.period,
    this.role,
    required this.achievements,
    required this.isDark,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final primaryColor = isDark ? AppColors.darkPrimary : AppColors.lightPrimary;
    
    return Container(
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(18),
        border: Border.all(
          color: isDark
              ? AppColors.darkBorder.withOpacity(0.18)
              : AppColors.lightBorder.withOpacity(0.06),
        ),
      ),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(18),
        child: Stack(
          children: [
            // Main container with backdrop
            Container(
              padding: const EdgeInsets.all(32),
              decoration: BoxDecoration(
                color: isDark
                    ? AppColors.darkCard.withOpacity(0.5)
                    : AppColors.lightCard.withOpacity(0.5),
              ),
              child: BackdropFilter(
                filter: ImageFilter.blur(sigmaX: 10, sigmaY: 10),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
              // Header with title, organization, role, and period
              LayoutBuilder(
                builder: (context, constraints) {
                  final isMobile = constraints.maxWidth < 768;
                  return isMobile
                      ? Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              title,
                              style: TextStyle(
                                fontSize: 20,
                                fontWeight: FontWeight.w600,
                                color: isDark ? AppColors.darkForeground : AppColors.lightForeground,
                              ),
                            ),
                            const SizedBox(height: 4),
                            Text(
                              organization,
                              style: TextStyle(
                                fontSize: 16,
                                fontWeight: FontWeight.w500,
                                color: primaryColor,
                              ),
                            ),
                            if (role != null) ...[
                              const SizedBox(height: 4),
                              Text(
                                'Role: $role',
                                style: TextStyle(
                                  fontSize: 14,
                                  color: isDark
                                      ? AppColors.darkForeground.withOpacity(0.6)
                                      : AppColors.lightForeground.withOpacity(0.6),
                                ),
                              ),
                            ],
                            const SizedBox(height: 8),
                            Text(
                              period,
                              style: TextStyle(
                                fontSize: 12,
                                color: isDark
                                    ? AppColors.darkForeground.withOpacity(0.6)
                                    : AppColors.lightForeground.withOpacity(0.6),
                              ),
                            ),
                          ],
                        )
                      : Row(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            Expanded(
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Text(
                                    title,
                                    style: TextStyle(
                                      fontSize: 20,
                                      fontWeight: FontWeight.w600,
                                      color: isDark ? AppColors.darkForeground : AppColors.lightForeground,
                                    ),
                                  ),
                                  const SizedBox(height: 4),
                                  Text(
                                    organization,
                                    style: TextStyle(
                                      fontSize: 16,
                                      fontWeight: FontWeight.w500,
                                      color: primaryColor,
                                    ),
                                  ),
                                  if (role != null) ...[
                                    const SizedBox(height: 4),
                                    Text(
                                      'Role: $role',
                                      style: TextStyle(
                                        fontSize: 14,
                                        color: isDark
                                            ? AppColors.darkForeground.withOpacity(0.6)
                                            : AppColors.lightForeground.withOpacity(0.6),
                                      ),
                                    ),
                                  ],
                                ],
                              ),
                            ),
                            Text(
                              period,
                              style: TextStyle(
                                fontSize: 12,
                                color: isDark
                                    ? AppColors.darkForeground.withOpacity(0.6)
                                    : AppColors.lightForeground.withOpacity(0.6),
                              ),
                            ),
                          ],
                        );
                },
              ),
              const SizedBox(height: 16),
              // Achievements list
              ...achievements.map((achievement) => Padding(
                    padding: const EdgeInsets.only(bottom: 8),
                    child: Row(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Padding(
                          padding: const EdgeInsets.only(top: 2, right: 12),
                          child: Text(
                            '›',
                            style: TextStyle(
                              fontSize: 16,
                              color: primaryColor,
                            ),
                          ),
                        ),
                        Expanded(
                          child: Text(
                            achievement,
                            style: TextStyle(
                              fontSize: 14,
                              height: 1.5,
                              color: isDark
                                  ? AppColors.darkForeground.withOpacity(0.7)
                                  : AppColors.lightForeground.withOpacity(0.7),
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
                  ],
                ),
              ),
            ),
            // Left accent border
            Positioned(
              left: 0,
              top: 0,
              bottom: 0,
              child: Container(
                width: 4,
                decoration: BoxDecoration(
                  color: primaryColor,
                  borderRadius: const BorderRadius.only(
                    topLeft: Radius.circular(18),
                    bottomLeft: Radius.circular(18),
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
