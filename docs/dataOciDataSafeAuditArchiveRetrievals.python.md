# `dataOciDataSafeAuditArchiveRetrievals` Submodule <a name="`dataOciDataSafeAuditArchiveRetrievals` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeAuditArchiveRetrievals <a name="DataOciDataSafeAuditArchiveRetrievals" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals oci_data_safe_audit_archive_retrievals}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_audit_archive_retrievals

dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals(
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
  access_level: str = None,
  audit_archive_retrieval_id: str = None,
  compartment_id_in_subtree: typing.Union[bool, IResolvable] = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeAuditArchiveRetrievalsFilter]] = None,
  id: str = None,
  state: str = None,
  target_id: str = None,
  time_of_expiry: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#compartment_id DataOciDataSafeAuditArchiveRetrievals#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.Initializer.parameter.accessLevel">access_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#access_level DataOciDataSafeAuditArchiveRetrievals#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.Initializer.parameter.auditArchiveRetrievalId">audit_archive_retrieval_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#audit_archive_retrieval_id DataOciDataSafeAuditArchiveRetrievals#audit_archive_retrieval_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.Initializer.parameter.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#compartment_id_in_subtree DataOciDataSafeAuditArchiveRetrievals#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#display_name DataOciDataSafeAuditArchiveRetrievals#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilter">DataOciDataSafeAuditArchiveRetrievalsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#id DataOciDataSafeAuditArchiveRetrievals#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#state DataOciDataSafeAuditArchiveRetrievals#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.Initializer.parameter.targetId">target_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#target_id DataOciDataSafeAuditArchiveRetrievals#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.Initializer.parameter.timeOfExpiry">time_of_expiry</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#time_of_expiry DataOciDataSafeAuditArchiveRetrievals#time_of_expiry}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#compartment_id DataOciDataSafeAuditArchiveRetrievals#compartment_id}.

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.Initializer.parameter.accessLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#access_level DataOciDataSafeAuditArchiveRetrievals#access_level}.

---

##### `audit_archive_retrieval_id`<sup>Optional</sup> <a name="audit_archive_retrieval_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.Initializer.parameter.auditArchiveRetrievalId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#audit_archive_retrieval_id DataOciDataSafeAuditArchiveRetrievals#audit_archive_retrieval_id}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.Initializer.parameter.compartmentIdInSubtree"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#compartment_id_in_subtree DataOciDataSafeAuditArchiveRetrievals#compartment_id_in_subtree}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#display_name DataOciDataSafeAuditArchiveRetrievals#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilter">DataOciDataSafeAuditArchiveRetrievalsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#filter DataOciDataSafeAuditArchiveRetrievals#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#id DataOciDataSafeAuditArchiveRetrievals#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#state DataOciDataSafeAuditArchiveRetrievals#state}.

---

##### `target_id`<sup>Optional</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.Initializer.parameter.targetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#target_id DataOciDataSafeAuditArchiveRetrievals#target_id}.

---

##### `time_of_expiry`<sup>Optional</sup> <a name="time_of_expiry" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.Initializer.parameter.timeOfExpiry"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#time_of_expiry DataOciDataSafeAuditArchiveRetrievals#time_of_expiry}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetAccessLevel">reset_access_level</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetAuditArchiveRetrievalId">reset_audit_archive_retrieval_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetCompartmentIdInSubtree">reset_compartment_id_in_subtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetTargetId">reset_target_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetTimeOfExpiry">reset_time_of_expiry</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDataSafeAuditArchiveRetrievalsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilter">DataOciDataSafeAuditArchiveRetrievalsFilter</a>]]

---

##### `reset_access_level` <a name="reset_access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetAccessLevel"></a>

```python
def reset_access_level() -> None
```

##### `reset_audit_archive_retrieval_id` <a name="reset_audit_archive_retrieval_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetAuditArchiveRetrievalId"></a>

```python
def reset_audit_archive_retrieval_id() -> None
```

##### `reset_compartment_id_in_subtree` <a name="reset_compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetCompartmentIdInSubtree"></a>

```python
def reset_compartment_id_in_subtree() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_target_id` <a name="reset_target_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetTargetId"></a>

```python
def reset_target_id() -> None
```

##### `reset_time_of_expiry` <a name="reset_time_of_expiry" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetTimeOfExpiry"></a>

