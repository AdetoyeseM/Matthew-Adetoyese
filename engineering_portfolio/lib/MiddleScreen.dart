// ignore_for_file: deprecated_member_use

import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';
import 'dart:ui';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:myportfolio/theme/app_colors.dart';

class MiddleScreen extends StatelessWidget {
  // Projects data matching research portfolio exactly
  final List<Map<String, dynamic>> projects = const [
    {
      'name': 'TrustFund Mobile',
      'description': 'Secure pension fund management platform enabling users to track and manage retirement accounts seamlessly',
      'role': 'Mobile Engineer',
      'platforms': ['iOS', 'Android'],
      'stack': ['Flutter', 'Kotlin', 'Swift', 'Firebase', 'REST APIs', 'Docker', 'Codemagic'],
      'achievements': ['Manages \$10M+ in assets', '70% customer satisfaction increase', 'Regulatory compliant'],
      'androidLink': 'https://play.google.com/store/apps/details?id=com.trustfund.TrustFundMobile&hl=en',
      'iosLink': 'https://apps.apple.com/ng/app/trustfund-mobile/id1093997889',
    },
    {
      'name': 'Duffle',
      'description': 'Crypto payment platform making digital currencies as practical as cash for everyday transactions',
      'role': 'Mobile Developer',
      'platforms': ['iOS', 'Android'],
      'stack': ['Dart', 'Blockchain APIs', 'Payment Gateways', 'Web3'],
      'achievements': ['70% increase in user engagement', 'Secure crypto transactions'],
      'androidLink': 'http://play.google.com/store/apps/details?id=io.ivorychain.duffle&pli=1',
      'iosLink': 'https://apps.apple.com/us/app/duffle/id6739775801',
    },
    {
      'name': 'InvestNaija',
      'description': 'All-in-one investment platform for planning, saving, and investing in mutual funds, bonds, and REITs',
      'role': 'Software Engineer',
      'platforms': ['iOS', 'Android'],
      'stack': ['Flutter', 'Kotlin', 'Swift', 'Rest APIs', 'Real-time Data', 'Firebase'],
      'achievements': ['Democratized investment access', 'Real-time portfolio tracking'],
      'androidLink': 'https://play.google.com/store/apps/details?id=com.chapelhilldenham.invest_naija',
      'iosLink': 'https://apps.apple.com/us/app/investnaija/id1579193940',
    },
    {
      'name': 'PrimaryOffer',
      'description': 'NGX-backed platform for purchasing public offers and rights issues on Nigerian exchanges',
      'role': 'Mobile Developer',
      'platforms': ['iOS', 'Android'],
      'stack': ['Kotlin', 'Swift', 'Payment Integration', 'REST APIs'],
      'achievements': ['75% surge in user engagement', 'NGX integration'],
      'androidLink': null,
      'iosLink': 'https://apps.apple.com/ng/app/primaryoffer/id1584954524',
    },
    {
      'name': 'LiteTrade',
      'description': 'Developed a trading app for buying and selling gift cards, airtime, and more',
      'role': 'Mobile Developer',
      'platforms': ['Android'],
      'stack': ['Flutter', 'Java', 'WebSockets', 'Local Caching', 'REST APIs'],
      'achievements': ['Fast trading on limited bandwidth', 'Real-time market data'],
      'androidLink': 'https://play.google.com/store/apps/details?id=com.mobirevo.tradelite',
      'iosLink': null,
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
                FontAwesomeIcons.mobileAlt,
                size: 28,
                color: isDark ? AppColors.darkAccent : AppColors.lightAccent,
              ),
              const SizedBox(width: 12),
              Text(
                "Featured Projects",
                style: TextStyle(
                  fontSize: 28,
                  fontWeight: FontWeight.bold,
                  color: isDark ? AppColors.darkForeground : AppColors.lightForeground,
                ),
              ),
            ],
          ),
          const SizedBox(height: 12),
          // Description
          Text(
            "Production-grade mobile applications where I led or contributed significantly to architecture, implementation, and user experience.",
            style: TextStyle(
              fontSize: 16,
              color: isDark
                  ? AppColors.darkForeground.withOpacity(0.7)
                  : AppColors.lightForeground.withOpacity(0.7),
            ),
          ),
          const SizedBox(height: 32),
          // Projects list
          ...projects.asMap().entries.map((entry) {
            final idx = entry.key;
            final project = entry.value;
            return Padding(
              padding: EdgeInsets.only(bottom: idx < projects.length - 1 ? 24 : 0),
              child: _ProjectCard(
                name: project['name'] as String,
                description: project['description'] as String,
                role: project['role'] as String,
                platforms: (project['platforms'] as List).cast<String>(),
                stack: (project['stack'] as List).cast<String>(),
                achievements: (project['achievements'] as List).cast<String>(),
                androidLink: project['androidLink'] as String?,
                iosLink: project['iosLink'] as String?,
                isDark: isDark,
              ),
            );
          }),
        ],
      ),
    );
  }
}

