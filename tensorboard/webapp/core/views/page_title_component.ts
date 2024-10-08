/* Copyright 2020 The TensorFlow Authors. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
==============================================================================*/
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

function setDocumentTitle(title: string) {
  document.title = title;
}

const utils = {
  setDocumentTitle,
};

@Component({
  standalone: false,
  selector: 'page-title-component',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageTitleComponent implements OnChanges {
  @Input()
  title!: string;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['title']) {
      utils.setDocumentTitle(changes['title'].currentValue);
    }
  }
}

export const TEST_ONLY = {
  utils,
};
