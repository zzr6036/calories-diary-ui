import { Component, OnInit } from "@angular/core";
import { NavController, Events } from "@ionic/angular";
import { HttpClient } from "@angular/common/http";
import { Globals } from "../global";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-foodrecord",
  templateUrl: "./foodrecord.page.html",
  styleUrls: ["./foodrecord.page.scss"]
})
export class FoodrecordPage implements OnInit {
  rootPage: any = "TablePage";
  myInput: string;
  foodRecordItems: any = [];
  mealType: string;

  constructor(
    public navCtrl: NavController,
    private http: HttpClient,
    private global: Globals,
    private activatedRoute: ActivatedRoute,
    public eventCtrl: Events
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.mealType = params.mealType;
    });
  }

  ngOnInit() {
    this.http
      .get(this.global.resourceUrl + "/api/food/foodlist")
      .subscribe((resp: any) => {
        this.foodRecordItems = resp.map(item => {
          return {
            id: item.Id,
            itemName: item.Name,
            itemQty: 0,
            itemUnit: item.Unit,
            itemCalories: item.UnitCalories
          };
        });
      });
  }

  reduceQty(i) {
    this.foodRecordItems[i].itemQty--;
  }

  addQty(i) {
    this.foodRecordItems[i].itemQty++;
  }
  back() {
    // this.navCtrl.navigateBack('/tab/tabs/(dashboard:dashboard)');
    this.navCtrl.goBack();
  }

  done() {
    console.log("abc aaa");
    const today = new Date();

    this.navCtrl.navigateBack("/tab/tabs/(dashboard:dashboard)");
    this.eventCtrl.publish("Refresh:Dashboard", "any data");
    // do not call post in a for loop, please do recursive call to ensure all post has completed.
    // when u do a post, u need to wait for server to resposnse first, from the code below
    // before the loop is done, already navigate back to dashboard.
    this.foodRecordItems.forEach(ex => {
      if (ex.itemQty > 0) {
        const q = {
          UserId: 34, // TODO:: update Hardcoded user27's id
          FoodId: ex.id,
          Quantity: ex.itemQty,
          MealType: this.mealType,
          RecordDate:
            [today.getFullYear(), today.getMonth() + 1, today.getDate()].join(
              "-"
            ) + " 00:00:00"
        };
        this.http
          .post(this.global.resourceUrl + "/api/foodrecord/create", q)
          .subscribe(
            resp => {
              // this.navCtrl.navigateBack('/tab/tabs/(dashboard:dashboard)');
              // this.eventCtrl.publish("Refresh:Dashboard",q);
            },
            error => {
              console.log(error);
              // this.navCtrl.navigateBack('/tab/tabs/(dashboard:dashboard)');
              // this.eventCtrl.publish("Refresh:Dashboard",q);
            }
          );
      }
    });
  }
}
