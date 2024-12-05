// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_agent_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciGenerativeAiAgentAgentEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_agent_endpoint#agent_endpoint_id DataOciGenerativeAiAgentAgentEndpoint#agent_endpoint_id}
  */
  readonly agentEndpointId: string;
}
export interface DataOciGenerativeAiAgentAgentEndpointContentModerationConfig {
}

export function dataOciGenerativeAiAgentAgentEndpointContentModerationConfigToTerraform(struct?: DataOciGenerativeAiAgentAgentEndpointContentModerationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciGenerativeAiAgentAgentEndpointContentModerationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGenerativeAiAgentAgentEndpointContentModerationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // should_enable_on_input - computed: true, optional: false, required: false
  public get shouldEnableOnInput() {
    return this.getBooleanAttribute('should_enable_on_input');
  }

  // should_enable_on_output - computed: true, optional: false, required: false
  public get shouldEnableOnOutput() {
    return this.getBooleanAttribute('should_enable_on_output');
  }
}

export class DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference {
    return new DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciGenerativeAiAgentAgentEndpointSessionConfig {
}

export function dataOciGenerativeAiAgentAgentEndpointSessionConfigToTerraform(struct?: DataOciGenerativeAiAgentAgentEndpointSessionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciGenerativeAiAgentAgentEndpointSessionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGenerativeAiAgentAgentEndpointSessionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // idle_timeout_in_seconds - computed: true, optional: false, required: false
  public get idleTimeoutInSeconds() {
    return this.getNumberAttribute('idle_timeout_in_seconds');
  }
}

export class DataOciGenerativeAiAgentAgentEndpointSessionConfigList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference {
    return new DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_agent_endpoint oci_generative_ai_agent_agent_endpoint}
*/
export class DataOciGenerativeAiAgentAgentEndpoint extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_generative_ai_agent_agent_endpoint";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_agent_endpoint oci_generative_ai_agent_agent_endpoint} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciGenerativeAiAgentAgentEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciGenerativeAiAgentAgentEndpointConfig) {
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
    this._agentEndpointId = config.agentEndpointId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_endpoint_id - computed: false, optional: false, required: true
  private _agentEndpointId?: string; 
  public get agentEndpointId() {
    return this.getStringAttribute('agent_endpoint_id');
  }
  public set agentEndpointId(value: string) {
    this._agentEndpointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentEndpointIdInput() {
    return this._agentEndpointId;
  }

  // agent_id - computed: true, optional: false, required: false
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // content_moderation_config - computed: true, optional: false, required: false
  private _contentModerationConfig = new DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList(this, "content_moderation_config", false);
  public get contentModerationConfig() {
    return this._contentModerationConfig;
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // session_config - computed: true, optional: false, required: false
  private _sessionConfig = new DataOciGenerativeAiAgentAgentEndpointSessionConfigList(this, "session_config", false);
  public get sessionConfig() {
    return this._sessionConfig;
  }

  // should_enable_citation - computed: true, optional: false, required: false
  public get shouldEnableCitation() {
    return this.getBooleanAttribute('should_enable_citation');
  }

  // should_enable_session - computed: true, optional: false, required: false
  public get shouldEnableSession() {
    return this.getBooleanAttribute('should_enable_session');
  }

  // should_enable_trace - computed: true, optional: false, required: false
  public get shouldEnableTrace() {
    return this.getBooleanAttribute('should_enable_trace');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agent_endpoint_id: cdktf.stringToTerraform(this._agentEndpointId),
    };
  }
}
