// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GenerativeAiAgentAgentEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#agent_id GenerativeAiAgentAgentEndpoint#agent_id}
  */
  readonly agentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#compartment_id GenerativeAiAgentAgentEndpoint#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#defined_tags GenerativeAiAgentAgentEndpoint#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#description GenerativeAiAgentAgentEndpoint#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#display_name GenerativeAiAgentAgentEndpoint#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#freeform_tags GenerativeAiAgentAgentEndpoint#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#id GenerativeAiAgentAgentEndpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#should_enable_citation GenerativeAiAgentAgentEndpoint#should_enable_citation}
  */
  readonly shouldEnableCitation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#should_enable_session GenerativeAiAgentAgentEndpoint#should_enable_session}
  */
  readonly shouldEnableSession?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#should_enable_trace GenerativeAiAgentAgentEndpoint#should_enable_trace}
  */
  readonly shouldEnableTrace?: boolean | cdktf.IResolvable;
  /**
  * content_moderation_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#content_moderation_config GenerativeAiAgentAgentEndpoint#content_moderation_config}
  */
  readonly contentModerationConfig?: GenerativeAiAgentAgentEndpointContentModerationConfig;
  /**
  * session_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#session_config GenerativeAiAgentAgentEndpoint#session_config}
  */
  readonly sessionConfig?: GenerativeAiAgentAgentEndpointSessionConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#timeouts GenerativeAiAgentAgentEndpoint#timeouts}
  */
  readonly timeouts?: GenerativeAiAgentAgentEndpointTimeouts;
}
export interface GenerativeAiAgentAgentEndpointContentModerationConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#should_enable_on_input GenerativeAiAgentAgentEndpoint#should_enable_on_input}
  */
  readonly shouldEnableOnInput?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#should_enable_on_output GenerativeAiAgentAgentEndpoint#should_enable_on_output}
  */
  readonly shouldEnableOnOutput?: boolean | cdktf.IResolvable;
}

export function generativeAiAgentAgentEndpointContentModerationConfigToTerraform(struct?: GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference | GenerativeAiAgentAgentEndpointContentModerationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    should_enable_on_input: cdktf.booleanToTerraform(struct!.shouldEnableOnInput),
    should_enable_on_output: cdktf.booleanToTerraform(struct!.shouldEnableOnOutput),
  }
}


export function generativeAiAgentAgentEndpointContentModerationConfigToHclTerraform(struct?: GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference | GenerativeAiAgentAgentEndpointContentModerationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    should_enable_on_input: {
      value: cdktf.booleanToHclTerraform(struct!.shouldEnableOnInput),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    should_enable_on_output: {
      value: cdktf.booleanToHclTerraform(struct!.shouldEnableOnOutput),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GenerativeAiAgentAgentEndpointContentModerationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._shouldEnableOnInput !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldEnableOnInput = this._shouldEnableOnInput;
    }
    if (this._shouldEnableOnOutput !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldEnableOnOutput = this._shouldEnableOnOutput;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenerativeAiAgentAgentEndpointContentModerationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._shouldEnableOnInput = undefined;
      this._shouldEnableOnOutput = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._shouldEnableOnInput = value.shouldEnableOnInput;
      this._shouldEnableOnOutput = value.shouldEnableOnOutput;
    }
  }

  // should_enable_on_input - computed: true, optional: true, required: false
  private _shouldEnableOnInput?: boolean | cdktf.IResolvable; 
  public get shouldEnableOnInput() {
    return this.getBooleanAttribute('should_enable_on_input');
  }
  public set shouldEnableOnInput(value: boolean | cdktf.IResolvable) {
    this._shouldEnableOnInput = value;
  }
  public resetShouldEnableOnInput() {
    this._shouldEnableOnInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldEnableOnInputInput() {
    return this._shouldEnableOnInput;
  }

  // should_enable_on_output - computed: true, optional: true, required: false
  private _shouldEnableOnOutput?: boolean | cdktf.IResolvable; 
  public get shouldEnableOnOutput() {
    return this.getBooleanAttribute('should_enable_on_output');
  }
  public set shouldEnableOnOutput(value: boolean | cdktf.IResolvable) {
    this._shouldEnableOnOutput = value;
  }
  public resetShouldEnableOnOutput() {
    this._shouldEnableOnOutput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldEnableOnOutputInput() {
    return this._shouldEnableOnOutput;
  }
}
export interface GenerativeAiAgentAgentEndpointSessionConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#idle_timeout_in_seconds GenerativeAiAgentAgentEndpoint#idle_timeout_in_seconds}
  */
  readonly idleTimeoutInSeconds?: number;
}

export function generativeAiAgentAgentEndpointSessionConfigToTerraform(struct?: GenerativeAiAgentAgentEndpointSessionConfigOutputReference | GenerativeAiAgentAgentEndpointSessionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idle_timeout_in_seconds: cdktf.numberToTerraform(struct!.idleTimeoutInSeconds),
  }
}


