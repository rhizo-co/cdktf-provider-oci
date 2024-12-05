# `dataOciCloudBridgeAssets` Submodule <a name="`dataOciCloudBridgeAssets` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCloudBridgeAssets <a name="DataOciCloudBridgeAssets" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets oci_cloud_bridge_assets}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_assets

dataOciCloudBridgeAssets.DataOciCloudBridgeAssets(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  asset_id: str = None,
  asset_type: str = None,
  display_name: str = None,
  external_asset_key: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCloudBridgeAssetsFilter]] = None,
  id: str = None,
  inventory_id: str = None,
  source_key: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#compartment_id DataOciCloudBridgeAssets#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.assetId">asset_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#asset_id DataOciCloudBridgeAssets#asset_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.assetType">asset_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#asset_type DataOciCloudBridgeAssets#asset_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#display_name DataOciCloudBridgeAssets#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.externalAssetKey">external_asset_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#external_asset_key DataOciCloudBridgeAssets#external_asset_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilter">DataOciCloudBridgeAssetsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#id DataOciCloudBridgeAssets#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.inventoryId">inventory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#inventory_id DataOciCloudBridgeAssets#inventory_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.sourceKey">source_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#source_key DataOciCloudBridgeAssets#source_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#state DataOciCloudBridgeAssets#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#compartment_id DataOciCloudBridgeAssets#compartment_id}.

---

##### `asset_id`<sup>Optional</sup> <a name="asset_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.assetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#asset_id DataOciCloudBridgeAssets#asset_id}.

---

##### `asset_type`<sup>Optional</sup> <a name="asset_type" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.assetType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#asset_type DataOciCloudBridgeAssets#asset_type}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#display_name DataOciCloudBridgeAssets#display_name}.

---

##### `external_asset_key`<sup>Optional</sup> <a name="external_asset_key" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.externalAssetKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#external_asset_key DataOciCloudBridgeAssets#external_asset_key}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilter">DataOciCloudBridgeAssetsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#filter DataOciCloudBridgeAssets#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#id DataOciCloudBridgeAssets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inventory_id`<sup>Optional</sup> <a name="inventory_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.inventoryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#inventory_id DataOciCloudBridgeAssets#inventory_id}.

---

##### `source_key`<sup>Optional</sup> <a name="source_key" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.sourceKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#source_key DataOciCloudBridgeAssets#source_key}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#state DataOciCloudBridgeAssets#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.resetAssetId">reset_asset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.resetAssetType">reset_asset_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.resetExternalAssetKey">reset_external_asset_key</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.resetInventoryId">reset_inventory_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.resetSourceKey">reset_source_key</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciCloudBridgeAssetsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilter">DataOciCloudBridgeAssetsFilter</a>]]

---

##### `reset_asset_id` <a name="reset_asset_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.resetAssetId"></a>

```python
def reset_asset_id() -> None
```

##### `reset_asset_type` <a name="reset_asset_type" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.resetAssetType"></a>

```python
def reset_asset_type() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_external_asset_key` <a name="reset_external_asset_key" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.resetExternalAssetKey"></a>

```python
def reset_external_asset_key() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_inventory_id` <a name="reset_inventory_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.resetInventoryId"></a>

```python
def reset_inventory_id() -> None
```

##### `reset_source_key` <a name="reset_source_key" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.resetSourceKey"></a>

```python
def reset_source_key() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCloudBridgeAssets resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_assets

dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_assets

dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_assets

dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_assets

dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCloudBridgeAssets resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCloudBridgeAssets to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCloudBridgeAssets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCloudBridgeAssets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.assetCollection">asset_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList">DataOciCloudBridgeAssetsAssetCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList">DataOciCloudBridgeAssetsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.assetIdInput">asset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.assetTypeInput">asset_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.externalAssetKeyInput">external_asset_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilter">DataOciCloudBridgeAssetsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.inventoryIdInput">inventory_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.sourceKeyInput">source_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.assetId">asset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.assetType">asset_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.externalAssetKey">external_asset_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.inventoryId">inventory_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.sourceKey">source_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `asset_collection`<sup>Required</sup> <a name="asset_collection" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.assetCollection"></a>

```python
asset_collection: DataOciCloudBridgeAssetsAssetCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList">DataOciCloudBridgeAssetsAssetCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.filter"></a>

