import { Section } from '../Section/Section';
import { AuthProvider } from 'temp/tempClass/Auth/AuthProvider';
import { AuthBar } from 'temp/tempClass/Auth/AuthBar';
import { Timer } from 'temp/tempClass/Timer/Timer';
import { Collection } from 'temp/tempClass/Collection/Collection';
import { AppModal } from 'temp/tempClass/Modal/AppModal';
import { AppForm } from 'temp/tempClass/Form/AppForm';
import { AppRequest } from 'temp/tempClass/Request/AppRequest';

const AppClass = () => {
  return (
    <main>
      <Section mainTitle="React Class Template" />
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

export default AppClass;
