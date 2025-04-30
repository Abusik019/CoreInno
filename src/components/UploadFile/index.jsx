import React from "react";
import { Upload } from "antd";
import styles from "./style.module.css";
const { Dragger } = Upload;

const UploadFile = ({ setFile }) => (
    <Dragger
        className={styles.ant_upload}
        customRequest={({ file, onSuccess }) => {
            console.log("Файл получен, но не отправляется:", file);
            onSuccess("ok");
        }}
        onDrop={(e) => {
            e.preventDefault(); 
            const droppedFile = e.dataTransfer.files[0];
            console.log("Добавленный файл:", droppedFile);
            if (droppedFile) {
                setFile(droppedFile);
            }
        }}
        beforeUpload={(file) => {
            setFile(file);
            return false; 
        }}
        style={{
            width: "100%",
            minHeight: "200px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: '#EAEAEA25',
            borderColor: '#EAEAEA',
            borderStyle: 'dashed',
        }}
    >
        <p 
            className={styles.ant_upload_text}
            style={{
                opacity: 1
            }}
        >
            Нажмите для загрузки или перетащите файл
        </p>
        <p 
            className={styles.ant_upload_text}
            style={{
                opacity: 0.7
            }}
        >
            Максимальный размер файла 100МБ</p>
    </Dragger>
);

export default UploadFile;