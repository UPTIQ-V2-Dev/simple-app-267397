import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppLayout } from '@/components/layout/AppLayout';
import { HomePage } from '@/pages/HomePage';
import { DashboardPage } from '@/pages/DashboardPage';
import { SettingsPage } from '@/pages/SettingsPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/'
                    element={<AppLayout />}
                >
                    <Route
                        index
                        element={<HomePage />}
                    />
                    <Route
                        path='dashboard'
                        element={<DashboardPage />}
                    />
                    <Route
                        path='settings'
                        element={<SettingsPage />}
                    />
                    <Route
                        path='*'
                        element={<NotFoundPage />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
