// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApmSyntheticsOnPremiseVantagePointWorkerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#apm_domain_id ApmSyntheticsOnPremiseVantagePointWorker#apm_domain_id}
  */
  readonly apmDomainId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#configuration_details ApmSyntheticsOnPremiseVantagePointWorker#configuration_details}
  */
  readonly configurationDetails?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#defined_tags ApmSyntheticsOnPremiseVantagePointWorker#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#freeform_tags ApmSyntheticsOnPremiseVantagePointWorker#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#id ApmSyntheticsOnPremiseVantagePointWorker#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#name ApmSyntheticsOnPremiseVantagePointWorker#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#on_premise_vantage_point_id ApmSyntheticsOnPremiseVantagePointWorker#on_premise_vantage_point_id}
  */
  readonly onPremiseVantagePointId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#priority ApmSyntheticsOnPremiseVantagePointWorker#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#resource_principal_token_public_key ApmSyntheticsOnPremiseVantagePointWorker#resource_principal_token_public_key}
  */
  readonly resourcePrincipalTokenPublicKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#status ApmSyntheticsOnPremiseVantagePointWorker#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#version ApmSyntheticsOnPremiseVantagePointWorker#version}
  */
  readonly version: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#worker_type ApmSyntheticsOnPremiseVantagePointWorker#worker_type}
  */
  readonly workerType?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#timeouts ApmSyntheticsOnPremiseVantagePointWorker#timeouts}
  */
  readonly timeouts?: ApmSyntheticsOnPremiseVantagePointWorkerTimeouts;
}
export interface ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfo {
}

