# `dataOciOsManagementHubErrata` Submodule <a name="`dataOciOsManagementHubErrata` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubErrata <a name="DataOciOsManagementHubErrata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata oci_os_management_hub_errata}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_errata

dataOciOsManagementHubErrata.DataOciOsManagementHubErrata(
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
  advisory_severity: typing.List[str] = None,
  advisory_type: typing.List[str] = None,
  classification_type: typing.List[str] = None,
  filter: typing.Union[IResolvable, typing.List[DataOciOsManagementHubErrataFilter]] = None,
  id: str = None,
  name: typing.List[str] = None,
  name_contains: str = None,
  os_family: str = None,
  time_issue_date_end: str = None,
  time_issue_date_start: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#compartment_id DataOciOsManagementHubErrata#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.Initializer.parameter.advisorySeverity">advisory_severity</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#advisory_severity DataOciOsManagementHubErrata#advisory_severity}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.Initializer.parameter.advisoryType">advisory_type</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#advisory_type DataOciOsManagementHubErrata#advisory_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.Initializer.parameter.classificationType">classification_type</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#classification_type DataOciOsManagementHubErrata#classification_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilter">DataOciOsManagementHubErrataFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#id DataOciOsManagementHubErrata#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.Initializer.parameter.name">name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#name DataOciOsManagementHubErrata#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.Initializer.parameter.nameContains">name_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#name_contains DataOciOsManagementHubErrata#name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.Initializer.parameter.osFamily">os_family</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#os_family DataOciOsManagementHubErrata#os_family}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.Initializer.parameter.timeIssueDateEnd">time_issue_date_end</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#time_issue_date_end DataOciOsManagementHubErrata#time_issue_date_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.Initializer.parameter.timeIssueDateStart">time_issue_date_start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#time_issue_date_start DataOciOsManagementHubErrata#time_issue_date_start}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#compartment_id DataOciOsManagementHubErrata#compartment_id}.

---

##### `advisory_severity`<sup>Optional</sup> <a name="advisory_severity" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.Initializer.parameter.advisorySeverity"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#advisory_severity DataOciOsManagementHubErrata#advisory_severity}.

---

##### `advisory_type`<sup>Optional</sup> <a name="advisory_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.Initializer.parameter.advisoryType"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#advisory_type DataOciOsManagementHubErrata#advisory_type}.

---

##### `classification_type`<sup>Optional</sup> <a name="classification_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.Initializer.parameter.classificationType"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#classification_type DataOciOsManagementHubErrata#classification_type}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilter">DataOciOsManagementHubErrataFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#filter DataOciOsManagementHubErrata#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#id DataOciOsManagementHubErrata#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.Initializer.parameter.name"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#name DataOciOsManagementHubErrata#name}.

---

##### `name_contains`<sup>Optional</sup> <a name="name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.Initializer.parameter.nameContains"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#name_contains DataOciOsManagementHubErrata#name_contains}.

---

##### `os_family`<sup>Optional</sup> <a name="os_family" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.Initializer.parameter.osFamily"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#os_family DataOciOsManagementHubErrata#os_family}.

---

##### `time_issue_date_end`<sup>Optional</sup> <a name="time_issue_date_end" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.Initializer.parameter.timeIssueDateEnd"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#time_issue_date_end DataOciOsManagementHubErrata#time_issue_date_end}.

---

##### `time_issue_date_start`<sup>Optional</sup> <a name="time_issue_date_start" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.Initializer.parameter.timeIssueDateStart"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#time_issue_date_start DataOciOsManagementHubErrata#time_issue_date_start}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.resetAdvisorySeverity">reset_advisory_severity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.resetAdvisoryType">reset_advisory_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.resetClassificationType">reset_classification_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.resetNameContains">reset_name_contains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.resetOsFamily">reset_os_family</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.resetTimeIssueDateEnd">reset_time_issue_date_end</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.resetTimeIssueDateStart">reset_time_issue_date_start</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciOsManagementHubErrataFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilter">DataOciOsManagementHubErrataFilter</a>]]

---

##### `reset_advisory_severity` <a name="reset_advisory_severity" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.resetAdvisorySeverity"></a>

```python
def reset_advisory_severity() -> None
```

##### `reset_advisory_type` <a name="reset_advisory_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.resetAdvisoryType"></a>

```python
def reset_advisory_type() -> None
```

##### `reset_classification_type` <a name="reset_classification_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.resetClassificationType"></a>

```python
def reset_classification_type() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_name_contains` <a name="reset_name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.resetNameContains"></a>

```python
def reset_name_contains() -> None
```

##### `reset_os_family` <a name="reset_os_family" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.resetOsFamily"></a>

```python
def reset_os_family() -> None
```

##### `reset_time_issue_date_end` <a name="reset_time_issue_date_end" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.resetTimeIssueDateEnd"></a>

```python
def reset_time_issue_date_end() -> None
```

##### `reset_time_issue_date_start` <a name="reset_time_issue_date_start" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.resetTimeIssueDateStart"></a>

```python
def reset_time_issue_date_start() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubErrata resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_errata

dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_errata

dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_errata

dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_errata

dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOsManagementHubErrata resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOsManagementHubErrata to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOsManagementHubErrata that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubErrata to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.erratumCollection">erratum_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionList">DataOciOsManagementHubErrataErratumCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterList">DataOciOsManagementHubErrataFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.advisorySeverityInput">advisory_severity_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.advisoryTypeInput">advisory_type_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.classificationTypeInput">classification_type_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilter">DataOciOsManagementHubErrataFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.nameContainsInput">name_contains_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.nameInput">name_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.osFamilyInput">os_family_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.timeIssueDateEndInput">time_issue_date_end_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.timeIssueDateStartInput">time_issue_date_start_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.advisorySeverity">advisory_severity</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.advisoryType">advisory_type</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.classificationType">classification_type</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.name">name</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.nameContains">name_contains</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.osFamily">os_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.timeIssueDateEnd">time_issue_date_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.timeIssueDateStart">time_issue_date_start</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `erratum_collection`<sup>Required</sup> <a name="erratum_collection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.erratumCollection"></a>

```python
erratum_collection: DataOciOsManagementHubErrataErratumCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionList">DataOciOsManagementHubErrataErratumCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.filter"></a>

```python
filter: DataOciOsManagementHubErrataFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterList">DataOciOsManagementHubErrataFilterList</a>

---

##### `advisory_severity_input`<sup>Optional</sup> <a name="advisory_severity_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.advisorySeverityInput"></a>

```python
advisory_severity_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `advisory_type_input`<sup>Optional</sup> <a name="advisory_type_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.advisoryTypeInput"></a>

```python
advisory_type_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `classification_type_input`<sup>Optional</sup> <a name="classification_type_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.classificationTypeInput"></a>

```python
classification_type_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciOsManagementHubErrataFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilter">DataOciOsManagementHubErrataFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_contains_input`<sup>Optional</sup> <a name="name_contains_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.nameContainsInput"></a>

```python
name_contains_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.nameInput"></a>

```python
name_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `os_family_input`<sup>Optional</sup> <a name="os_family_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.osFamilyInput"></a>

```python
os_family_input: str
```

- *Type:* str

---

##### `time_issue_date_end_input`<sup>Optional</sup> <a name="time_issue_date_end_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.timeIssueDateEndInput"></a>

```python
time_issue_date_end_input: str
```

- *Type:* str

---

##### `time_issue_date_start_input`<sup>Optional</sup> <a name="time_issue_date_start_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.timeIssueDateStartInput"></a>

```python
time_issue_date_start_input: str
```

- *Type:* str

---

##### `advisory_severity`<sup>Required</sup> <a name="advisory_severity" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.advisorySeverity"></a>

```python
advisory_severity: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `advisory_type`<sup>Required</sup> <a name="advisory_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.advisoryType"></a>

```python
advisory_type: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `classification_type`<sup>Required</sup> <a name="classification_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.classificationType"></a>

```python
classification_type: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.name"></a>

```python
name: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_contains`<sup>Required</sup> <a name="name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.nameContains"></a>

```python
name_contains: str
```

- *Type:* str

---

##### `os_family`<sup>Required</sup> <a name="os_family" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.osFamily"></a>

```python
os_family: str
```

- *Type:* str

---

##### `time_issue_date_end`<sup>Required</sup> <a name="time_issue_date_end" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.timeIssueDateEnd"></a>

```python
time_issue_date_end: str
```

- *Type:* str

---

##### `time_issue_date_start`<sup>Required</sup> <a name="time_issue_date_start" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.timeIssueDateStart"></a>

```python
time_issue_date_start: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrata.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubErrataConfig <a name="DataOciOsManagementHubErrataConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_errata

dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  advisory_severity: typing.List[str] = None,
  advisory_type: typing.List[str] = None,
  classification_type: typing.List[str] = None,
  filter: typing.Union[IResolvable, typing.List[DataOciOsManagementHubErrataFilter]] = None,
  id: str = None,
  name: typing.List[str] = None,
  name_contains: str = None,
  os_family: str = None,
  time_issue_date_end: str = None,
  time_issue_date_start: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#compartment_id DataOciOsManagementHubErrata#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.advisorySeverity">advisory_severity</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#advisory_severity DataOciOsManagementHubErrata#advisory_severity}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.advisoryType">advisory_type</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#advisory_type DataOciOsManagementHubErrata#advisory_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.classificationType">classification_type</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#classification_type DataOciOsManagementHubErrata#classification_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilter">DataOciOsManagementHubErrataFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#id DataOciOsManagementHubErrata#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.name">name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#name DataOciOsManagementHubErrata#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.nameContains">name_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#name_contains DataOciOsManagementHubErrata#name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.osFamily">os_family</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#os_family DataOciOsManagementHubErrata#os_family}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.timeIssueDateEnd">time_issue_date_end</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#time_issue_date_end DataOciOsManagementHubErrata#time_issue_date_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.timeIssueDateStart">time_issue_date_start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#time_issue_date_start DataOciOsManagementHubErrata#time_issue_date_start}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#compartment_id DataOciOsManagementHubErrata#compartment_id}.

---

##### `advisory_severity`<sup>Optional</sup> <a name="advisory_severity" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.advisorySeverity"></a>

```python
advisory_severity: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#advisory_severity DataOciOsManagementHubErrata#advisory_severity}.

---

##### `advisory_type`<sup>Optional</sup> <a name="advisory_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.advisoryType"></a>

```python
advisory_type: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#advisory_type DataOciOsManagementHubErrata#advisory_type}.

---

##### `classification_type`<sup>Optional</sup> <a name="classification_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.classificationType"></a>

```python
classification_type: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#classification_type DataOciOsManagementHubErrata#classification_type}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciOsManagementHubErrataFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilter">DataOciOsManagementHubErrataFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#filter DataOciOsManagementHubErrata#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#id DataOciOsManagementHubErrata#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.name"></a>

```python
name: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#name DataOciOsManagementHubErrata#name}.

---

##### `name_contains`<sup>Optional</sup> <a name="name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.nameContains"></a>

```python
name_contains: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#name_contains DataOciOsManagementHubErrata#name_contains}.

---

##### `os_family`<sup>Optional</sup> <a name="os_family" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.osFamily"></a>

```python
os_family: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#os_family DataOciOsManagementHubErrata#os_family}.

---

##### `time_issue_date_end`<sup>Optional</sup> <a name="time_issue_date_end" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.timeIssueDateEnd"></a>

```python
time_issue_date_end: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#time_issue_date_end DataOciOsManagementHubErrata#time_issue_date_end}.

---

##### `time_issue_date_start`<sup>Optional</sup> <a name="time_issue_date_start" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataConfig.property.timeIssueDateStart"></a>

```python
time_issue_date_start: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#time_issue_date_start DataOciOsManagementHubErrata#time_issue_date_start}.

---

### DataOciOsManagementHubErrataErratumCollection <a name="DataOciOsManagementHubErrataErratumCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_errata

dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollection()
```


### DataOciOsManagementHubErrataErratumCollectionItems <a name="DataOciOsManagementHubErrataErratumCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_errata

dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItems()
```


### DataOciOsManagementHubErrataErratumCollectionItemsPackages <a name="DataOciOsManagementHubErrataErratumCollectionItemsPackages" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackages.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_errata

dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackages()
```


### DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSources <a name="DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSources" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSources.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_errata

dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSources()
```


### DataOciOsManagementHubErrataFilter <a name="DataOciOsManagementHubErrataFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_errata

dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#name DataOciOsManagementHubErrata#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#values DataOciOsManagementHubErrata#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#regex DataOciOsManagementHubErrata#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#name DataOciOsManagementHubErrata#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#values DataOciOsManagementHubErrata#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_errata#regex DataOciOsManagementHubErrata#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciOsManagementHubErrataErratumCollectionItemsList <a name="DataOciOsManagementHubErrataErratumCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_errata

dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubErrataErratumCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubErrataErratumCollectionItemsOutputReference <a name="DataOciOsManagementHubErrataErratumCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_errata

dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.advisorySeverity">advisory_severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.advisoryType">advisory_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.classificationType">classification_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.from">from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.osFamilies">os_families</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.packages">packages</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesList">DataOciOsManagementHubErrataErratumCollectionItemsPackagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.references">references</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.relatedCves">related_cves</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.repositories">repositories</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.solution">solution</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.synopsis">synopsis</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.timeIssued">time_issued</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItems">DataOciOsManagementHubErrataErratumCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `advisory_severity`<sup>Required</sup> <a name="advisory_severity" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.advisorySeverity"></a>

```python
advisory_severity: str
```

- *Type:* str

---

##### `advisory_type`<sup>Required</sup> <a name="advisory_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.advisoryType"></a>

```python
advisory_type: str
```

- *Type:* str

---

##### `classification_type`<sup>Required</sup> <a name="classification_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.classificationType"></a>

```python
classification_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `from`<sup>Required</sup> <a name="from" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.from"></a>

```python
from: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `os_families`<sup>Required</sup> <a name="os_families" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.osFamilies"></a>

```python
os_families: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `packages`<sup>Required</sup> <a name="packages" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.packages"></a>

```python
packages: DataOciOsManagementHubErrataErratumCollectionItemsPackagesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesList">DataOciOsManagementHubErrataErratumCollectionItemsPackagesList</a>

---

##### `references`<sup>Required</sup> <a name="references" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.references"></a>

```python
references: str
```

- *Type:* str

---

##### `related_cves`<sup>Required</sup> <a name="related_cves" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.relatedCves"></a>

```python
related_cves: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `repositories`<sup>Required</sup> <a name="repositories" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.repositories"></a>

```python
repositories: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `solution`<sup>Required</sup> <a name="solution" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.solution"></a>

```python
solution: str
```

- *Type:* str

---

##### `synopsis`<sup>Required</sup> <a name="synopsis" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.synopsis"></a>

```python
synopsis: str
```

- *Type:* str

---

##### `time_issued`<sup>Required</sup> <a name="time_issued" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.timeIssued"></a>

```python
time_issued: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubErrataErratumCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItems">DataOciOsManagementHubErrataErratumCollectionItems</a>

---


### DataOciOsManagementHubErrataErratumCollectionItemsPackagesList <a name="DataOciOsManagementHubErrataErratumCollectionItemsPackagesList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_errata

dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference <a name="DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_errata

dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.property.architecture">architecture</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.property.checksum">checksum</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.property.checksumType">checksum_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.property.isLatest">is_latest</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.property.osFamilies">os_families</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.property.softwareSources">software_sources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesList">DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackages">DataOciOsManagementHubErrataErratumCollectionItemsPackages</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.property.architecture"></a>

```python
architecture: str
```

- *Type:* str

---

##### `checksum`<sup>Required</sup> <a name="checksum" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.property.checksum"></a>

```python
checksum: str
```

- *Type:* str

---

##### `checksum_type`<sup>Required</sup> <a name="checksum_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.property.checksumType"></a>

```python
checksum_type: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `is_latest`<sup>Required</sup> <a name="is_latest" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.property.isLatest"></a>

```python
is_latest: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `os_families`<sup>Required</sup> <a name="os_families" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.property.osFamilies"></a>

```python
os_families: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `software_sources`<sup>Required</sup> <a name="software_sources" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.property.softwareSources"></a>

```python
software_sources: DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesList">DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubErrataErratumCollectionItemsPackages
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackages">DataOciOsManagementHubErrataErratumCollectionItemsPackages</a>

---


### DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesList <a name="DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_errata

dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference <a name="DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_errata

dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.property.isMandatoryForAutonomousLinux">is_mandatory_for_autonomous_linux</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.property.softwareSourceType">software_source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSources">DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_mandatory_for_autonomous_linux`<sup>Required</sup> <a name="is_mandatory_for_autonomous_linux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.property.isMandatoryForAutonomousLinux"></a>

```python
is_mandatory_for_autonomous_linux: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `software_source_type`<sup>Required</sup> <a name="software_source_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.property.softwareSourceType"></a>

```python
software_source_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSourcesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSources
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSources">DataOciOsManagementHubErrataErratumCollectionItemsPackagesSoftwareSources</a>

---


### DataOciOsManagementHubErrataErratumCollectionList <a name="DataOciOsManagementHubErrataErratumCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_errata

dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubErrataErratumCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubErrataErratumCollectionOutputReference <a name="DataOciOsManagementHubErrataErratumCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_errata

dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsList">DataOciOsManagementHubErrataErratumCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollection">DataOciOsManagementHubErrataErratumCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.property.items"></a>

```python
items: DataOciOsManagementHubErrataErratumCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionItemsList">DataOciOsManagementHubErrataErratumCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubErrataErratumCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataErratumCollection">DataOciOsManagementHubErrataErratumCollection</a>

---


### DataOciOsManagementHubErrataFilterList <a name="DataOciOsManagementHubErrataFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_errata

dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubErrataFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilter">DataOciOsManagementHubErrataFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciOsManagementHubErrataFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilter">DataOciOsManagementHubErrataFilter</a>]]

---


### DataOciOsManagementHubErrataFilterOutputReference <a name="DataOciOsManagementHubErrataFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_errata

dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilter">DataOciOsManagementHubErrataFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciOsManagementHubErrataFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubErrata.DataOciOsManagementHubErrataFilter">DataOciOsManagementHubErrataFilter</a>]

---



