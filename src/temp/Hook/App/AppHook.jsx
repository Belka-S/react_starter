import { Section } from '../Section/Section';
import { AuthProvider } from 'temp/Hook/Auth/AuthProvider';
import { AuthBar } from 'temp/Hook/Auth/AuthBar';
import { Timer } from 'temp/Hook/Timer/Timer';
import { Collection } from 'temp/Hook/Collection/Collection';
import { AppForm } from 'temp/Hook/Form/AppForm';
import { AppModal } from 'temp/Hook/Modal/AppModal';
import { AppRequest } from 'temp/Hook/Request/AppRequest';

const AppHook = () => {
  return (
    <main>
      <Section mainTitle="React Hook Template" />
      <AuthProvider>
        <AuthBar />
      </AuthProvider>
      <Timer />
      <Collection />
      <AppForm />
      <AppModal />
      <AppRequest />
    </main>
  );
};

export default AppHook;
