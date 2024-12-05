# `dataOciDatabaseAutonomousDatabasesClones` Submodule <a name="`dataOciDatabaseAutonomousDatabasesClones` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseAutonomousDatabasesClones <a name="DataOciDatabaseAutonomousDatabasesClones" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases_clones oci_database_autonomous_databases_clones}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  autonomous_database_id: str,
  compartment_id: str,
  clone_type: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseAutonomousDatabasesClonesFilter]] = None,
  id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.Initializer.parameter.autonomousDatabaseId">autonomous_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases_clones#autonomous_database_id DataOciDatabaseAutonomousDatabasesClones#autonomous_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases_clones#compartment_id DataOciDatabaseAutonomousDatabasesClones#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.Initializer.parameter.cloneType">clone_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases_clones#clone_type DataOciDatabaseAutonomousDatabasesClones#clone_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases_clones#display_name DataOciDatabaseAutonomousDatabasesClones#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilter">DataOciDatabaseAutonomousDatabasesClonesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases_clones#id DataOciDatabaseAutonomousDatabasesClones#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases_clones#state DataOciDatabaseAutonomousDatabasesClones#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `autonomous_database_id`<sup>Required</sup> <a name="autonomous_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.Initializer.parameter.autonomousDatabaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases_clones#autonomous_database_id DataOciDatabaseAutonomousDatabasesClones#autonomous_database_id}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases_clones#compartment_id DataOciDatabaseAutonomousDatabasesClones#compartment_id}.

---

##### `clone_type`<sup>Optional</sup> <a name="clone_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.Initializer.parameter.cloneType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases_clones#clone_type DataOciDatabaseAutonomousDatabasesClones#clone_type}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases_clones#display_name DataOciDatabaseAutonomousDatabasesClones#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilter">DataOciDatabaseAutonomousDatabasesClonesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases_clones#filter DataOciDatabaseAutonomousDatabasesClones#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases_clones#id DataOciDatabaseAutonomousDatabasesClones#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases_clones#state DataOciDatabaseAutonomousDatabasesClones#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.resetCloneType">reset_clone_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatabaseAutonomousDatabasesClonesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilter">DataOciDatabaseAutonomousDatabasesClonesFilter</a>]]

---

##### `reset_clone_type` <a name="reset_clone_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.resetCloneType"></a>

```python
def reset_clone_type() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseAutonomousDatabasesClones resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseAutonomousDatabasesClones resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseAutonomousDatabasesClones to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseAutonomousDatabasesClones that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases_clones#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseAutonomousDatabasesClones to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.property.autonomousDatabases">autonomous_databases</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesList">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterList">DataOciDatabaseAutonomousDatabasesClonesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.property.autonomousDatabaseIdInput">autonomous_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.property.cloneTypeInput">clone_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilter">DataOciDatabaseAutonomousDatabasesClonesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.property.autonomousDatabaseId">autonomous_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.property.cloneType">clone_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `autonomous_databases`<sup>Required</sup> <a name="autonomous_databases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.property.autonomousDatabases"></a>

```python
autonomous_databases: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesList">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.property.filter"></a>

```python
filter: DataOciDatabaseAutonomousDatabasesClonesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterList">DataOciDatabaseAutonomousDatabasesClonesFilterList</a>

---

##### `autonomous_database_id_input`<sup>Optional</sup> <a name="autonomous_database_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.property.autonomousDatabaseIdInput"></a>

```python
autonomous_database_id_input: str
```

- *Type:* str

---

##### `clone_type_input`<sup>Optional</sup> <a name="clone_type_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.property.cloneTypeInput"></a>

```python
clone_type_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatabaseAutonomousDatabasesClonesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilter">DataOciDatabaseAutonomousDatabasesClonesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `autonomous_database_id`<sup>Required</sup> <a name="autonomous_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.property.autonomousDatabaseId"></a>

```python
autonomous_database_id: str
```

- *Type:* str

---

##### `clone_type`<sup>Required</sup> <a name="clone_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.property.cloneType"></a>

```python
clone_type: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClones.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabases <a name="DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabases"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabases.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabases()
```


### DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetails <a name="DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetails()
```


### DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfig <a name="DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfig()
```


### DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStrings <a name="DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStrings" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStrings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStrings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStrings()
```


### DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfiles <a name="DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfiles" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfiles"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfiles.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfiles()
```


### DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrls <a name="DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrls" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrls"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrls.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrls()
```


### DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContacts <a name="DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContacts" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContacts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContacts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContacts()
```


### DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetails <a name="DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetails()
```


### DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKey <a name="DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKey"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKey.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKey()
```


### DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntry <a name="DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntry" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntry"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntry.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntry()
```


### DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKey <a name="DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKey"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKey.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKey()
```


### DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntry <a name="DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntry" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntry"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntry.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntry()
```


### DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDb <a name="DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDb" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDb"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDb.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDb()
```


### DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupSchedule <a name="DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupSchedule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupSchedule.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupSchedule()
```


### DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrls <a name="DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrls" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrls"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrls.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrls()
```


### DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfiguration <a name="DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfiguration()
```


### DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummary <a name="DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummary" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummary"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummary.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummary()
```


### DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperations <a name="DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperations" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperations()
```


### DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeek <a name="DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeek" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeek"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeek.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeek()
```


### DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDb <a name="DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDb" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDb"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDb.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDb()
```


### DataOciDatabaseAutonomousDatabasesClonesConfig <a name="DataOciDatabaseAutonomousDatabasesClonesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  autonomous_database_id: str,
  compartment_id: str,
  clone_type: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseAutonomousDatabasesClonesFilter]] = None,
  id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesConfig.property.autonomousDatabaseId">autonomous_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases_clones#autonomous_database_id DataOciDatabaseAutonomousDatabasesClones#autonomous_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases_clones#compartment_id DataOciDatabaseAutonomousDatabasesClones#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesConfig.property.cloneType">clone_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases_clones#clone_type DataOciDatabaseAutonomousDatabasesClones#clone_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases_clones#display_name DataOciDatabaseAutonomousDatabasesClones#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilter">DataOciDatabaseAutonomousDatabasesClonesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases_clones#id DataOciDatabaseAutonomousDatabasesClones#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases_clones#state DataOciDatabaseAutonomousDatabasesClones#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `autonomous_database_id`<sup>Required</sup> <a name="autonomous_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesConfig.property.autonomousDatabaseId"></a>

```python
autonomous_database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases_clones#autonomous_database_id DataOciDatabaseAutonomousDatabasesClones#autonomous_database_id}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases_clones#compartment_id DataOciDatabaseAutonomousDatabasesClones#compartment_id}.

