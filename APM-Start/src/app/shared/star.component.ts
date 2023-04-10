import { Component, EventEmitter, Input, OnChanges, Output } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
    @Input() cropWidth: number = 0;
    @Input() rating: number = 0;
    // @Output() notify: EventEmitter<string> = new EventEmitter<string>();
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        /* The total size of the 5 stars is 75px. so each star is approximately divided by 75px. we multiply that by
        the rating number to get the cropWidth */
        // ngOnChange will fire when @Input value got from parent component initially and after as well
        this.cropWidth = this.rating * 75/5;
    }

    onClick() {
        console.log(`The rating ${this.rating} was clicked!`);
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}