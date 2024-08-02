import { Component, OnInit } from '@angular/core';
import { RechargeService } from '../../services/recharge.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  mobile: any;
  selectedPlan: any;
  plans: any[] = [];

  constructor(private rechargeService: RechargeService) { }

  ngOnInit(): void { }

  onSubmit(): void {
    this.rechargeService.validateMobile(this.mobile).subscribe(isValid => {
      if (isValid) {
        this.loadPlans();
      } else {
        alert('Invalid Mobile Number');
      }
    });
  }

  loadPlans(): void {
    this.rechargeService.getRechargePlans().subscribe(data => {
      this.plans = data;
    });
  }

  recharge(): void {
    const rechargeData = {
      mobile: this.mobile,
      planId: this.selectedPlan
    };
    this.rechargeService.recharge(rechargeData).subscribe(response => {
      alert('Recharge successful!');
    });
  }
} 

