'use client'

import UploadImage from "../components/UploadImage"

import React from "react"

export default function DetectorPage() {

    return (
        <div className="flex flex-col text-center items-center mx-[20%] my-[20px]">

            <h1 className="text-2xl font-bold text-center mt-20 text-red-200">
                Upload your car image here!
            </h1>

            <UploadImage/>


        </div>
    )
}