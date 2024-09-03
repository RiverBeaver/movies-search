import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SearchByLineComponent } from '../../../features/search/components/search-by-line/search-by-line.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearchByLineComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
