import React from 'react';
import { useTranslation } from 'react-i18next';
import { Layout } from '../components/Layout';
import { Text } from '../components/Text';
import { Switch } from '../components/Switch';

export const WelcomeScreen: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Text>{t('common:helloWorld')}</Text>
      <Switch />
    </Layout>
  );
};
