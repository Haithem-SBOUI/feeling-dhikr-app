import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonCard, IonCardContent, IonIcon, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { happyOutline, sadOutline } from 'ionicons/icons';
import { Feeling } from '../../models/feeling.model';
import feelingsData from '../../../assets/data/feelings.json';

@Component({
  selector: 'app-feelings-list',
  imports: [CommonModule, IonCard, IonCardContent, IonIcon, IonGrid, IonRow, IonCol],
  templateUrl: './feelings-list.component.html',
  styleUrl: './feelings-list.component.css',
  standalone: true
})
export class FeelingsListComponent implements OnInit {
  feelings: Feeling[] = [];

  constructor() {
    // Register Ionic icons
    addIcons({ happyOutline, sadOutline });
  }

  ngOnInit() {
    // Load feelings data from JSON file
    this.feelings = feelingsData as Feeling[];
  }

  onFeelingSelect(feeling: Feeling) {
    console.log('Selected feeling:', feeling);
    // TODO: Navigate to dhikr list for this feeling
  }
}
