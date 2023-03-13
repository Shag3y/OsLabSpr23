#include<stdio.h>
#include<sys/types.h>
#include<unistd.h>
#include<stdlib.h>
#include<sys/wait.h>
#include<errno.h>
#include<time.h>
int main(int argc,char const *argv[]){
pid_t p,rp;
rp=getpid();
p=fork();
while(p!=0){
if(p<0){
printf("no child created %d\n",errno);
wait(NULL);
exit(1);
}
printf("parent %d and have %d children\n",rp,p);
p=fork();
}
if(p==0){
p=getpid();
for(int i=0; i<60 ; ++i){
printf("im child %d \n",p);
sleep(0.5);
exit(1);}
}
return 0;
}