---

##### `clone_type`<sup>Optional</sup> <a name="clone_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesConfig.property.cloneType"></a>

```python
clone_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases_clones#clone_type DataOciDatabaseAutonomousDatabasesClones#clone_type}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases_clones#display_name DataOciDatabaseAutonomousDatabasesClones#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatabaseAutonomousDatabasesClonesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilter">DataOciDatabaseAutonomousDatabasesClonesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases_clones#filter DataOciDatabaseAutonomousDatabasesClones#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases_clones#id DataOciDatabaseAutonomousDatabasesClones#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases_clones#state DataOciDatabaseAutonomousDatabasesClones#state}.

---

### DataOciDatabaseAutonomousDatabasesClonesFilter <a name="DataOciDatabaseAutonomousDatabasesClonesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases_clones#name DataOciDatabaseAutonomousDatabasesClones#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases_clones#values DataOciDatabaseAutonomousDatabasesClones#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases_clones#regex DataOciDatabaseAutonomousDatabasesClones#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases_clones#name DataOciDatabaseAutonomousDatabasesClones#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases_clones#values DataOciDatabaseAutonomousDatabasesClones#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases_clones#regex DataOciDatabaseAutonomousDatabasesClones#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsList <a name="DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsOutputReference <a name="DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsOutputReference.property.apexVersion">apex_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsOutputReference.property.ordsVersion">ords_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetails">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `apex_version`<sup>Required</sup> <a name="apex_version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsOutputReference.property.apexVersion"></a>

```python
apex_version: str
```

- *Type:* str

---

##### `ords_version`<sup>Required</sup> <a name="ords_version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsOutputReference.property.ordsVersion"></a>

```python
ords_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetails">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetails</a>

---


### DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigList <a name="DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigOutputReference <a name="DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigOutputReference.property.manualBackupBucketName">manual_backup_bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigOutputReference.property.manualBackupType">manual_backup_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfig">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `manual_backup_bucket_name`<sup>Required</sup> <a name="manual_backup_bucket_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigOutputReference.property.manualBackupBucketName"></a>

```python
manual_backup_bucket_name: str
```

- *Type:* str

---

##### `manual_backup_type`<sup>Required</sup> <a name="manual_backup_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigOutputReference.property.manualBackupType"></a>

```python
manual_backup_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfig">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfig</a>

---


### DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsList <a name="DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference <a name="DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference.property.allConnectionStrings">all_connection_strings</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference.property.dedicated">dedicated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference.property.high">high</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference.property.low">low</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference.property.medium">medium</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference.property.profiles">profiles</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesList">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStrings">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStrings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `all_connection_strings`<sup>Required</sup> <a name="all_connection_strings" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference.property.allConnectionStrings"></a>

```python
all_connection_strings: StringMap
```

- *Type:* cdktf.StringMap

---

##### `dedicated`<sup>Required</sup> <a name="dedicated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference.property.dedicated"></a>

```python
dedicated: str
```

- *Type:* str

---

##### `high`<sup>Required</sup> <a name="high" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference.property.high"></a>

```python
high: str
```

- *Type:* str

---

##### `low`<sup>Required</sup> <a name="low" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference.property.low"></a>

```python
low: str
```

- *Type:* str

---

##### `medium`<sup>Required</sup> <a name="medium" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference.property.medium"></a>

```python
medium: str
```

- *Type:* str

---

##### `profiles`<sup>Required</sup> <a name="profiles" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference.property.profiles"></a>

```python
profiles: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesList">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStrings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStrings">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStrings</a>

---


### DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesList <a name="DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference <a name="DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.consumerGroup">consumer_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.hostFormat">host_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.isRegional">is_regional</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.sessionMode">session_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.syntaxFormat">syntax_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.tlsAuthentication">tls_authentication</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfiles">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfiles</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `consumer_group`<sup>Required</sup> <a name="consumer_group" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.consumerGroup"></a>

```python
consumer_group: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `host_format`<sup>Required</sup> <a name="host_format" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.hostFormat"></a>

```python
host_format: str
```

- *Type:* str

---

##### `is_regional`<sup>Required</sup> <a name="is_regional" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.isRegional"></a>

```python
is_regional: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `session_mode`<sup>Required</sup> <a name="session_mode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.sessionMode"></a>

```python
session_mode: str
```

- *Type:* str

---

##### `syntax_format`<sup>Required</sup> <a name="syntax_format" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.syntaxFormat"></a>

```python
syntax_format: str
```

- *Type:* str

---

##### `tls_authentication`<sup>Required</sup> <a name="tls_authentication" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.tlsAuthentication"></a>

```python
tls_authentication: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfiles
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfiles">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsProfiles</a>

---


### DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsList <a name="DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference <a name="DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.property.apexUrl">apex_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.property.databaseTransformsUrl">database_transforms_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.property.graphStudioUrl">graph_studio_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.property.machineLearningNotebookUrl">machine_learning_notebook_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.property.machineLearningUserManagementUrl">machine_learning_user_management_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.property.mongoDbUrl">mongo_db_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.property.ordsUrl">ords_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.property.sqlDevWebUrl">sql_dev_web_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrls">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrls</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `apex_url`<sup>Required</sup> <a name="apex_url" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.property.apexUrl"></a>

```python
apex_url: str
```

- *Type:* str

---

##### `database_transforms_url`<sup>Required</sup> <a name="database_transforms_url" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.property.databaseTransformsUrl"></a>

```python
database_transforms_url: str
```

- *Type:* str

---

##### `graph_studio_url`<sup>Required</sup> <a name="graph_studio_url" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.property.graphStudioUrl"></a>

```python
graph_studio_url: str
```

- *Type:* str

---

##### `machine_learning_notebook_url`<sup>Required</sup> <a name="machine_learning_notebook_url" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.property.machineLearningNotebookUrl"></a>

```python
machine_learning_notebook_url: str
```

- *Type:* str

---

##### `machine_learning_user_management_url`<sup>Required</sup> <a name="machine_learning_user_management_url" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.property.machineLearningUserManagementUrl"></a>

```python
machine_learning_user_management_url: str
```

- *Type:* str

---

##### `mongo_db_url`<sup>Required</sup> <a name="mongo_db_url" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.property.mongoDbUrl"></a>

```python
mongo_db_url: str
```

- *Type:* str

---

##### `ords_url`<sup>Required</sup> <a name="ords_url" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.property.ordsUrl"></a>

```python
ords_url: str
```

- *Type:* str

---

##### `sql_dev_web_url`<sup>Required</sup> <a name="sql_dev_web_url" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.property.sqlDevWebUrl"></a>

```python
sql_dev_web_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrls
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrls">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrls</a>

