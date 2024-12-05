# `dataOciDatabaseAutonomousContainerDatabaseVersions` Submodule <a name="`dataOciDatabaseAutonomousContainerDatabaseVersions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseAutonomousContainerDatabaseVersions <a name="DataOciDatabaseAutonomousContainerDatabaseVersions" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_versions oci_database_autonomous_container_database_versions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_container_database_versions

dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions(
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
  service_component: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseAutonomousContainerDatabaseVersionsFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_versions#compartment_id DataOciDatabaseAutonomousContainerDatabaseVersions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.Initializer.parameter.serviceComponent">service_component</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_versions#service_component DataOciDatabaseAutonomousContainerDatabaseVersions#service_component}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilter">DataOciDatabaseAutonomousContainerDatabaseVersionsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_versions#id DataOciDatabaseAutonomousContainerDatabaseVersions#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_versions#compartment_id DataOciDatabaseAutonomousContainerDatabaseVersions#compartment_id}.

---

##### `service_component`<sup>Required</sup> <a name="service_component" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.Initializer.parameter.serviceComponent"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_versions#service_component DataOciDatabaseAutonomousContainerDatabaseVersions#service_component}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilter">DataOciDatabaseAutonomousContainerDatabaseVersionsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_versions#filter DataOciDatabaseAutonomousContainerDatabaseVersions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_versions#id DataOciDatabaseAutonomousContainerDatabaseVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatabaseAutonomousContainerDatabaseVersionsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilter">DataOciDatabaseAutonomousContainerDatabaseVersionsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseAutonomousContainerDatabaseVersions resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_container_database_versions

dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_container_database_versions

dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_container_database_versions

dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_container_database_versions

dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseAutonomousContainerDatabaseVersions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseAutonomousContainerDatabaseVersions to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseAutonomousContainerDatabaseVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_versions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseAutonomousContainerDatabaseVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.autonomousContainerDatabaseVersions">autonomous_container_database_versions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList">DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList">DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilter">DataOciDatabaseAutonomousContainerDatabaseVersionsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.serviceComponentInput">service_component_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.serviceComponent">service_component</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `autonomous_container_database_versions`<sup>Required</sup> <a name="autonomous_container_database_versions" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.autonomousContainerDatabaseVersions"></a>

```python
autonomous_container_database_versions: DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList">DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.filter"></a>

```python
filter: DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList">DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatabaseAutonomousContainerDatabaseVersionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilter">DataOciDatabaseAutonomousContainerDatabaseVersionsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `service_component_input`<sup>Optional</sup> <a name="service_component_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.serviceComponentInput"></a>

```python
service_component_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `service_component`<sup>Required</sup> <a name="service_component" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.serviceComponent"></a>

```python
service_component: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersions <a name="DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersions" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_container_database_versions

dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersions()
```


### DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedApps <a name="DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedApps" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedApps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedApps.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_container_database_versions

dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedApps()
```


### DataOciDatabaseAutonomousContainerDatabaseVersionsConfig <a name="DataOciDatabaseAutonomousContainerDatabaseVersionsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_container_database_versions

dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  service_component: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseAutonomousContainerDatabaseVersionsFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_versions#compartment_id DataOciDatabaseAutonomousContainerDatabaseVersions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.property.serviceComponent">service_component</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_versions#service_component DataOciDatabaseAutonomousContainerDatabaseVersions#service_component}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilter">DataOciDatabaseAutonomousContainerDatabaseVersionsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_versions#id DataOciDatabaseAutonomousContainerDatabaseVersions#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_versions#compartment_id DataOciDatabaseAutonomousContainerDatabaseVersions#compartment_id}.

---

##### `service_component`<sup>Required</sup> <a name="service_component" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.property.serviceComponent"></a>

```python
service_component: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_versions#service_component DataOciDatabaseAutonomousContainerDatabaseVersions#service_component}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatabaseAutonomousContainerDatabaseVersionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilter">DataOciDatabaseAutonomousContainerDatabaseVersionsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_versions#filter DataOciDatabaseAutonomousContainerDatabaseVersions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_versions#id DataOciDatabaseAutonomousContainerDatabaseVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseAutonomousContainerDatabaseVersionsFilter <a name="DataOciDatabaseAutonomousContainerDatabaseVersionsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_container_database_versions

dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_versions#name DataOciDatabaseAutonomousContainerDatabaseVersions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_versions#values DataOciDatabaseAutonomousContainerDatabaseVersions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_versions#regex DataOciDatabaseAutonomousContainerDatabaseVersions#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_versions#name DataOciDatabaseAutonomousContainerDatabaseVersions#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_versions#values DataOciDatabaseAutonomousContainerDatabaseVersions#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_versions#regex DataOciDatabaseAutonomousContainerDatabaseVersions#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList <a name="DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_container_database_versions

dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference <a name="DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_container_database_versions

dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.property.details">details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.property.supportedApps">supported_apps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList">DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersions">DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.property.details"></a>

```python
details: str
```

- *Type:* str

---

##### `supported_apps`<sup>Required</sup> <a name="supported_apps" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.property.supportedApps"></a>

```python
supported_apps: DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList">DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList</a>

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersions">DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersions</a>

---


### DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList <a name="DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_container_database_versions

dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference <a name="DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_container_database_versions

dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.property.endOfSupport">end_of_support</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.property.isCertified">is_certified</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.property.releaseDate">release_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.property.supportedAppName">supported_app_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedApps">DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedApps</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_of_support`<sup>Required</sup> <a name="end_of_support" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.property.endOfSupport"></a>

```python
end_of_support: str
```

- *Type:* str

---

##### `is_certified`<sup>Required</sup> <a name="is_certified" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.property.isCertified"></a>

```python
is_certified: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `release_date`<sup>Required</sup> <a name="release_date" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.property.releaseDate"></a>

```python
release_date: str
```

- *Type:* str

---

##### `supported_app_name`<sup>Required</sup> <a name="supported_app_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.property.supportedAppName"></a>

```python
supported_app_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedApps
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedApps">DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedApps</a>

---


### DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList <a name="DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_container_database_versions

dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilter">DataOciDatabaseAutonomousContainerDatabaseVersionsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatabaseAutonomousContainerDatabaseVersionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilter">DataOciDatabaseAutonomousContainerDatabaseVersionsFilter</a>]]

---


### DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference <a name="DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_container_database_versions

dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilter">DataOciDatabaseAutonomousContainerDatabaseVersionsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatabaseAutonomousContainerDatabaseVersionsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilter">DataOciDatabaseAutonomousContainerDatabaseVersionsFilter</a>]

---