export function apmSyntheticsOnPremiseVantagePointWorkerIdentityInfoToTerraform(struct?: ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apmSyntheticsOnPremiseVantagePointWorkerIdentityInfoToHclTerraform(struct?: ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // apm_short_id - computed: true, optional: false, required: false
  public get apmShortId() {
    return this.getStringAttribute('apm_short_id');
  }

  // collector_end_point - computed: true, optional: false, required: false
  public get collectorEndPoint() {
    return this.getStringAttribute('collector_end_point');
  }

  // region_name - computed: true, optional: false, required: false
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
}

export class ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList extends cdktf.ComplexList {

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
  public get(index: number): ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference {
    return new ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStruct {
}

export function apmSyntheticsOnPremiseVantagePointWorkerMonitorListStructToTerraform(struct?: ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apmSyntheticsOnPremiseVantagePointWorkerMonitorListStructToHclTerraform(struct?: ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_run_now - computed: true, optional: false, required: false
  public get isRunNow() {
    return this.getBooleanAttribute('is_run_now');
  }

  // monitor_type - computed: true, optional: false, required: false
  public get monitorType() {
    return this.getStringAttribute('monitor_type');
  }

  // time_assigned - computed: true, optional: false, required: false
  public get timeAssigned() {
    return this.getStringAttribute('time_assigned');
  }
}

export class ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList extends cdktf.ComplexList {

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
  public get(index: number): ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference {
    return new ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApmSyntheticsOnPremiseVantagePointWorkerVersionDetails {
}

export function apmSyntheticsOnPremiseVantagePointWorkerVersionDetailsToTerraform(struct?: ApmSyntheticsOnPremiseVantagePointWorkerVersionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apmSyntheticsOnPremiseVantagePointWorkerVersionDetailsToHclTerraform(struct?: ApmSyntheticsOnPremiseVantagePointWorkerVersionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApmSyntheticsOnPremiseVantagePointWorkerVersionDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmSyntheticsOnPremiseVantagePointWorkerVersionDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // latest_version - computed: true, optional: false, required: false
  public get latestVersion() {
    return this.getStringAttribute('latest_version');
  }

  // min_supported_version - computed: true, optional: false, required: false
  public get minSupportedVersion() {
    return this.getStringAttribute('min_supported_version');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList extends cdktf.ComplexList {

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
  public get(index: number): ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference {
    return new ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApmSyntheticsOnPremiseVantagePointWorkerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#create ApmSyntheticsOnPremiseVantagePointWorker#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#delete ApmSyntheticsOnPremiseVantagePointWorker#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#update ApmSyntheticsOnPremiseVantagePointWorker#update}
  */
  readonly update?: string;
}

export function apmSyntheticsOnPremiseVantagePointWorkerTimeoutsToTerraform(struct?: ApmSyntheticsOnPremiseVantagePointWorkerTimeouts | cdktf.IResolvable): any {
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


export function apmSyntheticsOnPremiseVantagePointWorkerTimeoutsToHclTerraform(struct?: ApmSyntheticsOnPremiseVantagePointWorkerTimeouts | cdktf.IResolvable): any {
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

export class ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApmSyntheticsOnPremiseVantagePointWorkerTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApmSyntheticsOnPremiseVantagePointWorkerTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker oci_apm_synthetics_on_premise_vantage_point_worker}
*/
export class ApmSyntheticsOnPremiseVantagePointWorker extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_apm_synthetics_on_premise_vantage_point_worker";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApmSyntheticsOnPremiseVantagePointWorker resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApmSyntheticsOnPremiseVantagePointWorker to import
  * @param importFromId The id of the existing ApmSyntheticsOnPremiseVantagePointWorker that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApmSyntheticsOnPremiseVantagePointWorker to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_apm_synthetics_on_premise_vantage_point_worker", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker oci_apm_synthetics_on_premise_vantage_point_worker} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApmSyntheticsOnPremiseVantagePointWorkerConfig
  */
  public constructor(scope: Construct, id: string, config: ApmSyntheticsOnPremiseVantagePointWorkerConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_apm_synthetics_on_premise_vantage_point_worker',
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
    this._apmDomainId = config.apmDomainId;
    this._configurationDetails = config.configurationDetails;
    this._definedTags = config.definedTags;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._name = config.name;
    this._onPremiseVantagePointId = config.onPremiseVantagePointId;
    this._priority = config.priority;
    this._resourcePrincipalTokenPublicKey = config.resourcePrincipalTokenPublicKey;
    this._status = config.status;
    this._version = config.version;
    this._workerType = config.workerType;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apm_domain_id - computed: false, optional: false, required: true
  private _apmDomainId?: string; 
  public get apmDomainId() {
    return this.getStringAttribute('apm_domain_id');
  }
  public set apmDomainId(value: string) {
    this._apmDomainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apmDomainIdInput() {
    return this._apmDomainId;
  }

  // configuration_details - computed: true, optional: true, required: false
  private _configurationDetails?: string; 
  public get configurationDetails() {
    return this.getStringAttribute('configuration_details');
  }
  public set configurationDetails(value: string) {
    this._configurationDetails = value;
  }
  public resetConfigurationDetails() {
    this._configurationDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationDetailsInput() {
    return this._configurationDetails;
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

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
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

  // geo_info - computed: true, optional: false, required: false
  public get geoInfo() {
    return this.getStringAttribute('geo_info');
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

  // identity_info - computed: true, optional: false, required: false
  private _identityInfo = new ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList(this, "identity_info", false);
  public get identityInfo() {
    return this._identityInfo;
  }

  // monitor_list - computed: true, optional: false, required: false
  private _monitorList = new ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList(this, "monitor_list", false);
  public get monitorList() {
    return this._monitorList;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // on_premise_vantage_point_id - computed: false, optional: false, required: true
  private _onPremiseVantagePointId?: string; 
  public get onPremiseVantagePointId() {
    return this.getStringAttribute('on_premise_vantage_point_id');
  }
  public set onPremiseVantagePointId(value: string) {
    this._onPremiseVantagePointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get onPremiseVantagePointIdInput() {
    return this._onPremiseVantagePointId;
  }

  // opvp_id - computed: true, optional: false, required: false
  public get opvpId() {
    return this.getStringAttribute('opvp_id');
  }

  // opvp_name - computed: true, optional: false, required: false
  public get opvpName() {
    return this.getStringAttribute('opvp_name');
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // resource_principal_token_public_key - computed: false, optional: false, required: true
  private _resourcePrincipalTokenPublicKey?: string; 
  public get resourcePrincipalTokenPublicKey() {
    return this.getStringAttribute('resource_principal_token_public_key');
  }
  public set resourcePrincipalTokenPublicKey(value: string) {
    this._resourcePrincipalTokenPublicKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePrincipalTokenPublicKeyInput() {
    return this._resourcePrincipalTokenPublicKey;
  }

  // runtime_id - computed: true, optional: false, required: false
  public get runtimeId() {
    return this.getStringAttribute('runtime_id');
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_last_sync_up - computed: true, optional: false, required: false
  public get timeLastSyncUp() {
    return this.getStringAttribute('time_last_sync_up');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // version_details - computed: true, optional: false, required: false
  private _versionDetails = new ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList(this, "version_details", false);
  public get versionDetails() {
    return this._versionDetails;
  }

  // worker_type - computed: true, optional: true, required: false
  private _workerType?: string; 
  public get workerType() {
    return this.getStringAttribute('worker_type');
  }
  public set workerType(value: string) {
    this._workerType = value;
  }
  public resetWorkerType() {
    this._workerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerTypeInput() {
    return this._workerType;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApmSyntheticsOnPremiseVantagePointWorkerTimeouts) {
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
      apm_domain_id: cdktf.stringToTerraform(this._apmDomainId),
      configuration_details: cdktf.stringToTerraform(this._configurationDetails),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      on_premise_vantage_point_id: cdktf.stringToTerraform(this._onPremiseVantagePointId),
      priority: cdktf.numberToTerraform(this._priority),
      resource_principal_token_public_key: cdktf.stringToTerraform(this._resourcePrincipalTokenPublicKey),
      status: cdktf.stringToTerraform(this._status),
      version: cdktf.stringToTerraform(this._version),
      worker_type: cdktf.stringToTerraform(this._workerType),
      timeouts: apmSyntheticsOnPremiseVantagePointWorkerTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apm_domain_id: {
        value: cdktf.stringToHclTerraform(this._apmDomainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration_details: {
        value: cdktf.stringToHclTerraform(this._configurationDetails),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on_premise_vantage_point_id: {
        value: cdktf.stringToHclTerraform(this._onPremiseVantagePointId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resource_principal_token_public_key: {
        value: cdktf.stringToHclTerraform(this._resourcePrincipalTokenPublicKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      worker_type: {
        value: cdktf.stringToHclTerraform(this._workerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: apmSyntheticsOnPremiseVantagePointWorkerTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApmSyntheticsOnPremiseVantagePointWorkerTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
