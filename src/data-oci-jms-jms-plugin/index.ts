// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugin
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciJmsJmsPluginConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugin#jms_plugin_id DataOciJmsJmsPlugin#jms_plugin_id}
  */
  readonly jmsPluginId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugin oci_jms_jms_plugin}
*/
export class DataOciJmsJmsPlugin extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_jms_jms_plugin";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugin oci_jms_jms_plugin} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciJmsJmsPluginConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciJmsJmsPluginConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_jms_jms_plugin',
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
    this._jmsPluginId = config.jmsPluginId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_id - computed: true, optional: false, required: false
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }

  // agent_type - computed: true, optional: false, required: false
  public get agentType() {
    return this.getStringAttribute('agent_type');
  }

  // availability_status - computed: true, optional: false, required: false
  public get availabilityStatus() {
    return this.getStringAttribute('availability_status');
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

  // fleet_id - computed: true, optional: false, required: false
  public get fleetId() {
    return this.getStringAttribute('fleet_id');
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

  // jms_plugin_id - computed: false, optional: false, required: true
  private _jmsPluginId?: string; 
  public get jmsPluginId() {
    return this.getStringAttribute('jms_plugin_id');
  }
  public set jmsPluginId(value: string) {
    this._jmsPluginId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jmsPluginIdInput() {
    return this._jmsPluginId;
  }

  // os_architecture - computed: true, optional: false, required: false
  public get osArchitecture() {
    return this.getStringAttribute('os_architecture');
  }

  // os_distribution - computed: true, optional: false, required: false
  public get osDistribution() {
    return this.getStringAttribute('os_distribution');
  }

  // os_family - computed: true, optional: false, required: false
  public get osFamily() {
    return this.getStringAttribute('os_family');
  }

  // plugin_version - computed: true, optional: false, required: false
  public get pluginVersion() {
    return this.getStringAttribute('plugin_version');
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

  // time_last_seen - computed: true, optional: false, required: false
  public get timeLastSeen() {
    return this.getStringAttribute('time_last_seen');
  }

  // time_registered - computed: true, optional: false, required: false
  public get timeRegistered() {
    return this.getStringAttribute('time_registered');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      jms_plugin_id: cdktf.stringToTerraform(this._jmsPluginId),
    };
  }
}
