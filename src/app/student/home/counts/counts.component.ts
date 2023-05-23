import { Component,Input} from '@angular/core';

@Component({
  selector: 'app-counts',
  templateUrl: './counts.component.html',
  styleUrls: ['./counts.component.css']
})
export class CountsComponent {
  @Input() studentsCount: string;
  @Input() coursesCount: string;
  @Input() trainersCount: string;

}