```python
filter: DataOciCloudBridgeAssetsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList">DataOciCloudBridgeAssetsFilterList</a>

---

##### `asset_id_input`<sup>Optional</sup> <a name="asset_id_input" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.assetIdInput"></a>

```python
asset_id_input: str
```

- *Type:* str

---

##### `asset_type_input`<sup>Optional</sup> <a name="asset_type_input" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.assetTypeInput"></a>

```python
asset_type_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `external_asset_key_input`<sup>Optional</sup> <a name="external_asset_key_input" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.externalAssetKeyInput"></a>

```python
external_asset_key_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciCloudBridgeAssetsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilter">DataOciCloudBridgeAssetsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `inventory_id_input`<sup>Optional</sup> <a name="inventory_id_input" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.inventoryIdInput"></a>

```python
inventory_id_input: str
```

- *Type:* str

---

##### `source_key_input`<sup>Optional</sup> <a name="source_key_input" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.sourceKeyInput"></a>

```python
source_key_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `asset_id`<sup>Required</sup> <a name="asset_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.assetId"></a>

```python
asset_id: str
```

- *Type:* str

---

##### `asset_type`<sup>Required</sup> <a name="asset_type" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.assetType"></a>

```python
asset_type: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `external_asset_key`<sup>Required</sup> <a name="external_asset_key" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.externalAssetKey"></a>

```python
external_asset_key: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `inventory_id`<sup>Required</sup> <a name="inventory_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.inventoryId"></a>

```python
inventory_id: str
```

- *Type:* str

---

##### `source_key`<sup>Required</sup> <a name="source_key" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.sourceKey"></a>

```python
source_key: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCloudBridgeAssetsAssetCollection <a name="DataOciCloudBridgeAssetsAssetCollection" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_assets

dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollection()
```


### DataOciCloudBridgeAssetsAssetCollectionItems <a name="DataOciCloudBridgeAssetsAssetCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_assets

dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItems()
```


### DataOciCloudBridgeAssetsAssetCollectionItemsCompute <a name="DataOciCloudBridgeAssetsAssetCollectionItemsCompute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsCompute"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsCompute.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_assets

dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsCompute()
```


### DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisks <a name="DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisks" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisks.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_assets

dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisks()
```


### DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevices <a name="DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevices" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevices"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevices.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_assets

dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevices()
```


### DataOciCloudBridgeAssetsAssetCollectionItemsComputeNics <a name="DataOciCloudBridgeAssetsAssetCollectionItemsComputeNics" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNics.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_assets

dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNics()
```


### DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmController <a name="DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmController" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmController"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmController.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_assets

dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmController()
```


### DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimms <a name="DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimms" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimms"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimms.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_assets

dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimms()
```


### DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiController <a name="DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiController" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiController"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiController.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_assets

dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiController()
```


### DataOciCloudBridgeAssetsAssetCollectionItemsVm <a name="DataOciCloudBridgeAssetsAssetCollectionItemsVm" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVm"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVm.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_assets

dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVm()
```


### DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenter <a name="DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenter" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_assets

dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenter()
```


### DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVm <a name="DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVm" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVm"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVm.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_assets

dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVm()
```


### DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTags <a name="DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTags" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTags.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_assets

dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTags()
```


### DataOciCloudBridgeAssetsConfig <a name="DataOciCloudBridgeAssetsConfig" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_assets

dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  asset_id: str = None,
  asset_type: str = None,
  display_name: str = None,
  external_asset_key: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCloudBridgeAssetsFilter]] = None,
  id: str = None,
  inventory_id: str = None,
  source_key: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#compartment_id DataOciCloudBridgeAssets#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.assetId">asset_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#asset_id DataOciCloudBridgeAssets#asset_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.assetType">asset_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#asset_type DataOciCloudBridgeAssets#asset_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#display_name DataOciCloudBridgeAssets#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.externalAssetKey">external_asset_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#external_asset_key DataOciCloudBridgeAssets#external_asset_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilter">DataOciCloudBridgeAssetsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#id DataOciCloudBridgeAssets#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.inventoryId">inventory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#inventory_id DataOciCloudBridgeAssets#inventory_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.sourceKey">source_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#source_key DataOciCloudBridgeAssets#source_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#state DataOciCloudBridgeAssets#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#compartment_id DataOciCloudBridgeAssets#compartment_id}.

---

##### `asset_id`<sup>Optional</sup> <a name="asset_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.assetId"></a>

```python
asset_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#asset_id DataOciCloudBridgeAssets#asset_id}.

---

##### `asset_type`<sup>Optional</sup> <a name="asset_type" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.assetType"></a>

```python
asset_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#asset_type DataOciCloudBridgeAssets#asset_type}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#display_name DataOciCloudBridgeAssets#display_name}.

---

##### `external_asset_key`<sup>Optional</sup> <a name="external_asset_key" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.externalAssetKey"></a>

```python
external_asset_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#external_asset_key DataOciCloudBridgeAssets#external_asset_key}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciCloudBridgeAssetsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilter">DataOciCloudBridgeAssetsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#filter DataOciCloudBridgeAssets#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#id DataOciCloudBridgeAssets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inventory_id`<sup>Optional</sup> <a name="inventory_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.inventoryId"></a>

```python
inventory_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#inventory_id DataOciCloudBridgeAssets#inventory_id}.

---

##### `source_key`<sup>Optional</sup> <a name="source_key" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.sourceKey"></a>

```python
source_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#source_key DataOciCloudBridgeAssets#source_key}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#state DataOciCloudBridgeAssets#state}.

---

### DataOciCloudBridgeAssetsFilter <a name="DataOciCloudBridgeAssetsFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_assets

dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#name DataOciCloudBridgeAssets#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#values DataOciCloudBridgeAssets#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#regex DataOciCloudBridgeAssets#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#name DataOciCloudBridgeAssets#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#values DataOciCloudBridgeAssets#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#regex DataOciCloudBridgeAssets#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList <a name="DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_assets

dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference <a name="DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_assets

dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.property.bootOrder">boot_order</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.property.persistentMode">persistent_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.property.sizeInMbs">size_in_mbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.property.uuid">uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.property.uuidLun">uuid_lun</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisks">DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `boot_order`<sup>Required</sup> <a name="boot_order" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.property.bootOrder"></a>

```python
boot_order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `persistent_mode`<sup>Required</sup> <a name="persistent_mode" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.property.persistentMode"></a>

```python
persistent_mode: str
```

- *Type:* str

---

##### `size_in_mbs`<sup>Required</sup> <a name="size_in_mbs" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.property.sizeInMbs"></a>

```python
size_in_mbs: str
```

- *Type:* str

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

---

##### `uuid_lun`<sup>Required</sup> <a name="uuid_lun" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.property.uuidLun"></a>

```python
uuid_lun: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisks
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisks">DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisks</a>

---


### DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList <a name="DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_assets

dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference <a name="DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_assets

dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.property.coresCount">cores_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.property.manufacturer">manufacturer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.property.memoryInMbs">memory_in_mbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevices">DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevices</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cores_count`<sup>Required</sup> <a name="cores_count" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.property.coresCount"></a>

```python
cores_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `manufacturer`<sup>Required</sup> <a name="manufacturer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.property.manufacturer"></a>

```python
manufacturer: str
```

- *Type:* str

---

##### `memory_in_mbs`<sup>Required</sup> <a name="memory_in_mbs" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.property.memoryInMbs"></a>

