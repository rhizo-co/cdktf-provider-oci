# `cloudBridgeAsset` Submodule <a name="`cloudBridgeAsset` Submodule" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudBridgeAsset <a name="CloudBridgeAsset" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset oci_cloud_bridge_asset}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_bridge_asset

cloudBridgeAsset.CloudBridgeAsset(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  asset_type: str,
  compartment_id: str,
  external_asset_key: str,
  inventory_id: str,
  source_key: str,
  asset_source_ids: typing.List[str] = None,
  compute: CloudBridgeAssetCompute = None,
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  timeouts: CloudBridgeAssetTimeouts = None,
  vm: CloudBridgeAssetVm = None,
  vmware_vcenter: CloudBridgeAssetVmwareVcenter = None,
  vmware_vm: CloudBridgeAssetVmwareVm = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.assetType">asset_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#asset_type CloudBridgeAsset#asset_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#compartment_id CloudBridgeAsset#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.externalAssetKey">external_asset_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#external_asset_key CloudBridgeAsset#external_asset_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.inventoryId">inventory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#inventory_id CloudBridgeAsset#inventory_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.sourceKey">source_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#source_key CloudBridgeAsset#source_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.assetSourceIds">asset_source_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#asset_source_ids CloudBridgeAsset#asset_source_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.compute">compute</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute">CloudBridgeAssetCompute</a></code> | compute block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#defined_tags CloudBridgeAsset#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#display_name CloudBridgeAsset#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#freeform_tags CloudBridgeAsset#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#id CloudBridgeAsset#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts">CloudBridgeAssetTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.vm">vm</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm">CloudBridgeAssetVm</a></code> | vm block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.vmwareVcenter">vmware_vcenter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter">CloudBridgeAssetVmwareVcenter</a></code> | vmware_vcenter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.vmwareVm">vmware_vm</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm">CloudBridgeAssetVmwareVm</a></code> | vmware_vm block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `asset_type`<sup>Required</sup> <a name="asset_type" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.assetType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#asset_type CloudBridgeAsset#asset_type}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#compartment_id CloudBridgeAsset#compartment_id}.

---

##### `external_asset_key`<sup>Required</sup> <a name="external_asset_key" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.externalAssetKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#external_asset_key CloudBridgeAsset#external_asset_key}.

---

##### `inventory_id`<sup>Required</sup> <a name="inventory_id" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.inventoryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#inventory_id CloudBridgeAsset#inventory_id}.

---

##### `source_key`<sup>Required</sup> <a name="source_key" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.sourceKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#source_key CloudBridgeAsset#source_key}.

---

##### `asset_source_ids`<sup>Optional</sup> <a name="asset_source_ids" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.assetSourceIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#asset_source_ids CloudBridgeAsset#asset_source_ids}.

---

##### `compute`<sup>Optional</sup> <a name="compute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.compute"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute">CloudBridgeAssetCompute</a>

compute block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#compute CloudBridgeAsset#compute}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#defined_tags CloudBridgeAsset#defined_tags}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#display_name CloudBridgeAsset#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#freeform_tags CloudBridgeAsset#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#id CloudBridgeAsset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts">CloudBridgeAssetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#timeouts CloudBridgeAsset#timeouts}

---

##### `vm`<sup>Optional</sup> <a name="vm" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.vm"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm">CloudBridgeAssetVm</a>

vm block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#vm CloudBridgeAsset#vm}

---

##### `vmware_vcenter`<sup>Optional</sup> <a name="vmware_vcenter" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.vmwareVcenter"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter">CloudBridgeAssetVmwareVcenter</a>

vmware_vcenter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#vmware_vcenter CloudBridgeAsset#vmware_vcenter}

---

##### `vmware_vm`<sup>Optional</sup> <a name="vmware_vm" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.vmwareVm"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm">CloudBridgeAssetVmwareVm</a>

vmware_vm block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#vmware_vm CloudBridgeAsset#vmware_vm}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putCompute">put_compute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putVm">put_vm</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putVmwareVcenter">put_vmware_vcenter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putVmwareVm">put_vmware_vm</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetAssetSourceIds">reset_asset_source_ids</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetCompute">reset_compute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetVm">reset_vm</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetVmwareVcenter">reset_vmware_vcenter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetVmwareVm">reset_vmware_vm</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_compute` <a name="put_compute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putCompute"></a>

```python
def put_compute(
  connected_networks: typing.Union[int, float] = None,
  cores_count: typing.Union[int, float] = None,
  cpu_model: str = None,
  description: str = None,
  disks: typing.Union[IResolvable, typing.List[CloudBridgeAssetComputeDisks]] = None,
  disks_count: typing.Union[int, float] = None,
  dns_name: str = None,
  firmware: str = None,
  gpu_devices: typing.Union[IResolvable, typing.List[CloudBridgeAssetComputeGpuDevices]] = None,
  gpu_devices_count: typing.Union[int, float] = None,
  guest_state: str = None,
  hardware_version: str = None,
  host_name: str = None,
  is_pmem_enabled: typing.Union[bool, IResolvable] = None,
  is_tpm_enabled: typing.Union[bool, IResolvable] = None,
  latency_sensitivity: str = None,
  memory_in_mbs: str = None,
  nics: typing.Union[IResolvable, typing.List[CloudBridgeAssetComputeNics]] = None,
  nics_count: typing.Union[int, float] = None,
  nvdimm_controller: CloudBridgeAssetComputeNvdimmController = None,
  nvdimms: typing.Union[IResolvable, typing.List[CloudBridgeAssetComputeNvdimms]] = None,
  operating_system: str = None,
  operating_system_version: str = None,
  pmem_in_mbs: str = None,
  power_state: str = None,
  primary_ip: str = None,
  scsi_controller: CloudBridgeAssetComputeScsiController = None,
  storage_provisioned_in_mbs: str = None,
  threads_per_core_count: typing.Union[int, float] = None
) -> None
```

###### `connected_networks`<sup>Optional</sup> <a name="connected_networks" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putCompute.parameter.connectedNetworks"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#connected_networks CloudBridgeAsset#connected_networks}.

---

###### `cores_count`<sup>Optional</sup> <a name="cores_count" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putCompute.parameter.coresCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#cores_count CloudBridgeAsset#cores_count}.

---

###### `cpu_model`<sup>Optional</sup> <a name="cpu_model" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putCompute.parameter.cpuModel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#cpu_model CloudBridgeAsset#cpu_model}.

---

###### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putCompute.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#description CloudBridgeAsset#description}.

---

###### `disks`<sup>Optional</sup> <a name="disks" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putCompute.parameter.disks"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks">CloudBridgeAssetComputeDisks</a>]]

disks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#disks CloudBridgeAsset#disks}

---

###### `disks_count`<sup>Optional</sup> <a name="disks_count" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putCompute.parameter.disksCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#disks_count CloudBridgeAsset#disks_count}.

---

###### `dns_name`<sup>Optional</sup> <a name="dns_name" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putCompute.parameter.dnsName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#dns_name CloudBridgeAsset#dns_name}.

---

###### `firmware`<sup>Optional</sup> <a name="firmware" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putCompute.parameter.firmware"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#firmware CloudBridgeAsset#firmware}.

---

###### `gpu_devices`<sup>Optional</sup> <a name="gpu_devices" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putCompute.parameter.gpuDevices"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices">CloudBridgeAssetComputeGpuDevices</a>]]

gpu_devices block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#gpu_devices CloudBridgeAsset#gpu_devices}

---

###### `gpu_devices_count`<sup>Optional</sup> <a name="gpu_devices_count" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putCompute.parameter.gpuDevicesCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#gpu_devices_count CloudBridgeAsset#gpu_devices_count}.

---

###### `guest_state`<sup>Optional</sup> <a name="guest_state" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putCompute.parameter.guestState"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#guest_state CloudBridgeAsset#guest_state}.

---

###### `hardware_version`<sup>Optional</sup> <a name="hardware_version" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putCompute.parameter.hardwareVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#hardware_version CloudBridgeAsset#hardware_version}.

---

###### `host_name`<sup>Optional</sup> <a name="host_name" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putCompute.parameter.hostName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#host_name CloudBridgeAsset#host_name}.

---

###### `is_pmem_enabled`<sup>Optional</sup> <a name="is_pmem_enabled" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putCompute.parameter.isPmemEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#is_pmem_enabled CloudBridgeAsset#is_pmem_enabled}.

---

###### `is_tpm_enabled`<sup>Optional</sup> <a name="is_tpm_enabled" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putCompute.parameter.isTpmEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#is_tpm_enabled CloudBridgeAsset#is_tpm_enabled}.

---

###### `latency_sensitivity`<sup>Optional</sup> <a name="latency_sensitivity" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putCompute.parameter.latencySensitivity"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#latency_sensitivity CloudBridgeAsset#latency_sensitivity}.

---

###### `memory_in_mbs`<sup>Optional</sup> <a name="memory_in_mbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putCompute.parameter.memoryInMbs"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#memory_in_mbs CloudBridgeAsset#memory_in_mbs}.

---

###### `nics`<sup>Optional</sup> <a name="nics" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putCompute.parameter.nics"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics">CloudBridgeAssetComputeNics</a>]]

nics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#nics CloudBridgeAsset#nics}

---

###### `nics_count`<sup>Optional</sup> <a name="nics_count" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putCompute.parameter.nicsCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#nics_count CloudBridgeAsset#nics_count}.

---

###### `nvdimm_controller`<sup>Optional</sup> <a name="nvdimm_controller" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putCompute.parameter.nvdimmController"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController">CloudBridgeAssetComputeNvdimmController</a>

nvdimm_controller block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#nvdimm_controller CloudBridgeAsset#nvdimm_controller}

---

###### `nvdimms`<sup>Optional</sup> <a name="nvdimms" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putCompute.parameter.nvdimms"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms">CloudBridgeAssetComputeNvdimms</a>]]

nvdimms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#nvdimms CloudBridgeAsset#nvdimms}

---

###### `operating_system`<sup>Optional</sup> <a name="operating_system" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putCompute.parameter.operatingSystem"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#operating_system CloudBridgeAsset#operating_system}.

---

###### `operating_system_version`<sup>Optional</sup> <a name="operating_system_version" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putCompute.parameter.operatingSystemVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#operating_system_version CloudBridgeAsset#operating_system_version}.

---

###### `pmem_in_mbs`<sup>Optional</sup> <a name="pmem_in_mbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putCompute.parameter.pmemInMbs"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#pmem_in_mbs CloudBridgeAsset#pmem_in_mbs}.

---

###### `power_state`<sup>Optional</sup> <a name="power_state" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putCompute.parameter.powerState"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#power_state CloudBridgeAsset#power_state}.

---

###### `primary_ip`<sup>Optional</sup> <a name="primary_ip" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putCompute.parameter.primaryIp"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#primary_ip CloudBridgeAsset#primary_ip}.

---

###### `scsi_controller`<sup>Optional</sup> <a name="scsi_controller" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putCompute.parameter.scsiController"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController">CloudBridgeAssetComputeScsiController</a>

scsi_controller block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#scsi_controller CloudBridgeAsset#scsi_controller}

---

###### `storage_provisioned_in_mbs`<sup>Optional</sup> <a name="storage_provisioned_in_mbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putCompute.parameter.storageProvisionedInMbs"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#storage_provisioned_in_mbs CloudBridgeAsset#storage_provisioned_in_mbs}.

---

###### `threads_per_core_count`<sup>Optional</sup> <a name="threads_per_core_count" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putCompute.parameter.threadsPerCoreCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#threads_per_core_count CloudBridgeAsset#threads_per_core_count}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#create CloudBridgeAsset#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#delete CloudBridgeAsset#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#update CloudBridgeAsset#update}.

---

##### `put_vm` <a name="put_vm" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putVm"></a>

```python
def put_vm(
  hypervisor_host: str = None,
  hypervisor_vendor: str = None,
  hypervisor_version: str = None
) -> None
```

###### `hypervisor_host`<sup>Optional</sup> <a name="hypervisor_host" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putVm.parameter.hypervisorHost"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#hypervisor_host CloudBridgeAsset#hypervisor_host}.

---

###### `hypervisor_vendor`<sup>Optional</sup> <a name="hypervisor_vendor" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putVm.parameter.hypervisorVendor"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#hypervisor_vendor CloudBridgeAsset#hypervisor_vendor}.

---

###### `hypervisor_version`<sup>Optional</sup> <a name="hypervisor_version" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putVm.parameter.hypervisorVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#hypervisor_version CloudBridgeAsset#hypervisor_version}.

---

##### `put_vmware_vcenter` <a name="put_vmware_vcenter" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putVmwareVcenter"></a>

```python
def put_vmware_vcenter(
  data_center: str = None,
  vcenter_key: str = None,
  vcenter_version: str = None
) -> None
```

###### `data_center`<sup>Optional</sup> <a name="data_center" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putVmwareVcenter.parameter.dataCenter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#data_center CloudBridgeAsset#data_center}.

---

###### `vcenter_key`<sup>Optional</sup> <a name="vcenter_key" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putVmwareVcenter.parameter.vcenterKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#vcenter_key CloudBridgeAsset#vcenter_key}.

---

###### `vcenter_version`<sup>Optional</sup> <a name="vcenter_version" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putVmwareVcenter.parameter.vcenterVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#vcenter_version CloudBridgeAsset#vcenter_version}.

---

##### `put_vmware_vm` <a name="put_vmware_vm" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putVmwareVm"></a>

```python
def put_vmware_vm(
  cluster: str = None,
  customer_fields: typing.List[str] = None,
  customer_tags: typing.Union[IResolvable, typing.List[CloudBridgeAssetVmwareVmCustomerTags]] = None,
  fault_tolerance_bandwidth: typing.Union[int, float] = None,
  fault_tolerance_secondary_latency: typing.Union[int, float] = None,
  fault_tolerance_state: str = None,
  instance_uuid: str = None,
  is_disks_cbt_enabled: typing.Union[bool, IResolvable] = None,
  is_disks_uuid_enabled: typing.Union[bool, IResolvable] = None,
  path: str = None,
  vmware_tools_status: str = None
) -> None
```

###### `cluster`<sup>Optional</sup> <a name="cluster" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putVmwareVm.parameter.cluster"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#cluster CloudBridgeAsset#cluster}.

---

###### `customer_fields`<sup>Optional</sup> <a name="customer_fields" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putVmwareVm.parameter.customerFields"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#customer_fields CloudBridgeAsset#customer_fields}.

---

###### `customer_tags`<sup>Optional</sup> <a name="customer_tags" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putVmwareVm.parameter.customerTags"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTags">CloudBridgeAssetVmwareVmCustomerTags</a>]]

customer_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#customer_tags CloudBridgeAsset#customer_tags}

---

###### `fault_tolerance_bandwidth`<sup>Optional</sup> <a name="fault_tolerance_bandwidth" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putVmwareVm.parameter.faultToleranceBandwidth"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#fault_tolerance_bandwidth CloudBridgeAsset#fault_tolerance_bandwidth}.

---

###### `fault_tolerance_secondary_latency`<sup>Optional</sup> <a name="fault_tolerance_secondary_latency" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putVmwareVm.parameter.faultToleranceSecondaryLatency"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#fault_tolerance_secondary_latency CloudBridgeAsset#fault_tolerance_secondary_latency}.

---

###### `fault_tolerance_state`<sup>Optional</sup> <a name="fault_tolerance_state" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putVmwareVm.parameter.faultToleranceState"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#fault_tolerance_state CloudBridgeAsset#fault_tolerance_state}.

---

###### `instance_uuid`<sup>Optional</sup> <a name="instance_uuid" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putVmwareVm.parameter.instanceUuid"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#instance_uuid CloudBridgeAsset#instance_uuid}.

---

###### `is_disks_cbt_enabled`<sup>Optional</sup> <a name="is_disks_cbt_enabled" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putVmwareVm.parameter.isDisksCbtEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#is_disks_cbt_enabled CloudBridgeAsset#is_disks_cbt_enabled}.

---

###### `is_disks_uuid_enabled`<sup>Optional</sup> <a name="is_disks_uuid_enabled" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putVmwareVm.parameter.isDisksUuidEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#is_disks_uuid_enabled CloudBridgeAsset#is_disks_uuid_enabled}.

---

###### `path`<sup>Optional</sup> <a name="path" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putVmwareVm.parameter.path"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#path CloudBridgeAsset#path}.

---

###### `vmware_tools_status`<sup>Optional</sup> <a name="vmware_tools_status" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putVmwareVm.parameter.vmwareToolsStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#vmware_tools_status CloudBridgeAsset#vmware_tools_status}.

---

##### `reset_asset_source_ids` <a name="reset_asset_source_ids" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetAssetSourceIds"></a>

```python
def reset_asset_source_ids() -> None
```

##### `reset_compute` <a name="reset_compute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetCompute"></a>

```python
def reset_compute() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_vm` <a name="reset_vm" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetVm"></a>

```python
def reset_vm() -> None
```

##### `reset_vmware_vcenter` <a name="reset_vmware_vcenter" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetVmwareVcenter"></a>

```python
def reset_vmware_vcenter() -> None
```

##### `reset_vmware_vm` <a name="reset_vmware_vm" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetVmwareVm"></a>

```python
def reset_vmware_vm() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CloudBridgeAsset resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_bridge_asset

cloudBridgeAsset.CloudBridgeAsset.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_bridge_asset

cloudBridgeAsset.CloudBridgeAsset.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_bridge_asset

cloudBridgeAsset.CloudBridgeAsset.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_bridge_asset

cloudBridgeAsset.CloudBridgeAsset.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CloudBridgeAsset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudBridgeAsset to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudBridgeAsset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudBridgeAsset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.compute">compute</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference">CloudBridgeAssetComputeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference">CloudBridgeAssetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.vm">vm</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference">CloudBridgeAssetVmOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.vmwareVcenter">vmware_vcenter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference">CloudBridgeAssetVmwareVcenterOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.vmwareVm">vmware_vm</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference">CloudBridgeAssetVmwareVmOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.assetSourceIdsInput">asset_source_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.assetTypeInput">asset_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.computeInput">compute_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute">CloudBridgeAssetCompute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.externalAssetKeyInput">external_asset_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.inventoryIdInput">inventory_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.sourceKeyInput">source_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts">CloudBridgeAssetTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.vmInput">vm_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm">CloudBridgeAssetVm</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.vmwareVcenterInput">vmware_vcenter_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter">CloudBridgeAssetVmwareVcenter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.vmwareVmInput">vmware_vm_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm">CloudBridgeAssetVmwareVm</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.assetSourceIds">asset_source_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.assetType">asset_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.externalAssetKey">external_asset_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.inventoryId">inventory_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.sourceKey">source_key</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compute`<sup>Required</sup> <a name="compute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.compute"></a>

```python
compute: CloudBridgeAssetComputeOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference">CloudBridgeAssetComputeOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.timeouts"></a>

```python
timeouts: CloudBridgeAssetTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference">CloudBridgeAssetTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `vm`<sup>Required</sup> <a name="vm" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.vm"></a>

```python
vm: CloudBridgeAssetVmOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference">CloudBridgeAssetVmOutputReference</a>

---

##### `vmware_vcenter`<sup>Required</sup> <a name="vmware_vcenter" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.vmwareVcenter"></a>

```python
vmware_vcenter: CloudBridgeAssetVmwareVcenterOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference">CloudBridgeAssetVmwareVcenterOutputReference</a>

---

##### `vmware_vm`<sup>Required</sup> <a name="vmware_vm" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.vmwareVm"></a>

```python
vmware_vm: CloudBridgeAssetVmwareVmOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference">CloudBridgeAssetVmwareVmOutputReference</a>

---

##### `asset_source_ids_input`<sup>Optional</sup> <a name="asset_source_ids_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.assetSourceIdsInput"></a>

```python
asset_source_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `asset_type_input`<sup>Optional</sup> <a name="asset_type_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.assetTypeInput"></a>

```python
asset_type_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `compute_input`<sup>Optional</sup> <a name="compute_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.computeInput"></a>

```python
compute_input: CloudBridgeAssetCompute
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute">CloudBridgeAssetCompute</a>

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `external_asset_key_input`<sup>Optional</sup> <a name="external_asset_key_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.externalAssetKeyInput"></a>

```python
external_asset_key_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `inventory_id_input`<sup>Optional</sup> <a name="inventory_id_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.inventoryIdInput"></a>

```python
inventory_id_input: str
```

- *Type:* str

---

##### `source_key_input`<sup>Optional</sup> <a name="source_key_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.sourceKeyInput"></a>

```python
source_key_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CloudBridgeAssetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts">CloudBridgeAssetTimeouts</a>]

---

##### `vm_input`<sup>Optional</sup> <a name="vm_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.vmInput"></a>

```python
vm_input: CloudBridgeAssetVm
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm">CloudBridgeAssetVm</a>

---

##### `vmware_vcenter_input`<sup>Optional</sup> <a name="vmware_vcenter_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.vmwareVcenterInput"></a>

```python
vmware_vcenter_input: CloudBridgeAssetVmwareVcenter
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter">CloudBridgeAssetVmwareVcenter</a>

---

##### `vmware_vm_input`<sup>Optional</sup> <a name="vmware_vm_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.vmwareVmInput"></a>

```python
vmware_vm_input: CloudBridgeAssetVmwareVm
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm">CloudBridgeAssetVmwareVm</a>

---

##### `asset_source_ids`<sup>Required</sup> <a name="asset_source_ids" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.assetSourceIds"></a>

```python
asset_source_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `asset_type`<sup>Required</sup> <a name="asset_type" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.assetType"></a>

```python
asset_type: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `external_asset_key`<sup>Required</sup> <a name="external_asset_key" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.externalAssetKey"></a>

```python
external_asset_key: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `inventory_id`<sup>Required</sup> <a name="inventory_id" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.inventoryId"></a>

```python
inventory_id: str
```

- *Type:* str

---

##### `source_key`<sup>Required</sup> <a name="source_key" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.sourceKey"></a>

```python
source_key: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudBridgeAssetCompute <a name="CloudBridgeAssetCompute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_bridge_asset

cloudBridgeAsset.CloudBridgeAssetCompute(
  connected_networks: typing.Union[int, float] = None,
  cores_count: typing.Union[int, float] = None,
  cpu_model: str = None,
  description: str = None,
  disks: typing.Union[IResolvable, typing.List[CloudBridgeAssetComputeDisks]] = None,
  disks_count: typing.Union[int, float] = None,
  dns_name: str = None,
  firmware: str = None,
  gpu_devices: typing.Union[IResolvable, typing.List[CloudBridgeAssetComputeGpuDevices]] = None,
  gpu_devices_count: typing.Union[int, float] = None,
  guest_state: str = None,
  hardware_version: str = None,
  host_name: str = None,
  is_pmem_enabled: typing.Union[bool, IResolvable] = None,
  is_tpm_enabled: typing.Union[bool, IResolvable] = None,
  latency_sensitivity: str = None,
  memory_in_mbs: str = None,
  nics: typing.Union[IResolvable, typing.List[CloudBridgeAssetComputeNics]] = None,
  nics_count: typing.Union[int, float] = None,
  nvdimm_controller: CloudBridgeAssetComputeNvdimmController = None,
  nvdimms: typing.Union[IResolvable, typing.List[CloudBridgeAssetComputeNvdimms]] = None,
  operating_system: str = None,
  operating_system_version: str = None,
  pmem_in_mbs: str = None,
  power_state: str = None,
  primary_ip: str = None,
  scsi_controller: CloudBridgeAssetComputeScsiController = None,
  storage_provisioned_in_mbs: str = None,
  threads_per_core_count: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.connectedNetworks">connected_networks</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#connected_networks CloudBridgeAsset#connected_networks}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.coresCount">cores_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#cores_count CloudBridgeAsset#cores_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.cpuModel">cpu_model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#cpu_model CloudBridgeAsset#cpu_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#description CloudBridgeAsset#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.disks">disks</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks">CloudBridgeAssetComputeDisks</a>]]</code> | disks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.disksCount">disks_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#disks_count CloudBridgeAsset#disks_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.dnsName">dns_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#dns_name CloudBridgeAsset#dns_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.firmware">firmware</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#firmware CloudBridgeAsset#firmware}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.gpuDevices">gpu_devices</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices">CloudBridgeAssetComputeGpuDevices</a>]]</code> | gpu_devices block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.gpuDevicesCount">gpu_devices_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#gpu_devices_count CloudBridgeAsset#gpu_devices_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.guestState">guest_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#guest_state CloudBridgeAsset#guest_state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.hardwareVersion">hardware_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#hardware_version CloudBridgeAsset#hardware_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.hostName">host_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#host_name CloudBridgeAsset#host_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.isPmemEnabled">is_pmem_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#is_pmem_enabled CloudBridgeAsset#is_pmem_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.isTpmEnabled">is_tpm_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#is_tpm_enabled CloudBridgeAsset#is_tpm_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.latencySensitivity">latency_sensitivity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#latency_sensitivity CloudBridgeAsset#latency_sensitivity}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.memoryInMbs">memory_in_mbs</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#memory_in_mbs CloudBridgeAsset#memory_in_mbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.nics">nics</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics">CloudBridgeAssetComputeNics</a>]]</code> | nics block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.nicsCount">nics_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#nics_count CloudBridgeAsset#nics_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.nvdimmController">nvdimm_controller</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController">CloudBridgeAssetComputeNvdimmController</a></code> | nvdimm_controller block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.nvdimms">nvdimms</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms">CloudBridgeAssetComputeNvdimms</a>]]</code> | nvdimms block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.operatingSystem">operating_system</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#operating_system CloudBridgeAsset#operating_system}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.operatingSystemVersion">operating_system_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#operating_system_version CloudBridgeAsset#operating_system_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.pmemInMbs">pmem_in_mbs</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#pmem_in_mbs CloudBridgeAsset#pmem_in_mbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.powerState">power_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#power_state CloudBridgeAsset#power_state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.primaryIp">primary_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#primary_ip CloudBridgeAsset#primary_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.scsiController">scsi_controller</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController">CloudBridgeAssetComputeScsiController</a></code> | scsi_controller block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.storageProvisionedInMbs">storage_provisioned_in_mbs</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#storage_provisioned_in_mbs CloudBridgeAsset#storage_provisioned_in_mbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.threadsPerCoreCount">threads_per_core_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#threads_per_core_count CloudBridgeAsset#threads_per_core_count}. |

---

##### `connected_networks`<sup>Optional</sup> <a name="connected_networks" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.connectedNetworks"></a>

```python
connected_networks: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#connected_networks CloudBridgeAsset#connected_networks}.

---

##### `cores_count`<sup>Optional</sup> <a name="cores_count" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.coresCount"></a>

```python
cores_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#cores_count CloudBridgeAsset#cores_count}.

---

##### `cpu_model`<sup>Optional</sup> <a name="cpu_model" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.cpuModel"></a>

```python
cpu_model: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#cpu_model CloudBridgeAsset#cpu_model}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#description CloudBridgeAsset#description}.

---

##### `disks`<sup>Optional</sup> <a name="disks" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.disks"></a>

```python
disks: typing.Union[IResolvable, typing.List[CloudBridgeAssetComputeDisks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks">CloudBridgeAssetComputeDisks</a>]]

disks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#disks CloudBridgeAsset#disks}

---

##### `disks_count`<sup>Optional</sup> <a name="disks_count" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.disksCount"></a>

```python
disks_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#disks_count CloudBridgeAsset#disks_count}.

---

##### `dns_name`<sup>Optional</sup> <a name="dns_name" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.dnsName"></a>

```python
dns_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#dns_name CloudBridgeAsset#dns_name}.

---

##### `firmware`<sup>Optional</sup> <a name="firmware" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.firmware"></a>

```python
firmware: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#firmware CloudBridgeAsset#firmware}.

---

##### `gpu_devices`<sup>Optional</sup> <a name="gpu_devices" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.gpuDevices"></a>

```python
gpu_devices: typing.Union[IResolvable, typing.List[CloudBridgeAssetComputeGpuDevices]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices">CloudBridgeAssetComputeGpuDevices</a>]]

gpu_devices block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#gpu_devices CloudBridgeAsset#gpu_devices}

---

##### `gpu_devices_count`<sup>Optional</sup> <a name="gpu_devices_count" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.gpuDevicesCount"></a>

```python
gpu_devices_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#gpu_devices_count CloudBridgeAsset#gpu_devices_count}.

---

##### `guest_state`<sup>Optional</sup> <a name="guest_state" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.guestState"></a>

```python
guest_state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#guest_state CloudBridgeAsset#guest_state}.

---

##### `hardware_version`<sup>Optional</sup> <a name="hardware_version" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.hardwareVersion"></a>

```python
hardware_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#hardware_version CloudBridgeAsset#hardware_version}.

---

##### `host_name`<sup>Optional</sup> <a name="host_name" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#host_name CloudBridgeAsset#host_name}.

---

##### `is_pmem_enabled`<sup>Optional</sup> <a name="is_pmem_enabled" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.isPmemEnabled"></a>

```python
is_pmem_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#is_pmem_enabled CloudBridgeAsset#is_pmem_enabled}.

---

##### `is_tpm_enabled`<sup>Optional</sup> <a name="is_tpm_enabled" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.isTpmEnabled"></a>

```python
is_tpm_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#is_tpm_enabled CloudBridgeAsset#is_tpm_enabled}.

---

##### `latency_sensitivity`<sup>Optional</sup> <a name="latency_sensitivity" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.latencySensitivity"></a>

```python
latency_sensitivity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#latency_sensitivity CloudBridgeAsset#latency_sensitivity}.

---

##### `memory_in_mbs`<sup>Optional</sup> <a name="memory_in_mbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.memoryInMbs"></a>

```python
memory_in_mbs: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#memory_in_mbs CloudBridgeAsset#memory_in_mbs}.

---

##### `nics`<sup>Optional</sup> <a name="nics" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.nics"></a>

```python
nics: typing.Union[IResolvable, typing.List[CloudBridgeAssetComputeNics]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics">CloudBridgeAssetComputeNics</a>]]

nics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#nics CloudBridgeAsset#nics}

---

##### `nics_count`<sup>Optional</sup> <a name="nics_count" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.nicsCount"></a>

```python
nics_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#nics_count CloudBridgeAsset#nics_count}.

---

##### `nvdimm_controller`<sup>Optional</sup> <a name="nvdimm_controller" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.nvdimmController"></a>

```python
nvdimm_controller: CloudBridgeAssetComputeNvdimmController
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController">CloudBridgeAssetComputeNvdimmController</a>

nvdimm_controller block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#nvdimm_controller CloudBridgeAsset#nvdimm_controller}

---

##### `nvdimms`<sup>Optional</sup> <a name="nvdimms" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.nvdimms"></a>

```python
nvdimms: typing.Union[IResolvable, typing.List[CloudBridgeAssetComputeNvdimms]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms">CloudBridgeAssetComputeNvdimms</a>]]

nvdimms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#nvdimms CloudBridgeAsset#nvdimms}

---

##### `operating_system`<sup>Optional</sup> <a name="operating_system" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.operatingSystem"></a>

```python
operating_system: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#operating_system CloudBridgeAsset#operating_system}.

---

##### `operating_system_version`<sup>Optional</sup> <a name="operating_system_version" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.operatingSystemVersion"></a>

```python
operating_system_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#operating_system_version CloudBridgeAsset#operating_system_version}.

---

##### `pmem_in_mbs`<sup>Optional</sup> <a name="pmem_in_mbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.pmemInMbs"></a>

```python
pmem_in_mbs: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#pmem_in_mbs CloudBridgeAsset#pmem_in_mbs}.

---

##### `power_state`<sup>Optional</sup> <a name="power_state" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.powerState"></a>

```python
power_state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#power_state CloudBridgeAsset#power_state}.

---

##### `primary_ip`<sup>Optional</sup> <a name="primary_ip" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.primaryIp"></a>

```python
primary_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#primary_ip CloudBridgeAsset#primary_ip}.

---

##### `scsi_controller`<sup>Optional</sup> <a name="scsi_controller" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.scsiController"></a>

```python
scsi_controller: CloudBridgeAssetComputeScsiController
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController">CloudBridgeAssetComputeScsiController</a>

scsi_controller block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#scsi_controller CloudBridgeAsset#scsi_controller}

---

##### `storage_provisioned_in_mbs`<sup>Optional</sup> <a name="storage_provisioned_in_mbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.storageProvisionedInMbs"></a>

```python
storage_provisioned_in_mbs: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#storage_provisioned_in_mbs CloudBridgeAsset#storage_provisioned_in_mbs}.

---

##### `threads_per_core_count`<sup>Optional</sup> <a name="threads_per_core_count" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.threadsPerCoreCount"></a>

```python
threads_per_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#threads_per_core_count CloudBridgeAsset#threads_per_core_count}.

---

### CloudBridgeAssetComputeDisks <a name="CloudBridgeAssetComputeDisks" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_bridge_asset

cloudBridgeAsset.CloudBridgeAssetComputeDisks(
  boot_order: typing.Union[int, float] = None,
  location: str = None,
  name: str = None,
  persistent_mode: str = None,
  size_in_mbs: str = None,
  uuid: str = None,
  uuid_lun: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.bootOrder">boot_order</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#boot_order CloudBridgeAsset#boot_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#location CloudBridgeAsset#location}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#name CloudBridgeAsset#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.persistentMode">persistent_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#persistent_mode CloudBridgeAsset#persistent_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.sizeInMbs">size_in_mbs</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#size_in_mbs CloudBridgeAsset#size_in_mbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.uuid">uuid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#uuid CloudBridgeAsset#uuid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.uuidLun">uuid_lun</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#uuid_lun CloudBridgeAsset#uuid_lun}. |

---

##### `boot_order`<sup>Optional</sup> <a name="boot_order" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.bootOrder"></a>

```python
boot_order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#boot_order CloudBridgeAsset#boot_order}.

---

##### `location`<sup>Optional</sup> <a name="location" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#location CloudBridgeAsset#location}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#name CloudBridgeAsset#name}.

---

##### `persistent_mode`<sup>Optional</sup> <a name="persistent_mode" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.persistentMode"></a>

```python
persistent_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#persistent_mode CloudBridgeAsset#persistent_mode}.

---

##### `size_in_mbs`<sup>Optional</sup> <a name="size_in_mbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.sizeInMbs"></a>

```python
size_in_mbs: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#size_in_mbs CloudBridgeAsset#size_in_mbs}.

---

##### `uuid`<sup>Optional</sup> <a name="uuid" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#uuid CloudBridgeAsset#uuid}.

---

##### `uuid_lun`<sup>Optional</sup> <a name="uuid_lun" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.uuidLun"></a>

```python
uuid_lun: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#uuid_lun CloudBridgeAsset#uuid_lun}.

---

### CloudBridgeAssetComputeGpuDevices <a name="CloudBridgeAssetComputeGpuDevices" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_bridge_asset

cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices(
  cores_count: typing.Union[int, float] = None,
  description: str = None,
  manufacturer: str = None,
  memory_in_mbs: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices.property.coresCount">cores_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#cores_count CloudBridgeAsset#cores_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#description CloudBridgeAsset#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices.property.manufacturer">manufacturer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#manufacturer CloudBridgeAsset#manufacturer}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices.property.memoryInMbs">memory_in_mbs</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#memory_in_mbs CloudBridgeAsset#memory_in_mbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#name CloudBridgeAsset#name}. |

---

##### `cores_count`<sup>Optional</sup> <a name="cores_count" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices.property.coresCount"></a>

```python
cores_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#cores_count CloudBridgeAsset#cores_count}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#description CloudBridgeAsset#description}.

---

##### `manufacturer`<sup>Optional</sup> <a name="manufacturer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices.property.manufacturer"></a>

```python
manufacturer: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#manufacturer CloudBridgeAsset#manufacturer}.

---

##### `memory_in_mbs`<sup>Optional</sup> <a name="memory_in_mbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices.property.memoryInMbs"></a>

```python
memory_in_mbs: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#memory_in_mbs CloudBridgeAsset#memory_in_mbs}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#name CloudBridgeAsset#name}.

---

### CloudBridgeAssetComputeNics <a name="CloudBridgeAssetComputeNics" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_bridge_asset

cloudBridgeAsset.CloudBridgeAssetComputeNics(
  ip_addresses: typing.List[str] = None,
  label: str = None,
  mac_address: str = None,
  mac_address_type: str = None,
  network_name: str = None,
  switch_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics.property.ipAddresses">ip_addresses</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#ip_addresses CloudBridgeAsset#ip_addresses}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics.property.label">label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#label CloudBridgeAsset#label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics.property.macAddress">mac_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#mac_address CloudBridgeAsset#mac_address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics.property.macAddressType">mac_address_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#mac_address_type CloudBridgeAsset#mac_address_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics.property.networkName">network_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#network_name CloudBridgeAsset#network_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics.property.switchName">switch_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#switch_name CloudBridgeAsset#switch_name}. |

---

##### `ip_addresses`<sup>Optional</sup> <a name="ip_addresses" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics.property.ipAddresses"></a>

```python
ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#ip_addresses CloudBridgeAsset#ip_addresses}.

---

##### `label`<sup>Optional</sup> <a name="label" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics.property.label"></a>

```python
label: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#label CloudBridgeAsset#label}.

---

##### `mac_address`<sup>Optional</sup> <a name="mac_address" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics.property.macAddress"></a>

```python
mac_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#mac_address CloudBridgeAsset#mac_address}.

---

##### `mac_address_type`<sup>Optional</sup> <a name="mac_address_type" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics.property.macAddressType"></a>

```python
mac_address_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#mac_address_type CloudBridgeAsset#mac_address_type}.

---

##### `network_name`<sup>Optional</sup> <a name="network_name" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics.property.networkName"></a>

```python
network_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#network_name CloudBridgeAsset#network_name}.

---

##### `switch_name`<sup>Optional</sup> <a name="switch_name" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics.property.switchName"></a>

```python
switch_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#switch_name CloudBridgeAsset#switch_name}.

---

### CloudBridgeAssetComputeNvdimmController <a name="CloudBridgeAssetComputeNvdimmController" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_bridge_asset

cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController(
  bus_number: typing.Union[int, float] = None,
  label: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController.property.busNumber">bus_number</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#bus_number CloudBridgeAsset#bus_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController.property.label">label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#label CloudBridgeAsset#label}. |

---

##### `bus_number`<sup>Optional</sup> <a name="bus_number" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController.property.busNumber"></a>

```python
bus_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#bus_number CloudBridgeAsset#bus_number}.

---

##### `label`<sup>Optional</sup> <a name="label" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController.property.label"></a>

```python
label: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#label CloudBridgeAsset#label}.

---

### CloudBridgeAssetComputeNvdimms <a name="CloudBridgeAssetComputeNvdimms" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_bridge_asset

cloudBridgeAsset.CloudBridgeAssetComputeNvdimms(
  controller_key: typing.Union[int, float] = None,
  label: str = None,
  unit_number: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms.property.controllerKey">controller_key</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#controller_key CloudBridgeAsset#controller_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms.property.label">label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#label CloudBridgeAsset#label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms.property.unitNumber">unit_number</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#unit_number CloudBridgeAsset#unit_number}. |

---

##### `controller_key`<sup>Optional</sup> <a name="controller_key" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms.property.controllerKey"></a>

```python
controller_key: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#controller_key CloudBridgeAsset#controller_key}.

---

##### `label`<sup>Optional</sup> <a name="label" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms.property.label"></a>

```python
label: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#label CloudBridgeAsset#label}.

---

##### `unit_number`<sup>Optional</sup> <a name="unit_number" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms.property.unitNumber"></a>

```python
unit_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#unit_number CloudBridgeAsset#unit_number}.

---

### CloudBridgeAssetComputeScsiController <a name="CloudBridgeAssetComputeScsiController" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_bridge_asset

cloudBridgeAsset.CloudBridgeAssetComputeScsiController(
  label: str = None,
  shared_bus: str = None,
  unit_number: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController.property.label">label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#label CloudBridgeAsset#label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController.property.sharedBus">shared_bus</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#shared_bus CloudBridgeAsset#shared_bus}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController.property.unitNumber">unit_number</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#unit_number CloudBridgeAsset#unit_number}. |

---

##### `label`<sup>Optional</sup> <a name="label" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController.property.label"></a>

```python
label: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#label CloudBridgeAsset#label}.

---

##### `shared_bus`<sup>Optional</sup> <a name="shared_bus" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController.property.sharedBus"></a>

```python
shared_bus: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#shared_bus CloudBridgeAsset#shared_bus}.

---

##### `unit_number`<sup>Optional</sup> <a name="unit_number" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController.property.unitNumber"></a>

```python
unit_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#unit_number CloudBridgeAsset#unit_number}.

---

### CloudBridgeAssetConfig <a name="CloudBridgeAssetConfig" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_bridge_asset

cloudBridgeAsset.CloudBridgeAssetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  asset_type: str,
  compartment_id: str,
  external_asset_key: str,
  inventory_id: str,
  source_key: str,
  asset_source_ids: typing.List[str] = None,
  compute: CloudBridgeAssetCompute = None,
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  timeouts: CloudBridgeAssetTimeouts = None,
  vm: CloudBridgeAssetVm = None,
  vmware_vcenter: CloudBridgeAssetVmwareVcenter = None,
  vmware_vm: CloudBridgeAssetVmwareVm = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.assetType">asset_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#asset_type CloudBridgeAsset#asset_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#compartment_id CloudBridgeAsset#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.externalAssetKey">external_asset_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#external_asset_key CloudBridgeAsset#external_asset_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.inventoryId">inventory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#inventory_id CloudBridgeAsset#inventory_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.sourceKey">source_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#source_key CloudBridgeAsset#source_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.assetSourceIds">asset_source_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#asset_source_ids CloudBridgeAsset#asset_source_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.compute">compute</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute">CloudBridgeAssetCompute</a></code> | compute block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#defined_tags CloudBridgeAsset#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#display_name CloudBridgeAsset#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#freeform_tags CloudBridgeAsset#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#id CloudBridgeAsset#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts">CloudBridgeAssetTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.vm">vm</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm">CloudBridgeAssetVm</a></code> | vm block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.vmwareVcenter">vmware_vcenter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter">CloudBridgeAssetVmwareVcenter</a></code> | vmware_vcenter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.vmwareVm">vmware_vm</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm">CloudBridgeAssetVmwareVm</a></code> | vmware_vm block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `asset_type`<sup>Required</sup> <a name="asset_type" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.assetType"></a>

```python
asset_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#asset_type CloudBridgeAsset#asset_type}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#compartment_id CloudBridgeAsset#compartment_id}.

---

##### `external_asset_key`<sup>Required</sup> <a name="external_asset_key" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.externalAssetKey"></a>

```python
external_asset_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#external_asset_key CloudBridgeAsset#external_asset_key}.

---

##### `inventory_id`<sup>Required</sup> <a name="inventory_id" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.inventoryId"></a>

```python
inventory_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#inventory_id CloudBridgeAsset#inventory_id}.

---

##### `source_key`<sup>Required</sup> <a name="source_key" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.sourceKey"></a>

```python
source_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#source_key CloudBridgeAsset#source_key}.

---

##### `asset_source_ids`<sup>Optional</sup> <a name="asset_source_ids" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.assetSourceIds"></a>

```python
asset_source_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#asset_source_ids CloudBridgeAsset#asset_source_ids}.

---

##### `compute`<sup>Optional</sup> <a name="compute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.compute"></a>

```python
compute: CloudBridgeAssetCompute
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute">CloudBridgeAssetCompute</a>

compute block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#compute CloudBridgeAsset#compute}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#defined_tags CloudBridgeAsset#defined_tags}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#display_name CloudBridgeAsset#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#freeform_tags CloudBridgeAsset#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#id CloudBridgeAsset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.timeouts"></a>

```python
timeouts: CloudBridgeAssetTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts">CloudBridgeAssetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#timeouts CloudBridgeAsset#timeouts}

---

##### `vm`<sup>Optional</sup> <a name="vm" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.vm"></a>

```python
vm: CloudBridgeAssetVm
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm">CloudBridgeAssetVm</a>

vm block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#vm CloudBridgeAsset#vm}

---

##### `vmware_vcenter`<sup>Optional</sup> <a name="vmware_vcenter" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.vmwareVcenter"></a>

```python
vmware_vcenter: CloudBridgeAssetVmwareVcenter
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter">CloudBridgeAssetVmwareVcenter</a>

vmware_vcenter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#vmware_vcenter CloudBridgeAsset#vmware_vcenter}

---

##### `vmware_vm`<sup>Optional</sup> <a name="vmware_vm" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.vmwareVm"></a>

```python
vmware_vm: CloudBridgeAssetVmwareVm
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm">CloudBridgeAssetVmwareVm</a>

vmware_vm block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#vmware_vm CloudBridgeAsset#vmware_vm}

---

### CloudBridgeAssetTimeouts <a name="CloudBridgeAssetTimeouts" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_bridge_asset

cloudBridgeAsset.CloudBridgeAssetTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#create CloudBridgeAsset#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#delete CloudBridgeAsset#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#update CloudBridgeAsset#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#create CloudBridgeAsset#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#delete CloudBridgeAsset#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#update CloudBridgeAsset#update}.

---

### CloudBridgeAssetVm <a name="CloudBridgeAssetVm" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_bridge_asset

cloudBridgeAsset.CloudBridgeAssetVm(
  hypervisor_host: str = None,
  hypervisor_vendor: str = None,
  hypervisor_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm.property.hypervisorHost">hypervisor_host</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#hypervisor_host CloudBridgeAsset#hypervisor_host}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm.property.hypervisorVendor">hypervisor_vendor</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#hypervisor_vendor CloudBridgeAsset#hypervisor_vendor}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm.property.hypervisorVersion">hypervisor_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#hypervisor_version CloudBridgeAsset#hypervisor_version}. |

---

##### `hypervisor_host`<sup>Optional</sup> <a name="hypervisor_host" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm.property.hypervisorHost"></a>

```python
hypervisor_host: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#hypervisor_host CloudBridgeAsset#hypervisor_host}.

---

##### `hypervisor_vendor`<sup>Optional</sup> <a name="hypervisor_vendor" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm.property.hypervisorVendor"></a>

```python
hypervisor_vendor: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#hypervisor_vendor CloudBridgeAsset#hypervisor_vendor}.

---

##### `hypervisor_version`<sup>Optional</sup> <a name="hypervisor_version" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm.property.hypervisorVersion"></a>

```python
hypervisor_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#hypervisor_version CloudBridgeAsset#hypervisor_version}.

---

### CloudBridgeAssetVmwareVcenter <a name="CloudBridgeAssetVmwareVcenter" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_bridge_asset

cloudBridgeAsset.CloudBridgeAssetVmwareVcenter(
  data_center: str = None,
  vcenter_key: str = None,
  vcenter_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter.property.dataCenter">data_center</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#data_center CloudBridgeAsset#data_center}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter.property.vcenterKey">vcenter_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#vcenter_key CloudBridgeAsset#vcenter_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter.property.vcenterVersion">vcenter_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#vcenter_version CloudBridgeAsset#vcenter_version}. |

---

##### `data_center`<sup>Optional</sup> <a name="data_center" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter.property.dataCenter"></a>

```python
data_center: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#data_center CloudBridgeAsset#data_center}.

---

##### `vcenter_key`<sup>Optional</sup> <a name="vcenter_key" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter.property.vcenterKey"></a>

```python
vcenter_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#vcenter_key CloudBridgeAsset#vcenter_key}.

---

##### `vcenter_version`<sup>Optional</sup> <a name="vcenter_version" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter.property.vcenterVersion"></a>

```python
vcenter_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#vcenter_version CloudBridgeAsset#vcenter_version}.

---

### CloudBridgeAssetVmwareVm <a name="CloudBridgeAssetVmwareVm" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_bridge_asset

cloudBridgeAsset.CloudBridgeAssetVmwareVm(
  cluster: str = None,
  customer_fields: typing.List[str] = None,
  customer_tags: typing.Union[IResolvable, typing.List[CloudBridgeAssetVmwareVmCustomerTags]] = None,
  fault_tolerance_bandwidth: typing.Union[int, float] = None,
  fault_tolerance_secondary_latency: typing.Union[int, float] = None,
  fault_tolerance_state: str = None,
  instance_uuid: str = None,
  is_disks_cbt_enabled: typing.Union[bool, IResolvable] = None,
  is_disks_uuid_enabled: typing.Union[bool, IResolvable] = None,
  path: str = None,
  vmware_tools_status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.cluster">cluster</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#cluster CloudBridgeAsset#cluster}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.customerFields">customer_fields</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#customer_fields CloudBridgeAsset#customer_fields}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.customerTags">customer_tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTags">CloudBridgeAssetVmwareVmCustomerTags</a>]]</code> | customer_tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.faultToleranceBandwidth">fault_tolerance_bandwidth</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#fault_tolerance_bandwidth CloudBridgeAsset#fault_tolerance_bandwidth}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.faultToleranceSecondaryLatency">fault_tolerance_secondary_latency</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#fault_tolerance_secondary_latency CloudBridgeAsset#fault_tolerance_secondary_latency}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.faultToleranceState">fault_tolerance_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#fault_tolerance_state CloudBridgeAsset#fault_tolerance_state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.instanceUuid">instance_uuid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#instance_uuid CloudBridgeAsset#instance_uuid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.isDisksCbtEnabled">is_disks_cbt_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#is_disks_cbt_enabled CloudBridgeAsset#is_disks_cbt_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.isDisksUuidEnabled">is_disks_uuid_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#is_disks_uuid_enabled CloudBridgeAsset#is_disks_uuid_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#path CloudBridgeAsset#path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.vmwareToolsStatus">vmware_tools_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#vmware_tools_status CloudBridgeAsset#vmware_tools_status}. |

---

##### `cluster`<sup>Optional</sup> <a name="cluster" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#cluster CloudBridgeAsset#cluster}.

---

##### `customer_fields`<sup>Optional</sup> <a name="customer_fields" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.customerFields"></a>

```python
customer_fields: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#customer_fields CloudBridgeAsset#customer_fields}.

---

##### `customer_tags`<sup>Optional</sup> <a name="customer_tags" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.customerTags"></a>

```python
customer_tags: typing.Union[IResolvable, typing.List[CloudBridgeAssetVmwareVmCustomerTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTags">CloudBridgeAssetVmwareVmCustomerTags</a>]]

customer_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#customer_tags CloudBridgeAsset#customer_tags}

---

##### `fault_tolerance_bandwidth`<sup>Optional</sup> <a name="fault_tolerance_bandwidth" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.faultToleranceBandwidth"></a>

```python
fault_tolerance_bandwidth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#fault_tolerance_bandwidth CloudBridgeAsset#fault_tolerance_bandwidth}.

---

##### `fault_tolerance_secondary_latency`<sup>Optional</sup> <a name="fault_tolerance_secondary_latency" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.faultToleranceSecondaryLatency"></a>

```python
fault_tolerance_secondary_latency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#fault_tolerance_secondary_latency CloudBridgeAsset#fault_tolerance_secondary_latency}.

---

##### `fault_tolerance_state`<sup>Optional</sup> <a name="fault_tolerance_state" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.faultToleranceState"></a>

```python
fault_tolerance_state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#fault_tolerance_state CloudBridgeAsset#fault_tolerance_state}.

---

##### `instance_uuid`<sup>Optional</sup> <a name="instance_uuid" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.instanceUuid"></a>

```python
instance_uuid: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#instance_uuid CloudBridgeAsset#instance_uuid}.

---

##### `is_disks_cbt_enabled`<sup>Optional</sup> <a name="is_disks_cbt_enabled" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.isDisksCbtEnabled"></a>

```python
is_disks_cbt_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#is_disks_cbt_enabled CloudBridgeAsset#is_disks_cbt_enabled}.

---

##### `is_disks_uuid_enabled`<sup>Optional</sup> <a name="is_disks_uuid_enabled" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.isDisksUuidEnabled"></a>

```python
is_disks_uuid_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#is_disks_uuid_enabled CloudBridgeAsset#is_disks_uuid_enabled}.

---

##### `path`<sup>Optional</sup> <a name="path" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#path CloudBridgeAsset#path}.

---

##### `vmware_tools_status`<sup>Optional</sup> <a name="vmware_tools_status" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.vmwareToolsStatus"></a>

```python
vmware_tools_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#vmware_tools_status CloudBridgeAsset#vmware_tools_status}.

---

### CloudBridgeAssetVmwareVmCustomerTags <a name="CloudBridgeAssetVmwareVmCustomerTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTags.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_bridge_asset

cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTags(
  description: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTags.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#description CloudBridgeAsset#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTags.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#name CloudBridgeAsset#name}. |

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTags.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#description CloudBridgeAsset#description}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTags.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#name CloudBridgeAsset#name}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudBridgeAssetComputeDisksList <a name="CloudBridgeAssetComputeDisksList" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_bridge_asset

cloudBridgeAsset.CloudBridgeAssetComputeDisksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudBridgeAssetComputeDisksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks">CloudBridgeAssetComputeDisks</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudBridgeAssetComputeDisks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks">CloudBridgeAssetComputeDisks</a>]]

---


### CloudBridgeAssetComputeDisksOutputReference <a name="CloudBridgeAssetComputeDisksOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_bridge_asset

cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetBootOrder">reset_boot_order</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetPersistentMode">reset_persistent_mode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetSizeInMbs">reset_size_in_mbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetUuid">reset_uuid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetUuidLun">reset_uuid_lun</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_boot_order` <a name="reset_boot_order" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetBootOrder"></a>

```python
def reset_boot_order() -> None
```

##### `reset_location` <a name="reset_location" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_persistent_mode` <a name="reset_persistent_mode" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetPersistentMode"></a>

```python
def reset_persistent_mode() -> None
```

##### `reset_size_in_mbs` <a name="reset_size_in_mbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetSizeInMbs"></a>

```python
def reset_size_in_mbs() -> None
```

##### `reset_uuid` <a name="reset_uuid" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetUuid"></a>

```python
def reset_uuid() -> None
```

##### `reset_uuid_lun` <a name="reset_uuid_lun" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetUuidLun"></a>

```python
def reset_uuid_lun() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.bootOrderInput">boot_order_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.persistentModeInput">persistent_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.sizeInMbsInput">size_in_mbs_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.uuidInput">uuid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.uuidLunInput">uuid_lun_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.bootOrder">boot_order</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.persistentMode">persistent_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.sizeInMbs">size_in_mbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.uuid">uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.uuidLun">uuid_lun</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks">CloudBridgeAssetComputeDisks</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `boot_order_input`<sup>Optional</sup> <a name="boot_order_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.bootOrderInput"></a>

```python
boot_order_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `persistent_mode_input`<sup>Optional</sup> <a name="persistent_mode_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.persistentModeInput"></a>

```python
persistent_mode_input: str
```

- *Type:* str

---

##### `size_in_mbs_input`<sup>Optional</sup> <a name="size_in_mbs_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.sizeInMbsInput"></a>

```python
size_in_mbs_input: str
```

- *Type:* str

---

##### `uuid_input`<sup>Optional</sup> <a name="uuid_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.uuidInput"></a>

```python
uuid_input: str
```

- *Type:* str

---

##### `uuid_lun_input`<sup>Optional</sup> <a name="uuid_lun_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.uuidLunInput"></a>

```python
uuid_lun_input: str
```

- *Type:* str

---

##### `boot_order`<sup>Required</sup> <a name="boot_order" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.bootOrder"></a>

```python
boot_order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `persistent_mode`<sup>Required</sup> <a name="persistent_mode" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.persistentMode"></a>

```python
persistent_mode: str
```

- *Type:* str

---

##### `size_in_mbs`<sup>Required</sup> <a name="size_in_mbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.sizeInMbs"></a>

```python
size_in_mbs: str
```

- *Type:* str

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

---

##### `uuid_lun`<sup>Required</sup> <a name="uuid_lun" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.uuidLun"></a>

```python
uuid_lun: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CloudBridgeAssetComputeDisks]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks">CloudBridgeAssetComputeDisks</a>]

---


### CloudBridgeAssetComputeGpuDevicesList <a name="CloudBridgeAssetComputeGpuDevicesList" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_bridge_asset

cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudBridgeAssetComputeGpuDevicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices">CloudBridgeAssetComputeGpuDevices</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudBridgeAssetComputeGpuDevices]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices">CloudBridgeAssetComputeGpuDevices</a>]]

---


### CloudBridgeAssetComputeGpuDevicesOutputReference <a name="CloudBridgeAssetComputeGpuDevicesOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_bridge_asset

cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.resetCoresCount">reset_cores_count</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.resetManufacturer">reset_manufacturer</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.resetMemoryInMbs">reset_memory_in_mbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cores_count` <a name="reset_cores_count" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.resetCoresCount"></a>

```python
def reset_cores_count() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_manufacturer` <a name="reset_manufacturer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.resetManufacturer"></a>

```python
def reset_manufacturer() -> None
```

##### `reset_memory_in_mbs` <a name="reset_memory_in_mbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.resetMemoryInMbs"></a>

```python
def reset_memory_in_mbs() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.coresCountInput">cores_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.manufacturerInput">manufacturer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.memoryInMbsInput">memory_in_mbs_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.coresCount">cores_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.manufacturer">manufacturer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.memoryInMbs">memory_in_mbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices">CloudBridgeAssetComputeGpuDevices</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cores_count_input`<sup>Optional</sup> <a name="cores_count_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.coresCountInput"></a>

```python
cores_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `manufacturer_input`<sup>Optional</sup> <a name="manufacturer_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.manufacturerInput"></a>

```python
manufacturer_input: str
```

- *Type:* str

---

##### `memory_in_mbs_input`<sup>Optional</sup> <a name="memory_in_mbs_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.memoryInMbsInput"></a>

```python
memory_in_mbs_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `cores_count`<sup>Required</sup> <a name="cores_count" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.coresCount"></a>

```python
cores_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `manufacturer`<sup>Required</sup> <a name="manufacturer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.manufacturer"></a>

```python
manufacturer: str
```

- *Type:* str

---

##### `memory_in_mbs`<sup>Required</sup> <a name="memory_in_mbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.memoryInMbs"></a>

```python
memory_in_mbs: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CloudBridgeAssetComputeGpuDevices]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices">CloudBridgeAssetComputeGpuDevices</a>]

---


### CloudBridgeAssetComputeNicsList <a name="CloudBridgeAssetComputeNicsList" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_bridge_asset

cloudBridgeAsset.CloudBridgeAssetComputeNicsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudBridgeAssetComputeNicsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics">CloudBridgeAssetComputeNics</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudBridgeAssetComputeNics]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics">CloudBridgeAssetComputeNics</a>]]

