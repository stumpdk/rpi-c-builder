#Raspberry Pi image
FROM resin/rpi-raspbian

RUN apt-get update -y && apt-get -y install build-essential
RUN apt-get install nano -y

RUN apt-get install git -y && git clone https://github.com/WiringPi/WiringPi.git && cd WiringPi && ./build

RUN apt-get install -y wget
RUN wget http://node-arm.herokuapp.com/node_latest_armhf.deb && dpkg -i node_latest_armhf.deb
RUN cd /data/rpi-climate-monitor-measurer && npm install gulp

ENTRYPOINT ["/bin/bash"]

VOLUME /data

# enable http
EXPOSE 80