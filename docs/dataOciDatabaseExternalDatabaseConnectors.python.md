# `dataOciDatabaseExternalDatabaseConnectors` Submodule <a name="`dataOciDatabaseExternalDatabaseConnectors` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseExternalDatabaseConnectors <a name="DataOciDatabaseExternalDatabaseConnectors" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors oci_database_external_database_connectors}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_external_database_connectors

dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors(
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
  external_database_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseExternalDatabaseConnectorsFilter]] = None,
  id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors#compartment_id DataOciDatabaseExternalDatabaseConnectors#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.Initializer.parameter.externalDatabaseId">external_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors#external_database_id DataOciDatabaseExternalDatabaseConnectors#external_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors#display_name DataOciDatabaseExternalDatabaseConnectors#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilter">DataOciDatabaseExternalDatabaseConnectorsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors#id DataOciDatabaseExternalDatabaseConnectors#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors#state DataOciDatabaseExternalDatabaseConnectors#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors#compartment_id DataOciDatabaseExternalDatabaseConnectors#compartment_id}.

---

##### `external_database_id`<sup>Required</sup> <a name="external_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.Initializer.parameter.externalDatabaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors#external_database_id DataOciDatabaseExternalDatabaseConnectors#external_database_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors#display_name DataOciDatabaseExternalDatabaseConnectors#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilter">DataOciDatabaseExternalDatabaseConnectorsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors#filter DataOciDatabaseExternalDatabaseConnectors#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors#id DataOciDatabaseExternalDatabaseConnectors#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors#state DataOciDatabaseExternalDatabaseConnectors#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatabaseExternalDatabaseConnectorsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilter">DataOciDatabaseExternalDatabaseConnectorsFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseExternalDatabaseConnectors resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_external_database_connectors

dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_external_database_connectors

dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_external_database_connectors

dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_external_database_connectors

dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseExternalDatabaseConnectors resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseExternalDatabaseConnectors to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseExternalDatabaseConnectors that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseExternalDatabaseConnectors to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.externalDatabaseConnectors">external_database_connectors</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList">DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList">DataOciDatabaseExternalDatabaseConnectorsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.externalDatabaseIdInput">external_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilter">DataOciDatabaseExternalDatabaseConnectorsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.externalDatabaseId">external_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `external_database_connectors`<sup>Required</sup> <a name="external_database_connectors" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.externalDatabaseConnectors"></a>

```python
external_database_connectors: DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList">DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.filter"></a>

```python
filter: DataOciDatabaseExternalDatabaseConnectorsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList">DataOciDatabaseExternalDatabaseConnectorsFilterList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `external_database_id_input`<sup>Optional</sup> <a name="external_database_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.externalDatabaseIdInput"></a>

```python
external_database_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatabaseExternalDatabaseConnectorsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilter">DataOciDatabaseExternalDatabaseConnectorsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `external_database_id`<sup>Required</sup> <a name="external_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.externalDatabaseId"></a>

```python
external_database_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseExternalDatabaseConnectorsConfig <a name="DataOciDatabaseExternalDatabaseConnectorsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_external_database_connectors

dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  external_database_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseExternalDatabaseConnectorsFilter]] = None,
  id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors#compartment_id DataOciDatabaseExternalDatabaseConnectors#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.externalDatabaseId">external_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors#external_database_id DataOciDatabaseExternalDatabaseConnectors#external_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors#display_name DataOciDatabaseExternalDatabaseConnectors#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilter">DataOciDatabaseExternalDatabaseConnectorsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors#id DataOciDatabaseExternalDatabaseConnectors#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors#state DataOciDatabaseExternalDatabaseConnectors#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors#compartment_id DataOciDatabaseExternalDatabaseConnectors#compartment_id}.

---

##### `external_database_id`<sup>Required</sup> <a name="external_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.externalDatabaseId"></a>

