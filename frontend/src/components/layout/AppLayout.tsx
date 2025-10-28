import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export const AppLayout = () => {
    return (
        <div className='min-h-screen bg-background text-foreground'>
            <Header />
            <main className='flex-1'>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};