export function generativeAiAgentAgentEndpointSessionConfigToHclTerraform(struct?: GenerativeAiAgentAgentEndpointSessionConfigOutputReference | GenerativeAiAgentAgentEndpointSessionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    idle_timeout_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.idleTimeoutInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenerativeAiAgentAgentEndpointSessionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GenerativeAiAgentAgentEndpointSessionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idleTimeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeoutInSeconds = this._idleTimeoutInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenerativeAiAgentAgentEndpointSessionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._idleTimeoutInSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._idleTimeoutInSeconds = value.idleTimeoutInSeconds;
    }
  }

  // idle_timeout_in_seconds - computed: true, optional: true, required: false
  private _idleTimeoutInSeconds?: number; 
  public get idleTimeoutInSeconds() {
    return this.getNumberAttribute('idle_timeout_in_seconds');
  }
  public set idleTimeoutInSeconds(value: number) {
    this._idleTimeoutInSeconds = value;
  }
  public resetIdleTimeoutInSeconds() {
    this._idleTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInSecondsInput() {
    return this._idleTimeoutInSeconds;
  }
}
export interface GenerativeAiAgentAgentEndpointTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#create GenerativeAiAgentAgentEndpoint#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#delete GenerativeAiAgentAgentEndpoint#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#update GenerativeAiAgentAgentEndpoint#update}
  */
  readonly update?: string;
}