---


### DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsList <a name="DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsOutputReference <a name="DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContacts">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContacts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContacts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContacts">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContacts</a>

---


### DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsList <a name="DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference <a name="DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference.property.computeCount">compute_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference.property.isEnabled">is_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference.property.maxIdleTimeInMinutes">max_idle_time_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetails">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compute_count`<sup>Required</sup> <a name="compute_count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference.property.computeCount"></a>

```python
compute_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference.property.isEnabled"></a>

```python
is_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `max_idle_time_in_minutes`<sup>Required</sup> <a name="max_idle_time_in_minutes" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference.property.maxIdleTimeInMinutes"></a>

```python
max_idle_time_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetails">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetails</a>

---


### DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList <a name="DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference <a name="DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.arnRole">arn_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.autonomousDatabasesCloneProvider">autonomous_databases_clone_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.certificateDirectoryName">certificate_directory_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.certificateId">certificate_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.directoryName">directory_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.keyArn">key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.keyName">key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.okvKmsKey">okv_kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.okvUri">okv_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.serviceEndpointUri">service_endpoint_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.vaultId">vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.vaultUri">vault_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKey">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn_role`<sup>Required</sup> <a name="arn_role" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.arnRole"></a>

```python
arn_role: str
```

- *Type:* str

---

##### `autonomous_databases_clone_provider`<sup>Required</sup> <a name="autonomous_databases_clone_provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.autonomousDatabasesCloneProvider"></a>

```python
autonomous_databases_clone_provider: str
```

- *Type:* str

---

##### `certificate_directory_name`<sup>Required</sup> <a name="certificate_directory_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.certificateDirectoryName"></a>

```python
certificate_directory_name: str
```

- *Type:* str

---

##### `certificate_id`<sup>Required</sup> <a name="certificate_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.certificateId"></a>

```python
certificate_id: str
```

- *Type:* str

---

##### `directory_name`<sup>Required</sup> <a name="directory_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.directoryName"></a>

```python
directory_name: str
```

- *Type:* str

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `key_arn`<sup>Required</sup> <a name="key_arn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.keyArn"></a>

```python
key_arn: str
```

- *Type:* str

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `okv_kms_key`<sup>Required</sup> <a name="okv_kms_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.okvKmsKey"></a>

```python
okv_kms_key: str
```

- *Type:* str

---

##### `okv_uri`<sup>Required</sup> <a name="okv_uri" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.okvUri"></a>

```python
okv_uri: str
```

- *Type:* str

---

##### `service_endpoint_uri`<sup>Required</sup> <a name="service_endpoint_uri" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.serviceEndpointUri"></a>

```python
service_endpoint_uri: str
```

- *Type:* str

---

##### `vault_id`<sup>Required</sup> <a name="vault_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.vaultId"></a>

```python
vault_id: str
```

- *Type:* str

---

##### `vault_uri`<sup>Required</sup> <a name="vault_uri" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.vaultUri"></a>

```python
vault_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKey
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKey">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKey</a>

---


### DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryList <a name="DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference <a name="DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.property.encryptionKey">encryption_key</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.property.timeActivated">time_activated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntry">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntry</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_key`<sup>Required</sup> <a name="encryption_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.property.encryptionKey"></a>

```python
encryption_key: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList</a>

---

##### `time_activated`<sup>Required</sup> <a name="time_activated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.property.timeActivated"></a>

```python
time_activated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntry
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntry">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntry</a>

---


### DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyList <a name="DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference <a name="DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.property.arnRole">arn_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.property.autonomousDatabasesCloneProvider">autonomous_databases_clone_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.property.certificateDirectoryName">certificate_directory_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.property.certificateId">certificate_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.property.directoryName">directory_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.property.keyArn">key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.property.keyName">key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.property.okvKmsKey">okv_kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.property.okvUri">okv_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.property.serviceEndpointUri">service_endpoint_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.property.vaultId">vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.property.vaultUri">vault_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKey">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn_role`<sup>Required</sup> <a name="arn_role" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.property.arnRole"></a>

```python
arn_role: str
```

- *Type:* str

---

##### `autonomous_databases_clone_provider`<sup>Required</sup> <a name="autonomous_databases_clone_provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.property.autonomousDatabasesCloneProvider"></a>

```python
autonomous_databases_clone_provider: str
```

- *Type:* str

---

##### `certificate_directory_name`<sup>Required</sup> <a name="certificate_directory_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.property.certificateDirectoryName"></a>

```python
certificate_directory_name: str
```

- *Type:* str

---

##### `certificate_id`<sup>Required</sup> <a name="certificate_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.property.certificateId"></a>

```python
certificate_id: str
```

- *Type:* str

---

##### `directory_name`<sup>Required</sup> <a name="directory_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.property.directoryName"></a>

```python
directory_name: str
```

- *Type:* str

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `key_arn`<sup>Required</sup> <a name="key_arn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.property.keyArn"></a>

```python
key_arn: str
```

- *Type:* str

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `okv_kms_key`<sup>Required</sup> <a name="okv_kms_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.property.okvKmsKey"></a>

```python
okv_kms_key: str
```

- *Type:* str

---

##### `okv_uri`<sup>Required</sup> <a name="okv_uri" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.property.okvUri"></a>

```python
okv_uri: str
```

- *Type:* str

---

##### `service_endpoint_uri`<sup>Required</sup> <a name="service_endpoint_uri" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.property.serviceEndpointUri"></a>

```python
service_endpoint_uri: str
```

- *Type:* str

---

##### `vault_id`<sup>Required</sup> <a name="vault_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.property.vaultId"></a>

```python
vault_id: str
```

- *Type:* str

---

##### `vault_uri`<sup>Required</sup> <a name="vault_uri" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.property.vaultUri"></a>

```python
vault_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKey
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKey">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKey</a>

---


### DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryList <a name="DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference <a name="DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference.property.kmsKeyVersionId">kms_key_version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference.property.timeActivated">time_activated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference.property.vaultId">vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntry">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntry</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kms_key_version_id`<sup>Required</sup> <a name="kms_key_version_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference.property.kmsKeyVersionId"></a>

```python
kms_key_version_id: str
```

- *Type:* str

---

##### `time_activated`<sup>Required</sup> <a name="time_activated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference.property.timeActivated"></a>

```python
time_activated: str
```

- *Type:* str

---

##### `vault_id`<sup>Required</sup> <a name="vault_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference.property.vaultId"></a>

