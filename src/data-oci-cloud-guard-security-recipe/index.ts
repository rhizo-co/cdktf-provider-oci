// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_security_recipe
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCloudGuardSecurityRecipeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_security_recipe#security_recipe_id DataOciCloudGuardSecurityRecipe#security_recipe_id}
  */
  readonly securityRecipeId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_security_recipe oci_cloud_guard_security_recipe}
*/
export class DataOciCloudGuardSecurityRecipe extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_cloud_guard_security_recipe";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_security_recipe oci_cloud_guard_security_recipe} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCloudGuardSecurityRecipeConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciCloudGuardSecurityRecipeConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_cloud_guard_security_recipe',
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
    this._securityRecipeId = config.securityRecipeId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
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

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // security_policies - computed: true, optional: false, required: false
  public get securityPolicies() {
    return this.getListAttribute('security_policies');
  }

  // security_recipe_id - computed: false, optional: false, required: true
  private _securityRecipeId?: string; 
  public get securityRecipeId() {
    return this.getStringAttribute('security_recipe_id');
  }
  public set securityRecipeId(value: string) {
    this._securityRecipeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityRecipeIdInput() {
    return this._securityRecipeId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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
      security_recipe_id: cdktf.stringToTerraform(this._securityRecipeId),
    };
  }
}
