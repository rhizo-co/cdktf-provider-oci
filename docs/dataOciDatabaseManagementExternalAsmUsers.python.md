# `dataOciDatabaseManagementExternalAsmUsers` Submodule <a name="`dataOciDatabaseManagementExternalAsmUsers` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementExternalAsmUsers <a name="DataOciDatabaseManagementExternalAsmUsers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_users oci_database_management_external_asm_users}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_asm_users

dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  external_asm_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementExternalAsmUsersFilter]] = None,
  id: str = None,
  opc_named_credential_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.Initializer.parameter.externalAsmId">external_asm_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_users#external_asm_id DataOciDatabaseManagementExternalAsmUsers#external_asm_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilter">DataOciDatabaseManagementExternalAsmUsersFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_users#id DataOciDatabaseManagementExternalAsmUsers#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.Initializer.parameter.opcNamedCredentialId">opc_named_credential_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_users#opc_named_credential_id DataOciDatabaseManagementExternalAsmUsers#opc_named_credential_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `external_asm_id`<sup>Required</sup> <a name="external_asm_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.Initializer.parameter.externalAsmId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_users#external_asm_id DataOciDatabaseManagementExternalAsmUsers#external_asm_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilter">DataOciDatabaseManagementExternalAsmUsersFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_users#filter DataOciDatabaseManagementExternalAsmUsers#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_users#id DataOciDatabaseManagementExternalAsmUsers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `opc_named_credential_id`<sup>Optional</sup> <a name="opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.Initializer.parameter.opcNamedCredentialId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_users#opc_named_credential_id DataOciDatabaseManagementExternalAsmUsers#opc_named_credential_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.resetOpcNamedCredentialId">reset_opc_named_credential_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementExternalAsmUsersFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilter">DataOciDatabaseManagementExternalAsmUsersFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_opc_named_credential_id` <a name="reset_opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.resetOpcNamedCredentialId"></a>

```python
def reset_opc_named_credential_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementExternalAsmUsers resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_asm_users

dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_asm_users

dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_asm_users

dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_asm_users

dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseManagementExternalAsmUsers resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseManagementExternalAsmUsers to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseManagementExternalAsmUsers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_users#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementExternalAsmUsers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.property.externalAsmUserCollection">external_asm_user_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionList">DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterList">DataOciDatabaseManagementExternalAsmUsersFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.property.externalAsmIdInput">external_asm_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilter">DataOciDatabaseManagementExternalAsmUsersFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.property.opcNamedCredentialIdInput">opc_named_credential_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.property.externalAsmId">external_asm_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.property.opcNamedCredentialId">opc_named_credential_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `external_asm_user_collection`<sup>Required</sup> <a name="external_asm_user_collection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.property.externalAsmUserCollection"></a>

```python
external_asm_user_collection: DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionList">DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.property.filter"></a>

```python
filter: DataOciDatabaseManagementExternalAsmUsersFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterList">DataOciDatabaseManagementExternalAsmUsersFilterList</a>

---

##### `external_asm_id_input`<sup>Optional</sup> <a name="external_asm_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.property.externalAsmIdInput"></a>

```python
external_asm_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementExternalAsmUsersFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilter">DataOciDatabaseManagementExternalAsmUsersFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `opc_named_credential_id_input`<sup>Optional</sup> <a name="opc_named_credential_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.property.opcNamedCredentialIdInput"></a>

```python
opc_named_credential_id_input: str
```

- *Type:* str

---

##### `external_asm_id`<sup>Required</sup> <a name="external_asm_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.property.externalAsmId"></a>

```python
external_asm_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `opc_named_credential_id`<sup>Required</sup> <a name="opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.property.opcNamedCredentialId"></a>

```python
opc_named_credential_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsers.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementExternalAsmUsersConfig <a name="DataOciDatabaseManagementExternalAsmUsersConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_asm_users

dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  external_asm_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementExternalAsmUsersFilter]] = None,
  id: str = None,
  opc_named_credential_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersConfig.property.externalAsmId">external_asm_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_users#external_asm_id DataOciDatabaseManagementExternalAsmUsers#external_asm_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilter">DataOciDatabaseManagementExternalAsmUsersFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_users#id DataOciDatabaseManagementExternalAsmUsers#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersConfig.property.opcNamedCredentialId">opc_named_credential_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_users#opc_named_credential_id DataOciDatabaseManagementExternalAsmUsers#opc_named_credential_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `external_asm_id`<sup>Required</sup> <a name="external_asm_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersConfig.property.externalAsmId"></a>

```python
external_asm_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_users#external_asm_id DataOciDatabaseManagementExternalAsmUsers#external_asm_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementExternalAsmUsersFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilter">DataOciDatabaseManagementExternalAsmUsersFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_users#filter DataOciDatabaseManagementExternalAsmUsers#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_users#id DataOciDatabaseManagementExternalAsmUsers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `opc_named_credential_id`<sup>Optional</sup> <a name="opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersConfig.property.opcNamedCredentialId"></a>

```python
opc_named_credential_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_users#opc_named_credential_id DataOciDatabaseManagementExternalAsmUsers#opc_named_credential_id}.

---

### DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollection <a name="DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_asm_users

dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollection()
```


### DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItems <a name="DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_asm_users

dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItems()
```


### DataOciDatabaseManagementExternalAsmUsersFilter <a name="DataOciDatabaseManagementExternalAsmUsersFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_asm_users

dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_users#name DataOciDatabaseManagementExternalAsmUsers#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_users#values DataOciDatabaseManagementExternalAsmUsers#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_users#regex DataOciDatabaseManagementExternalAsmUsers#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_users#name DataOciDatabaseManagementExternalAsmUsers#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_users#values DataOciDatabaseManagementExternalAsmUsers#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_users#regex DataOciDatabaseManagementExternalAsmUsers#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsList <a name="DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_asm_users

dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsOutputReference <a name="DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_asm_users

dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsOutputReference.property.asmId">asm_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsOutputReference.property.privileges">privileges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItems">DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `asm_id`<sup>Required</sup> <a name="asm_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsOutputReference.property.asmId"></a>

```python
asm_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `privileges`<sup>Required</sup> <a name="privileges" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsOutputReference.property.privileges"></a>

```python
privileges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItems">DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItems</a>

---


### DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionList <a name="DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_asm_users

dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionOutputReference <a name="DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_asm_users

dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsList">DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollection">DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionOutputReference.property.items"></a>

```python
items: DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsList">DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollection">DataOciDatabaseManagementExternalAsmUsersExternalAsmUserCollection</a>

---


### DataOciDatabaseManagementExternalAsmUsersFilterList <a name="DataOciDatabaseManagementExternalAsmUsersFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_asm_users

dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementExternalAsmUsersFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilter">DataOciDatabaseManagementExternalAsmUsersFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementExternalAsmUsersFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilter">DataOciDatabaseManagementExternalAsmUsersFilter</a>]]

---


### DataOciDatabaseManagementExternalAsmUsersFilterOutputReference <a name="DataOciDatabaseManagementExternalAsmUsersFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_asm_users

dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilter">DataOciDatabaseManagementExternalAsmUsersFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatabaseManagementExternalAsmUsersFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmUsers.DataOciDatabaseManagementExternalAsmUsersFilter">DataOciDatabaseManagementExternalAsmUsersFilter</a>]

---



