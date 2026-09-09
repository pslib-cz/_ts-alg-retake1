import { describe, it, expect } from 'vitest';
import { sumPoints, findBestScore, countPassed, computeAverage, type Student } from './index';

const normal: Student[] = [
  { name: 'Anna', points: 82, passed: true },
  { name: 'Tom', points: 55, passed: false },
  { name: 'Eva', points: 91, passed: true },
  { name: 'Pavel', points: 40, passed: false },
];

const empty: Student[] = [];

const single: Student[] = [{ name: 'Kuba', points: 70, passed: true }];

const negative: Student[] = [
  { name: 'Mia', points: -10, passed: false },
  { name: 'Jan', points: -30, passed: false },
  { name: 'Lucie', points: -5, passed: false },
];

const duplicates: Student[] = [
  { name: 'A', points: 60, passed: true },
  { name: 'B', points: 60, passed: true },
  { name: 'C', points: 60, passed: true },
];

describe('sumPoints', () => {
  it('existuje a je funkce', () => {
    expect(typeof sumPoints).toBe('function');
  });

  it('sečte body u běžného pole', () => {
    expect(sumPoints(normal)).toBe(268);
  });

  it('vrátí 0 pro prázdné pole', () => {
    expect(sumPoints(empty)).toBe(0);
  });

  it('vrátí body jediného studenta', () => {
    expect(sumPoints(single)).toBe(70);
  });

  it('funguje se zápornými hodnotami', () => {
    expect(sumPoints(negative)).toBe(-45);
  });

  it('funguje s opakujícími se hodnotami', () => {
    expect(sumPoints(duplicates)).toBe(180);
  });
});

describe('findBestScore', () => {
  it('existuje a je funkce', () => {
    expect(typeof findBestScore).toBe('function');
  });

  it('najde nejvyšší skóre v běžném poli', () => {
    expect(findBestScore(normal)).toBe(91);
  });

  it('vrátí 0 pro prázdné pole', () => {
    expect(findBestScore(empty)).toBe(0);
  });

  it('vrátí skóre jediného studenta', () => {
    expect(findBestScore(single)).toBe(70);
  });

  it('funguje se zápornými hodnotami (nejvyšší je nejblíž nule)', () => {
    expect(findBestScore(negative)).toBe(-5);
  });

  it('funguje s opakujícím se nejvyšším skóre', () => {
    expect(findBestScore(duplicates)).toBe(60);
  });
});

describe('countPassed', () => {
  it('existuje a je funkce', () => {
    expect(typeof countPassed).toBe('function');
  });

  it('spočítá úspěšné studenty v běžném poli', () => {
    expect(countPassed(normal)).toBe(2);
  });

  it('vrátí 0 pro prázdné pole', () => {
    expect(countPassed(empty)).toBe(0);
  });

  it('spočítá jediného úspěšného studenta', () => {
    expect(countPassed(single)).toBe(1);
  });

  it('vrátí 0, když nikdo neuspěl', () => {
    expect(countPassed(negative)).toBe(0);
  });

  it('spočítá všechny, když všichni uspěli', () => {
    expect(countPassed(duplicates)).toBe(3);
  });
});

describe('computeAverage', () => {
  it('existuje a je funkce', () => {
    expect(typeof computeAverage).toBe('function');
  });

  it('spočítá průměr běžného pole', () => {
    expect(computeAverage(normal)).toBe(67);
  });

  it('vrátí 0 pro prázdné pole (žádné NaN)', () => {
    expect(computeAverage(empty)).toBe(0);
  });

  it('vrátí body jediného studenta jako průměr', () => {
    expect(computeAverage(single)).toBe(70);
  });

  it('funguje se zápornými hodnotami', () => {
    expect(computeAverage(negative)).toBe(-15);
  });

  it('funguje s opakujícími se hodnotami', () => {
    expect(computeAverage(duplicates)).toBe(60);
  });
});
