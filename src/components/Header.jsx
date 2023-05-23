import "./header.css";
const header = () => {
    const google_url='https://avatars.githubusercontent.com/u/81777768?s=40&v=4'
  return (
    <div className="header_section">
      <div className="heading_name">
          Google Docs Clone
         <img src={google_url} alt="" className="icon_google" /> 
      </div>
    </div>
  );
};

export default header;