---


### CloudBridgeAssetComputeNicsOutputReference <a name="CloudBridgeAssetComputeNicsOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_bridge_asset

cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resetIpAddresses">reset_ip_addresses</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resetLabel">reset_label</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resetMacAddress">reset_mac_address</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resetMacAddressType">reset_mac_address_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resetNetworkName">reset_network_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resetSwitchName">reset_switch_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ip_addresses` <a name="reset_ip_addresses" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resetIpAddresses"></a>

```python
def reset_ip_addresses() -> None
```

##### `reset_label` <a name="reset_label" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resetLabel"></a>

```python
def reset_label() -> None
```

##### `reset_mac_address` <a name="reset_mac_address" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resetMacAddress"></a>

```python
def reset_mac_address() -> None
```

##### `reset_mac_address_type` <a name="reset_mac_address_type" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resetMacAddressType"></a>

```python
def reset_mac_address_type() -> None
```

##### `reset_network_name` <a name="reset_network_name" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resetNetworkName"></a>

```python
def reset_network_name() -> None
```

##### `reset_switch_name` <a name="reset_switch_name" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resetSwitchName"></a>

```python
def reset_switch_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.ipAddressesInput">ip_addresses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.labelInput">label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.macAddressInput">mac_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.macAddressTypeInput">mac_address_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.networkNameInput">network_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.switchNameInput">switch_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.ipAddresses">ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.macAddress">mac_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.macAddressType">mac_address_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.networkName">network_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.switchName">switch_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics">CloudBridgeAssetComputeNics</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_addresses_input`<sup>Optional</sup> <a name="ip_addresses_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.ipAddressesInput"></a>

```python
ip_addresses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `label_input`<sup>Optional</sup> <a name="label_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.labelInput"></a>

