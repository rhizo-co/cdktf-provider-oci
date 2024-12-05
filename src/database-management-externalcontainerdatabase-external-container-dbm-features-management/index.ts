// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalcontainerdatabase_external_container_dbm_features_management
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalcontainerdatabase_external_container_dbm_features_management#enable_external_container_dbm_feature DatabaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagement#enable_external_container_dbm_feature}
  */
  readonly enableExternalContainerDbmFeature: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalcontainerdatabase_external_container_dbm_features_management#external_container_database_id DatabaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagement#external_container_database_id}
  */
  readonly externalContainerDatabaseId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalcontainerdatabase_external_container_dbm_features_management#id DatabaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * feature_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalcontainerdatabase_external_container_dbm_features_management#feature_details DatabaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagement#feature_details}
  */
  readonly featureDetails?: DatabaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagementFeatureDetails;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalcontainerdatabase_external_container_dbm_features_management#timeouts DatabaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagement#timeouts}
  */
  readonly timeouts?: DatabaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagementTimeouts;
}
export interface DatabaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagementFeatureDetailsConnectorDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalcontainerdatabase_external_container_dbm_features_management#connector_type DatabaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagement#connector_type}
  */
  readonly connectorType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalcontainerdatabase_external_container_dbm_features_management#database_connector_id DatabaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagement#database_connector_id}
  */
  readonly databaseConnectorId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalcontainerdatabase_external_container_dbm_features_management#management_agent_id DatabaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagement#management_agent_id}
  */
  readonly managementAgentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalcontainerdatabase_external_container_dbm_features_management#private_end_point_id DatabaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagement#private_end_point_id}
  */
  readonly privateEndPointId?: string;
}

export function databaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsToTerraform(struct?: DatabaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference | DatabaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagementFeatureDetailsConnectorDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connector_type: cdktf.stringToTerraform(struct!.connectorType),
    database_connector_id: cdktf.stringToTerraform(struct!.databaseConnectorId),
    management_agent_id: cdktf.stringToTerraform(struct!.managementAgentId),
    private_end_point_id: cdktf.stringToTerraform(struct!.privateEndPointId),
  }
}


