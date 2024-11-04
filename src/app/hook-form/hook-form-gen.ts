import {Injectable} from '@angular/core';
import {
  AlignmentType, Bookmark,
  Document, Footer,
  ImageRun, InternalHyperlink,
  Packer, PageNumber, PageReference,
  Paragraph,
  Table,
  TableCell,
  TableRow,
  TextRun, VerticalAlign,
  WidthType
} from 'docx';
import {saveAs} from 'file-saver';


@Injectable({
  providedIn: 'root'
})

export class HookDocxGen {
  async hookGen(genForm: any) {

    const other_document = genForm.Other_document ? "Yes" : "No";
    const purchase_order = genForm.Purchase_order ? "Yes" : "No";
    const purchase_requisition = genForm.Purchase_requisition ? "Yes" : "No";
    const payable_invoice = genForm.Payable_invoice ? "Yes" : "No";
    const payable_credit_note = genForm.Payable_credit_note ? "Yes" : "No";
    const sales_invoice = genForm.Sales_invoice ? "Yes" : "No";
    const sales_credit_note = genForm.Sales_credit_note ? "Yes" : "No";
    const payable_invoice_pobased = genForm.Payable_invoice_PO_based ? "Yes" : "No";

    const font: string = 'Noto Sans'

    async function getBase64ImageFromURL(url: string): Promise<string> {
      const response = await fetch(url);
      const blob = await response.blob();
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
    }

    const LogoYoozBase64 = await getBase64ImageFromURL("logoYoozDocx.png")

    const logoYooz = new ImageRun({
      data: LogoYoozBase64.split(",")[1],
      transformation: {
        width: 507,
        height: 201,
      },
      floating: {
        horizontalPosition: {
          offset: 1350000,
        },
        verticalPosition: {
          offset: 2500000,
        },
      },
    });

    const table = new Table({
      columnWidths: [7208, 1802],
      rows: [
        new TableRow({ // premier ligne en couleur
          children: [
            new TableCell({
              width: {
                size: 7208,
                type: WidthType.DXA,
              },
              margins: {
                top: 75,
                bottom: 75,
              },
              children: [new Paragraph({children: [new TextRun({text: "Documents", font: font})], alignment: AlignmentType.CENTER})],
              shading: {
                fill: '#04C0A8',
              }
            }),
            new TableCell({
              width: {
                size: 1802,
                type: WidthType.DXA,
              },
              children: [new Paragraph({children: [new TextRun({text: "Supported?", font: font})], alignment: AlignmentType.CENTER})],
              verticalAlign: VerticalAlign.CENTER,
              shading: {
                fill: '#04C0A8',
              }
            }),
          ],
        }),
        new TableRow({ // deuxieme ligne
          children: [
            new TableCell({
              width: {
                size: 7208,
                type: WidthType.DXA,
              },
              margins: {
                top: 75,
                bottom: 75,
              },
              children: [new Paragraph({children: [new TextRun({text: "Other document", font: font})]})],
            }),
            new TableCell({
              width: {
                size: 1802,
                type: WidthType.DXA,
              },
              children: [new Paragraph({children: [new TextRun({text: other_document, font: font})], alignment: AlignmentType.CENTER})],
            }),
          ],
        }),
        new TableRow({ // troisieme ligne
          children: [
            new TableCell({
              width: {
                size: 7208,
                type: WidthType.DXA,
              },
              margins: {
                top: 75,
                bottom: 75,
              },
              children: [new Paragraph({children: [new TextRun({text: "Purchase order (PO)", font: font})]})],
            }),
            new TableCell({
              width: {
                size: 1802,
                type: WidthType.DXA,
              },
              children: [new Paragraph({children: [new TextRun({text: purchase_order, font: font})], alignment: AlignmentType.CENTER})],
            }),
          ],
        }),
        new TableRow({ // quatrieme ligne
          children: [
            new TableCell({
              width: {
                size: 7208,
                type: WidthType.DXA,
              },
              margins: {
                top: 75,
                bottom: 75,
              },
              children: [new Paragraph({children: [new TextRun({text: "Purchase requisition (PR)", font: font})]})],
            }),
            new TableCell({
              width: {
                size: 1802,
                type: WidthType.DXA,
              },
              children: [new Paragraph({children: [new TextRun({text: purchase_requisition, font: font})], alignment: AlignmentType.CENTER})],
            }),
          ],
        }),
        new TableRow({ // cinquieme ligne
          children: [
            new TableCell({
              width: {
                size: 7208,
                type: WidthType.DXA,
              },
              margins: {
                top: 75,
                bottom: 75,
              },
              children: [new Paragraph({children: [new TextRun({text: "Payable invoice - no PO", font: font})]})],
            }),
            new TableCell({
              width: {
                size: 1802,
                type: WidthType.DXA,
              },
              children: [new Paragraph({children: [new TextRun({text: payable_invoice, font: font})], alignment: AlignmentType.CENTER})],
            }),
          ],
        }),
        new TableRow({ // sixieme ligne
          children: [
            new TableCell({
              width: {
                size: 7208,
                type: WidthType.DXA,
              },
              margins: {
                top: 75,
                bottom: 75,
              },
              children: [new Paragraph({children: [new TextRun({text: "Payable credit note - no PO", font: font})]})],
            }),
            new TableCell({
              width: {
                size: 1802,
                type: WidthType.DXA,
              },
              children: [new Paragraph({children: [new TextRun({text: payable_credit_note, font: font})], alignment: AlignmentType.CENTER})],
            }),
          ],
        }),
        new TableRow({ // septieme ligne
          children: [
            new TableCell({
              width: {
                size: 7208,
                type: WidthType.DXA,
              },
              margins: {
                top: 75,
                bottom: 75,
              },
              children: [new Paragraph({children: [new TextRun({text: "Sales invoice - no SO", font: font})]})],
            }),
            new TableCell({
              width: {
                size: 1802,
                type: WidthType.DXA,
              },
              children: [new Paragraph({children: [new TextRun({text: sales_invoice, font: font})], alignment: AlignmentType.CENTER})],
            }),
          ],
        }),
        new TableRow({ // huitieme ligne
          children: [
            new TableCell({
              width: {
                size: 7208,
                type: WidthType.DXA,
              },
              margins: {
                top: 75,
                bottom: 75,
              },
              children: [new Paragraph({children: [new TextRun({text: "Sales credit note - no SO", font: font})]})],
            }),
            new TableCell({
              width: {
                size: 1802,
                type: WidthType.DXA,
              },
              children: [new Paragraph({children: [new TextRun({text: sales_credit_note, font: font})], alignment: AlignmentType.CENTER})],
            }),
          ],
        }),
        new TableRow({ // neuvieme ligne
          children: [
            new TableCell({
              width: {
                size: 7208,
                type: WidthType.DXA,
              },
              margins: {
                top: 75,
                bottom: 75,
              },
              children: [new Paragraph({children: [new TextRun({text: "Payable invoice - PO based", font: font})]})],
            }),
            new TableCell({
              width: {
                size: 1802,
                type: WidthType.DXA,
              },
              children: [new Paragraph({children: [new TextRun({text: payable_invoice_pobased, font: font})], alignment: AlignmentType.CENTER})],
            }),
          ],
        }),
      ],
    });

    const table2 = new Table({
      columnWidths: [1802, 7208],
      rows: [
        new TableRow({
          children: [
            new TableCell({
              width: {
                size: 1802,
                type: WidthType.DXA,
              },
              margins: {
                top: 75,
                bottom: 75,
              },
              children: [new Paragraph({children: [new TextRun({text: "Français FR", font: font, bold: true})], alignment: AlignmentType.CENTER})],
              verticalAlign: VerticalAlign.CENTER,
              shading: {
                fill: '#04C0A8',
              }
            }),
            new TableCell({
              width: {
                size: 7208,
                type: WidthType.DXA,
              },
              children: [new Paragraph({children: [new TextRun({text: genForm.hook_name_fr, font: font})], alignment: AlignmentType.CENTER})],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              width: {
                size: 1802,
                type: WidthType.DXA,
              },
              margins: {
                top: 75,
                bottom: 75,
              },
              children: [new Paragraph({children: [new TextRun({text: "Anglais EN", font: font, bold: true})], alignment: AlignmentType.CENTER})],
              verticalAlign: VerticalAlign.CENTER,
              shading: {
                fill: '#04C0A8',
              }
            }),
            new TableCell({
              width: {
                size: 7208,
                type: WidthType.DXA,
              },
              children: [new Paragraph({children: [new TextRun({text: genForm.hook_name_en, font: font})], alignment: AlignmentType.CENTER})],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              width: {
                size: 1802,
                type: WidthType.DXA,
              },
              margins: {
                top: 75,
                bottom: 75,
              },
              children: [new Paragraph({children: [new TextRun({text: "Anglais US", font: font, bold: true})], alignment: AlignmentType.CENTER})],
              verticalAlign: VerticalAlign.CENTER,
              shading: {
                fill: '#04C0A8',
              }
            }),
            new TableCell({
              width: {
                size: 7208,
                type: WidthType.DXA,
              },
              children: [new Paragraph({children: [new TextRun({text: genForm.hook_name_us, font: font})], alignment: AlignmentType.CENTER})],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              width: {
                size: 1802,
                type: WidthType.DXA,
              },
              margins: {
                top: 75,
                bottom: 75,
              },
              children: [new Paragraph({children: [new TextRun({text: "Espagnol ES", font: font, bold: true})], alignment: AlignmentType.CENTER})],
              verticalAlign: VerticalAlign.CENTER,
              shading: {
                fill: '#04C0A8',
              }
            }),
            new TableCell({
              width: {
                size: 7208,
                type: WidthType.DXA,
              },
              children: [new Paragraph({children: [new TextRun({text: genForm.hook_name_es, font: font})], alignment: AlignmentType.CENTER})],
            }),
          ],
        }),
      ],
    });

    const table3 = new Table({
      columnWidths: [1802, 7208],
      rows: [
        new TableRow({
          children: [
            new TableCell({
              width: {
                size: 1802,
                type: WidthType.DXA,
              },
              margins: {
                top: 75,
                bottom: 75,
              },
              children: [new Paragraph({children: [new TextRun({text: "Français FR", font: font, size: 20, bold: true})], alignment: AlignmentType.CENTER})],
              verticalAlign: VerticalAlign.CENTER,
              shading: {
                fill: '#04C0A8',
              }
            }),
            new TableCell({
              width: {
                size: 7208,
                type: WidthType.DXA,
              },
              children: [new Paragraph({children: [new TextRun({text: genForm.description_fr, font: font, size: 18})], alignment: AlignmentType.CENTER})],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              width: {
                size: 1802,
                type: WidthType.DXA,
              },
              margins: {
                top: 75,
                bottom: 75,
              },
              children: [new Paragraph({children: [new TextRun({text: "Anglais EN", font: font, size: 20, bold: true})], alignment: AlignmentType.CENTER})],
              verticalAlign: VerticalAlign.CENTER,
              shading: {
                fill: '#04C0A8',
              }
            }),
            new TableCell({
              width: {
                size: 7208,
                type: WidthType.DXA,
              },
              children: [new Paragraph({children: [new TextRun({text: genForm.description_en, font: font, size: 18})], alignment: AlignmentType.CENTER})],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              width: {
                size: 1802,
                type: WidthType.DXA,
              },
              margins: {
                top: 75,
                bottom: 75,
              },
              children: [new Paragraph({children: [new TextRun({text: "Anglais US", font: font, size: 20, bold: true})], alignment: AlignmentType.CENTER})],
              verticalAlign: VerticalAlign.CENTER,
              shading: {
                fill: '#04C0A8',
              }
            }),
            new TableCell({
              width: {
                size: 7208,
                type: WidthType.DXA,
              },
              children: [new Paragraph({children: [new TextRun({text: genForm.description_us, font: font, size: 18})], alignment: AlignmentType.CENTER})],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              width: {
                size: 1802,
                type: WidthType.DXA,
              },
              margins: {
                top: 75,
                bottom: 75,
              },
              children: [new Paragraph({children: [new TextRun({text: "Espagnol ES", font: font, size: 20, bold: true})], alignment: AlignmentType.CENTER})],
              verticalAlign: VerticalAlign.CENTER,
              shading: {
                fill: '#04C0A8',
              }
            }),
            new TableCell({
              width: {
                size: 7208,
                type: WidthType.DXA,
              },
              children: [new Paragraph({children: [new TextRun({text: genForm.description_es, font: font, size: 18})], alignment: AlignmentType.CENTER})],
            }),
          ],
        }),
      ],
    });

    const table4 = new Table({
      columnWidths: [7000, 2010],
      rows: [
        new TableRow({
          children: [
            new TableCell({
              width: {
                size: 7000,
                type: WidthType.DXA,
              },
              children: [new Paragraph({children: [new TextRun({text: "Action name", font: font, size: 18, bold: true})], alignment: AlignmentType.CENTER})],
              shading: {
                fill: '#04C0A8',
              }
            }),
            new TableCell({
              width: {
                size: 2010,
                type: WidthType.DXA,
              },
              children: [new Paragraph({children: [new TextRun({text: "Check choice(s)", font: font, size: 18, bold: true})], alignment: AlignmentType.CENTER})],
              shading: {
                fill: '#04C0A8',
              }
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              width: {
                size: 7000,
                type: WidthType.DXA,
              },
              margins: {
                top: 50,
                bottom: 50,
              },
              children: [new Paragraph({children: [new TextRun({text: "When opening the document", font: font, size: 18})]})],
            }),
            new TableCell({
              width: {
                size: 2010,
                type: WidthType.DXA,
              },
              children: [new Paragraph({children: [new TextRun({text: genForm.event.includes('When opening the document') ? "✅" : "", font: font, size: 18})], alignment: AlignmentType.CENTER})],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              width: {
                size: 7000,
                type: WidthType.DXA,
              },
              margins: {
                top: 50,
                bottom: 50,
              },
              children: [new Paragraph({children: [new TextRun({text: "When the document is closed and saved", font: font, size: 18})]})],
            }),
            new TableCell({
              width: {
                size: 2010,
                type: WidthType.DXA,
              },
              children: [new Paragraph({children: [new TextRun({text: genForm.event.includes('When the document is closed and saved') ? "✅" : "", font: font, size: 18})], alignment: AlignmentType.CENTER})],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              width: {
                size: 7000,
                type: WidthType.DXA,
              },
              margins: {
                top: 50,
                bottom: 50,
              },
              children: [new Paragraph({children: [new TextRun({text: "When the document is sent to another workflow step", font: font, size: 18})]})],
            }),
            new TableCell({
              width: {
                size: 2010,
                type: WidthType.DXA,
              },
              children: [new Paragraph({children: [new TextRun({text: genForm.event.includes('When the document is sent to another workflow step') ? "✅" : "", font: font, size: 18})], alignment: AlignmentType.CENTER})],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              width: {
                size: 7000,
                type: WidthType.DXA,
              },
              margins: {
                top: 50,
                bottom: 50,
              },
              children: [new Paragraph({children: [new TextRun({text: "Adding document lines", font: font, size: 18})]})],
            }),
            new TableCell({
              width: {
                size: 2010,
                type: WidthType.DXA,
              },
              children: [new Paragraph({children: [new TextRun({text: genForm.event.includes('Adding document lines') ? "✅" : "", font: font, size: 18})], alignment: AlignmentType.CENTER})],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              width: {
                size: 7000,
                type: WidthType.DXA,
              },
              margins: {
                top: 50,
                bottom: 50,
              },
              children: [new Paragraph({children: [new TextRun({text: "Removing document lines ", font: font, size: 18})]})],
            }),
            new TableCell({
              width: {
                size: 2010,
                type: WidthType.DXA,
              },
              children: [new Paragraph({children: [new TextRun({text: genForm.event.includes('Removing document lines') ? "✅" : "", font: font, size: 18})], alignment: AlignmentType.CENTER})],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              width: {
                size: 7000,
                type: WidthType.DXA,
              },
              margins: {
                top: 50,
                bottom: 50,
              },
              children: [new Paragraph({children: [new TextRun({text: "When propagating the value of a line field to other lines", font: font, size: 18})]})],
            }),
            new TableCell({
              width: {
                size: 2010,
                type: WidthType.DXA,
              },
              children: [new Paragraph({children: [new TextRun({text: genForm.event.includes('When propagating the value of a line field to other lines') ? "✅" : "", font: font, size: 18})], alignment: AlignmentType.CENTER})],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              width: {
                size: 7000,
                type: WidthType.DXA,
              },
              margins: {
                top: 50,
                bottom: 50,
              },
              children: [new Paragraph({children: [new TextRun({text: "When the invoice is reconciled with the order", font: font, size: 18})]})],
            }),
            new TableCell({
              width: {
                size: 2010,
                type: WidthType.DXA,
              },
              children: [new Paragraph({children: [new TextRun({text: genForm.event.includes('When the invoice is reconciled with the order') ? "✅" : "", font: font, size: 18})], alignment: AlignmentType.CENTER})],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              width: {
                size: 7000,
                type: WidthType.DXA,
              },
              margins: {
                top: 50,
                bottom: 50,
              },
              children: [new Paragraph({children: [new TextRun({text: "On transfer or rejection", font: font, size: 18})]})],
            }),
            new TableCell({
              width: {
                size: 2010,
                type: WidthType.DXA,
              },
              children: [new Paragraph({children: [new TextRun({text: genForm.event.includes('On transfer or rejection') ? "✅" : "", font: font, size: 18})], alignment: AlignmentType.CENTER})],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              width: {
                size: 7000,
                type: WidthType.DXA,
              },
              margins: {
                top: 50,
                bottom: 50,
              },
              children: [new Paragraph({children: [new TextRun({text: "When the order is sent", font: font, size: 18})]})],
            }),
            new TableCell({
              width: {
                size: 2010,
                type: WidthType.DXA,
              },
              children: [new Paragraph({children: [new TextRun({text: genForm.event.includes('When the order is sent') ? "✅" : "", font: font, size: 18})], alignment: AlignmentType.CENTER})],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              width: {
                size: 7000,
                type: WidthType.DXA,
              },
              margins: {
                top: 50,
                bottom: 50,
              },
              children: [new Paragraph({children: [new TextRun({text: "At the time of automatic document processing", font: font, size: 18})]})],
            }),
            new TableCell({
              width: {
                size: 2010,
                type: WidthType.DXA,
              },
              children: [new Paragraph({children: [new TextRun({text: genForm.event.includes('At the time of automatic document processing') ? "✅" : "", font: font, size: 18})], alignment: AlignmentType.CENTER})],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              width: {
                size: 7000,
                type: WidthType.DXA,
              },
              margins: {
                top: 50,
                bottom: 50,
              },
              children: [new Paragraph({children: [new TextRun({text: "On return of feedback (payment or other)", font: font, size: 18})]})],
            }),
            new TableCell({
              width: {
                size: 2010,
                type: WidthType.DXA,
              },
              children: [new Paragraph({children: [new TextRun({text: genForm.event.includes('On return of feedback (payment or other)') ? "✅" : "", font: font, size: 18})], alignment: AlignmentType.CENTER})],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              width: {
                size: 7000,
                type: WidthType.DXA,
              },
              margins: {
                top: 50,
                bottom: 50,
              },
              children: [new Paragraph({children: [new TextRun({text: "When the document is blocked", font: font, size: 18})]})],
            }),
            new TableCell({
              width: {
                size: 2010,
                type: WidthType.DXA,
              },
              children: [new Paragraph({children: [new TextRun({text: genForm.event.includes('When the document is blocked') ? "✅" : "", font: font, size: 18})], alignment: AlignmentType.CENTER})],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              width: {
                size: 7000,
                type: WidthType.DXA,
              },
              margins: {
                top: 50,
                bottom: 50,
              },
              children: [new Paragraph({children: [new TextRun({text: "When the document is unblocked", font: font, size: 18})]})],
            }),
            new TableCell({
              width: {
                size: 2010,
                type: WidthType.DXA,
              },
              children: [new Paragraph({children: [new TextRun({text: genForm.event.includes('When the document is unblocked') ? "✅" : "", font: font, size: 18})], alignment: AlignmentType.CENTER})],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              width: {
                size: 7000,
                type: WidthType.DXA,
              },
              margins: {
                top: 50,
                bottom: 50,
              },
              children: [new Paragraph({children: [new TextRun({text: "When the order is created", font: font, size: 18})]})],
            }),
            new TableCell({
              width: {
                size: 2010,
                type: WidthType.DXA,
              },
              children: [new Paragraph({children: [new TextRun({text: genForm.event.includes('When the order is created') ? "✅" : "", font: font, size: 18})], alignment: AlignmentType.CENTER})],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              width: {
                size: 7000,
                type: WidthType.DXA,
              },
              margins: {
                top: 50,
                bottom: 50,
              },
              children: [new Paragraph({children: [new TextRun({text: "When the document arrives in yooz (AI return, electronic invoice, etc.)", font: font, size: 18})]})],
            }),
            new TableCell({
              width: {
                size: 2010,
                type: WidthType.DXA,
              },
              children: [new Paragraph({children: [new TextRun({text: genForm.event.includes('When the document arrives in yooz (AI return, electronic invoice, etc.)') ? "✅" : "", font: font, size: 18})], alignment: AlignmentType.CENTER})],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              width: {
                size: 7000,
                type: WidthType.DXA,
              },
              margins: {
                top: 60,
                bottom: 60,
              },
              children: [new Paragraph({children: [new TextRun({text: "When a field is update on document ", font: font, size: 18, bold: true})], alignment: AlignmentType.CENTER})],
              shading: {
                fill: '#04C0A8',
              }
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              width: {
                size: 7000,
                type: WidthType.DXA,
              },
              children: [new Paragraph({children: [new TextRun({text: "Field name", font: font, size: 18, bold: true})], alignment: AlignmentType.CENTER})],
              verticalAlign: VerticalAlign.CENTER,
              shading: ({
                fill: '#04C0A8',
              })
            }),
            new TableCell({
              width: {
                size: 2010,
                type: WidthType.DXA,
              },
              children: [new Paragraph({children: [new TextRun({text: "BLOCK NAME DOCUMENT", font: font, size: 18, bold: true})], alignment: AlignmentType.CENTER})],
              shading: ({
                fill: '#04C0A8',
              })
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              width: {
                size: 7000,
                type: WidthType.DXA,
              },
              children: [new Paragraph({children: [new TextRun({text: genForm.nom_du_champ, font: font, size: 18})], alignment: AlignmentType.CENTER})],
              verticalAlign: VerticalAlign.CENTER,
            }),
            new TableCell({
              width: {
                size: 2010,
                type: WidthType.DXA,
              },
              children: [new Paragraph({children: [new TextRun({text: genForm.position, font: font, size: 18})], alignment: AlignmentType.CENTER})],
            }),
          ],
        }),
      ],
    });

    const table5 = new Table({
      columnWidths: [2703, 1802],
      rows: [
        new TableRow({ // premier ligne en couleur
          children: [
            new TableCell({
              width: {
                size: 2703,
                type: WidthType.DXA,
              },
              margins: {
                top: 75,
                bottom: 75,
              },
              children: [new Paragraph({children: [new TextRun({text: "PHASE", font: font, bold: true})], alignment: AlignmentType.CENTER})],
              shading: {
                fill: '#04C0A8',
              }
            }),
            new TableCell({
              width: {
                size: 1802,
                type: WidthType.DXA,
              },
              children: [new Paragraph({children: [new TextRun({text: "STEP", font: font, bold: true})], alignment: AlignmentType.CENTER})],
              verticalAlign: VerticalAlign.CENTER,
              shading: {
                fill: '#04C0A8',
              }
            }),
          ],
        }),
        new TableRow({ // deuxieme ligne
          children: [
            new TableCell({
              width: {
                size: 2703,
                type: WidthType.DXA,
              },
              margins: {
                top: 75,
                bottom: 75,
              },
              children: [new Paragraph({children: [new TextRun({text: genForm.opening_document_phase, font: font})], alignment: AlignmentType.CENTER})],
            }),
            new TableCell({
              width: {
                size: 1802,
                type: WidthType.DXA,
              },
              children: [new Paragraph({children: [new TextRun({text: genForm.opening_document_step, font: font})], alignment: AlignmentType.CENTER})],
            }),
          ],
        }),
      ],
    });

    const table6 = new Table({
      columnWidths: [3604, 5406],
      rows: [
        new TableRow({ // premier ligne en couleur
          children: [
            new TableCell({
              width: {
                size: 3604,
                type: WidthType.DXA,
              },
              margins: {
                top: 75,
                bottom: 75,
              },
              children: [new Paragraph({children: [new TextRun({text: "User (Name user)", font: font, bold: true})], alignment: AlignmentType.CENTER})],
              shading: {
                fill: '#04C0A8',
              }
            }),
            new TableCell({
              width: {
                size: 5406,
                type: WidthType.DXA,
              },
              children: [new Paragraph({children: [new TextRun({text: "Phase/step", font: font, bold: true})], alignment: AlignmentType.CENTER})],
              verticalAlign: VerticalAlign.CENTER,
              shading: {
                fill: '#04C0A8',
              }
            }),
          ],
        }),
        new TableRow({ // deuxieme ligne
          children: [
            new TableCell({
              width: {
                size: 3604,
                type: WidthType.DXA,
              },
              margins: {
                top: 75,
                bottom: 75,
              },
              children: [new Paragraph({children: [new TextRun({text: genForm.user, font: font})], alignment: AlignmentType.CENTER})],
            }),
            new TableCell({
              width: {
                size: 5406,
                type: WidthType.DXA,
              },
              children: [new Paragraph({children: [new TextRun({text: `${genForm.phase} ${genForm.etape}`, font: font})], alignment: AlignmentType.CENTER})],
            }),
          ],
        }),
      ],
    });

    const doc = new Document({
      sections: [
        {
          footers: {
            default: new Footer({
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      children: [
                        "Yooz - ConfidentialPage ", PageNumber.CURRENT, " / ", PageNumber.TOTAL_PAGES
                      ], font: font, size: 14,
                    }),
                  ],
                }),
              ],
            }),
          },
          children: [
            new Paragraph({children: [logoYooz]}),
            new Paragraph({children: [new TextRun({text: "Secret", color: "FFFFFF", position: "600cm"})], alignment: AlignmentType.CENTER}),
            new Paragraph({children: [new TextRun({text: "**Titre**", bold: true, font: font, size: 32, color: '3C4857'})], alignment: AlignmentType.CENTER}),
            new Paragraph({children: [new TextRun({text: "Hook Form specifications", bold: true, font: font, size: 32, color: '3C4857'})], alignment: AlignmentType.CENTER}),
            new Paragraph({children: [new TextRun({text: "Table of contents", bold: true, font: font, color: '3C4857'})], pageBreakBefore: true}),
            new Paragraph({children: [new InternalHyperlink({children: [new TextRun({text: "1. Document type…………………………………………………………………………….………………3", font: font})], anchor: "documentType"})]}),
            new Paragraph({children: [new InternalHyperlink({children: [new TextRun({text: "2. Hook’s name………..………………………………………………………………………………………3", font: font})], anchor: "hookName"})]}),
            new Paragraph({children: [new InternalHyperlink({children: [new TextRun({text: "3. Hook’s descritpion………………………………………………………………………………………...3", font: font})], anchor: "hookDescription"})]}),
            new Paragraph({children: [new InternalHyperlink({children: [new TextRun({text: "4. Hook’s events (Don’t add action!)…………………………………………………………….……...4", font: font})], anchor: "hookEvents"})]}),
            new Paragraph({children: [new InternalHyperlink({children: [new TextRun({text: "5. Hook’s process………….………………………………………………………………………………….4", font: font})], anchor: "hookProcess"})]}),
            new Paragraph({children: [new InternalHyperlink({children: [new TextRun({text: "   5.1 Functional case……………………………..…………………………………………………………4", font: font})], anchor: "functionalCase"})]}),
            new Paragraph({children: [new InternalHyperlink({children: [new TextRun({text: "   5.2 Error cases……………………………………………………………………………………………...5", font: font})], anchor: "errorCases"})]}),
            new Paragraph({children: [new InternalHyperlink({children: [new TextRun({text: "6. Test cases…………………………………………………………………………………………………..5", font: font})], anchor: "testCases"})]}),
            new Paragraph({children: [new InternalHyperlink({children: [new TextRun({text: "   6.1 Identity user (depending on the phase to be tested)………....…………………………….5", font: font})], anchor: "identiryUser"})]}),
            new Paragraph({children: [new InternalHyperlink({children: [new TextRun({text: "   6.2 Expected results………………….…………………………………………………………………...5", font: font})], anchor: "expectedResults"})]}),
            new Paragraph({children: [new InternalHyperlink({children: [new TextRun({text: "   6.3 Special cases…………………………..………………………………………………………………5", font: font})], anchor: "specialCases"})]}),
            new Paragraph({children: [new Bookmark({id: "documentType", children: [new TextRun({text: "1. Type(s) de document", font: font, size: 42, color: '714C6C', position: "10cm"})]})], pageBreakBefore: true}),
            table,
            new Paragraph({children: [new Bookmark({id: "hookName", children: [new TextRun({text: "2. Nom du hook", font: font, size: 42, color: '714C6C', position: "-60cm"})]})]}),
            table2,
            new Paragraph({children: [new Bookmark({id: "hookDescription", children: [new TextRun({text: "3. Description du hook", font: font, size: 42, color: '714C6C', position: "-60cm"})]})]}),
            table3,
            new Paragraph({children: [new Bookmark({id: "hookEvents", children: [new TextRun({text: "4. Hook’s events (Don’t add action !) ", font: font, size: 42, color: '714C6C', position: "10cm"})]})], pageBreakBefore: true}),
            table4,
            new Paragraph({children: [new Bookmark({id: "hookProcess", children: [new TextRun({text: "5. Hook's process", font: font, size: 42, color: '714C6C', position: "-40cm"})]})]}),
            new Paragraph({children: [new Bookmark({id: "functionalCase", children: [new TextRun({text: "5.1 Functional case", font: font, size: 28, color: 'FF0000', position: "-40cm"})]})]}),
            new Paragraph({children: [new TextRun({text: genForm.cas_fonctionnel, font: font, size: 28, position: "10cm"})]}),
            new Paragraph({children: [new TextRun({text: "*Warning: for the document opening trigger, define a", font: font, size: 28, position: "10cm", bold: true, italics: true})], pageBreakBefore: true}),
            new Paragraph({children: [new TextRun({text: "workflow phase (and a step if necessary)!", font: font, size: 28, position: "50cm", bold: true, italics: true})]}),
            table5,
            new Paragraph({children: [new Bookmark({id: "errorCases", children: [new TextRun({text: "5.2 Error cases", font: font, size: 28, color: 'FF0000', position: "-50cm"})]})]}),
            new Paragraph({children: [new TextRun({text: genForm.cas_derreur, font: font, size: 28, position: "10cm"})]}),
            new Paragraph({children: [new Bookmark({id: "testCases", children: [new TextRun({text: "6. Test cases", font: font, size: 42, color: '714C6C', position: "-60cm"})]})]}),
            new Paragraph({children: [new Bookmark({id: "identiryUser", children: [new TextRun({text: "6.1 Identity user (depending on the phases to be tested)", font: font, size: 28, color: 'FF0000', position: "-60cm"})]})]}),
            table6,
            new Paragraph({children: [new Bookmark({id: "expectedResults", children: [new TextRun({text: "6.2 Expected results", font: font, size: 28, color: 'FF0000', position: "-60cm"})]})]}),
            new Paragraph({children: [new TextRun({text: genForm.resultats_attendus, font: font, size: 28})]}),
            new Paragraph({children: [new Bookmark({id: "specialCases", children: [new TextRun({text: "6.3 Special cases", font: font, size: 28, color: 'FF0000', position: "-80cm"})]})]}),
            new Paragraph({children: [new TextRun({text: genForm.cas_particulier, font: font, size: 28})]}),
          ],
        },
      ],
    });

    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, 'Test_gen.docx');
    });
  }
}
