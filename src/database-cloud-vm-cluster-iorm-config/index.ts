// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseCloudVmClusterIormConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#cloud_vm_cluster_id DatabaseCloudVmClusterIormConfig#cloud_vm_cluster_id}
  */
  readonly cloudVmClusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#id DatabaseCloudVmClusterIormConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#objective DatabaseCloudVmClusterIormConfig#objective}
  */
  readonly objective?: string;
  /**
  * db_plans block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#db_plans DatabaseCloudVmClusterIormConfig#db_plans}
  */
  readonly dbPlans: DatabaseCloudVmClusterIormConfigDbPlans[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#timeouts DatabaseCloudVmClusterIormConfig#timeouts}
  */
  readonly timeouts?: DatabaseCloudVmClusterIormConfigTimeouts;
}
export interface DatabaseCloudVmClusterIormConfigDbPlans {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#db_name DatabaseCloudVmClusterIormConfig#db_name}
  */
  readonly dbName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#share DatabaseCloudVmClusterIormConfig#share}
  */
  readonly share: number;
}

export function databaseCloudVmClusterIormConfigDbPlansToTerraform(struct?: DatabaseCloudVmClusterIormConfigDbPlans | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    db_name: cdktf.stringToTerraform(struct!.dbName),
    share: cdktf.numberToTerraform(struct!.share),
  }
}

export class DatabaseCloudVmClusterIormConfigDbPlansOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DatabaseCloudVmClusterIormConfigDbPlans | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dbName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbName = this._dbName;
    }
    if (this._share !== undefined) {
      hasAnyValues = true;
      internalValueResult.share = this._share;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseCloudVmClusterIormConfigDbPlans | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dbName = undefined;
      this._share = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dbName = value.dbName;
      this._share = value.share;
    }
  }

  // db_name - computed: false, optional: false, required: true
  private _dbName?: string; 
  public get dbName() {
    return this.getStringAttribute('db_name');
  }
  public set dbName(value: string) {
    this._dbName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNameInput() {
    return this._dbName;
  }

  // flash_cache_limit - computed: true, optional: false, required: false
  public get flashCacheLimit() {
    return this.getStringAttribute('flash_cache_limit');
  }

  // share - computed: false, optional: false, required: true
  private _share?: number; 
  public get share() {
    return this.getNumberAttribute('share');
  }
  public set share(value: number) {
    this._share = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shareInput() {
    return this._share;
  }
}

export class DatabaseCloudVmClusterIormConfigDbPlansList extends cdktf.ComplexList {
  public internalValue? : DatabaseCloudVmClusterIormConfigDbPlans[] | cdktf.IResolvable

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
  public get(index: number): DatabaseCloudVmClusterIormConfigDbPlansOutputReference {
    return new DatabaseCloudVmClusterIormConfigDbPlansOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseCloudVmClusterIormConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#create DatabaseCloudVmClusterIormConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#delete DatabaseCloudVmClusterIormConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#update DatabaseCloudVmClusterIormConfig#update}
  */
  readonly update?: string;
}

export function databaseCloudVmClusterIormConfigTimeoutsToTerraform(struct?: DatabaseCloudVmClusterIormConfigTimeouts | cdktf.IResolvable): any {
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

export class DatabaseCloudVmClusterIormConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseCloudVmClusterIormConfigTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatabaseCloudVmClusterIormConfigTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config oci_database_cloud_vm_cluster_iorm_config}
*/
export class DatabaseCloudVmClusterIormConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_cloud_vm_cluster_iorm_config";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config oci_database_cloud_vm_cluster_iorm_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseCloudVmClusterIormConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseCloudVmClusterIormConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_cloud_vm_cluster_iorm_config',
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
    this._cloudVmClusterId = config.cloudVmClusterId;
    this._id = config.id;
    this._objective = config.objective;
    this._dbPlans.internalValue = config.dbPlans;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_vm_cluster_id - computed: false, optional: false, required: true
  private _cloudVmClusterId?: string; 
  public get cloudVmClusterId() {
    return this.getStringAttribute('cloud_vm_cluster_id');
  }
  public set cloudVmClusterId(value: string) {
    this._cloudVmClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudVmClusterIdInput() {
    return this._cloudVmClusterId;
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

  // objective - computed: true, optional: true, required: false
  private _objective?: string; 
  public get objective() {
    return this.getStringAttribute('objective');
  }
  public set objective(value: string) {
    this._objective = value;
  }
  public resetObjective() {
    this._objective = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectiveInput() {
    return this._objective;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // db_plans - computed: false, optional: false, required: true
  private _dbPlans = new DatabaseCloudVmClusterIormConfigDbPlansList(this, "db_plans", true);
  public get dbPlans() {
    return this._dbPlans;
  }
  public putDbPlans(value: DatabaseCloudVmClusterIormConfigDbPlans[] | cdktf.IResolvable) {
    this._dbPlans.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbPlansInput() {
    return this._dbPlans.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatabaseCloudVmClusterIormConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatabaseCloudVmClusterIormConfigTimeouts) {
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
      cloud_vm_cluster_id: cdktf.stringToTerraform(this._cloudVmClusterId),
      id: cdktf.stringToTerraform(this._id),
      objective: cdktf.stringToTerraform(this._objective),
      db_plans: cdktf.listMapper(databaseCloudVmClusterIormConfigDbPlansToTerraform, true)(this._dbPlans.internalValue),
      timeouts: databaseCloudVmClusterIormConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