```python
label_input: str
```

- *Type:* str

---

##### `mac_address_input`<sup>Optional</sup> <a name="mac_address_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.macAddressInput"></a>

```python
mac_address_input: str
```

- *Type:* str

---

##### `mac_address_type_input`<sup>Optional</sup> <a name="mac_address_type_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.macAddressTypeInput"></a>

```python
mac_address_type_input: str
```

- *Type:* str

---

##### `network_name_input`<sup>Optional</sup> <a name="network_name_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.networkNameInput"></a>

```python
network_name_input: str
```

- *Type:* str

---

##### `switch_name_input`<sup>Optional</sup> <a name="switch_name_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.switchNameInput"></a>

```python
switch_name_input: str
```

- *Type:* str

---

##### `ip_addresses`<sup>Required</sup> <a name="ip_addresses" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.ipAddresses"></a>

```python
ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `label`<sup>Required</sup> <a name="label" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `mac_address`<sup>Required</sup> <a name="mac_address" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.macAddress"></a>

```python
mac_address: str
```

- *Type:* str

---

##### `mac_address_type`<sup>Required</sup> <a name="mac_address_type" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.macAddressType"></a>

```python
mac_address_type: str
```

- *Type:* str

---

##### `network_name`<sup>Required</sup> <a name="network_name" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.networkName"></a>

```python
network_name: str
```

- *Type:* str

---

##### `switch_name`<sup>Required</sup> <a name="switch_name" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.switchName"></a>

```python
switch_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CloudBridgeAssetComputeNics]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics">CloudBridgeAssetComputeNics</a>]