export function generativeAiAgentAgentEndpointTimeoutsToTerraform(struct?: GenerativeAiAgentAgentEndpointTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function generativeAiAgentAgentEndpointTimeoutsToHclTerraform(struct?: GenerativeAiAgentAgentEndpointTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenerativeAiAgentAgentEndpointTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GenerativeAiAgentAgentEndpointTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenerativeAiAgentAgentEndpointTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint oci_generative_ai_agent_agent_endpoint}
*/
export class GenerativeAiAgentAgentEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_generative_ai_agent_agent_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GenerativeAiAgentAgentEndpoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GenerativeAiAgentAgentEndpoint to import
  * @param importFromId The id of the existing GenerativeAiAgentAgentEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GenerativeAiAgentAgentEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_generative_ai_agent_agent_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint oci_generative_ai_agent_agent_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GenerativeAiAgentAgentEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: GenerativeAiAgentAgentEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_generative_ai_agent_agent_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '6.18.0',
        providerVersionConstraint: '~> 6.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._agentId = config.agentId;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._shouldEnableCitation = config.shouldEnableCitation;
    this._shouldEnableSession = config.shouldEnableSession;
    this._shouldEnableTrace = config.shouldEnableTrace;
    this._contentModerationConfig.internalValue = config.contentModerationConfig;
    this._sessionConfig.internalValue = config.sessionConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_id - computed: false, optional: false, required: true
  private _agentId?: string; 
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }
  public set agentId(value: string) {
    this._agentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentIdInput() {
    return this._agentId;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // should_enable_citation - computed: true, optional: true, required: false
  private _shouldEnableCitation?: boolean | cdktf.IResolvable; 
  public get shouldEnableCitation() {
    return this.getBooleanAttribute('should_enable_citation');
  }
  public set shouldEnableCitation(value: boolean | cdktf.IResolvable) {
    this._shouldEnableCitation = value;
  }
  public resetShouldEnableCitation() {
    this._shouldEnableCitation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldEnableCitationInput() {
    return this._shouldEnableCitation;
  }

  // should_enable_session - computed: true, optional: true, required: false
  private _shouldEnableSession?: boolean | cdktf.IResolvable; 
  public get shouldEnableSession() {
    return this.getBooleanAttribute('should_enable_session');
  }
  public set shouldEnableSession(value: boolean | cdktf.IResolvable) {
    this._shouldEnableSession = value;
  }
  public resetShouldEnableSession() {
    this._shouldEnableSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldEnableSessionInput() {
    return this._shouldEnableSession;
  }

  // should_enable_trace - computed: true, optional: true, required: false
  private _shouldEnableTrace?: boolean | cdktf.IResolvable; 
  public get shouldEnableTrace() {
    return this.getBooleanAttribute('should_enable_trace');
  }
  public set shouldEnableTrace(value: boolean | cdktf.IResolvable) {
    this._shouldEnableTrace = value;
  }
  public resetShouldEnableTrace() {
    this._shouldEnableTrace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldEnableTraceInput() {
    return this._shouldEnableTrace;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // content_moderation_config - computed: false, optional: true, required: false
  private _contentModerationConfig = new GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference(this, "content_moderation_config");
  public get contentModerationConfig() {
    return this._contentModerationConfig;
  }
  public putContentModerationConfig(value: GenerativeAiAgentAgentEndpointContentModerationConfig) {
    this._contentModerationConfig.internalValue = value;
  }
  public resetContentModerationConfig() {
    this._contentModerationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentModerationConfigInput() {
    return this._contentModerationConfig.internalValue;
  }

  // session_config - computed: false, optional: true, required: false
  private _sessionConfig = new GenerativeAiAgentAgentEndpointSessionConfigOutputReference(this, "session_config");
  public get sessionConfig() {
    return this._sessionConfig;
  }
  public putSessionConfig(value: GenerativeAiAgentAgentEndpointSessionConfig) {
    this._sessionConfig.internalValue = value;
  }
  public resetSessionConfig() {
    this._sessionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionConfigInput() {
    return this._sessionConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GenerativeAiAgentAgentEndpointTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GenerativeAiAgentAgentEndpointTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agent_id: cdktf.stringToTerraform(this._agentId),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      should_enable_citation: cdktf.booleanToTerraform(this._shouldEnableCitation),
      should_enable_session: cdktf.booleanToTerraform(this._shouldEnableSession),
      should_enable_trace: cdktf.booleanToTerraform(this._shouldEnableTrace),
      content_moderation_config: generativeAiAgentAgentEndpointContentModerationConfigToTerraform(this._contentModerationConfig.internalValue),
      session_config: generativeAiAgentAgentEndpointSessionConfigToTerraform(this._sessionConfig.internalValue),
      timeouts: generativeAiAgentAgentEndpointTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent_id: {
        value: cdktf.stringToHclTerraform(this._agentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      should_enable_citation: {
        value: cdktf.booleanToHclTerraform(this._shouldEnableCitation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      should_enable_session: {
        value: cdktf.booleanToHclTerraform(this._shouldEnableSession),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      should_enable_trace: {
        value: cdktf.booleanToHclTerraform(this._shouldEnableTrace),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      content_moderation_config: {
        value: generativeAiAgentAgentEndpointContentModerationConfigToHclTerraform(this._contentModerationConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GenerativeAiAgentAgentEndpointContentModerationConfigList",
      },
      session_config: {
        value: generativeAiAgentAgentEndpointSessionConfigToHclTerraform(this._sessionConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GenerativeAiAgentAgentEndpointSessionConfigList",
      },
      timeouts: {
        value: generativeAiAgentAgentEndpointTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GenerativeAiAgentAgentEndpointTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
