'use client';

import { StyledTextArea } from '../form/StyledTextArea';
import { Label } from '../form/Label';
import { FormGroup } from '../form/FormGroup';

interface TextAreaProps {
  name: string;
  label: string;
  value?: string;
  placeholder: string;
  onChange(): void;
}

const TextArea: React.FC<TextAreaProps> = ({
  name,
  label,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <FormGroup>
      <StyledTextArea
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required
      />
      <Label htmlFor={name}>{label}</Label>
    </FormGroup>
  );
};

export default TextArea;