---


### CloudBridgeAssetComputeNvdimmControllerOutputReference <a name="CloudBridgeAssetComputeNvdimmControllerOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_bridge_asset

cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.resetBusNumber">reset_bus_number</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.resetLabel">reset_label</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bus_number` <a name="reset_bus_number" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.resetBusNumber"></a>

```python
def reset_bus_number() -> None
```

##### `reset_label` <a name="reset_label" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.resetLabel"></a>

```python
def reset_label() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.busNumberInput">bus_number_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.labelInput">label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.busNumber">bus_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController">CloudBridgeAssetComputeNvdimmController</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bus_number_input`<sup>Optional</sup> <a name="bus_number_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.busNumberInput"></a>

```python
bus_number_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `label_input`<sup>Optional</sup> <a name="label_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.labelInput"></a>

```python
label_input: str
```

- *Type:* str

---

##### `bus_number`<sup>Required</sup> <a name="bus_number" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.busNumber"></a>

```python
bus_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `label`<sup>Required</sup> <a name="label" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.internalValue"></a>

```python
internal_value: CloudBridgeAssetComputeNvdimmController
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController">CloudBridgeAssetComputeNvdimmController</a>

---


### CloudBridgeAssetComputeNvdimmsList <a name="CloudBridgeAssetComputeNvdimmsList" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_bridge_asset

cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudBridgeAssetComputeNvdimmsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms">CloudBridgeAssetComputeNvdimms</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudBridgeAssetComputeNvdimms]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms">CloudBridgeAssetComputeNvdimms</a>]]

---


### CloudBridgeAssetComputeNvdimmsOutputReference <a name="CloudBridgeAssetComputeNvdimmsOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_bridge_asset

cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.resetControllerKey">reset_controller_key</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.resetLabel">reset_label</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.resetUnitNumber">reset_unit_number</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_controller_key` <a name="reset_controller_key" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.resetControllerKey"></a>

```python
def reset_controller_key() -> None
```

##### `reset_label` <a name="reset_label" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.resetLabel"></a>

```python
def reset_label() -> None
```

##### `reset_unit_number` <a name="reset_unit_number" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.resetUnitNumber"></a>

```python
def reset_unit_number() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.controllerKeyInput">controller_key_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.labelInput">label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.unitNumberInput">unit_number_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.controllerKey">controller_key</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.unitNumber">unit_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms">CloudBridgeAssetComputeNvdimms</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `controller_key_input`<sup>Optional</sup> <a name="controller_key_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.controllerKeyInput"></a>

```python
controller_key_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `label_input`<sup>Optional</sup> <a name="label_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.labelInput"></a>

