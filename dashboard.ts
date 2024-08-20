import * as ko from 'knockout';
import 'ojs/ojconverterutils-i18n';
import ArrayDataProvider = require('ojs/ojarraydataprovider');
import 'ojs/ojvalidation-base';
import 'ojs/ojdatetimepicker';
import { ojMessage } from 'ojs/ojmessage';
import 'ojs/ojmessages';
import 'ojs/ojknockout';
import 'ojs/ojselectsingle';
import { ojButton } from 'ojs/ojbutton';
import 'oj-c/input-password';
import 'ojs/ojtimezonedata';
import 'ojs/ojknockout';
import 'ojs/ojbutton';
import 'ojs/ojinputtext';
import 'ojs/ojlabelvalue';
import 'oj-c/radioset';
import Message = require("ojs/ojmessaging");
import 'oj-c/input-password';
import 'oj-c/form-layout';
import 'ojs/ojradioset';
import 'ojs/ojcheckboxset';
import 'ojs/ojselectcombobox';
import 'ojs/ojselectsingle';
import 'ojs/ojformlayout';
import 'ojs/ojknockout';
import 'oj-c/input-text';
import 'oj-c/checkboxset';
import 'oj-c/form-layout';
import "oj-c/input-date-text";
import 'ojs/ojradioset';
import 'ojs/ojcheckboxset';
import "oj-c/progress-bar";


type RadiosetDataItem = {
  value: string;
  label: string;
  assistiveText?: string;
  helpSourceLink?: string;
  helpSourceText?: string;
};
const laptops: Array<RadiosetDataItem> = [
  {
    value: 'desktop',
    label: 'Desktop',
    assistiveText: 'Desktop',
    helpSourceLink: 'https://en.wikipedia.org/wiki/Desktop',
    helpSourceText: 'More info'
  },
  {
    value: 'laptop',
    label: 'Laptop',
    assistiveText: 'Laptop',
    helpSourceLink: 'https://en.wikipedia.org/wiki/Laptop',
    helpSourceText: 'More...'
  },
  {
    value: 'tablet',
    label: 'Tablet',
    assistiveText: 'Tablet',
    helpSourceLink: 'https://en.wikipedia.org/wiki/Tablet'
  }
];

class DashboardViewModel {
  username : ko.Observable<string> | ko.Observable<string>;
  error: Message[];
  warning: Message[];
  info: Message[];
  confirmation: Message[];
  password: ko.Observable<string>;
  value: ko.Observable<string>;
  private readonly step = ko.observable(0);
  messages: ojMessage.Message[];
  messagesDataprovider: ArrayDataProvider<null, ojMessage.Message>;
  readonly selectVal = ko.observable('CH');

  readonly progressValue = ko.pureComputed(() => {
    return Math.min(this.step(), 100);
  });

  private readonly browsers = [
    { value: 'IE', label: 'Internet Explorer' },
    { value: 'FF', label: 'Firefox' },
    { value: 'CH', label: 'Chrome' },
    { value: 'OP', label: 'Opera' },
    { value: 'SA', label: 'Safari' }
  ];

  readonly browsersDP = new ArrayDataProvider(this.browsers, {
    keyAttributes: 'value'
  });
  
  constructor() {
    this.error = [{ summary: "summary", detail: "detail", severity: "error" }];
      this.warning = [
        { summary: "summary", detail: "detail", severity: "warning" },
      ];
      this.info = [{ summary: "summary", detail: "detail", severity: "info" }];
      this.confirmation = [
        { summary: "summary", detail: "detail", severity: "confirmation" },
      ];
    this.password = ko.observable("");
    this.username = ko.observable("");
    this.value = ko.observable('2023-04-27');

    window.setInterval(() => {
      this.step((this.step() + 0.5) % 200);
    }, 160);

       const isoTimeNow = new Date().toISOString();
      
      this.messages = [
        {
          severity: 'error',
          summary: 'Error message summary',
          detail: 'Error message detail',
          timestamp: isoTimeNow
        }
      ];

      this.messagesDataprovider = new ArrayDataProvider([]);
      
  }

  public buttonAction = (event: ojButton.ojAction) => {
    this.messagesDataprovider = new ArrayDataProvider(this.messages);
    return true;
  };
}
export = DashboardViewModel;