```python
vault_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntry
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntry">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntry</a>

---


### DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesList <a name="DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbList <a name="DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference <a name="DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference.property.lagTimeInSeconds">lag_time_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference.property.timeDataGuardRoleChanged">time_data_guard_role_changed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference.property.timeDisasterRecoveryRoleChanged">time_disaster_recovery_role_changed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDb">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDb</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `lag_time_in_seconds`<sup>Required</sup> <a name="lag_time_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference.property.lagTimeInSeconds"></a>

```python
lag_time_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_data_guard_role_changed`<sup>Required</sup> <a name="time_data_guard_role_changed" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference.property.timeDataGuardRoleChanged"></a>

```python
time_data_guard_role_changed: str
```

- *Type:* str

---

##### `time_disaster_recovery_role_changed`<sup>Required</sup> <a name="time_disaster_recovery_role_changed" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference.property.timeDisasterRecoveryRoleChanged"></a>

```python
time_disaster_recovery_role_changed: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDb
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDb">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDb</a>

---


### DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleList <a name="DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference <a name="DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference.property.isDisabled">is_disabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference.property.repeatCadence">repeat_cadence</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference.property.retentionPeriodInDays">retention_period_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference.property.timeOfBackup">time_of_backup</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupSchedule">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_disabled`<sup>Required</sup> <a name="is_disabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference.property.isDisabled"></a>

```python
is_disabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `repeat_cadence`<sup>Required</sup> <a name="repeat_cadence" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference.property.repeatCadence"></a>

```python
repeat_cadence: str
```

- *Type:* str

---

##### `retention_period_in_days`<sup>Required</sup> <a name="retention_period_in_days" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference.property.retentionPeriodInDays"></a>

```python
retention_period_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_of_backup`<sup>Required</sup> <a name="time_of_backup" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference.property.timeOfBackup"></a>

```python
time_of_backup: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupSchedule
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupSchedule">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupSchedule</a>

---


### DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference <a name="DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.actualUsedDataStorageSizeInTbs">actual_used_data_storage_size_in_tbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.allocatedStorageSizeInTbs">allocated_storage_size_in_tbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.apexDetails">apex_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsList">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.arePrimaryWhitelistedIpsUsed">are_primary_whitelisted_ips_used</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.autonomousContainerDatabaseId">autonomous_container_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.autonomousMaintenanceScheduleType">autonomous_maintenance_schedule_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.autoRefreshFrequencyInSeconds">auto_refresh_frequency_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.autoRefreshPointLagInSeconds">auto_refresh_point_lag_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.availableUpgradeVersions">available_upgrade_versions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.backupConfig">backup_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigList">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.backupRetentionPeriodInDays">backup_retention_period_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.byolComputeCountLimit">byol_compute_count_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.characterSet">character_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.clusterPlacementGroupId">cluster_placement_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.computeCount">compute_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.computeModel">compute_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.connectionStrings">connection_strings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsList">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.connectionUrls">connection_urls</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsList">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.cpuCoreCount">cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.customerContacts">customer_contacts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsList">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.databaseEdition">database_edition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.databaseManagementStatus">database_management_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.dataguardRegionType">dataguard_region_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.dataSafeStatus">data_safe_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.dataStorageSizeInGb">data_storage_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.dataStorageSizeInTbs">data_storage_size_in_tbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.dbName">db_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.dbToolsDetails">db_tools_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsList">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.dbVersion">db_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.dbWorkload">db_workload</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.disasterRecoveryRegionType">disaster_recovery_region_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.encryptionKey">encryption_key</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyList">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.encryptionKeyHistoryEntry">encryption_key_history_entry</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryList">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.failedDataRecoveryInSeconds">failed_data_recovery_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.infrastructureType">infrastructure_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.inMemoryAreaInGbs">in_memory_area_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.inMemoryPercentage">in_memory_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.isAccessControlEnabled">is_access_control_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.isAutoScalingEnabled">is_auto_scaling_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.isAutoScalingForStorageEnabled">is_auto_scaling_for_storage_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.isDataGuardEnabled">is_data_guard_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.isDedicated">is_dedicated</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.isDevTier">is_dev_tier</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.isFreeTier">is_free_tier</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.isLocalDataGuardEnabled">is_local_data_guard_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.isMtlsConnectionRequired">is_mtls_connection_required</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.isPreview">is_preview</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.isReconnectCloneEnabled">is_reconnect_clone_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.isRefreshableClone">is_refreshable_clone</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.isRemoteDataGuardEnabled">is_remote_data_guard_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.keyHistoryEntry">key_history_entry</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryList">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.keyStoreId">key_store_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.keyStoreWalletName">key_store_wallet_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.kmsKeyLifecycleDetails">kms_key_lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.kmsKeyVersionId">kms_key_version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.licenseModel">license_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.localAdgAutoFailoverMaxDataLossLimit">local_adg_auto_failover_max_data_loss_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.localDisasterRecoveryType">local_disaster_recovery_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.localStandbyDb">local_standby_db</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbList">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.longTermBackupSchedule">long_term_backup_schedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleList">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.maxCpuCoreCount">max_cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.memoryPerOracleComputeUnitInGbs">memory_per_oracle_compute_unit_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.ncharacterSet">ncharacter_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.netServicesArchitecture">net_services_architecture</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.nextLongTermBackupTimeStamp">next_long_term_backup_time_stamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.ocpuCount">ocpu_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.openMode">open_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.peerDbIds">peer_db_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.privateEndpoint">private_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.privateEndpointIp">private_endpoint_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.privateEndpointLabel">private_endpoint_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.provisionableCpus">provisionable_cpus</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.publicConnectionUrls">public_connection_urls</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsList">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.publicEndpoint">public_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.refreshableMode">refreshable_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.refreshableStatus">refreshable_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.remoteDisasterRecoveryConfiguration">remote_disaster_recovery_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.resourcePoolLeaderId">resource_pool_leader_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.resourcePoolSummary">resource_pool_summary</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryList">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.scheduledOperations">scheduled_operations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsList">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.securityAttributes">security_attributes</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.serviceConsoleUrl">service_console_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.sourceId">source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.standbyDb">standby_db</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbList">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.standbyWhitelistedIps">standby_whitelisted_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.supportedRegionsToCloneTo">supported_regions_to_clone_to</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.timeDataGuardRoleChanged">time_data_guard_role_changed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.timeDeletionOfFreeAutonomousDatabase">time_deletion_of_free_autonomous_database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.timeDisasterRecoveryRoleChanged">time_disaster_recovery_role_changed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.timeLocalDataGuardEnabled">time_local_data_guard_enabled</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.timeMaintenanceBegin">time_maintenance_begin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.timeMaintenanceEnd">time_maintenance_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.timeOfAutoRefreshStart">time_of_auto_refresh_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.timeOfJoiningResourcePool">time_of_joining_resource_pool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.timeOfLastFailover">time_of_last_failover</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.timeOfLastRefresh">time_of_last_refresh</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.timeOfLastRefreshPoint">time_of_last_refresh_point</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.timeOfLastSwitchover">time_of_last_switchover</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.timeOfNextRefresh">time_of_next_refresh</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.timeReclamationOfFreeAutonomousDatabase">time_reclamation_of_free_autonomous_database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.timeUndeleted">time_undeleted</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.timeUntilReconnectCloneEnabled">time_until_reconnect_clone_enabled</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.totalBackupStorageSizeInGbs">total_backup_storage_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.usedDataStorageSizeInGbs">used_data_storage_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.usedDataStorageSizeInTbs">used_data_storage_size_in_tbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.vaultId">vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.whitelistedIps">whitelisted_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabases">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabases</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `actual_used_data_storage_size_in_tbs`<sup>Required</sup> <a name="actual_used_data_storage_size_in_tbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.actualUsedDataStorageSizeInTbs"></a>

