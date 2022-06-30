{/* <Menu mode="horizontal" selectedKeys={[current]} className = "mb-2">
<Item
  key="/"
  onClick={(e) => setCurrent(e.key)}
  icon={<AppstoreOutlined />}
>
  <Link href="/">
    <a>App</a>
  </Link>
</Item>
{user && user.data.role && user.data.role.includes("Instructor") ? (
  <Item
    key="/instructor/course/create"
    onClick={(e) => setCurrent(e.key)}
    icon={<CarryOutOutlined />}
  >
    <Link href="/instructor/course/create">
      <a>Create Course</a>
    </Link>
  </Item>
) : (
  <Item
    key="/user/become-instructor"
    onClick={(e) => setCurrent(e.key)}
    icon={<TeamOutlined />}
  >
    <Link href="/user/become-instructor">
      <a>Become Instructor</a>
    </Link>
  </Item>
)}

{user === null && (
  <>
  <Item
      key="/login"
      onClick={(e) => setCurrent(e.key)}
      style={{marginLeft:"1000px"}}
    >
      <Link href="/login">
        <a>Login</a>
      </Link>
    </Item>
    <Item
      key="/register"
      onClick={(e) => setCurrent(e.key)}
    >
      <Link href="/register">
        <a>Register</a>
      </Link>
    </Item>
  </>
)}
{user !== null && (
  <SubMenu
    key="/logout"
    icon={<LogoutOutlined />}
    title={user && user.data.name}
    style={{float:"right"}}
  >
    <ItemGroup>
      <Item key="/user">
        <Link href={"/user"}>
          <a>Dashboard</a>
        </Link>
      </Item>

      <Item onClick={logout}>Logout</Item>
    </ItemGroup>
  </SubMenu>
)}
 {user && user.data.role && user.data.role.includes("Instructor") && (
       <Item
       key="/instructor"
       onClick={(e) => setCurrent(e.key)}
       icon={<TeamOutlined />}
       className= "float-right"
     >
     <Link href="/instructor">
       <a>Instructor</a>
     </Link>
   </Item>

 )}
 </Menu> */}





// current: 'mail',
  //};
  // const handleClick = e => {
  //   setcurrent({ current: e.key });
  // };
  // const menuData = (
  //   <Menu
  //     items={[
  //       {
  //         key: "1",
  //         label: (
  //           <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
  //             1st menu item
  //           </a>
  //           // <Link href={"/user"}>
  //           //   <a>Dashboard</a>
  //           // </Link>
  //         ),
  //       },
  //       {
  //         key: "2",
  //         label: <div onClick={logout}>Logout</div>,
  //         // icon: <SmileOutlined />,
  //         // disabled: true,
  //       },
  //     ]}
  //   />
  // );






//   const menuData = (
//     <Menu
//       items={[
//         {
//           key: '1',
//           label: (
//             <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
//               1st menu item
//             </a>
//           ),
//         },
//         {
//           key: '2',
//           label: (
//             <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
//               2nd menu item (disabled)
//             </a>
//           ),
//           //icon: <SmileOutlined />,
//           disabled: true,
//         },
//         {
//           key: '3',
//           label: (
//             <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
//               3rd menu item (disabled)
//             </a>
//           ),
//           disabled: true,
//         },
//         {
//           key: '4',
//           danger: true,
//           label: 'a danger item',
//         },
//       ]}
//     />
//   );
//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top px-3">
//         <Link href="/">
//           <a className="navbar-brand">
//             <img
//               src="assets/images/logo.png"
//               style={{ width: "80px", height: "auto" }}
//             />
//           </a>
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav mr-auto">
//             {user && user.data.role && user.data.role.includes("Instructor") ? (
//               <li className="nav-item active">
//                 <Link href="/instructor/course/create">
//                   <a>Create Course</a>
//                 </Link>
//               </li>
//             ) : (
//               <li className="nav-item active">
//                 <Link href="/user/become-instructor">
//                   <a>Become Instructor</a>
//                 </Link>
//               </li>
//             )}
//              <Item
//             key="/login"
//             onClick={(e) => setCurrent(e.key)}
//             style={{marginLeft:"1000px"}}
//           >
//             <Link href="/login">
//               <a>Login</a>
//             </Link>
//           </Item>
//           <Item
//             key="/register"
//             onClick={(e) => setCurrent(e.key)}
//           >
//             <Link href="/register">
//               <a>Register</a>
//             </Link>
//           </Item>
//         </>
//       {user !== null && (
//         <SubMenu
//           key="/logout"
//           icon={<LogoutOutlined />}
//           title={user && user.data.name}
//           style={{float:"right"}}
//         >
//           <ItemGroup>
//             <Item key="/user">
//               <Link href={"/user"}>
//                 <a>Dashboard</a>
//               </Link>
//             </Item>
            
//             <Item onClick={logout}>Logout</Item>
//           </ItemGroup>
//         </SubMenu>
//       )}

//             {user && user.data.role && user.data.role.includes("Instructor") && (
//               <li className="nav-item active">
//                 <Link href="/instructor">
//                   <a>Instructor</a>
//                 </Link>
//               </li>
//             )}
//           </ul>
//           <div className="px-3" style={{ display: "flex", flexGrow: 1 }}>
//             <input
//               className="form-control mr-sm-2 flex-1"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//             />
//           </div>
//           {user === null ? (
//             <div className="d-flex align-items-center">
//               <div className="nav-item active mx-2">
//                 <Link href="/instructor/course/create">
//                   <a>
//                     <button className="btn btn-outline-success my-2 my-sm-0">
//                       Login
//                     </button>
//                   </a>
//                 </Link>
//               </div>
//               <div className="nav-item active mx-2">
//                 <Link href="/instructor/course/create">
//                   <a>
//                     <button className="btn btn-outline-success my-2 my-sm-0">
//                       SignUp
//                     </button>
//                   </a>
//                 </Link>
//               </div>
//             </div>
//           ) : (
//             <Dropdown overlay={menuData} placement="bottomRight">
//                <a onClick={e => e.preventDefault()}>
//               <Avatar
//                 style={{ backgroundColor: "#000", verticalAlign: "middle" }}
//                 size="large"
//                 // gap={gap}
//               >
//                 {user.data.name.split("")[0]}
//               </Avatar>
//               </a>
//             </Dropdown>

//           )}
//         </div>
//       </nav>





import { useState, useEffect, useContext } from "react";
import Link from "next/Link";
import { Menu, Avatar, Dropdown } from "antd";
import {
  AppstoreOutlined,
  LogoutOutlined,
  LoginOutlined,
  UserAddOutlined,
  CarryOutOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Context } from "../context";
import { toast } from "react-toastify";
import React from "react";
import axios from "axios";
import { useRouter } from "next/router";
const { Item, SubMenu, ItemGroup } = Menu;
const TopNav = () =>{
  const [current, setCurrent] = useState("");
  const { state, dispatch } = useContext(Context);
  const { user } = state;
  console.log("user", state);
  const router = useRouter();
  useEffect(() => {
    process.browser && setCurrent(window.location.pathname);
    console.log(window.location.pathname);
  }, [process.browser && window.location.pathname]);
  const logout = async () => {
    dispatch({ type: "LOGOUT" });
    window.localStorage.removeItem("user");
    const { data } = await axios.get("/api/logout");
    toast(data.message);
    router.push("/login");
  };
}
{
  boxsizing:"border-box";
  backgroundColor: "rgb(66, 50, 154)";
}