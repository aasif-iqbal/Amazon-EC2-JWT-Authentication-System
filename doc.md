1. create aws account 
    - Login with IAM user 
2. ec2 
3. Launch instance


--------------------------------------------
How to create key-pair:
1. Key-pair name : Aasif-mac-air
2. Key-pair type : RSA
3. Private key file format : .pem

Aasif-mac-air.pem -> download to your pc
--------------------------------------------

--------------------------------------------
NetWork settings
 - create security group
    - Allow SSH traffic from - Anyware[*] | custom | My IP |
    - Allow HTTPS traffic from the internet
    - Allow HTTP traffic from the internet
--------------------------------------------

--------------------------------------------
Configure Storage
1x8 GB gp3
--------------------------------------------

---------- Launch Instance -----------------


Step 2: create static ip address.
Why we need static ip-address?
If we restart this machine (instance) then it ip-address change every time.

Left-sidebar > NetWork & settings - Elastic ip 
 - Allocate Elastic IP address - 
 Elastic IP address: 3.111.241.191
 - Instance
 - select your app -

 Click to [associate]btn
------------------------------------------------------------------------------

Then Click to [Connect]btn
------ OR ------
Connect to instance (SSH)

ssh -i "Aasif-mac-air.pem" ubuntu@ec2-3-7-46-90.ap-south-1.compute.amazonaws.com

goto download folder using terminal

chmod 400 "Aasif-mac-air.pem"
ssh -i "Aasif-mac-air.pem" ubuntu@ec2-3-111-241-191.ap-south-1.compute.amazonaws.com
connected....

### Deploying Full Stack Apps to AWS EC2 with SQL Databases
sudo apt update
sudo apt upgrade

# installs nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

sudo apt install npm
npm -v

sudo apt install nodejs
node -v

clone project
- git clone https://github.com/aasif-iqbal/Amazon-EC2-JWT-Authentication-System.git
- cd Amazon-EC2-JWT-Authentication-System
- npm install

cd..
sudo npm i -g pm2
cd Amazon-EC2-JWT-Authentication-System
pm2 start src/app.js
pm2 logs

-- our mongodb is not connected ---
export MONGODB_CONNECTION_URL=url_strings

pm2 stop all
pm2 logs

Server is running on PORT::3000

Now we have to create 

GO security (in same instance)
To create an inbound rule
How to create inbound rule for your port number
https://docs.aws.amazon.com/finspace/latest/userguide/step5-config-inbound-rule.html#:~:text=Open%20the%20Amazon%20EC2%20console,tab%2C%20choose%20Edit%20inbound%20rules.

Edit inbound rule
- add custom tcp - tcp - 3000  0.0.0.0/0 (Anywere IPv4)
- add custom tcp - tcp - 3000  ::/0 (Anywere IPv4)
- save

Setup Firewall
---
--

Install nginx and config
sudo apt install nginx
cd ..
cd ..
cd ..

sudo nano /etc/nginx/sites-available/default

using nginx as a proxy server - that means - request first comes to nginx then it redirect to our nodejs server.

``````js
server {
    listen 80;

    server_name your-domain.com; # Replace with your domain or public IP

    location / {
        proxy_pass http://localhost:3000; # Replace with the backend server's address
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
``````

https://gist.github.com/piyushgarg-dev/8b14c87c8ff4d626ecbc747b6b9fc57f
 
//OR https://www.youtube.com/watch?v=ofBFl4M4BFk
https://www.youtube.com/watch?v=ofBFl4M4BFk&t=462s
