assert()
{
FILE=$1
if [ -f $FILE ];
then
        echo "File $FILE exists."
else
        echo "File $FILE does NOT exists."
	exit 0;
fi
rm $FILE
}

convert baby.jpg  bout.jpg
assert bout.jpg

convert IMG_0192.CR2  out.jpg
assert out.jpg

convert cc.tif tifout.jpg
assert tifout.jpg

ffmpeg -i cb1sampleiTunes4.mov -y -acodec libfaac -ab 96k -ar 44100 -ac 1 -vcodec libx264 -vpre normal -crf 28 -threads 0 -s 704x480 outtmp.mp4
assert outtmp.mp4

qt-faststart outtmp.mp4 qtout.mp4
assert qtout.mp4

ffmpeg -ss 2 -deinterlace -i cb1sampleiTunes4.mov  -y -vframes 1 -f mjpeg ffmpegout.jpg
assert ffmpegout.jpg

convert -density 200 agenda.pdf[0]  -colorspace rgb -strip pdfout.jpg
assert pdfout.jpg

