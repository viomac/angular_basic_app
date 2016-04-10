import {Component} from 'angular2/core'
import {SummaryPipe} from './summary.pipe'

@Component ({
    selector: 'pipes',
    template: `
    <h2>Pipes</h2>
    {{ course.title | uppercase | lowercase}}
    <br/>
    {{ course.students | number }}
    <br/>
    {{ course.rating | number:'2.2-2' }}
    <br/>
    {{ course.price | currency:'AUD':true:'2.2-2' }}
    <br/>
    {{ course.releaseDate | date:'MMMM yyyy' }}
    <br/>
    {{ course | json }}

    <h2>Custom Pipes</h2>
    {{ post.title }}
    <br/>
    {{ post.body | summary:10 }}
    `,
    pipes: [SummaryPipe]
})

export class PipesComponent {
    course = {
        title: "Angular 2 for Beginners",
        rating: 4.9745,
        students: 5981,
        price: 99.95,
        releaseDate: new Date(2016, 3, 1)
    }

    post = {
        title: "Angular Tutorial for Beginners",
        body:`
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie pretium massa, at pharetra nibh blandit nec. Nunc orci arcu, pulvinar ut velit et, molestie congue erat.
        `
    }
}