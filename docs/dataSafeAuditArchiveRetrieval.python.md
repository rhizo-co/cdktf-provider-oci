# `dataSafeAuditArchiveRetrieval` Submodule <a name="`dataSafeAuditArchiveRetrieval` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeAuditArchiveRetrieval <a name="DataSafeAuditArchiveRetrieval" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval oci_data_safe_audit_archive_retrieval}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_audit_archive_retrieval

dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval(
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
  end_date: str,
  start_date: str,
  target_id: str,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  timeouts: DataSafeAuditArchiveRetrievalTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#compartment_id DataSafeAuditArchiveRetrieval#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.Initializer.parameter.endDate">end_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#end_date DataSafeAuditArchiveRetrieval#end_date}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.Initializer.parameter.startDate">start_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#start_date DataSafeAuditArchiveRetrieval#start_date}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.Initializer.parameter.targetId">target_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#target_id DataSafeAuditArchiveRetrieval#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#defined_tags DataSafeAuditArchiveRetrieval#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#description DataSafeAuditArchiveRetrieval#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#display_name DataSafeAuditArchiveRetrieval#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#freeform_tags DataSafeAuditArchiveRetrieval#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#id DataSafeAuditArchiveRetrieval#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeouts">DataSafeAuditArchiveRetrievalTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#compartment_id DataSafeAuditArchiveRetrieval#compartment_id}.

---

##### `end_date`<sup>Required</sup> <a name="end_date" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.Initializer.parameter.endDate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#end_date DataSafeAuditArchiveRetrieval#end_date}.

---

##### `start_date`<sup>Required</sup> <a name="start_date" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.Initializer.parameter.startDate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#start_date DataSafeAuditArchiveRetrieval#start_date}.

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.Initializer.parameter.targetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#target_id DataSafeAuditArchiveRetrieval#target_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#defined_tags DataSafeAuditArchiveRetrieval#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#description DataSafeAuditArchiveRetrieval#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#display_name DataSafeAuditArchiveRetrieval#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#freeform_tags DataSafeAuditArchiveRetrieval#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#id DataSafeAuditArchiveRetrieval#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeouts">DataSafeAuditArchiveRetrievalTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#timeouts DataSafeAuditArchiveRetrieval#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#create DataSafeAuditArchiveRetrieval#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#delete DataSafeAuditArchiveRetrieval#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#update DataSafeAuditArchiveRetrieval#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataSafeAuditArchiveRetrieval resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_audit_archive_retrieval

dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_audit_archive_retrieval

dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_audit_archive_retrieval

dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_audit_archive_retrieval

dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataSafeAuditArchiveRetrieval resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataSafeAuditArchiveRetrieval to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataSafeAuditArchiveRetrieval that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeAuditArchiveRetrieval to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.auditEventCount">audit_event_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.errorInfo">error_info</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.timeCompleted">time_completed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.timeOfExpiry">time_of_expiry</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference">DataSafeAuditArchiveRetrievalTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.timeRequested">time_requested</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.endDateInput">end_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.startDateInput">start_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.targetIdInput">target_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeouts">DataSafeAuditArchiveRetrievalTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.endDate">end_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.startDate">start_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.targetId">target_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `audit_event_count`<sup>Required</sup> <a name="audit_event_count" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.auditEventCount"></a>

```python
audit_event_count: str
```

- *Type:* str

---

##### `error_info`<sup>Required</sup> <a name="error_info" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.errorInfo"></a>

```python
error_info: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_completed`<sup>Required</sup> <a name="time_completed" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.timeCompleted"></a>

```python
time_completed: str
```

- *Type:* str

---

##### `time_of_expiry`<sup>Required</sup> <a name="time_of_expiry" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.timeOfExpiry"></a>

```python
time_of_expiry: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.timeouts"></a>

```python
timeouts: DataSafeAuditArchiveRetrievalTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference">DataSafeAuditArchiveRetrievalTimeoutsOutputReference</a>

---

##### `time_requested`<sup>Required</sup> <a name="time_requested" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.timeRequested"></a>

```python
time_requested: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `end_date_input`<sup>Optional</sup> <a name="end_date_input" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.endDateInput"></a>

```python
end_date_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `start_date_input`<sup>Optional</sup> <a name="start_date_input" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.startDateInput"></a>

```python
start_date_input: str
```

- *Type:* str

---

##### `target_id_input`<sup>Optional</sup> <a name="target_id_input" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.targetIdInput"></a>

```python
target_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataSafeAuditArchiveRetrievalTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeouts">DataSafeAuditArchiveRetrievalTimeouts</a>]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `end_date`<sup>Required</sup> <a name="end_date" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.endDate"></a>

```python
end_date: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `start_date`<sup>Required</sup> <a name="start_date" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.startDate"></a>

```python
start_date: str
```

- *Type:* str

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeAuditArchiveRetrievalConfig <a name="DataSafeAuditArchiveRetrievalConfig" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_audit_archive_retrieval

dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  end_date: str,
  start_date: str,
  target_id: str,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  timeouts: DataSafeAuditArchiveRetrievalTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#compartment_id DataSafeAuditArchiveRetrieval#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.endDate">end_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#end_date DataSafeAuditArchiveRetrieval#end_date}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.startDate">start_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#start_date DataSafeAuditArchiveRetrieval#start_date}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.targetId">target_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#target_id DataSafeAuditArchiveRetrieval#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#defined_tags DataSafeAuditArchiveRetrieval#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#description DataSafeAuditArchiveRetrieval#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#display_name DataSafeAuditArchiveRetrieval#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#freeform_tags DataSafeAuditArchiveRetrieval#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#id DataSafeAuditArchiveRetrieval#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeouts">DataSafeAuditArchiveRetrievalTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#compartment_id DataSafeAuditArchiveRetrieval#compartment_id}.

---

##### `end_date`<sup>Required</sup> <a name="end_date" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.endDate"></a>

```python
end_date: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#end_date DataSafeAuditArchiveRetrieval#end_date}.

---

##### `start_date`<sup>Required</sup> <a name="start_date" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.startDate"></a>

```python
start_date: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#start_date DataSafeAuditArchiveRetrieval#start_date}.

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#target_id DataSafeAuditArchiveRetrieval#target_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#defined_tags DataSafeAuditArchiveRetrieval#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#description DataSafeAuditArchiveRetrieval#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#display_name DataSafeAuditArchiveRetrieval#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#freeform_tags DataSafeAuditArchiveRetrieval#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#id DataSafeAuditArchiveRetrieval#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.timeouts"></a>

```python
timeouts: DataSafeAuditArchiveRetrievalTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeouts">DataSafeAuditArchiveRetrievalTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#timeouts DataSafeAuditArchiveRetrieval#timeouts}

---

### DataSafeAuditArchiveRetrievalTimeouts <a name="DataSafeAuditArchiveRetrievalTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_audit_archive_retrieval

dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#create DataSafeAuditArchiveRetrieval#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#delete DataSafeAuditArchiveRetrieval#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#update DataSafeAuditArchiveRetrieval#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#create DataSafeAuditArchiveRetrieval#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#delete DataSafeAuditArchiveRetrieval#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#update DataSafeAuditArchiveRetrieval#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeAuditArchiveRetrievalTimeoutsOutputReference <a name="DataSafeAuditArchiveRetrievalTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_audit_archive_retrieval

dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeouts">DataSafeAuditArchiveRetrievalTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataSafeAuditArchiveRetrievalTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeouts">DataSafeAuditArchiveRetrievalTimeouts</a>]

---



