import { Section } from '../Section/Section';
import { AuthProvider } from 'tempHook/Auth/AuthProvider';
import { AuthBar } from 'tempHook/Auth/AuthBar';
import { Timer } from 'tempHook/Timer/Timer';
import { Collection } from 'tempHook/Collection/Collection';
import { AppForm } from 'tempHook/Form/AppForm';
import { AppModal } from 'tempHook/Modal/AppModal';
import { AppRequest } from 'tempHook/Request/AppRequest';

export const AppHook = () => {
  return (
    <AuthProvider>
      <Section mainTitle="React Hook Template" />
      <AuthBar />
      <Timer />
      <Collection />
      <AppForm />
      <AppModal />
      <AppRequest />
    </AuthProvider>
  );
};
