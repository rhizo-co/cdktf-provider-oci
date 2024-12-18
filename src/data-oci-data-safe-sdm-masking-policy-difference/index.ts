// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataSafeSdmMaskingPolicyDifferenceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference#sdm_masking_policy_difference_id DataOciDataSafeSdmMaskingPolicyDifference#sdm_masking_policy_difference_id}
  */
  readonly sdmMaskingPolicyDifferenceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference oci_data_safe_sdm_masking_policy_difference}
*/
export class DataOciDataSafeSdmMaskingPolicyDifference extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_sdm_masking_policy_difference";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDataSafeSdmMaskingPolicyDifference resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDataSafeSdmMaskingPolicyDifference to import
  * @param importFromId The id of the existing DataOciDataSafeSdmMaskingPolicyDifference that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDataSafeSdmMaskingPolicyDifference to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_sdm_masking_policy_difference", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference oci_data_safe_sdm_masking_policy_difference} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataSafeSdmMaskingPolicyDifferenceConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataSafeSdmMaskingPolicyDifferenceConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_sdm_masking_policy_difference',
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
    this._sdmMaskingPolicyDifferenceId = config.sdmMaskingPolicyDifferenceId;
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

  // difference_type - computed: true, optional: false, required: false
  public get differenceType() {
    return this.getStringAttribute('difference_type');
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

  // masking_policy_id - computed: true, optional: false, required: false
  public get maskingPolicyId() {
    return this.getStringAttribute('masking_policy_id');
  }

  // sdm_masking_policy_difference_id - computed: false, optional: false, required: true
  private _sdmMaskingPolicyDifferenceId?: string; 
  public get sdmMaskingPolicyDifferenceId() {
    return this.getStringAttribute('sdm_masking_policy_difference_id');
  }
  public set sdmMaskingPolicyDifferenceId(value: string) {
    this._sdmMaskingPolicyDifferenceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sdmMaskingPolicyDifferenceIdInput() {
    return this._sdmMaskingPolicyDifferenceId;
  }

  // sensitive_data_model_id - computed: true, optional: false, required: false
  public get sensitiveDataModelId() {
    return this.getStringAttribute('sensitive_data_model_id');
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

  // time_creation_started - computed: true, optional: false, required: false
  public get timeCreationStarted() {
    return this.getStringAttribute('time_creation_started');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      sdm_masking_policy_difference_id: cdktf.stringToTerraform(this._sdmMaskingPolicyDifferenceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      sdm_masking_policy_difference_id: {
        value: cdktf.stringToHclTerraform(this._sdmMaskingPolicyDifferenceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
