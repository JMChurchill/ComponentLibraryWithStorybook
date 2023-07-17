import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Modal from '../../../src/components/atoms/Modal/Modal';
import Button from '../../../src/components/atoms/Button';

// https://prateeksurana.me/blog/react-component-library-using-storybook-7/
// https://storybook.js.org/docs/react/writing-stories/introduction

const meta: Meta<typeof Modal> = {
  title: 'Components/atoms/Modal',
  component: Modal,
};
export default meta;

type Story = StoryObj<typeof Modal>;

type TemplateStory = StoryObj<typeof ModalTemplate>;

const ModalTemplate = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Button onClick={() => setShowModal(true)}>Show Modal</Button>
      <Modal showModal={showModal} onRequestClose={() => setShowModal(false)}>
        <h2>This is a modal!</h2>
        <p>
          it should be rendered in a ModalContainer (div with id of
          "modal-root")
        </p>
        <div style={{ marginTop: '1rem' }}>
          <Button onClick={() => setShowModal(false)}>Close</Button>
        </div>
      </Modal>
    </>
  );
};

export const Default: TemplateStory = {
  render: () => <ModalTemplate />,
};
