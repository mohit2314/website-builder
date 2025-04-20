import { defineStore } from 'pinia';

export interface ElementData {
  id: string;
  type: string;
  content: any;
}

export interface ColumnData {
  id: string;
  element: ElementData | null;
}

export interface RowData {
  id: string;
  columns: ColumnData[];
}

export interface SectionData {
  id: string;
  rows: RowData[];
}

export interface WebsiteSchema {
  sections: SectionData[];
}

export const usePageBuilderStore = defineStore('pageBuilder', {
  state: (): WebsiteSchema => ({
    sections: [
      { id: `section-${Date.now()}`, rows: [] },
    ],
  }),
  actions: {
    addSection() {
      this.sections.push({ id: `section-${Date.now()}`, rows: [] });
    },
    addRow(sectionId: string, columnsCount: number) {
      const section = this.sections.find(s => s.id === sectionId);
      if (section) {
        const row: RowData = {
          id: `row-${Date.now()}`,
          columns: Array.from({ length: columnsCount }, (_, i) => ({
            id: `column-${Date.now()}-${i}`,
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
    },
  },
});
