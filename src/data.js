export const API_KEY='AIzaSyC1HlU8PcVH7MD8oJk1rBrs5wrd_gW7eog';

export const value_converter=(value)=>{
    if(value>=1000000){
        return Math.floor(value/1000000)+'M';
    }
    else if(value>=1000){
        return Math.floor(value/1000)+'k';
    }
    else{
        return value;
    }
}