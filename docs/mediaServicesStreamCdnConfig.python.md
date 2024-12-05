# `mediaServicesStreamCdnConfig` Submodule <a name="`mediaServicesStreamCdnConfig` Submodule" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaServicesStreamCdnConfig <a name="MediaServicesStreamCdnConfig" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config oci_media_services_stream_cdn_config}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import media_services_stream_cdn_config

mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  config: MediaServicesStreamCdnConfigConfigA,
  display_name: str,
  distribution_channel_id: str,
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  is_enabled: typing.Union[bool, IResolvable] = None,
  is_lock_override: typing.Union[bool, IResolvable] = None,
  locks: typing.Union[IResolvable, typing.List[MediaServicesStreamCdnConfigLocks]] = None,
  timeouts: MediaServicesStreamCdnConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA">MediaServicesStreamCdnConfigConfigA</a></code> | config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#display_name MediaServicesStreamCdnConfig#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.distributionChannelId">distribution_channel_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#distribution_channel_id MediaServicesStreamCdnConfig#distribution_channel_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#defined_tags MediaServicesStreamCdnConfig#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#freeform_tags MediaServicesStreamCdnConfig#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#id MediaServicesStreamCdnConfig#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#is_enabled MediaServicesStreamCdnConfig#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.isLockOverride">is_lock_override</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#is_lock_override MediaServicesStreamCdnConfig#is_lock_override}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.locks">locks</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks">MediaServicesStreamCdnConfigLocks</a>]]</code> | locks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts">MediaServicesStreamCdnConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA">MediaServicesStreamCdnConfigConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#config MediaServicesStreamCdnConfig#config}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#display_name MediaServicesStreamCdnConfig#display_name}.

---

##### `distribution_channel_id`<sup>Required</sup> <a name="distribution_channel_id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.distributionChannelId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#distribution_channel_id MediaServicesStreamCdnConfig#distribution_channel_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#defined_tags MediaServicesStreamCdnConfig#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#freeform_tags MediaServicesStreamCdnConfig#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#id MediaServicesStreamCdnConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.isEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#is_enabled MediaServicesStreamCdnConfig#is_enabled}.

---

##### `is_lock_override`<sup>Optional</sup> <a name="is_lock_override" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.isLockOverride"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#is_lock_override MediaServicesStreamCdnConfig#is_lock_override}.

---

##### `locks`<sup>Optional</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.locks"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks">MediaServicesStreamCdnConfigLocks</a>]]

locks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#locks MediaServicesStreamCdnConfig#locks}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts">MediaServicesStreamCdnConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#timeouts MediaServicesStreamCdnConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.putConfig">put_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.putLocks">put_locks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetIsEnabled">reset_is_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetIsLockOverride">reset_is_lock_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetLocks">reset_locks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_config` <a name="put_config" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.putConfig"></a>