```python
memory_in_mbs: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevices
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevices">DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevices</a>

---


### DataOciCloudBridgeAssetsAssetCollectionItemsComputeList <a name="DataOciCloudBridgeAssetsAssetCollectionItemsComputeList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_assets

dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList <a name="DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_assets

dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference <a name="DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_assets

dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.property.ipAddresses">ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.property.macAddress">mac_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.property.macAddressType">mac_address_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.property.networkName">network_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.property.switchName">switch_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNics">DataOciCloudBridgeAssetsAssetCollectionItemsComputeNics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_addresses`<sup>Required</sup> <a name="ip_addresses" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.property.ipAddresses"></a>

```python
ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `label`<sup>Required</sup> <a name="label" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `mac_address`<sup>Required</sup> <a name="mac_address" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.property.macAddress"></a>

```python
mac_address: str
```

- *Type:* str

---

##### `mac_address_type`<sup>Required</sup> <a name="mac_address_type" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.property.macAddressType"></a>

```python
mac_address_type: str
```

- *Type:* str

---

##### `network_name`<sup>Required</sup> <a name="network_name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.property.networkName"></a>

```python
network_name: str
```

- *Type:* str

---

##### `switch_name`<sup>Required</sup> <a name="switch_name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.property.switchName"></a>

```python
switch_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudBridgeAssetsAssetCollectionItemsComputeNics
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNics">DataOciCloudBridgeAssetsAssetCollectionItemsComputeNics</a>

---


### DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList <a name="DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_assets

dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference <a name="DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_assets

dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.property.busNumber">bus_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmController">DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmController</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bus_number`<sup>Required</sup> <a name="bus_number" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.property.busNumber"></a>

```python
bus_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `label`<sup>Required</sup> <a name="label" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmController
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmController">DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmController</a>

---


### DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList <a name="DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_assets

dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference <a name="DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_assets

dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.property.controllerKey">controller_key</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.property.unitNumber">unit_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimms">DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimms</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `controller_key`<sup>Required</sup> <a name="controller_key" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.property.controllerKey"></a>

```python
controller_key: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `label`<sup>Required</sup> <a name="label" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `unit_number`<sup>Required</sup> <a name="unit_number" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.property.unitNumber"></a>

```python
unit_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimms
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimms">DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimms</a>

---


### DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference <a name="DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_assets

dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.connectedNetworks">connected_networks</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.coresCount">cores_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.cpuModel">cpu_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.disks">disks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList">DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.disksCount">disks_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.dnsName">dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.firmware">firmware</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.gpuDevices">gpu_devices</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList">DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.gpuDevicesCount">gpu_devices_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.guestState">guest_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.hardwareVersion">hardware_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.hostName">host_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.isPmemEnabled">is_pmem_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.isTpmEnabled">is_tpm_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.latencySensitivity">latency_sensitivity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.memoryInMbs">memory_in_mbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.nics">nics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList">DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.nicsCount">nics_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.nvdimmController">nvdimm_controller</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList">DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.nvdimms">nvdimms</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList">DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.operatingSystem">operating_system</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.operatingSystemVersion">operating_system_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.pmemInMbs">pmem_in_mbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.powerState">power_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.primaryIp">primary_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.scsiController">scsi_controller</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList">DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.storageProvisionedInMbs">storage_provisioned_in_mbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.threadsPerCoreCount">threads_per_core_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsCompute">DataOciCloudBridgeAssetsAssetCollectionItemsCompute</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connected_networks`<sup>Required</sup> <a name="connected_networks" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.connectedNetworks"></a>

```python
connected_networks: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cores_count`<sup>Required</sup> <a name="cores_count" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.coresCount"></a>

```python
cores_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_model`<sup>Required</sup> <a name="cpu_model" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.cpuModel"></a>

```python
cpu_model: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disks`<sup>Required</sup> <a name="disks" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.disks"></a>