```python
actual_used_data_storage_size_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allocated_storage_size_in_tbs`<sup>Required</sup> <a name="allocated_storage_size_in_tbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.allocatedStorageSizeInTbs"></a>

```python
allocated_storage_size_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `apex_details`<sup>Required</sup> <a name="apex_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.apexDetails"></a>

```python
apex_details: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsList">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesApexDetailsList</a>

---

##### `are_primary_whitelisted_ips_used`<sup>Required</sup> <a name="are_primary_whitelisted_ips_used" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.arePrimaryWhitelistedIpsUsed"></a>

```python
are_primary_whitelisted_ips_used: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `autonomous_container_database_id`<sup>Required</sup> <a name="autonomous_container_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.autonomousContainerDatabaseId"></a>

```python
autonomous_container_database_id: str
```

- *Type:* str

---

##### `autonomous_maintenance_schedule_type`<sup>Required</sup> <a name="autonomous_maintenance_schedule_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.autonomousMaintenanceScheduleType"></a>

```python
autonomous_maintenance_schedule_type: str
```

- *Type:* str

---

##### `auto_refresh_frequency_in_seconds`<sup>Required</sup> <a name="auto_refresh_frequency_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.autoRefreshFrequencyInSeconds"></a>

```python
auto_refresh_frequency_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `auto_refresh_point_lag_in_seconds`<sup>Required</sup> <a name="auto_refresh_point_lag_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.autoRefreshPointLagInSeconds"></a>

```python
auto_refresh_point_lag_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `available_upgrade_versions`<sup>Required</sup> <a name="available_upgrade_versions" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.availableUpgradeVersions"></a>

```python
available_upgrade_versions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `backup_config`<sup>Required</sup> <a name="backup_config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.backupConfig"></a>

```python
backup_config: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigList">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesBackupConfigList</a>

---

##### `backup_retention_period_in_days`<sup>Required</sup> <a name="backup_retention_period_in_days" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.backupRetentionPeriodInDays"></a>

```python
backup_retention_period_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `byol_compute_count_limit`<sup>Required</sup> <a name="byol_compute_count_limit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.byolComputeCountLimit"></a>

```python
byol_compute_count_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `character_set`<sup>Required</sup> <a name="character_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.characterSet"></a>

```python
character_set: str
```

- *Type:* str

---

##### `cluster_placement_group_id`<sup>Required</sup> <a name="cluster_placement_group_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.clusterPlacementGroupId"></a>

```python
cluster_placement_group_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compute_count`<sup>Required</sup> <a name="compute_count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.computeCount"></a>

```python
compute_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compute_model`<sup>Required</sup> <a name="compute_model" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.computeModel"></a>

```python
compute_model: str
```

- *Type:* str

---

##### `connection_strings`<sup>Required</sup> <a name="connection_strings" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.connectionStrings"></a>

```python
connection_strings: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsList">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionStringsList</a>

---

##### `connection_urls`<sup>Required</sup> <a name="connection_urls" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.connectionUrls"></a>

```python
connection_urls: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsList">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesConnectionUrlsList</a>

---

##### `cpu_core_count`<sup>Required</sup> <a name="cpu_core_count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.cpuCoreCount"></a>

```python
cpu_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `customer_contacts`<sup>Required</sup> <a name="customer_contacts" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.customerContacts"></a>

```python
customer_contacts: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsList">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesCustomerContactsList</a>

---

##### `database_edition`<sup>Required</sup> <a name="database_edition" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.databaseEdition"></a>

```python
database_edition: str
```

- *Type:* str

---

##### `database_management_status`<sup>Required</sup> <a name="database_management_status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.databaseManagementStatus"></a>

```python
database_management_status: str
```

- *Type:* str

---

##### `dataguard_region_type`<sup>Required</sup> <a name="dataguard_region_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.dataguardRegionType"></a>

```python
dataguard_region_type: str
```

- *Type:* str

---

##### `data_safe_status`<sup>Required</sup> <a name="data_safe_status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.dataSafeStatus"></a>

```python
data_safe_status: str
```

- *Type:* str

---

##### `data_storage_size_in_gb`<sup>Required</sup> <a name="data_storage_size_in_gb" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.dataStorageSizeInGb"></a>

```python
data_storage_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_storage_size_in_tbs`<sup>Required</sup> <a name="data_storage_size_in_tbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.dataStorageSizeInTbs"></a>

```python
data_storage_size_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_name`<sup>Required</sup> <a name="db_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.dbName"></a>

```python
db_name: str
```

- *Type:* str

---

##### `db_tools_details`<sup>Required</sup> <a name="db_tools_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.dbToolsDetails"></a>

```python
db_tools_details: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsList">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesDbToolsDetailsList</a>

---

##### `db_version`<sup>Required</sup> <a name="db_version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.dbVersion"></a>

```python
db_version: str
```

- *Type:* str

---

##### `db_workload`<sup>Required</sup> <a name="db_workload" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.dbWorkload"></a>

```python
db_workload: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `disaster_recovery_region_type`<sup>Required</sup> <a name="disaster_recovery_region_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.disasterRecoveryRegionType"></a>

```python
disaster_recovery_region_type: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `encryption_key`<sup>Required</sup> <a name="encryption_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.encryptionKey"></a>

```python
encryption_key: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyList">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyList</a>

---

##### `encryption_key_history_entry`<sup>Required</sup> <a name="encryption_key_history_entry" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.encryptionKeyHistoryEntry"></a>

```python
encryption_key_history_entry: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryList">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesEncryptionKeyHistoryEntryList</a>

---

