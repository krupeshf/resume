#by default make file will just generate the styles
#lessc - to compile from less to css
#-s to silent mode
#--clean-css is for minifiying css file
all:
	@lessc -s --clean-css styles/styles.less styles/styles.css

#when you do watch, we can use fswatch(from brew) to do a file system watch
#-d is for directory
#-I is for inclusion of regular expression files
watch:
	make
	fswatch -d styles -I *.less | (while read; do make; done)
