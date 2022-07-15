import axios from "axios";
import { useState} from "react";
import InstructorRoute from "../../../component/routes/InstructorRoute";
import CourseCreateForm from "../../../component/forms/CourseCreateForm";
import Resizer from "react-image-file-resizer";
import { toast } from "react-toastify";
import{useRouter} from "next/router";
//import { Router } from "express";
//import {SaveOutlined} from "@ant-design/icons"

//import InstuctorRoute from "../../../component/routes/InstructorRoute";

const CourseCreate = () => {
    const [values,setValues] = useState({
      name:"" ,
      description:"" ,
      price:"299.00",
      uploading: false,
      paid: true,
      category:"",
      type:"",
      loading: false,
     
    });
    const [image,setImage] = useState({});
    const [preview, setPreview] = useState("");
    const [uploadButtonText , setUploadButtonText] = useState("Upload Image");
    const router = useRouter();
    const handleChange =(e) => {
        setValues({...values, [e.target.name]:e.target.value});
    };
    const handleImage = (e) => {
        let file = e.target.files[0];
        setPreview(window.URL.createObjectURL(file));
        setUploadButtonText(file.name);
        setValues({...values,loading:true});

        Resizer.imageFileResizer(file , 720, 500,"JPEG", 100, 0, async(uri) => {
            try{
            let {data} = await axios.post("/api/course/upload-image",{
                image:uri ,
            
            });
            console.log("IMAGE UPLOADED",data);
            setImage(data)
            setValues({...values,loading:false});
            
            }catch(err){
                console.log(err)
                setValues({...values, loading:false});
                toast("Image upload failed.Try later.");
            }

        });
    };
    const handleImageRemove = async() =>{
        try{
            setValues({...values, loading:true});
            const res = await axios.post("/api/course/remove-image",{image})
            setImage({})
            setPreview("")
            setUploadButtonText("Upload Image")
            setValues({...values,loading:false});
           }catch(err){
               console.log(err);
               setValues({...values,loading:false});
               toast("Image upload failed.Try later.")
           }
    };
    const handleSubmit =async(e) => {
     try{
        e.preventDefault();
        // console.log(values);
        const {data} = await axios.post("/api/course",{
            ...values,
            image,
        });
        toast("Great! Now you can start adding lessons");
        router.push("/instructor");
     }catch(err){
         toast(err.response.data);
     }
     
     };
      
    return(
        <InstructorRoute>
        <h1 className = "jumbotron text-center square" style={{paddingTop:"70px"}}>Create Course</h1>
         <div className = "pt-3 pb-3">
             <CourseCreateForm
             handleSubmit ={handleSubmit}
             handleImage = {handleImage}
             handleChange ={handleChange}
             values= {values}
             setValues = {setValues}
             preview = {preview}
             uploadButtonText ={uploadButtonText}
             handleImageRemove ={handleImageRemove}
             />
              </div>
        </InstructorRoute>
    );
};

export default  CourseCreate;