export interface IPhoto {
   id: string;
   created_at: string;
   updated_at: string | null;
   promoted_at: string | null;
   width: number;
   height: number;
   color: string;
   blur_hash: string;
   description: string | null;
   alt_description: string | null;
   urls: IUrl;
   links: ILink;
   categories: string[];
   likes: number;
   liked_by_user: boolean;
   current_user_collections: any[];
   sponsorship: any | null;
   topic_submissions: ITopic;
   user: IUser;
   [key: string | number]: any;
}

// image types

interface IUrl {
   raw: string;
   full: string;
   regular: string;
   small: string;
   thumb: string;
   small_s3: string;
}

interface ILink {
   self: string;
   html: string;
   download: string;
   download_location: string;
}

interface ITopic {
   [key: string | number]: any;
}

// user types

interface IUser {
   id: string;
   updated_at: string | null;
   username: string;
   name: string;
   first_name: string;
   last_name: string;
   twitter_username: string | null;
   portfolio_url: string;
   bio: string;
   location: string | null;
   links: IUserLink;
   profile_image: IProfileImage;
   instagram_username: string;
   total_collections: number;
   total_likes: number;
   total_photos: number;
   accepted_tos: boolean;
   for_hire: boolean;
   social: IUserSocial;
}

interface IUserLink {
   self: string;
   html: string;
   photos: string;
   likes: string;
   portfolio: string;
   following: string;
   followers: string;
}

interface IProfileImage {
   small: string;
   medium: string;
   large: string;
}

interface IUserSocial {
   instagram_username: string | null;
   portfolio_url: string | null;
   twitter_username: string | null;
   paypal_email: string | null;
}
