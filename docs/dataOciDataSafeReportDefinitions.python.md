# `dataOciDataSafeReportDefinitions` Submodule <a name="`dataOciDataSafeReportDefinitions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeReportDefinitions <a name="DataOciDataSafeReportDefinitions" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions oci_data_safe_report_definitions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_report_definitions

dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions(
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
  category: str = None,
  compartment_id_in_subtree: typing.Union[bool, IResolvable] = None,
  data_source: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeReportDefinitionsFilter]] = None,
  id: str = None,
  is_seeded: typing.Union[bool, IResolvable] = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#compartment_id DataOciDataSafeReportDefinitions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.Initializer.parameter.accessLevel">access_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#access_level DataOciDataSafeReportDefinitions#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.Initializer.parameter.category">category</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#category DataOciDataSafeReportDefinitions#category}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.Initializer.parameter.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#compartment_id_in_subtree DataOciDataSafeReportDefinitions#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.Initializer.parameter.dataSource">data_source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#data_source DataOciDataSafeReportDefinitions#data_source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#display_name DataOciDataSafeReportDefinitions#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilter">DataOciDataSafeReportDefinitionsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#id DataOciDataSafeReportDefinitions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.Initializer.parameter.isSeeded">is_seeded</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#is_seeded DataOciDataSafeReportDefinitions#is_seeded}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#state DataOciDataSafeReportDefinitions#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#compartment_id DataOciDataSafeReportDefinitions#compartment_id}.

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.Initializer.parameter.accessLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#access_level DataOciDataSafeReportDefinitions#access_level}.

---

##### `category`<sup>Optional</sup> <a name="category" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.Initializer.parameter.category"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#category DataOciDataSafeReportDefinitions#category}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.Initializer.parameter.compartmentIdInSubtree"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#compartment_id_in_subtree DataOciDataSafeReportDefinitions#compartment_id_in_subtree}.

---

##### `data_source`<sup>Optional</sup> <a name="data_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.Initializer.parameter.dataSource"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#data_source DataOciDataSafeReportDefinitions#data_source}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#display_name DataOciDataSafeReportDefinitions#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilter">DataOciDataSafeReportDefinitionsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#filter DataOciDataSafeReportDefinitions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#id DataOciDataSafeReportDefinitions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_seeded`<sup>Optional</sup> <a name="is_seeded" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.Initializer.parameter.isSeeded"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#is_seeded DataOciDataSafeReportDefinitions#is_seeded}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#state DataOciDataSafeReportDefinitions#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.resetAccessLevel">reset_access_level</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.resetCategory">reset_category</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.resetCompartmentIdInSubtree">reset_compartment_id_in_subtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.resetDataSource">reset_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.resetIsSeeded">reset_is_seeded</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDataSafeReportDefinitionsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilter">DataOciDataSafeReportDefinitionsFilter</a>]]

---

##### `reset_access_level` <a name="reset_access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.resetAccessLevel"></a>

```python
def reset_access_level() -> None
```

##### `reset_category` <a name="reset_category" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.resetCategory"></a>

```python
def reset_category() -> None
```

##### `reset_compartment_id_in_subtree` <a name="reset_compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.resetCompartmentIdInSubtree"></a>

```python
def reset_compartment_id_in_subtree() -> None
```

##### `reset_data_source` <a name="reset_data_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.resetDataSource"></a>

```python
def reset_data_source() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_seeded` <a name="reset_is_seeded" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.resetIsSeeded"></a>

```python
def reset_is_seeded() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDataSafeReportDefinitions resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_report_definitions

dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_report_definitions

dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_report_definitions

dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_report_definitions

dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDataSafeReportDefinitions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDataSafeReportDefinitions to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDataSafeReportDefinitions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeReportDefinitions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterList">DataOciDataSafeReportDefinitionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.reportDefinitionCollection">report_definition_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionList">DataOciDataSafeReportDefinitionsReportDefinitionCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.accessLevelInput">access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.categoryInput">category_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.compartmentIdInSubtreeInput">compartment_id_in_subtree_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.dataSourceInput">data_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilter">DataOciDataSafeReportDefinitionsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.isSeededInput">is_seeded_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.accessLevel">access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.dataSource">data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.isSeeded">is_seeded</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.filter"></a>

```python
filter: DataOciDataSafeReportDefinitionsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterList">DataOciDataSafeReportDefinitionsFilterList</a>

