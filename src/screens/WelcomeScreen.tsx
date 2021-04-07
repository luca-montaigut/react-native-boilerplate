import React from 'react';
import { useTranslation } from 'react-i18next';
import { Layout, Text, Switch } from 'src/components';

export const WelcomeScreen: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Text>{t('common:helloWorld')}</Text>
      <Switch />
    </Layout>
  );
};
