# `dataOciDatabaseManagementExternalAsmDiskGroups` Submodule <a name="`dataOciDatabaseManagementExternalAsmDiskGroups` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementExternalAsmDiskGroups <a name="DataOciDatabaseManagementExternalAsmDiskGroups" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_disk_groups oci_database_management_external_asm_disk_groups}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_asm_disk_groups

dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups(
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
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementExternalAsmDiskGroupsFilter]] = None,
  id: str = None,
  opc_named_credential_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.Initializer.parameter.externalAsmId">external_asm_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_disk_groups#external_asm_id DataOciDatabaseManagementExternalAsmDiskGroups#external_asm_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilter">DataOciDatabaseManagementExternalAsmDiskGroupsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_disk_groups#id DataOciDatabaseManagementExternalAsmDiskGroups#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.Initializer.parameter.opcNamedCredentialId">opc_named_credential_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_disk_groups#opc_named_credential_id DataOciDatabaseManagementExternalAsmDiskGroups#opc_named_credential_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `external_asm_id`<sup>Required</sup> <a name="external_asm_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.Initializer.parameter.externalAsmId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_disk_groups#external_asm_id DataOciDatabaseManagementExternalAsmDiskGroups#external_asm_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilter">DataOciDatabaseManagementExternalAsmDiskGroupsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_disk_groups#filter DataOciDatabaseManagementExternalAsmDiskGroups#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_disk_groups#id DataOciDatabaseManagementExternalAsmDiskGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `opc_named_credential_id`<sup>Optional</sup> <a name="opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.Initializer.parameter.opcNamedCredentialId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_disk_groups#opc_named_credential_id DataOciDatabaseManagementExternalAsmDiskGroups#opc_named_credential_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.resetOpcNamedCredentialId">reset_opc_named_credential_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementExternalAsmDiskGroupsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilter">DataOciDatabaseManagementExternalAsmDiskGroupsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_opc_named_credential_id` <a name="reset_opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.resetOpcNamedCredentialId"></a>

```python
def reset_opc_named_credential_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementExternalAsmDiskGroups resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_asm_disk_groups

dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_asm_disk_groups

dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_asm_disk_groups

dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_asm_disk_groups

dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseManagementExternalAsmDiskGroups resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseManagementExternalAsmDiskGroups to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseManagementExternalAsmDiskGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_disk_groups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementExternalAsmDiskGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.externalAsmDiskGroupCollection">external_asm_disk_group_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList">DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList">DataOciDatabaseManagementExternalAsmDiskGroupsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.externalAsmIdInput">external_asm_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilter">DataOciDatabaseManagementExternalAsmDiskGroupsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.opcNamedCredentialIdInput">opc_named_credential_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.externalAsmId">external_asm_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.opcNamedCredentialId">opc_named_credential_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `external_asm_disk_group_collection`<sup>Required</sup> <a name="external_asm_disk_group_collection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.externalAsmDiskGroupCollection"></a>

```python
external_asm_disk_group_collection: DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList">DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.filter"></a>

```python
filter: DataOciDatabaseManagementExternalAsmDiskGroupsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList">DataOciDatabaseManagementExternalAsmDiskGroupsFilterList</a>

---

##### `external_asm_id_input`<sup>Optional</sup> <a name="external_asm_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.externalAsmIdInput"></a>

```python
external_asm_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementExternalAsmDiskGroupsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilter">DataOciDatabaseManagementExternalAsmDiskGroupsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `opc_named_credential_id_input`<sup>Optional</sup> <a name="opc_named_credential_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.opcNamedCredentialIdInput"></a>

```python
opc_named_credential_id_input: str
```

- *Type:* str

---

##### `external_asm_id`<sup>Required</sup> <a name="external_asm_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.externalAsmId"></a>

```python
external_asm_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `opc_named_credential_id`<sup>Required</sup> <a name="opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.opcNamedCredentialId"></a>

```python
opc_named_credential_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementExternalAsmDiskGroupsConfig <a name="DataOciDatabaseManagementExternalAsmDiskGroupsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_asm_disk_groups

dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  external_asm_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementExternalAsmDiskGroupsFilter]] = None,
  id: str = None,
  opc_named_credential_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.externalAsmId">external_asm_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_disk_groups#external_asm_id DataOciDatabaseManagementExternalAsmDiskGroups#external_asm_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilter">DataOciDatabaseManagementExternalAsmDiskGroupsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_disk_groups#id DataOciDatabaseManagementExternalAsmDiskGroups#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.opcNamedCredentialId">opc_named_credential_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_disk_groups#opc_named_credential_id DataOciDatabaseManagementExternalAsmDiskGroups#opc_named_credential_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `external_asm_id`<sup>Required</sup> <a name="external_asm_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.externalAsmId"></a>

```python
external_asm_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_disk_groups#external_asm_id DataOciDatabaseManagementExternalAsmDiskGroups#external_asm_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementExternalAsmDiskGroupsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilter">DataOciDatabaseManagementExternalAsmDiskGroupsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_disk_groups#filter DataOciDatabaseManagementExternalAsmDiskGroups#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_disk_groups#id DataOciDatabaseManagementExternalAsmDiskGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `opc_named_credential_id`<sup>Optional</sup> <a name="opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.opcNamedCredentialId"></a>

```python
opc_named_credential_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_disk_groups#opc_named_credential_id DataOciDatabaseManagementExternalAsmDiskGroups#opc_named_credential_id}.

---

### DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollection <a name="DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_asm_disk_groups

dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollection()
```


### DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItems <a name="DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_asm_disk_groups

dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItems()
```


### DataOciDatabaseManagementExternalAsmDiskGroupsFilter <a name="DataOciDatabaseManagementExternalAsmDiskGroupsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_asm_disk_groups

dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_disk_groups#name DataOciDatabaseManagementExternalAsmDiskGroups#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_disk_groups#values DataOciDatabaseManagementExternalAsmDiskGroups#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_disk_groups#regex DataOciDatabaseManagementExternalAsmDiskGroups#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_disk_groups#name DataOciDatabaseManagementExternalAsmDiskGroups#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_disk_groups#values DataOciDatabaseManagementExternalAsmDiskGroups#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_disk_groups#regex DataOciDatabaseManagementExternalAsmDiskGroups#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList <a name="DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_asm_disk_groups

dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference <a name="DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_asm_disk_groups

dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.databases">databases</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.dismountingInstanceCount">dismounting_instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.isSparse">is_sparse</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.mountingInstanceCount">mounting_instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.redundancyType">redundancy_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.totalSizeInMbs">total_size_in_mbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.usedPercent">used_percent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.usedSizeInMbs">used_size_in_mbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItems">DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `databases`<sup>Required</sup> <a name="databases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.databases"></a>

```python
databases: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dismounting_instance_count`<sup>Required</sup> <a name="dismounting_instance_count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.dismountingInstanceCount"></a>

```python
dismounting_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_sparse`<sup>Required</sup> <a name="is_sparse" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.isSparse"></a>

```python
is_sparse: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `mounting_instance_count`<sup>Required</sup> <a name="mounting_instance_count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.mountingInstanceCount"></a>

```python
mounting_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `redundancy_type`<sup>Required</sup> <a name="redundancy_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.redundancyType"></a>

```python
redundancy_type: str
```

- *Type:* str

---

##### `total_size_in_mbs`<sup>Required</sup> <a name="total_size_in_mbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.totalSizeInMbs"></a>

```python
total_size_in_mbs: str
```

- *Type:* str

---

##### `used_percent`<sup>Required</sup> <a name="used_percent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.usedPercent"></a>

```python
used_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `used_size_in_mbs`<sup>Required</sup> <a name="used_size_in_mbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.usedSizeInMbs"></a>

```python
used_size_in_mbs: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItems">DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItems</a>

---


### DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList <a name="DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_asm_disk_groups

dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference <a name="DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_asm_disk_groups

dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList">DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollection">DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.property.items"></a>

```python
items: DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList">DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollection">DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollection</a>

---


### DataOciDatabaseManagementExternalAsmDiskGroupsFilterList <a name="DataOciDatabaseManagementExternalAsmDiskGroupsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_asm_disk_groups

dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilter">DataOciDatabaseManagementExternalAsmDiskGroupsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementExternalAsmDiskGroupsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilter">DataOciDatabaseManagementExternalAsmDiskGroupsFilter</a>]]

---


### DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference <a name="DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_asm_disk_groups

dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilter">DataOciDatabaseManagementExternalAsmDiskGroupsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatabaseManagementExternalAsmDiskGroupsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilter">DataOciDatabaseManagementExternalAsmDiskGroupsFilter</a>]

---