---

##### `report_definition_collection`<sup>Required</sup> <a name="report_definition_collection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.reportDefinitionCollection"></a>

```python
report_definition_collection: DataOciDataSafeReportDefinitionsReportDefinitionCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionList">DataOciDataSafeReportDefinitionsReportDefinitionCollectionList</a>

---

##### `access_level_input`<sup>Optional</sup> <a name="access_level_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.accessLevelInput"></a>

```python
access_level_input: str
```

- *Type:* str

---

##### `category_input`<sup>Optional</sup> <a name="category_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.categoryInput"></a>

```python
category_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `compartment_id_in_subtree_input`<sup>Optional</sup> <a name="compartment_id_in_subtree_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.compartmentIdInSubtreeInput"></a>

```python
compartment_id_in_subtree_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `data_source_input`<sup>Optional</sup> <a name="data_source_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.dataSourceInput"></a>

```python
data_source_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDataSafeReportDefinitionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilter">DataOciDataSafeReportDefinitionsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_seeded_input`<sup>Optional</sup> <a name="is_seeded_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.isSeededInput"></a>

```python
is_seeded_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `access_level`<sup>Required</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compartment_id_in_subtree`<sup>Required</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `data_source`<sup>Required</sup> <a name="data_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.dataSource"></a>

```python
data_source: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_seeded`<sup>Required</sup> <a name="is_seeded" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.isSeeded"></a>

```python
is_seeded: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitions.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeReportDefinitionsConfig <a name="DataOciDataSafeReportDefinitionsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_report_definitions

dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  access_level: str = None,
  category: str = None,
  compartment_id_in_subtree: typing.Union[bool, IResolvable] = None,
  data_source: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeReportDefinitionsFilter]] = None,
  id: str = None,
  is_seeded: typing.Union[bool, IResolvable] = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#compartment_id DataOciDataSafeReportDefinitions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.accessLevel">access_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#access_level DataOciDataSafeReportDefinitions#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.category">category</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#category DataOciDataSafeReportDefinitions#category}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#compartment_id_in_subtree DataOciDataSafeReportDefinitions#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.dataSource">data_source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#data_source DataOciDataSafeReportDefinitions#data_source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#display_name DataOciDataSafeReportDefinitions#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilter">DataOciDataSafeReportDefinitionsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#id DataOciDataSafeReportDefinitions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.isSeeded">is_seeded</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#is_seeded DataOciDataSafeReportDefinitions#is_seeded}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#state DataOciDataSafeReportDefinitions#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#compartment_id DataOciDataSafeReportDefinitions#compartment_id}.

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#access_level DataOciDataSafeReportDefinitions#access_level}.

---

##### `category`<sup>Optional</sup> <a name="category" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.category"></a>

```python
category: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#category DataOciDataSafeReportDefinitions#category}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#compartment_id_in_subtree DataOciDataSafeReportDefinitions#compartment_id_in_subtree}.

---

##### `data_source`<sup>Optional</sup> <a name="data_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.dataSource"></a>

```python
data_source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#data_source DataOciDataSafeReportDefinitions#data_source}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#display_name DataOciDataSafeReportDefinitions#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDataSafeReportDefinitionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilter">DataOciDataSafeReportDefinitionsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#filter DataOciDataSafeReportDefinitions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#id DataOciDataSafeReportDefinitions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_seeded`<sup>Optional</sup> <a name="is_seeded" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.isSeeded"></a>

```python
is_seeded: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#is_seeded DataOciDataSafeReportDefinitions#is_seeded}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#state DataOciDataSafeReportDefinitions#state}.

---

### DataOciDataSafeReportDefinitionsFilter <a name="DataOciDataSafeReportDefinitionsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_report_definitions

dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#name DataOciDataSafeReportDefinitions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#values DataOciDataSafeReportDefinitions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#regex DataOciDataSafeReportDefinitions#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#name DataOciDataSafeReportDefinitions#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#values DataOciDataSafeReportDefinitions#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_report_definitions#regex DataOciDataSafeReportDefinitions#regex}.

---

### DataOciDataSafeReportDefinitionsReportDefinitionCollection <a name="DataOciDataSafeReportDefinitionsReportDefinitionCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_report_definitions

dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollection()
```


