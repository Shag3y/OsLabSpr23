Q#1)
echo "$1"
if [[ $1 < $2 && $1 < $3 ]];
then
echo "$1 is the smallest number"
fi
if [[ $2 < $1 && $2 < $3 ]];
then
echo "$2 is the smallest number"
fi
if [[ $3 < $2 && $3 < $1 ]];
then
echo "$3 is the smallest number"
fi

Q#2)
for i in {1..5}; do
name="test0$i"
mkdir $name
cd $name
mkdir 01
cd 01
touch test.txt
date > test.txt
cd..
mkdir 02
cd 02
touch test.txt
date > test.txt
cd..
cd..
done


Q#3)
for i in {0..5} ; do
	name="test0$i"
	cd $name
	cd 01
	cat test.txt >> ../../merged.txt
	cd ..
	cd 02
	cat test.txt >> ../../merged.txt
	cd ../..
	done

Q#4)
touch filenames.txt
tree >> filenames.txt


Q#5)
for i in {0..5} ; do
	name="test0$i" 
	cd $name
	cd 01
	rm *.txt
	cd ..
	cd 02
	rm *.txt
	cd ../..
	done

Q#6)
echo "Enter the value of n"
read n
a=0
b=1
count=2
echo "Fibonacci series:"
echo $a
echo $b
while [ $count -le $n ]
do
fib=`expr $a + $b`
a=$b
b=$fib
echo $fib
count=`expr $count + 1`
done
