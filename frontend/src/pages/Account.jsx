import React from 'react';
import { Footer } from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/AuthContext/auth-context';

export default function Account() {
   const { user } = useUserAuth();
   const navigate = useNavigate();

   return (
      <div>
         <div className="p-10 m-10">
            <p className="font-medium text-4xl mx-4">Account</p>
            <p className="mx-4 text-lg">
               <b>{user.displayName}</b>, {user.email} ·{' '}
               <b>
                  <u
                     className="cursor-pointer"
                     onClick={() => navigate('/profile')}
                  >
                     Go to profile
                  </u>
               </b>
            </p>

            <section className="account_setting_card grid grid-cols-3 grid-rows-2 pt-10">
               <span className="rounded p-4 shadow-xl cursor-pointer border-4 m-3 personal_info">
                  <i className="bx text-4xl font-thin mb-4 text bx-id-card"></i>
                  <p>Personal Info</p>
                  <p>Provide personal details and how we can reach you</p>
               </span>

               <span className="rounded p-4 shadow-xl cursor-pointer border-4 m-3 login_&_security">
                  <i className="bx text-4xl font-thin mb-4 text bx-shield-alt-2"></i>
                  <p>Login & Security</p>
                  <p>Update your password and secure your account</p>
               </span>

               <span className="rounded p-4 shadow-xl cursor-pointer border-4 m-3 payments_payout">
                  <i className="bx text-4xl font-thin mb-4 text bx-credit-card"></i>
                  <p>Payments & Payouts</p>
                  <p>
                     Review payments, payouts, coupons, gift cards, and taxes
                  </p>
               </span>

               <span className="rounded p-4 shadow-xl cursor-pointer border-4 m-3 notifications">
                  <i className="bx text-4xl font-thin mb-4 text bx-bell"></i>
                  <p>Notifications</p>
                  <p>
                     Choose notification preference and how you want to be
                     contacted
                  </p>
               </span>

               <span className="rounded p-4 shadow-xl cursor-pointer border-4 m-3 privacy">
                  <i className="bx text-4xl font-thin mb-4 text bx-fingerprint"></i>
                  <p>Privacy & Sharing</p>
                  <p>
                     Control connected apps, what you shared, and who sees it
                  </p>
               </span>

               <span className="rounded p-4 shadow-xl cursor-pointer border-4 m-3 global_preference">
                  <i className="bx text-4xl font-thin mb-4 text bx-globe"></i>
                  <p>Golbal Preferences</p>
                  <p>Set your default language, currency, and timezone</p>
               </span>
            </section>

            <span className="flex items-center flex-col pt-16">
               <p>Need to deactivate your account?</p>{' '}
               <p className="font-bold underline cursor-pointer">
                  Take care of that now
               </p>
            </span>
         </div>
         <Footer />
      </div>
   );
}
