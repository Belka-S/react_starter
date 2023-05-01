import { Section } from '../Section/Section';
import { AppRequest } from 'tempClass/Request/AppRequest';
import { Collection } from 'tempClass/Collection/Collection';
import { AppModal } from 'tempClass/Modal/AppModal';
import { AppForm } from 'tempClass/Form/AppForm';

export const AppClass = () => {
  return (
    <Section mainTitle="React Hook Template">
      <AppForm />
      <AppModal />
      <Collection />
      <AppRequest />
    </Section>
  );
};
