import { Section } from '../Section/Section';
import { AuthProvider } from 'temp/Class/Auth/AuthProvider';
import { AuthBar } from 'temp/Class/Auth/AuthBar';
import { Timer } from 'temp/Class/Timer/Timer';
import { Collection } from 'temp/Class/Collection/Collection';
import { AppModal } from 'temp/Class/Modal/AppModal';
import { AppForm } from 'temp/Class/Form/AppForm';
import { AppRequest } from 'temp/Class/Request/AppRequest';

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