### DataOciDataSafeReportDefinitionsReportDefinitionCollectionItems <a name="DataOciDataSafeReportDefinitionsReportDefinitionCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_report_definitions

dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItems()
```


### DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFilters <a name="DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFilters" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFilters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFilters.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_report_definitions

dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFilters()
```


### DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfo <a name="DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfo.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_report_definitions

dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfo()
```


### DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortings <a name="DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortings" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_report_definitions

dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortings()
```


### DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummary <a name="DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummary" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummary"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummary.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_report_definitions

dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummary()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeReportDefinitionsFilterList <a name="DataOciDataSafeReportDefinitionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_report_definitions

dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeReportDefinitionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilter">DataOciDataSafeReportDefinitionsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDataSafeReportDefinitionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilter">DataOciDataSafeReportDefinitionsFilter</a>]]

---


### DataOciDataSafeReportDefinitionsFilterOutputReference <a name="DataOciDataSafeReportDefinitionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_report_definitions

dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilter">DataOciDataSafeReportDefinitionsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDataSafeReportDefinitionsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsFilter">DataOciDataSafeReportDefinitionsFilter</a>]

---


### DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersList <a name="DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_report_definitions

dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference <a name="DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_report_definitions

dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.property.expressions">expressions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.property.fieldName">field_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.property.isEnabled">is_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.property.isHidden">is_hidden</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFilters">DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expressions`<sup>Required</sup> <a name="expressions" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.property.expressions"></a>

```python
expressions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `field_name`<sup>Required</sup> <a name="field_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.property.fieldName"></a>

```python
field_name: str
```

- *Type:* str

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.property.isEnabled"></a>

```python
is_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_hidden`<sup>Required</sup> <a name="is_hidden" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.property.isHidden"></a>

```python
is_hidden: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFilters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFilters">DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFilters</a>

---


### DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoList <a name="DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_report_definitions

dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference <a name="DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_report_definitions

dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.property.dataType">data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.property.displayOrder">display_order</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.property.fieldName">field_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.property.isHidden">is_hidden</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfo">DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `display_order`<sup>Required</sup> <a name="display_order" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.property.displayOrder"></a>

```python
display_order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `field_name`<sup>Required</sup> <a name="field_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.property.fieldName"></a>

```python
field_name: str
```

- *Type:* str

---

##### `is_hidden`<sup>Required</sup> <a name="is_hidden" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.property.isHidden"></a>

```python
is_hidden: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfo">DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfo</a>

---


### DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsList <a name="DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_report_definitions

dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference <a name="DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_report_definitions

dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.property.fieldName">field_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.property.isAscending">is_ascending</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.property.sortingOrder">sorting_order</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortings">DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_name`<sup>Required</sup> <a name="field_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.property.fieldName"></a>

```python
field_name: str
```

- *Type:* str

---

##### `is_ascending`<sup>Required</sup> <a name="is_ascending" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.property.isAscending"></a>

```python
is_ascending: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `sorting_order`<sup>Required</sup> <a name="sorting_order" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.property.sortingOrder"></a>

```python
sorting_order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortings">DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortings</a>

---


### DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsList <a name="DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_report_definitions

dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference <a name="DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_report_definitions

dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.columnFilters">column_filters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersList">DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.columnInfo">column_info</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoList">DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.columnSortings">column_sortings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsList">DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.complianceStandards">compliance_standards</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.dataSource">data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.displayOrder">display_order</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.isSeeded">is_seeded</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.parentId">parent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.recordTimeSpan">record_time_span</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.schedule">schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.scheduledReportCompartmentId">scheduled_report_compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.scheduledReportMimeType">scheduled_report_mime_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.scheduledReportName">scheduled_report_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.scheduledReportRowLimit">scheduled_report_row_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.scimFilter">scim_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.summary">summary</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryList">DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItems">DataOciDataSafeReportDefinitionsReportDefinitionCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `column_filters`<sup>Required</sup> <a name="column_filters" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.columnFilters"></a>

```python
column_filters: DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersList">DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnFiltersList</a>

