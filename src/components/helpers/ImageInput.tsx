import React, { useState, ChangeEvent } from 'react';
import axios from 'axios';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

type FileUploaderProps = {
    fileType: string;
    buttonLabel: string;
};

const FileUploader: React.FC<FileUploaderProps> = ({ fileType, buttonLabel }) => {
    const [uploadStatus, setUploadStatus] = useState<boolean>(false);
    const { toast } = useToast();

    const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];

        if (selectedFile) {
            setUploadStatus(true);

            const formData = new FormData();
            formData.append('file', selectedFile);

            try {
                const response = await axios.post('/api/upload-file', formData);
                toast({
                    title: "Success",
                    description: `File uploaded successfully: ${response.data.imgUrl}`,
                });
                setUploadStatus(false);
            } catch (error) {
                toast({
                    variant: "destructive",
                    title: "Error",
                    description: `Error uploading file: ${(error as Error).message}`,
                });
                setUploadStatus(false);
            }
        }
    };

    return (
        <div className="flex flex-col min-w-fit max-w-screen-sm">
            <input
                id={fileType}
                name={fileType}
                type="file"
                onChange={handleFileChange}
                className="hidden"
            />
            <Button
                className='text-blue-700'
                variant={fileType === "cv" ? 'outline' : 'ghost'}
                onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(fileType)?.click();
                }}
                disabled={uploadStatus}
            >
                {uploadStatus ? `Uploading ${buttonLabel}...` : `Upload ${buttonLabel}`}
            </Button>
        </div>
    );
};

export default FileUploader;


//                          // Usage for uploading a CV
// <FileUploader
//     fileType="cv"
//     buttonLabel="CV"
// />

//                             // Usage for uploading a Picture
// <FileUploader
//     fileType="picture"
//     buttonLabel="Picture"
// />