export function databaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsToHclTerraform(struct?: DatabaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference | DatabaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagementFeatureDetailsConnectorDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connector_type: {
      value: cdktf.stringToHclTerraform(struct!.connectorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_connector_id: {
      value: cdktf.stringToHclTerraform(struct!.databaseConnectorId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    management_agent_id: {
      value: cdktf.stringToHclTerraform(struct!.managementAgentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_end_point_id: {
      value: cdktf.stringToHclTerraform(struct!.privateEndPointId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagementFeatureDetailsConnectorDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorType = this._connectorType;
    }
    if (this._databaseConnectorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseConnectorId = this._databaseConnectorId;
    }
    if (this._managementAgentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementAgentId = this._managementAgentId;
    }
    if (this._privateEndPointId !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateEndPointId = this._privateEndPointId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagementFeatureDetailsConnectorDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectorType = undefined;
      this._databaseConnectorId = undefined;
      this._managementAgentId = undefined;
      this._privateEndPointId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectorType = value.connectorType;
      this._databaseConnectorId = value.databaseConnectorId;
      this._managementAgentId = value.managementAgentId;
      this._privateEndPointId = value.privateEndPointId;
    }
  }

  // connector_type - computed: true, optional: true, required: false
  private _connectorType?: string; 
  public get connectorType() {
    return this.getStringAttribute('connector_type');
  }
  public set connectorType(value: string) {
    this._connectorType = value;
  }
  public resetConnectorType() {
    this._connectorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorTypeInput() {
    return this._connectorType;
  }

  // database_connector_id - computed: true, optional: true, required: false
  private _databaseConnectorId?: string; 
  public get databaseConnectorId() {
    return this.getStringAttribute('database_connector_id');
  }
  public set databaseConnectorId(value: string) {
    this._databaseConnectorId = value;
  }
  public resetDatabaseConnectorId() {
    this._databaseConnectorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseConnectorIdInput() {
    return this._databaseConnectorId;
  }

  // management_agent_id - computed: true, optional: true, required: false
  private _managementAgentId?: string; 
  public get managementAgentId() {
    return this.getStringAttribute('management_agent_id');
  }
  public set managementAgentId(value: string) {
    this._managementAgentId = value;
  }
  public resetManagementAgentId() {
    this._managementAgentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementAgentIdInput() {
    return this._managementAgentId;
  }

  // private_end_point_id - computed: true, optional: true, required: false
  private _privateEndPointId?: string; 
  public get privateEndPointId() {
    return this.getStringAttribute('private_end_point_id');
  }
  public set privateEndPointId(value: string) {
    this._privateEndPointId = value;
  }
  public resetPrivateEndPointId() {
    this._privateEndPointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateEndPointIdInput() {
    return this._privateEndPointId;
  }
}
export interface DatabaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagementFeatureDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalcontainerdatabase_external_container_dbm_features_management#feature DatabaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagement#feature}
  */
  readonly feature: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalcontainerdatabase_external_container_dbm_features_management#license_model DatabaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagement#license_model}
  */
  readonly licenseModel?: string;
  /**
  * connector_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalcontainerdatabase_external_container_dbm_features_management#connector_details DatabaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagement#connector_details}
  */
  readonly connectorDetails?: DatabaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagementFeatureDetailsConnectorDetails;
}

export function databaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagementFeatureDetailsToTerraform(struct?: DatabaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagementFeatureDetailsOutputReference | DatabaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagementFeatureDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    feature: cdktf.stringToTerraform(struct!.feature),
    license_model: cdktf.stringToTerraform(struct!.licenseModel),
    connector_details: databaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsToTerraform(struct!.connectorDetails),
  }
}


export function databaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagementFeatureDetailsToHclTerraform(struct?: DatabaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagementFeatureDetailsOutputReference | DatabaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagementFeatureDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    feature: {
      value: cdktf.stringToHclTerraform(struct!.feature),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    license_model: {
      value: cdktf.stringToHclTerraform(struct!.licenseModel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connector_details: {
      value: databaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsToHclTerraform(struct!.connectorDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagementFeatureDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagementFeatureDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._feature !== undefined) {
      hasAnyValues = true;
      internalValueResult.feature = this._feature;
    }
    if (this._licenseModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseModel = this._licenseModel;
    }
    if (this._connectorDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorDetails = this._connectorDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagementFeatureDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._feature = undefined;
      this._licenseModel = undefined;
      this._connectorDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._feature = value.feature;
      this._licenseModel = value.licenseModel;
      this._connectorDetails.internalValue = value.connectorDetails;
    }
  }

  // feature - computed: false, optional: false, required: true
  private _feature?: string; 
  public get feature() {
    return this.getStringAttribute('feature');
  }
  public set feature(value: string) {
    this._feature = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureInput() {
    return this._feature;
  }

  // license_model - computed: true, optional: true, required: false
  private _licenseModel?: string; 
  public get licenseModel() {
    return this.getStringAttribute('license_model');
  }
  public set licenseModel(value: string) {
    this._licenseModel = value;
  }
  public resetLicenseModel() {
    this._licenseModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseModelInput() {
    return this._licenseModel;
  }

  // connector_details - computed: false, optional: true, required: false
  private _connectorDetails = new DatabaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference(this, "connector_details");
  public get connectorDetails() {
    return this._connectorDetails;
  }
  public putConnectorDetails(value: DatabaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagementFeatureDetailsConnectorDetails) {
    this._connectorDetails.internalValue = value;
  }
  public resetConnectorDetails() {
    this._connectorDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorDetailsInput() {
    return this._connectorDetails.internalValue;
  }
}
export interface DatabaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagementTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalcontainerdatabase_external_container_dbm_features_management#create DatabaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagement#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalcontainerdatabase_external_container_dbm_features_management#delete DatabaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagement#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalcontainerdatabase_external_container_dbm_features_management#update DatabaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagement#update}
  */
  readonly update?: string;
}

export function databaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagementTimeoutsToTerraform(struct?: DatabaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagementTimeouts | cdktf.IResolvable): any {
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


export function databaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagementTimeoutsToHclTerraform(struct?: DatabaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagementTimeouts | cdktf.IResolvable): any {
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

export class DatabaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagementTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagementTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatabaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagementTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalcontainerdatabase_external_container_dbm_features_management oci_database_management_externalcontainerdatabase_external_container_dbm_features_management}
*/
export class DatabaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_management_externalcontainerdatabase_external_container_dbm_features_management";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagement to import
  * @param importFromId The id of the existing DatabaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagement that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalcontainerdatabase_external_container_dbm_features_management#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_management_externalcontainerdatabase_external_container_dbm_features_management", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalcontainerdatabase_external_container_dbm_features_management oci_database_management_externalcontainerdatabase_external_container_dbm_features_management} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagementConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagementConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_management_externalcontainerdatabase_external_container_dbm_features_management',
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
    this._enableExternalContainerDbmFeature = config.enableExternalContainerDbmFeature;
    this._externalContainerDatabaseId = config.externalContainerDatabaseId;
    this._id = config.id;
    this._featureDetails.internalValue = config.featureDetails;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_external_container_dbm_feature - computed: false, optional: false, required: true
  private _enableExternalContainerDbmFeature?: boolean | cdktf.IResolvable; 
  public get enableExternalContainerDbmFeature() {
    return this.getBooleanAttribute('enable_external_container_dbm_feature');
  }
  public set enableExternalContainerDbmFeature(value: boolean | cdktf.IResolvable) {
    this._enableExternalContainerDbmFeature = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableExternalContainerDbmFeatureInput() {
    return this._enableExternalContainerDbmFeature;
  }

  // external_container_database_id - computed: false, optional: false, required: true
  private _externalContainerDatabaseId?: string; 
  public get externalContainerDatabaseId() {
    return this.getStringAttribute('external_container_database_id');
  }
  public set externalContainerDatabaseId(value: string) {
    this._externalContainerDatabaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalContainerDatabaseIdInput() {
    return this._externalContainerDatabaseId;
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

  // feature_details - computed: false, optional: true, required: false
  private _featureDetails = new DatabaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagementFeatureDetailsOutputReference(this, "feature_details");
  public get featureDetails() {
    return this._featureDetails;
  }
  public putFeatureDetails(value: DatabaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagementFeatureDetails) {
    this._featureDetails.internalValue = value;
  }
  public resetFeatureDetails() {
    this._featureDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureDetailsInput() {
    return this._featureDetails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatabaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagementTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatabaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagementTimeouts) {
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
      enable_external_container_dbm_feature: cdktf.booleanToTerraform(this._enableExternalContainerDbmFeature),
      external_container_database_id: cdktf.stringToTerraform(this._externalContainerDatabaseId),
      id: cdktf.stringToTerraform(this._id),
      feature_details: databaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagementFeatureDetailsToTerraform(this._featureDetails.internalValue),
      timeouts: databaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagementTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_external_container_dbm_feature: {
        value: cdktf.booleanToHclTerraform(this._enableExternalContainerDbmFeature),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      external_container_database_id: {
        value: cdktf.stringToHclTerraform(this._externalContainerDatabaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      feature_details: {
        value: databaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagementFeatureDetailsToHclTerraform(this._featureDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagementFeatureDetailsList",
      },
      timeouts: {
        value: databaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagementTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabaseManagementExternalcontainerdatabaseExternalContainerDbmFeaturesManagementTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
