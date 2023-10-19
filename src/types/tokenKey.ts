export const tokenKey = "accessToken";

export interface IMeta {
  limit: number;
  page: number;
  total: number;
}

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  role: UserRole;
  phone: string;
  address: string;
  userName: string;
  profileImage?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  image: string;
  location: string;
  price: number;
  availability: AvailabilityOption;
  createdAt: Date;
  categoryId: string;
  category: Category;
  bookings: Booking[];
  reviews: Review[];
  carts: Cart[];
}

export enum UserRole {
  USER = "user",
  ADMIN = "admin",
  SUPER_ADMIN = "super_admin",
}

export enum AvailabilityOption {
  YES = "yes",
  NONE = "none",
}

export interface Review {
  id: string;
  review: string;
  rating: number;
  userId: string;
  serviceId: string;
  user: IUser;
  service: Service;
}

export interface Booking {
  id: string;
  userId: string;
  status: BookingStatus;
  createdAt: Date;
  updatedAt: Date;
  scheduleDate: Date;
  messageByAdmin?: string;
  adjustedSchedule?: Date;
  address: string;
  serviceId: string;
  user: IUser;
  service: Service;
}

export enum BookingStatus {
  PENDING = "pending",
  ACCEPTED = "accepted",
  CANCELLED = "cancelled",
}

export interface Blog {
  id: string;
  title: string;
  body: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Cart {
  id: string;
  serviceId: string;
  userId: string;
  user: IUser;
  service: Service;
}

export interface Feedback {
  id: string;
  userId: string;
  comment: string;
  user: IUser;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}
