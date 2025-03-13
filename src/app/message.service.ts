import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  public messages: string[] = [];

  constructor() {}
}