##### `failed_data_recovery_in_seconds`<sup>Required</sup> <a name="failed_data_recovery_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.failedDataRecoveryInSeconds"></a>

```python
failed_data_recovery_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `infrastructure_type`<sup>Required</sup> <a name="infrastructure_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.infrastructureType"></a>

```python
infrastructure_type: str
```

- *Type:* str

---

##### `in_memory_area_in_gbs`<sup>Required</sup> <a name="in_memory_area_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.inMemoryAreaInGbs"></a>

```python
in_memory_area_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `in_memory_percentage`<sup>Required</sup> <a name="in_memory_percentage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.inMemoryPercentage"></a>

```python
in_memory_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_access_control_enabled`<sup>Required</sup> <a name="is_access_control_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.isAccessControlEnabled"></a>

```python
is_access_control_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_auto_scaling_enabled`<sup>Required</sup> <a name="is_auto_scaling_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.isAutoScalingEnabled"></a>

```python
is_auto_scaling_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_auto_scaling_for_storage_enabled`<sup>Required</sup> <a name="is_auto_scaling_for_storage_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.isAutoScalingForStorageEnabled"></a>

```python
is_auto_scaling_for_storage_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_data_guard_enabled`<sup>Required</sup> <a name="is_data_guard_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.isDataGuardEnabled"></a>

```python
is_data_guard_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_dedicated`<sup>Required</sup> <a name="is_dedicated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.isDedicated"></a>

```python
is_dedicated: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_dev_tier`<sup>Required</sup> <a name="is_dev_tier" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.isDevTier"></a>

```python
is_dev_tier: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_free_tier`<sup>Required</sup> <a name="is_free_tier" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.isFreeTier"></a>

```python
is_free_tier: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_local_data_guard_enabled`<sup>Required</sup> <a name="is_local_data_guard_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.isLocalDataGuardEnabled"></a>

```python
is_local_data_guard_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_mtls_connection_required`<sup>Required</sup> <a name="is_mtls_connection_required" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.isMtlsConnectionRequired"></a>

```python
is_mtls_connection_required: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_preview`<sup>Required</sup> <a name="is_preview" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.isPreview"></a>

```python
is_preview: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_reconnect_clone_enabled`<sup>Required</sup> <a name="is_reconnect_clone_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.isReconnectCloneEnabled"></a>

```python
is_reconnect_clone_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_refreshable_clone`<sup>Required</sup> <a name="is_refreshable_clone" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.isRefreshableClone"></a>

```python
is_refreshable_clone: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_remote_data_guard_enabled`<sup>Required</sup> <a name="is_remote_data_guard_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.isRemoteDataGuardEnabled"></a>

```python
is_remote_data_guard_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `key_history_entry`<sup>Required</sup> <a name="key_history_entry" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.keyHistoryEntry"></a>

```python
key_history_entry: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryList">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesKeyHistoryEntryList</a>

---

##### `key_store_id`<sup>Required</sup> <a name="key_store_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.keyStoreId"></a>

```python
key_store_id: str
```

- *Type:* str

---

##### `key_store_wallet_name`<sup>Required</sup> <a name="key_store_wallet_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.keyStoreWalletName"></a>

```python
key_store_wallet_name: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `kms_key_lifecycle_details`<sup>Required</sup> <a name="kms_key_lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.kmsKeyLifecycleDetails"></a>

```python
kms_key_lifecycle_details: str
```

- *Type:* str

---

##### `kms_key_version_id`<sup>Required</sup> <a name="kms_key_version_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.kmsKeyVersionId"></a>

```python
kms_key_version_id: str
```

- *Type:* str

---

##### `license_model`<sup>Required</sup> <a name="license_model" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `local_adg_auto_failover_max_data_loss_limit`<sup>Required</sup> <a name="local_adg_auto_failover_max_data_loss_limit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.localAdgAutoFailoverMaxDataLossLimit"></a>

```python
local_adg_auto_failover_max_data_loss_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `local_disaster_recovery_type`<sup>Required</sup> <a name="local_disaster_recovery_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.localDisasterRecoveryType"></a>

```python
local_disaster_recovery_type: str
```

- *Type:* str

---

##### `local_standby_db`<sup>Required</sup> <a name="local_standby_db" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.localStandbyDb"></a>

```python
local_standby_db: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbList">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLocalStandbyDbList</a>

---

##### `long_term_backup_schedule`<sup>Required</sup> <a name="long_term_backup_schedule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.longTermBackupSchedule"></a>

```python
long_term_backup_schedule: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleList">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesLongTermBackupScheduleList</a>

---

##### `max_cpu_core_count`<sup>Required</sup> <a name="max_cpu_core_count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.maxCpuCoreCount"></a>

```python
max_cpu_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_per_oracle_compute_unit_in_gbs`<sup>Required</sup> <a name="memory_per_oracle_compute_unit_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.memoryPerOracleComputeUnitInGbs"></a>

```python
memory_per_oracle_compute_unit_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ncharacter_set`<sup>Required</sup> <a name="ncharacter_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.ncharacterSet"></a>

```python
ncharacter_set: str
```

- *Type:* str

---

##### `net_services_architecture`<sup>Required</sup> <a name="net_services_architecture" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.netServicesArchitecture"></a>

```python
net_services_architecture: str
```

- *Type:* str

---

##### `next_long_term_backup_time_stamp`<sup>Required</sup> <a name="next_long_term_backup_time_stamp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.nextLongTermBackupTimeStamp"></a>

```python
next_long_term_backup_time_stamp: str
```

- *Type:* str

---

##### `nsg_ids`<sup>Required</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ocpu_count`<sup>Required</sup> <a name="ocpu_count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.ocpuCount"></a>

```python
ocpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `open_mode`<sup>Required</sup> <a name="open_mode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.openMode"></a>

```python
open_mode: str
```

- *Type:* str

---

##### `peer_db_ids`<sup>Required</sup> <a name="peer_db_ids" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.peerDbIds"></a>

```python
peer_db_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `private_endpoint`<sup>Required</sup> <a name="private_endpoint" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.privateEndpoint"></a>

```python
private_endpoint: str
```

- *Type:* str

---

##### `private_endpoint_ip`<sup>Required</sup> <a name="private_endpoint_ip" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.privateEndpointIp"></a>

```python
private_endpoint_ip: str
```

- *Type:* str

---

##### `private_endpoint_label`<sup>Required</sup> <a name="private_endpoint_label" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.privateEndpointLabel"></a>

```python
private_endpoint_label: str
```

- *Type:* str

---

##### `provisionable_cpus`<sup>Required</sup> <a name="provisionable_cpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.provisionableCpus"></a>