```python
external_database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors#external_database_id DataOciDatabaseExternalDatabaseConnectors#external_database_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors#display_name DataOciDatabaseExternalDatabaseConnectors#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatabaseExternalDatabaseConnectorsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilter">DataOciDatabaseExternalDatabaseConnectorsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors#filter DataOciDatabaseExternalDatabaseConnectors#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors#id DataOciDatabaseExternalDatabaseConnectors#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors#state DataOciDatabaseExternalDatabaseConnectors#state}.

---

### DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectors <a name="DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectors" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectors"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectors.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_external_database_connectors

dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectors()
```


### DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentials <a name="DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentials" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentials.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_external_database_connectors

dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentials()
```


### DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionString <a name="DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionString"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionString.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_external_database_connectors

dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionString()
```


### DataOciDatabaseExternalDatabaseConnectorsFilter <a name="DataOciDatabaseExternalDatabaseConnectorsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_external_database_connectors

dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors#name DataOciDatabaseExternalDatabaseConnectors#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors#values DataOciDatabaseExternalDatabaseConnectors#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors#regex DataOciDatabaseExternalDatabaseConnectors#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors#name DataOciDatabaseExternalDatabaseConnectors#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors#values DataOciDatabaseExternalDatabaseConnectors#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors#regex DataOciDatabaseExternalDatabaseConnectors#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList <a name="DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_external_database_connectors

dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference <a name="DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_external_database_connectors

dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.property.credentialName">credential_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.property.credentialType">credential_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.property.sslSecretId">ssl_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentials">DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `credential_name`<sup>Required</sup> <a name="credential_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.property.credentialName"></a>

```python
credential_name: str
```

- *Type:* str

---

##### `credential_type`<sup>Required</sup> <a name="credential_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.property.credentialType"></a>

```python
credential_type: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `ssl_secret_id`<sup>Required</sup> <a name="ssl_secret_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.property.sslSecretId"></a>

```python
ssl_secret_id: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentials">DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentials</a>

---


### DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList <a name="DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_external_database_connectors

dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference <a name="DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_external_database_connectors

dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionString">DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionString</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionString
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionString">DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionString</a>

---


### DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList <a name="DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_external_database_connectors

dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference <a name="DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_external_database_connectors

dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.connectionCredentials">connection_credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList">DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.connectionStatus">connection_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.connectionString">connection_string</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList">DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.connectorAgentId">connector_agent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.connectorType">connector_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.externalDatabaseId">external_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.timeConnectionStatusLastUpdated">time_connection_status_last_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectors">DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `connection_credentials`<sup>Required</sup> <a name="connection_credentials" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.connectionCredentials"></a>

```python
connection_credentials: DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList">DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList</a>

---

##### `connection_status`<sup>Required</sup> <a name="connection_status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.connectionStatus"></a>

```python
connection_status: str
```

- *Type:* str

---

##### `connection_string`<sup>Required</sup> <a name="connection_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.connectionString"></a>

```python
connection_string: DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList">DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList</a>

---

##### `connector_agent_id`<sup>Required</sup> <a name="connector_agent_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.connectorAgentId"></a>

```python
connector_agent_id: str
```

- *Type:* str

---

##### `connector_type`<sup>Required</sup> <a name="connector_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.connectorType"></a>

```python
connector_type: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `external_database_id`<sup>Required</sup> <a name="external_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.externalDatabaseId"></a>

```python
external_database_id: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_connection_status_last_updated`<sup>Required</sup> <a name="time_connection_status_last_updated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.timeConnectionStatusLastUpdated"></a>

```python
time_connection_status_last_updated: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectors
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectors">DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectors</a>

---


### DataOciDatabaseExternalDatabaseConnectorsFilterList <a name="DataOciDatabaseExternalDatabaseConnectorsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_external_database_connectors

dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilter">DataOciDatabaseExternalDatabaseConnectorsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatabaseExternalDatabaseConnectorsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilter">DataOciDatabaseExternalDatabaseConnectorsFilter</a>]]

---


### DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference <a name="DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_external_database_connectors

dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilter">DataOciDatabaseExternalDatabaseConnectorsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatabaseExternalDatabaseConnectorsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilter">DataOciDatabaseExternalDatabaseConnectorsFilter</a>]

---



