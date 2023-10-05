import nodemailer from 'nodemailer'
import { EmailProductInfo,NotificationType } from '@/types';

export const Notification = {
  WELCOME: "WELCOME",
  CHANGE_OD_STOCK: "CHANGE_OF_STOCK",
  LOWEST_PRICE: "LOWEST_PRICE",
  THRESHOLD_MET:'THRESHOLD_MET',
};

export const generateEmailBody=(product:EmailProductInfo,type:NotificationType)=>{

    const shortenedTitle=product.title.length>20
    ? `${product.title.substring(0,20)}...`
    : product.title
    

}