```python
label_input: str
```

- *Type:* str

---

##### `unit_number_input`<sup>Optional</sup> <a name="unit_number_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.unitNumberInput"></a>

```python
unit_number_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `controller_key`<sup>Required</sup> <a name="controller_key" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.controllerKey"></a>

```python
controller_key: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `label`<sup>Required</sup> <a name="label" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `unit_number`<sup>Required</sup> <a name="unit_number" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.unitNumber"></a>

```python
unit_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CloudBridgeAssetComputeNvdimms]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms">CloudBridgeAssetComputeNvdimms</a>]

---


### CloudBridgeAssetComputeOutputReference <a name="CloudBridgeAssetComputeOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_bridge_asset

cloudBridgeAsset.CloudBridgeAssetComputeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putDisks">put_disks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putGpuDevices">put_gpu_devices</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putNics">put_nics</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putNvdimmController">put_nvdimm_controller</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putNvdimms">put_nvdimms</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putScsiController">put_scsi_controller</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetConnectedNetworks">reset_connected_networks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetCoresCount">reset_cores_count</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetCpuModel">reset_cpu_model</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetDisks">reset_disks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetDisksCount">reset_disks_count</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetDnsName">reset_dns_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetFirmware">reset_firmware</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetGpuDevices">reset_gpu_devices</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetGpuDevicesCount">reset_gpu_devices_count</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetGuestState">reset_guest_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetHardwareVersion">reset_hardware_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetHostName">reset_host_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetIsPmemEnabled">reset_is_pmem_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetIsTpmEnabled">reset_is_tpm_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetLatencySensitivity">reset_latency_sensitivity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetMemoryInMbs">reset_memory_in_mbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetNics">reset_nics</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetNicsCount">reset_nics_count</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetNvdimmController">reset_nvdimm_controller</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetNvdimms">reset_nvdimms</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetOperatingSystem">reset_operating_system</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetOperatingSystemVersion">reset_operating_system_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetPmemInMbs">reset_pmem_in_mbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetPowerState">reset_power_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetPrimaryIp">reset_primary_ip</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetScsiController">reset_scsi_controller</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetStorageProvisionedInMbs">reset_storage_provisioned_in_mbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetThreadsPerCoreCount">reset_threads_per_core_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_disks` <a name="put_disks" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putDisks"></a>

