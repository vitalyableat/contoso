import { FC } from 'react';
import { useModal } from '../../../hooks';
import { Modal, Table } from '../../templates';
import { ProductForm } from '../../forms';
import { PageWrap } from '../../ui';
import { PRODUCTS, PRODUCTS_HEADER } from './products.constants';
import { productTableAdapter } from './products.adapter';

export const Products: FC = () => {
  const { isModalOpen, hideModal, selectedItemId, onTableIconClick } = useModal();

  return (
    <PageWrap>
      <Modal isModalOpen={isModalOpen} hideModal={hideModal}>
        <ProductForm product={PRODUCTS.find((product) => product.id === selectedItemId)} />
      </Modal>
      <Table
        header={PRODUCTS_HEADER}
        body={productTableAdapter(PRODUCTS)}
        onIconClick={onTableIconClick}
      />
    </PageWrap>
  );
};
