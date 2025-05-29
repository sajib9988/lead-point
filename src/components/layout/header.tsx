'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from '@/components/ui/sheet';
import { navLinks, APP_NAME } from '@/lib/constants';
import type { NavLink as NavLinkType } from '@/lib/constants';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ThemeToggleButton } from '@/components/common/theme-toggle-button';

const NavLink = ({ href, label, onClick }: NavLinkType & { onClick?: () => void }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "text-sm transition-colors",
        isActive
          ? "text-green-600 underline decoration-green-600 underline-offset-4 font-semibold"
          : "text-foreground/80 hover:text-primary font-medium"
      )}
    >
      {label}
    </Link>
  );
};


export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const AppLogo = () => (
    <Link href="/" className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
      {APP_NAME}
    </Link>
  );

  return (
    <header className={cn("sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-shadow", isScrolled ? "shadow-md" : "")}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <AppLogo />
        <nav className="hidden items-center space-x-6 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
          <ThemeToggleButton />
        </nav>
        <div className="flex items-center md:hidden">
          <ThemeToggleButton />
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="mb-6 flex items-center justify-between">
                <AppLogo />
                <SheetClose asChild>
                  <Button variant="ghost" size="icon">
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </SheetClose>
              </div>
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <NavLink 
                    key={link.href} 
                    href={link.href} 
                    label={link.label} 
                    onClick={() => setIsMobileMenuOpen(false)}
                  />
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
