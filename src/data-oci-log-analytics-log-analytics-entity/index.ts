// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entity
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciLogAnalyticsLogAnalyticsEntityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entity#log_analytics_entity_id DataOciLogAnalyticsLogAnalyticsEntity#log_analytics_entity_id}
  */
  readonly logAnalyticsEntityId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entity#namespace DataOciLogAnalyticsLogAnalyticsEntity#namespace}
  */
  readonly namespace: string;
}
export interface DataOciLogAnalyticsLogAnalyticsEntityMetadataItems {
}

export function dataOciLogAnalyticsLogAnalyticsEntityMetadataItemsToTerraform(struct?: DataOciLogAnalyticsLogAnalyticsEntityMetadataItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLogAnalyticsLogAnalyticsEntityMetadataItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLogAnalyticsLogAnalyticsEntityMetadataItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference {
    return new DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciLogAnalyticsLogAnalyticsEntityMetadata {
}

export function dataOciLogAnalyticsLogAnalyticsEntityMetadataToTerraform(struct?: DataOciLogAnalyticsLogAnalyticsEntityMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciLogAnalyticsLogAnalyticsEntityMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLogAnalyticsLogAnalyticsEntityMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLogAnalyticsLogAnalyticsEntityMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciLogAnalyticsLogAnalyticsEntityMetadataItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciLogAnalyticsLogAnalyticsEntityMetadataList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLogAnalyticsLogAnalyticsEntityMetadataOutputReference {
    return new DataOciLogAnalyticsLogAnalyticsEntityMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entity oci_log_analytics_log_analytics_entity}
*/
export class DataOciLogAnalyticsLogAnalyticsEntity extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_log_analytics_log_analytics_entity";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entity oci_log_analytics_log_analytics_entity} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciLogAnalyticsLogAnalyticsEntityConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciLogAnalyticsLogAnalyticsEntityConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_log_analytics_log_analytics_entity',
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
    this._logAnalyticsEntityId = config.logAnalyticsEntityId;
    this._namespace = config.namespace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // are_logs_collected - computed: true, optional: false, required: false
  public get areLogsCollected() {
    return this.getBooleanAttribute('are_logs_collected');
  }

  // cloud_resource_id - computed: true, optional: false, required: false
  public get cloudResourceId() {
    return this.getStringAttribute('cloud_resource_id');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // entity_type_internal_name - computed: true, optional: false, required: false
  public get entityTypeInternalName() {
    return this.getStringAttribute('entity_type_internal_name');
  }

  // entity_type_name - computed: true, optional: false, required: false
  public get entityTypeName() {
    return this.getStringAttribute('entity_type_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // log_analytics_entity_id - computed: false, optional: false, required: true
  private _logAnalyticsEntityId?: string; 
  public get logAnalyticsEntityId() {
    return this.getStringAttribute('log_analytics_entity_id');
  }
  public set logAnalyticsEntityId(value: string) {
    this._logAnalyticsEntityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsEntityIdInput() {
    return this._logAnalyticsEntityId;
  }

  // management_agent_compartment_id - computed: true, optional: false, required: false
  public get managementAgentCompartmentId() {
    return this.getStringAttribute('management_agent_compartment_id');
  }

  // management_agent_display_name - computed: true, optional: false, required: false
  public get managementAgentDisplayName() {
    return this.getStringAttribute('management_agent_display_name');
  }

  // management_agent_id - computed: true, optional: false, required: false
  public get managementAgentId() {
    return this.getStringAttribute('management_agent_id');
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new DataOciLogAnalyticsLogAnalyticsEntityMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // properties - computed: true, optional: false, required: false
  private _properties = new cdktf.StringMap(this, "properties");
  public get properties() {
    return this._properties;
  }

  // source_id - computed: true, optional: false, required: false
  public get sourceId() {
    return this.getStringAttribute('source_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_last_discovered - computed: true, optional: false, required: false
  public get timeLastDiscovered() {
    return this.getStringAttribute('time_last_discovered');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // timezone_region - computed: true, optional: false, required: false
  public get timezoneRegion() {
    return this.getStringAttribute('timezone_region');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      log_analytics_entity_id: cdktf.stringToTerraform(this._logAnalyticsEntityId),
      namespace: cdktf.stringToTerraform(this._namespace),
    };
  }
}
