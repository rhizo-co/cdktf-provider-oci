# `mediaServicesStreamPackagingConfig` Submodule <a name="`mediaServicesStreamPackagingConfig` Submodule" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaServicesStreamPackagingConfig <a name="MediaServicesStreamPackagingConfig" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config oci_media_services_stream_packaging_config}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import media_services_stream_packaging_config

mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  distribution_channel_id: str,
  segment_time_in_seconds: typing.Union[int, float],
  stream_packaging_format: str,
  defined_tags: typing.Mapping[str] = None,
  encryption: MediaServicesStreamPackagingConfigEncryption = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  is_lock_override: typing.Union[bool, IResolvable] = None,
  locks: typing.Union[IResolvable, typing.List[MediaServicesStreamPackagingConfigLocks]] = None,
  timeouts: MediaServicesStreamPackagingConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#display_name MediaServicesStreamPackagingConfig#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.Initializer.parameter.distributionChannelId">distribution_channel_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#distribution_channel_id MediaServicesStreamPackagingConfig#distribution_channel_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.Initializer.parameter.segmentTimeInSeconds">segment_time_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#segment_time_in_seconds MediaServicesStreamPackagingConfig#segment_time_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.Initializer.parameter.streamPackagingFormat">stream_packaging_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#stream_packaging_format MediaServicesStreamPackagingConfig#stream_packaging_format}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#defined_tags MediaServicesStreamPackagingConfig#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.Initializer.parameter.encryption">encryption</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryption">MediaServicesStreamPackagingConfigEncryption</a></code> | encryption block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#freeform_tags MediaServicesStreamPackagingConfig#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#id MediaServicesStreamPackagingConfig#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.Initializer.parameter.isLockOverride">is_lock_override</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#is_lock_override MediaServicesStreamPackagingConfig#is_lock_override}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.Initializer.parameter.locks">locks</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocks">MediaServicesStreamPackagingConfigLocks</a>]]</code> | locks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeouts">MediaServicesStreamPackagingConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#display_name MediaServicesStreamPackagingConfig#display_name}.

---

##### `distribution_channel_id`<sup>Required</sup> <a name="distribution_channel_id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.Initializer.parameter.distributionChannelId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#distribution_channel_id MediaServicesStreamPackagingConfig#distribution_channel_id}.

---

##### `segment_time_in_seconds`<sup>Required</sup> <a name="segment_time_in_seconds" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.Initializer.parameter.segmentTimeInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#segment_time_in_seconds MediaServicesStreamPackagingConfig#segment_time_in_seconds}.

---

##### `stream_packaging_format`<sup>Required</sup> <a name="stream_packaging_format" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.Initializer.parameter.streamPackagingFormat"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#stream_packaging_format MediaServicesStreamPackagingConfig#stream_packaging_format}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#defined_tags MediaServicesStreamPackagingConfig#defined_tags}.

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.Initializer.parameter.encryption"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryption">MediaServicesStreamPackagingConfigEncryption</a>

encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#encryption MediaServicesStreamPackagingConfig#encryption}

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#freeform_tags MediaServicesStreamPackagingConfig#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#id MediaServicesStreamPackagingConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_lock_override`<sup>Optional</sup> <a name="is_lock_override" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.Initializer.parameter.isLockOverride"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#is_lock_override MediaServicesStreamPackagingConfig#is_lock_override}.

---

##### `locks`<sup>Optional</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.Initializer.parameter.locks"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocks">MediaServicesStreamPackagingConfigLocks</a>]]

locks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#locks MediaServicesStreamPackagingConfig#locks}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeouts">MediaServicesStreamPackagingConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#timeouts MediaServicesStreamPackagingConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.putEncryption">put_encryption</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.putLocks">put_locks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.resetEncryption">reset_encryption</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.resetIsLockOverride">reset_is_lock_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.resetLocks">reset_locks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_encryption` <a name="put_encryption" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.putEncryption"></a>

```python
def put_encryption(
  algorithm: str,
  kms_key_id: str = None
) -> None
```

###### `algorithm`<sup>Required</sup> <a name="algorithm" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.putEncryption.parameter.algorithm"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#algorithm MediaServicesStreamPackagingConfig#algorithm}.

---

###### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.putEncryption.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#kms_key_id MediaServicesStreamPackagingConfig#kms_key_id}.

---

##### `put_locks` <a name="put_locks" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.putLocks"></a>

