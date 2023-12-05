import { useState } from "react";
import useShowToast from "./useShowToast";

const usePreviewImg = (e) => {
    const [imgUrl, setImgUrl] = useState(null);
    const showToast = useShowToast()

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();

            reader.onload = () => {
                setImgUrl(reader.result);
            }

            reader.readAsDataURL(file);
        } else {
            showToast("invalid file type", "Please select an image file")
            setImgUrl(null)
        }
    }
    console.log(imgUrl)

    return { handleImageChange, imgUrl }

}

export default usePreviewImg