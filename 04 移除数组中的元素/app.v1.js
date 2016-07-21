function removeWithoutCopy(arr, item) {
	for(var i = 0; i < arr.length; i++){
         if(arr[i] == item){
             //splice方法会改变数组长度，当减掉一个元素后，后面的元素都会前移，因此需要相应减少i的值
             arr.splice(i,1);
             i--;
         }
     }
     return arr;
}
