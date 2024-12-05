// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BdsBdsInstancePatchActionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#bds_instance_id BdsBdsInstancePatchAction#bds_instance_id}
  */
  readonly bdsInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#cluster_admin_password BdsBdsInstancePatchAction#cluster_admin_password}
  */
  readonly clusterAdminPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#id BdsBdsInstancePatchAction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#version BdsBdsInstancePatchAction#version}
  */
  readonly version: string;
  /**
  * patching_config block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#patching_config BdsBdsInstancePatchAction#patching_config}
  */
  readonly patchingConfig?: BdsBdsInstancePatchActionPatchingConfig;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#timeouts BdsBdsInstancePatchAction#timeouts}
  */
  readonly timeouts?: BdsBdsInstancePatchActionTimeouts;
}
export interface BdsBdsInstancePatchActionPatchingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#batch_size BdsBdsInstancePatchAction#batch_size}
  */
  readonly batchSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#patching_config_strategy BdsBdsInstancePatchAction#patching_config_strategy}
  */
  readonly patchingConfigStrategy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#wait_time_between_batch_in_seconds BdsBdsInstancePatchAction#wait_time_between_batch_in_seconds}
  */
  readonly waitTimeBetweenBatchInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#wait_time_between_domain_in_seconds BdsBdsInstancePatchAction#wait_time_between_domain_in_seconds}
  */
  readonly waitTimeBetweenDomainInSeconds?: number;
}

export function bdsBdsInstancePatchActionPatchingConfigToTerraform(struct?: BdsBdsInstancePatchActionPatchingConfigOutputReference | BdsBdsInstancePatchActionPatchingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_size: cdktf.numberToTerraform(struct!.batchSize),
    patching_config_strategy: cdktf.stringToTerraform(struct!.patchingConfigStrategy),
    wait_time_between_batch_in_seconds: cdktf.numberToTerraform(struct!.waitTimeBetweenBatchInSeconds),
    wait_time_between_domain_in_seconds: cdktf.numberToTerraform(struct!.waitTimeBetweenDomainInSeconds),
  }
}

export class BdsBdsInstancePatchActionPatchingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BdsBdsInstancePatchActionPatchingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSize = this._batchSize;
    }
    if (this._patchingConfigStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.patchingConfigStrategy = this._patchingConfigStrategy;
    }
    if (this._waitTimeBetweenBatchInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitTimeBetweenBatchInSeconds = this._waitTimeBetweenBatchInSeconds;
    }
    if (this._waitTimeBetweenDomainInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitTimeBetweenDomainInSeconds = this._waitTimeBetweenDomainInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BdsBdsInstancePatchActionPatchingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._batchSize = undefined;
      this._patchingConfigStrategy = undefined;
      this._waitTimeBetweenBatchInSeconds = undefined;
      this._waitTimeBetweenDomainInSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._batchSize = value.batchSize;
      this._patchingConfigStrategy = value.patchingConfigStrategy;
      this._waitTimeBetweenBatchInSeconds = value.waitTimeBetweenBatchInSeconds;
      this._waitTimeBetweenDomainInSeconds = value.waitTimeBetweenDomainInSeconds;
    }
  }

  // batch_size - computed: true, optional: true, required: false
  private _batchSize?: number; 
  public get batchSize() {
    return this.getNumberAttribute('batch_size');
  }
  public set batchSize(value: number) {
    this._batchSize = value;
  }
  public resetBatchSize() {
    this._batchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizeInput() {
    return this._batchSize;
  }

  // patching_config_strategy - computed: false, optional: false, required: true
  private _patchingConfigStrategy?: string; 
  public get patchingConfigStrategy() {
    return this.getStringAttribute('patching_config_strategy');
  }
  public set patchingConfigStrategy(value: string) {
    this._patchingConfigStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patchingConfigStrategyInput() {
    return this._patchingConfigStrategy;
  }

  // wait_time_between_batch_in_seconds - computed: true, optional: true, required: false
  private _waitTimeBetweenBatchInSeconds?: number; 
  public get waitTimeBetweenBatchInSeconds() {
    return this.getNumberAttribute('wait_time_between_batch_in_seconds');
  }
  public set waitTimeBetweenBatchInSeconds(value: number) {
    this._waitTimeBetweenBatchInSeconds = value;
  }
  public resetWaitTimeBetweenBatchInSeconds() {
    this._waitTimeBetweenBatchInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitTimeBetweenBatchInSecondsInput() {
    return this._waitTimeBetweenBatchInSeconds;
  }

  // wait_time_between_domain_in_seconds - computed: true, optional: true, required: false
  private _waitTimeBetweenDomainInSeconds?: number; 
  public get waitTimeBetweenDomainInSeconds() {
    return this.getNumberAttribute('wait_time_between_domain_in_seconds');
  }
  public set waitTimeBetweenDomainInSeconds(value: number) {
    this._waitTimeBetweenDomainInSeconds = value;
  }
  public resetWaitTimeBetweenDomainInSeconds() {
    this._waitTimeBetweenDomainInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitTimeBetweenDomainInSecondsInput() {
    return this._waitTimeBetweenDomainInSeconds;
  }
}
export interface BdsBdsInstancePatchActionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#create BdsBdsInstancePatchAction#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#delete BdsBdsInstancePatchAction#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#update BdsBdsInstancePatchAction#update}
  */
  readonly update?: string;
}

export function bdsBdsInstancePatchActionTimeoutsToTerraform(struct?: BdsBdsInstancePatchActionTimeouts | cdktf.IResolvable): any {
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

export class BdsBdsInstancePatchActionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BdsBdsInstancePatchActionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BdsBdsInstancePatchActionTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action oci_bds_bds_instance_patch_action}
*/
export class BdsBdsInstancePatchAction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_bds_bds_instance_patch_action";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action oci_bds_bds_instance_patch_action} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BdsBdsInstancePatchActionConfig
  */
  public constructor(scope: Construct, id: string, config: BdsBdsInstancePatchActionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_bds_bds_instance_patch_action',
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
    this._bdsInstanceId = config.bdsInstanceId;
    this._clusterAdminPassword = config.clusterAdminPassword;
    this._id = config.id;
    this._version = config.version;
    this._patchingConfig.internalValue = config.patchingConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bds_instance_id - computed: false, optional: false, required: true
  private _bdsInstanceId?: string; 
  public get bdsInstanceId() {
    return this.getStringAttribute('bds_instance_id');
  }
  public set bdsInstanceId(value: string) {
    this._bdsInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bdsInstanceIdInput() {
    return this._bdsInstanceId;
  }

  // cluster_admin_password - computed: false, optional: false, required: true
  private _clusterAdminPassword?: string; 
  public get clusterAdminPassword() {
    return this.getStringAttribute('cluster_admin_password');
  }
  public set clusterAdminPassword(value: string) {
    this._clusterAdminPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterAdminPasswordInput() {
    return this._clusterAdminPassword;
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

  // patching_config - computed: false, optional: true, required: false
  private _patchingConfig = new BdsBdsInstancePatchActionPatchingConfigOutputReference(this, "patching_config");
  public get patchingConfig() {
    return this._patchingConfig;
  }
  public putPatchingConfig(value: BdsBdsInstancePatchActionPatchingConfig) {
    this._patchingConfig.internalValue = value;
  }
  public resetPatchingConfig() {
    this._patchingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchingConfigInput() {
    return this._patchingConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BdsBdsInstancePatchActionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BdsBdsInstancePatchActionTimeouts) {
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
      bds_instance_id: cdktf.stringToTerraform(this._bdsInstanceId),
      cluster_admin_password: cdktf.stringToTerraform(this._clusterAdminPassword),
      id: cdktf.stringToTerraform(this._id),
      version: cdktf.stringToTerraform(this._version),
      patching_config: bdsBdsInstancePatchActionPatchingConfigToTerraform(this._patchingConfig.internalValue),
      timeouts: bdsBdsInstancePatchActionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
