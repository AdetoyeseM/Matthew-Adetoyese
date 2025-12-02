// ignore_for_file: deprecated_member_use

import 'package:flutter/material.dart';
import 'package:myportfolio/theme/app_colors.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:url_launcher/url_launcher.dart';
import 'dart:ui';

class FooterScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;

    // Social links matching research portfolio
    final socialLinks = [
      {
        'icon': FontAwesomeIcons.github,
        'label': 'GitHub',
        'url': 'https://github.com/AdetoyeseM',
      },
      {
        'icon': FontAwesomeIcons.linkedinIn,
        'label': 'LinkedIn',
        'url': 'https://www.linkedin.com/in/adetoyesematthew/',
      },
      {
        'icon': FontAwesomeIcons.envelope,
        'label': 'Email',
        'url': 'mailto:adetoyesematthew97@gmail.com',
      },
      {
        'icon': FontAwesomeIcons.book,
        'label': 'ORCID',
        'url': 'https://orcid.org/0000-0002-6291-7055',
      },
    ];

    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 48),
      child: _GlassCard(
        isDark: isDark,
        child: Padding(
          padding: const EdgeInsets.all(32),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              // Title with icon
              Row(
                children: [
                  Icon(
                    FontAwesomeIcons.paperPlane,
                    size: 28,
                    color:
                        isDark ? AppColors.darkAccent : AppColors.lightAccent,
                  ),
                  const SizedBox(width: 12),
                  Text(
                    "Get in Touch",
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
              const SizedBox(height: 12),
              // Description
              Text(
                "Open to software engineering roles, technical collaborations, and industry-focused innovation projects.",
                style: TextStyle(
                  fontSize: 16,
                  color: isDark
                      ? AppColors.darkForeground.withOpacity(0.7)
                      : AppColors.lightForeground.withOpacity(0.7),
                ),
              ),
              const SizedBox(height: 24),
              // Social Links - Glass buttons matching research portfolio
              LayoutBuilder(
                builder: (context, constraints) {
                  final isMobile = constraints.maxWidth < 768;
                  return Wrap(
                    spacing: 16,
                    runSpacing: 16,
                    alignment:
                        isMobile ? WrapAlignment.center : WrapAlignment.start,
                    children: socialLinks.map((link) {
                      return _SocialLinkButton(
                        icon: link['icon'] as IconData,
                        label: link['label'] as String,
                        url: link['url'] as String,
                        isDark: isDark,
                      );
                    }).toList(),
                  );
                },
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class _SocialLinkButton extends StatefulWidget {
  final IconData icon;
  final String label;
  final String url;
  final bool isDark;

  const _SocialLinkButton({
    Key? key,
    required this.icon,
    required this.label,
    required this.url,
    required this.isDark,
  }) : super(key: key);

  @override
  State<_SocialLinkButton> createState() => _SocialLinkButtonState();
}

class _SocialLinkButtonState extends State<_SocialLinkButton> {
  bool _isHovering = false;

  @override
  Widget build(BuildContext context) {
    final accentColor =
        widget.isDark ? AppColors.darkAccent : AppColors.lightAccent;

    return MouseRegion(
      onEnter: (_) => setState(() => _isHovering = true),
      onExit: (_) => setState(() => _isHovering = false),
      child: GestureDetector(
        onTap: () => launchUrl(Uri.parse(widget.url)),
        child: AnimatedContainer(
          duration: const Duration(milliseconds: 300),
          padding: const EdgeInsets.all(12),
          decoration: BoxDecoration(
            color: widget.isDark
                ? AppColors.darkCard.withOpacity(0.5)
                : AppColors.lightCard.withOpacity(0.5),
            borderRadius: BorderRadius.circular(12),
            border: Border.all(
              color: widget.isDark
                  ? AppColors.darkBorder.withOpacity(0.18)
                  : AppColors.lightBorder.withOpacity(0.06),
            ),
          ),
          child: ClipRRect(
            borderRadius: BorderRadius.circular(12),
            child: BackdropFilter(
              filter: ImageFilter.blur(sigmaX: 10, sigmaY: 10),
              child: Container(
                padding: const EdgeInsets.all(12),
                decoration: BoxDecoration(
                  color: _isHovering
                      ? (widget.isDark
                          ? Colors.white.withOpacity(0.1)
                          : Colors.white.withOpacity(0.1))
                      : Colors.transparent,
                ),
                child: FaIcon(
                  widget.icon,
                  size: 20,
                  color: _isHovering
                      ? accentColor
                      : (widget.isDark
                          ? AppColors.darkForeground.withOpacity(0.7)
                          : AppColors.lightForeground.withOpacity(0.7)),
                ),
              ),
            ),
          ),
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
