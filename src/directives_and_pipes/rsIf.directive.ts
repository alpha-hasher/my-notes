import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({selector: '[rsIf]'})
export class RsIfDirective {

  // make sure the setter function name is same as your directive selector
  @Input()
  set rsIf (condition: boolean) {
    if (condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    }
  }

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef){

  }


}

//Custom if directive