```python
def reset_time_of_expiry() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDataSafeAuditArchiveRetrievals resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_audit_archive_retrievals

dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_audit_archive_retrievals

dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_audit_archive_retrievals

dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_audit_archive_retrievals

dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDataSafeAuditArchiveRetrievals resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDataSafeAuditArchiveRetrievals to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDataSafeAuditArchiveRetrievals that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeAuditArchiveRetrievals to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.auditArchiveRetrievalCollection">audit_archive_retrieval_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList">DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList">DataOciDataSafeAuditArchiveRetrievalsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.accessLevelInput">access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.auditArchiveRetrievalIdInput">audit_archive_retrieval_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.compartmentIdInSubtreeInput">compartment_id_in_subtree_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilter">DataOciDataSafeAuditArchiveRetrievalsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.targetIdInput">target_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.timeOfExpiryInput">time_of_expiry_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.accessLevel">access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.auditArchiveRetrievalId">audit_archive_retrieval_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.targetId">target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.timeOfExpiry">time_of_expiry</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `audit_archive_retrieval_collection`<sup>Required</sup> <a name="audit_archive_retrieval_collection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.auditArchiveRetrievalCollection"></a>

```python
audit_archive_retrieval_collection: DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList">DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.filter"></a>

```python
filter: DataOciDataSafeAuditArchiveRetrievalsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList">DataOciDataSafeAuditArchiveRetrievalsFilterList</a>

---

##### `access_level_input`<sup>Optional</sup> <a name="access_level_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.accessLevelInput"></a>

```python
access_level_input: str
```

- *Type:* str

---

##### `audit_archive_retrieval_id_input`<sup>Optional</sup> <a name="audit_archive_retrieval_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.auditArchiveRetrievalIdInput"></a>

```python
audit_archive_retrieval_id_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `compartment_id_in_subtree_input`<sup>Optional</sup> <a name="compartment_id_in_subtree_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.compartmentIdInSubtreeInput"></a>

```python
compartment_id_in_subtree_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDataSafeAuditArchiveRetrievalsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilter">DataOciDataSafeAuditArchiveRetrievalsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `target_id_input`<sup>Optional</sup> <a name="target_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.targetIdInput"></a>

```python
target_id_input: str
```

- *Type:* str

---

##### `time_of_expiry_input`<sup>Optional</sup> <a name="time_of_expiry_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.timeOfExpiryInput"></a>

```python
time_of_expiry_input: str
```

- *Type:* str

---

##### `access_level`<sup>Required</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

---

##### `audit_archive_retrieval_id`<sup>Required</sup> <a name="audit_archive_retrieval_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.auditArchiveRetrievalId"></a>

```python
audit_archive_retrieval_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compartment_id_in_subtree`<sup>Required</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

---

##### `time_of_expiry`<sup>Required</sup> <a name="time_of_expiry" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.timeOfExpiry"></a>

```python
time_of_expiry: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollection <a name="DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_audit_archive_retrievals

dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollection()
```


### DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItems <a name="DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_audit_archive_retrievals

dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItems()
```


### DataOciDataSafeAuditArchiveRetrievalsConfig <a name="DataOciDataSafeAuditArchiveRetrievalsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_audit_archive_retrievals

dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  access_level: str = None,
  audit_archive_retrieval_id: str = None,
  compartment_id_in_subtree: typing.Union[bool, IResolvable] = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeAuditArchiveRetrievalsFilter]] = None,
  id: str = None,
  state: str = None,
  target_id: str = None,
  time_of_expiry: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#compartment_id DataOciDataSafeAuditArchiveRetrievals#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.accessLevel">access_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#access_level DataOciDataSafeAuditArchiveRetrievals#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.auditArchiveRetrievalId">audit_archive_retrieval_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#audit_archive_retrieval_id DataOciDataSafeAuditArchiveRetrievals#audit_archive_retrieval_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#compartment_id_in_subtree DataOciDataSafeAuditArchiveRetrievals#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#display_name DataOciDataSafeAuditArchiveRetrievals#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilter">DataOciDataSafeAuditArchiveRetrievalsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#id DataOciDataSafeAuditArchiveRetrievals#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#state DataOciDataSafeAuditArchiveRetrievals#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.targetId">target_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#target_id DataOciDataSafeAuditArchiveRetrievals#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.timeOfExpiry">time_of_expiry</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#time_of_expiry DataOciDataSafeAuditArchiveRetrievals#time_of_expiry}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#compartment_id DataOciDataSafeAuditArchiveRetrievals#compartment_id}.

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#access_level DataOciDataSafeAuditArchiveRetrievals#access_level}.

