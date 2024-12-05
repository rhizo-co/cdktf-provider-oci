// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_data_masking_activity
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_data_masking_activity#data_masking_activity_id DataOciFusionAppsFusionEnvironmentDataMaskingActivity#data_masking_activity_id}
  */
  readonly dataMaskingActivityId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_data_masking_activity#fusion_environment_id DataOciFusionAppsFusionEnvironmentDataMaskingActivity#fusion_environment_id}
  */
  readonly fusionEnvironmentId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_data_masking_activity oci_fusion_apps_fusion_environment_data_masking_activity}
*/
export class DataOciFusionAppsFusionEnvironmentDataMaskingActivity extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_fusion_apps_fusion_environment_data_masking_activity";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_data_masking_activity oci_fusion_apps_fusion_environment_data_masking_activity} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_fusion_apps_fusion_environment_data_masking_activity',
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
    this._dataMaskingActivityId = config.dataMaskingActivityId;
    this._fusionEnvironmentId = config.fusionEnvironmentId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_masking_activity_id - computed: false, optional: false, required: true
  private _dataMaskingActivityId?: string; 
  public get dataMaskingActivityId() {
    return this.getStringAttribute('data_masking_activity_id');
  }
  public set dataMaskingActivityId(value: string) {
    this._dataMaskingActivityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataMaskingActivityIdInput() {
    return this._dataMaskingActivityId;
  }

  // fusion_environment_id - computed: false, optional: false, required: true
  private _fusionEnvironmentId?: string; 
  public get fusionEnvironmentId() {
    return this.getStringAttribute('fusion_environment_id');
  }
  public set fusionEnvironmentId(value: string) {
    this._fusionEnvironmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fusionEnvironmentIdInput() {
    return this._fusionEnvironmentId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_resume_data_masking - computed: true, optional: false, required: false
  public get isResumeDataMasking() {
    return this.getBooleanAttribute('is_resume_data_masking');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_masking_finish - computed: true, optional: false, required: false
  public get timeMaskingFinish() {
    return this.getStringAttribute('time_masking_finish');
  }

  // time_masking_start - computed: true, optional: false, required: false
  public get timeMaskingStart() {
    return this.getStringAttribute('time_masking_start');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_masking_activity_id: cdktf.stringToTerraform(this._dataMaskingActivityId),
      fusion_environment_id: cdktf.stringToTerraform(this._fusionEnvironmentId),
    };
  }
}
