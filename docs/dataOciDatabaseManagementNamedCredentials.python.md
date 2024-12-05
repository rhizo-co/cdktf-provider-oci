# `dataOciDatabaseManagementNamedCredentials` Submodule <a name="`dataOciDatabaseManagementNamedCredentials` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementNamedCredentials <a name="DataOciDatabaseManagementNamedCredentials" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_named_credentials oci_database_management_named_credentials}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_named_credentials

dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials(
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
  associated_resource: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementNamedCredentialsFilter]] = None,
  id: str = None,
  name: str = None,
  scope: str = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_named_credentials#compartment_id DataOciDatabaseManagementNamedCredentials#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.Initializer.parameter.associatedResource">associated_resource</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_named_credentials#associated_resource DataOciDatabaseManagementNamedCredentials#associated_resource}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilter">DataOciDatabaseManagementNamedCredentialsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_named_credentials#id DataOciDatabaseManagementNamedCredentials#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_named_credentials#name DataOciDatabaseManagementNamedCredentials#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.Initializer.parameter.scope">scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_named_credentials#scope DataOciDatabaseManagementNamedCredentials#scope}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_named_credentials#type DataOciDatabaseManagementNamedCredentials#type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_named_credentials#compartment_id DataOciDatabaseManagementNamedCredentials#compartment_id}.

---

##### `associated_resource`<sup>Optional</sup> <a name="associated_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.Initializer.parameter.associatedResource"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_named_credentials#associated_resource DataOciDatabaseManagementNamedCredentials#associated_resource}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilter">DataOciDatabaseManagementNamedCredentialsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_named_credentials#filter DataOciDatabaseManagementNamedCredentials#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_named_credentials#id DataOciDatabaseManagementNamedCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_named_credentials#name DataOciDatabaseManagementNamedCredentials#name}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.Initializer.parameter.scope"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_named_credentials#scope DataOciDatabaseManagementNamedCredentials#scope}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_named_credentials#type DataOciDatabaseManagementNamedCredentials#type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.resetAssociatedResource">reset_associated_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.resetScope">reset_scope</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementNamedCredentialsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilter">DataOciDatabaseManagementNamedCredentialsFilter</a>]]

---

##### `reset_associated_resource` <a name="reset_associated_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.resetAssociatedResource"></a>

```python
def reset_associated_resource() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_scope` <a name="reset_scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.resetScope"></a>

```python
def reset_scope() -> None
```

##### `reset_type` <a name="reset_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementNamedCredentials resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_named_credentials

dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_named_credentials

dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_named_credentials

dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_named_credentials

dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseManagementNamedCredentials resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseManagementNamedCredentials to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseManagementNamedCredentials that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_named_credentials#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementNamedCredentials to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterList">DataOciDatabaseManagementNamedCredentialsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.property.namedCredentialCollection">named_credential_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionList">DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.property.associatedResourceInput">associated_resource_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilter">DataOciDatabaseManagementNamedCredentialsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.property.associatedResource">associated_resource</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.property.filter"></a>

```python
filter: DataOciDatabaseManagementNamedCredentialsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterList">DataOciDatabaseManagementNamedCredentialsFilterList</a>

---

##### `named_credential_collection`<sup>Required</sup> <a name="named_credential_collection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.property.namedCredentialCollection"></a>

```python
named_credential_collection: DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionList">DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionList</a>

---

##### `associated_resource_input`<sup>Optional</sup> <a name="associated_resource_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.property.associatedResourceInput"></a>

```python
associated_resource_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementNamedCredentialsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilter">DataOciDatabaseManagementNamedCredentialsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `associated_resource`<sup>Required</sup> <a name="associated_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.property.associatedResource"></a>

```python
associated_resource: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentials.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementNamedCredentialsConfig <a name="DataOciDatabaseManagementNamedCredentialsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_named_credentials

dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  associated_resource: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementNamedCredentialsFilter]] = None,
  id: str = None,
  name: str = None,
  scope: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_named_credentials#compartment_id DataOciDatabaseManagementNamedCredentials#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsConfig.property.associatedResource">associated_resource</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_named_credentials#associated_resource DataOciDatabaseManagementNamedCredentials#associated_resource}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilter">DataOciDatabaseManagementNamedCredentialsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_named_credentials#id DataOciDatabaseManagementNamedCredentials#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_named_credentials#name DataOciDatabaseManagementNamedCredentials#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsConfig.property.scope">scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_named_credentials#scope DataOciDatabaseManagementNamedCredentials#scope}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_named_credentials#type DataOciDatabaseManagementNamedCredentials#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_named_credentials#compartment_id DataOciDatabaseManagementNamedCredentials#compartment_id}.

