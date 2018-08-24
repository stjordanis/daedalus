// @flow strict
import React from 'react';
import type { Node } from 'react';
import { storiesOf } from '@storybook/react';
import type { Context } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { injectIntl } from 'react-intl';
import type { IntlShape } from 'react-intl';

import { TokenForm } from '../TokenForm';
import { TokenForm as TokenFormModel } from '../../forms/TokenForm';
import StoryDecorator from '../../../../../../storybook/stories/support/StoryDecorator';
import { formattedYesNo } from '../../../utils/formatters';

const addressChange = action('address change');

type TokenFormContext = Context & {
  form: TokenFormModel
};

interface TokenFormStory {
  addDecorator(
    decorator: (story: (context: TokenFormContext) => Node, context: TokenFormContext) => Node
  ): TokenFormStory;
  add(name: string, render: (context: TokenFormContext) => Node): TokenFormStory;
}

storiesOf<TokenFormStory>('Wallet/Tokens/TokenForm', module)
  .addDecorator((story, context) => {
    const FormProvider = injectIntl(
      class extends React.PureComponent<{ intl: IntlShape, children(): Node }> {
        componentDidMount() {
          context.form = new TokenFormModel(this.props.intl);
          this.forceUpdate();
        }

        render = () => (context.form ? this.props.children() : null);
      }
    );

    return (
      <StoryDecorator>
        <FormProvider>{() => story(context)}</FormProvider>
      </StoryDecorator>
    );
  })
  .add('Form', context => (
    <TokenForm form={context.form} disabled={false} onAddressChange={addressChange} />
  ))
  .add('Disabled form', context => (
    <TokenForm
      disabled
      form={context.form}
      disableReason={<p>Form is disabled</p>}
      onAddressChange={addressChange}
    />
  ))
  .add('With custom content', context => (
    <TokenForm form={context.form} onAddressChange={addressChange}>
      <div>Is valid: {formattedYesNo(context.form.isValid)}</div>
    </TokenForm>
  ));