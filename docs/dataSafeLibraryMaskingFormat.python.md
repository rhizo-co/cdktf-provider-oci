# `dataSafeLibraryMaskingFormat` Submodule <a name="`dataSafeLibraryMaskingFormat` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeLibraryMaskingFormat <a name="DataSafeLibraryMaskingFormat" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format oci_data_safe_library_masking_format}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_library_masking_format

dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat(
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
  format_entries: typing.Union[IResolvable, typing.List[DataSafeLibraryMaskingFormatFormatEntries]],
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  sensitive_type_ids: typing.List[str] = None,
  timeouts: DataSafeLibraryMaskingFormatTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#compartment_id DataSafeLibraryMaskingFormat#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.formatEntries">format_entries</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries">DataSafeLibraryMaskingFormatFormatEntries</a>]]</code> | format_entries block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#defined_tags DataSafeLibraryMaskingFormat#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#description DataSafeLibraryMaskingFormat#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#display_name DataSafeLibraryMaskingFormat#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#freeform_tags DataSafeLibraryMaskingFormat#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#id DataSafeLibraryMaskingFormat#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.sensitiveTypeIds">sensitive_type_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#sensitive_type_ids DataSafeLibraryMaskingFormat#sensitive_type_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts">DataSafeLibraryMaskingFormatTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#compartment_id DataSafeLibraryMaskingFormat#compartment_id}.

---

##### `format_entries`<sup>Required</sup> <a name="format_entries" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.formatEntries"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries">DataSafeLibraryMaskingFormatFormatEntries</a>]]

format_entries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#format_entries DataSafeLibraryMaskingFormat#format_entries}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#defined_tags DataSafeLibraryMaskingFormat#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#description DataSafeLibraryMaskingFormat#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#display_name DataSafeLibraryMaskingFormat#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#freeform_tags DataSafeLibraryMaskingFormat#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#id DataSafeLibraryMaskingFormat#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sensitive_type_ids`<sup>Optional</sup> <a name="sensitive_type_ids" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.sensitiveTypeIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#sensitive_type_ids DataSafeLibraryMaskingFormat#sensitive_type_ids}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts">DataSafeLibraryMaskingFormatTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#timeouts DataSafeLibraryMaskingFormat#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.putFormatEntries">put_format_entries</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetSensitiveTypeIds">reset_sensitive_type_ids</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_format_entries` <a name="put_format_entries" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.putFormatEntries"></a>

```python
def put_format_entries(
  value: typing.Union[IResolvable, typing.List[DataSafeLibraryMaskingFormatFormatEntries]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.putFormatEntries.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries">DataSafeLibraryMaskingFormatFormatEntries</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#create DataSafeLibraryMaskingFormat#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#delete DataSafeLibraryMaskingFormat#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#update DataSafeLibraryMaskingFormat#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_sensitive_type_ids` <a name="reset_sensitive_type_ids" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetSensitiveTypeIds"></a>

```python
def reset_sensitive_type_ids() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataSafeLibraryMaskingFormat resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_library_masking_format

dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_library_masking_format

dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_library_masking_format

dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_library_masking_format

dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataSafeLibraryMaskingFormat resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataSafeLibraryMaskingFormat to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataSafeLibraryMaskingFormat that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeLibraryMaskingFormat to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.formatEntries">format_entries</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList">DataSafeLibraryMaskingFormatFormatEntriesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference">DataSafeLibraryMaskingFormatTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.formatEntriesInput">format_entries_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries">DataSafeLibraryMaskingFormatFormatEntries</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.sensitiveTypeIdsInput">sensitive_type_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts">DataSafeLibraryMaskingFormatTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.sensitiveTypeIds">sensitive_type_ids</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `format_entries`<sup>Required</sup> <a name="format_entries" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.formatEntries"></a>

```python
format_entries: DataSafeLibraryMaskingFormatFormatEntriesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList">DataSafeLibraryMaskingFormatFormatEntriesList</a>

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.timeouts"></a>

```python
timeouts: DataSafeLibraryMaskingFormatTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference">DataSafeLibraryMaskingFormatTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `format_entries_input`<sup>Optional</sup> <a name="format_entries_input" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.formatEntriesInput"></a>

```python
format_entries_input: typing.Union[IResolvable, typing.List[DataSafeLibraryMaskingFormatFormatEntries]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries">DataSafeLibraryMaskingFormatFormatEntries</a>]]

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `sensitive_type_ids_input`<sup>Optional</sup> <a name="sensitive_type_ids_input" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.sensitiveTypeIdsInput"></a>

```python
sensitive_type_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataSafeLibraryMaskingFormatTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts">DataSafeLibraryMaskingFormatTimeouts</a>]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `sensitive_type_ids`<sup>Required</sup> <a name="sensitive_type_ids" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.sensitiveTypeIds"></a>

```python
sensitive_type_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeLibraryMaskingFormatConfig <a name="DataSafeLibraryMaskingFormatConfig" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_library_masking_format

dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  format_entries: typing.Union[IResolvable, typing.List[DataSafeLibraryMaskingFormatFormatEntries]],
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  sensitive_type_ids: typing.List[str] = None,
  timeouts: DataSafeLibraryMaskingFormatTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#compartment_id DataSafeLibraryMaskingFormat#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.formatEntries">format_entries</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries">DataSafeLibraryMaskingFormatFormatEntries</a>]]</code> | format_entries block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#defined_tags DataSafeLibraryMaskingFormat#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#description DataSafeLibraryMaskingFormat#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#display_name DataSafeLibraryMaskingFormat#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#freeform_tags DataSafeLibraryMaskingFormat#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#id DataSafeLibraryMaskingFormat#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.sensitiveTypeIds">sensitive_type_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#sensitive_type_ids DataSafeLibraryMaskingFormat#sensitive_type_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts">DataSafeLibraryMaskingFormatTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#compartment_id DataSafeLibraryMaskingFormat#compartment_id}.

---

##### `format_entries`<sup>Required</sup> <a name="format_entries" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.formatEntries"></a>

```python
format_entries: typing.Union[IResolvable, typing.List[DataSafeLibraryMaskingFormatFormatEntries]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries">DataSafeLibraryMaskingFormatFormatEntries</a>]]

format_entries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#format_entries DataSafeLibraryMaskingFormat#format_entries}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#defined_tags DataSafeLibraryMaskingFormat#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#description DataSafeLibraryMaskingFormat#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#display_name DataSafeLibraryMaskingFormat#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#freeform_tags DataSafeLibraryMaskingFormat#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#id DataSafeLibraryMaskingFormat#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sensitive_type_ids`<sup>Optional</sup> <a name="sensitive_type_ids" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.sensitiveTypeIds"></a>

```python
sensitive_type_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#sensitive_type_ids DataSafeLibraryMaskingFormat#sensitive_type_ids}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.timeouts"></a>

```python
timeouts: DataSafeLibraryMaskingFormatTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts">DataSafeLibraryMaskingFormatTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#timeouts DataSafeLibraryMaskingFormat#timeouts}

---

### DataSafeLibraryMaskingFormatFormatEntries <a name="DataSafeLibraryMaskingFormatFormatEntries" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_library_masking_format

dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries(
  type: str,
  column_name: str = None,
  description: str = None,
  end_date: str = None,
  end_length: typing.Union[int, float] = None,
  end_value: typing.Union[int, float] = None,
  fixed_number: typing.Union[int, float] = None,
  fixed_string: str = None,
  grouping_columns: typing.List[str] = None,
  length: typing.Union[int, float] = None,
  library_masking_format_id: str = None,
  pattern: str = None,
  post_processing_function: str = None,
  random_list: typing.List[str] = None,
  regular_expression: str = None,
  replace_with: str = None,
  schema_name: str = None,
  sql_expression: str = None,
  start_date: str = None,
  start_length: typing.Union[int, float] = None,
  start_position: typing.Union[int, float] = None,
  start_value: typing.Union[int, float] = None,
  table_name: str = None,
  user_defined_function: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#type DataSafeLibraryMaskingFormat#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.columnName">column_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#column_name DataSafeLibraryMaskingFormat#column_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#description DataSafeLibraryMaskingFormat#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.endDate">end_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#end_date DataSafeLibraryMaskingFormat#end_date}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.endLength">end_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#end_length DataSafeLibraryMaskingFormat#end_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.endValue">end_value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#end_value DataSafeLibraryMaskingFormat#end_value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.fixedNumber">fixed_number</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#fixed_number DataSafeLibraryMaskingFormat#fixed_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.fixedString">fixed_string</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#fixed_string DataSafeLibraryMaskingFormat#fixed_string}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.groupingColumns">grouping_columns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#grouping_columns DataSafeLibraryMaskingFormat#grouping_columns}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.length">length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#length DataSafeLibraryMaskingFormat#length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.libraryMaskingFormatId">library_masking_format_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#library_masking_format_id DataSafeLibraryMaskingFormat#library_masking_format_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.pattern">pattern</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#pattern DataSafeLibraryMaskingFormat#pattern}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.postProcessingFunction">post_processing_function</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#post_processing_function DataSafeLibraryMaskingFormat#post_processing_function}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.randomList">random_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#random_list DataSafeLibraryMaskingFormat#random_list}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.regularExpression">regular_expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#regular_expression DataSafeLibraryMaskingFormat#regular_expression}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.replaceWith">replace_with</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#replace_with DataSafeLibraryMaskingFormat#replace_with}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.schemaName">schema_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#schema_name DataSafeLibraryMaskingFormat#schema_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.sqlExpression">sql_expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#sql_expression DataSafeLibraryMaskingFormat#sql_expression}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.startDate">start_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#start_date DataSafeLibraryMaskingFormat#start_date}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.startLength">start_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#start_length DataSafeLibraryMaskingFormat#start_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.startPosition">start_position</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#start_position DataSafeLibraryMaskingFormat#start_position}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.startValue">start_value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#start_value DataSafeLibraryMaskingFormat#start_value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.tableName">table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#table_name DataSafeLibraryMaskingFormat#table_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.userDefinedFunction">user_defined_function</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#user_defined_function DataSafeLibraryMaskingFormat#user_defined_function}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#type DataSafeLibraryMaskingFormat#type}.

---

##### `column_name`<sup>Optional</sup> <a name="column_name" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.columnName"></a>

```python
column_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#column_name DataSafeLibraryMaskingFormat#column_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#description DataSafeLibraryMaskingFormat#description}.

---

##### `end_date`<sup>Optional</sup> <a name="end_date" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.endDate"></a>

```python
end_date: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#end_date DataSafeLibraryMaskingFormat#end_date}.

---

##### `end_length`<sup>Optional</sup> <a name="end_length" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.endLength"></a>

```python
end_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#end_length DataSafeLibraryMaskingFormat#end_length}.

---

##### `end_value`<sup>Optional</sup> <a name="end_value" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.endValue"></a>

```python
end_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#end_value DataSafeLibraryMaskingFormat#end_value}.

---

##### `fixed_number`<sup>Optional</sup> <a name="fixed_number" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.fixedNumber"></a>

```python
fixed_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#fixed_number DataSafeLibraryMaskingFormat#fixed_number}.

---

##### `fixed_string`<sup>Optional</sup> <a name="fixed_string" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.fixedString"></a>

```python
fixed_string: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#fixed_string DataSafeLibraryMaskingFormat#fixed_string}.

---

##### `grouping_columns`<sup>Optional</sup> <a name="grouping_columns" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.groupingColumns"></a>

```python
grouping_columns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#grouping_columns DataSafeLibraryMaskingFormat#grouping_columns}.

---

##### `length`<sup>Optional</sup> <a name="length" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.length"></a>

```python
length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#length DataSafeLibraryMaskingFormat#length}.

---

##### `library_masking_format_id`<sup>Optional</sup> <a name="library_masking_format_id" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.libraryMaskingFormatId"></a>

```python
library_masking_format_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#library_masking_format_id DataSafeLibraryMaskingFormat#library_masking_format_id}.

---

##### `pattern`<sup>Optional</sup> <a name="pattern" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#pattern DataSafeLibraryMaskingFormat#pattern}.

---

##### `post_processing_function`<sup>Optional</sup> <a name="post_processing_function" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.postProcessingFunction"></a>

```python
post_processing_function: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#post_processing_function DataSafeLibraryMaskingFormat#post_processing_function}.

---

##### `random_list`<sup>Optional</sup> <a name="random_list" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.randomList"></a>

```python
random_list: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#random_list DataSafeLibraryMaskingFormat#random_list}.

---

##### `regular_expression`<sup>Optional</sup> <a name="regular_expression" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.regularExpression"></a>

```python
regular_expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#regular_expression DataSafeLibraryMaskingFormat#regular_expression}.

---

##### `replace_with`<sup>Optional</sup> <a name="replace_with" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.replaceWith"></a>

```python
replace_with: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#replace_with DataSafeLibraryMaskingFormat#replace_with}.

---

##### `schema_name`<sup>Optional</sup> <a name="schema_name" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#schema_name DataSafeLibraryMaskingFormat#schema_name}.

---

##### `sql_expression`<sup>Optional</sup> <a name="sql_expression" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.sqlExpression"></a>

```python
sql_expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#sql_expression DataSafeLibraryMaskingFormat#sql_expression}.

---

##### `start_date`<sup>Optional</sup> <a name="start_date" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.startDate"></a>

```python
start_date: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#start_date DataSafeLibraryMaskingFormat#start_date}.

---

##### `start_length`<sup>Optional</sup> <a name="start_length" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.startLength"></a>

```python
start_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#start_length DataSafeLibraryMaskingFormat#start_length}.

---

##### `start_position`<sup>Optional</sup> <a name="start_position" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.startPosition"></a>

```python
start_position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#start_position DataSafeLibraryMaskingFormat#start_position}.

---

##### `start_value`<sup>Optional</sup> <a name="start_value" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.startValue"></a>

```python
start_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#start_value DataSafeLibraryMaskingFormat#start_value}.

---

##### `table_name`<sup>Optional</sup> <a name="table_name" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#table_name DataSafeLibraryMaskingFormat#table_name}.

---

##### `user_defined_function`<sup>Optional</sup> <a name="user_defined_function" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.userDefinedFunction"></a>

```python
user_defined_function: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#user_defined_function DataSafeLibraryMaskingFormat#user_defined_function}.

---

### DataSafeLibraryMaskingFormatTimeouts <a name="DataSafeLibraryMaskingFormatTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_library_masking_format

dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#create DataSafeLibraryMaskingFormat#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#delete DataSafeLibraryMaskingFormat#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#update DataSafeLibraryMaskingFormat#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#create DataSafeLibraryMaskingFormat#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#delete DataSafeLibraryMaskingFormat#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#update DataSafeLibraryMaskingFormat#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeLibraryMaskingFormatFormatEntriesList <a name="DataSafeLibraryMaskingFormatFormatEntriesList" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_library_masking_format

dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSafeLibraryMaskingFormatFormatEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries">DataSafeLibraryMaskingFormatFormatEntries</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataSafeLibraryMaskingFormatFormatEntries]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries">DataSafeLibraryMaskingFormatFormatEntries</a>]]

---


### DataSafeLibraryMaskingFormatFormatEntriesOutputReference <a name="DataSafeLibraryMaskingFormatFormatEntriesOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_library_masking_format

dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetColumnName">reset_column_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetEndDate">reset_end_date</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetEndLength">reset_end_length</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetEndValue">reset_end_value</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetFixedNumber">reset_fixed_number</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetFixedString">reset_fixed_string</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetGroupingColumns">reset_grouping_columns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetLength">reset_length</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetLibraryMaskingFormatId">reset_library_masking_format_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetPattern">reset_pattern</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetPostProcessingFunction">reset_post_processing_function</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetRandomList">reset_random_list</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetRegularExpression">reset_regular_expression</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetReplaceWith">reset_replace_with</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetSchemaName">reset_schema_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetSqlExpression">reset_sql_expression</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetStartDate">reset_start_date</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetStartLength">reset_start_length</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetStartPosition">reset_start_position</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetStartValue">reset_start_value</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetTableName">reset_table_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetUserDefinedFunction">reset_user_defined_function</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_column_name` <a name="reset_column_name" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetColumnName"></a>

```python
def reset_column_name() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_end_date` <a name="reset_end_date" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetEndDate"></a>

```python
def reset_end_date() -> None
```

##### `reset_end_length` <a name="reset_end_length" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetEndLength"></a>

```python
def reset_end_length() -> None
```

##### `reset_end_value` <a name="reset_end_value" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetEndValue"></a>

```python
def reset_end_value() -> None
```

##### `reset_fixed_number` <a name="reset_fixed_number" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetFixedNumber"></a>

```python
def reset_fixed_number() -> None
```

##### `reset_fixed_string` <a name="reset_fixed_string" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetFixedString"></a>

```python
def reset_fixed_string() -> None
```

##### `reset_grouping_columns` <a name="reset_grouping_columns" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetGroupingColumns"></a>

```python
def reset_grouping_columns() -> None
```

##### `reset_length` <a name="reset_length" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetLength"></a>

```python
def reset_length() -> None
```

##### `reset_library_masking_format_id` <a name="reset_library_masking_format_id" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetLibraryMaskingFormatId"></a>

```python
def reset_library_masking_format_id() -> None
```

##### `reset_pattern` <a name="reset_pattern" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetPattern"></a>

```python
def reset_pattern() -> None
```

##### `reset_post_processing_function` <a name="reset_post_processing_function" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetPostProcessingFunction"></a>

```python
def reset_post_processing_function() -> None
```

##### `reset_random_list` <a name="reset_random_list" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetRandomList"></a>

```python
def reset_random_list() -> None
```

##### `reset_regular_expression` <a name="reset_regular_expression" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetRegularExpression"></a>

```python
def reset_regular_expression() -> None
```

##### `reset_replace_with` <a name="reset_replace_with" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetReplaceWith"></a>

```python
def reset_replace_with() -> None
```

##### `reset_schema_name` <a name="reset_schema_name" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetSchemaName"></a>

```python
def reset_schema_name() -> None
```

##### `reset_sql_expression` <a name="reset_sql_expression" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetSqlExpression"></a>

```python
def reset_sql_expression() -> None
```

##### `reset_start_date` <a name="reset_start_date" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetStartDate"></a>

```python
def reset_start_date() -> None
```

##### `reset_start_length` <a name="reset_start_length" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetStartLength"></a>

```python
def reset_start_length() -> None
```

##### `reset_start_position` <a name="reset_start_position" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetStartPosition"></a>

```python
def reset_start_position() -> None
```

##### `reset_start_value` <a name="reset_start_value" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetStartValue"></a>

```python
def reset_start_value() -> None
```

##### `reset_table_name` <a name="reset_table_name" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetTableName"></a>

```python
def reset_table_name() -> None
```

##### `reset_user_defined_function` <a name="reset_user_defined_function" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetUserDefinedFunction"></a>

```python
def reset_user_defined_function() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.columnNameInput">column_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endDateInput">end_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endLengthInput">end_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endValueInput">end_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fixedNumberInput">fixed_number_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fixedStringInput">fixed_string_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.groupingColumnsInput">grouping_columns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.lengthInput">length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.libraryMaskingFormatIdInput">library_masking_format_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.patternInput">pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.postProcessingFunctionInput">post_processing_function_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.randomListInput">random_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.regularExpressionInput">regular_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.replaceWithInput">replace_with_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.schemaNameInput">schema_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.sqlExpressionInput">sql_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startDateInput">start_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startLengthInput">start_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startPositionInput">start_position_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startValueInput">start_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.userDefinedFunctionInput">user_defined_function_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.columnName">column_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endDate">end_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endLength">end_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endValue">end_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fixedNumber">fixed_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fixedString">fixed_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.groupingColumns">grouping_columns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.length">length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.libraryMaskingFormatId">library_masking_format_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.pattern">pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.postProcessingFunction">post_processing_function</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.randomList">random_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.regularExpression">regular_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.replaceWith">replace_with</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.sqlExpression">sql_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startDate">start_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startLength">start_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startPosition">start_position</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startValue">start_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.userDefinedFunction">user_defined_function</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries">DataSafeLibraryMaskingFormatFormatEntries</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_name_input`<sup>Optional</sup> <a name="column_name_input" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.columnNameInput"></a>

```python
column_name_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `end_date_input`<sup>Optional</sup> <a name="end_date_input" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endDateInput"></a>

```python
end_date_input: str
```

- *Type:* str

---

##### `end_length_input`<sup>Optional</sup> <a name="end_length_input" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endLengthInput"></a>

```python
end_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `end_value_input`<sup>Optional</sup> <a name="end_value_input" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endValueInput"></a>

```python
end_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fixed_number_input`<sup>Optional</sup> <a name="fixed_number_input" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fixedNumberInput"></a>

```python
fixed_number_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fixed_string_input`<sup>Optional</sup> <a name="fixed_string_input" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fixedStringInput"></a>

```python
fixed_string_input: str
```

- *Type:* str

---

##### `grouping_columns_input`<sup>Optional</sup> <a name="grouping_columns_input" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.groupingColumnsInput"></a>

```python
grouping_columns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `length_input`<sup>Optional</sup> <a name="length_input" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.lengthInput"></a>

```python
length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `library_masking_format_id_input`<sup>Optional</sup> <a name="library_masking_format_id_input" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.libraryMaskingFormatIdInput"></a>

```python
library_masking_format_id_input: str
```

- *Type:* str

---

##### `pattern_input`<sup>Optional</sup> <a name="pattern_input" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.patternInput"></a>

```python
pattern_input: str
```

- *Type:* str

---

##### `post_processing_function_input`<sup>Optional</sup> <a name="post_processing_function_input" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.postProcessingFunctionInput"></a>

```python
post_processing_function_input: str
```

- *Type:* str

---

##### `random_list_input`<sup>Optional</sup> <a name="random_list_input" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.randomListInput"></a>

```python
random_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `regular_expression_input`<sup>Optional</sup> <a name="regular_expression_input" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.regularExpressionInput"></a>

```python
regular_expression_input: str
```

- *Type:* str

---

##### `replace_with_input`<sup>Optional</sup> <a name="replace_with_input" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.replaceWithInput"></a>

```python
replace_with_input: str
```

- *Type:* str

---

##### `schema_name_input`<sup>Optional</sup> <a name="schema_name_input" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.schemaNameInput"></a>

```python
schema_name_input: str
```

- *Type:* str

---

##### `sql_expression_input`<sup>Optional</sup> <a name="sql_expression_input" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.sqlExpressionInput"></a>

```python
sql_expression_input: str
```

- *Type:* str

---

##### `start_date_input`<sup>Optional</sup> <a name="start_date_input" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startDateInput"></a>

```python
start_date_input: str
```

- *Type:* str

---

##### `start_length_input`<sup>Optional</sup> <a name="start_length_input" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startLengthInput"></a>

```python
start_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_position_input`<sup>Optional</sup> <a name="start_position_input" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startPositionInput"></a>

```python
start_position_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_value_input`<sup>Optional</sup> <a name="start_value_input" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startValueInput"></a>

```python
start_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `user_defined_function_input`<sup>Optional</sup> <a name="user_defined_function_input" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.userDefinedFunctionInput"></a>

```python
user_defined_function_input: str
```

- *Type:* str

---

##### `column_name`<sup>Required</sup> <a name="column_name" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.columnName"></a>

```python
column_name: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `end_date`<sup>Required</sup> <a name="end_date" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endDate"></a>

```python
end_date: str
```

- *Type:* str

---

##### `end_length`<sup>Required</sup> <a name="end_length" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endLength"></a>

```python
end_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `end_value`<sup>Required</sup> <a name="end_value" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endValue"></a>

```python
end_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fixed_number`<sup>Required</sup> <a name="fixed_number" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fixedNumber"></a>

```python
fixed_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fixed_string`<sup>Required</sup> <a name="fixed_string" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fixedString"></a>

```python
fixed_string: str
```

- *Type:* str

---

##### `grouping_columns`<sup>Required</sup> <a name="grouping_columns" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.groupingColumns"></a>

```python
grouping_columns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `length`<sup>Required</sup> <a name="length" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.length"></a>

```python
length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `library_masking_format_id`<sup>Required</sup> <a name="library_masking_format_id" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.libraryMaskingFormatId"></a>

```python
library_masking_format_id: str
```

- *Type:* str

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

---

##### `post_processing_function`<sup>Required</sup> <a name="post_processing_function" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.postProcessingFunction"></a>

```python
post_processing_function: str
```

- *Type:* str

---

##### `random_list`<sup>Required</sup> <a name="random_list" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.randomList"></a>

```python
random_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `regular_expression`<sup>Required</sup> <a name="regular_expression" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.regularExpression"></a>

```python
regular_expression: str
```

- *Type:* str

---

##### `replace_with`<sup>Required</sup> <a name="replace_with" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.replaceWith"></a>

```python
replace_with: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `sql_expression`<sup>Required</sup> <a name="sql_expression" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.sqlExpression"></a>

```python
sql_expression: str
```

- *Type:* str

---

##### `start_date`<sup>Required</sup> <a name="start_date" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startDate"></a>

```python
start_date: str
```

- *Type:* str

---

##### `start_length`<sup>Required</sup> <a name="start_length" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startLength"></a>

```python
start_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_position`<sup>Required</sup> <a name="start_position" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startPosition"></a>

```python
start_position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_value`<sup>Required</sup> <a name="start_value" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startValue"></a>

```python
start_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `user_defined_function`<sup>Required</sup> <a name="user_defined_function" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.userDefinedFunction"></a>

```python
user_defined_function: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataSafeLibraryMaskingFormatFormatEntries]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries">DataSafeLibraryMaskingFormatFormatEntries</a>]

---


### DataSafeLibraryMaskingFormatTimeoutsOutputReference <a name="DataSafeLibraryMaskingFormatTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_library_masking_format

dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts">DataSafeLibraryMaskingFormatTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataSafeLibraryMaskingFormatTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts">DataSafeLibraryMaskingFormatTimeouts</a>]

---