```python
def put_locks(
  value: typing.Union[IResolvable, typing.List[MediaServicesStreamPackagingConfigLocks]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.putLocks.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocks">MediaServicesStreamPackagingConfigLocks</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#create MediaServicesStreamPackagingConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#delete MediaServicesStreamPackagingConfig#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#update MediaServicesStreamPackagingConfig#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_encryption` <a name="reset_encryption" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.resetEncryption"></a>

```python
def reset_encryption() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_lock_override` <a name="reset_is_lock_override" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.resetIsLockOverride"></a>

```python
def reset_is_lock_override() -> None
```

##### `reset_locks` <a name="reset_locks" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.resetLocks"></a>

```python
def reset_locks() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MediaServicesStreamPackagingConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import media_services_stream_packaging_config

mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import media_services_stream_packaging_config

mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import media_services_stream_packaging_config

mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import media_services_stream_packaging_config

mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MediaServicesStreamPackagingConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MediaServicesStreamPackagingConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MediaServicesStreamPackagingConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MediaServicesStreamPackagingConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.encryption">encryption</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference">MediaServicesStreamPackagingConfigEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.locks">locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksList">MediaServicesStreamPackagingConfigLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference">MediaServicesStreamPackagingConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.distributionChannelIdInput">distribution_channel_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.encryptionInput">encryption_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryption">MediaServicesStreamPackagingConfigEncryption</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.isLockOverrideInput">is_lock_override_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.locksInput">locks_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocks">MediaServicesStreamPackagingConfigLocks</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.segmentTimeInSecondsInput">segment_time_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.streamPackagingFormatInput">stream_packaging_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeouts">MediaServicesStreamPackagingConfigTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.distributionChannelId">distribution_channel_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.isLockOverride">is_lock_override</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.segmentTimeInSeconds">segment_time_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.streamPackagingFormat">stream_packaging_format</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.encryption"></a>

```python
encryption: MediaServicesStreamPackagingConfigEncryptionOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference">MediaServicesStreamPackagingConfigEncryptionOutputReference</a>

---

##### `locks`<sup>Required</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.locks"></a>

```python
locks: MediaServicesStreamPackagingConfigLocksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksList">MediaServicesStreamPackagingConfigLocksList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.timeouts"></a>

```python
timeouts: MediaServicesStreamPackagingConfigTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference">MediaServicesStreamPackagingConfigTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `distribution_channel_id_input`<sup>Optional</sup> <a name="distribution_channel_id_input" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.distributionChannelIdInput"></a>

```python
distribution_channel_id_input: str
```

- *Type:* str

---

##### `encryption_input`<sup>Optional</sup> <a name="encryption_input" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.encryptionInput"></a>

```python
encryption_input: MediaServicesStreamPackagingConfigEncryption
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryption">MediaServicesStreamPackagingConfigEncryption</a>

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_lock_override_input`<sup>Optional</sup> <a name="is_lock_override_input" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.isLockOverrideInput"></a>

