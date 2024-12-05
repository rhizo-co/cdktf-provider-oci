# `dataOciDatabaseAutonomousDatabaseRefreshableClones` Submodule <a name="`dataOciDatabaseAutonomousDatabaseRefreshableClones` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseAutonomousDatabaseRefreshableClones <a name="DataOciDatabaseAutonomousDatabaseRefreshableClones" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_refreshable_clones oci_database_autonomous_database_refreshable_clones}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database_refreshable_clones

dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones(
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
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.Initializer.parameter.autonomousDatabaseId">autonomous_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_refreshable_clones#autonomous_database_id DataOciDatabaseAutonomousDatabaseRefreshableClones#autonomous_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter">DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_refreshable_clones#id DataOciDatabaseAutonomousDatabaseRefreshableClones#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `autonomous_database_id`<sup>Required</sup> <a name="autonomous_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.Initializer.parameter.autonomousDatabaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_refreshable_clones#autonomous_database_id DataOciDatabaseAutonomousDatabaseRefreshableClones#autonomous_database_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter">DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_refreshable_clones#filter DataOciDatabaseAutonomousDatabaseRefreshableClones#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_refreshable_clones#id DataOciDatabaseAutonomousDatabaseRefreshableClones#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter">DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseAutonomousDatabaseRefreshableClones resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database_refreshable_clones

dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database_refreshable_clones

dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database_refreshable_clones

dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database_refreshable_clones

dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseAutonomousDatabaseRefreshableClones resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseAutonomousDatabaseRefreshableClones to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseAutonomousDatabaseRefreshableClones that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_refreshable_clones#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseAutonomousDatabaseRefreshableClones to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList">DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.refreshableCloneCollection">refreshable_clone_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList">DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.autonomousDatabaseIdInput">autonomous_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter">DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.autonomousDatabaseId">autonomous_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.filter"></a>

```python
filter: DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList">DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList</a>

---

##### `refreshable_clone_collection`<sup>Required</sup> <a name="refreshable_clone_collection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.refreshableCloneCollection"></a>

```python
refreshable_clone_collection: DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList">DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList</a>

---

##### `autonomous_database_id_input`<sup>Optional</sup> <a name="autonomous_database_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.autonomousDatabaseIdInput"></a>

```python
autonomous_database_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter">DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `autonomous_database_id`<sup>Required</sup> <a name="autonomous_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.autonomousDatabaseId"></a>

```python
autonomous_database_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig <a name="DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database_refreshable_clones

dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  autonomous_database_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig.property.autonomousDatabaseId">autonomous_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_refreshable_clones#autonomous_database_id DataOciDatabaseAutonomousDatabaseRefreshableClones#autonomous_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter">DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_refreshable_clones#id DataOciDatabaseAutonomousDatabaseRefreshableClones#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `autonomous_database_id`<sup>Required</sup> <a name="autonomous_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig.property.autonomousDatabaseId"></a>

```python
autonomous_database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_refreshable_clones#autonomous_database_id DataOciDatabaseAutonomousDatabaseRefreshableClones#autonomous_database_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter">DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_refreshable_clones#filter DataOciDatabaseAutonomousDatabaseRefreshableClones#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_refreshable_clones#id DataOciDatabaseAutonomousDatabaseRefreshableClones#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter <a name="DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database_refreshable_clones

dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_refreshable_clones#name DataOciDatabaseAutonomousDatabaseRefreshableClones#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_refreshable_clones#values DataOciDatabaseAutonomousDatabaseRefreshableClones#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_refreshable_clones#regex DataOciDatabaseAutonomousDatabaseRefreshableClones#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_refreshable_clones#name DataOciDatabaseAutonomousDatabaseRefreshableClones#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_refreshable_clones#values DataOciDatabaseAutonomousDatabaseRefreshableClones#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_refreshable_clones#regex DataOciDatabaseAutonomousDatabaseRefreshableClones#regex}.

---

### DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollection <a name="DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database_refreshable_clones

dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollection()
```


### DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItems <a name="DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database_refreshable_clones

dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList <a name="DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database_refreshable_clones

dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter">DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter">DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter</a>]]

---


### DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference <a name="DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database_refreshable_clones

dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter">DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter">DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter</a>]

---


### DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList <a name="DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database_refreshable_clones

dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference <a name="DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database_refreshable_clones

dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItems">DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItems">DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItems</a>

---


### DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList <a name="DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database_refreshable_clones

dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference <a name="DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_database_refreshable_clones

dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList">DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollection">DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.property.items"></a>

```python
items: DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList">DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollection">DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollection</a>

---



