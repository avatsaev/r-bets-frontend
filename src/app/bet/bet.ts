export class Bet {
  id:number;
  title:String;
  answer_a:String;
  answer_b:String;
  answer_a_count:number;
  answer_b_count:number;
  ended:Boolean;
  state:String;
  ends_at:String;


  constructor(data:any={}){
    this.id = data.id;
    this.title = data.title;
    this.answer_a = data.answer_a;
    this.answer_b = data.answer_b;
    this.answer_a_count = data.answer_a_count;
    this.answer_b_count = data.answer_b_count;
    this.ended = data.ended;
    this.state = data.state;
  }

  percentage(answer:String):number{

    if (this.answer_a_count + this.answer_b_count == 0) return 0;
    if(answer == 'a'){
      return (this.answer_a_count * 100 / (this.answer_a_count + this.answer_b_count));
    }else if(answer =='b'){
      return (this.answer_b_count * 100 / (this.answer_a_count + this.answer_b_count));
    }else{
      return -1;
    }
  }

  to_params(){
    return{
      'bet[title]': this.title,
      'bet[answer_a]': this.answer_a,
      'bet[answer_b]': this.answer_b,
      'bet[ends_at]': this.ends_at,
    }
  }

}
