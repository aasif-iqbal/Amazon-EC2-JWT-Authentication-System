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


# rsync
rsync -avz --exclude 'node_modules' --exclude '.git' --exclude '.env' \
-e "ssh -i ~/.ssh/your-key.pem" \
. ubuntu@ip-address:~/app


//OR https://www.youtube.com/watch?v=ofBFl4M4BFk
https://www.youtube.com/watch?v=ofBFl4M4BFk&t=462s
