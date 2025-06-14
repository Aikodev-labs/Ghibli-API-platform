import HighlighterComponent from "./HighlighterComponent";

export default {
  title: "Components/HighlighterComponent",
  component: HighlighterComponent,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark", value: "#1c1c1c" },
        { name: "light", value: "#ffffff" },
      ],
    },
  },
};

export const HighlighterJavascript = {
  parameters: {
    layout: "left",
  },
  args: {
    language: "javascript",
    code: `function sayHello() {
              console.log("Hello World!");        
          }`,
    wrapLines: true,
  },
};

export const HighlighterJSON = {
  parameters: {
    layout: "left",
  },
  args: {
    language: "json",
    code: `
        {
            "name": "Juan",
            "lastName": "Perez",
            "age": 25
        }`,
    wrapLines: true,
  },
};

export const HighlighterWithMaximize = {
  parameters: {
    layout: "left",
  },
  args: {
    language: "javascript",
    code: `// Ejemplo de código largo que necesita scroll
function complexFunction() {
  const data = [
    { id: 1, name: "Item 1", description: "This is a long description for item 1" },
    { id: 2, name: "Item 2", description: "This is a long description for item 2" },
    { id: 3, name: "Item 3", description: "This is a long description for item 3" },
    { id: 4, name: "Item 4", description: "This is a long description for item 4" },
    { id: 5, name: "Item 5", description: "This is a long description for item 5" },
  ];

  const processedData = data.map(item => {
    return {
      ...item,
      slug: item.name.toLowerCase().replace(/\\s+/g, '-'),
      timestamp: new Date().toISOString(),
      metadata: {
        processed: true,
        version: '1.0.0',
        author: 'System'
      }
    };
  });

  console.log('Processed data:', processedData);
  
  return processedData.filter(item => item.id % 2 === 0);
}

// Función auxiliar
function formatDate(date) {
  const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };
  return new Intl.DateTimeFormat('es-ES', options).format(date);
}

// Clase de ejemplo
class DataProcessor {
  constructor(config) {
    this.config = config;
    this.processed = 0;
  }

  process(data) {
    this.processed++;
    return data.map(item => this.transformItem(item));
  }

  transformItem(item) {
    return {
      ...item,
      processed: true,
      processedAt: formatDate(new Date()),
      processor: this.constructor.name
    };
  }
}`,
    maximizeControl: true,
  },
};

export const HighlighterLongCode = {
  parameters: {
    layout: "left",
  },
  args: {
    language: "python",
    code: `# Ejemplo de código Python con scroll
import pandas as pd
import numpy as np
from datetime import datetime, timedelta
import matplotlib.pyplot as plt
import seaborn as sns

class DataAnalyzer:
    def __init__(self, data_source):
        self.data_source = data_source
        self.data = None
        self.results = {}
    
    def load_data(self):
        """Carga los datos desde la fuente especificada"""
        try:
            self.data = pd.read_csv(self.data_source)
            print(f"Datos cargados: {len(self.data)} filas")
        except FileNotFoundError:
            print("Error: Archivo no encontrado")
            return False
        except Exception as e:
            print(f"Error al cargar datos: {e}")
            return False
        return True
    
    def clean_data(self):
        """Limpia y preprocesa los datos"""
        if self.data is None:
            print("Error: No hay datos cargados")
            return
        
        # Eliminar duplicados
        initial_count = len(self.data)
        self.data = self.data.drop_duplicates()
        duplicates_removed = initial_count - len(self.data)
        
        # Eliminar valores nulos
        self.data = self.data.dropna()
        
        print(f"Duplicados eliminados: {duplicates_removed}")
        print(f"Datos finales: {len(self.data)} filas")
    
    def analyze(self):
        """Realiza el análisis estadístico"""
        if self.data is None:
            return
        
        self.results['descriptive'] = self.data.describe()
        self.results['correlation'] = self.data.corr()
        
        # Análisis por categorías
        if 'category' in self.data.columns:
            self.results['by_category'] = self.data.groupby('category').agg({
                'value': ['mean', 'std', 'count'],
                'price': ['mean', 'min', 'max']
            })
    
    def generate_report(self):
        """Genera un reporte completo"""
        report = []
        report.append("=== REPORTE DE ANÁLISIS ===")
        report.append(f"Fecha: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        report.append(f"Total de registros: {len(self.data)}")
        
        if 'descriptive' in self.results:
            report.append("\\n--- Estadísticas Descriptivas ---")
            report.append(str(self.results['descriptive']))
        
        return "\\n".join(report)

# Uso del analizador
if __name__ == "__main__":
    analyzer = DataAnalyzer("data.csv")
    
    if analyzer.load_data():
        analyzer.clean_data()
        analyzer.analyze()
        
        report = analyzer.generate_report()
        print(report)
        
        # Guardar reporte
        with open("analysis_report.txt", "w") as f:
            f.write(report)`,
    maximizeControl: false,
  },
};
