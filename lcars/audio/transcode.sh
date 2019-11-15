#!/bin/sh
if [ $# -eq 0 ] ; then
    echo '  USAGE:      $0 sourceaudiofile.wav'
    echo '  bonus tip:  for audf in *.wav *.mp3 ; do ./transcode.sh $audf ; done'
    exit 0
fi

FNAMEBASE=$(echo $1 | cut -f 1 -d '.')

if (which avconv) ; then
	avconv -i $1 -c:a libvorbis $FNAMEBASE.webm
	avconv -i $1 -loglevel verbose -strict experimental -c:a aac -ab 64k $FNAMEBASE.m4a
	avconv -i $1 -c:a libvorbis $FNAMEBASE.ogg
elif (which ffmpeg) ; then
	ffmpeg -i $1 -c:a libvorbis $FNAMEBASE.webm
	ffmpeg -i $1 -c:a aac $FNAMEBASE.m4a
	ffmpeg -i $1 -c:a libvorbis $FNAMEBASE.ogg
else
	echo "could not find supported transcoding program like ffmpeg, sorry."
	exit 1
fi
