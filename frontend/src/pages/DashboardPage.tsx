import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, Users, TrendingUp, Activity } from 'lucide-react';

export const DashboardPage = () => {
    return (
        <div className='container mx-auto p-6'>
            <div className='mb-8'>
                <h1 className='text-3xl font-bold'>Dashboard</h1>
                <p className='text-muted-foreground mt-2'>
                    Welcome to your dashboard. Here's an overview of your activity.
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
                {[
                    { title: 'Total Users', value: '2,451', icon: Users, change: '+12%' },
                    { title: 'Revenue', value: '$12,405', icon: TrendingUp, change: '+8%' },
                    { title: 'Active Sessions', value: '189', icon: Activity, change: '+23%' },
                    { title: 'Growth Rate', value: '23.5%', icon: BarChart3, change: '+5%' }
                ].map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                        <Card key={index}>
                            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                                <CardTitle className='text-sm font-medium'>{stat.title}</CardTitle>
                                <Icon className='h-4 w-4 text-muted-foreground' />
                            </CardHeader>
                            <CardContent>
                                <div className='text-2xl font-bold'>{stat.value}</div>
                                <p className='text-xs text-muted-foreground'>
                                    <span className='text-green-600'>{stat.change}</span> from last month
                                </p>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                <Card>
                    <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                        <CardDescription>Your latest actions and updates</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className='space-y-4'>
                            {[
                                'Updated profile settings',
                                'Created new project',
                                'Invited team member',
                                'Completed task review'
                            ].map((activity, index) => (
                                <div
                                    key={index}
                                    className='flex items-center space-x-2'
                                >
                                    <div className='h-2 w-2 bg-primary rounded-full'></div>
                                    <span className='text-sm'>{activity}</span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Quick Actions</CardTitle>
                        <CardDescription>Common tasks and shortcuts</CardDescription>
                    </CardHeader>
                    <CardContent className='space-y-2'>
                        <div className='text-center text-muted-foreground py-8'>
                            <p>Quick actions will be available here soon.</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};
