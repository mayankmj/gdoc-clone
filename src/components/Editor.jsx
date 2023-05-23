import Quill from "quill";

import "quill/dist/quill.snow.css"; // quill in built css
import { useEffect,useState } from "react";
import {io} from 'socket.io-client'
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import styled from "@emotion/styled";

// toolbar ojbect
const toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // toggled buttons
  ["blockquote", "code-block"],


  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: "ordered" }, { list: "bullet" }],
  [{ script: "sub" }, { script: "super" }], // superscript/subscript
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ direction: "rtl" }], // text direction

  [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],

  ["clean"], // remove formatting button
];


const Editor = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User", gap: true },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
  ];
  useEffect(() => {
    const quillServer = new Quill("#container", {
      theme: "snow",
      modules: { toolbar: toolbarOptions },
    }); 

    // Editor.removeModule('toolbar');
    // quill object
  },[]); // useEffect runs when the page reloads , we pass an empty array so eventually it will run only once
  // we are using life cycle method i:e component did mount

  

  return (
    <Component>
      <Box className = "container1" id="container" ></Box>
    </Component>
  );
};
export default Editor;
// css

const Component = styled.div`
 background: #f5f5f5;
`

