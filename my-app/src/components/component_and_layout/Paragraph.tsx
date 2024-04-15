// src/components/component_and_layout/Paragraph.tsx

interface Props {
  content: string;
}

export default function Paragraph({ content }: Props) {
  return (
    <>
      <div className="paragraph">
        <strong>This is component</strong>
        <br />
        {content}
      </div>
    </>
  );
}
