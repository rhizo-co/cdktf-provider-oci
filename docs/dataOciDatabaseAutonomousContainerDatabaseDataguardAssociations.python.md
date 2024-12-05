# `dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations` Submodule <a name="`dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations <a name="DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_dataguard_associations oci_database_autonomous_container_database_dataguard_associations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_container_database_dataguard_associations

dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  autonomous_container_database_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.Initializer.parameter.autonomousContainerDatabaseId">autonomous_container_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_dataguard_associations#autonomous_container_database_id DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations#autonomous_container_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_dataguard_associations#id DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `autonomous_container_database_id`<sup>Required</sup> <a name="autonomous_container_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.Initializer.parameter.autonomousContainerDatabaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_dataguard_associations#autonomous_container_database_id DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations#autonomous_container_database_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_dataguard_associations#filter DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_dataguard_associations#id DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_container_database_dataguard_associations

dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_container_database_dataguard_associations

dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_container_database_dataguard_associations

dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_container_database_dataguard_associations

dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_dataguard_associations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.autonomousContainerDatabaseDataguardAssociations">autonomous_container_database_dataguard_associations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.autonomousContainerDatabaseIdInput">autonomous_container_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.autonomousContainerDatabaseId">autonomous_container_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `autonomous_container_database_dataguard_associations`<sup>Required</sup> <a name="autonomous_container_database_dataguard_associations" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.autonomousContainerDatabaseDataguardAssociations"></a>

```python
autonomous_container_database_dataguard_associations: DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.filter"></a>

```python
filter: DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList</a>

---

##### `autonomous_container_database_id_input`<sup>Optional</sup> <a name="autonomous_container_database_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.autonomousContainerDatabaseIdInput"></a>

```python
autonomous_container_database_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `autonomous_container_database_id`<sup>Required</sup> <a name="autonomous_container_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.autonomousContainerDatabaseId"></a>

```python
autonomous_container_database_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociations <a name="DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociations" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_container_database_dataguard_associations

dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociations()
```


### DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfig <a name="DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_container_database_dataguard_associations

dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfig()
```


### DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails <a name="DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_container_database_dataguard_associations

dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails()
```


### DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig <a name="DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_container_database_dataguard_associations

dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  autonomous_container_database_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig.property.autonomousContainerDatabaseId">autonomous_container_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_dataguard_associations#autonomous_container_database_id DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations#autonomous_container_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_dataguard_associations#id DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `autonomous_container_database_id`<sup>Required</sup> <a name="autonomous_container_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig.property.autonomousContainerDatabaseId"></a>

```python
autonomous_container_database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_dataguard_associations#autonomous_container_database_id DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations#autonomous_container_database_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_dataguard_associations#filter DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_dataguard_associations#id DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter <a name="DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_container_database_dataguard_associations

dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_dataguard_associations#name DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_dataguard_associations#values DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_dataguard_associations#regex DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_dataguard_associations#name DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_dataguard_associations#values DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_dataguard_associations#regex DataOciDatabaseAutonomousContainerDatabaseDataguardAssociations#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList <a name="DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_container_database_dataguard_associations

dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference <a name="DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_container_database_dataguard_associations

dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.applyLag">apply_lag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.applyRate">apply_rate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.autonomousContainerDatabaseDataguardAssociationId">autonomous_container_database_dataguard_association_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.autonomousContainerDatabaseId">autonomous_container_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.fastStartFailOverLagLimitInSeconds">fast_start_fail_over_lag_limit_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.isAutomaticFailoverEnabled">is_automatic_failover_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.peerAutonomousContainerDatabaseBackupConfig">peer_autonomous_container_database_backup_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.peerAutonomousContainerDatabaseCompartmentId">peer_autonomous_container_database_compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.peerAutonomousContainerDatabaseDataguardAssociationId">peer_autonomous_container_database_dataguard_association_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.peerAutonomousContainerDatabaseDisplayName">peer_autonomous_container_database_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.peerAutonomousContainerDatabaseId">peer_autonomous_container_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.peerAutonomousVmClusterId">peer_autonomous_vm_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.peerCloudAutonomousVmClusterId">peer_cloud_autonomous_vm_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.peerDbUniqueName">peer_db_unique_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.peerLifecycleState">peer_lifecycle_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.peerRole">peer_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.protectionMode">protection_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.standbyMaintenanceBufferInDays">standby_maintenance_buffer_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.timeLastRoleChanged">time_last_role_changed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.timeLastSynced">time_last_synced</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.transportLag">transport_lag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociations">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `apply_lag`<sup>Required</sup> <a name="apply_lag" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.applyLag"></a>

```python
apply_lag: str
```

- *Type:* str

---

##### `apply_rate`<sup>Required</sup> <a name="apply_rate" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.applyRate"></a>

```python
apply_rate: str
```

- *Type:* str

---

##### `autonomous_container_database_dataguard_association_id`<sup>Required</sup> <a name="autonomous_container_database_dataguard_association_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.autonomousContainerDatabaseDataguardAssociationId"></a>

```python
autonomous_container_database_dataguard_association_id: str
```

- *Type:* str

---

##### `autonomous_container_database_id`<sup>Required</sup> <a name="autonomous_container_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.autonomousContainerDatabaseId"></a>

```python
autonomous_container_database_id: str
```

- *Type:* str

---