```python
disks: DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList">DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList</a>

---

##### `disks_count`<sup>Required</sup> <a name="disks_count" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.disksCount"></a>

```python
disks_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dns_name`<sup>Required</sup> <a name="dns_name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.dnsName"></a>

```python
dns_name: str
```

- *Type:* str

---

##### `firmware`<sup>Required</sup> <a name="firmware" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.firmware"></a>

```python
firmware: str
```

- *Type:* str

---

##### `gpu_devices`<sup>Required</sup> <a name="gpu_devices" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.gpuDevices"></a>

```python
gpu_devices: DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList">DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList</a>

---

##### `gpu_devices_count`<sup>Required</sup> <a name="gpu_devices_count" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.gpuDevicesCount"></a>

```python
gpu_devices_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `guest_state`<sup>Required</sup> <a name="guest_state" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.guestState"></a>

```python
guest_state: str
```

- *Type:* str

---

##### `hardware_version`<sup>Required</sup> <a name="hardware_version" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.hardwareVersion"></a>

```python
hardware_version: str
```

- *Type:* str

---

##### `host_name`<sup>Required</sup> <a name="host_name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

---

##### `is_pmem_enabled`<sup>Required</sup> <a name="is_pmem_enabled" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.isPmemEnabled"></a>

```python
is_pmem_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_tpm_enabled`<sup>Required</sup> <a name="is_tpm_enabled" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.isTpmEnabled"></a>

```python
is_tpm_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `latency_sensitivity`<sup>Required</sup> <a name="latency_sensitivity" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.latencySensitivity"></a>

```python
latency_sensitivity: str
```

- *Type:* str

---

##### `memory_in_mbs`<sup>Required</sup> <a name="memory_in_mbs" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.memoryInMbs"></a>

```python
memory_in_mbs: str
```

- *Type:* str

---

##### `nics`<sup>Required</sup> <a name="nics" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.nics"></a>

```python
nics: DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList">DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList</a>

---

##### `nics_count`<sup>Required</sup> <a name="nics_count" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.nicsCount"></a>

```python
nics_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nvdimm_controller`<sup>Required</sup> <a name="nvdimm_controller" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.nvdimmController"></a>

```python
nvdimm_controller: DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList">DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList</a>

---

##### `nvdimms`<sup>Required</sup> <a name="nvdimms" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.nvdimms"></a>

```python
nvdimms: DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList">DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList</a>

---

##### `operating_system`<sup>Required</sup> <a name="operating_system" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.operatingSystem"></a>

```python
operating_system: str
```

- *Type:* str

---

##### `operating_system_version`<sup>Required</sup> <a name="operating_system_version" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.operatingSystemVersion"></a>

```python
operating_system_version: str
```

- *Type:* str

---

##### `pmem_in_mbs`<sup>Required</sup> <a name="pmem_in_mbs" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.pmemInMbs"></a>

```python
pmem_in_mbs: str
```

- *Type:* str

---

##### `power_state`<sup>Required</sup> <a name="power_state" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.powerState"></a>

```python
power_state: str
```

- *Type:* str

---

##### `primary_ip`<sup>Required</sup> <a name="primary_ip" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.primaryIp"></a>

```python
primary_ip: str
```

- *Type:* str

---

##### `scsi_controller`<sup>Required</sup> <a name="scsi_controller" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.scsiController"></a>

```python
scsi_controller: DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList">DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList</a>

---

##### `storage_provisioned_in_mbs`<sup>Required</sup> <a name="storage_provisioned_in_mbs" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.storageProvisionedInMbs"></a>

```python
storage_provisioned_in_mbs: str
```

- *Type:* str

---

##### `threads_per_core_count`<sup>Required</sup> <a name="threads_per_core_count" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.threadsPerCoreCount"></a>

```python
threads_per_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudBridgeAssetsAssetCollectionItemsCompute
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsCompute">DataOciCloudBridgeAssetsAssetCollectionItemsCompute</a>

---


### DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList <a name="DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_assets

dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference <a name="DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_assets

dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.property.sharedBus">shared_bus</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.property.unitNumber">unit_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiController">DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiController</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `label`<sup>Required</sup> <a name="label" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `shared_bus`<sup>Required</sup> <a name="shared_bus" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.property.sharedBus"></a>

```python
shared_bus: str
```

- *Type:* str

---

##### `unit_number`<sup>Required</sup> <a name="unit_number" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.property.unitNumber"></a>

```python
unit_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiController
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiController">DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiController</a>