---

##### `associated_resource`<sup>Optional</sup> <a name="associated_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsConfig.property.associatedResource"></a>

```python
associated_resource: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_named_credentials#associated_resource DataOciDatabaseManagementNamedCredentials#associated_resource}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementNamedCredentialsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilter">DataOciDatabaseManagementNamedCredentialsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_named_credentials#filter DataOciDatabaseManagementNamedCredentials#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_named_credentials#id DataOciDatabaseManagementNamedCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_named_credentials#name DataOciDatabaseManagementNamedCredentials#name}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsConfig.property.scope"></a>

```python
scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_named_credentials#scope DataOciDatabaseManagementNamedCredentials#scope}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_named_credentials#type DataOciDatabaseManagementNamedCredentials#type}.

---

### DataOciDatabaseManagementNamedCredentialsFilter <a name="DataOciDatabaseManagementNamedCredentialsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_named_credentials

dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_named_credentials#name DataOciDatabaseManagementNamedCredentials#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_named_credentials#values DataOciDatabaseManagementNamedCredentials#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_named_credentials#regex DataOciDatabaseManagementNamedCredentials#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_named_credentials#name DataOciDatabaseManagementNamedCredentials#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_named_credentials#values DataOciDatabaseManagementNamedCredentials#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_named_credentials#regex DataOciDatabaseManagementNamedCredentials#regex}.

---

### DataOciDatabaseManagementNamedCredentialsNamedCredentialCollection <a name="DataOciDatabaseManagementNamedCredentialsNamedCredentialCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_named_credentials

dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollection()
```


### DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItems <a name="DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_named_credentials

dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItems()
```


### DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContent <a name="DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContent"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContent.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_named_credentials

dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContent()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementNamedCredentialsFilterList <a name="DataOciDatabaseManagementNamedCredentialsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_named_credentials

dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementNamedCredentialsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilter">DataOciDatabaseManagementNamedCredentialsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementNamedCredentialsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilter">DataOciDatabaseManagementNamedCredentialsFilter</a>]]

---


### DataOciDatabaseManagementNamedCredentialsFilterOutputReference <a name="DataOciDatabaseManagementNamedCredentialsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_named_credentials

dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilter">DataOciDatabaseManagementNamedCredentialsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatabaseManagementNamedCredentialsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsFilter">DataOciDatabaseManagementNamedCredentialsFilter</a>]

---


### DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentList <a name="DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_named_credentials

dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentOutputReference <a name="DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_named_credentials

dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentOutputReference.property.credentialType">credential_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentOutputReference.property.passwordSecretAccessMode">password_secret_access_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentOutputReference.property.passwordSecretId">password_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentOutputReference.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContent">DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `credential_type`<sup>Required</sup> <a name="credential_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentOutputReference.property.credentialType"></a>

```python
credential_type: str
```

- *Type:* str

---

##### `password_secret_access_mode`<sup>Required</sup> <a name="password_secret_access_mode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentOutputReference.property.passwordSecretAccessMode"></a>

```python
password_secret_access_mode: str
```

- *Type:* str

---

##### `password_secret_id`<sup>Required</sup> <a name="password_secret_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentOutputReference.property.passwordSecretId"></a>

```python
password_secret_id: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentOutputReference.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContent
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContent">DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContent</a>

---


### DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsList <a name="DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_named_credentials

dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference <a name="DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_named_credentials

dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.property.associatedResource">associated_resource</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.property.content">content</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentList">DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItems">DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `associated_resource`<sup>Required</sup> <a name="associated_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.property.associatedResource"></a>

```python
associated_resource: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.property.content"></a>

```python
content: DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentList">DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsContentList</a>

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItems">DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItems</a>

---


### DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionList <a name="DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_named_credentials

dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionOutputReference <a name="DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_named_credentials

dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsList">DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollection">DataOciDatabaseManagementNamedCredentialsNamedCredentialCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionOutputReference.property.items"></a>

```python
items: DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsList">DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementNamedCredentialsNamedCredentialCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementNamedCredentials.DataOciDatabaseManagementNamedCredentialsNamedCredentialCollection">DataOciDatabaseManagementNamedCredentialsNamedCredentialCollection</a>

---



