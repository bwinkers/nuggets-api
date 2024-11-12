# Linux firewall with UFW


## Initial settings

```sh
# install
sudo apt install ufw
# Add allowed services
sudo ufw allow ssh
sudo ufw allow http
sudo ufw allow https
# Review your work 
sudo ufw show added
# Check the current status (`Disabled` on a nbew system)
sudo ufw status
# Enable the rules
sudo ufw enable
```


```sh   
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
```