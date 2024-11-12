# Linux firewall with UFW


## Initial settings
sudo apt install ufw
sudo ufw allow ssh
sudo ufw allow http
sudo ufw allow https

sudo ufw show added

sudo ufw status

sudo ufw enable



customer@debian:~/nuggets-api$ sudo ufw status
Status: active

To                         Action      From
--                         ------      ----
22/tcp                     ALLOW       Anywhere                  
80/tcp                     ALLOW       Anywhere                  
443                        ALLOW       Anywhere                  
22/tcp (v6)                ALLOW       Anywhere (v6)             
80/tcp (v6)                ALLOW       Anywhere (v6)             
443 (v6)                   ALLOW       Anywhere (v6)  