// ignore_for_file: deprecated_member_use

import 'package:flutter/material.dart';
import 'package:myportfolio/MiddleScreen.dart';
import 'package:myportfolio/footerscreen.dart';
import 'package:myportfolio/skills_screen.dart';
import 'package:myportfolio/experience_screen.dart';
import 'package:myportfolio/components/navigation.dart' as nav;
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:myportfolio/theme/app_colors.dart';
import 'dart:ui';

class HomeScreen extends StatefulWidget {
  final VoidCallback toggleTheme;

  const HomeScreen({Key? key, required this.toggleTheme}) : super(key: key);

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  final ScrollController _scrollController = ScrollController();
  String _activeSection = 'home';
  final Map<String, GlobalKey> _sectionKeys = {
    'home': GlobalKey(),
    'projects': GlobalKey(),
    'skills': GlobalKey(),
    'experience': GlobalKey(),
    'contact': GlobalKey(),
  };

  @override
  void initState() {
    super.initState();
    _scrollController.addListener(_onScroll);
  }

  @override
  void dispose() {
    _scrollController.dispose();
    super.dispose();
  }

  void _onScroll() {
    // Update active section based on scroll position
    for (var entry in _sectionKeys.entries) {
      final context = entry.value.currentContext;
      if (context != null) {
        final RenderBox? box = context.findRenderObject() as RenderBox?;
        if (box != null) {
          final position = box.localToGlobal(Offset.zero);
          if (position.dy <= 100 && position.dy + box.size.height > 100) {
            if (_activeSection != entry.key) {
              setState(() {
                _activeSection = entry.key;
              });
            }
            break;
          }
        }
      }
    }
  }

