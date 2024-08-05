import React, { useState, ChangeEvent } from 'react';
import axios from 'axios';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const FileUploader = () => {
    const [uploadStatus, setUploadStatus] = useState<{ [key: string]: boolean }>({});
    const { toast } = useToast();

    const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        const inputName = e.target.name;

        if (selectedFile) {
            setUploadStatus((prev) => ({ ...prev, [inputName]: true }));

            const formData = new FormData();
            formData.append('file', selectedFile);

            try {
                const response = await axios.post('/api/upload-file', formData);
                // toast({
                //     title: "Success",
                //     description: `File uploaded successfully: ${response.data.imgUrl}`,
                // });
                setUploadStatus((prev) => ({ ...prev, [inputName]: false }));
            } catch (error) {
                // toast({
                //     variant: "destructive",
                //     title: "Error",
                //     description: `Error uploading file: ${(error as Error).message}`,
                // });
                setUploadStatus((prev) => ({ ...prev, [inputName]: false }));
            }
        }
    };

    return (
        <div className=" w-full flex  justify-between  items-center  flex-wrap  gap-5">
            {['picture', 'cv'].map((type) => (
                <div key={type} className=" flex flex-col min-w-fit max-w-screen-sm">
                    <input
                        id={type}
                        name={type}
                        type="file"
                        onChange={handleFileChange}
                        className="hidden"
                    />
                    <Button

                        onClick={(e) => {
                            e.preventDefault()
                            document.getElementById(type)?.click()
                        }}
                        disabled={uploadStatus[type]}

                    >
                        {uploadStatus[type] ? `Uploading ${type}...` : `Upload ${type === 'picture' ? 'Picture' : 'CV'}`}
                    </Button>
                </div>
            ))}
        </div>
    );
};

export default FileUploader;
