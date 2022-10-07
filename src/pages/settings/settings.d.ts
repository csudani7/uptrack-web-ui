import React from "react";

declare namespace ISettingsProps {
  export type userAccountDetails = {
    firstName: string;
    lastName: string;
    email: string;
    oldPassword: string;
    newPassword: string;
  };

  export interface IAccountDetailsProps {
    profileImage: string;
    setProfileImage: React.Dispatch<React.SetStateAction<string>>;
    userAccountDetails: userAccountDetails;
    setUserAccountDetails: React.Dispatch<React.SetStateAction<userAccountDetails>>;
    submitHandler: (e) => void;
  }
}

export default ISettingsProps;
