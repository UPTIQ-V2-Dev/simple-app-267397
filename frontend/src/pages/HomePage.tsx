import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Shield, Zap } from 'lucide-react';

export const HomePage = () => {
    const features = [
        {
            icon: Zap,
            title: 'Fast & Modern',
            description: 'Built with React 19, Vite, and the latest web technologies for optimal performance.'
        },
        {
            icon: Shield,
            title: 'Secure & Reliable',
            description: 'Enterprise-grade security with robust authentication and data protection.'
        },
        {
            icon: CheckCircle,
            title: 'Easy to Use',
            description: 'Intuitive interface designed for both beginners and advanced users.'
        }
    ];

    return (
        <div className='min-h-screen'>
            {/* Hero Section */}
            <section className='py-20 px-4'>
                <div className='container mx-auto text-center'>
                    <div className='max-w-3xl mx-auto'>
                        <h1 className='text-4xl md:text-6xl font-bold mb-6'>
                            Welcome to <span className='text-primary'>Simple App</span>
                        </h1>
                        <p className='text-lg md:text-xl text-muted-foreground mb-8'>
                            A modern React application built with the latest technologies. Experience blazing-fast
                            performance and beautiful UI components.
                        </p>
                        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                            <Button
                                asChild
                                size='lg'
                                className='text-lg px-8'
                            >
                                <Link to='/dashboard'>
                                    Get Started
                                    <ArrowRight className='ml-2 h-5 w-5' />
                                </Link>
                            </Button>
                            <Button
                                variant='outline'
                                size='lg'
                                className='text-lg px-8'
                            >
                                Learn More
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className='py-16 px-4 bg-muted/50'>
                <div className='container mx-auto'>
                    <div className='text-center mb-12'>
                        <h2 className='text-3xl md:text-4xl font-bold mb-4'>Why Choose Simple App?</h2>
                        <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
                            Built with modern technologies and best practices to deliver an exceptional user experience.
                        </p>
                    </div>
                    <div className='grid md:grid-cols-3 gap-8'>
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <Card
                                    key={index}
                                    className='text-center'
                                >
                                    <CardHeader>
                                        <div className='mx-auto h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4'>
                                            <Icon className='h-6 w-6 text-primary' />
                                        </div>
                                        <CardTitle>{feature.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className='text-base'>{feature.description}</CardDescription>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className='py-20 px-4'>
                <div className='container mx-auto text-center'>
                    <div className='max-w-2xl mx-auto'>
                        <h2 className='text-3xl md:text-4xl font-bold mb-6'>Ready to Get Started?</h2>
                        <p className='text-lg text-muted-foreground mb-8'>
                            Join thousands of users who are already enjoying our simple and powerful application.
                        </p>
                        <Button
                            asChild
                            size='lg'
                            className='text-lg px-8'
                        >
                            <Link to='/dashboard'>
                                Start Your Journey
                                <ArrowRight className='ml-2 h-5 w-5' />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};
