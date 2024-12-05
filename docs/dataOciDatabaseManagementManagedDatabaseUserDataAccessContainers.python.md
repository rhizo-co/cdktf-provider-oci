# `dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers` Submodule <a name="`dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers <a name="DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_containers oci_database_management_managed_database_user_data_access_containers}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_data_access_containers

dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_database_id: str,
  user_name: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter]] = None,
  id: str = None,
  name: str = None,
  opc_named_credential_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.Initializer.parameter.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_containers#managed_database_id DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.Initializer.parameter.userName">user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_containers#user_name DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers#user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter">DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_containers#id DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_containers#name DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.Initializer.parameter.opcNamedCredentialId">opc_named_credential_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_containers#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers#opc_named_credential_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.Initializer.parameter.managedDatabaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_containers#managed_database_id DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers#managed_database_id}.

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.Initializer.parameter.userName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_containers#user_name DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers#user_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter">DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_containers#filter DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_containers#id DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_containers#name DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers#name}.

---

##### `opc_named_credential_id`<sup>Optional</sup> <a name="opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.Initializer.parameter.opcNamedCredentialId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_containers#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers#opc_named_credential_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.resetOpcNamedCredentialId">reset_opc_named_credential_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter">DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_opc_named_credential_id` <a name="reset_opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.resetOpcNamedCredentialId"></a>

```python
def reset_opc_named_credential_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_data_access_containers

dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_data_access_containers

dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_data_access_containers

dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_data_access_containers

dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_containers#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.dataAccessContainerCollection">data_access_container_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionList">DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList">DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter">DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.managedDatabaseIdInput">managed_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.opcNamedCredentialIdInput">opc_named_credential_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.userNameInput">user_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.opcNamedCredentialId">opc_named_credential_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.userName">user_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `data_access_container_collection`<sup>Required</sup> <a name="data_access_container_collection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.dataAccessContainerCollection"></a>

```python
data_access_container_collection: DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionList">DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.filter"></a>

```python
filter: DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList">DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter">DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `managed_database_id_input`<sup>Optional</sup> <a name="managed_database_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.managedDatabaseIdInput"></a>

```python
managed_database_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `opc_named_credential_id_input`<sup>Optional</sup> <a name="opc_named_credential_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.opcNamedCredentialIdInput"></a>

```python
opc_named_credential_id_input: str
```

- *Type:* str

---

##### `user_name_input`<sup>Optional</sup> <a name="user_name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.userNameInput"></a>

```python
user_name_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.managedDatabaseId"></a>

```python
managed_database_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `opc_named_credential_id`<sup>Required</sup> <a name="opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.opcNamedCredentialId"></a>

```python
opc_named_credential_id: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig <a name="DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_data_access_containers

dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_database_id: str,
  user_name: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter]] = None,
  id: str = None,
  name: str = None,
  opc_named_credential_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig.property.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_containers#managed_database_id DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig.property.userName">user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_containers#user_name DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers#user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter">DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_containers#id DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_containers#name DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig.property.opcNamedCredentialId">opc_named_credential_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_containers#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers#opc_named_credential_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig.property.managedDatabaseId"></a>

```python
managed_database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_containers#managed_database_id DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers#managed_database_id}.

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig.property.userName"></a>

```python
user_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_containers#user_name DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers#user_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter">DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_containers#filter DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_containers#id DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_containers#name DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers#name}.

---

##### `opc_named_credential_id`<sup>Optional</sup> <a name="opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig.property.opcNamedCredentialId"></a>

```python
opc_named_credential_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_containers#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers#opc_named_credential_id}.

---

### DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollection <a name="DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_data_access_containers

dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollection()
```


### DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItems <a name="DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_data_access_containers

dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItems()
```


### DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter <a name="DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_data_access_containers

dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_containers#name DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_containers#values DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_containers#regex DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_containers#name DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_containers#values DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_containers#regex DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsList <a name="DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_data_access_containers

dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_data_access_containers

dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItems">DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItems">DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItems</a>

---


### DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionList <a name="DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_data_access_containers

dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference <a name="DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_data_access_containers

dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsList">DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollection">DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.property.items"></a>

```python
items: DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsList">DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollection">DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollection</a>

---


### DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList <a name="DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_data_access_containers

dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter">DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter">DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter</a>]]

---


### DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference <a name="DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_data_access_containers

dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter">DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter">DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter</a>]

---



