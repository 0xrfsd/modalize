import React from 'react';

import { Layout } from './src/components/layout/Layout';
import { Header } from './src/components/header/Header';
import { Button } from './src/components/button/Button';
import { SimpleContent } from './src/components/modals/SimpleContent';
import { FixedContent } from './src/components/modals/FixedContent';
import { SnappingList } from './src/components/modals/SnappingList';

export default () => {
  const modal = [];

  const renderButtons = links => {
    return links.map((link, i) => (
      <Button key={i} onPress={() => modal[i].openModal()} name={link} />
    ));
  };

  return (
    <Layout>
      <Header subheading="Desenvolvimento" />

      {renderButtons([
        'Abrir visualização do produto',
        'Abrir onboarding',
        'Abrir lista de categorias',
      ])}

      <SimpleContent
        ref={el => {
          modal[0] = el;
        }}
      />
      <FixedContent
        ref={el => {
          modal[1] = el;
        }}
      />
      <SnappingList
        ref={el => {
          modal[2] = el;
        }}
      />
      {/* <AlwaysOpen /> */}
    </Layout>
  );
};
