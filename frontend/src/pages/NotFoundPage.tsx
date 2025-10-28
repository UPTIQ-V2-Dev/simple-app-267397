import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';

export const NotFoundPage = () => {
    return (
        <div className='min-h-screen flex items-center justify-center px-4'>
            <div className='text-center max-w-md mx-auto'>
                <div className='mb-8'>
                    <h1 className='text-8xl font-bold text-primary mb-4'>404</h1>
                    <h2 className='text-2xl md:text-3xl font-semibold mb-4'>Page Not Found</h2>
                    <p className='text-muted-foreground mb-8'>
                        The page you're looking for doesn't exist or has been moved.
                    </p>
                </div>

                <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                    <Button asChild>
                        <Link to='/'>
                            <Home className='mr-2 h-4 w-4' />
                            Go Home
                        </Link>
                    </Button>
                    <Button
                        variant='outline'
                        onClick={() => window.history.back()}
                    >
                        <ArrowLeft className='mr-2 h-4 w-4' />
                        Go Back
                    </Button>
                </div>
            </div>
        </div>
    );
};