class _ProjectCard extends StatefulWidget {
  final String name;
  final String description;
  final String role;
  final List<String> platforms;
  final List<String> stack;
  final List<String> achievements;
  final String? androidLink;
  final String? iosLink;
  final bool isDark;

  const _ProjectCard({
    Key? key,
    required this.name,
    required this.description,
    required this.role,
    required this.platforms,
    required this.stack,
    required this.achievements,
    this.androidLink,
    this.iosLink,
    required this.isDark,
  }) : super(key: key);

  @override
  State<_ProjectCard> createState() => _ProjectCardState();
}

class _ProjectCardState extends State<_ProjectCard> {
  bool _isHovering = false;

  @override
  Widget build(BuildContext context) {
    final accentColor = widget.isDark ? AppColors.darkAccent : AppColors.lightAccent;
    final primaryColor = widget.isDark ? AppColors.darkPrimary : AppColors.lightPrimary;
    
    return MouseRegion(
      onEnter: (_) => setState(() => _isHovering = true),
      onExit: (_) => setState(() => _isHovering = false),
      child: Container(
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(18),
          border: Border.all(
            color: widget.isDark
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
                  color: widget.isDark
                      ? AppColors.darkCard.withOpacity(0.5)
                      : AppColors.lightCard.withOpacity(0.5),
                ),
                child: BackdropFilter(
                  filter: ImageFilter.blur(sigmaX: 10, sigmaY: 10),
                  child: AnimatedContainer(
              duration: const Duration(milliseconds: 300),
              decoration: BoxDecoration(
                color: _isHovering
                    ? (widget.isDark
                        ? Colors.white.withOpacity(0.1)
                        : Colors.white.withOpacity(0.1))
                    : Colors.transparent,
                borderRadius: BorderRadius.circular(18),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  // Header
                  LayoutBuilder(
                    builder: (context, constraints) {
                      final isMobile = constraints.maxWidth < 768;
                      return isMobile
                          ? Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(
                                  widget.name,
                                  style: TextStyle(
                                    fontSize: 20,
                                    fontWeight: FontWeight.w600,
                                    color: widget.isDark
                                        ? AppColors.darkForeground
                                        : AppColors.lightForeground,
                                  ),
                                ),
                                const SizedBox(height: 8),
                                Text(
                                  'Role: ${widget.role}',
                                  style: TextStyle(
                                    fontSize: 14,
                                    fontWeight: FontWeight.w500,
                                    color: accentColor,
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
                                        widget.name,
                                        style: TextStyle(
                                          fontSize: 20,
                                          fontWeight: FontWeight.w600,
                                          color: widget.isDark
                                              ? AppColors.darkForeground
                                              : AppColors.lightForeground,
                                        ),
                                      ),
                                      const SizedBox(height: 4),
                                      Text(
                                        'Role: ${widget.role}',
                                        style: TextStyle(
                                          fontSize: 14,
                                          fontWeight: FontWeight.w500,
                                          color: accentColor,
                                        ),
                                      ),
                                    ],
                                  ),
                                ),
                              ],
                            );
                    },
                  ),
                  const SizedBox(height: 12),
                  // Description
                  Text(
                    widget.description,
                    style: TextStyle(
                      fontSize: 16,
                      height: 1.5,
                      color: widget.isDark
                          ? AppColors.darkForeground.withOpacity(0.7)
                          : AppColors.lightForeground.withOpacity(0.7),
                    ),
                  ),
                  const SizedBox(height: 16),
                  // Platforms and Stack
                  Wrap(
                    spacing: 8,
                    runSpacing: 8,
                    children: [
                      ...widget.platforms.map((platform) => Container(
                            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                            decoration: BoxDecoration(
                              color: primaryColor.withOpacity(0.1),
                              borderRadius: BorderRadius.circular(12),
                              border: Border.all(
                                color: primaryColor.withOpacity(0.2),
                              ),
                            ),
                            child: Text(
                              platform,
                              style: TextStyle(
                                fontSize: 12,
                                color: primaryColor,
                              ),
                            ),
                          )),
                      ...widget.stack.map((tech) => Container(
                            padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
                            decoration: BoxDecoration(
                              color: widget.isDark
                                  ? Colors.white.withOpacity(0.05)
                                  : Colors.white.withOpacity(0.05),
                              borderRadius: BorderRadius.circular(8),
                              border: Border.all(
                                color: widget.isDark
                                    ? Colors.white.withOpacity(0.1)
                                    : Colors.white.withOpacity(0.1),
                              ),
                            ),
                            child: Text(
                              tech,
                              style: TextStyle(
                                fontSize: 12,
                                color: widget.isDark
                                    ? AppColors.darkForeground.withOpacity(0.7)
                                    : AppColors.lightForeground.withOpacity(0.7),
                              ),
                            ),
                          )),
                    ],
                  ),
                  const SizedBox(height: 16),
                  // Achievements
                  Wrap(
                    spacing: 8,
                    runSpacing: 8,
                    children: widget.achievements.map((achievement) {
                      return Container(
                        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                        decoration: BoxDecoration(
                          color: accentColor.withOpacity(0.1),
                          borderRadius: BorderRadius.circular(12),
                        ),
                        child: Row(
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            Icon(
                              FontAwesomeIcons.chartLine,
                              size: 12,
                              color: accentColor,
                            ),
                            const SizedBox(width: 6),
                            Text(
                              achievement,
                              style: TextStyle(
                                fontSize: 12,
                                color: accentColor,
                              ),
                            ),
                          ],
                        ),
                      );
                    }).toList(),
                  ),
                  const SizedBox(height: 24),
                  // Links
                  Wrap(
                    spacing: 12,
                    runSpacing: 12,
                    children: [
                      if (widget.androidLink != null)
                        _ProjectLinkButton(
                          icon: FontAwesomeIcons.android,
                          label: 'Android',
                          url: widget.androidLink!,
                          isDark: widget.isDark,
                        ),
                      if (widget.iosLink != null)
                        _ProjectLinkButton(
                          icon: FontAwesomeIcons.apple,
                          label: 'iOS',
                          url: widget.iosLink!,
                          isDark: widget.isDark,
                        ),
                    ],
                  ),
                ],
                    ),
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
                    color: accentColor,
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
      ),
    );
  }
}

