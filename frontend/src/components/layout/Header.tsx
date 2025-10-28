import { Link } from 'react-router-dom';
import { Home, Settings, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navigationItems = [
        { to: '/', label: 'Home', icon: Home },
        { to: '/dashboard', label: 'Dashboard', icon: User },
        { to: '/settings', label: 'Settings', icon: Settings }
    ];

    const NavItems = ({ mobile = false, onClick }: { mobile?: boolean; onClick?: () => void }) => (
        <div className={`flex ${mobile ? 'flex-col gap-4' : 'gap-6'}`}>
            {navigationItems.map(item => {
                const Icon = item.icon;
                return (
                    <Link
                        key={item.to}
                        to={item.to}
                        onClick={onClick}
                        className={`flex items-center gap-2 text-foreground hover:text-primary transition-colors ${
                            mobile ? 'text-lg' : ''
                        }`}
                    >
                        <Icon className='h-4 w-4' />
                        {item.label}
                    </Link>
                );
            })}
        </div>
    );

    return (
        <header className='border-b bg-background'>
            <div className='container mx-auto px-4 py-4'>
                <div className='flex items-center justify-between'>
                    {/* Logo */}
                    <Link
                        to='/'
                        className='flex items-center gap-2 text-xl font-bold text-primary'
                    >
                        <div className='h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold'>
                            SA
                        </div>
                        Simple App
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className='hidden md:flex'>
                        <NavItems />
                    </nav>

                    {/* Mobile Navigation */}
                    <Sheet
                        open={isOpen}
                        onOpenChange={setIsOpen}
                    >
                        <SheetTrigger
                            asChild
                            className='md:hidden'
                        >
                            <Button
                                variant='ghost'
                                size='sm'
                            >
                                <Menu className='h-5 w-5' />
                                <span className='sr-only'>Open menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side='right'>
                            <SheetHeader>
                                <SheetTitle>Menu</SheetTitle>
                            </SheetHeader>
                            <div className='mt-6'>
                                <NavItems
                                    mobile
                                    onClick={() => setIsOpen(false)}
                                />
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
};
