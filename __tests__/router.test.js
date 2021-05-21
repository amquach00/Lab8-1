/**
 * @jest-environment jsdom
 */

 import { pushToHistory } from '../scripts/router.js';

describe('From one state to ', () => {
    // settings branch
    test('settings is', () => {
        expect(pushToHistory('settings',1).state.page).toBe("settings");
        expect(window.history.length).toBe(2);
    });

    // entry branch
    test('entry is', () => {
        expect(pushToHistory('entry',3).state.page).toBe('entry3');
        expect(window.history.length).toBe(3);
    });

    //default branch
    test('default is', () => {
        expect(pushToHistory('Jounral-Entries',1).state.page).toBe(undefined);
        expect(window.history.length).toBe(4);
    });
  });