```python
is_lock_override_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `locks_input`<sup>Optional</sup> <a name="locks_input" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.locksInput"></a>

```python
locks_input: typing.Union[IResolvable, typing.List[MediaServicesStreamPackagingConfigLocks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocks">MediaServicesStreamPackagingConfigLocks</a>]]

---

##### `segment_time_in_seconds_input`<sup>Optional</sup> <a name="segment_time_in_seconds_input" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.segmentTimeInSecondsInput"></a>

```python
segment_time_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stream_packaging_format_input`<sup>Optional</sup> <a name="stream_packaging_format_input" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.streamPackagingFormatInput"></a>

```python
stream_packaging_format_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, MediaServicesStreamPackagingConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeouts">MediaServicesStreamPackagingConfigTimeouts</a>]

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `distribution_channel_id`<sup>Required</sup> <a name="distribution_channel_id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.distributionChannelId"></a>

```python
distribution_channel_id: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_lock_override`<sup>Required</sup> <a name="is_lock_override" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.isLockOverride"></a>

```python
is_lock_override: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `segment_time_in_seconds`<sup>Required</sup> <a name="segment_time_in_seconds" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.segmentTimeInSeconds"></a>

```python
segment_time_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stream_packaging_format`<sup>Required</sup> <a name="stream_packaging_format" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.streamPackagingFormat"></a>

```python
stream_packaging_format: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MediaServicesStreamPackagingConfigConfig <a name="MediaServicesStreamPackagingConfigConfig" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import media_services_stream_packaging_config

mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  distribution_channel_id: str,
  segment_time_in_seconds: typing.Union[int, float],
  stream_packaging_format: str,
  defined_tags: typing.Mapping[str] = None,
  encryption: MediaServicesStreamPackagingConfigEncryption = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  is_lock_override: typing.Union[bool, IResolvable] = None,
  locks: typing.Union[IResolvable, typing.List[MediaServicesStreamPackagingConfigLocks]] = None,
  timeouts: MediaServicesStreamPackagingConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#display_name MediaServicesStreamPackagingConfig#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.distributionChannelId">distribution_channel_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#distribution_channel_id MediaServicesStreamPackagingConfig#distribution_channel_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.segmentTimeInSeconds">segment_time_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#segment_time_in_seconds MediaServicesStreamPackagingConfig#segment_time_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.streamPackagingFormat">stream_packaging_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#stream_packaging_format MediaServicesStreamPackagingConfig#stream_packaging_format}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#defined_tags MediaServicesStreamPackagingConfig#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.encryption">encryption</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryption">MediaServicesStreamPackagingConfigEncryption</a></code> | encryption block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#freeform_tags MediaServicesStreamPackagingConfig#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#id MediaServicesStreamPackagingConfig#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.isLockOverride">is_lock_override</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#is_lock_override MediaServicesStreamPackagingConfig#is_lock_override}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.locks">locks</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocks">MediaServicesStreamPackagingConfigLocks</a>]]</code> | locks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeouts">MediaServicesStreamPackagingConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#display_name MediaServicesStreamPackagingConfig#display_name}.

---

##### `distribution_channel_id`<sup>Required</sup> <a name="distribution_channel_id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.distributionChannelId"></a>

```python
distribution_channel_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#distribution_channel_id MediaServicesStreamPackagingConfig#distribution_channel_id}.

---

##### `segment_time_in_seconds`<sup>Required</sup> <a name="segment_time_in_seconds" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.segmentTimeInSeconds"></a>

```python
segment_time_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#segment_time_in_seconds MediaServicesStreamPackagingConfig#segment_time_in_seconds}.

---

##### `stream_packaging_format`<sup>Required</sup> <a name="stream_packaging_format" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.streamPackagingFormat"></a>

```python
stream_packaging_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#stream_packaging_format MediaServicesStreamPackagingConfig#stream_packaging_format}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#defined_tags MediaServicesStreamPackagingConfig#defined_tags}.

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.encryption"></a>

```python
encryption: MediaServicesStreamPackagingConfigEncryption
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryption">MediaServicesStreamPackagingConfigEncryption</a>

encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#encryption MediaServicesStreamPackagingConfig#encryption}

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#freeform_tags MediaServicesStreamPackagingConfig#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#id MediaServicesStreamPackagingConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_lock_override`<sup>Optional</sup> <a name="is_lock_override" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.isLockOverride"></a>

```python
is_lock_override: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#is_lock_override MediaServicesStreamPackagingConfig#is_lock_override}.

---

##### `locks`<sup>Optional</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.locks"></a>

```python
locks: typing.Union[IResolvable, typing.List[MediaServicesStreamPackagingConfigLocks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocks">MediaServicesStreamPackagingConfigLocks</a>]]

locks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#locks MediaServicesStreamPackagingConfig#locks}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigConfig.property.timeouts"></a>

```python
timeouts: MediaServicesStreamPackagingConfigTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeouts">MediaServicesStreamPackagingConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#timeouts MediaServicesStreamPackagingConfig#timeouts}

---

### MediaServicesStreamPackagingConfigEncryption <a name="MediaServicesStreamPackagingConfigEncryption" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryption"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryption.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import media_services_stream_packaging_config

mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryption(
  algorithm: str,
  kms_key_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryption.property.algorithm">algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#algorithm MediaServicesStreamPackagingConfig#algorithm}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryption.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#kms_key_id MediaServicesStreamPackagingConfig#kms_key_id}. |

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryption.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#algorithm MediaServicesStreamPackagingConfig#algorithm}.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryption.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#kms_key_id MediaServicesStreamPackagingConfig#kms_key_id}.

---

### MediaServicesStreamPackagingConfigLocks <a name="MediaServicesStreamPackagingConfigLocks" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocks.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import media_services_stream_packaging_config

mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocks(
  compartment_id: str,
  type: str,
  message: str = None,
  related_resource_id: str = None,
  time_created: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocks.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#compartment_id MediaServicesStreamPackagingConfig#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocks.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#type MediaServicesStreamPackagingConfig#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocks.property.message">message</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#message MediaServicesStreamPackagingConfig#message}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocks.property.relatedResourceId">related_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#related_resource_id MediaServicesStreamPackagingConfig#related_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocks.property.timeCreated">time_created</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#time_created MediaServicesStreamPackagingConfig#time_created}. |

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocks.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#compartment_id MediaServicesStreamPackagingConfig#compartment_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocks.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#type MediaServicesStreamPackagingConfig#type}.

---

##### `message`<sup>Optional</sup> <a name="message" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocks.property.message"></a>

```python
message: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#message MediaServicesStreamPackagingConfig#message}.

---

##### `related_resource_id`<sup>Optional</sup> <a name="related_resource_id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocks.property.relatedResourceId"></a>

```python
related_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#related_resource_id MediaServicesStreamPackagingConfig#related_resource_id}.

---

##### `time_created`<sup>Optional</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocks.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#time_created MediaServicesStreamPackagingConfig#time_created}.

---

### MediaServicesStreamPackagingConfigTimeouts <a name="MediaServicesStreamPackagingConfigTimeouts" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import media_services_stream_packaging_config

mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#create MediaServicesStreamPackagingConfig#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#delete MediaServicesStreamPackagingConfig#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#update MediaServicesStreamPackagingConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#create MediaServicesStreamPackagingConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#delete MediaServicesStreamPackagingConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_packaging_config#update MediaServicesStreamPackagingConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediaServicesStreamPackagingConfigEncryptionOutputReference <a name="MediaServicesStreamPackagingConfigEncryptionOutputReference" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import media_services_stream_packaging_config

mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.property.algorithmInput">algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.property.algorithm">algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryption">MediaServicesStreamPackagingConfigEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `algorithm_input`<sup>Optional</sup> <a name="algorithm_input" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.property.algorithmInput"></a>

```python
algorithm_input: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: MediaServicesStreamPackagingConfigEncryption
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigEncryption">MediaServicesStreamPackagingConfigEncryption</a>

---


### MediaServicesStreamPackagingConfigLocksList <a name="MediaServicesStreamPackagingConfigLocksList" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import media_services_stream_packaging_config

mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MediaServicesStreamPackagingConfigLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocks">MediaServicesStreamPackagingConfigLocks</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MediaServicesStreamPackagingConfigLocks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocks">MediaServicesStreamPackagingConfigLocks</a>]]

---


### MediaServicesStreamPackagingConfigLocksOutputReference <a name="MediaServicesStreamPackagingConfigLocksOutputReference" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import media_services_stream_packaging_config

mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.resetMessage">reset_message</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.resetRelatedResourceId">reset_related_resource_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.resetTimeCreated">reset_time_created</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_message` <a name="reset_message" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.resetMessage"></a>

```python
def reset_message() -> None
```

##### `reset_related_resource_id` <a name="reset_related_resource_id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.resetRelatedResourceId"></a>

```python
def reset_related_resource_id() -> None
```

##### `reset_time_created` <a name="reset_time_created" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.resetTimeCreated"></a>

```python
def reset_time_created() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.property.messageInput">message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.property.relatedResourceIdInput">related_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.property.timeCreatedInput">time_created_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.property.relatedResourceId">related_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocks">MediaServicesStreamPackagingConfigLocks</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `message_input`<sup>Optional</sup> <a name="message_input" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.property.messageInput"></a>

```python
message_input: str
```

- *Type:* str

---

##### `related_resource_id_input`<sup>Optional</sup> <a name="related_resource_id_input" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.property.relatedResourceIdInput"></a>

```python
related_resource_id_input: str
```

- *Type:* str

---

##### `time_created_input`<sup>Optional</sup> <a name="time_created_input" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.property.timeCreatedInput"></a>

```python
time_created_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `related_resource_id`<sup>Required</sup> <a name="related_resource_id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.property.relatedResourceId"></a>

```python
related_resource_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocksOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MediaServicesStreamPackagingConfigLocks]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigLocks">MediaServicesStreamPackagingConfigLocks</a>]

---


### MediaServicesStreamPackagingConfigTimeoutsOutputReference <a name="MediaServicesStreamPackagingConfigTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import media_services_stream_packaging_config

mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeouts">MediaServicesStreamPackagingConfigTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MediaServicesStreamPackagingConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamPackagingConfig.MediaServicesStreamPackagingConfigTimeouts">MediaServicesStreamPackagingConfigTimeouts</a>]

---