  void _scrollToSection(String sectionId) {
    final key = _sectionKeys[sectionId];
    if (key?.currentContext != null) {
      Scrollable.ensureVisible(
        key!.currentContext!,
        duration: const Duration(milliseconds: 800),
        curve: Curves.easeInOut,
        alignment: 0.1,
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final isDesktop = MediaQuery.of(context).size.width >= 1024;

    return Scaffold(
      backgroundColor:
          isDark ? AppColors.darkBackground : AppColors.lightBackground,
      body: Stack(
        children: [
          // Animated gradient background
          _AnimatedBackground(isDark: isDark),

          // Fixed sidebar on desktop
          if (isDesktop) _FixedSidebar(isDark: isDark),

          // Fixed Navigation Header
          Positioned(
            top: 0,
            left: isDesktop ? 320 : 0,
            right: 0,
            child: _TopNavigation(
              activeSection: _activeSection,
              onSectionTap: _scrollToSection,
              toggleTheme: widget.toggleTheme,
            ),
          ),

          // Main content area
          Positioned.fill(
            left: isDesktop ? 320 : 0,
            top: 60, // Space for fixed navigation (mobile menu will overlay)
            child: SingleChildScrollView(
              controller: _scrollController,
              child: Column(
                children: [
                  // Hero Section
                  Container(
                    key: _sectionKeys['home'],
                    child: _HeroSection(isDark: isDark, isDesktop: isDesktop),
                  ),

                  // Projects Section
                  Container(
                    key: _sectionKeys['projects'],
                    child: MiddleScreen(),
                  ),

                  // Skills Section
                  Container(
                    key: _sectionKeys['skills'],
                    child: SkillsScreen(),
                  ),

                  // Experience Section
                  Container(
                    key: _sectionKeys['experience'],
                    child: ExperienceScreen(),
                  ),

                  // Contact Section
                  Container(
                    key: _sectionKeys['contact'],
                    child: FooterScreen(),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}

// Animated gradient background matching research portfolio
class _AnimatedBackground extends StatefulWidget {
  final bool isDark;

  const _AnimatedBackground({required this.isDark});

  @override
  State<_AnimatedBackground> createState() => _AnimatedBackgroundState();
}

class _AnimatedBackgroundState extends State<_AnimatedBackground>
    with SingleTickerProviderStateMixin {
  late AnimationController _controller;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      duration: const Duration(seconds: 20),
      vsync: this,
    )..repeat();
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final primaryColor =
        widget.isDark ? AppColors.darkPrimary : AppColors.lightPrimary;
    final accentColor =
        widget.isDark ? AppColors.darkAccent : AppColors.lightAccent;

    return AnimatedBuilder(
      animation: _controller,
      builder: (context, child) {
        return Container(
          decoration: BoxDecoration(
            gradient: LinearGradient(
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
              colors: [
                primaryColor.withOpacity(0.05),
                Colors.transparent,
                accentColor.withOpacity(0.05),
              ],
            ),
          ),
          child: Stack(
            children: [
              Positioned(
                top: 80,
                left: 40,
                child: Transform.translate(
                  offset: Offset(
                    (1 - _controller.value) * 20,
                    (1 - _controller.value) * 20,
                  ),
                  child: Container(
                    width: 384,
                    height: 384,
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      color: primaryColor.withOpacity(0.2),
                    ),
                    child: BackdropFilter(
                      filter: ImageFilter.blur(sigmaX: 60, sigmaY: 60),
                      child: Container(),
                    ),
                  ),
                ),
              ),
              Positioned(
                bottom: 160,
                right: 40,
                child: Transform.translate(
                  offset: Offset(
                    _controller.value * 20,
                    _controller.value * 20,
                  ),
                  child: Container(
                    width: 384,
                    height: 384,
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      color: accentColor.withOpacity(0.2),
                    ),
                    child: BackdropFilter(
                      filter: ImageFilter.blur(sigmaX: 60, sigmaY: 60),
                      child: Container(),
                    ),
                  ),
                ),
              ),
            ],
          ),
        );
      },
    );
  }
}

// Fixed sidebar matching research portfolio
class _FixedSidebar extends StatelessWidget {
  final bool isDark;

  const _FixedSidebar({required this.isDark});

  @override
  Widget build(BuildContext context) {
    final socialLinks = [
      _SocialLink(
        icon: FontAwesomeIcons.github,
        url: "https://github.com/AdetoyeseMatthew",
        label: "GitHub",
      ),
      _SocialLink(
        icon: FontAwesomeIcons.linkedinIn,
        url: "https://www.linkedin.com/in/adetoyesematthew/",
        label: "LinkedIn",
      ),
      _SocialLink(
        icon: FontAwesomeIcons.at,
        url: "mailto:adetoyesematthew97@gmail.com",
        label: "Email",
      ),
    ];

    return Positioned(
      left: 0,
      top: 0,
      bottom: 0,
      width: 320,
      child: Container(
        padding: const EdgeInsets.all(24),
        decoration: BoxDecoration(
          color: isDark
              ? AppColors.darkCard.withOpacity(0.5)
              : AppColors.lightCard.withOpacity(0.5),
          border: Border(
            right: BorderSide(
              color: isDark ? AppColors.darkBorder : AppColors.lightBorder,
              width: 1,
            ),
          ),
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            // Profile Image
            Container(
              width: 288,
              height: 288,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                border: Border.all(
                  color: isDark
                      ? AppColors.darkBorder.withOpacity(0.2)
                      : AppColors.lightBorder.withOpacity(0.2),
                  width: 2,
                ),
                boxShadow: [
                  BoxShadow(
                    color: Colors.black.withOpacity(0.1),
                    blurRadius: 20,
                    offset: const Offset(0, 10),
                  ),
                ],
              ),
              child: ClipOval(
                child: Image.asset(
                  'assets/newProfile.png',
                  fit: BoxFit.cover,
                  errorBuilder: (context, error, stackTrace) {
                    return Container(
                      color: isDark ? AppColors.darkCard : AppColors.lightCard,
                      child: Center(
                        child: Icon(
                          Icons.person,
                          size: 80,
                          color: isDark
                              ? AppColors.darkForeground
                              : AppColors.lightForeground,
                        ),
                      ),
                    );
                  },
                ),
              ),
            ),
            const SizedBox(height: 24),
            // Name and Title
            Text(
              "Matthew Adetoyese",
              style: TextStyle(
                fontSize: 24,
                fontWeight: FontWeight.bold,
                color: isDark
                    ? AppColors.darkForeground
                    : AppColors.lightForeground,
              ),
              textAlign: TextAlign.center,
            ),
            const SizedBox(height: 8),
            Text(
              "Mobile Application Developer",
              style: TextStyle(
                fontSize: 14,
                color: isDark
                    ? AppColors.darkForeground.withOpacity(0.7)
                    : AppColors.lightForeground.withOpacity(0.7),
              ),
              textAlign: TextAlign.center,
            ),
            const SizedBox(height: 24),
            // Social Icons
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: socialLinks.map((link) {
                return Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 8),
                  child: _SocialIconButton(link: link, isDark: isDark),
                );
              }).toList(),
            ),
          ],
        ),
      ),
    );
  }
}

class _SocialLink {
  final IconData icon;
  final String url;
  final String label;

  _SocialLink({
    required this.icon,
    required this.url,
    required this.label,
  });
}

class _SocialIconButton extends StatefulWidget {
  final _SocialLink link;
  final bool isDark;

  const _SocialIconButton({
    Key? key,
    required this.link,
    required this.isDark,
  }) : super(key: key);

  @override
  State<_SocialIconButton> createState() => _SocialIconButtonState();
}

class _SocialIconButtonState extends State<_SocialIconButton> {
  bool _isHovering = false;

  @override
  Widget build(BuildContext context) {
    final accentColor =
        widget.isDark ? AppColors.darkAccent : AppColors.lightAccent;

    return MouseRegion(
      onEnter: (_) => setState(() => _isHovering = true),
      onExit: (_) => setState(() => _isHovering = false),
      child: GestureDetector(
        onTap: () => launchUrl(Uri.parse(widget.link.url)),
        child: AnimatedContainer(
          duration: const Duration(milliseconds: 200),
          padding: const EdgeInsets.all(8),
          decoration: BoxDecoration(
            color:
                _isHovering ? accentColor.withOpacity(0.1) : Colors.transparent,
            borderRadius: BorderRadius.circular(8),
          ),
          child: FaIcon(
            widget.link.icon,
            size: 20,
            color: _isHovering
                ? accentColor
                : (widget.isDark
                    ? AppColors.darkForeground.withOpacity(0.7)
                    : AppColors.lightForeground.withOpacity(0.7)),
          ),
        ),
      ),
    );
  }
}

// Top Navigation
class _TopNavigation extends StatefulWidget {
  final String activeSection;
  final Function(String) onSectionTap;
  final VoidCallback toggleTheme;

  const _TopNavigation({
    Key? key,
    required this.activeSection,
    required this.onSectionTap,
    required this.toggleTheme,
  }) : super(key: key);

  @override
  State<_TopNavigation> createState() => _TopNavigationState();
}

class _TopNavigationState extends State<_TopNavigation> {
  bool _isMobileMenuOpen = false;
  final GlobalKey<nav.PortfolioNavigationBarState> _navBarKey =
      GlobalKey<nav.PortfolioNavigationBarState>();

  void _handleMenuStateChanged(bool isOpen) {
    setState(() {
      _isMobileMenuOpen = isOpen;
    });
  }

  void _handleSectionTap(String sectionId) {
    widget.onSectionTap(sectionId);
    final navBarState = _navBarKey.currentState;
    navBarState?.closeMenu();
    setState(() {
      _isMobileMenuOpen = false;
    });
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final isMobile = MediaQuery.of(context).size.width < 768;
    final backgroundColor = isDark
        ? AppColors.darkBackground.withOpacity(0.95)
        : AppColors.lightBackground.withOpacity(0.95);

    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        Container(
          height: 60,
          padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
          decoration: BoxDecoration(
            color: backgroundColor,
            border: Border(
              bottom: BorderSide(
                color: isDark ? AppColors.darkBorder : AppColors.lightBorder,
                width: 1,
              ),
            ),
          ),
          child: ClipRRect(
            child: BackdropFilter(
              filter: ImageFilter.blur(sigmaX: 10, sigmaY: 10),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.end,
                children: [
                  Flexible(
                    child: nav.PortfolioNavigationBar(
                      key: _navBarKey,
                      activeSection: widget.activeSection,
                      onSectionTap: widget.onSectionTap,
                      onMenuStateChanged: _handleMenuStateChanged,
                    ),
                  ),
                  const SizedBox(width: 8),
                  IconButton(
                    icon: Icon(
                      isDark ? Icons.wb_sunny : Icons.nightlight_round,
                    ),
                    onPressed: widget.toggleTheme,
                    tooltip: 'Toggle theme',
                  ),
                ],
              ),
            ),
          ),
        ),
        // Mobile Navigation Menu - outside the fixed height container
        if (isMobile && _isMobileMenuOpen)
          nav.MobileMenuDropdown(
            navItems: _navBarKey.currentState?.navItems ?? [],
            activeSection: widget.activeSection,
            onSectionTap: _handleSectionTap,
            isDark: isDark,
          ),
      ],
    );
  }
}