```python
def put_config(
  type: str,
  edge_hostname: str = None,
  edge_path_prefix: str = None,
  edge_token_key: str = None,
  edge_token_salt: str = None,
  is_edge_token_auth: typing.Union[bool, IResolvable] = None,
  origin_auth_secret_key_a: str = None,
  origin_auth_secret_key_b: str = None,
  origin_auth_secret_key_nonce_a: str = None,
  origin_auth_secret_key_nonce_b: str = None,
  origin_auth_sign_encryption: str = None,
  origin_auth_sign_type: str = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.putConfig.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#type MediaServicesStreamCdnConfig#type}.

---

###### `edge_hostname`<sup>Optional</sup> <a name="edge_hostname" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.putConfig.parameter.edgeHostname"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#edge_hostname MediaServicesStreamCdnConfig#edge_hostname}.

---

###### `edge_path_prefix`<sup>Optional</sup> <a name="edge_path_prefix" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.putConfig.parameter.edgePathPrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#edge_path_prefix MediaServicesStreamCdnConfig#edge_path_prefix}.

---

###### `edge_token_key`<sup>Optional</sup> <a name="edge_token_key" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.putConfig.parameter.edgeTokenKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#edge_token_key MediaServicesStreamCdnConfig#edge_token_key}.

---

###### `edge_token_salt`<sup>Optional</sup> <a name="edge_token_salt" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.putConfig.parameter.edgeTokenSalt"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#edge_token_salt MediaServicesStreamCdnConfig#edge_token_salt}.

---

###### `is_edge_token_auth`<sup>Optional</sup> <a name="is_edge_token_auth" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.putConfig.parameter.isEdgeTokenAuth"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#is_edge_token_auth MediaServicesStreamCdnConfig#is_edge_token_auth}.

---

###### `origin_auth_secret_key_a`<sup>Optional</sup> <a name="origin_auth_secret_key_a" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.putConfig.parameter.originAuthSecretKeyA"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#origin_auth_secret_key_a MediaServicesStreamCdnConfig#origin_auth_secret_key_a}.

---

###### `origin_auth_secret_key_b`<sup>Optional</sup> <a name="origin_auth_secret_key_b" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.putConfig.parameter.originAuthSecretKeyB"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#origin_auth_secret_key_b MediaServicesStreamCdnConfig#origin_auth_secret_key_b}.

---

###### `origin_auth_secret_key_nonce_a`<sup>Optional</sup> <a name="origin_auth_secret_key_nonce_a" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.putConfig.parameter.originAuthSecretKeyNonceA"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#origin_auth_secret_key_nonce_a MediaServicesStreamCdnConfig#origin_auth_secret_key_nonce_a}.

---

###### `origin_auth_secret_key_nonce_b`<sup>Optional</sup> <a name="origin_auth_secret_key_nonce_b" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.putConfig.parameter.originAuthSecretKeyNonceB"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#origin_auth_secret_key_nonce_b MediaServicesStreamCdnConfig#origin_auth_secret_key_nonce_b}.

---

###### `origin_auth_sign_encryption`<sup>Optional</sup> <a name="origin_auth_sign_encryption" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.putConfig.parameter.originAuthSignEncryption"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#origin_auth_sign_encryption MediaServicesStreamCdnConfig#origin_auth_sign_encryption}.

---

###### `origin_auth_sign_type`<sup>Optional</sup> <a name="origin_auth_sign_type" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.putConfig.parameter.originAuthSignType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#origin_auth_sign_type MediaServicesStreamCdnConfig#origin_auth_sign_type}.

---

##### `put_locks` <a name="put_locks" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.putLocks"></a>

```python
def put_locks(
  value: typing.Union[IResolvable, typing.List[MediaServicesStreamCdnConfigLocks]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.putLocks.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks">MediaServicesStreamCdnConfigLocks</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#create MediaServicesStreamCdnConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#delete MediaServicesStreamCdnConfig#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#update MediaServicesStreamCdnConfig#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_enabled` <a name="reset_is_enabled" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetIsEnabled"></a>

```python
def reset_is_enabled() -> None
```

##### `reset_is_lock_override` <a name="reset_is_lock_override" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetIsLockOverride"></a>

```python
def reset_is_lock_override() -> None
```

##### `reset_locks` <a name="reset_locks" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetLocks"></a>

```python
def reset_locks() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MediaServicesStreamCdnConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import media_services_stream_cdn_config

mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import media_services_stream_cdn_config

mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import media_services_stream_cdn_config

mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import media_services_stream_cdn_config

mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MediaServicesStreamCdnConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MediaServicesStreamCdnConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MediaServicesStreamCdnConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MediaServicesStreamCdnConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference">MediaServicesStreamCdnConfigConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.lifecyleDetails">lifecyle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.locks">locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList">MediaServicesStreamCdnConfigLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference">MediaServicesStreamCdnConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.configInput">config_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA">MediaServicesStreamCdnConfigConfigA</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.distributionChannelIdInput">distribution_channel_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.isEnabledInput">is_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.isLockOverrideInput">is_lock_override_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.locksInput">locks_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks">MediaServicesStreamCdnConfigLocks</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts">MediaServicesStreamCdnConfigTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.distributionChannelId">distribution_channel_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.isLockOverride">is_lock_override</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.config"></a>

```python
config: MediaServicesStreamCdnConfigConfigAOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference">MediaServicesStreamCdnConfigConfigAOutputReference</a>

---

##### `lifecyle_details`<sup>Required</sup> <a name="lifecyle_details" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.lifecyleDetails"></a>

```python
lifecyle_details: str
```

- *Type:* str

---

##### `locks`<sup>Required</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.locks"></a>

```python
locks: MediaServicesStreamCdnConfigLocksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList">MediaServicesStreamCdnConfigLocksList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.timeouts"></a>

```python
timeouts: MediaServicesStreamCdnConfigTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference">MediaServicesStreamCdnConfigTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `config_input`<sup>Optional</sup> <a name="config_input" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.configInput"></a>

```python
config_input: MediaServicesStreamCdnConfigConfigA
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA">MediaServicesStreamCdnConfigConfigA</a>

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `distribution_channel_id_input`<sup>Optional</sup> <a name="distribution_channel_id_input" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.distributionChannelIdInput"></a>

```python
distribution_channel_id_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_enabled_input`<sup>Optional</sup> <a name="is_enabled_input" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.isEnabledInput"></a>

```python
is_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_lock_override_input`<sup>Optional</sup> <a name="is_lock_override_input" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.isLockOverrideInput"></a>

```python
is_lock_override_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `locks_input`<sup>Optional</sup> <a name="locks_input" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.locksInput"></a>

```python
locks_input: typing.Union[IResolvable, typing.List[MediaServicesStreamCdnConfigLocks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks">MediaServicesStreamCdnConfigLocks</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, MediaServicesStreamCdnConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts">MediaServicesStreamCdnConfigTimeouts</a>]

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `distribution_channel_id`<sup>Required</sup> <a name="distribution_channel_id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.distributionChannelId"></a>

```python
distribution_channel_id: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_lock_override`<sup>Required</sup> <a name="is_lock_override" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.isLockOverride"></a>

```python
is_lock_override: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MediaServicesStreamCdnConfigConfig <a name="MediaServicesStreamCdnConfigConfig" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import media_services_stream_cdn_config

mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  config: MediaServicesStreamCdnConfigConfigA,
  display_name: str,
  distribution_channel_id: str,
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  is_enabled: typing.Union[bool, IResolvable] = None,
  is_lock_override: typing.Union[bool, IResolvable] = None,
  locks: typing.Union[IResolvable, typing.List[MediaServicesStreamCdnConfigLocks]] = None,
  timeouts: MediaServicesStreamCdnConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA">MediaServicesStreamCdnConfigConfigA</a></code> | config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#display_name MediaServicesStreamCdnConfig#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.distributionChannelId">distribution_channel_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#distribution_channel_id MediaServicesStreamCdnConfig#distribution_channel_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#defined_tags MediaServicesStreamCdnConfig#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#freeform_tags MediaServicesStreamCdnConfig#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#id MediaServicesStreamCdnConfig#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#is_enabled MediaServicesStreamCdnConfig#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.isLockOverride">is_lock_override</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#is_lock_override MediaServicesStreamCdnConfig#is_lock_override}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.locks">locks</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks">MediaServicesStreamCdnConfigLocks</a>]]</code> | locks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts">MediaServicesStreamCdnConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.config"></a>

```python
config: MediaServicesStreamCdnConfigConfigA
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA">MediaServicesStreamCdnConfigConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#config MediaServicesStreamCdnConfig#config}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#display_name MediaServicesStreamCdnConfig#display_name}.

---

##### `distribution_channel_id`<sup>Required</sup> <a name="distribution_channel_id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.distributionChannelId"></a>

```python
distribution_channel_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#distribution_channel_id MediaServicesStreamCdnConfig#distribution_channel_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#defined_tags MediaServicesStreamCdnConfig#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#freeform_tags MediaServicesStreamCdnConfig#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#id MediaServicesStreamCdnConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#is_enabled MediaServicesStreamCdnConfig#is_enabled}.

---

##### `is_lock_override`<sup>Optional</sup> <a name="is_lock_override" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.isLockOverride"></a>

```python
is_lock_override: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#is_lock_override MediaServicesStreamCdnConfig#is_lock_override}.

---

##### `locks`<sup>Optional</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.locks"></a>

```python
locks: typing.Union[IResolvable, typing.List[MediaServicesStreamCdnConfigLocks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks">MediaServicesStreamCdnConfigLocks</a>]]

locks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#locks MediaServicesStreamCdnConfig#locks}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.timeouts"></a>

```python
timeouts: MediaServicesStreamCdnConfigTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts">MediaServicesStreamCdnConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#timeouts MediaServicesStreamCdnConfig#timeouts}

---

### MediaServicesStreamCdnConfigConfigA <a name="MediaServicesStreamCdnConfigConfigA" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import media_services_stream_cdn_config

mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA(
  type: str,
  edge_hostname: str = None,
  edge_path_prefix: str = None,
  edge_token_key: str = None,
  edge_token_salt: str = None,
  is_edge_token_auth: typing.Union[bool, IResolvable] = None,
  origin_auth_secret_key_a: str = None,
  origin_auth_secret_key_b: str = None,
  origin_auth_secret_key_nonce_a: str = None,
  origin_auth_secret_key_nonce_b: str = None,
  origin_auth_sign_encryption: str = None,
  origin_auth_sign_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#type MediaServicesStreamCdnConfig#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.edgeHostname">edge_hostname</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#edge_hostname MediaServicesStreamCdnConfig#edge_hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.edgePathPrefix">edge_path_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#edge_path_prefix MediaServicesStreamCdnConfig#edge_path_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.edgeTokenKey">edge_token_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#edge_token_key MediaServicesStreamCdnConfig#edge_token_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.edgeTokenSalt">edge_token_salt</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#edge_token_salt MediaServicesStreamCdnConfig#edge_token_salt}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.isEdgeTokenAuth">is_edge_token_auth</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#is_edge_token_auth MediaServicesStreamCdnConfig#is_edge_token_auth}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.originAuthSecretKeyA">origin_auth_secret_key_a</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#origin_auth_secret_key_a MediaServicesStreamCdnConfig#origin_auth_secret_key_a}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.originAuthSecretKeyB">origin_auth_secret_key_b</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#origin_auth_secret_key_b MediaServicesStreamCdnConfig#origin_auth_secret_key_b}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.originAuthSecretKeyNonceA">origin_auth_secret_key_nonce_a</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#origin_auth_secret_key_nonce_a MediaServicesStreamCdnConfig#origin_auth_secret_key_nonce_a}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.originAuthSecretKeyNonceB">origin_auth_secret_key_nonce_b</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#origin_auth_secret_key_nonce_b MediaServicesStreamCdnConfig#origin_auth_secret_key_nonce_b}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.originAuthSignEncryption">origin_auth_sign_encryption</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#origin_auth_sign_encryption MediaServicesStreamCdnConfig#origin_auth_sign_encryption}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.originAuthSignType">origin_auth_sign_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#origin_auth_sign_type MediaServicesStreamCdnConfig#origin_auth_sign_type}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#type MediaServicesStreamCdnConfig#type}.

---

##### `edge_hostname`<sup>Optional</sup> <a name="edge_hostname" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.edgeHostname"></a>

```python
edge_hostname: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#edge_hostname MediaServicesStreamCdnConfig#edge_hostname}.

---

##### `edge_path_prefix`<sup>Optional</sup> <a name="edge_path_prefix" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.edgePathPrefix"></a>

```python
edge_path_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#edge_path_prefix MediaServicesStreamCdnConfig#edge_path_prefix}.

---

##### `edge_token_key`<sup>Optional</sup> <a name="edge_token_key" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.edgeTokenKey"></a>

```python
edge_token_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#edge_token_key MediaServicesStreamCdnConfig#edge_token_key}.

---

##### `edge_token_salt`<sup>Optional</sup> <a name="edge_token_salt" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.edgeTokenSalt"></a>

```python
edge_token_salt: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#edge_token_salt MediaServicesStreamCdnConfig#edge_token_salt}.

---

##### `is_edge_token_auth`<sup>Optional</sup> <a name="is_edge_token_auth" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.isEdgeTokenAuth"></a>

```python
is_edge_token_auth: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#is_edge_token_auth MediaServicesStreamCdnConfig#is_edge_token_auth}.

---

##### `origin_auth_secret_key_a`<sup>Optional</sup> <a name="origin_auth_secret_key_a" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.originAuthSecretKeyA"></a>

```python
origin_auth_secret_key_a: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#origin_auth_secret_key_a MediaServicesStreamCdnConfig#origin_auth_secret_key_a}.

---

##### `origin_auth_secret_key_b`<sup>Optional</sup> <a name="origin_auth_secret_key_b" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.originAuthSecretKeyB"></a>

```python
origin_auth_secret_key_b: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#origin_auth_secret_key_b MediaServicesStreamCdnConfig#origin_auth_secret_key_b}.

---

##### `origin_auth_secret_key_nonce_a`<sup>Optional</sup> <a name="origin_auth_secret_key_nonce_a" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.originAuthSecretKeyNonceA"></a>

```python
origin_auth_secret_key_nonce_a: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#origin_auth_secret_key_nonce_a MediaServicesStreamCdnConfig#origin_auth_secret_key_nonce_a}.

---

##### `origin_auth_secret_key_nonce_b`<sup>Optional</sup> <a name="origin_auth_secret_key_nonce_b" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.originAuthSecretKeyNonceB"></a>

```python
origin_auth_secret_key_nonce_b: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#origin_auth_secret_key_nonce_b MediaServicesStreamCdnConfig#origin_auth_secret_key_nonce_b}.

---

##### `origin_auth_sign_encryption`<sup>Optional</sup> <a name="origin_auth_sign_encryption" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.originAuthSignEncryption"></a>

```python
origin_auth_sign_encryption: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#origin_auth_sign_encryption MediaServicesStreamCdnConfig#origin_auth_sign_encryption}.

---

##### `origin_auth_sign_type`<sup>Optional</sup> <a name="origin_auth_sign_type" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.originAuthSignType"></a>

```python
origin_auth_sign_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#origin_auth_sign_type MediaServicesStreamCdnConfig#origin_auth_sign_type}.

---

### MediaServicesStreamCdnConfigLocks <a name="MediaServicesStreamCdnConfigLocks" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import media_services_stream_cdn_config

mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks(
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
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#compartment_id MediaServicesStreamCdnConfig#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#type MediaServicesStreamCdnConfig#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks.property.message">message</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#message MediaServicesStreamCdnConfig#message}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks.property.relatedResourceId">related_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#related_resource_id MediaServicesStreamCdnConfig#related_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks.property.timeCreated">time_created</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#time_created MediaServicesStreamCdnConfig#time_created}. |

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#compartment_id MediaServicesStreamCdnConfig#compartment_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#type MediaServicesStreamCdnConfig#type}.

---

##### `message`<sup>Optional</sup> <a name="message" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks.property.message"></a>

```python
message: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#message MediaServicesStreamCdnConfig#message}.

---

##### `related_resource_id`<sup>Optional</sup> <a name="related_resource_id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks.property.relatedResourceId"></a>

```python
related_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#related_resource_id MediaServicesStreamCdnConfig#related_resource_id}.

---

##### `time_created`<sup>Optional</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#time_created MediaServicesStreamCdnConfig#time_created}.

---

### MediaServicesStreamCdnConfigTimeouts <a name="MediaServicesStreamCdnConfigTimeouts" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import media_services_stream_cdn_config

mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#create MediaServicesStreamCdnConfig#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#delete MediaServicesStreamCdnConfig#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#update MediaServicesStreamCdnConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#create MediaServicesStreamCdnConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#delete MediaServicesStreamCdnConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#update MediaServicesStreamCdnConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediaServicesStreamCdnConfigConfigAOutputReference <a name="MediaServicesStreamCdnConfigConfigAOutputReference" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import media_services_stream_cdn_config

mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetEdgeHostname">reset_edge_hostname</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetEdgePathPrefix">reset_edge_path_prefix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetEdgeTokenKey">reset_edge_token_key</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetEdgeTokenSalt">reset_edge_token_salt</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetIsEdgeTokenAuth">reset_is_edge_token_auth</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetOriginAuthSecretKeyA">reset_origin_auth_secret_key_a</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetOriginAuthSecretKeyB">reset_origin_auth_secret_key_b</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetOriginAuthSecretKeyNonceA">reset_origin_auth_secret_key_nonce_a</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetOriginAuthSecretKeyNonceB">reset_origin_auth_secret_key_nonce_b</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetOriginAuthSignEncryption">reset_origin_auth_sign_encryption</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetOriginAuthSignType">reset_origin_auth_sign_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_edge_hostname` <a name="reset_edge_hostname" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetEdgeHostname"></a>

```python
def reset_edge_hostname() -> None
```

##### `reset_edge_path_prefix` <a name="reset_edge_path_prefix" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetEdgePathPrefix"></a>

```python
def reset_edge_path_prefix() -> None
```

##### `reset_edge_token_key` <a name="reset_edge_token_key" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetEdgeTokenKey"></a>

```python
def reset_edge_token_key() -> None
```

##### `reset_edge_token_salt` <a name="reset_edge_token_salt" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetEdgeTokenSalt"></a>

```python
def reset_edge_token_salt() -> None
```

##### `reset_is_edge_token_auth` <a name="reset_is_edge_token_auth" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetIsEdgeTokenAuth"></a>

```python
def reset_is_edge_token_auth() -> None
```

##### `reset_origin_auth_secret_key_a` <a name="reset_origin_auth_secret_key_a" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetOriginAuthSecretKeyA"></a>

```python
def reset_origin_auth_secret_key_a() -> None
```

##### `reset_origin_auth_secret_key_b` <a name="reset_origin_auth_secret_key_b" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetOriginAuthSecretKeyB"></a>

```python
def reset_origin_auth_secret_key_b() -> None
```

##### `reset_origin_auth_secret_key_nonce_a` <a name="reset_origin_auth_secret_key_nonce_a" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetOriginAuthSecretKeyNonceA"></a>

```python
def reset_origin_auth_secret_key_nonce_a() -> None
```

##### `reset_origin_auth_secret_key_nonce_b` <a name="reset_origin_auth_secret_key_nonce_b" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetOriginAuthSecretKeyNonceB"></a>

```python
def reset_origin_auth_secret_key_nonce_b() -> None
```

##### `reset_origin_auth_sign_encryption` <a name="reset_origin_auth_sign_encryption" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetOriginAuthSignEncryption"></a>

```python
def reset_origin_auth_sign_encryption() -> None
```

##### `reset_origin_auth_sign_type` <a name="reset_origin_auth_sign_type" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetOriginAuthSignType"></a>

```python
def reset_origin_auth_sign_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgeHostnameInput">edge_hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgePathPrefixInput">edge_path_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgeTokenKeyInput">edge_token_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgeTokenSaltInput">edge_token_salt_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.isEdgeTokenAuthInput">is_edge_token_auth_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyAInput">origin_auth_secret_key_a_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyBInput">origin_auth_secret_key_b_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyNonceAInput">origin_auth_secret_key_nonce_a_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyNonceBInput">origin_auth_secret_key_nonce_b_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSignEncryptionInput">origin_auth_sign_encryption_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSignTypeInput">origin_auth_sign_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgeHostname">edge_hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgePathPrefix">edge_path_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgeTokenKey">edge_token_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgeTokenSalt">edge_token_salt</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.isEdgeTokenAuth">is_edge_token_auth</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyA">origin_auth_secret_key_a</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyB">origin_auth_secret_key_b</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyNonceA">origin_auth_secret_key_nonce_a</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyNonceB">origin_auth_secret_key_nonce_b</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSignEncryption">origin_auth_sign_encryption</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSignType">origin_auth_sign_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA">MediaServicesStreamCdnConfigConfigA</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `edge_hostname_input`<sup>Optional</sup> <a name="edge_hostname_input" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgeHostnameInput"></a>

```python
edge_hostname_input: str
```

- *Type:* str

---

##### `edge_path_prefix_input`<sup>Optional</sup> <a name="edge_path_prefix_input" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgePathPrefixInput"></a>

```python
edge_path_prefix_input: str
```

- *Type:* str

---

##### `edge_token_key_input`<sup>Optional</sup> <a name="edge_token_key_input" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgeTokenKeyInput"></a>

```python
edge_token_key_input: str
```

- *Type:* str

---

##### `edge_token_salt_input`<sup>Optional</sup> <a name="edge_token_salt_input" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgeTokenSaltInput"></a>

```python
edge_token_salt_input: str
```

- *Type:* str

---

##### `is_edge_token_auth_input`<sup>Optional</sup> <a name="is_edge_token_auth_input" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.isEdgeTokenAuthInput"></a>

```python
is_edge_token_auth_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `origin_auth_secret_key_a_input`<sup>Optional</sup> <a name="origin_auth_secret_key_a_input" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyAInput"></a>

```python
origin_auth_secret_key_a_input: str
```

- *Type:* str

---

##### `origin_auth_secret_key_b_input`<sup>Optional</sup> <a name="origin_auth_secret_key_b_input" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyBInput"></a>

```python
origin_auth_secret_key_b_input: str
```

- *Type:* str

---

##### `origin_auth_secret_key_nonce_a_input`<sup>Optional</sup> <a name="origin_auth_secret_key_nonce_a_input" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyNonceAInput"></a>

```python
origin_auth_secret_key_nonce_a_input: str
```

- *Type:* str

---

##### `origin_auth_secret_key_nonce_b_input`<sup>Optional</sup> <a name="origin_auth_secret_key_nonce_b_input" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyNonceBInput"></a>

```python
origin_auth_secret_key_nonce_b_input: str
```

- *Type:* str

---

##### `origin_auth_sign_encryption_input`<sup>Optional</sup> <a name="origin_auth_sign_encryption_input" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSignEncryptionInput"></a>

```python
origin_auth_sign_encryption_input: str
```

- *Type:* str

---

##### `origin_auth_sign_type_input`<sup>Optional</sup> <a name="origin_auth_sign_type_input" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSignTypeInput"></a>

```python
origin_auth_sign_type_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `edge_hostname`<sup>Required</sup> <a name="edge_hostname" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgeHostname"></a>

```python
edge_hostname: str
```

- *Type:* str

---

##### `edge_path_prefix`<sup>Required</sup> <a name="edge_path_prefix" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgePathPrefix"></a>

```python
edge_path_prefix: str
```

- *Type:* str

---

##### `edge_token_key`<sup>Required</sup> <a name="edge_token_key" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgeTokenKey"></a>

```python
edge_token_key: str
```

- *Type:* str

---

##### `edge_token_salt`<sup>Required</sup> <a name="edge_token_salt" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgeTokenSalt"></a>

```python
edge_token_salt: str
```

- *Type:* str

---

##### `is_edge_token_auth`<sup>Required</sup> <a name="is_edge_token_auth" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.isEdgeTokenAuth"></a>

```python
is_edge_token_auth: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `origin_auth_secret_key_a`<sup>Required</sup> <a name="origin_auth_secret_key_a" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyA"></a>

```python
origin_auth_secret_key_a: str
```

- *Type:* str

---

##### `origin_auth_secret_key_b`<sup>Required</sup> <a name="origin_auth_secret_key_b" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyB"></a>

```python
origin_auth_secret_key_b: str
```

- *Type:* str

---

##### `origin_auth_secret_key_nonce_a`<sup>Required</sup> <a name="origin_auth_secret_key_nonce_a" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyNonceA"></a>

```python
origin_auth_secret_key_nonce_a: str
```

- *Type:* str

---

##### `origin_auth_secret_key_nonce_b`<sup>Required</sup> <a name="origin_auth_secret_key_nonce_b" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyNonceB"></a>

```python
origin_auth_secret_key_nonce_b: str
```

- *Type:* str

---

##### `origin_auth_sign_encryption`<sup>Required</sup> <a name="origin_auth_sign_encryption" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSignEncryption"></a>

```python
origin_auth_sign_encryption: str
```

- *Type:* str

---

##### `origin_auth_sign_type`<sup>Required</sup> <a name="origin_auth_sign_type" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSignType"></a>

```python
origin_auth_sign_type: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.internalValue"></a>

```python
internal_value: MediaServicesStreamCdnConfigConfigA
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA">MediaServicesStreamCdnConfigConfigA</a>

---


### MediaServicesStreamCdnConfigLocksList <a name="MediaServicesStreamCdnConfigLocksList" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import media_services_stream_cdn_config

mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MediaServicesStreamCdnConfigLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks">MediaServicesStreamCdnConfigLocks</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MediaServicesStreamCdnConfigLocks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks">MediaServicesStreamCdnConfigLocks</a>]]

---


### MediaServicesStreamCdnConfigLocksOutputReference <a name="MediaServicesStreamCdnConfigLocksOutputReference" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import media_services_stream_cdn_config

mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.resetMessage">reset_message</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.resetRelatedResourceId">reset_related_resource_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.resetTimeCreated">reset_time_created</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_message` <a name="reset_message" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.resetMessage"></a>

```python
def reset_message() -> None
```

##### `reset_related_resource_id` <a name="reset_related_resource_id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.resetRelatedResourceId"></a>

```python
def reset_related_resource_id() -> None
```

##### `reset_time_created` <a name="reset_time_created" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.resetTimeCreated"></a>

```python
def reset_time_created() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.messageInput">message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.relatedResourceIdInput">related_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.timeCreatedInput">time_created_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.relatedResourceId">related_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks">MediaServicesStreamCdnConfigLocks</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `message_input`<sup>Optional</sup> <a name="message_input" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.messageInput"></a>

```python
message_input: str
```

- *Type:* str

---

##### `related_resource_id_input`<sup>Optional</sup> <a name="related_resource_id_input" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.relatedResourceIdInput"></a>

```python
related_resource_id_input: str
```

- *Type:* str

---

##### `time_created_input`<sup>Optional</sup> <a name="time_created_input" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.timeCreatedInput"></a>

```python
time_created_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `related_resource_id`<sup>Required</sup> <a name="related_resource_id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.relatedResourceId"></a>

```python
related_resource_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MediaServicesStreamCdnConfigLocks]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks">MediaServicesStreamCdnConfigLocks</a>]

---


### MediaServicesStreamCdnConfigTimeoutsOutputReference <a name="MediaServicesStreamCdnConfigTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import media_services_stream_cdn_config

mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts">MediaServicesStreamCdnConfigTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MediaServicesStreamCdnConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts">MediaServicesStreamCdnConfigTimeouts</a>]

---



