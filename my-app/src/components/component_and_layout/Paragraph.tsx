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
      <style jsx>{`
        .paragraph {
          margin: 20px;
          padding: 20px;
          border: 0px;
          border-radius: 20px;
          background-color: white;
          cursor: default;
        }
      `}</style>
    </>
  );
}
