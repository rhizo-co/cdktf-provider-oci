# `dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges` Submodule <a name="`dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges <a name="DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges oci_database_management_managed_database_user_consumer_group_privileges}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_consumer_group_privileges

dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges(
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
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter]] = None,
  id: str = None,
  name: str = None,
  opc_named_credential_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.Initializer.parameter.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#managed_database_id DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.Initializer.parameter.userName">user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#user_name DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#id DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#name DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.Initializer.parameter.opcNamedCredentialId">opc_named_credential_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#opc_named_credential_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.Initializer.parameter.managedDatabaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#managed_database_id DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#managed_database_id}.

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.Initializer.parameter.userName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#user_name DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#user_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#filter DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#id DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#name DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#name}.

---

##### `opc_named_credential_id`<sup>Optional</sup> <a name="opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.Initializer.parameter.opcNamedCredentialId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#opc_named_credential_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.resetOpcNamedCredentialId">reset_opc_named_credential_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_opc_named_credential_id` <a name="reset_opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.resetOpcNamedCredentialId"></a>

```python
def reset_opc_named_credential_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_consumer_group_privileges

dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_consumer_group_privileges

dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_consumer_group_privileges

dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_consumer_group_privileges

dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.consumerGroupPrivilegeCollection">consumer_group_privilege_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.managedDatabaseIdInput">managed_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.opcNamedCredentialIdInput">opc_named_credential_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.userNameInput">user_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.opcNamedCredentialId">opc_named_credential_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.userName">user_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `consumer_group_privilege_collection`<sup>Required</sup> <a name="consumer_group_privilege_collection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.consumerGroupPrivilegeCollection"></a>

```python
consumer_group_privilege_collection: DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.filter"></a>

```python
filter: DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `managed_database_id_input`<sup>Optional</sup> <a name="managed_database_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.managedDatabaseIdInput"></a>

```python
managed_database_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `opc_named_credential_id_input`<sup>Optional</sup> <a name="opc_named_credential_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.opcNamedCredentialIdInput"></a>

```python
opc_named_credential_id_input: str
```

- *Type:* str

---

##### `user_name_input`<sup>Optional</sup> <a name="user_name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.userNameInput"></a>

```python
user_name_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.managedDatabaseId"></a>

```python
managed_database_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `opc_named_credential_id`<sup>Required</sup> <a name="opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.opcNamedCredentialId"></a>

```python
opc_named_credential_id: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig <a name="DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_consumer_group_privileges

dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_database_id: str,
  user_name: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter]] = None,
  id: str = None,
  name: str = None,
  opc_named_credential_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#managed_database_id DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.userName">user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#user_name DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#id DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#name DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.opcNamedCredentialId">opc_named_credential_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#opc_named_credential_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.managedDatabaseId"></a>

```python
managed_database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#managed_database_id DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#managed_database_id}.

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.userName"></a>

```python
user_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#user_name DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#user_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#filter DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#id DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#name DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#name}.

---

##### `opc_named_credential_id`<sup>Optional</sup> <a name="opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.opcNamedCredentialId"></a>

```python
opc_named_credential_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#opc_named_credential_id}.

---

### DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollection <a name="DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_consumer_group_privileges

dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollection()
```


### DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItems <a name="DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_consumer_group_privileges

dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItems()
```


### DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter <a name="DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_consumer_group_privileges

dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#name DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#values DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#regex DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#name DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#values DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#regex DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList <a name="DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_consumer_group_privileges

dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_consumer_group_privileges

dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.property.grantOption">grant_option</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.property.initialGroup">initial_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItems">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `grant_option`<sup>Required</sup> <a name="grant_option" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.property.grantOption"></a>

```python
grant_option: str
```

- *Type:* str

---

##### `initial_group`<sup>Required</sup> <a name="initial_group" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.property.initialGroup"></a>

```python
initial_group: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItems">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItems</a>

---


### DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList <a name="DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_consumer_group_privileges

dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference <a name="DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_consumer_group_privileges

dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollection">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.property.items"></a>

```python
items: DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollection">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollection</a>

---


### DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList <a name="DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_consumer_group_privileges

dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter</a>]]

---


### DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference <a name="DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_user_consumer_group_privileges

dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter</a>]

---