```python
def put_disks(
  value: typing.Union[IResolvable, typing.List[CloudBridgeAssetComputeDisks]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putDisks.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks">CloudBridgeAssetComputeDisks</a>]]

---

##### `put_gpu_devices` <a name="put_gpu_devices" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putGpuDevices"></a>

```python
def put_gpu_devices(
  value: typing.Union[IResolvable, typing.List[CloudBridgeAssetComputeGpuDevices]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putGpuDevices.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices">CloudBridgeAssetComputeGpuDevices</a>]]

---

##### `put_nics` <a name="put_nics" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putNics"></a>

```python
def put_nics(
  value: typing.Union[IResolvable, typing.List[CloudBridgeAssetComputeNics]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putNics.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics">CloudBridgeAssetComputeNics</a>]]

---

##### `put_nvdimm_controller` <a name="put_nvdimm_controller" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putNvdimmController"></a>

```python
def put_nvdimm_controller(
  bus_number: typing.Union[int, float] = None,
  label: str = None
) -> None
```

###### `bus_number`<sup>Optional</sup> <a name="bus_number" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putNvdimmController.parameter.busNumber"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#bus_number CloudBridgeAsset#bus_number}.

---

###### `label`<sup>Optional</sup> <a name="label" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putNvdimmController.parameter.label"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#label CloudBridgeAsset#label}.

---

##### `put_nvdimms` <a name="put_nvdimms" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putNvdimms"></a>

```python
def put_nvdimms(
  value: typing.Union[IResolvable, typing.List[CloudBridgeAssetComputeNvdimms]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putNvdimms.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms">CloudBridgeAssetComputeNvdimms</a>]]

---

##### `put_scsi_controller` <a name="put_scsi_controller" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putScsiController"></a>

```python
def put_scsi_controller(
  label: str = None,
  shared_bus: str = None,
  unit_number: typing.Union[int, float] = None
) -> None
```

###### `label`<sup>Optional</sup> <a name="label" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putScsiController.parameter.label"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#label CloudBridgeAsset#label}.

---

###### `shared_bus`<sup>Optional</sup> <a name="shared_bus" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putScsiController.parameter.sharedBus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#shared_bus CloudBridgeAsset#shared_bus}.

---

###### `unit_number`<sup>Optional</sup> <a name="unit_number" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putScsiController.parameter.unitNumber"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#unit_number CloudBridgeAsset#unit_number}.

---

##### `reset_connected_networks` <a name="reset_connected_networks" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetConnectedNetworks"></a>

```python
def reset_connected_networks() -> None
```

##### `reset_cores_count` <a name="reset_cores_count" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetCoresCount"></a>

```python
def reset_cores_count() -> None
```

##### `reset_cpu_model` <a name="reset_cpu_model" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetCpuModel"></a>

```python
def reset_cpu_model() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disks` <a name="reset_disks" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetDisks"></a>

```python
def reset_disks() -> None
```

##### `reset_disks_count` <a name="reset_disks_count" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetDisksCount"></a>

```python
def reset_disks_count() -> None
```

##### `reset_dns_name` <a name="reset_dns_name" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetDnsName"></a>

```python
def reset_dns_name() -> None
```

##### `reset_firmware` <a name="reset_firmware" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetFirmware"></a>

```python
def reset_firmware() -> None
```

##### `reset_gpu_devices` <a name="reset_gpu_devices" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetGpuDevices"></a>

```python
def reset_gpu_devices() -> None
```

##### `reset_gpu_devices_count` <a name="reset_gpu_devices_count" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetGpuDevicesCount"></a>

```python
def reset_gpu_devices_count() -> None
```

##### `reset_guest_state` <a name="reset_guest_state" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetGuestState"></a>

```python
def reset_guest_state() -> None
```

##### `reset_hardware_version` <a name="reset_hardware_version" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetHardwareVersion"></a>

```python
def reset_hardware_version() -> None
```

##### `reset_host_name` <a name="reset_host_name" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetHostName"></a>

```python
def reset_host_name() -> None
```

##### `reset_is_pmem_enabled` <a name="reset_is_pmem_enabled" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetIsPmemEnabled"></a>

```python
def reset_is_pmem_enabled() -> None
```

##### `reset_is_tpm_enabled` <a name="reset_is_tpm_enabled" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetIsTpmEnabled"></a>

```python
def reset_is_tpm_enabled() -> None
```

##### `reset_latency_sensitivity` <a name="reset_latency_sensitivity" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetLatencySensitivity"></a>

```python
def reset_latency_sensitivity() -> None
```

##### `reset_memory_in_mbs` <a name="reset_memory_in_mbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetMemoryInMbs"></a>

```python
def reset_memory_in_mbs() -> None
```

##### `reset_nics` <a name="reset_nics" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetNics"></a>

```python
def reset_nics() -> None
```

##### `reset_nics_count` <a name="reset_nics_count" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetNicsCount"></a>

```python
def reset_nics_count() -> None
```

##### `reset_nvdimm_controller` <a name="reset_nvdimm_controller" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetNvdimmController"></a>

```python
def reset_nvdimm_controller() -> None
```

##### `reset_nvdimms` <a name="reset_nvdimms" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetNvdimms"></a>

```python
def reset_nvdimms() -> None
```

##### `reset_operating_system` <a name="reset_operating_system" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetOperatingSystem"></a>

```python
def reset_operating_system() -> None
```

##### `reset_operating_system_version` <a name="reset_operating_system_version" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetOperatingSystemVersion"></a>

```python
def reset_operating_system_version() -> None
```

##### `reset_pmem_in_mbs` <a name="reset_pmem_in_mbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetPmemInMbs"></a>

```python
def reset_pmem_in_mbs() -> None
```

##### `reset_power_state` <a name="reset_power_state" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetPowerState"></a>

```python
def reset_power_state() -> None
```

##### `reset_primary_ip` <a name="reset_primary_ip" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetPrimaryIp"></a>

```python
def reset_primary_ip() -> None
```

##### `reset_scsi_controller` <a name="reset_scsi_controller" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetScsiController"></a>

```python
def reset_scsi_controller() -> None
```

##### `reset_storage_provisioned_in_mbs` <a name="reset_storage_provisioned_in_mbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetStorageProvisionedInMbs"></a>

```python
def reset_storage_provisioned_in_mbs() -> None
```

##### `reset_threads_per_core_count` <a name="reset_threads_per_core_count" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetThreadsPerCoreCount"></a>

```python
def reset_threads_per_core_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.disks">disks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList">CloudBridgeAssetComputeDisksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.gpuDevices">gpu_devices</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList">CloudBridgeAssetComputeGpuDevicesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nics">nics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList">CloudBridgeAssetComputeNicsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nvdimmController">nvdimm_controller</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference">CloudBridgeAssetComputeNvdimmControllerOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nvdimms">nvdimms</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList">CloudBridgeAssetComputeNvdimmsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.scsiController">scsi_controller</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference">CloudBridgeAssetComputeScsiControllerOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.connectedNetworksInput">connected_networks_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.coresCountInput">cores_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.cpuModelInput">cpu_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.disksCountInput">disks_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.disksInput">disks_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks">CloudBridgeAssetComputeDisks</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.dnsNameInput">dns_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.firmwareInput">firmware_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.gpuDevicesCountInput">gpu_devices_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.gpuDevicesInput">gpu_devices_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices">CloudBridgeAssetComputeGpuDevices</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.guestStateInput">guest_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.hardwareVersionInput">hardware_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.hostNameInput">host_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.isPmemEnabledInput">is_pmem_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.isTpmEnabledInput">is_tpm_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.latencySensitivityInput">latency_sensitivity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.memoryInMbsInput">memory_in_mbs_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nicsCountInput">nics_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nicsInput">nics_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics">CloudBridgeAssetComputeNics</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nvdimmControllerInput">nvdimm_controller_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController">CloudBridgeAssetComputeNvdimmController</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nvdimmsInput">nvdimms_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms">CloudBridgeAssetComputeNvdimms</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.operatingSystemInput">operating_system_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.operatingSystemVersionInput">operating_system_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.pmemInMbsInput">pmem_in_mbs_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.powerStateInput">power_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.primaryIpInput">primary_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.scsiControllerInput">scsi_controller_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController">CloudBridgeAssetComputeScsiController</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.storageProvisionedInMbsInput">storage_provisioned_in_mbs_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.threadsPerCoreCountInput">threads_per_core_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.connectedNetworks">connected_networks</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.coresCount">cores_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.cpuModel">cpu_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.disksCount">disks_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.dnsName">dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.firmware">firmware</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.gpuDevicesCount">gpu_devices_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.guestState">guest_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.hardwareVersion">hardware_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.hostName">host_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.isPmemEnabled">is_pmem_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.isTpmEnabled">is_tpm_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.latencySensitivity">latency_sensitivity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.memoryInMbs">memory_in_mbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nicsCount">nics_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.operatingSystem">operating_system</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.operatingSystemVersion">operating_system_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.pmemInMbs">pmem_in_mbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.powerState">power_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.primaryIp">primary_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.storageProvisionedInMbs">storage_provisioned_in_mbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.threadsPerCoreCount">threads_per_core_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute">CloudBridgeAssetCompute</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disks`<sup>Required</sup> <a name="disks" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.disks"></a>

```python
disks: CloudBridgeAssetComputeDisksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList">CloudBridgeAssetComputeDisksList</a>

---

##### `gpu_devices`<sup>Required</sup> <a name="gpu_devices" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.gpuDevices"></a>

```python
gpu_devices: CloudBridgeAssetComputeGpuDevicesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList">CloudBridgeAssetComputeGpuDevicesList</a>

---

##### `nics`<sup>Required</sup> <a name="nics" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nics"></a>

```python
nics: CloudBridgeAssetComputeNicsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList">CloudBridgeAssetComputeNicsList</a>

---

##### `nvdimm_controller`<sup>Required</sup> <a name="nvdimm_controller" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nvdimmController"></a>

```python
nvdimm_controller: CloudBridgeAssetComputeNvdimmControllerOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference">CloudBridgeAssetComputeNvdimmControllerOutputReference</a>

---

##### `nvdimms`<sup>Required</sup> <a name="nvdimms" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nvdimms"></a>

```python
nvdimms: CloudBridgeAssetComputeNvdimmsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList">CloudBridgeAssetComputeNvdimmsList</a>

---

##### `scsi_controller`<sup>Required</sup> <a name="scsi_controller" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.scsiController"></a>

```python
scsi_controller: CloudBridgeAssetComputeScsiControllerOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference">CloudBridgeAssetComputeScsiControllerOutputReference</a>

---

##### `connected_networks_input`<sup>Optional</sup> <a name="connected_networks_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.connectedNetworksInput"></a>

```python
connected_networks_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cores_count_input`<sup>Optional</sup> <a name="cores_count_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.coresCountInput"></a>

```python
cores_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_model_input`<sup>Optional</sup> <a name="cpu_model_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.cpuModelInput"></a>

```python
cpu_model_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disks_count_input`<sup>Optional</sup> <a name="disks_count_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.disksCountInput"></a>

```python
disks_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disks_input`<sup>Optional</sup> <a name="disks_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.disksInput"></a>

```python
disks_input: typing.Union[IResolvable, typing.List[CloudBridgeAssetComputeDisks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks">CloudBridgeAssetComputeDisks</a>]]

---

##### `dns_name_input`<sup>Optional</sup> <a name="dns_name_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.dnsNameInput"></a>

```python
dns_name_input: str
```

- *Type:* str

---

##### `firmware_input`<sup>Optional</sup> <a name="firmware_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.firmwareInput"></a>

```python
firmware_input: str
```

- *Type:* str

---

##### `gpu_devices_count_input`<sup>Optional</sup> <a name="gpu_devices_count_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.gpuDevicesCountInput"></a>

```python
gpu_devices_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `gpu_devices_input`<sup>Optional</sup> <a name="gpu_devices_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.gpuDevicesInput"></a>

```python
gpu_devices_input: typing.Union[IResolvable, typing.List[CloudBridgeAssetComputeGpuDevices]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices">CloudBridgeAssetComputeGpuDevices</a>]]

---

##### `guest_state_input`<sup>Optional</sup> <a name="guest_state_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.guestStateInput"></a>

```python
guest_state_input: str
```

- *Type:* str

---

##### `hardware_version_input`<sup>Optional</sup> <a name="hardware_version_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.hardwareVersionInput"></a>

```python
hardware_version_input: str
```

- *Type:* str

---

##### `host_name_input`<sup>Optional</sup> <a name="host_name_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.hostNameInput"></a>

```python
host_name_input: str
```

- *Type:* str

---

##### `is_pmem_enabled_input`<sup>Optional</sup> <a name="is_pmem_enabled_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.isPmemEnabledInput"></a>

```python
is_pmem_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_tpm_enabled_input`<sup>Optional</sup> <a name="is_tpm_enabled_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.isTpmEnabledInput"></a>

```python
is_tpm_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `latency_sensitivity_input`<sup>Optional</sup> <a name="latency_sensitivity_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.latencySensitivityInput"></a>

```python
latency_sensitivity_input: str
```

- *Type:* str

---

##### `memory_in_mbs_input`<sup>Optional</sup> <a name="memory_in_mbs_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.memoryInMbsInput"></a>

```python
memory_in_mbs_input: str
```

- *Type:* str

---

##### `nics_count_input`<sup>Optional</sup> <a name="nics_count_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nicsCountInput"></a>

```python
nics_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nics_input`<sup>Optional</sup> <a name="nics_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nicsInput"></a>

```python
nics_input: typing.Union[IResolvable, typing.List[CloudBridgeAssetComputeNics]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics">CloudBridgeAssetComputeNics</a>]]

---

##### `nvdimm_controller_input`<sup>Optional</sup> <a name="nvdimm_controller_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nvdimmControllerInput"></a>

```python
nvdimm_controller_input: CloudBridgeAssetComputeNvdimmController
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController">CloudBridgeAssetComputeNvdimmController</a>

---

##### `nvdimms_input`<sup>Optional</sup> <a name="nvdimms_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nvdimmsInput"></a>

```python
nvdimms_input: typing.Union[IResolvable, typing.List[CloudBridgeAssetComputeNvdimms]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms">CloudBridgeAssetComputeNvdimms</a>]]

---

##### `operating_system_input`<sup>Optional</sup> <a name="operating_system_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.operatingSystemInput"></a>

```python
operating_system_input: str
```

- *Type:* str

---

##### `operating_system_version_input`<sup>Optional</sup> <a name="operating_system_version_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.operatingSystemVersionInput"></a>

```python
operating_system_version_input: str
```

- *Type:* str

---

##### `pmem_in_mbs_input`<sup>Optional</sup> <a name="pmem_in_mbs_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.pmemInMbsInput"></a>

```python
pmem_in_mbs_input: str
```

- *Type:* str

---

##### `power_state_input`<sup>Optional</sup> <a name="power_state_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.powerStateInput"></a>

```python
power_state_input: str
```

- *Type:* str

---

##### `primary_ip_input`<sup>Optional</sup> <a name="primary_ip_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.primaryIpInput"></a>

```python
primary_ip_input: str
```

- *Type:* str

---

##### `scsi_controller_input`<sup>Optional</sup> <a name="scsi_controller_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.scsiControllerInput"></a>

```python
scsi_controller_input: CloudBridgeAssetComputeScsiController
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController">CloudBridgeAssetComputeScsiController</a>

---

##### `storage_provisioned_in_mbs_input`<sup>Optional</sup> <a name="storage_provisioned_in_mbs_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.storageProvisionedInMbsInput"></a>

```python
storage_provisioned_in_mbs_input: str
```

- *Type:* str

---

##### `threads_per_core_count_input`<sup>Optional</sup> <a name="threads_per_core_count_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.threadsPerCoreCountInput"></a>

```python
threads_per_core_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `connected_networks`<sup>Required</sup> <a name="connected_networks" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.connectedNetworks"></a>

```python
connected_networks: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cores_count`<sup>Required</sup> <a name="cores_count" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.coresCount"></a>

```python
cores_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_model`<sup>Required</sup> <a name="cpu_model" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.cpuModel"></a>

```python
cpu_model: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disks_count`<sup>Required</sup> <a name="disks_count" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.disksCount"></a>

```python
disks_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dns_name`<sup>Required</sup> <a name="dns_name" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.dnsName"></a>

```python
dns_name: str
```

- *Type:* str

---

##### `firmware`<sup>Required</sup> <a name="firmware" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.firmware"></a>

```python
firmware: str
```

- *Type:* str

---

##### `gpu_devices_count`<sup>Required</sup> <a name="gpu_devices_count" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.gpuDevicesCount"></a>

```python
gpu_devices_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `guest_state`<sup>Required</sup> <a name="guest_state" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.guestState"></a>

```python
guest_state: str
```

- *Type:* str

---

##### `hardware_version`<sup>Required</sup> <a name="hardware_version" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.hardwareVersion"></a>

```python
hardware_version: str
```

- *Type:* str

---

##### `host_name`<sup>Required</sup> <a name="host_name" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

---

##### `is_pmem_enabled`<sup>Required</sup> <a name="is_pmem_enabled" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.isPmemEnabled"></a>

```python
is_pmem_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_tpm_enabled`<sup>Required</sup> <a name="is_tpm_enabled" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.isTpmEnabled"></a>

```python
is_tpm_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `latency_sensitivity`<sup>Required</sup> <a name="latency_sensitivity" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.latencySensitivity"></a>

```python
latency_sensitivity: str
```

- *Type:* str

---

##### `memory_in_mbs`<sup>Required</sup> <a name="memory_in_mbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.memoryInMbs"></a>

```python
memory_in_mbs: str
```

- *Type:* str

---

##### `nics_count`<sup>Required</sup> <a name="nics_count" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nicsCount"></a>

```python
nics_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `operating_system`<sup>Required</sup> <a name="operating_system" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.operatingSystem"></a>

```python
operating_system: str
```

- *Type:* str

---

##### `operating_system_version`<sup>Required</sup> <a name="operating_system_version" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.operatingSystemVersion"></a>

```python
operating_system_version: str
```

- *Type:* str

---

##### `pmem_in_mbs`<sup>Required</sup> <a name="pmem_in_mbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.pmemInMbs"></a>

```python
pmem_in_mbs: str
```

- *Type:* str

---

##### `power_state`<sup>Required</sup> <a name="power_state" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.powerState"></a>

```python
power_state: str
```

- *Type:* str

---

##### `primary_ip`<sup>Required</sup> <a name="primary_ip" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.primaryIp"></a>

```python
primary_ip: str
```

- *Type:* str

---

##### `storage_provisioned_in_mbs`<sup>Required</sup> <a name="storage_provisioned_in_mbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.storageProvisionedInMbs"></a>

```python
storage_provisioned_in_mbs: str
```

- *Type:* str

---

##### `threads_per_core_count`<sup>Required</sup> <a name="threads_per_core_count" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.threadsPerCoreCount"></a>

```python
threads_per_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.internalValue"></a>

```python
internal_value: CloudBridgeAssetCompute
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute">CloudBridgeAssetCompute</a>

---


### CloudBridgeAssetComputeScsiControllerOutputReference <a name="CloudBridgeAssetComputeScsiControllerOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_bridge_asset

cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.resetLabel">reset_label</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.resetSharedBus">reset_shared_bus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.resetUnitNumber">reset_unit_number</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_label` <a name="reset_label" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.resetLabel"></a>

```python
def reset_label() -> None
```

##### `reset_shared_bus` <a name="reset_shared_bus" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.resetSharedBus"></a>

```python
def reset_shared_bus() -> None
```

##### `reset_unit_number` <a name="reset_unit_number" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.resetUnitNumber"></a>

```python
def reset_unit_number() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.labelInput">label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.sharedBusInput">shared_bus_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.unitNumberInput">unit_number_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.sharedBus">shared_bus</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.unitNumber">unit_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController">CloudBridgeAssetComputeScsiController</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `label_input`<sup>Optional</sup> <a name="label_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.labelInput"></a>

```python
label_input: str
```

- *Type:* str

---

##### `shared_bus_input`<sup>Optional</sup> <a name="shared_bus_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.sharedBusInput"></a>

```python
shared_bus_input: str
```

- *Type:* str

---

##### `unit_number_input`<sup>Optional</sup> <a name="unit_number_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.unitNumberInput"></a>

```python
unit_number_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `label`<sup>Required</sup> <a name="label" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `shared_bus`<sup>Required</sup> <a name="shared_bus" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.sharedBus"></a>

```python
shared_bus: str
```

- *Type:* str

---

##### `unit_number`<sup>Required</sup> <a name="unit_number" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.unitNumber"></a>

```python
unit_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.internalValue"></a>

```python
internal_value: CloudBridgeAssetComputeScsiController
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController">CloudBridgeAssetComputeScsiController</a>

---


### CloudBridgeAssetTimeoutsOutputReference <a name="CloudBridgeAssetTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_bridge_asset

cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts">CloudBridgeAssetTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CloudBridgeAssetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts">CloudBridgeAssetTimeouts</a>]

---


### CloudBridgeAssetVmOutputReference <a name="CloudBridgeAssetVmOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_bridge_asset

cloudBridgeAsset.CloudBridgeAssetVmOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.resetHypervisorHost">reset_hypervisor_host</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.resetHypervisorVendor">reset_hypervisor_vendor</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.resetHypervisorVersion">reset_hypervisor_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_hypervisor_host` <a name="reset_hypervisor_host" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.resetHypervisorHost"></a>

```python
def reset_hypervisor_host() -> None
```

##### `reset_hypervisor_vendor` <a name="reset_hypervisor_vendor" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.resetHypervisorVendor"></a>

```python
def reset_hypervisor_vendor() -> None
```

##### `reset_hypervisor_version` <a name="reset_hypervisor_version" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.resetHypervisorVersion"></a>

```python
def reset_hypervisor_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.hypervisorHostInput">hypervisor_host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.hypervisorVendorInput">hypervisor_vendor_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.hypervisorVersionInput">hypervisor_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.hypervisorHost">hypervisor_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.hypervisorVendor">hypervisor_vendor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.hypervisorVersion">hypervisor_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm">CloudBridgeAssetVm</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hypervisor_host_input`<sup>Optional</sup> <a name="hypervisor_host_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.hypervisorHostInput"></a>

```python
hypervisor_host_input: str
```

- *Type:* str

---

##### `hypervisor_vendor_input`<sup>Optional</sup> <a name="hypervisor_vendor_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.hypervisorVendorInput"></a>

```python
hypervisor_vendor_input: str
```

- *Type:* str

---

##### `hypervisor_version_input`<sup>Optional</sup> <a name="hypervisor_version_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.hypervisorVersionInput"></a>

```python
hypervisor_version_input: str
```

- *Type:* str

---

##### `hypervisor_host`<sup>Required</sup> <a name="hypervisor_host" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.hypervisorHost"></a>

```python
hypervisor_host: str
```

- *Type:* str

---

##### `hypervisor_vendor`<sup>Required</sup> <a name="hypervisor_vendor" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.hypervisorVendor"></a>

```python
hypervisor_vendor: str
```

- *Type:* str

---

##### `hypervisor_version`<sup>Required</sup> <a name="hypervisor_version" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.hypervisorVersion"></a>

```python
hypervisor_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.internalValue"></a>

```python
internal_value: CloudBridgeAssetVm
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm">CloudBridgeAssetVm</a>

---


### CloudBridgeAssetVmwareVcenterOutputReference <a name="CloudBridgeAssetVmwareVcenterOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_bridge_asset

cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.resetDataCenter">reset_data_center</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.resetVcenterKey">reset_vcenter_key</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.resetVcenterVersion">reset_vcenter_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_data_center` <a name="reset_data_center" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.resetDataCenter"></a>

```python
def reset_data_center() -> None
```

##### `reset_vcenter_key` <a name="reset_vcenter_key" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.resetVcenterKey"></a>

```python
def reset_vcenter_key() -> None
```

##### `reset_vcenter_version` <a name="reset_vcenter_version" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.resetVcenterVersion"></a>

```python
def reset_vcenter_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.dataCenterInput">data_center_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.vcenterKeyInput">vcenter_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.vcenterVersionInput">vcenter_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.dataCenter">data_center</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.vcenterKey">vcenter_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.vcenterVersion">vcenter_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter">CloudBridgeAssetVmwareVcenter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_center_input`<sup>Optional</sup> <a name="data_center_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.dataCenterInput"></a>

```python
data_center_input: str
```

- *Type:* str

---

##### `vcenter_key_input`<sup>Optional</sup> <a name="vcenter_key_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.vcenterKeyInput"></a>

```python
vcenter_key_input: str
```

- *Type:* str

---

##### `vcenter_version_input`<sup>Optional</sup> <a name="vcenter_version_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.vcenterVersionInput"></a>

```python
vcenter_version_input: str
```

- *Type:* str

---

##### `data_center`<sup>Required</sup> <a name="data_center" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.dataCenter"></a>

```python
data_center: str
```

- *Type:* str

---

##### `vcenter_key`<sup>Required</sup> <a name="vcenter_key" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.vcenterKey"></a>

```python
vcenter_key: str
```

- *Type:* str

---

##### `vcenter_version`<sup>Required</sup> <a name="vcenter_version" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.vcenterVersion"></a>

```python
vcenter_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.internalValue"></a>

```python
internal_value: CloudBridgeAssetVmwareVcenter
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter">CloudBridgeAssetVmwareVcenter</a>

---


### CloudBridgeAssetVmwareVmCustomerTagsList <a name="CloudBridgeAssetVmwareVmCustomerTagsList" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_bridge_asset

cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudBridgeAssetVmwareVmCustomerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTags">CloudBridgeAssetVmwareVmCustomerTags</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudBridgeAssetVmwareVmCustomerTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTags">CloudBridgeAssetVmwareVmCustomerTags</a>]]

---


### CloudBridgeAssetVmwareVmCustomerTagsOutputReference <a name="CloudBridgeAssetVmwareVmCustomerTagsOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_bridge_asset

cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTags">CloudBridgeAssetVmwareVmCustomerTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CloudBridgeAssetVmwareVmCustomerTags]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTags">CloudBridgeAssetVmwareVmCustomerTags</a>]

