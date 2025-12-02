import 'package:flutter/material.dart';
import 'package:myportfolio/theme/app_colors.dart';
import 'dart:ui';

class PortfolioNavigationBar extends StatefulWidget {
  final String? activeSection;
  final Function(String) onSectionTap;
  final Function(bool)? onMenuStateChanged;

  const PortfolioNavigationBar({
    Key? key,
    this.activeSection,
    required this.onSectionTap,
    this.onMenuStateChanged,
  }) : super(key: key);

  @override
  PortfolioNavigationBarState createState() => PortfolioNavigationBarState();
}

class PortfolioNavigationBarState extends State<PortfolioNavigationBar> {
  bool _isMobileMenuOpen = false;
  
  List<NavItem> get navItems => _navItems;
  
  void _toggleMenu() {
    setState(() {
      _isMobileMenuOpen = !_isMobileMenuOpen;
    });
    widget.onMenuStateChanged?.call(_isMobileMenuOpen);
  }
  
  void closeMenu() {
    if (_isMobileMenuOpen) {
      setState(() {
        _isMobileMenuOpen = false;
      });
      widget.onMenuStateChanged?.call(false);
    }
  }

  final List<NavItem> _navItems = [
    NavItem(id: 'home', label: 'Home'),
    NavItem(id: 'projects', label: 'Portfolio'),
    NavItem(id: 'skills', label: 'Skills'),
    NavItem(id: 'experience', label: 'Experience'),
    NavItem(id: 'contact', label: 'Contact'),
  ];

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final isMobile = MediaQuery.of(context).size.width < 768;
    final foregroundColor = isDark ? AppColors.darkForeground : AppColors.lightForeground;

    return Row(
      mainAxisAlignment: MainAxisAlignment.end,
      children: [
        // Desktop Navigation
        if (!isMobile) ...[
          ..._navItems.map((item) => Padding(
                padding: const EdgeInsets.symmetric(horizontal: 8),
                child: _NavLink(
                  item: item,
                  isActive: widget.activeSection == item.id,
                  onTap: () => widget.onSectionTap(item.id),
                ),
              )),
        ],
        // Mobile Menu Button
        if (isMobile)
          IconButton(
            icon: AnimatedSwitcher(
              duration: const Duration(milliseconds: 200),
              child: _isMobileMenuOpen
                  ? Icon(
                      Icons.close,
                      key: const ValueKey('close'),
                      color: foregroundColor,
                    )
                  : Icon(
                      Icons.menu,
                      key: const ValueKey('menu'),
                      color: foregroundColor,
                    ),
            ),
                onPressed: _toggleMenu,
          ),
      ],
    );
  }
}

// Mobile Menu Dropdown
class MobileMenuDropdown extends StatelessWidget {
  final List<NavItem> navItems;
  final String? activeSection;
  final Function(String) onSectionTap;
  final bool isDark;

  const MobileMenuDropdown({
    Key? key,
    required this.navItems,
    required this.activeSection,
    required this.onSectionTap,
    required this.isDark,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final backgroundColor = isDark
        ? AppColors.darkBackground.withOpacity(0.95)
        : AppColors.lightBackground.withOpacity(0.95);
    final foregroundColor = isDark ? AppColors.darkForeground : AppColors.lightForeground;

    return Container(
      width: double.infinity,
      margin: const EdgeInsets.only(top: 8),
      decoration: BoxDecoration(
        color: backgroundColor,
        border: Border(
          top: BorderSide(
            color: isDark ? AppColors.darkBorder : AppColors.lightBorder,
            width: 1,
          ),
        ),
      ),
      child: ClipRRect(
        child: BackdropFilter(
          filter: ImageFilter.blur(sigmaX: 10, sigmaY: 10),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              const SizedBox(height: 8),
              ...navItems.map((item) => InkWell(
                    onTap: () => onSectionTap(item.id),
                    child: Container(
                      width: double.infinity,
                      padding: const EdgeInsets.symmetric(
                        horizontal: 24,
                        vertical: 16,
                      ),
                      decoration: BoxDecoration(
                        border: activeSection == item.id
                            ? Border(
                                left: BorderSide(
                                  color: isDark
                                      ? AppColors.darkPrimary
                                      : AppColors.lightPrimary,
                                  width: 3,
                                ),
                              )
                            : null,
                      ),
                      child: Row(
                        children: [
                          if (activeSection == item.id)
                            Container(
                              width: 3,
                              height: 20,
                              color: isDark
                                  ? AppColors.darkPrimary
                                  : AppColors.lightPrimary,
                            ),
                          if (activeSection == item.id)
                            const SizedBox(width: 12),
                          Text(
                            item.label,
                            style: TextStyle(
                              fontSize: 16,
                              fontWeight: activeSection == item.id
                                  ? FontWeight.w600
                                  : FontWeight.w500,
                              color: activeSection == item.id
                                  ? (isDark
                                      ? AppColors.darkPrimary
                                      : AppColors.lightPrimary)
                                  : foregroundColor.withOpacity(0.7),
                            ),
                          ),
                        ],
                      ),
                    ),
                  )),
              const SizedBox(height: 8),
            ],
          ),
        ),
      ),
    );
  }

}

class _NavLink extends StatelessWidget {
  final NavItem item;
  final bool isActive;
  final VoidCallback onTap;

  const _NavLink({
    Key? key,
    required this.item,
    required this.isActive,
    required this.onTap,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final activeColor = isDark ? AppColors.darkPrimary : AppColors.lightPrimary;
    final inactiveColor = isDark
        ? AppColors.darkForeground.withOpacity(0.7)
        : AppColors.lightForeground.withOpacity(0.7);

    return InkWell(
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
        decoration: isActive
            ? BoxDecoration(
                border: Border(
                  bottom: BorderSide(
                    color: activeColor,
                    width: 2,
                  ),
                ),
              )
            : null,
        child: Text(
          item.label,
          style: TextStyle(
            fontSize: 14,
            fontWeight: isActive ? FontWeight.w600 : FontWeight.w500,
            color: isActive ? activeColor : inactiveColor,
          ),
        ),
      ),
    );
  }
}

class NavItem {
  final String id;
  final String label;

  NavItem({required this.id, required this.label});
}
