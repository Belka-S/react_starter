import { Section } from '../Section/Section';
import { AuthProvider } from 'tempClass/Auth/AuthProvider';
import { AuthBar } from 'tempClass/Auth/AuthBar';
import { Timer } from 'tempClass/Timer/Timer';
import { Collection } from 'tempClass/Collection/Collection';
import { AppModal } from 'tempClass/Modal/AppModal';
import { AppForm } from 'tempClass/Form/AppForm';
import { AppRequest } from 'tempClass/Request/AppRequest';

export const AppClass = () => {
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
