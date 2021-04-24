import React, { useState } from 'react';

import { Layout } from './src/components/layout/Layout';
import { Header } from './src/components/header/Header';
import { Button } from './src/components/button/Button';
import { SimpleContent } from './src/components/modals/SimpleContent';
import { FixedContent } from './src/components/modals/FixedContent';
import { SnappingList } from './src/components/modals/SnappingList';

export default () => {
  const [modal, setModal] = useState([])

  const renderButtons = links => {
    return links.map((link, i) => (
      <Button key={i} onPress={() => modal[i].openModal() } name={link} />
    ));
  };

  const openSnap = (index) => {
    modal[index].text
  }

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
          let newModal = modal
          newModal[0] = el
          setModal(newModal)
        }}
      />
      <FixedContent
        ref={el => {
          let newModal = modal
          newModal[1] = el
          setModal(newModal)
        }}
      />
      <SnappingList
        modal={modal}
        setModal={setModal}
        modalIndex={2}
      />
      {/* <AlwaysOpen /> */}
    </Layout>
  );
};
