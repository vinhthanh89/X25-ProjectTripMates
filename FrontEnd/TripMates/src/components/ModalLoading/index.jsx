/* eslint-disable react/prop-types */
import { ConfigProvider, Modal, Spin } from "antd";
import { useEffect, useState } from "react";

const ModalLoading = ({ loading }) => {

  return (
    <div>
    <ConfigProvider
    theme={{
    components: {
      Spin: {
        dotSizeLG : 60
      },
    },
  }}
    >
    <Modal
        centered={true}
        width='150px'
       open={loading} 
        closable={false}
         footer={null}>
        <div className="flex justify-center items-center h-[150px]">
          <Spin size="large" />
        </div>
      </Modal>
    </ConfigProvider>

    </div>
  );
};

export default ModalLoading;
