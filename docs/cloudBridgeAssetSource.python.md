# `cloudBridgeAssetSource` Submodule <a name="`cloudBridgeAssetSource` Submodule" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudBridgeAssetSource <a name="CloudBridgeAssetSource" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source oci_cloud_bridge_asset_source}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_bridge_asset_source

cloudBridgeAssetSource.CloudBridgeAssetSource(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  assets_compartment_id: str,
  compartment_id: str,
  discovery_credentials: CloudBridgeAssetSourceDiscoveryCredentials,
  environment_id: str,
  inventory_id: str,
  type: str,
  vcenter_endpoint: str,
  are_historical_metrics_collected: typing.Union[bool, IResolvable] = None,
  are_realtime_metrics_collected: typing.Union[bool, IResolvable] = None,
  defined_tags: typing.Mapping[str] = None,
  discovery_schedule_id: str = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  replication_credentials: CloudBridgeAssetSourceReplicationCredentials = None,
  system_tags: typing.Mapping[str] = None,
  timeouts: CloudBridgeAssetSourceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.assetsCompartmentId">assets_compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#assets_compartment_id CloudBridgeAssetSource#assets_compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#compartment_id CloudBridgeAssetSource#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.discoveryCredentials">discovery_credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentials">CloudBridgeAssetSourceDiscoveryCredentials</a></code> | discovery_credentials block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.environmentId">environment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#environment_id CloudBridgeAssetSource#environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.inventoryId">inventory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#inventory_id CloudBridgeAssetSource#inventory_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#type CloudBridgeAssetSource#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.vcenterEndpoint">vcenter_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#vcenter_endpoint CloudBridgeAssetSource#vcenter_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.areHistoricalMetricsCollected">are_historical_metrics_collected</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#are_historical_metrics_collected CloudBridgeAssetSource#are_historical_metrics_collected}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.areRealtimeMetricsCollected">are_realtime_metrics_collected</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#are_realtime_metrics_collected CloudBridgeAssetSource#are_realtime_metrics_collected}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#defined_tags CloudBridgeAssetSource#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.discoveryScheduleId">discovery_schedule_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#discovery_schedule_id CloudBridgeAssetSource#discovery_schedule_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#display_name CloudBridgeAssetSource#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#freeform_tags CloudBridgeAssetSource#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#id CloudBridgeAssetSource#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.replicationCredentials">replication_credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentials">CloudBridgeAssetSourceReplicationCredentials</a></code> | replication_credentials block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.systemTags">system_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#system_tags CloudBridgeAssetSource#system_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeouts">CloudBridgeAssetSourceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `assets_compartment_id`<sup>Required</sup> <a name="assets_compartment_id" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.assetsCompartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#assets_compartment_id CloudBridgeAssetSource#assets_compartment_id}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#compartment_id CloudBridgeAssetSource#compartment_id}.

---

##### `discovery_credentials`<sup>Required</sup> <a name="discovery_credentials" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.discoveryCredentials"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentials">CloudBridgeAssetSourceDiscoveryCredentials</a>

discovery_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#discovery_credentials CloudBridgeAssetSource#discovery_credentials}

---

##### `environment_id`<sup>Required</sup> <a name="environment_id" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.environmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#environment_id CloudBridgeAssetSource#environment_id}.

---

##### `inventory_id`<sup>Required</sup> <a name="inventory_id" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.inventoryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#inventory_id CloudBridgeAssetSource#inventory_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#type CloudBridgeAssetSource#type}.

---

##### `vcenter_endpoint`<sup>Required</sup> <a name="vcenter_endpoint" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.vcenterEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#vcenter_endpoint CloudBridgeAssetSource#vcenter_endpoint}.

---

##### `are_historical_metrics_collected`<sup>Optional</sup> <a name="are_historical_metrics_collected" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.areHistoricalMetricsCollected"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#are_historical_metrics_collected CloudBridgeAssetSource#are_historical_metrics_collected}.

---

##### `are_realtime_metrics_collected`<sup>Optional</sup> <a name="are_realtime_metrics_collected" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.areRealtimeMetricsCollected"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#are_realtime_metrics_collected CloudBridgeAssetSource#are_realtime_metrics_collected}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#defined_tags CloudBridgeAssetSource#defined_tags}.

---

##### `discovery_schedule_id`<sup>Optional</sup> <a name="discovery_schedule_id" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.discoveryScheduleId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#discovery_schedule_id CloudBridgeAssetSource#discovery_schedule_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#display_name CloudBridgeAssetSource#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#freeform_tags CloudBridgeAssetSource#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#id CloudBridgeAssetSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `replication_credentials`<sup>Optional</sup> <a name="replication_credentials" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.replicationCredentials"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentials">CloudBridgeAssetSourceReplicationCredentials</a>

replication_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#replication_credentials CloudBridgeAssetSource#replication_credentials}

---

##### `system_tags`<sup>Optional</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.systemTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#system_tags CloudBridgeAssetSource#system_tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeouts">CloudBridgeAssetSourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#timeouts CloudBridgeAssetSource#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.putDiscoveryCredentials">put_discovery_credentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.putReplicationCredentials">put_replication_credentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.resetAreHistoricalMetricsCollected">reset_are_historical_metrics_collected</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.resetAreRealtimeMetricsCollected">reset_are_realtime_metrics_collected</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.resetDiscoveryScheduleId">reset_discovery_schedule_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.resetReplicationCredentials">reset_replication_credentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.resetSystemTags">reset_system_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_discovery_credentials` <a name="put_discovery_credentials" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.putDiscoveryCredentials"></a>

```python
def put_discovery_credentials(
  secret_id: str,
  type: str
) -> None
```

###### `secret_id`<sup>Required</sup> <a name="secret_id" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.putDiscoveryCredentials.parameter.secretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#secret_id CloudBridgeAssetSource#secret_id}.

---

###### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.putDiscoveryCredentials.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#type CloudBridgeAssetSource#type}.

---

##### `put_replication_credentials` <a name="put_replication_credentials" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.putReplicationCredentials"></a>

```python
def put_replication_credentials(
  secret_id: str,
  type: str
) -> None
```

###### `secret_id`<sup>Required</sup> <a name="secret_id" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.putReplicationCredentials.parameter.secretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#secret_id CloudBridgeAssetSource#secret_id}.

---

###### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.putReplicationCredentials.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#type CloudBridgeAssetSource#type}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#create CloudBridgeAssetSource#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#delete CloudBridgeAssetSource#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#update CloudBridgeAssetSource#update}.

---

##### `reset_are_historical_metrics_collected` <a name="reset_are_historical_metrics_collected" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.resetAreHistoricalMetricsCollected"></a>

```python
def reset_are_historical_metrics_collected() -> None
```

##### `reset_are_realtime_metrics_collected` <a name="reset_are_realtime_metrics_collected" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.resetAreRealtimeMetricsCollected"></a>

```python
def reset_are_realtime_metrics_collected() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_discovery_schedule_id` <a name="reset_discovery_schedule_id" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.resetDiscoveryScheduleId"></a>

```python
def reset_discovery_schedule_id() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_replication_credentials` <a name="reset_replication_credentials" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.resetReplicationCredentials"></a>

```python
def reset_replication_credentials() -> None
```

##### `reset_system_tags` <a name="reset_system_tags" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.resetSystemTags"></a>

```python
def reset_system_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CloudBridgeAssetSource resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_bridge_asset_source

cloudBridgeAssetSource.CloudBridgeAssetSource.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_bridge_asset_source

cloudBridgeAssetSource.CloudBridgeAssetSource.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_bridge_asset_source

cloudBridgeAssetSource.CloudBridgeAssetSource.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_bridge_asset_source

cloudBridgeAssetSource.CloudBridgeAssetSource.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CloudBridgeAssetSource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudBridgeAssetSource to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudBridgeAssetSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudBridgeAssetSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.discoveryCredentials">discovery_credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference">CloudBridgeAssetSourceDiscoveryCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.replicationCredentials">replication_credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference">CloudBridgeAssetSourceReplicationCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference">CloudBridgeAssetSourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.areHistoricalMetricsCollectedInput">are_historical_metrics_collected_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.areRealtimeMetricsCollectedInput">are_realtime_metrics_collected_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.assetsCompartmentIdInput">assets_compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.discoveryCredentialsInput">discovery_credentials_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentials">CloudBridgeAssetSourceDiscoveryCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.discoveryScheduleIdInput">discovery_schedule_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.environmentIdInput">environment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.inventoryIdInput">inventory_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.replicationCredentialsInput">replication_credentials_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentials">CloudBridgeAssetSourceReplicationCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.systemTagsInput">system_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeouts">CloudBridgeAssetSourceTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.vcenterEndpointInput">vcenter_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.areHistoricalMetricsCollected">are_historical_metrics_collected</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.areRealtimeMetricsCollected">are_realtime_metrics_collected</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.assetsCompartmentId">assets_compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.discoveryScheduleId">discovery_schedule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.environmentId">environment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.inventoryId">inventory_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.systemTags">system_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.vcenterEndpoint">vcenter_endpoint</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `discovery_credentials`<sup>Required</sup> <a name="discovery_credentials" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.discoveryCredentials"></a>

```python
discovery_credentials: CloudBridgeAssetSourceDiscoveryCredentialsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference">CloudBridgeAssetSourceDiscoveryCredentialsOutputReference</a>

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `replication_credentials`<sup>Required</sup> <a name="replication_credentials" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.replicationCredentials"></a>

```python
replication_credentials: CloudBridgeAssetSourceReplicationCredentialsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference">CloudBridgeAssetSourceReplicationCredentialsOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.timeouts"></a>

```python
timeouts: CloudBridgeAssetSourceTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference">CloudBridgeAssetSourceTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `are_historical_metrics_collected_input`<sup>Optional</sup> <a name="are_historical_metrics_collected_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.areHistoricalMetricsCollectedInput"></a>

```python
are_historical_metrics_collected_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `are_realtime_metrics_collected_input`<sup>Optional</sup> <a name="are_realtime_metrics_collected_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.areRealtimeMetricsCollectedInput"></a>

```python
are_realtime_metrics_collected_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `assets_compartment_id_input`<sup>Optional</sup> <a name="assets_compartment_id_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.assetsCompartmentIdInput"></a>

```python
assets_compartment_id_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `discovery_credentials_input`<sup>Optional</sup> <a name="discovery_credentials_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.discoveryCredentialsInput"></a>

```python
discovery_credentials_input: CloudBridgeAssetSourceDiscoveryCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentials">CloudBridgeAssetSourceDiscoveryCredentials</a>

---

##### `discovery_schedule_id_input`<sup>Optional</sup> <a name="discovery_schedule_id_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.discoveryScheduleIdInput"></a>

```python
discovery_schedule_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `environment_id_input`<sup>Optional</sup> <a name="environment_id_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.environmentIdInput"></a>

```python
environment_id_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `inventory_id_input`<sup>Optional</sup> <a name="inventory_id_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.inventoryIdInput"></a>

```python
inventory_id_input: str
```

- *Type:* str

---

##### `replication_credentials_input`<sup>Optional</sup> <a name="replication_credentials_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.replicationCredentialsInput"></a>

```python
replication_credentials_input: CloudBridgeAssetSourceReplicationCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentials">CloudBridgeAssetSourceReplicationCredentials</a>

---

##### `system_tags_input`<sup>Optional</sup> <a name="system_tags_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.systemTagsInput"></a>

```python
system_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CloudBridgeAssetSourceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeouts">CloudBridgeAssetSourceTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `vcenter_endpoint_input`<sup>Optional</sup> <a name="vcenter_endpoint_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.vcenterEndpointInput"></a>

```python
vcenter_endpoint_input: str
```

- *Type:* str

---

##### `are_historical_metrics_collected`<sup>Required</sup> <a name="are_historical_metrics_collected" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.areHistoricalMetricsCollected"></a>

```python
are_historical_metrics_collected: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `are_realtime_metrics_collected`<sup>Required</sup> <a name="are_realtime_metrics_collected" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.areRealtimeMetricsCollected"></a>

```python
are_realtime_metrics_collected: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `assets_compartment_id`<sup>Required</sup> <a name="assets_compartment_id" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.assetsCompartmentId"></a>

```python
assets_compartment_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `discovery_schedule_id`<sup>Required</sup> <a name="discovery_schedule_id" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.discoveryScheduleId"></a>

```python
discovery_schedule_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `environment_id`<sup>Required</sup> <a name="environment_id" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.environmentId"></a>

```python
environment_id: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `inventory_id`<sup>Required</sup> <a name="inventory_id" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.inventoryId"></a>

```python
inventory_id: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.systemTags"></a>

```python
system_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `vcenter_endpoint`<sup>Required</sup> <a name="vcenter_endpoint" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.vcenterEndpoint"></a>

```python
vcenter_endpoint: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudBridgeAssetSourceConfig <a name="CloudBridgeAssetSourceConfig" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_bridge_asset_source

cloudBridgeAssetSource.CloudBridgeAssetSourceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  assets_compartment_id: str,
  compartment_id: str,
  discovery_credentials: CloudBridgeAssetSourceDiscoveryCredentials,
  environment_id: str,
  inventory_id: str,
  type: str,
  vcenter_endpoint: str,
  are_historical_metrics_collected: typing.Union[bool, IResolvable] = None,
  are_realtime_metrics_collected: typing.Union[bool, IResolvable] = None,
  defined_tags: typing.Mapping[str] = None,
  discovery_schedule_id: str = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  replication_credentials: CloudBridgeAssetSourceReplicationCredentials = None,
  system_tags: typing.Mapping[str] = None,
  timeouts: CloudBridgeAssetSourceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.assetsCompartmentId">assets_compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#assets_compartment_id CloudBridgeAssetSource#assets_compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#compartment_id CloudBridgeAssetSource#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.discoveryCredentials">discovery_credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentials">CloudBridgeAssetSourceDiscoveryCredentials</a></code> | discovery_credentials block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.environmentId">environment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#environment_id CloudBridgeAssetSource#environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.inventoryId">inventory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#inventory_id CloudBridgeAssetSource#inventory_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#type CloudBridgeAssetSource#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.vcenterEndpoint">vcenter_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#vcenter_endpoint CloudBridgeAssetSource#vcenter_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.areHistoricalMetricsCollected">are_historical_metrics_collected</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#are_historical_metrics_collected CloudBridgeAssetSource#are_historical_metrics_collected}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.areRealtimeMetricsCollected">are_realtime_metrics_collected</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#are_realtime_metrics_collected CloudBridgeAssetSource#are_realtime_metrics_collected}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#defined_tags CloudBridgeAssetSource#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.discoveryScheduleId">discovery_schedule_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#discovery_schedule_id CloudBridgeAssetSource#discovery_schedule_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#display_name CloudBridgeAssetSource#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#freeform_tags CloudBridgeAssetSource#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#id CloudBridgeAssetSource#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.replicationCredentials">replication_credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentials">CloudBridgeAssetSourceReplicationCredentials</a></code> | replication_credentials block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.systemTags">system_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#system_tags CloudBridgeAssetSource#system_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeouts">CloudBridgeAssetSourceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `assets_compartment_id`<sup>Required</sup> <a name="assets_compartment_id" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.assetsCompartmentId"></a>

```python
assets_compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#assets_compartment_id CloudBridgeAssetSource#assets_compartment_id}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#compartment_id CloudBridgeAssetSource#compartment_id}.

---

##### `discovery_credentials`<sup>Required</sup> <a name="discovery_credentials" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.discoveryCredentials"></a>

```python
discovery_credentials: CloudBridgeAssetSourceDiscoveryCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentials">CloudBridgeAssetSourceDiscoveryCredentials</a>

discovery_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#discovery_credentials CloudBridgeAssetSource#discovery_credentials}

---

##### `environment_id`<sup>Required</sup> <a name="environment_id" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.environmentId"></a>

```python
environment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#environment_id CloudBridgeAssetSource#environment_id}.

---

##### `inventory_id`<sup>Required</sup> <a name="inventory_id" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.inventoryId"></a>

```python
inventory_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#inventory_id CloudBridgeAssetSource#inventory_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#type CloudBridgeAssetSource#type}.

---

##### `vcenter_endpoint`<sup>Required</sup> <a name="vcenter_endpoint" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.vcenterEndpoint"></a>

```python
vcenter_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#vcenter_endpoint CloudBridgeAssetSource#vcenter_endpoint}.

---

##### `are_historical_metrics_collected`<sup>Optional</sup> <a name="are_historical_metrics_collected" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.areHistoricalMetricsCollected"></a>

```python
are_historical_metrics_collected: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#are_historical_metrics_collected CloudBridgeAssetSource#are_historical_metrics_collected}.

---

##### `are_realtime_metrics_collected`<sup>Optional</sup> <a name="are_realtime_metrics_collected" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.areRealtimeMetricsCollected"></a>

```python
are_realtime_metrics_collected: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#are_realtime_metrics_collected CloudBridgeAssetSource#are_realtime_metrics_collected}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#defined_tags CloudBridgeAssetSource#defined_tags}.

---

##### `discovery_schedule_id`<sup>Optional</sup> <a name="discovery_schedule_id" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.discoveryScheduleId"></a>

```python
discovery_schedule_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#discovery_schedule_id CloudBridgeAssetSource#discovery_schedule_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#display_name CloudBridgeAssetSource#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#freeform_tags CloudBridgeAssetSource#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#id CloudBridgeAssetSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `replication_credentials`<sup>Optional</sup> <a name="replication_credentials" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.replicationCredentials"></a>

```python
replication_credentials: CloudBridgeAssetSourceReplicationCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentials">CloudBridgeAssetSourceReplicationCredentials</a>

replication_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#replication_credentials CloudBridgeAssetSource#replication_credentials}

---

##### `system_tags`<sup>Optional</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.systemTags"></a>

```python
system_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#system_tags CloudBridgeAssetSource#system_tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.timeouts"></a>

```python
timeouts: CloudBridgeAssetSourceTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeouts">CloudBridgeAssetSourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#timeouts CloudBridgeAssetSource#timeouts}

---

### CloudBridgeAssetSourceDiscoveryCredentials <a name="CloudBridgeAssetSourceDiscoveryCredentials" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentials.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_bridge_asset_source

cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentials(
  secret_id: str,
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentials.property.secretId">secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#secret_id CloudBridgeAssetSource#secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentials.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#type CloudBridgeAssetSource#type}. |

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentials.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#secret_id CloudBridgeAssetSource#secret_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentials.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#type CloudBridgeAssetSource#type}.

---

### CloudBridgeAssetSourceReplicationCredentials <a name="CloudBridgeAssetSourceReplicationCredentials" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentials.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_bridge_asset_source

cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentials(
  secret_id: str,
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentials.property.secretId">secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#secret_id CloudBridgeAssetSource#secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentials.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#type CloudBridgeAssetSource#type}. |

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentials.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#secret_id CloudBridgeAssetSource#secret_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentials.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#type CloudBridgeAssetSource#type}.

---

### CloudBridgeAssetSourceTimeouts <a name="CloudBridgeAssetSourceTimeouts" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_bridge_asset_source

cloudBridgeAssetSource.CloudBridgeAssetSourceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#create CloudBridgeAssetSource#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#delete CloudBridgeAssetSource#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#update CloudBridgeAssetSource#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#create CloudBridgeAssetSource#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#delete CloudBridgeAssetSource#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#update CloudBridgeAssetSource#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudBridgeAssetSourceDiscoveryCredentialsOutputReference <a name="CloudBridgeAssetSourceDiscoveryCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_bridge_asset_source

cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.property.secretIdInput">secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.property.secretId">secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentials">CloudBridgeAssetSourceDiscoveryCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_id_input`<sup>Optional</sup> <a name="secret_id_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.property.secretIdInput"></a>

```python
secret_id_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: CloudBridgeAssetSourceDiscoveryCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentials">CloudBridgeAssetSourceDiscoveryCredentials</a>

---


### CloudBridgeAssetSourceReplicationCredentialsOutputReference <a name="CloudBridgeAssetSourceReplicationCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_bridge_asset_source

cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.property.secretIdInput">secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.property.secretId">secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentials">CloudBridgeAssetSourceReplicationCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_id_input`<sup>Optional</sup> <a name="secret_id_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.property.secretIdInput"></a>

```python
secret_id_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: CloudBridgeAssetSourceReplicationCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentials">CloudBridgeAssetSourceReplicationCredentials</a>

---


### CloudBridgeAssetSourceTimeoutsOutputReference <a name="CloudBridgeAssetSourceTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_bridge_asset_source

cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeouts">CloudBridgeAssetSourceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CloudBridgeAssetSourceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeouts">CloudBridgeAssetSourceTimeouts</a>]

---



