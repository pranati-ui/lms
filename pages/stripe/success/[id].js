import { useEffect } from "react";
import { FileSyncOutlined} from "@ant-design/icons";
import UserRoute from "../../../component/routes/UserRoute";
import { useRouter } from "next/router";
import axios from "axios";

const StripeSuccess = () =>{
    const router = useRouter();
    const {id} = router.query;
    useEffect(() =>{
        if (id) successRequest();
    },[id]);
    const successRequest = async()=>{
        const {data} = await axios.get(`/api/stripe-success/${id}`);
        console.log('data from stripe-success',data)
        router.push(`/user/course/${data.course.slug}`);
    };
    return(
        <UserRoute showNav={false}>
            <div className="row text-center">
                <div className="col-md-9 pb-5">
                    <div className="d-flex justify-content-center p-5">
                        <FileSyncOutlined spin className="display-1 text-danger p-5"/>
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
        </UserRoute>
        
    )
};
export default StripeSuccess;