// Hero Section
class _HeroSection extends StatelessWidget {
  final bool isDark;
  final bool isDesktop;

  const _HeroSection({
    Key? key,
    required this.isDark,
    required this.isDesktop,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.symmetric(
        horizontal: isDesktop ? 32 : 16,
        vertical: 80,
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Mobile Profile Image
          if (!isDesktop) ...[
            Center(
              child: Container(
                width: 160,
                height: 160,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  border: Border.all(
                    color: isDark
                        ? AppColors.darkAccent.withOpacity(0.3)
                        : AppColors.lightAccent.withOpacity(0.3),
                    width: 4,
                  ),
                  boxShadow: [
                    BoxShadow(
                      color: Colors.black.withOpacity(0.1),
                      blurRadius: 20,
                      offset: const Offset(0, 10),
                    ),
                  ],
                ),
                child: ClipOval(
                  child: Image.asset(
                    'assets/newProfile.png',
                    fit: BoxFit.cover,
                    errorBuilder: (context, error, stackTrace) {
                      return Container(
                        color:
                            isDark ? AppColors.darkCard : AppColors.lightCard,
                        child: Center(
                          child: Icon(
                            Icons.person,
                            size: 60,
                            color: isDark
                                ? AppColors.darkForeground
                                : AppColors.lightForeground,
                          ),
                        ),
                      );
                    },
                  ),
                ),
              ),
            ),
            const SizedBox(height: 24),
          ],
          // Title
          Text(
            "About Me",
            style: TextStyle(
              fontSize: isDesktop ? 56 : 36,
              fontWeight: FontWeight.bold,
              color:
                  isDark ? AppColors.darkForeground : AppColors.lightForeground,
            ),
          ),
          const SizedBox(height: 12),
          Text(
            "· Software Engineer · Mobile Application Developer ·",
            style: TextStyle(
              fontSize: isDesktop ? 20 : 16,
              color: isDark
                  ? AppColors.darkForeground.withOpacity(0.7)
                  : AppColors.lightForeground.withOpacity(0.7),
            ),
          ),
          const SizedBox(height: 24),
          Text(
            "Results-driven Mobile Engineer with a strong Computer Science foundation and proven experience delivering 15+ mobile applications with 95% user satisfaction and 30% fewer bugs. Skilled at collaborating in cross-functional teams, consistently delivering projects ahead of schedule and to high quality. Committed to building secure, reliable, and innovative mobile solutions that drive business success.",
            style: TextStyle(
              fontSize: isDesktop ? 16 : 14,
              height: 1.6,
              color: isDark
                  ? AppColors.darkForeground.withOpacity(0.6)
                  : AppColors.lightForeground.withOpacity(0.6),
            ),
          ),
        ],
      ),
    );
  }
}