class _ProjectLinkButton extends StatefulWidget {
  final IconData icon;
  final String label;
  final String url;
  final bool isDark;

  const _ProjectLinkButton({
    Key? key,
    required this.icon,
    required this.label,
    required this.url,
    required this.isDark,
  }) : super(key: key);

  @override
  State<_ProjectLinkButton> createState() => _ProjectLinkButtonState();
}

class _ProjectLinkButtonState extends State<_ProjectLinkButton> {
  bool _isHovering = false;

  @override
  Widget build(BuildContext context) {
    final accentColor = widget.isDark ? AppColors.darkAccent : AppColors.lightAccent;
    
    return MouseRegion(
      onEnter: (_) => setState(() => _isHovering = true),
      onExit: (_) => setState(() => _isHovering = false),
      child: GestureDetector(
        onTap: () => launchUrl(Uri.parse(widget.url)),
        child: AnimatedContainer(
          duration: const Duration(milliseconds: 200),
          padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
          decoration: BoxDecoration(
            border: Border.all(
              color: _isHovering
                  ? accentColor.withOpacity(0.5)
                  : (widget.isDark
                      ? Colors.white.withOpacity(0.1)
                      : Colors.white.withOpacity(0.1)),
            ),
            borderRadius: BorderRadius.circular(12),
          ),
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              FaIcon(
                widget.icon,
                size: 16,
                color: _isHovering
                    ? accentColor
                    : (widget.isDark
                        ? AppColors.darkForeground.withOpacity(0.7)
                        : AppColors.lightForeground.withOpacity(0.7)),
              ),
              const SizedBox(width: 8),
              Text(
                widget.label,
                style: TextStyle(
                  fontSize: 14,
                  fontWeight: FontWeight.w500,
                  color: _isHovering
                      ? accentColor
                      : (widget.isDark
                          ? AppColors.darkForeground.withOpacity(0.7)
                          : AppColors.lightForeground.withOpacity(0.7)),
                ),
              ),
              const SizedBox(width: 6),
              Icon(
                Icons.open_in_new,
                size: 14,
                color: _isHovering
                    ? accentColor
                    : (widget.isDark
                        ? AppColors.darkForeground.withOpacity(0.7)
                        : AppColors.lightForeground.withOpacity(0.7)),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
