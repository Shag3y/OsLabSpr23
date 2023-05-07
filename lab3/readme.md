#lab 3
```sh
#!/bin/bash
q2 part 1
echo "NETWORK INFORAMTION OF MY DEVICE IS"
ip=$(ip addr show | grep -Eo '[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}' | head -1)
echo "IP address: $ip"
host=$(hostname)
echo "Hostname: $host"
mac_address=$(ip link show | grep -Po '(?<=link/ether\s)\S+')
echo "MAC address: $mac_address"
mask=$(ip addr show | grep -Eo '[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}' | head -2 | tail -1)
echo "Subnet mask: $mask"
gateway=$(ip route show default | awk '/default/ {print $3}')
echo "Default gateway: $gateway"





q2 part b
echo "enter full email "
read e
recipient="$e"
echo "enter subject"
read s
subject="$s"
echo "enter body text"
read b
body="$b"
echo "Name of the file you want to attack in the format abc.txt"
read a
attachment="$a"

# send the email with the attachment
echo "$body" | mutt -s "$subject" -a "$attachment" -- "$recipient"




q3 

read -p "Samba server-name : " server_name
read -p "Samba share-name : " share_name
read -p "Username for Samba access: " username
read -p "Password for the Samba user: " password
sudo apt-get update
sudo apt-get install samba -y
sudo useradd $username
sudo smbpasswd -a $username
# Configuration
sudo echo "[$share_name]" | sudo tee -a /etc/samba/smb.conf
sudo echo "path = /srv/$share_name" | sudo tee -a /etc/samba/smb.conf
sudo echo "valid users = $username" | sudo tee -a /etc/samba/smb.conf
sudo echo "read only = no" | sudo tee -a /etc/samba/smb.conf
sudo service smbd restart
if ps aux | grep smbd | grep -v grep; then
  echo "Samba server running"
else
  echo "Samba server is not running!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
fi
```

