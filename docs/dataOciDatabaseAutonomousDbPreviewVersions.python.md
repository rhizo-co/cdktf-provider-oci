# `dataOciDatabaseAutonomousDbPreviewVersions` Submodule <a name="`dataOciDatabaseAutonomousDbPreviewVersions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseAutonomousDbPreviewVersions <a name="DataOciDatabaseAutonomousDbPreviewVersions" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_db_preview_versions oci_database_autonomous_db_preview_versions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_db_preview_versions

dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions(
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
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseAutonomousDbPreviewVersionsFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_db_preview_versions#compartment_id DataOciDatabaseAutonomousDbPreviewVersions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilter">DataOciDatabaseAutonomousDbPreviewVersionsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_db_preview_versions#id DataOciDatabaseAutonomousDbPreviewVersions#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_db_preview_versions#compartment_id DataOciDatabaseAutonomousDbPreviewVersions#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilter">DataOciDatabaseAutonomousDbPreviewVersionsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_db_preview_versions#filter DataOciDatabaseAutonomousDbPreviewVersions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_db_preview_versions#id DataOciDatabaseAutonomousDbPreviewVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatabaseAutonomousDbPreviewVersionsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilter">DataOciDatabaseAutonomousDbPreviewVersionsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseAutonomousDbPreviewVersions resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_db_preview_versions

dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_db_preview_versions

dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_db_preview_versions

dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_db_preview_versions

dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseAutonomousDbPreviewVersions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseAutonomousDbPreviewVersions to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseAutonomousDbPreviewVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_db_preview_versions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseAutonomousDbPreviewVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.autonomousDbPreviewVersions">autonomous_db_preview_versions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsList">DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterList">DataOciDatabaseAutonomousDbPreviewVersionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilter">DataOciDatabaseAutonomousDbPreviewVersionsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `autonomous_db_preview_versions`<sup>Required</sup> <a name="autonomous_db_preview_versions" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.autonomousDbPreviewVersions"></a>

```python
autonomous_db_preview_versions: DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsList">DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.filter"></a>

```python
filter: DataOciDatabaseAutonomousDbPreviewVersionsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterList">DataOciDatabaseAutonomousDbPreviewVersionsFilterList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatabaseAutonomousDbPreviewVersionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilter">DataOciDatabaseAutonomousDbPreviewVersionsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersions <a name="DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersions" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_db_preview_versions

dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersions()
```


### DataOciDatabaseAutonomousDbPreviewVersionsConfig <a name="DataOciDatabaseAutonomousDbPreviewVersionsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_db_preview_versions

dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseAutonomousDbPreviewVersionsFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_db_preview_versions#compartment_id DataOciDatabaseAutonomousDbPreviewVersions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilter">DataOciDatabaseAutonomousDbPreviewVersionsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_db_preview_versions#id DataOciDatabaseAutonomousDbPreviewVersions#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_db_preview_versions#compartment_id DataOciDatabaseAutonomousDbPreviewVersions#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatabaseAutonomousDbPreviewVersionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilter">DataOciDatabaseAutonomousDbPreviewVersionsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_db_preview_versions#filter DataOciDatabaseAutonomousDbPreviewVersions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_db_preview_versions#id DataOciDatabaseAutonomousDbPreviewVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseAutonomousDbPreviewVersionsFilter <a name="DataOciDatabaseAutonomousDbPreviewVersionsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_db_preview_versions

dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_db_preview_versions#name DataOciDatabaseAutonomousDbPreviewVersions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_db_preview_versions#values DataOciDatabaseAutonomousDbPreviewVersions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_db_preview_versions#regex DataOciDatabaseAutonomousDbPreviewVersions#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_db_preview_versions#name DataOciDatabaseAutonomousDbPreviewVersions#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_db_preview_versions#values DataOciDatabaseAutonomousDbPreviewVersions#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_db_preview_versions#regex DataOciDatabaseAutonomousDbPreviewVersions#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsList <a name="DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_db_preview_versions

dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference <a name="DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_db_preview_versions

dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.property.dbWorkload">db_workload</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.property.details">details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.property.timePreviewBegin">time_preview_begin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.property.timePreviewEnd">time_preview_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersions">DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `db_workload`<sup>Required</sup> <a name="db_workload" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.property.dbWorkload"></a>

```python
db_workload: str
```

- *Type:* str

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.property.details"></a>

```python
details: str
```

- *Type:* str

---

##### `time_preview_begin`<sup>Required</sup> <a name="time_preview_begin" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.property.timePreviewBegin"></a>

```python
time_preview_begin: str
```

- *Type:* str

---

##### `time_preview_end`<sup>Required</sup> <a name="time_preview_end" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.property.timePreviewEnd"></a>

```python
time_preview_end: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersions">DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersions</a>

---


### DataOciDatabaseAutonomousDbPreviewVersionsFilterList <a name="DataOciDatabaseAutonomousDbPreviewVersionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_db_preview_versions

dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilter">DataOciDatabaseAutonomousDbPreviewVersionsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatabaseAutonomousDbPreviewVersionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilter">DataOciDatabaseAutonomousDbPreviewVersionsFilter</a>]]

---


### DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference <a name="DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_db_preview_versions

dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilter">DataOciDatabaseAutonomousDbPreviewVersionsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatabaseAutonomousDbPreviewVersionsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilter">DataOciDatabaseAutonomousDbPreviewVersionsFilter</a>]

---



