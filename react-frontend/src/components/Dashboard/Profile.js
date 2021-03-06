import logo from "../../files/logo.jpg";
const Profile = () => {
    return (
        <section className="dashSection">
            <div className="container">
                <div className="top_container">
                <div className="c_photo"><img src={logo} alt="logo" /></div>
                    <div className="c_name">
                        <h1>XYZ Ltd</h1>
                    </div>
                    <div className="c_cat">
                        <h3>Plastic</h3>
                    </div>
                    <div className="c_address">
                        <h5>20, Netaji street, Coimbatore - 641011</h5>
                    </div>
                    <div className="c_pno">
                        <h5>+91 9020100011</h5>
                    </div>
                    <div className="profile_edit">
                        <button className="button_edit">Edit</button>
                    </div>
                </div>
                <div className="bottom_container">
                    <div className="bottom_ele c_lid">
                        <div className="bottom_ele_item c_lid_label">Lisence ID</div>
                        <div className="bottom_ele_item c_lid_val">1234 1234 1234</div>
                    </div>
                    <hr />
                    <div className="bottom_ele c_email">
                        <div className="bottom_ele_item c_email_label">E-Mail</div>
                        <div className="bottom_ele_item c_email_val">hihello@gmail.com</div>
                    </div>
                    <hr />
                    <div className="bottom_ele c_pno">
                        <div className="bottom_ele_item c_pno_label">Contact no</div>
                        <div className="bottom_ele_item c_pno_val">+91 9102000010</div>
                    </div>
                    <hr />
                    <div className="bottom_ele c_website">
                        <div className="bottom_ele_item c_website_label">Website</div>
                        <div className="bottom_ele_item c_website_val"><a href="https://www.google.com">www.example.com</a></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;