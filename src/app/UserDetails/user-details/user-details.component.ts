import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  public userid: any;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap): void => {
      let id = (param.get('id'));
      this.userid = id;
    });
  }

  goPrevious(): void{
    let previousId = this.userid - 1;
    this.router.navigate(['/displayUser', previousId]);
  }

  goNext(): void{
    let nextId = this.userid++;
    this.router.navigate(['/displayUser', nextId]);
  }

}