---

##### `audit_archive_retrieval_id`<sup>Optional</sup> <a name="audit_archive_retrieval_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.auditArchiveRetrievalId"></a>

```python
audit_archive_retrieval_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#audit_archive_retrieval_id DataOciDataSafeAuditArchiveRetrievals#audit_archive_retrieval_id}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#compartment_id_in_subtree DataOciDataSafeAuditArchiveRetrievals#compartment_id_in_subtree}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#display_name DataOciDataSafeAuditArchiveRetrievals#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDataSafeAuditArchiveRetrievalsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilter">DataOciDataSafeAuditArchiveRetrievalsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#filter DataOciDataSafeAuditArchiveRetrievals#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#id DataOciDataSafeAuditArchiveRetrievals#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#state DataOciDataSafeAuditArchiveRetrievals#state}.

---

##### `target_id`<sup>Optional</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#target_id DataOciDataSafeAuditArchiveRetrievals#target_id}.

---

##### `time_of_expiry`<sup>Optional</sup> <a name="time_of_expiry" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.timeOfExpiry"></a>

```python
time_of_expiry: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#time_of_expiry DataOciDataSafeAuditArchiveRetrievals#time_of_expiry}.

---

### DataOciDataSafeAuditArchiveRetrievalsFilter <a name="DataOciDataSafeAuditArchiveRetrievalsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_audit_archive_retrievals

dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#name DataOciDataSafeAuditArchiveRetrievals#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#values DataOciDataSafeAuditArchiveRetrievals#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#regex DataOciDataSafeAuditArchiveRetrievals#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#name DataOciDataSafeAuditArchiveRetrievals#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#values DataOciDataSafeAuditArchiveRetrievals#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#regex DataOciDataSafeAuditArchiveRetrievals#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList <a name="DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_audit_archive_retrievals

dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference <a name="DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_audit_archive_retrievals

dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.auditEventCount">audit_event_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.endDate">end_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.errorInfo">error_info</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.startDate">start_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.targetId">target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.timeCompleted">time_completed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.timeOfExpiry">time_of_expiry</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.timeRequested">time_requested</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItems">DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audit_event_count`<sup>Required</sup> <a name="audit_event_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.auditEventCount"></a>

```python
audit_event_count: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `end_date`<sup>Required</sup> <a name="end_date" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.endDate"></a>

```python
end_date: str
```

- *Type:* str

---

##### `error_info`<sup>Required</sup> <a name="error_info" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.errorInfo"></a>

```python
error_info: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `start_date`<sup>Required</sup> <a name="start_date" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.startDate"></a>

```python
start_date: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

---

##### `time_completed`<sup>Required</sup> <a name="time_completed" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.timeCompleted"></a>

```python
time_completed: str
```

- *Type:* str

---

##### `time_of_expiry`<sup>Required</sup> <a name="time_of_expiry" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.timeOfExpiry"></a>

```python
time_of_expiry: str
```

- *Type:* str

---

##### `time_requested`<sup>Required</sup> <a name="time_requested" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.timeRequested"></a>

```python
time_requested: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItems">DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItems</a>

---


### DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList <a name="DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_audit_archive_retrievals

dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference <a name="DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_audit_archive_retrievals

dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList">DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollection">DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.property.items"></a>

```python
items: DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList">DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollection">DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollection</a>

---


### DataOciDataSafeAuditArchiveRetrievalsFilterList <a name="DataOciDataSafeAuditArchiveRetrievalsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_audit_archive_retrievals

dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilter">DataOciDataSafeAuditArchiveRetrievalsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDataSafeAuditArchiveRetrievalsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilter">DataOciDataSafeAuditArchiveRetrievalsFilter</a>]]

---


### DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference <a name="DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_audit_archive_retrievals

dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilter">DataOciDataSafeAuditArchiveRetrievalsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDataSafeAuditArchiveRetrievalsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilter">DataOciDataSafeAuditArchiveRetrievalsFilter</a>]

---



