import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Globals } from '../global';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.page.html',
  styleUrls: ['./exercise.page.scss'],
})
export class ExercisePage implements OnInit {

  rootPage: any = 'TablePage'
  myInput: string;
  exerciseItems: any = [];

  constructor(
    public navCtrl: NavController,
    private http: HttpClient,
    private global: Globals,
    private storage: Storage
  ) { }

  ngOnInit() {
    this.http.get(this.global.resourceUrl + '/api/exercise/exerciselist').subscribe((resp: any) => {
      this.exerciseItems = resp.map(item => {
        return {
          id: item.Id,
          itemName: item.Name,
          itemDuration: 0,
          itemUnit: item.Unit,
          itemCalories: item.UnitCaloriesBurnt
        }
      });
    })
  }

  reduceQty(i){
    this.exerciseItems[i].itemDuration -= 10;
    console.log(this.exerciseItems)
  }

  addQty(i){
    this.exerciseItems[i].itemDuration += 10;
  }

  back(){
    this.navCtrl.navigateBack('/tab/tabs/(dashboard:dashboard)');
  }

  done() {
    const today = new Date();

    this.exerciseItems.forEach(ex => {
      if(ex.itemDuration > 0) {
        console.log(ex);

        const q = {
          UserId: 34, // TODO:: update Hardcoded user27's id
          ExerciseId: ex.id,
          Amount: ex.itemDuration,
          RecordDate: [today.getFullYear(), today.getMonth() + 1, today.getDate()].join('-') + ' 00:00:00'
        }
        this.http.post(this.global.resourceUrl + '/api/exerciserecord/create', q).subscribe(resp => {
          this.navCtrl.navigateBack('/tab/tabs/(dashboard:dashboard)');
        })
      }
    })
  }
}