---


### DataOciCloudBridgeAssetsAssetCollectionItemsList <a name="DataOciCloudBridgeAssetsAssetCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_assets

dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference <a name="DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_assets

dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.assetSourceIds">asset_source_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.assetType">asset_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.compute">compute</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList">DataOciCloudBridgeAssetsAssetCollectionItemsComputeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.externalAssetKey">external_asset_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.inventoryId">inventory_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.sourceKey">source_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.vm">vm</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList">DataOciCloudBridgeAssetsAssetCollectionItemsVmList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.vmwareVcenter">vmware_vcenter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList">DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.vmwareVm">vmware_vm</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList">DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItems">DataOciCloudBridgeAssetsAssetCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `asset_source_ids`<sup>Required</sup> <a name="asset_source_ids" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.assetSourceIds"></a>

```python
asset_source_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `asset_type`<sup>Required</sup> <a name="asset_type" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.assetType"></a>

```python
asset_type: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compute`<sup>Required</sup> <a name="compute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.compute"></a>

```python
compute: DataOciCloudBridgeAssetsAssetCollectionItemsComputeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList">DataOciCloudBridgeAssetsAssetCollectionItemsComputeList</a>

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `external_asset_key`<sup>Required</sup> <a name="external_asset_key" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.externalAssetKey"></a>

```python
external_asset_key: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `inventory_id`<sup>Required</sup> <a name="inventory_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.inventoryId"></a>

```python
inventory_id: str
```

- *Type:* str

---

##### `source_key`<sup>Required</sup> <a name="source_key" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.sourceKey"></a>

```python
source_key: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `vm`<sup>Required</sup> <a name="vm" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.vm"></a>

```python
vm: DataOciCloudBridgeAssetsAssetCollectionItemsVmList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList">DataOciCloudBridgeAssetsAssetCollectionItemsVmList</a>

---

##### `vmware_vcenter`<sup>Required</sup> <a name="vmware_vcenter" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.vmwareVcenter"></a>

```python
vmware_vcenter: DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList">DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList</a>

---

##### `vmware_vm`<sup>Required</sup> <a name="vmware_vm" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.vmwareVm"></a>

```python
vmware_vm: DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList">DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudBridgeAssetsAssetCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItems">DataOciCloudBridgeAssetsAssetCollectionItems</a>

---


### DataOciCloudBridgeAssetsAssetCollectionItemsVmList <a name="DataOciCloudBridgeAssetsAssetCollectionItemsVmList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_assets

dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference <a name="DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_assets

dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.property.hypervisorHost">hypervisor_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.property.hypervisorVendor">hypervisor_vendor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.property.hypervisorVersion">hypervisor_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVm">DataOciCloudBridgeAssetsAssetCollectionItemsVm</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hypervisor_host`<sup>Required</sup> <a name="hypervisor_host" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.property.hypervisorHost"></a>

```python
hypervisor_host: str
```

- *Type:* str

---

##### `hypervisor_vendor`<sup>Required</sup> <a name="hypervisor_vendor" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.property.hypervisorVendor"></a>

```python
hypervisor_vendor: str
```

- *Type:* str

---

##### `hypervisor_version`<sup>Required</sup> <a name="hypervisor_version" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.property.hypervisorVersion"></a>

```python
hypervisor_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudBridgeAssetsAssetCollectionItemsVm
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVm">DataOciCloudBridgeAssetsAssetCollectionItemsVm</a>

---


### DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList <a name="DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_assets

dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference <a name="DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_assets

dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.property.dataCenter">data_center</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.property.vcenterKey">vcenter_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.property.vcenterVersion">vcenter_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenter">DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_center`<sup>Required</sup> <a name="data_center" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.property.dataCenter"></a>

