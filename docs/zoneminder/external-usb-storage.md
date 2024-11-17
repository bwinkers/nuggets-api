# Storing ZoneMinder data on an external USB drive


## Find the ZoneMinder events and images folders on your filesystem

```sh
/var/cache/zoneminder
```

## Determine the name of the web account user

```www-data```

## Determine the device name and uuid of the volume

```sh
ls -l /dev/disk/by-uuid
```

### ID

```sh
/dev/sdd
```

### UUID 

```sh
20e01bbe-9b79-4763-ad29-fa4b688a2388
```

## Create system mount point

This mount point will be used to attach the drive to your system.

### Create a mount directory matching the drive name

```sh
sudo mkdir /mnt/sdd
```

### Create a systemd mount point file matching the name

```sh
sudo vi /etc/systemd/system/mnt-sdd.mount
```

```
/etc/systemd/system/mnt-sdd.mount
```

```
[Unit]
Description=systemd mount unit for ZoneMinder event storage
Before=zoneminder
  
[Mount]
What=/dev/disk/by-uuid/20e01bbe-9b79-4763-ad29-fa4b688a2388
Where=/mnt/sdd
Type=ext4
Options=defaults,noatime,commit=120,data=writeback
  
[Install]
WantedBy=multi-user.target
```

### Enable and start unit

```sh
sudo systemctl enable mnt-sdd.mount
sudo systemctl start mnt-sdd.mount
```

### Set permissions

```sh
sudo su
```

then...

```sh
mkdir -p /mnt/sdd/zoneminder/events
mkdir -p /mnt/sdd/zoneminder/images
chown -R www-data:www-data /mnt/sdd/zoneminder
exit
```

## Create two system bind mount units

first `events`...

```sh
sudo vi /etc/systemd/system/var-lib-zoneminder-events.mount
```

```sh
[Unit]
Description=systemd bind mount unit for ZoneMinder event storage
After=mnt-sdd.mount
Requires=mnt-sdd.mount
 
[Mount]
What=/mnt/sdd/zoneminder/events
Where=/var/lib/zoneminder/events
Type=none
Options=bind
 
[Install]
WantedBy=local-fs.target
```

## Enable and start units

```sh
sudo systemctl enable  var-lib-zoneminder-events.mount
sudo systemctl start  var-lib-zoneminder-events.mount
```

then images...

```sh
sudo vi /etc/systemd/system/var-lib-zoneminder-images.mount
```

```sh
[Unit]
Description=systemd bind mount unit for ZoneMinder image storage
After=mnt-sdd.mount
Requires=mnt-sdd.mount
 
[Mount]
What=/mnt/sdd/zoneminder/images
Where=/var/lib/zoneminder/images
Type=none
Options=bind
 
[Install]
WantedBy=local-fs.target
```

## Enable and start units

```sh
sudo systemctl enable  var-lib-zoneminder-images.mount
sudo systemctl start  var-lib-zoneminder-images.mount
```