```python
provisionable_cpus: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `public_connection_urls`<sup>Required</sup> <a name="public_connection_urls" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.publicConnectionUrls"></a>

```python
public_connection_urls: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsList">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsList</a>

---

##### `public_endpoint`<sup>Required</sup> <a name="public_endpoint" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.publicEndpoint"></a>

```python
public_endpoint: str
```

- *Type:* str

---

##### `refreshable_mode`<sup>Required</sup> <a name="refreshable_mode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.refreshableMode"></a>

```python
refreshable_mode: str
```

- *Type:* str

---

##### `refreshable_status`<sup>Required</sup> <a name="refreshable_status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.refreshableStatus"></a>

```python
refreshable_status: str
```

- *Type:* str

---

##### `remote_disaster_recovery_configuration`<sup>Required</sup> <a name="remote_disaster_recovery_configuration" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.remoteDisasterRecoveryConfiguration"></a>

```python
remote_disaster_recovery_configuration: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList</a>

---

##### `resource_pool_leader_id`<sup>Required</sup> <a name="resource_pool_leader_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.resourcePoolLeaderId"></a>

```python
resource_pool_leader_id: str
```

- *Type:* str

---

##### `resource_pool_summary`<sup>Required</sup> <a name="resource_pool_summary" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.resourcePoolSummary"></a>

```python
resource_pool_summary: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryList">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryList</a>

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `scheduled_operations`<sup>Required</sup> <a name="scheduled_operations" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.scheduledOperations"></a>

```python
scheduled_operations: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsList">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsList</a>

---

##### `security_attributes`<sup>Required</sup> <a name="security_attributes" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.securityAttributes"></a>

```python
security_attributes: StringMap
```

- *Type:* cdktf.StringMap

---

##### `service_console_url`<sup>Required</sup> <a name="service_console_url" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.serviceConsoleUrl"></a>

```python
service_console_url: str
```

- *Type:* str

---

##### `source_id`<sup>Required</sup> <a name="source_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.sourceId"></a>

```python
source_id: str
```

- *Type:* str

---

##### `standby_db`<sup>Required</sup> <a name="standby_db" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.standbyDb"></a>

```python
standby_db: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbList">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbList</a>

---

##### `standby_whitelisted_ips`<sup>Required</sup> <a name="standby_whitelisted_ips" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.standbyWhitelistedIps"></a>

```python
standby_whitelisted_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

##### `supported_regions_to_clone_to`<sup>Required</sup> <a name="supported_regions_to_clone_to" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.supportedRegionsToCloneTo"></a>

```python
supported_regions_to_clone_to: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_data_guard_role_changed`<sup>Required</sup> <a name="time_data_guard_role_changed" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.timeDataGuardRoleChanged"></a>

```python
time_data_guard_role_changed: str
```

- *Type:* str

---

##### `time_deletion_of_free_autonomous_database`<sup>Required</sup> <a name="time_deletion_of_free_autonomous_database" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.timeDeletionOfFreeAutonomousDatabase"></a>

```python
time_deletion_of_free_autonomous_database: str
```

- *Type:* str

---

##### `time_disaster_recovery_role_changed`<sup>Required</sup> <a name="time_disaster_recovery_role_changed" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.timeDisasterRecoveryRoleChanged"></a>

```python
time_disaster_recovery_role_changed: str
```

- *Type:* str

---

##### `time_local_data_guard_enabled`<sup>Required</sup> <a name="time_local_data_guard_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.timeLocalDataGuardEnabled"></a>

```python
time_local_data_guard_enabled: str
```

- *Type:* str

---

##### `time_maintenance_begin`<sup>Required</sup> <a name="time_maintenance_begin" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.timeMaintenanceBegin"></a>

```python
time_maintenance_begin: str
```

- *Type:* str

---

##### `time_maintenance_end`<sup>Required</sup> <a name="time_maintenance_end" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.timeMaintenanceEnd"></a>

```python
time_maintenance_end: str
```

- *Type:* str

---

##### `time_of_auto_refresh_start`<sup>Required</sup> <a name="time_of_auto_refresh_start" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.timeOfAutoRefreshStart"></a>

```python
time_of_auto_refresh_start: str
```

- *Type:* str

---

##### `time_of_joining_resource_pool`<sup>Required</sup> <a name="time_of_joining_resource_pool" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.timeOfJoiningResourcePool"></a>

```python
time_of_joining_resource_pool: str
```

- *Type:* str

---

##### `time_of_last_failover`<sup>Required</sup> <a name="time_of_last_failover" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.timeOfLastFailover"></a>

```python
time_of_last_failover: str
```

- *Type:* str

---

##### `time_of_last_refresh`<sup>Required</sup> <a name="time_of_last_refresh" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.timeOfLastRefresh"></a>

```python
time_of_last_refresh: str
```

- *Type:* str

---

##### `time_of_last_refresh_point`<sup>Required</sup> <a name="time_of_last_refresh_point" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.timeOfLastRefreshPoint"></a>

```python
time_of_last_refresh_point: str
```

- *Type:* str

---

##### `time_of_last_switchover`<sup>Required</sup> <a name="time_of_last_switchover" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.timeOfLastSwitchover"></a>

```python
time_of_last_switchover: str
```

- *Type:* str

---

##### `time_of_next_refresh`<sup>Required</sup> <a name="time_of_next_refresh" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.timeOfNextRefresh"></a>

```python
time_of_next_refresh: str
```

- *Type:* str

---

##### `time_reclamation_of_free_autonomous_database`<sup>Required</sup> <a name="time_reclamation_of_free_autonomous_database" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.timeReclamationOfFreeAutonomousDatabase"></a>

```python
time_reclamation_of_free_autonomous_database: str
```

- *Type:* str

---

##### `time_undeleted`<sup>Required</sup> <a name="time_undeleted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.timeUndeleted"></a>

```python
time_undeleted: str
```

- *Type:* str

---

##### `time_until_reconnect_clone_enabled`<sup>Required</sup> <a name="time_until_reconnect_clone_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.timeUntilReconnectCloneEnabled"></a>

```python
time_until_reconnect_clone_enabled: str
```

- *Type:* str

---

##### `total_backup_storage_size_in_gbs`<sup>Required</sup> <a name="total_backup_storage_size_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.totalBackupStorageSizeInGbs"></a>

```python
total_backup_storage_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `used_data_storage_size_in_gbs`<sup>Required</sup> <a name="used_data_storage_size_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.usedDataStorageSizeInGbs"></a>

