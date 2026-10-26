const now = '2026-10-14';
export const demoData = {
  rides: [
    {ride_id:1001,ride_reference:'ZZ-261014-1001',rider_name:'Aarav Sharma',pickup_address:'Indore Railway Station',drop_address:'Vijay Nagar, Indore',vehicle_type:'Car',status:'completed',created_at:'2026-10-14 08:10',amount:285,payment_method:'UPI'},
    {ride_id:1002,ride_reference:'ZZ-261014-1002',rider_name:'Priya Verma',pickup_address:'Palasia, Indore',drop_address:'Rajwada, Indore',vehicle_type:'Bike',status:'in_progress',created_at:'2026-10-14 08:22',amount:95,payment_method:'Cash'},
    {ride_id:1003,ride_reference:'ZZ-261014-1003',rider_name:'Rahul Patel',pickup_address:'Bhawarkua, Indore',drop_address:'Airport Road, Indore',vehicle_type:'Car',status:'pending',created_at:'2026-10-14 08:35',amount:410,payment_method:'Cash'},
    {ride_id:1004,ride_reference:'ZZ-261013-0988',rider_name:'Neha Joshi',pickup_address:'Scheme 54, Indore',drop_address:'C21 Mall, Indore',vehicle_type:'Auto',status:'cancelled',created_at:'2026-10-13 20:45',amount:0,payment_method:'UPI'},
    {ride_id:1005,ride_reference:'ZZ-261013-0987',rider_name:'Mohit Jain',pickup_address:'MR 10, Indore',drop_address:'Super Corridor, Indore',vehicle_type:'Car',status:'completed',created_at:'2026-10-13 19:15',amount:330,payment_method:'Card'}
  ],
  riders: [
    {rider_id:201,first_name:'Aarav',last_name:'Sharma',mobile:'9876501201',email:'aarav@example.com',status:'active',created_at:'2026-08-01'},
    {rider_id:202,first_name:'Priya',last_name:'Verma',mobile:'9876501202',email:'priya@example.com',status:'active',created_at:'2026-08-12'},
    {rider_id:203,first_name:'Rahul',last_name:'Patel',mobile:'9876501203',email:'rahul@example.com',status:'inactive',created_at:'2026-09-03'},
    {rider_id:204,first_name:'Neha',last_name:'Joshi',mobile:'9876501204',email:'neha@example.com',status:'active',created_at:'2026-09-21'},
    {rider_id:205,first_name:'Mohit',last_name:'Jain',mobile:'9876501205',email:'mohit@example.com',status:'active',created_at:'2026-10-02'}
  ],
  drivers: [
    {driver_id:301,first_name:'Vikram',last_name:'Singh',mobile:'9876510301',vehicle_type:'Car',verification_status:'verified',status:'active'},
    {driver_id:302,first_name:'Sanjay',last_name:'Yadav',mobile:'9876510302',vehicle_type:'Bike',verification_status:'pending',status:'active'},
    {driver_id:303,first_name:'Imran',last_name:'Khan',mobile:'9876510303',vehicle_type:'Auto',verification_status:'verified',status:'active'},
    {driver_id:304,first_name:'Deepak',last_name:'Rathore',mobile:'9876510304',vehicle_type:'Car',verification_status:'rejected',status:'inactive'},
    {driver_id:305,first_name:'Karan',last_name:'Mehta',mobile:'9876510305',vehicle_type:'Car',verification_status:'verified',status:'active'}
  ],
  payments: [
    {payment_id:501,ride_id:1001,rider_name:'Aarav Sharma',amount:285,payment_method:'UPI',payment_status:'paid',created_at:'2026-10-14 08:18'},
    {payment_id:502,ride_id:1002,rider_name:'Priya Verma',amount:95,payment_method:'Cash',payment_status:'processing',created_at:'2026-10-14 08:30'},
    {payment_id:503,ride_id:1003,rider_name:'Rahul Patel',amount:410,payment_method:'Cash',payment_status:'pending',created_at:'2026-10-14 08:35'},
    {payment_id:504,ride_id:1005,rider_name:'Mohit Jain',amount:330,payment_method:'Card',payment_status:'paid',created_at:'2026-10-13 19:25'}
  ],
  vehicles: [
    {vehicle_id:701,driver_name:'Vikram Singh',registration_no:'MP09 AB 1234',vehicle_type:'Car',model:'Maruti Swift',status:'active'},
    {vehicle_id:702,driver_name:'Sanjay Yadav',registration_no:'MP09 CD 2345',vehicle_type:'Bike',model:'Honda Shine',status:'active'},
    {vehicle_id:703,driver_name:'Imran Khan',registration_no:'MP09 EF 3456',vehicle_type:'Auto',model:'Bajaj RE',status:'active'},
    {vehicle_id:704,driver_name:'Deepak Rathore',registration_no:'MP09 GH 4567',vehicle_type:'Car',model:'Hyundai i20',status:'inactive'}
  ],
  complaints: [
    {ticket_id:'CMP-104',customer_name:'Priya Verma',ride_id:1002,category:'Driver behaviour',priority:'high',status:'open',created_at:'2026-10-14'},
    {ticket_id:'CMP-103',customer_name:'Rahul Patel',ride_id:1003,category:'Fare query',priority:'medium',status:'in_progress',created_at:'2026-10-13'},
    {ticket_id:'CMP-102',customer_name:'Neha Joshi',ride_id:1004,category:'Ride cancellation',priority:'low',status:'resolved',created_at:'2026-10-12'}
  ],
  coupons: [
    {coupon_id:801,code:'WELCOME50',discount:'₹50 off',usage_limit:500,used_count:132,valid_until:'2026-12-31',status:'active'},
    {coupon_id:802,code:'RIDE20',discount:'20% off',usage_limit:1000,used_count:604,valid_until:'2026-11-30',status:'active'},
    {coupon_id:803,code:'MONSOON25',discount:'25% off',usage_limit:300,used_count:300,valid_until:'2026-09-30',status:'expired'}
  ],
  reviews: [
    {review_id:901,ride_id:1001,customer_name:'Aarav Sharma',driver_name:'Vikram Singh',rating:5,comment:'On time and polite',created_at:'2026-10-14'},
    {review_id:902,ride_id:1002,customer_name:'Priya Verma',driver_name:'Sanjay Yadav',rating:3,comment:'Ride was okay',created_at:'2026-10-13'},
    {review_id:903,ride_id:1005,customer_name:'Mohit Jain',driver_name:'Karan Mehta',rating:4,comment:'Clean vehicle',created_at:'2026-10-12'}
  ],
  support: [
    {ticket_id:'SUP-220',name:'Priya Verma',subject:'Payment status check',channel:'App',priority:'medium',status:'open',created_at:'2026-10-14'},
    {ticket_id:'SUP-219',name:'Aarav Sharma',subject:'Update mobile number',channel:'Email',priority:'low',status:'resolved',created_at:'2026-10-13'},
    {ticket_id:'SUP-218',name:'Rahul Patel',subject:'Driver did not arrive',channel:'Phone',priority:'high',status:'in_progress',created_at:'2026-10-12'}
  ],
  admins: [
    {admin_id:1,name:'Primary Admin',email:'admin@zipzaver.example',role:'Super Admin',status:'active',last_login:'2026-10-14 08:00'},
    {admin_id:2,name:'Operations Team',email:'operations@zipzaver.example',role:'Operations',status:'active',last_login:'2026-10-13 18:30'},
    {admin_id:3,name:'Support Team',email:'support@zipzaver.example',role:'Support',status:'active',last_login:'2026-10-13 16:15'}
  ]
};
