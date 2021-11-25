import React, { useCallback } from 'react'
import Dropzone from 'react-dropzone'

export default function DropzoneInput({ file, setFile, name, label, className }) {

    const onDrop = useCallback((acceptedFiles => {
        let tmp = file.length > 0 ? [...file] : [];
        tmp.push(...acceptedFiles);
        setFile(tmp, name);
    }))

    const onDelete = (index) => {
        let tmp = [...file];
        tmp.splice(index, 1);
        setFile(tmp, name);
    }

    return (
        <div className={className}>
            <label className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <div className="flex flex-wrap gap-2">

                {
                    file?.length > 0 && <ListFile file={file} onDelete={onDelete} />
                }

                <Dropzone onDrop={onDrop} >
                    {({ getRootProps, getInputProps }) => (
                        <section className="flex-grow">
                            <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                <div className="mt-1 sm:col-span-2">

                                    <NewFile />

                                </div>
                            </div>
                        </section>
                    )}
                </Dropzone>
            </div>
        </div>
    )
}

function ListFile({ file, onDelete }) {

    return (
        file.map((item, i) => (
            <div
            key={i}
            onClick={() => onDelete(i)}
            className="flex align-middle group justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md flex-grow hover:border-red-700 hover:text-red-700 cursor-pointer"
            >
                <div>
                    <svg
                        className="mx-auto h-12 w-12 mt-2 text-gray-400 group-hover:hidden"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                    >
                        <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <svg
                        className="mx-auto h-12 w-12 mt-2 text-red-700 hidden group-hover:block"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                    >
                        <path
                            d="M28 8H12C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12V32M8 32V36C8 37.0609 8.42143 38.0783 9.17157 38.8284C9.92172 39.5786 10.9391 40 12 40H36C37.0609 40 38.0783 39.5786 38.8284 38.8284C39.5786 38.0783 40 37.0609 40 36V28M8 32L17.172 22.828C17.9221 22.0781 18.9393 21.6569 20 21.6569C21.0607 21.6569 22.0779 22.0781 22.828 22.828L28 28M40 20V28M40 28L36.828 24.828C36.0779 24.0781 35.0607 23.6569 34 23.6569C32.9393 23.6569 31.9221 24.0781 31.172 24.828L28 28M28 28L32 32M36 4L44 12M44 4L36 12M28 16H28.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <span className="px-1 z-10">{item.name}</span>
                </div>                
            </div>
        ))
    )

}


function NewFile() {

    return (
        <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md cursor-pointer">
            <div className="space-y-1 text-center">
                <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                >
                    <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>

                <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                    <span>Parcourir dans les fichiers</span>
                </label>
                <span className="pl-1">ou glissez/déposez</span>

                <p className="text-xs text-gray-500">PDF, PNG, JPG maximum 50MB</p>
            </div>
        </div>
    )
}