import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';

export interface ElementData {
  id: string;
  type: string;
  properties: any;
}

export interface ColumnData {
  id: string;
  element: ElementData | null;
}

export interface RowData {
  id: string;
  columns: ColumnData[];
}

export interface SectionProperties {
  backgroundColor?: string;
  paddingTop?: number;
  paddingRight?: number;
  paddingBottom?: number;
  paddingLeft?: number;
}

export interface SectionData {
  id: string;
  rows: RowData[];
  properties?: SectionProperties;
}

export type ViewMode = 'desktop' | 'mobile';

export interface WebsiteSchema {
  sections: SectionData[];
  activeSectionId: string,
  activeRowId: string,
  activeColumnId: string,
  previewMode: boolean,
  viewMode: ViewMode
}

export const usePageBuilderStore = defineStore('pageBuilder', {
  state: (): WebsiteSchema => ({
    sections: [
      {
        id: `section-${uuidv4()}`,
        rows: [],
        properties: {
          backgroundColor: '#ffffff',
          paddingTop: 32,
          paddingRight: 0,
          paddingBottom: 32,
          paddingLeft: 0
        }
      },
    ],
    activeSectionId: '' as string,
    activeRowId: '' as string,
    activeColumnId: '' as string,
    previewMode: false,
    viewMode: 'desktop'
  }),
  actions: {
    moveRow(sectionId: string, rowId: string, offset: number) {
      const section = this.sections.find(s => s.id === sectionId);
      if (!section) return;
      const row = section.rows.find(r => r.id === rowId);
      if (!row) return;
      const newIndex = section.rows.indexOf(row) + offset;
      if (newIndex < 0 || newIndex >= section.rows.length) return;
      const [removed] = section.rows.splice(section.rows.indexOf(row), 1);
      section.rows.splice(newIndex, 0, removed);
    },
    moveSection(sIdx: number, offset: number) {
      const newIndex = sIdx + offset;
      if (newIndex < 0 || newIndex >= this.sections.length) return;
      const sections = this.sections;
      const [removed] = sections.splice(sIdx, 1);
      sections.splice(newIndex, 0, removed);
    },
    setActiveSectionId(id: string) { this.activeSectionId = id },
    setActiveRowId(id: string) { this.activeRowId = id },
    setActiveColumnId(id: string) { this.activeColumnId = id },

    addSection() {
      // const newSection = { id: `section-${uuidv4()}`, rows: [] }
      // this.sections = [...this.sections, newSection]
      this.sections.push({ id: `section-${uuidv4()}`, rows: [] });
      // this.sections = [...this.sections];
    },
    insertNewSection(sIdx: number) {
      this.sections.splice(sIdx + 1, 0, { id: `section-${uuidv4()}`, rows: [] });
      // this.sections = [...this.sections];
    },
    addRow(sectionId: string, columnsCount: number) {
      const section = this.sections.find(s => s.id === sectionId);
      if (section) {
        const row: RowData = {
          id: `row-${uuidv4()}`,
          columns: Array.from({ length: columnsCount }, (_, i) => ({
            id: `col-${uuidv4()}-${i}`,
            element: null,
          })),
        };
        section.rows.push(row);
      }
    },
    addElement(sectionId: string, rowId: string, columnId: string, element: ElementData) {
      const section = this.sections.find(s => s.id === sectionId);
      if (!section) return;
      const row = section.rows.find(r => r.id === rowId);
      if (!row) return;
      const column = row.columns.find(c => c.id === columnId);
      if (!column) return;
      column.element = element;
      // column.push(element);
    },
    togglePreviewMode() {
      this.previewMode = !this.previewMode;
    },
    setViewMode(mode: ViewMode) {
      this.viewMode = mode;
    },
  },
});
