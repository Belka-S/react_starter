import { Section } from '../Section/Section';
import { AuthProvider } from 'temp/tempHook/Auth/AuthProvider';
import { AuthBar } from 'temp/tempHook/Auth/AuthBar';
import { Timer } from 'temp/tempHook/Timer/Timer';
import { Collection } from 'temp/tempHook/Collection/Collection';
import { AppForm } from 'temp/tempHook/Form/AppForm';
import { AppModal } from 'temp/tempHook/Modal/AppModal';
import { AppRequest } from 'temp/tempHook/Request/AppRequest';

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