---

##### `column_info`<sup>Required</sup> <a name="column_info" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.columnInfo"></a>

```python
column_info: DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoList">DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnInfoList</a>

---

##### `column_sortings`<sup>Required</sup> <a name="column_sortings" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.columnSortings"></a>

```python
column_sortings: DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsList">DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsColumnSortingsList</a>

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compliance_standards`<sup>Required</sup> <a name="compliance_standards" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.complianceStandards"></a>

```python
compliance_standards: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `data_source`<sup>Required</sup> <a name="data_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.dataSource"></a>

```python
data_source: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `display_order`<sup>Required</sup> <a name="display_order" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.displayOrder"></a>

```python
display_order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_seeded`<sup>Required</sup> <a name="is_seeded" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.isSeeded"></a>

```python
is_seeded: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `parent_id`<sup>Required</sup> <a name="parent_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.parentId"></a>

```python
parent_id: str
```

- *Type:* str

---

##### `record_time_span`<sup>Required</sup> <a name="record_time_span" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.recordTimeSpan"></a>

```python
record_time_span: str
```

- *Type:* str

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.schedule"></a>

```python
schedule: str
```

- *Type:* str

---

##### `scheduled_report_compartment_id`<sup>Required</sup> <a name="scheduled_report_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.scheduledReportCompartmentId"></a>

```python
scheduled_report_compartment_id: str
```

- *Type:* str

---

##### `scheduled_report_mime_type`<sup>Required</sup> <a name="scheduled_report_mime_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.scheduledReportMimeType"></a>

```python
scheduled_report_mime_type: str
```

- *Type:* str

---

##### `scheduled_report_name`<sup>Required</sup> <a name="scheduled_report_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.scheduledReportName"></a>

```python
scheduled_report_name: str
```

- *Type:* str

---

##### `scheduled_report_row_limit`<sup>Required</sup> <a name="scheduled_report_row_limit" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.scheduledReportRowLimit"></a>

```python
scheduled_report_row_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scim_filter`<sup>Required</sup> <a name="scim_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.scimFilter"></a>

```python
scim_filter: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `summary`<sup>Required</sup> <a name="summary" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.summary"></a>

```python
summary: DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryList">DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryList</a>

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeReportDefinitionsReportDefinitionCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItems">DataOciDataSafeReportDefinitionsReportDefinitionCollectionItems</a>

---


### DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryList <a name="DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_report_definitions

dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference <a name="DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_report_definitions

dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.property.countOf">count_of</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.property.displayOrder">display_order</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.property.groupByFieldName">group_by_field_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.property.isHidden">is_hidden</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.property.scimFilter">scim_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummary">DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummary</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count_of`<sup>Required</sup> <a name="count_of" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.property.countOf"></a>

```python
count_of: str
```

- *Type:* str

---

##### `display_order`<sup>Required</sup> <a name="display_order" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.property.displayOrder"></a>

```python
display_order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `group_by_field_name`<sup>Required</sup> <a name="group_by_field_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.property.groupByFieldName"></a>

```python
group_by_field_name: str
```

- *Type:* str

---

##### `is_hidden`<sup>Required</sup> <a name="is_hidden" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.property.isHidden"></a>

```python
is_hidden: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `scim_filter`<sup>Required</sup> <a name="scim_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.property.scimFilter"></a>

```python
scim_filter: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummaryOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummary
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummary">DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsSummary</a>

---


### DataOciDataSafeReportDefinitionsReportDefinitionCollectionList <a name="DataOciDataSafeReportDefinitionsReportDefinitionCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_report_definitions

dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference <a name="DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_report_definitions

dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsList">DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollection">DataOciDataSafeReportDefinitionsReportDefinitionCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.property.items"></a>

```python
items: DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsList">DataOciDataSafeReportDefinitionsReportDefinitionCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeReportDefinitionsReportDefinitionCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeReportDefinitions.DataOciDataSafeReportDefinitionsReportDefinitionCollection">DataOciDataSafeReportDefinitionsReportDefinitionCollection</a>

---



