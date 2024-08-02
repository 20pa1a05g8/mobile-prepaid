import { Component, OnInit } from '@angular/core';
import { RechargeService } from '../../services/recharge.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users: any[] = []; // Define the users property

  constructor(private rechargeService: RechargeService) { }

  ngOnInit(): void {
    this.loadUsersWithExpiringPlans();
  }

  loadUsersWithExpiringPlans(): void {
    this.rechargeService.getUsersWithExpiringPlans().subscribe(data => {
      this.users = data;
    });
  }

  viewHistory(userId: number): void {
    // Implement the logic to view user history
  }
}

