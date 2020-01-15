import React from 'react';
import BackCaretWhite from '../images/backCaretWhite.png';
import locationWhite from '../images/locationWhite.png';
import callWhite from '../images/callWhite.png';
import profileImg from '../images/doctorImage.jpg';
import messageWhite from '../images/messageWhite.png';

const DoctorProfile = ({ match }) => {
  return (
    <div>
      {match.params.docname}
      <div className="doctorProfile container">
        <div className="doctorProfile__nav row justify-content-between">
          <div className="col-6 text-left">
            <img src={BackCaretWhite} alt="back caret" />
          </div>
          <div className="doctorProfile__location col-6">
            <div>
              <img src={locationWhite} alt="location" />
            </div>
            <div className="doctorProfile__location--text">
              bangalore
            </div>
          </div>
        </div>

        <div className="doctorProfile__heading row justify-content-center">
          <div className="col-12 text-center">
            <h3>Dr Hans Landa</h3>
          </div>
          <div className="col-10 text-center">
            <div className="doctorProfile__heading--call d-inline-block">
              <img src={callWhite} alt="call" />
            </div>
            <div className="doctorProfile__heading--picture rounded-circle d-inline-block">
              <img src={profileImg} alt="doctor profile" />
            </div>
            <div className="doctorProfile__heading--message d-inline-block">
              <img src={messageWhite} alt="message" />
            </div>
          </div>
          <div className="col-12 text-center">
            <p>Orthopedy</p>
          </div>
        </div>

        <div className="container doctorProfile__heading--exp doctor__price_exp_likes py-1">
          <div className="row justify-content-center">
            <div className="col-8">
              <div className="row">
                <div className="text-left p-0 col-3">
                  <p>
                    $150
                  </p>
                </div>
                <div className="text-center p-0 col-6">
                  <p>
                    12 yrs of exp
                  </p>
                </div>
                <div className="doctor__price_exp_likes--likes text-right p-0 col-3">
                  <p>
                    <span>&hearts;</span>
                    123
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DoctorProfile;
