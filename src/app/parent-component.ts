import {
    AfterContentInit,
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    DoCheck,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges
} from '@angular/core';


@Component({
    selector: 'app-parent',
    template: `
        <h1>Parent: {{name}}</h1>
        <h3>Title: {{title}}</h3>
        <app-child [name]="title"></app-child>
    `
})
export class ParentComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterViewInit {
    @Input() name = 'angular parent';
    title = 'hello child';

    constructor(public cdr: ChangeDetectorRef) {
    }

    ngOnInit(): void {
        console.log('parent-----OnInit');
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('parent-----OnChanges');
    }

    ngDoCheck(): void {
        console.log('parent-----DoCheck');
    }

    ngAfterContentInit(): void {
        console.log('parent-----AfterContentInit');
    }

    ngAfterViewInit(): void {
        console.log('parent-----AfterViewInit');
    }
}


@Component({
    selector: 'app-child',
    template: `
        <h1>Child: {{name}}</h1>
        <h5>Title: {{name + ' 555'}}</h5>
        <p>Today: {{getDate() | date}}</p>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterViewInit {
    @Input() name = '';

    constructor(private parentComponent: ParentComponent,
                public cdr: ChangeDetectorRef) {
    }

    ngOnInit(): void {
        // this.parentComponent.title = 'angular next!';
        console.log('child-----OnInit');
    }

    ngOnChanges(changes: SimpleChanges): void {
        // this.parentComponent.title = 'angular next!';
        console.log('child-----OnChanges');
    }

    ngDoCheck(): void {
        // this.parentComponent.title = 'angular next!';
        console.log('child-----DoCheck');
    }

    ngAfterContentInit(): void {
        // this.parentComponent.title = 'angular next!';
        console.log('child-----AfterContentInit');
    }

    ngAfterViewInit(): void {
        // this.parentComponent.title = 'angular next!';
        console.log('child-----AfterViewInit');
    }

    getDate() {
        return new Date();
    }
}
