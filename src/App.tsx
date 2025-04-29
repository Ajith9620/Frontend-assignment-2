import { BrowserRouter } from 'react-router-dom';
import Theme from '@/components/template/Theme';
import ThemeProvider from '@/components/template/ThemeProvider'; // Your new theme switching provider
import MenuBar from '@/components/shared/MenuBar';               // Your new menu bar
import Footer from '@/components/template/Footer';               // Optional
import { AuthProvider } from '@/auth';
import Layout from '@/components/layouts';
import Views from '@/views';
import appConfig from './configs/app.config';
import './locales';

if (appConfig.enableMock) {
    import('./mock');
}

function App() {
    return (
        <Theme>
            <BrowserRouter>
                <AuthProvider>
                    <ThemeProvider> 
                        <Layout>
                            <MenuBar /> 
                            <Views />
                            {/* <Footer pageContainerType="default" /> */}
                        </Layout>
                    </ThemeProvider>
                </AuthProvider>
            </BrowserRouter>
        </Theme>
    );
}

export default App;
