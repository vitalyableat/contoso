import { FC } from 'react';
import { useModal } from '../../../hooks';
import { Modal, Table } from '../../templates';
import { SpecificationForm } from '../../forms';
import { PageWrap } from '../../ui';
import { SPECIFICATIONS, SPECIFICATIONS_HEADER } from './specifications.constants';
import { specificationTableAdapter } from './specifications.adapter';

export const Specifications: FC = () => {
  const { isModalOpen, hideModal, selectedItemId, onTableIconClick } = useModal();

  return (
    <PageWrap>
      <Modal isModalOpen={isModalOpen} hideModal={hideModal}>
        <SpecificationForm
          specification={SPECIFICATIONS.find(
            (specification) => specification.id === selectedItemId
          )}
        />
      </Modal>
      <Table
        header={SPECIFICATIONS_HEADER}
        body={specificationTableAdapter(SPECIFICATIONS)}
        onIconClick={onTableIconClick}
      />
    </PageWrap>
  );
};
