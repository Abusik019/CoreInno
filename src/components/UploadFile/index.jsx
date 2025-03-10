import React from "react";
import { Upload } from "antd";
const { Dragger } = Upload;

const UploadFile = ({ setFiles }) => (
    <Dragger
        customRequest={({ file, onSuccess }) => {
            console.log("Файл получен, но не отправляется:", file);
            onSuccess("ok");
        }}
        onDrop={(e) => {
            e.preventDefault(); 
            const filesArray = [...e.dataTransfer.files]; 
            console.log("Добавленные файлы:", filesArray);
            if (filesArray.length > 0) {
                setFiles((prev) => [...prev, ...filesArray]);
            }
        }}
        beforeUpload={(file) => {
            setFiles((prev) => [...prev, file]);
            return false;
        }}
        style={{
            width: "100%",
            minHeight: "200px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: '#EAEAEA40',
            borderColor: '#000',
            borderStyle: 'dashed',
        }}
    >
        <p className="ant-upload-text">
            Нажмите для загрузки или перетащите файл
        </p>
        <p className="ant-upload-text">Максимальный размер файла 100МБ</p>
    </Dragger>
);


export default UploadFile;
