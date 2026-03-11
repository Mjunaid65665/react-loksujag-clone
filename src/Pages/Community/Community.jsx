import React from "react";
import "./Community.css";
import { Link } from "react-router-dom";
const Community = () => {
  return (
    <div className="community-section">
      <div className="container">
        <div className="row justify-content-center px-4">
          <div className="col-sm-12 col-md-12 col-lg-10">
            <div className="community-box">
              <div className="row g-0">
                {/* LEFT SIDE FORM */}

                <div className="col-lg-6 form-side">
                  <form>
                    <label>Full Name</label>
                    <input type="text" className="form-control" required />

                    <label>First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="15 Characters"
                      required
                    />

                    <label>Gender</label>
                    <select className="form-select" required>
                      <option>Please select your gender</option>
                      <option value="male">male</option>
                      <option value="female">female</option>
                      <option value="other">other</option>
                    </select>

                    <label>Your Introduction</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="50 Words (optional)"
                    />

                    <label>Email</label>
                    <input type="email" className="form-control" required/>

                    <label>Country</label>
                    <select className="form-select" required>
                      <option>Pakistan</option>
                      <optgroup label="Africa">
                        <option value="DZ">Algeria</option>
                        <option value="EG">Egypt</option>
                        <option value="KE">Kenya</option>
                        <option value="NG">Nigeria</option>
                        <option value="ZA">South Africa</option>
                      </optgroup>

                      <optgroup label="Americas">
                        <option value="AR">Argentina</option>
                        <option value="BR">Brazil</option>
                        <option value="CA">Canada</option>
                        <option value="CL">Chile</option>
                        <option value="CO">Colombia</option>
                        <option value="MX">Mexico</option>
                        <option value="US">United States</option>
                      </optgroup>

                      <optgroup label="Asia">
                        <option value="CN">China</option>
                        <option value="IN">India</option>
                        <option value="ID">Indonesia</option>
                        <option value="JP">Japan</option>
                        <option value="MY">Malaysia</option>
                        <option value="PK">Pakistan</option>
                        <option value="PH">Philippines</option>
                        <option value="KR">South Korea</option>
                        <option value="TH">Thailand</option>
                        <option value="VN">Vietnam</option>
                      </optgroup>

                      <optgroup label="Europe">
                        <option value="AT">Austria</option>
                        <option value="BE">Belgium</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                        <option value="GR">Greece</option>
                        <option value="IE">Ireland</option>
                        <option value="IT">Italy</option>
                        <option value="NL">Netherlands</option>
                        <option value="NO">Norway</option>
                        <option value="PL">Poland</option>
                        <option value="PT">Portugal</option>
                        <option value="ES">Spain</option>
                        <option value="SE">Sweden</option>
                        <option value="CH">Switzerland</option>
                        <option value="TR">Turkey</option>
                        <option value="UA">Ukraine</option>
                        <option value="GB">United Kingdom</option>
                      </optgroup>

                      <optgroup label="Middle East">
                        <option value="IR">Iran</option>
                        <option value="IQ">Iraq</option>
                        <option value="IL">Israel</option>
                        <option value="SA">Saudi Arabia</option>
                        <option value="AE">United Arab Emirates</option>
                      </optgroup>

                      <optgroup label="Oceania">
                        <option value="AU">Australia</option>
                        <option value="NZ">New Zealand</option>
                      </optgroup>
                    </select>

                    <label>City/District</label>
                    <select className="form-select">
                      <option>Please select your City/district</option>
                      <optgroup label="Federal Capital">
                        <option value="islamabad">Islamabad</option>
                      </optgroup>

                      <optgroup label="Punjab">
                        <option value="lahore">Lahore</option>
                        <option value="faisalabad">Faisalabad</option>
                        <option value="rawalpindi">Rawalpindi</option>
                        <option value="gujranwala">Gujranwala</option>
                        <option value="multan">Multan</option>
                        <option value="sialkot">Sialkot</option>
                        <option value="sargodha">Sargodha</option>
                        <option value="bahawalpur">Bahawalpur</option>
                        <option value="gujrat">Gujrat</option>
                        <option value="sheikhupura">Sheikhupura</option>
                        <option value="jhelum">Jhelum</option>
                        <option value="sahiwal">Sahiwal</option>
                        <option value="okara">Okara</option>
                        <option value="kasur">Kasur</option>
                      </optgroup>

                      <optgroup label="Sindh">
                        <option value="karachi">Karachi</option>
                        <option value="hyderabad">Hyderabad</option>
                        <option value="sukkur">Sukkur</option>
                        <option value="larkana">Larkana</option>
                        <option value="mirpurkhas">Mirpur Khas</option>
                        <option value="nawabshah">
                          Nawabshah (Shaheed Benazirabad)
                        </option>
                        <option value="badin">Badin</option>
                        <option value="dadu">Dadu</option>
                        <option value="ghotki">Ghotki</option>
                        <option value="thatta">Thatta</option>
                      </optgroup>

                      <optgroup label="Khyber Pakhtunkhwa">
                        <option value="peshawar">Peshawar</option>
                        <option value="mardan">Mardan</option>
                        <option value="abbottabad">Abbottabad</option>
                        <option value="mansehra">Mansehra</option>
                        <option value="swat">Swat (Mingora)</option>
                        <option value="kohat">Kohat</option>
                        <option value="now shera">Nowshera</option>
                        <option value="charsadda">Charsadda</option>
                        <option value="dera-ismail-khan">
                          Dera Ismail Khan
                        </option>
                      </optgroup>

                      <optgroup label="Balochistan">
                        <option value="quetta">Quetta</option>
                        <option value="gwadar">Gwadar</option>
                        <option value="khuzdar">Khuzdar</option>
                        <option value="turbat">Turbat (Kech)</option>
                        <option value="loralai">Loralai</option>
                        <option value="sibi">Sibi</option>
                        <option value="chaman">Chaman</option>
                        <option value="hub">Hub</option>
                      </optgroup>

                      <optgroup label="Gilgit-Baltistan & AJK">
                        <option value="muzaffarabad">Muzaffarabad</option>
                        <option value="mirpur-ajk">Mirpur (AJK)</option>
                        <option value="gilgit">Gilgit</option>
                        <option value="skardu">Skardu</option>
                      </optgroup>
                    </select>

                    <label>Mobile (Optional)</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="+92"
                      required
                    />

                    <label>Password</label>
                    <input type="password" className="form-control" required />

                    <label>Confirm Password</label>
                    <input type="password" className="form-control" required />

                    <button className="register-btn">Register</button>

                    <p className="privacy-text">
                      Your information is safe with us
                      <br />
                      Read our{" "}
                      <span>
                        <Link to="/">Privacy Policy</Link>
                      </span>
                    </p>
                  </form>
                </div>

                {/* RIGHT SIDE CONTENT */}

                <div className="col-lg-6 info-side d-flex flex-column justify-content-center">
                  <div className="heading">
                    <h2>Already a member?</h2>
                  </div>

                  <button className="login-btn mt-4 mb-4">
                    <Link to="/">Login</Link>
                  </button>
                  <div className="heading2">
                    <h4>
                      What should you expect after joining Lok Sujag Community
                    </h4>
                  </div>
                  <div className="right-text">
                    <p>You will have Your Own Member's page on our website</p>

                    <p>
                      You will get a weekly email newsletter containing updates
                      about our content and activities
                    </p>

                    <p>
                      You will be able to rate our content and share your views
                      with us directly
                    </p>

                    <p>
                      You may be approached by Lok Sujag for help in developing
                      a story.
                    </p>

                    <p>
                      You will receive invitations for exclusive events, online
                      and others
                    </p>

                    <p>
                      You will get priority in all our future plans and offers
                    </p>
                  </div>
                  <div className="last-txt">
                    <p>
                      Want to know more? Please read{" "}
                      <span>
                        <Link to="/">About Us</Link>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
