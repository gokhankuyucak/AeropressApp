export class Recipe {
    name: string;
    imgUrl: string;
    duration: string;
    steps: Step[];


}
export class Step {
    id: string;
    stepName: string;
    hasTimer: string;
    description: string;
    duration: string;
    name: string;
}