/**
 * User data type
 */
export interface IUser {
  id: string;
  fullname: string;
  email: string;
  avatar: string | null;
  //   emailVerified: boolean;
}

/**
 * User's profile. This holds additional details about a user
 */
export interface IUserProfile {
  id: string;
  fullname: string;
  contact: {
    primary: string;
    secondary: string | null;
  };

  createdAt: string | number;
  avatarURL: string | null;

  googleAccount: {
    email: string;
    tokenId: string;
  } | null;
}
