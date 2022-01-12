import { Linter } from "eslint";

export const SORT_CLASS_MEMBER_CONFIG: Linter.RuleEntry = [
  2,
  {
    order: [
      "[static-properties]",
      "[static-methods]",
      "[properties]",
      "[getters]",
      "[setters]",
      "[conventional-private-properties]",
      "constructor",
      "ngOnChanges",
      "ngOnInit",
      "ngDoCheck",
      "ngAfterContentInit",
      "ngAfterContentChecked",
      "ngAfterViewInit",
      "ngAfterViewChecked",
      "ngOnDestroy",
      "[async-methods]",
      "[methods]",
      "[conventional-private-methods]"
    ],
    accessorPairPositioning: "getThenSet"
  }
];
