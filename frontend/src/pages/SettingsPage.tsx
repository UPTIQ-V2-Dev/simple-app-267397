import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Bell, Shield, User, Palette } from 'lucide-react';

export const SettingsPage = () => {
    return (
        <div className='container mx-auto p-6'>
            <div className='mb-8'>
                <h1 className='text-3xl font-bold'>Settings</h1>
                <p className='text-muted-foreground mt-2'>Manage your account settings and preferences.</p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                <div className='lg:col-span-1'>
                    <Card>
                        <CardHeader>
                            <CardTitle>Settings Menu</CardTitle>
                        </CardHeader>
                        <CardContent className='space-y-2'>
                            {[
                                { icon: User, label: 'Profile', active: true },
                                { icon: Bell, label: 'Notifications', active: false },
                                { icon: Shield, label: 'Security', active: false },
                                { icon: Palette, label: 'Appearance', active: false }
                            ].map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={index}
                                        className={`flex items-center space-x-2 p-3 rounded-lg cursor-pointer transition-colors ${
                                            item.active ? 'bg-primary/10 text-primary' : 'hover:bg-muted'
                                        }`}
                                    >
                                        <Icon className='h-4 w-4' />
                                        <span>{item.label}</span>
                                    </div>
                                );
                            })}
                        </CardContent>
                    </Card>
                </div>

                <div className='lg:col-span-2 space-y-6'>
                    <Card>
                        <CardHeader>
                            <CardTitle>Profile Settings</CardTitle>
                            <CardDescription>Update your profile information and preferences</CardDescription>
                        </CardHeader>
                        <CardContent className='space-y-6'>
                            <div className='space-y-4'>
                                <div>
                                    <Label className='text-sm font-medium'>Display Name</Label>
                                    <div className='mt-1 p-3 bg-muted rounded-md'>John Doe</div>
                                </div>
                                <div>
                                    <Label className='text-sm font-medium'>Email</Label>
                                    <div className='mt-1 p-3 bg-muted rounded-md'>john.doe@example.com</div>
                                </div>
                            </div>
                            <Button>Update Profile</Button>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Preferences</CardTitle>
                            <CardDescription>Configure your application preferences</CardDescription>
                        </CardHeader>
                        <CardContent className='space-y-6'>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <Label>Email Notifications</Label>
                                    <p className='text-sm text-muted-foreground'>
                                        Receive email notifications about your account activity
                                    </p>
                                </div>
                                <Switch />
                            </div>

                            <Separator />

                            <div className='flex items-center justify-between'>
                                <div>
                                    <Label>Dark Mode</Label>
                                    <p className='text-sm text-muted-foreground'>Use dark theme for the application</p>
                                </div>
                                <Switch />
                            </div>

                            <Separator />

                            <div className='flex items-center justify-between'>
                                <div>
                                    <Label>Analytics</Label>
                                    <p className='text-sm text-muted-foreground'>
                                        Help improve our service by sharing usage data
                                    </p>
                                </div>
                                <Switch defaultChecked />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};