```python
used_data_storage_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `used_data_storage_size_in_tbs`<sup>Required</sup> <a name="used_data_storage_size_in_tbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.usedDataStorageSizeInTbs"></a>

```python
used_data_storage_size_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vault_id`<sup>Required</sup> <a name="vault_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.vaultId"></a>

```python
vault_id: str
```

- *Type:* str

---

##### `whitelisted_ips`<sup>Required</sup> <a name="whitelisted_ips" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.whitelistedIps"></a>

```python
whitelisted_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabases
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabases">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabases</a>

---


### DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsList <a name="DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference <a name="DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.apexUrl">apex_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.databaseTransformsUrl">database_transforms_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.graphStudioUrl">graph_studio_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.machineLearningNotebookUrl">machine_learning_notebook_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.machineLearningUserManagementUrl">machine_learning_user_management_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.mongoDbUrl">mongo_db_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.ordsUrl">ords_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.sqlDevWebUrl">sql_dev_web_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrls">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrls</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `apex_url`<sup>Required</sup> <a name="apex_url" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.apexUrl"></a>

```python
apex_url: str
```

- *Type:* str

---

##### `database_transforms_url`<sup>Required</sup> <a name="database_transforms_url" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.databaseTransformsUrl"></a>

```python
database_transforms_url: str
```

- *Type:* str

---

##### `graph_studio_url`<sup>Required</sup> <a name="graph_studio_url" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.graphStudioUrl"></a>

```python
graph_studio_url: str
```

- *Type:* str

---

##### `machine_learning_notebook_url`<sup>Required</sup> <a name="machine_learning_notebook_url" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.machineLearningNotebookUrl"></a>

```python
machine_learning_notebook_url: str
```

- *Type:* str

---

##### `machine_learning_user_management_url`<sup>Required</sup> <a name="machine_learning_user_management_url" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.machineLearningUserManagementUrl"></a>

```python
machine_learning_user_management_url: str
```

- *Type:* str

---

##### `mongo_db_url`<sup>Required</sup> <a name="mongo_db_url" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.mongoDbUrl"></a>

```python
mongo_db_url: str
```

- *Type:* str

---

##### `ords_url`<sup>Required</sup> <a name="ords_url" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.ordsUrl"></a>

```python
ords_url: str
```

- *Type:* str

---

##### `sql_dev_web_url`<sup>Required</sup> <a name="sql_dev_web_url" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.sqlDevWebUrl"></a>

```python
sql_dev_web_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrls
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrls">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesPublicConnectionUrls</a>

---


### DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList <a name="DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference <a name="DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.property.disasterRecoveryType">disaster_recovery_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.property.isReplicateAutomaticBackups">is_replicate_automatic_backups</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.property.isSnapshotStandby">is_snapshot_standby</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.property.timeSnapshotStandbyEnabledTill">time_snapshot_standby_enabled_till</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfiguration">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disaster_recovery_type`<sup>Required</sup> <a name="disaster_recovery_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.property.disasterRecoveryType"></a>

```python
disaster_recovery_type: str
```

- *Type:* str

---

##### `is_replicate_automatic_backups`<sup>Required</sup> <a name="is_replicate_automatic_backups" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.property.isReplicateAutomaticBackups"></a>

```python
is_replicate_automatic_backups: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_snapshot_standby`<sup>Required</sup> <a name="is_snapshot_standby" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.property.isSnapshotStandby"></a>

```python
is_snapshot_standby: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `time_snapshot_standby_enabled_till`<sup>Required</sup> <a name="time_snapshot_standby_enabled_till" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.property.timeSnapshotStandbyEnabledTill"></a>

```python
time_snapshot_standby_enabled_till: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfiguration">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesRemoteDisasterRecoveryConfiguration</a>

---


### DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryList <a name="DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryOutputReference <a name="DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryOutputReference.property.isDisabled">is_disabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryOutputReference.property.poolSize">pool_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummary">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummary</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_disabled`<sup>Required</sup> <a name="is_disabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryOutputReference.property.isDisabled"></a>

```python
is_disabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `pool_size`<sup>Required</sup> <a name="pool_size" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryOutputReference.property.poolSize"></a>

```python
pool_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummaryOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummary
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummary">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesResourcePoolSummary</a>

---


### DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekList <a name="DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference <a name="DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeek">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeek</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeek
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeek">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeek</a>

---


### DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsList <a name="DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsOutputReference <a name="DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsOutputReference.property.dayOfWeek">day_of_week</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekList">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsOutputReference.property.scheduledStartTime">scheduled_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsOutputReference.property.scheduledStopTime">scheduled_stop_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperations">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsOutputReference.property.dayOfWeek"></a>

```python
day_of_week: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekList">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsDayOfWeekList</a>

---

##### `scheduled_start_time`<sup>Required</sup> <a name="scheduled_start_time" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsOutputReference.property.scheduledStartTime"></a>

```python
scheduled_start_time: str
```

- *Type:* str

---

##### `scheduled_stop_time`<sup>Required</sup> <a name="scheduled_stop_time" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsOutputReference.property.scheduledStopTime"></a>

```python
scheduled_stop_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperationsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperations">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesScheduledOperations</a>

---


### DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbList <a name="DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference <a name="DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference.property.lagTimeInSeconds">lag_time_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference.property.timeDataGuardRoleChanged">time_data_guard_role_changed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference.property.timeDisasterRecoveryRoleChanged">time_disaster_recovery_role_changed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDb">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDb</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `lag_time_in_seconds`<sup>Required</sup> <a name="lag_time_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference.property.lagTimeInSeconds"></a>

```python
lag_time_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_data_guard_role_changed`<sup>Required</sup> <a name="time_data_guard_role_changed" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference.property.timeDataGuardRoleChanged"></a>

```python
time_data_guard_role_changed: str
```

- *Type:* str

---

##### `time_disaster_recovery_role_changed`<sup>Required</sup> <a name="time_disaster_recovery_role_changed" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference.property.timeDisasterRecoveryRoleChanged"></a>

```python
time_disaster_recovery_role_changed: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDbOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDb
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDb">DataOciDatabaseAutonomousDatabasesClonesAutonomousDatabasesStandbyDb</a>

---


### DataOciDatabaseAutonomousDatabasesClonesFilterList <a name="DataOciDatabaseAutonomousDatabasesClonesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilter">DataOciDatabaseAutonomousDatabasesClonesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatabaseAutonomousDatabasesClonesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilter">DataOciDatabaseAutonomousDatabasesClonesFilter</a>]]

---


### DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference <a name="DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases_clones

dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilter">DataOciDatabaseAutonomousDatabasesClonesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatabaseAutonomousDatabasesClonesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabasesClones.DataOciDatabaseAutonomousDatabasesClonesFilter">DataOciDatabaseAutonomousDatabasesClonesFilter</a>]

---