---


### CloudBridgeAssetVmwareVmOutputReference <a name="CloudBridgeAssetVmwareVmOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_bridge_asset

cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.putCustomerTags">put_customer_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetCluster">reset_cluster</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetCustomerFields">reset_customer_fields</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetCustomerTags">reset_customer_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetFaultToleranceBandwidth">reset_fault_tolerance_bandwidth</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetFaultToleranceSecondaryLatency">reset_fault_tolerance_secondary_latency</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetFaultToleranceState">reset_fault_tolerance_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetInstanceUuid">reset_instance_uuid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetIsDisksCbtEnabled">reset_is_disks_cbt_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetIsDisksUuidEnabled">reset_is_disks_uuid_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetVmwareToolsStatus">reset_vmware_tools_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_customer_tags` <a name="put_customer_tags" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.putCustomerTags"></a>

```python
def put_customer_tags(
  value: typing.Union[IResolvable, typing.List[CloudBridgeAssetVmwareVmCustomerTags]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.putCustomerTags.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTags">CloudBridgeAssetVmwareVmCustomerTags</a>]]

---

##### `reset_cluster` <a name="reset_cluster" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetCluster"></a>

```python
def reset_cluster() -> None
```

##### `reset_customer_fields` <a name="reset_customer_fields" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetCustomerFields"></a>

```python
def reset_customer_fields() -> None
```

##### `reset_customer_tags` <a name="reset_customer_tags" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetCustomerTags"></a>

```python
def reset_customer_tags() -> None
```

##### `reset_fault_tolerance_bandwidth` <a name="reset_fault_tolerance_bandwidth" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetFaultToleranceBandwidth"></a>

```python
def reset_fault_tolerance_bandwidth() -> None
```

##### `reset_fault_tolerance_secondary_latency` <a name="reset_fault_tolerance_secondary_latency" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetFaultToleranceSecondaryLatency"></a>

```python
def reset_fault_tolerance_secondary_latency() -> None
```

##### `reset_fault_tolerance_state` <a name="reset_fault_tolerance_state" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetFaultToleranceState"></a>

```python
def reset_fault_tolerance_state() -> None
```

##### `reset_instance_uuid` <a name="reset_instance_uuid" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetInstanceUuid"></a>

```python
def reset_instance_uuid() -> None
```

##### `reset_is_disks_cbt_enabled` <a name="reset_is_disks_cbt_enabled" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetIsDisksCbtEnabled"></a>

```python
def reset_is_disks_cbt_enabled() -> None
```

##### `reset_is_disks_uuid_enabled` <a name="reset_is_disks_uuid_enabled" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetIsDisksUuidEnabled"></a>

```python
def reset_is_disks_uuid_enabled() -> None
```

##### `reset_path` <a name="reset_path" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_vmware_tools_status` <a name="reset_vmware_tools_status" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetVmwareToolsStatus"></a>

```python
def reset_vmware_tools_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.customerTags">customer_tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList">CloudBridgeAssetVmwareVmCustomerTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.clusterInput">cluster_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.customerFieldsInput">customer_fields_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.customerTagsInput">customer_tags_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTags">CloudBridgeAssetVmwareVmCustomerTags</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.faultToleranceBandwidthInput">fault_tolerance_bandwidth_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.faultToleranceSecondaryLatencyInput">fault_tolerance_secondary_latency_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.faultToleranceStateInput">fault_tolerance_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.instanceUuidInput">instance_uuid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.isDisksCbtEnabledInput">is_disks_cbt_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.isDisksUuidEnabledInput">is_disks_uuid_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.vmwareToolsStatusInput">vmware_tools_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.cluster">cluster</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.customerFields">customer_fields</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.faultToleranceBandwidth">fault_tolerance_bandwidth</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.faultToleranceSecondaryLatency">fault_tolerance_secondary_latency</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.faultToleranceState">fault_tolerance_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.instanceUuid">instance_uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.isDisksCbtEnabled">is_disks_cbt_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.isDisksUuidEnabled">is_disks_uuid_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.vmwareToolsStatus">vmware_tools_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm">CloudBridgeAssetVmwareVm</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `customer_tags`<sup>Required</sup> <a name="customer_tags" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.customerTags"></a>

```python
customer_tags: CloudBridgeAssetVmwareVmCustomerTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList">CloudBridgeAssetVmwareVmCustomerTagsList</a>

---

##### `cluster_input`<sup>Optional</sup> <a name="cluster_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.clusterInput"></a>

```python
cluster_input: str
```

- *Type:* str

---

##### `customer_fields_input`<sup>Optional</sup> <a name="customer_fields_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.customerFieldsInput"></a>

```python
customer_fields_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `customer_tags_input`<sup>Optional</sup> <a name="customer_tags_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.customerTagsInput"></a>

```python
customer_tags_input: typing.Union[IResolvable, typing.List[CloudBridgeAssetVmwareVmCustomerTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTags">CloudBridgeAssetVmwareVmCustomerTags</a>]]

---

##### `fault_tolerance_bandwidth_input`<sup>Optional</sup> <a name="fault_tolerance_bandwidth_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.faultToleranceBandwidthInput"></a>

```python
fault_tolerance_bandwidth_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fault_tolerance_secondary_latency_input`<sup>Optional</sup> <a name="fault_tolerance_secondary_latency_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.faultToleranceSecondaryLatencyInput"></a>

```python
fault_tolerance_secondary_latency_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fault_tolerance_state_input`<sup>Optional</sup> <a name="fault_tolerance_state_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.faultToleranceStateInput"></a>

```python
fault_tolerance_state_input: str
```

- *Type:* str

---

##### `instance_uuid_input`<sup>Optional</sup> <a name="instance_uuid_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.instanceUuidInput"></a>

```python
instance_uuid_input: str
```

- *Type:* str

---

##### `is_disks_cbt_enabled_input`<sup>Optional</sup> <a name="is_disks_cbt_enabled_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.isDisksCbtEnabledInput"></a>

```python
is_disks_cbt_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_disks_uuid_enabled_input`<sup>Optional</sup> <a name="is_disks_uuid_enabled_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.isDisksUuidEnabledInput"></a>

```python
is_disks_uuid_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `vmware_tools_status_input`<sup>Optional</sup> <a name="vmware_tools_status_input" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.vmwareToolsStatusInput"></a>

```python
vmware_tools_status_input: str
```

- *Type:* str

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

---

##### `customer_fields`<sup>Required</sup> <a name="customer_fields" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.customerFields"></a>

```python
customer_fields: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `fault_tolerance_bandwidth`<sup>Required</sup> <a name="fault_tolerance_bandwidth" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.faultToleranceBandwidth"></a>

```python
fault_tolerance_bandwidth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fault_tolerance_secondary_latency`<sup>Required</sup> <a name="fault_tolerance_secondary_latency" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.faultToleranceSecondaryLatency"></a>

```python
fault_tolerance_secondary_latency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fault_tolerance_state`<sup>Required</sup> <a name="fault_tolerance_state" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.faultToleranceState"></a>

```python
fault_tolerance_state: str
```

- *Type:* str

---

##### `instance_uuid`<sup>Required</sup> <a name="instance_uuid" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.instanceUuid"></a>

```python
instance_uuid: str
```

- *Type:* str

---

##### `is_disks_cbt_enabled`<sup>Required</sup> <a name="is_disks_cbt_enabled" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.isDisksCbtEnabled"></a>

```python
is_disks_cbt_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_disks_uuid_enabled`<sup>Required</sup> <a name="is_disks_uuid_enabled" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.isDisksUuidEnabled"></a>

```python
is_disks_uuid_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `vmware_tools_status`<sup>Required</sup> <a name="vmware_tools_status" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.vmwareToolsStatus"></a>

```python
vmware_tools_status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.internalValue"></a>

```python
internal_value: CloudBridgeAssetVmwareVm
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm">CloudBridgeAssetVmwareVm</a>

---