##### `fast_start_fail_over_lag_limit_in_seconds`<sup>Required</sup> <a name="fast_start_fail_over_lag_limit_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.fastStartFailOverLagLimitInSeconds"></a>

```python
fast_start_fail_over_lag_limit_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_automatic_failover_enabled`<sup>Required</sup> <a name="is_automatic_failover_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.isAutomaticFailoverEnabled"></a>

```python
is_automatic_failover_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `peer_autonomous_container_database_backup_config`<sup>Required</sup> <a name="peer_autonomous_container_database_backup_config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.peerAutonomousContainerDatabaseBackupConfig"></a>

```python
peer_autonomous_container_database_backup_config: DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList</a>

---

##### `peer_autonomous_container_database_compartment_id`<sup>Required</sup> <a name="peer_autonomous_container_database_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.peerAutonomousContainerDatabaseCompartmentId"></a>

```python
peer_autonomous_container_database_compartment_id: str
```

- *Type:* str

---

##### `peer_autonomous_container_database_dataguard_association_id`<sup>Required</sup> <a name="peer_autonomous_container_database_dataguard_association_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.peerAutonomousContainerDatabaseDataguardAssociationId"></a>

```python
peer_autonomous_container_database_dataguard_association_id: str
```

- *Type:* str

---

##### `peer_autonomous_container_database_display_name`<sup>Required</sup> <a name="peer_autonomous_container_database_display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.peerAutonomousContainerDatabaseDisplayName"></a>

```python
peer_autonomous_container_database_display_name: str
```

- *Type:* str

---

##### `peer_autonomous_container_database_id`<sup>Required</sup> <a name="peer_autonomous_container_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.peerAutonomousContainerDatabaseId"></a>

```python
peer_autonomous_container_database_id: str
```

- *Type:* str

---

##### `peer_autonomous_vm_cluster_id`<sup>Required</sup> <a name="peer_autonomous_vm_cluster_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.peerAutonomousVmClusterId"></a>

```python
peer_autonomous_vm_cluster_id: str
```

- *Type:* str

---

##### `peer_cloud_autonomous_vm_cluster_id`<sup>Required</sup> <a name="peer_cloud_autonomous_vm_cluster_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.peerCloudAutonomousVmClusterId"></a>

```python
peer_cloud_autonomous_vm_cluster_id: str
```

- *Type:* str

---

##### `peer_db_unique_name`<sup>Required</sup> <a name="peer_db_unique_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.peerDbUniqueName"></a>

```python
peer_db_unique_name: str
```

- *Type:* str

---

##### `peer_lifecycle_state`<sup>Required</sup> <a name="peer_lifecycle_state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.peerLifecycleState"></a>

```python
peer_lifecycle_state: str
```

- *Type:* str

---

##### `peer_role`<sup>Required</sup> <a name="peer_role" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.peerRole"></a>

```python
peer_role: str
```

- *Type:* str

---

##### `protection_mode`<sup>Required</sup> <a name="protection_mode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.protectionMode"></a>

```python
protection_mode: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `standby_maintenance_buffer_in_days`<sup>Required</sup> <a name="standby_maintenance_buffer_in_days" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.standbyMaintenanceBufferInDays"></a>

```python
standby_maintenance_buffer_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_last_role_changed`<sup>Required</sup> <a name="time_last_role_changed" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.timeLastRoleChanged"></a>

```python
time_last_role_changed: str
```

- *Type:* str

---

##### `time_last_synced`<sup>Required</sup> <a name="time_last_synced" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.timeLastSynced"></a>

```python
time_last_synced: str
```

- *Type:* str

---

##### `transport_lag`<sup>Required</sup> <a name="transport_lag" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.transportLag"></a>

```python
transport_lag: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociations">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociations</a>

---


### DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList <a name="DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_container_database_dataguard_associations

dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference <a name="DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_container_database_dataguard_associations

dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.dbrsPolicyId">dbrs_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.internetProxy">internet_proxy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcPassword">vpc_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcUser">vpc_user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dbrs_policy_id`<sup>Required</sup> <a name="dbrs_policy_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.dbrsPolicyId"></a>

```python
dbrs_policy_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internet_proxy`<sup>Required</sup> <a name="internet_proxy" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.internetProxy"></a>

```python
internet_proxy: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `vpc_password`<sup>Required</sup> <a name="vpc_password" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcPassword"></a>

```python
vpc_password: str
```

- *Type:* str

---

##### `vpc_user`<sup>Required</sup> <a name="vpc_user" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcUser"></a>

```python
vpc_user: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails</a>

---


### DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList <a name="DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_container_database_dataguard_associations

dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference <a name="DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_container_database_dataguard_associations

dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.backupDestinationDetails">backup_destination_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.recoveryWindowInDays">recovery_window_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfig">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup_destination_details`<sup>Required</sup> <a name="backup_destination_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.backupDestinationDetails"></a>

```python
backup_destination_details: DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList</a>

---

##### `recovery_window_in_days`<sup>Required</sup> <a name="recovery_window_in_days" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.recoveryWindowInDays"></a>

```python
recovery_window_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfig">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsAutonomousContainerDatabaseDataguardAssociationsPeerAutonomousContainerDatabaseBackupConfig</a>

---


### DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList <a name="DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_container_database_dataguard_associations

dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter</a>]]

---


### DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference <a name="DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_container_database_dataguard_associations

dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseDataguardAssociations.DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter">DataOciDatabaseAutonomousContainerDatabaseDataguardAssociationsFilter</a>]

---



