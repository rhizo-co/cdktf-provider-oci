# `dataOciDatabaseManagementExternalAsmConfiguration` Submodule <a name="`dataOciDatabaseManagementExternalAsmConfiguration` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementExternalAsmConfiguration <a name="DataOciDatabaseManagementExternalAsmConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_configuration oci_database_management_external_asm_configuration}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_asm_configuration

dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration(
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
  id: str = None,
  opc_named_credential_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.Initializer.parameter.externalAsmId">external_asm_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_configuration#external_asm_id DataOciDatabaseManagementExternalAsmConfiguration#external_asm_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_configuration#id DataOciDatabaseManagementExternalAsmConfiguration#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.Initializer.parameter.opcNamedCredentialId">opc_named_credential_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_configuration#opc_named_credential_id DataOciDatabaseManagementExternalAsmConfiguration#opc_named_credential_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `external_asm_id`<sup>Required</sup> <a name="external_asm_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.Initializer.parameter.externalAsmId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_configuration#external_asm_id DataOciDatabaseManagementExternalAsmConfiguration#external_asm_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_configuration#id DataOciDatabaseManagementExternalAsmConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `opc_named_credential_id`<sup>Optional</sup> <a name="opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.Initializer.parameter.opcNamedCredentialId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_configuration#opc_named_credential_id DataOciDatabaseManagementExternalAsmConfiguration#opc_named_credential_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.resetOpcNamedCredentialId">reset_opc_named_credential_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_opc_named_credential_id` <a name="reset_opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.resetOpcNamedCredentialId"></a>

```python
def reset_opc_named_credential_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementExternalAsmConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_asm_configuration

dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_asm_configuration

dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_asm_configuration

dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_asm_configuration

dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseManagementExternalAsmConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseManagementExternalAsmConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseManagementExternalAsmConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementExternalAsmConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.initParameters">init_parameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersList">DataOciDatabaseManagementExternalAsmConfigurationInitParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.externalAsmIdInput">external_asm_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.opcNamedCredentialIdInput">opc_named_credential_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.externalAsmId">external_asm_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.opcNamedCredentialId">opc_named_credential_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `init_parameters`<sup>Required</sup> <a name="init_parameters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.initParameters"></a>

```python
init_parameters: DataOciDatabaseManagementExternalAsmConfigurationInitParametersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersList">DataOciDatabaseManagementExternalAsmConfigurationInitParametersList</a>

---

##### `external_asm_id_input`<sup>Optional</sup> <a name="external_asm_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.externalAsmIdInput"></a>

```python
external_asm_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `opc_named_credential_id_input`<sup>Optional</sup> <a name="opc_named_credential_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.opcNamedCredentialIdInput"></a>

```python
opc_named_credential_id_input: str
```

- *Type:* str

---

##### `external_asm_id`<sup>Required</sup> <a name="external_asm_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.externalAsmId"></a>

```python
external_asm_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `opc_named_credential_id`<sup>Required</sup> <a name="opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.opcNamedCredentialId"></a>

```python
opc_named_credential_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementExternalAsmConfigurationConfig <a name="DataOciDatabaseManagementExternalAsmConfigurationConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_asm_configuration

dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  external_asm_id: str,
  id: str = None,
  opc_named_credential_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationConfig.property.externalAsmId">external_asm_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_configuration#external_asm_id DataOciDatabaseManagementExternalAsmConfiguration#external_asm_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_configuration#id DataOciDatabaseManagementExternalAsmConfiguration#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationConfig.property.opcNamedCredentialId">opc_named_credential_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_configuration#opc_named_credential_id DataOciDatabaseManagementExternalAsmConfiguration#opc_named_credential_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `external_asm_id`<sup>Required</sup> <a name="external_asm_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationConfig.property.externalAsmId"></a>

```python
external_asm_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_configuration#external_asm_id DataOciDatabaseManagementExternalAsmConfiguration#external_asm_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_configuration#id DataOciDatabaseManagementExternalAsmConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `opc_named_credential_id`<sup>Optional</sup> <a name="opc_named_credential_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationConfig.property.opcNamedCredentialId"></a>

```python
opc_named_credential_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_configuration#opc_named_credential_id DataOciDatabaseManagementExternalAsmConfiguration#opc_named_credential_id}.

---

### DataOciDatabaseManagementExternalAsmConfigurationInitParameters <a name="DataOciDatabaseManagementExternalAsmConfigurationInitParameters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParameters.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_asm_configuration

dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParameters()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementExternalAsmConfigurationInitParametersList <a name="DataOciDatabaseManagementExternalAsmConfigurationInitParametersList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_asm_configuration

dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference <a name="DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_asm_configuration

dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.property.asmInstanceDisplayName">asm_instance_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.property.asmInstanceId">asm_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.property.autoMountDiskGroups">auto_mount_disk_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.property.diskDiscoveryPath">disk_discovery_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.property.preferredReadFailureGroups">preferred_read_failure_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.property.rebalancePower">rebalance_power</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParameters">DataOciDatabaseManagementExternalAsmConfigurationInitParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `asm_instance_display_name`<sup>Required</sup> <a name="asm_instance_display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.property.asmInstanceDisplayName"></a>

```python
asm_instance_display_name: str
```

- *Type:* str

---

##### `asm_instance_id`<sup>Required</sup> <a name="asm_instance_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.property.asmInstanceId"></a>

```python
asm_instance_id: str
```

- *Type:* str

---

##### `auto_mount_disk_groups`<sup>Required</sup> <a name="auto_mount_disk_groups" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.property.autoMountDiskGroups"></a>

```python
auto_mount_disk_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `disk_discovery_path`<sup>Required</sup> <a name="disk_discovery_path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.property.diskDiscoveryPath"></a>

```python
disk_discovery_path: str
```

- *Type:* str

---

##### `preferred_read_failure_groups`<sup>Required</sup> <a name="preferred_read_failure_groups" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.property.preferredReadFailureGroups"></a>

```python
preferred_read_failure_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rebalance_power`<sup>Required</sup> <a name="rebalance_power" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.property.rebalancePower"></a>

```python
rebalance_power: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementExternalAsmConfigurationInitParameters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParameters">DataOciDatabaseManagementExternalAsmConfigurationInitParameters</a>

---