```python
data_center: str
```

- *Type:* str

---

##### `vcenter_key`<sup>Required</sup> <a name="vcenter_key" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.property.vcenterKey"></a>

```python
vcenter_key: str
```

- *Type:* str

---

##### `vcenter_version`<sup>Required</sup> <a name="vcenter_version" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.property.vcenterVersion"></a>

```python
vcenter_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenter
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenter">DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenter</a>

---


### DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList <a name="DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_assets

dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference <a name="DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_assets

dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTags">DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTags">DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTags</a>

---


### DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList <a name="DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_assets

dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference <a name="DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_assets

dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.cluster">cluster</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.customerFields">customer_fields</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.customerTags">customer_tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList">DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.faultToleranceBandwidth">fault_tolerance_bandwidth</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.faultToleranceSecondaryLatency">fault_tolerance_secondary_latency</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.faultToleranceState">fault_tolerance_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.instanceUuid">instance_uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.isDisksCbtEnabled">is_disks_cbt_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.isDisksUuidEnabled">is_disks_uuid_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.vmwareToolsStatus">vmware_tools_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVm">DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVm</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

---

##### `customer_fields`<sup>Required</sup> <a name="customer_fields" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.customerFields"></a>

```python
customer_fields: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `customer_tags`<sup>Required</sup> <a name="customer_tags" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.customerTags"></a>

```python
customer_tags: DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList">DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList</a>

---

##### `fault_tolerance_bandwidth`<sup>Required</sup> <a name="fault_tolerance_bandwidth" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.faultToleranceBandwidth"></a>

```python
fault_tolerance_bandwidth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fault_tolerance_secondary_latency`<sup>Required</sup> <a name="fault_tolerance_secondary_latency" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.faultToleranceSecondaryLatency"></a>

```python
fault_tolerance_secondary_latency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fault_tolerance_state`<sup>Required</sup> <a name="fault_tolerance_state" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.faultToleranceState"></a>

```python
fault_tolerance_state: str
```

- *Type:* str

---

##### `instance_uuid`<sup>Required</sup> <a name="instance_uuid" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.instanceUuid"></a>

```python
instance_uuid: str
```

- *Type:* str

---

##### `is_disks_cbt_enabled`<sup>Required</sup> <a name="is_disks_cbt_enabled" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.isDisksCbtEnabled"></a>

```python
is_disks_cbt_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_disks_uuid_enabled`<sup>Required</sup> <a name="is_disks_uuid_enabled" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.isDisksUuidEnabled"></a>

```python
is_disks_uuid_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `vmware_tools_status`<sup>Required</sup> <a name="vmware_tools_status" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.vmwareToolsStatus"></a>

```python
vmware_tools_status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVm
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVm">DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVm</a>

---


### DataOciCloudBridgeAssetsAssetCollectionList <a name="DataOciCloudBridgeAssetsAssetCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_assets

dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudBridgeAssetsAssetCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudBridgeAssetsAssetCollectionOutputReference <a name="DataOciCloudBridgeAssetsAssetCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_assets

dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList">DataOciCloudBridgeAssetsAssetCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollection">DataOciCloudBridgeAssetsAssetCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.property.items"></a>

```python
items: DataOciCloudBridgeAssetsAssetCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList">DataOciCloudBridgeAssetsAssetCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudBridgeAssetsAssetCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollection">DataOciCloudBridgeAssetsAssetCollection</a>

---


### DataOciCloudBridgeAssetsFilterList <a name="DataOciCloudBridgeAssetsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_assets

dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudBridgeAssetsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilter">DataOciCloudBridgeAssetsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciCloudBridgeAssetsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilter">DataOciCloudBridgeAssetsFilter</a>]]

---


### DataOciCloudBridgeAssetsFilterOutputReference <a name="DataOciCloudBridgeAssetsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_assets

dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilter">DataOciCloudBridgeAssetsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciCloudBridgeAssetsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilter">DataOciCloudBridgeAssetsFilter</a>]

---



