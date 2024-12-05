# `dataOciMediaServicesMediaAssetDistributionChannelAttachment` Submodule <a name="`dataOciMediaServicesMediaAssetDistributionChannelAttachment` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMediaServicesMediaAssetDistributionChannelAttachment <a name="DataOciMediaServicesMediaAssetDistributionChannelAttachment" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_asset_distribution_channel_attachment oci_media_services_media_asset_distribution_channel_attachment}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_media_asset_distribution_channel_attachment

dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  distribution_channel_id: str,
  media_asset_id: str,
  id: str = None,
  is_lock_override: typing.Union[bool, IResolvable] = None,
  locks: typing.Union[IResolvable, typing.List[DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocks]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.Initializer.parameter.distributionChannelId">distribution_channel_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_asset_distribution_channel_attachment#distribution_channel_id DataOciMediaServicesMediaAssetDistributionChannelAttachment#distribution_channel_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.Initializer.parameter.mediaAssetId">media_asset_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_asset_distribution_channel_attachment#media_asset_id DataOciMediaServicesMediaAssetDistributionChannelAttachment#media_asset_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_asset_distribution_channel_attachment#id DataOciMediaServicesMediaAssetDistributionChannelAttachment#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.Initializer.parameter.isLockOverride">is_lock_override</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_asset_distribution_channel_attachment#is_lock_override DataOciMediaServicesMediaAssetDistributionChannelAttachment#is_lock_override}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.Initializer.parameter.locks">locks</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocks">DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocks</a>]]</code> | locks block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `distribution_channel_id`<sup>Required</sup> <a name="distribution_channel_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.Initializer.parameter.distributionChannelId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_asset_distribution_channel_attachment#distribution_channel_id DataOciMediaServicesMediaAssetDistributionChannelAttachment#distribution_channel_id}.

---

##### `media_asset_id`<sup>Required</sup> <a name="media_asset_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.Initializer.parameter.mediaAssetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_asset_distribution_channel_attachment#media_asset_id DataOciMediaServicesMediaAssetDistributionChannelAttachment#media_asset_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_asset_distribution_channel_attachment#id DataOciMediaServicesMediaAssetDistributionChannelAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_lock_override`<sup>Optional</sup> <a name="is_lock_override" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.Initializer.parameter.isLockOverride"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_asset_distribution_channel_attachment#is_lock_override DataOciMediaServicesMediaAssetDistributionChannelAttachment#is_lock_override}.

---

##### `locks`<sup>Optional</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.Initializer.parameter.locks"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocks">DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocks</a>]]

locks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_asset_distribution_channel_attachment#locks DataOciMediaServicesMediaAssetDistributionChannelAttachment#locks}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.putLocks">put_locks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.resetIsLockOverride">reset_is_lock_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.resetLocks">reset_locks</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_locks` <a name="put_locks" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.putLocks"></a>

```python
def put_locks(
  value: typing.Union[IResolvable, typing.List[DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocks]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.putLocks.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocks">DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocks</a>]]

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_lock_override` <a name="reset_is_lock_override" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.resetIsLockOverride"></a>

```python
def reset_is_lock_override() -> None
```

##### `reset_locks` <a name="reset_locks" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.resetLocks"></a>

```python
def reset_locks() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciMediaServicesMediaAssetDistributionChannelAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_media_asset_distribution_channel_attachment

dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_media_asset_distribution_channel_attachment

dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_media_asset_distribution_channel_attachment

dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_media_asset_distribution_channel_attachment

dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciMediaServicesMediaAssetDistributionChannelAttachment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciMediaServicesMediaAssetDistributionChannelAttachment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciMediaServicesMediaAssetDistributionChannelAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_asset_distribution_channel_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMediaServicesMediaAssetDistributionChannelAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.locks">locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList">DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.mediaWorkflowJobId">media_workflow_job_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.metadataRef">metadata_ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.distributionChannelIdInput">distribution_channel_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.isLockOverrideInput">is_lock_override_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.locksInput">locks_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocks">DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocks</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.mediaAssetIdInput">media_asset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.distributionChannelId">distribution_channel_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.isLockOverride">is_lock_override</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.mediaAssetId">media_asset_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `locks`<sup>Required</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.locks"></a>

```python
locks: DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList">DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList</a>

---

##### `media_workflow_job_id`<sup>Required</sup> <a name="media_workflow_job_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.mediaWorkflowJobId"></a>

```python
media_workflow_job_id: str
```

- *Type:* str

---

##### `metadata_ref`<sup>Required</sup> <a name="metadata_ref" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.metadataRef"></a>

```python
metadata_ref: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `distribution_channel_id_input`<sup>Optional</sup> <a name="distribution_channel_id_input" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.distributionChannelIdInput"></a>

```python
distribution_channel_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_lock_override_input`<sup>Optional</sup> <a name="is_lock_override_input" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.isLockOverrideInput"></a>

```python
is_lock_override_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `locks_input`<sup>Optional</sup> <a name="locks_input" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.locksInput"></a>

```python
locks_input: typing.Union[IResolvable, typing.List[DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocks">DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocks</a>]]

---

##### `media_asset_id_input`<sup>Optional</sup> <a name="media_asset_id_input" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.mediaAssetIdInput"></a>

```python
media_asset_id_input: str
```

- *Type:* str

---

##### `distribution_channel_id`<sup>Required</sup> <a name="distribution_channel_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.distributionChannelId"></a>

```python
distribution_channel_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_lock_override`<sup>Required</sup> <a name="is_lock_override" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.isLockOverride"></a>

```python
is_lock_override: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `media_asset_id`<sup>Required</sup> <a name="media_asset_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.mediaAssetId"></a>

```python
media_asset_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMediaServicesMediaAssetDistributionChannelAttachmentConfig <a name="DataOciMediaServicesMediaAssetDistributionChannelAttachmentConfig" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_media_asset_distribution_channel_attachment

dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  distribution_channel_id: str,
  media_asset_id: str,
  id: str = None,
  is_lock_override: typing.Union[bool, IResolvable] = None,
  locks: typing.Union[IResolvable, typing.List[DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocks]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentConfig.property.distributionChannelId">distribution_channel_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_asset_distribution_channel_attachment#distribution_channel_id DataOciMediaServicesMediaAssetDistributionChannelAttachment#distribution_channel_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentConfig.property.mediaAssetId">media_asset_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_asset_distribution_channel_attachment#media_asset_id DataOciMediaServicesMediaAssetDistributionChannelAttachment#media_asset_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_asset_distribution_channel_attachment#id DataOciMediaServicesMediaAssetDistributionChannelAttachment#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentConfig.property.isLockOverride">is_lock_override</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_asset_distribution_channel_attachment#is_lock_override DataOciMediaServicesMediaAssetDistributionChannelAttachment#is_lock_override}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentConfig.property.locks">locks</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocks">DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocks</a>]]</code> | locks block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `distribution_channel_id`<sup>Required</sup> <a name="distribution_channel_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentConfig.property.distributionChannelId"></a>

```python
distribution_channel_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_asset_distribution_channel_attachment#distribution_channel_id DataOciMediaServicesMediaAssetDistributionChannelAttachment#distribution_channel_id}.

---

##### `media_asset_id`<sup>Required</sup> <a name="media_asset_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentConfig.property.mediaAssetId"></a>

```python
media_asset_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_asset_distribution_channel_attachment#media_asset_id DataOciMediaServicesMediaAssetDistributionChannelAttachment#media_asset_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_asset_distribution_channel_attachment#id DataOciMediaServicesMediaAssetDistributionChannelAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_lock_override`<sup>Optional</sup> <a name="is_lock_override" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentConfig.property.isLockOverride"></a>

```python
is_lock_override: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_asset_distribution_channel_attachment#is_lock_override DataOciMediaServicesMediaAssetDistributionChannelAttachment#is_lock_override}.

---

##### `locks`<sup>Optional</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentConfig.property.locks"></a>

```python
locks: typing.Union[IResolvable, typing.List[DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocks">DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocks</a>]]

locks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_asset_distribution_channel_attachment#locks DataOciMediaServicesMediaAssetDistributionChannelAttachment#locks}

---

### DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocks <a name="DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocks" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocks.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_media_asset_distribution_channel_attachment

dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocks(
  message: str = None,
  related_resource_id: str = None,
  time_created: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocks.property.message">message</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_asset_distribution_channel_attachment#message DataOciMediaServicesMediaAssetDistributionChannelAttachment#message}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocks.property.relatedResourceId">related_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_asset_distribution_channel_attachment#related_resource_id DataOciMediaServicesMediaAssetDistributionChannelAttachment#related_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocks.property.timeCreated">time_created</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_asset_distribution_channel_attachment#time_created DataOciMediaServicesMediaAssetDistributionChannelAttachment#time_created}. |

---

##### `message`<sup>Optional</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocks.property.message"></a>

```python
message: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_asset_distribution_channel_attachment#message DataOciMediaServicesMediaAssetDistributionChannelAttachment#message}.

---

##### `related_resource_id`<sup>Optional</sup> <a name="related_resource_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocks.property.relatedResourceId"></a>

```python
related_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_asset_distribution_channel_attachment#related_resource_id DataOciMediaServicesMediaAssetDistributionChannelAttachment#related_resource_id}.

---

##### `time_created`<sup>Optional</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocks.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_asset_distribution_channel_attachment#time_created DataOciMediaServicesMediaAssetDistributionChannelAttachment#time_created}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList <a name="DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_media_asset_distribution_channel_attachment

dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocks">DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocks</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocks">DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocks</a>]]

---


### DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference <a name="DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_media_asset_distribution_channel_attachment

dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.resetMessage">reset_message</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.resetRelatedResourceId">reset_related_resource_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.resetTimeCreated">reset_time_created</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_message` <a name="reset_message" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.resetMessage"></a>

```python
def reset_message() -> None
```

##### `reset_related_resource_id` <a name="reset_related_resource_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.resetRelatedResourceId"></a>

```python
def reset_related_resource_id() -> None
```

##### `reset_time_created` <a name="reset_time_created" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.resetTimeCreated"></a>

```python
def reset_time_created() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.property.messageInput">message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.property.relatedResourceIdInput">related_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.property.timeCreatedInput">time_created_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.property.relatedResourceId">related_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocks">DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocks</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `message_input`<sup>Optional</sup> <a name="message_input" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.property.messageInput"></a>

```python
message_input: str
```

- *Type:* str

---

##### `related_resource_id_input`<sup>Optional</sup> <a name="related_resource_id_input" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.property.relatedResourceIdInput"></a>

```python
related_resource_id_input: str
```

- *Type:* str

---

##### `time_created_input`<sup>Optional</sup> <a name="time_created_input" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.property.timeCreatedInput"></a>

```python
time_created_input: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `related_resource_id`<sup>Required</sup> <a name="related_resource_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.property.relatedResourceId"></a>

```python
related_resource_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocks]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocks">DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocks</a>]

---



