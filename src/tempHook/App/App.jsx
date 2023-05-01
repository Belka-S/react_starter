import { Section } from '../Section/Section';
import { AuthProvider } from 'tempHook/Auth/Provider';
import { AuthBar } from 'tempHook/Auth/AuthBar';
import { Timer } from 'tempHook/Timer/Timer';
import { AppRequest } from 'tempHook/Request/AppRequest';
import { Collection } from 'tempHook/Collection/Collection';
import { AppModal } from 'tempHook/Modal/AppModal';
import { AppForm } from 'tempHook/Form/AppForm';

export const AppHook = () => {
  return (
    <AuthProvider>
      <Section mainTitle="React Hook Template" />
      <AuthBar />
      <Timer />
      <AppForm />
      <AppModal />
      <Collection />
      <AppRequest />
    </AuthProvider>
  );
};
