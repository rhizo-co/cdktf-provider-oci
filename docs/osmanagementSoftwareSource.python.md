# `osmanagementSoftwareSource` Submodule <a name="`osmanagementSoftwareSource` Submodule" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsmanagementSoftwareSource <a name="OsmanagementSoftwareSource" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source oci_osmanagement_software_source}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osmanagement_software_source

osmanagementSoftwareSource.OsmanagementSoftwareSource(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  arch_type: str,
  compartment_id: str,
  display_name: str,
  checksum_type: str = None,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  maintainer_email: str = None,
  maintainer_name: str = None,
  maintainer_phone: str = None,
  parent_id: str = None,
  timeouts: OsmanagementSoftwareSourceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.Initializer.parameter.archType">arch_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#arch_type OsmanagementSoftwareSource#arch_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#compartment_id OsmanagementSoftwareSource#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#display_name OsmanagementSoftwareSource#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.Initializer.parameter.checksumType">checksum_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#checksum_type OsmanagementSoftwareSource#checksum_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#defined_tags OsmanagementSoftwareSource#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#description OsmanagementSoftwareSource#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#freeform_tags OsmanagementSoftwareSource#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#id OsmanagementSoftwareSource#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.Initializer.parameter.maintainerEmail">maintainer_email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#maintainer_email OsmanagementSoftwareSource#maintainer_email}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.Initializer.parameter.maintainerName">maintainer_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#maintainer_name OsmanagementSoftwareSource#maintainer_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.Initializer.parameter.maintainerPhone">maintainer_phone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#maintainer_phone OsmanagementSoftwareSource#maintainer_phone}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.Initializer.parameter.parentId">parent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#parent_id OsmanagementSoftwareSource#parent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeouts">OsmanagementSoftwareSourceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arch_type`<sup>Required</sup> <a name="arch_type" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.Initializer.parameter.archType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#arch_type OsmanagementSoftwareSource#arch_type}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#compartment_id OsmanagementSoftwareSource#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#display_name OsmanagementSoftwareSource#display_name}.

---

##### `checksum_type`<sup>Optional</sup> <a name="checksum_type" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.Initializer.parameter.checksumType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#checksum_type OsmanagementSoftwareSource#checksum_type}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#defined_tags OsmanagementSoftwareSource#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#description OsmanagementSoftwareSource#description}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#freeform_tags OsmanagementSoftwareSource#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#id OsmanagementSoftwareSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintainer_email`<sup>Optional</sup> <a name="maintainer_email" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.Initializer.parameter.maintainerEmail"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#maintainer_email OsmanagementSoftwareSource#maintainer_email}.

---

##### `maintainer_name`<sup>Optional</sup> <a name="maintainer_name" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.Initializer.parameter.maintainerName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#maintainer_name OsmanagementSoftwareSource#maintainer_name}.

---

##### `maintainer_phone`<sup>Optional</sup> <a name="maintainer_phone" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.Initializer.parameter.maintainerPhone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#maintainer_phone OsmanagementSoftwareSource#maintainer_phone}.

---

##### `parent_id`<sup>Optional</sup> <a name="parent_id" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.Initializer.parameter.parentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#parent_id OsmanagementSoftwareSource#parent_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeouts">OsmanagementSoftwareSourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#timeouts OsmanagementSoftwareSource#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.resetChecksumType">reset_checksum_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.resetMaintainerEmail">reset_maintainer_email</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.resetMaintainerName">reset_maintainer_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.resetMaintainerPhone">reset_maintainer_phone</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.resetParentId">reset_parent_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#create OsmanagementSoftwareSource#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#delete OsmanagementSoftwareSource#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#update OsmanagementSoftwareSource#update}.

---

##### `reset_checksum_type` <a name="reset_checksum_type" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.resetChecksumType"></a>

```python
def reset_checksum_type() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_maintainer_email` <a name="reset_maintainer_email" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.resetMaintainerEmail"></a>

```python
def reset_maintainer_email() -> None
```

##### `reset_maintainer_name` <a name="reset_maintainer_name" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.resetMaintainerName"></a>

```python
def reset_maintainer_name() -> None
```

##### `reset_maintainer_phone` <a name="reset_maintainer_phone" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.resetMaintainerPhone"></a>

```python
def reset_maintainer_phone() -> None
```

##### `reset_parent_id` <a name="reset_parent_id" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.resetParentId"></a>

```python
def reset_parent_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OsmanagementSoftwareSource resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import osmanagement_software_source

osmanagementSoftwareSource.OsmanagementSoftwareSource.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import osmanagement_software_source

osmanagementSoftwareSource.OsmanagementSoftwareSource.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import osmanagement_software_source

osmanagementSoftwareSource.OsmanagementSoftwareSource.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import osmanagement_software_source

osmanagementSoftwareSource.OsmanagementSoftwareSource.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OsmanagementSoftwareSource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OsmanagementSoftwareSource to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OsmanagementSoftwareSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OsmanagementSoftwareSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.associatedManagedInstances">associated_managed_instances</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList">OsmanagementSoftwareSourceAssociatedManagedInstancesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.gpgKeyFingerprint">gpg_key_fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.gpgKeyId">gpg_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.gpgKeyUrl">gpg_key_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.packages">packages</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.parentName">parent_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.repoType">repo_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference">OsmanagementSoftwareSourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.archTypeInput">arch_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.checksumTypeInput">checksum_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.maintainerEmailInput">maintainer_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.maintainerNameInput">maintainer_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.maintainerPhoneInput">maintainer_phone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.parentIdInput">parent_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeouts">OsmanagementSoftwareSourceTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.archType">arch_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.checksumType">checksum_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.maintainerEmail">maintainer_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.maintainerName">maintainer_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.maintainerPhone">maintainer_phone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.parentId">parent_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `associated_managed_instances`<sup>Required</sup> <a name="associated_managed_instances" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.associatedManagedInstances"></a>

```python
associated_managed_instances: OsmanagementSoftwareSourceAssociatedManagedInstancesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList">OsmanagementSoftwareSourceAssociatedManagedInstancesList</a>

---

##### `gpg_key_fingerprint`<sup>Required</sup> <a name="gpg_key_fingerprint" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.gpgKeyFingerprint"></a>

```python
gpg_key_fingerprint: str
```

- *Type:* str

---

##### `gpg_key_id`<sup>Required</sup> <a name="gpg_key_id" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.gpgKeyId"></a>

```python
gpg_key_id: str
```

- *Type:* str

---

##### `gpg_key_url`<sup>Required</sup> <a name="gpg_key_url" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.gpgKeyUrl"></a>

```python
gpg_key_url: str
```

- *Type:* str

---

##### `packages`<sup>Required</sup> <a name="packages" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.packages"></a>

```python
packages: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `parent_name`<sup>Required</sup> <a name="parent_name" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.parentName"></a>

```python
parent_name: str
```

- *Type:* str

---

##### `repo_type`<sup>Required</sup> <a name="repo_type" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.repoType"></a>

```python
repo_type: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.timeouts"></a>

```python
timeouts: OsmanagementSoftwareSourceTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference">OsmanagementSoftwareSourceTimeoutsOutputReference</a>

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `arch_type_input`<sup>Optional</sup> <a name="arch_type_input" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.archTypeInput"></a>

```python
arch_type_input: str
```

- *Type:* str

---

##### `checksum_type_input`<sup>Optional</sup> <a name="checksum_type_input" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.checksumTypeInput"></a>

```python
checksum_type_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `maintainer_email_input`<sup>Optional</sup> <a name="maintainer_email_input" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.maintainerEmailInput"></a>

```python
maintainer_email_input: str
```

- *Type:* str

---

##### `maintainer_name_input`<sup>Optional</sup> <a name="maintainer_name_input" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.maintainerNameInput"></a>

```python
maintainer_name_input: str
```

- *Type:* str

---

##### `maintainer_phone_input`<sup>Optional</sup> <a name="maintainer_phone_input" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.maintainerPhoneInput"></a>

```python
maintainer_phone_input: str
```

- *Type:* str

---

##### `parent_id_input`<sup>Optional</sup> <a name="parent_id_input" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.parentIdInput"></a>

```python
parent_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, OsmanagementSoftwareSourceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeouts">OsmanagementSoftwareSourceTimeouts</a>]

---

##### `arch_type`<sup>Required</sup> <a name="arch_type" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.archType"></a>

```python
arch_type: str
```

- *Type:* str

---

##### `checksum_type`<sup>Required</sup> <a name="checksum_type" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.checksumType"></a>

```python
checksum_type: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `maintainer_email`<sup>Required</sup> <a name="maintainer_email" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.maintainerEmail"></a>

```python
maintainer_email: str
```

- *Type:* str

---

##### `maintainer_name`<sup>Required</sup> <a name="maintainer_name" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.maintainerName"></a>

```python
maintainer_name: str
```

- *Type:* str

---

##### `maintainer_phone`<sup>Required</sup> <a name="maintainer_phone" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.maintainerPhone"></a>

```python
maintainer_phone: str
```

- *Type:* str

---

##### `parent_id`<sup>Required</sup> <a name="parent_id" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.parentId"></a>

```python
parent_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSource.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OsmanagementSoftwareSourceAssociatedManagedInstances <a name="OsmanagementSoftwareSourceAssociatedManagedInstances" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstances"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstances.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osmanagement_software_source

osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstances()
```


### OsmanagementSoftwareSourceConfig <a name="OsmanagementSoftwareSourceConfig" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osmanagement_software_source

osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  arch_type: str,
  compartment_id: str,
  display_name: str,
  checksum_type: str = None,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  maintainer_email: str = None,
  maintainer_name: str = None,
  maintainer_phone: str = None,
  parent_id: str = None,
  timeouts: OsmanagementSoftwareSourceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.archType">arch_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#arch_type OsmanagementSoftwareSource#arch_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#compartment_id OsmanagementSoftwareSource#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#display_name OsmanagementSoftwareSource#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.checksumType">checksum_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#checksum_type OsmanagementSoftwareSource#checksum_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#defined_tags OsmanagementSoftwareSource#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#description OsmanagementSoftwareSource#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#freeform_tags OsmanagementSoftwareSource#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#id OsmanagementSoftwareSource#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.maintainerEmail">maintainer_email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#maintainer_email OsmanagementSoftwareSource#maintainer_email}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.maintainerName">maintainer_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#maintainer_name OsmanagementSoftwareSource#maintainer_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.maintainerPhone">maintainer_phone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#maintainer_phone OsmanagementSoftwareSource#maintainer_phone}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.parentId">parent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#parent_id OsmanagementSoftwareSource#parent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeouts">OsmanagementSoftwareSourceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arch_type`<sup>Required</sup> <a name="arch_type" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.archType"></a>

```python
arch_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#arch_type OsmanagementSoftwareSource#arch_type}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#compartment_id OsmanagementSoftwareSource#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#display_name OsmanagementSoftwareSource#display_name}.

---

##### `checksum_type`<sup>Optional</sup> <a name="checksum_type" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.checksumType"></a>

```python
checksum_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#checksum_type OsmanagementSoftwareSource#checksum_type}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#defined_tags OsmanagementSoftwareSource#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#description OsmanagementSoftwareSource#description}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#freeform_tags OsmanagementSoftwareSource#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#id OsmanagementSoftwareSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintainer_email`<sup>Optional</sup> <a name="maintainer_email" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.maintainerEmail"></a>

```python
maintainer_email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#maintainer_email OsmanagementSoftwareSource#maintainer_email}.

---

##### `maintainer_name`<sup>Optional</sup> <a name="maintainer_name" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.maintainerName"></a>

```python
maintainer_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#maintainer_name OsmanagementSoftwareSource#maintainer_name}.

---

##### `maintainer_phone`<sup>Optional</sup> <a name="maintainer_phone" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.maintainerPhone"></a>

```python
maintainer_phone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#maintainer_phone OsmanagementSoftwareSource#maintainer_phone}.

---

##### `parent_id`<sup>Optional</sup> <a name="parent_id" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.parentId"></a>

```python
parent_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#parent_id OsmanagementSoftwareSource#parent_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceConfig.property.timeouts"></a>

```python
timeouts: OsmanagementSoftwareSourceTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeouts">OsmanagementSoftwareSourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#timeouts OsmanagementSoftwareSource#timeouts}

---

### OsmanagementSoftwareSourceTimeouts <a name="OsmanagementSoftwareSourceTimeouts" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osmanagement_software_source

osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#create OsmanagementSoftwareSource#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#delete OsmanagementSoftwareSource#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#update OsmanagementSoftwareSource#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#create OsmanagementSoftwareSource#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#delete OsmanagementSoftwareSource#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_software_source#update OsmanagementSoftwareSource#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsmanagementSoftwareSourceAssociatedManagedInstancesList <a name="OsmanagementSoftwareSourceAssociatedManagedInstancesList" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osmanagement_software_source

osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference <a name="OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osmanagement_software_source

osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstances">OsmanagementSoftwareSourceAssociatedManagedInstances</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstancesOutputReference.property.internalValue"></a>

```python
internal_value: OsmanagementSoftwareSourceAssociatedManagedInstances
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceAssociatedManagedInstances">OsmanagementSoftwareSourceAssociatedManagedInstances</a>

---


### OsmanagementSoftwareSourceTimeoutsOutputReference <a name="OsmanagementSoftwareSourceTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osmanagement_software_source

osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeouts">OsmanagementSoftwareSourceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OsmanagementSoftwareSourceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osmanagementSoftwareSource.OsmanagementSoftwareSourceTimeouts">OsmanagementSoftwareSourceTimeouts</a>]

---



