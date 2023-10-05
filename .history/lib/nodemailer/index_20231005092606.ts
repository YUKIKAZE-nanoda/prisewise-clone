import nodemailer from 'nodemailer'
import { EmailProductInfo,NotificationType } from '@/types';

export const Notification = {
  WELCOME: "WELCOME",
  CHANGE_OD_STOCK: "CHANGE_OF_STOCK",
  LOWEST_PRICE: "LOWEST_PRICE",
  THRESHOLD_MET:'THRESHOLD_MET',
};

export const generateEmailBody=()=>{

}