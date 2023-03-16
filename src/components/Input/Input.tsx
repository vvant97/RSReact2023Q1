import { ChangeEvent, Component } from 'react';

type InputProps = {
  type: 'text';
  placeholder?: string;
  id?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

class Input extends Component<InputProps> {
  constructor(props: InputProps) {
    super(props);
  }

  render() {
    const { ...props } = this.props;

    return <input {...props} />;
  }
}

export default Input;
