export class AuthInfo{
  constructor(public $uid: string){
    console.log("AuthInfo(): uid: " + $uid);
  }

  isLoggedIn(){
    return !!this.$uid;
  }
}
