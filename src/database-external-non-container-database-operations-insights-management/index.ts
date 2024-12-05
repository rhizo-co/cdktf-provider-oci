// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_operations_insights_management
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_operations_insights_management#enable_operations_insights DatabaseExternalNonContainerDatabaseOperationsInsightsManagement#enable_operations_insights}
  */
  readonly enableOperationsInsights: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_operations_insights_management#external_database_connector_id DatabaseExternalNonContainerDatabaseOperationsInsightsManagement#external_database_connector_id}
  */
  readonly externalDatabaseConnectorId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_operations_insights_management#external_non_container_database_id DatabaseExternalNonContainerDatabaseOperationsInsightsManagement#external_non_container_database_id}
  */
  readonly externalNonContainerDatabaseId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_operations_insights_management#id DatabaseExternalNonContainerDatabaseOperationsInsightsManagement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_operations_insights_management#timeouts DatabaseExternalNonContainerDatabaseOperationsInsightsManagement#timeouts}
  */
  readonly timeouts?: DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeouts;
}
export interface DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_operations_insights_management#create DatabaseExternalNonContainerDatabaseOperationsInsightsManagement#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_operations_insights_management#delete DatabaseExternalNonContainerDatabaseOperationsInsightsManagement#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_operations_insights_management#update DatabaseExternalNonContainerDatabaseOperationsInsightsManagement#update}
  */
  readonly update?: string;
}

export function databaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsToTerraform(struct?: DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeouts | cdktf.IResolvable): any {
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

export class DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_operations_insights_management oci_database_external_non_container_database_operations_insights_management}
*/
export class DatabaseExternalNonContainerDatabaseOperationsInsightsManagement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_external_non_container_database_operations_insights_management";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_operations_insights_management oci_database_external_non_container_database_operations_insights_management} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_external_non_container_database_operations_insights_management',
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
    this._enableOperationsInsights = config.enableOperationsInsights;
    this._externalDatabaseConnectorId = config.externalDatabaseConnectorId;
    this._externalNonContainerDatabaseId = config.externalNonContainerDatabaseId;
    this._id = config.id;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_operations_insights - computed: false, optional: false, required: true
  private _enableOperationsInsights?: boolean | cdktf.IResolvable; 
  public get enableOperationsInsights() {
    return this.getBooleanAttribute('enable_operations_insights');
  }
  public set enableOperationsInsights(value: boolean | cdktf.IResolvable) {
    this._enableOperationsInsights = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableOperationsInsightsInput() {
    return this._enableOperationsInsights;
  }

  // external_database_connector_id - computed: false, optional: false, required: true
  private _externalDatabaseConnectorId?: string; 
  public get externalDatabaseConnectorId() {
    return this.getStringAttribute('external_database_connector_id');
  }
  public set externalDatabaseConnectorId(value: string) {
    this._externalDatabaseConnectorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalDatabaseConnectorIdInput() {
    return this._externalDatabaseConnectorId;
  }

  // external_non_container_database_id - computed: false, optional: false, required: true
  private _externalNonContainerDatabaseId?: string; 
  public get externalNonContainerDatabaseId() {
    return this.getStringAttribute('external_non_container_database_id');
  }
  public set externalNonContainerDatabaseId(value: string) {
    this._externalNonContainerDatabaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalNonContainerDatabaseIdInput() {
    return this._externalNonContainerDatabaseId;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeouts) {
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
      enable_operations_insights: cdktf.booleanToTerraform(this._enableOperationsInsights),
      external_database_connector_id: cdktf.stringToTerraform(this._externalDatabaseConnectorId),
      external_non_container_database_id: cdktf.stringToTerraform(this._externalNonContainerDatabaseId),
      id: cdktf.stringToTerraform(this._id),
      timeouts: databaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}