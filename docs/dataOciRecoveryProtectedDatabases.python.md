# `dataOciRecoveryProtectedDatabases` Submodule <a name="`dataOciRecoveryProtectedDatabases` Submodule" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciRecoveryProtectedDatabases <a name="DataOciRecoveryProtectedDatabases" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases oci_recovery_protected_databases}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_recovery_protected_databases

dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases(
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
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciRecoveryProtectedDatabasesFilter]] = None,
  id: str = None,
  protection_policy_id: str = None,
  recovery_service_subnet_id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#compartment_id DataOciRecoveryProtectedDatabases#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#display_name DataOciRecoveryProtectedDatabases#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilter">DataOciRecoveryProtectedDatabasesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#id DataOciRecoveryProtectedDatabases#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.protectionPolicyId">protection_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#protection_policy_id DataOciRecoveryProtectedDatabases#protection_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.recoveryServiceSubnetId">recovery_service_subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#recovery_service_subnet_id DataOciRecoveryProtectedDatabases#recovery_service_subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#state DataOciRecoveryProtectedDatabases#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#compartment_id DataOciRecoveryProtectedDatabases#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#display_name DataOciRecoveryProtectedDatabases#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilter">DataOciRecoveryProtectedDatabasesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#filter DataOciRecoveryProtectedDatabases#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#id DataOciRecoveryProtectedDatabases#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `protection_policy_id`<sup>Optional</sup> <a name="protection_policy_id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.protectionPolicyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#protection_policy_id DataOciRecoveryProtectedDatabases#protection_policy_id}.

---

##### `recovery_service_subnet_id`<sup>Optional</sup> <a name="recovery_service_subnet_id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.recoveryServiceSubnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#recovery_service_subnet_id DataOciRecoveryProtectedDatabases#recovery_service_subnet_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#state DataOciRecoveryProtectedDatabases#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.resetProtectionPolicyId">reset_protection_policy_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.resetRecoveryServiceSubnetId">reset_recovery_service_subnet_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciRecoveryProtectedDatabasesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilter">DataOciRecoveryProtectedDatabasesFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_protection_policy_id` <a name="reset_protection_policy_id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.resetProtectionPolicyId"></a>

```python
def reset_protection_policy_id() -> None
```

##### `reset_recovery_service_subnet_id` <a name="reset_recovery_service_subnet_id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.resetRecoveryServiceSubnetId"></a>

```python
def reset_recovery_service_subnet_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciRecoveryProtectedDatabases resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_recovery_protected_databases

dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_recovery_protected_databases

dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_recovery_protected_databases

dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_recovery_protected_databases

dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciRecoveryProtectedDatabases resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciRecoveryProtectedDatabases to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciRecoveryProtectedDatabases that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciRecoveryProtectedDatabases to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList">DataOciRecoveryProtectedDatabasesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.protectedDatabaseCollection">protected_database_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList">DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilter">DataOciRecoveryProtectedDatabasesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.protectionPolicyIdInput">protection_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.recoveryServiceSubnetIdInput">recovery_service_subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.protectionPolicyId">protection_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.recoveryServiceSubnetId">recovery_service_subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.filter"></a>

```python
filter: DataOciRecoveryProtectedDatabasesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList">DataOciRecoveryProtectedDatabasesFilterList</a>

---

##### `protected_database_collection`<sup>Required</sup> <a name="protected_database_collection" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.protectedDatabaseCollection"></a>

```python
protected_database_collection: DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList">DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciRecoveryProtectedDatabasesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilter">DataOciRecoveryProtectedDatabasesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `protection_policy_id_input`<sup>Optional</sup> <a name="protection_policy_id_input" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.protectionPolicyIdInput"></a>

```python
protection_policy_id_input: str
```

- *Type:* str

---

##### `recovery_service_subnet_id_input`<sup>Optional</sup> <a name="recovery_service_subnet_id_input" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.recoveryServiceSubnetIdInput"></a>

```python
recovery_service_subnet_id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `protection_policy_id`<sup>Required</sup> <a name="protection_policy_id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.protectionPolicyId"></a>

```python
protection_policy_id: str
```

- *Type:* str

---

##### `recovery_service_subnet_id`<sup>Required</sup> <a name="recovery_service_subnet_id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.recoveryServiceSubnetId"></a>

```python
recovery_service_subnet_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciRecoveryProtectedDatabasesConfig <a name="DataOciRecoveryProtectedDatabasesConfig" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_recovery_protected_databases

dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciRecoveryProtectedDatabasesFilter]] = None,
  id: str = None,
  protection_policy_id: str = None,
  recovery_service_subnet_id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#compartment_id DataOciRecoveryProtectedDatabases#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#display_name DataOciRecoveryProtectedDatabases#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilter">DataOciRecoveryProtectedDatabasesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#id DataOciRecoveryProtectedDatabases#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.protectionPolicyId">protection_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#protection_policy_id DataOciRecoveryProtectedDatabases#protection_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.recoveryServiceSubnetId">recovery_service_subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#recovery_service_subnet_id DataOciRecoveryProtectedDatabases#recovery_service_subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#state DataOciRecoveryProtectedDatabases#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#compartment_id DataOciRecoveryProtectedDatabases#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#display_name DataOciRecoveryProtectedDatabases#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciRecoveryProtectedDatabasesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilter">DataOciRecoveryProtectedDatabasesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#filter DataOciRecoveryProtectedDatabases#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#id DataOciRecoveryProtectedDatabases#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `protection_policy_id`<sup>Optional</sup> <a name="protection_policy_id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.protectionPolicyId"></a>

```python
protection_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#protection_policy_id DataOciRecoveryProtectedDatabases#protection_policy_id}.

---

##### `recovery_service_subnet_id`<sup>Optional</sup> <a name="recovery_service_subnet_id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.recoveryServiceSubnetId"></a>

```python
recovery_service_subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#recovery_service_subnet_id DataOciRecoveryProtectedDatabases#recovery_service_subnet_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#state DataOciRecoveryProtectedDatabases#state}.

---

### DataOciRecoveryProtectedDatabasesFilter <a name="DataOciRecoveryProtectedDatabasesFilter" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_recovery_protected_databases

dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#name DataOciRecoveryProtectedDatabases#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#values DataOciRecoveryProtectedDatabases#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#regex DataOciRecoveryProtectedDatabases#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#name DataOciRecoveryProtectedDatabases#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#values DataOciRecoveryProtectedDatabases#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#regex DataOciRecoveryProtectedDatabases#regex}.

---

### DataOciRecoveryProtectedDatabasesProtectedDatabaseCollection <a name="DataOciRecoveryProtectedDatabasesProtectedDatabaseCollection" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_recovery_protected_databases

dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollection()
```


### DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItems <a name="DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_recovery_protected_databases

dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItems()
```


### DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetrics <a name="DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetrics" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetrics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetrics.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_recovery_protected_databases

dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetrics()
```


### DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnets <a name="DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnets" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnets"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnets.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_recovery_protected_databases

dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnets()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciRecoveryProtectedDatabasesFilterList <a name="DataOciRecoveryProtectedDatabasesFilterList" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_recovery_protected_databases

dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciRecoveryProtectedDatabasesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilter">DataOciRecoveryProtectedDatabasesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciRecoveryProtectedDatabasesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilter">DataOciRecoveryProtectedDatabasesFilter</a>]]

---


### DataOciRecoveryProtectedDatabasesFilterOutputReference <a name="DataOciRecoveryProtectedDatabasesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_recovery_protected_databases

dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilter">DataOciRecoveryProtectedDatabasesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciRecoveryProtectedDatabasesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilter">DataOciRecoveryProtectedDatabasesFilter</a>]

---


### DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList <a name="DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_recovery_protected_databases

dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList <a name="DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_recovery_protected_databases

dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference <a name="DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_recovery_protected_databases

dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.backupSpaceEstimateInGbs">backup_space_estimate_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.backupSpaceUsedInGbs">backup_space_used_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.currentRetentionPeriodInSeconds">current_retention_period_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.dbSizeInGbs">db_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.isRedoLogsEnabled">is_redo_logs_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.minimumRecoveryNeededInDays">minimum_recovery_needed_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.retentionPeriodInDays">retention_period_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.unprotectedWindowInSeconds">unprotected_window_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetrics">DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetrics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup_space_estimate_in_gbs`<sup>Required</sup> <a name="backup_space_estimate_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.backupSpaceEstimateInGbs"></a>

```python
backup_space_estimate_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backup_space_used_in_gbs`<sup>Required</sup> <a name="backup_space_used_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.backupSpaceUsedInGbs"></a>

```python
backup_space_used_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `current_retention_period_in_seconds`<sup>Required</sup> <a name="current_retention_period_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.currentRetentionPeriodInSeconds"></a>

```python
current_retention_period_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_size_in_gbs`<sup>Required</sup> <a name="db_size_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.dbSizeInGbs"></a>

```python
db_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_redo_logs_enabled`<sup>Required</sup> <a name="is_redo_logs_enabled" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.isRedoLogsEnabled"></a>

```python
is_redo_logs_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `minimum_recovery_needed_in_days`<sup>Required</sup> <a name="minimum_recovery_needed_in_days" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.minimumRecoveryNeededInDays"></a>

```python
minimum_recovery_needed_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retention_period_in_days`<sup>Required</sup> <a name="retention_period_in_days" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.retentionPeriodInDays"></a>

```python
retention_period_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unprotected_window_in_seconds`<sup>Required</sup> <a name="unprotected_window_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.unprotectedWindowInSeconds"></a>

```python
unprotected_window_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetrics
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetrics">DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetrics</a>

---


### DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference <a name="DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_recovery_protected_databases

dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.databaseId">database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.databaseSize">database_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.dbUniqueName">db_unique_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.deletionSchedule">deletion_schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.health">health</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.healthDetails">health_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.isReadOnlyResource">is_read_only_resource</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.isRedoLogsShipped">is_redo_logs_shipped</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.metrics">metrics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList">DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.policyLockedDateTime">policy_locked_date_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.protectionPolicyId">protection_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.recoveryServiceSubnets">recovery_service_subnets</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList">DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.vpcUserName">vpc_user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItems">DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `database_id`<sup>Required</sup> <a name="database_id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.databaseId"></a>

```python
database_id: str
```

- *Type:* str

---

##### `database_size`<sup>Required</sup> <a name="database_size" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.databaseSize"></a>

```python
database_size: str
```

- *Type:* str

---

##### `db_unique_name`<sup>Required</sup> <a name="db_unique_name" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.dbUniqueName"></a>

```python
db_unique_name: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `deletion_schedule`<sup>Required</sup> <a name="deletion_schedule" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.deletionSchedule"></a>

```python
deletion_schedule: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `health`<sup>Required</sup> <a name="health" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.health"></a>

```python
health: str
```

- *Type:* str

---

##### `health_details`<sup>Required</sup> <a name="health_details" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.healthDetails"></a>

```python
health_details: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_read_only_resource`<sup>Required</sup> <a name="is_read_only_resource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.isReadOnlyResource"></a>

```python
is_read_only_resource: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_redo_logs_shipped`<sup>Required</sup> <a name="is_redo_logs_shipped" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.isRedoLogsShipped"></a>

```python
is_redo_logs_shipped: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.metrics"></a>

```python
metrics: DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList">DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList</a>

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `policy_locked_date_time`<sup>Required</sup> <a name="policy_locked_date_time" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.policyLockedDateTime"></a>

```python
policy_locked_date_time: str
```

- *Type:* str

---

##### `protection_policy_id`<sup>Required</sup> <a name="protection_policy_id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.protectionPolicyId"></a>

```python
protection_policy_id: str
```

- *Type:* str

---

##### `recovery_service_subnets`<sup>Required</sup> <a name="recovery_service_subnets" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.recoveryServiceSubnets"></a>

```python
recovery_service_subnets: DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList">DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `vpc_user_name`<sup>Required</sup> <a name="vpc_user_name" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.vpcUserName"></a>

```python
vpc_user_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItems">DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItems</a>

---


### DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList <a name="DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_recovery_protected_databases

dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference <a name="DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_recovery_protected_databases

dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.property.recoveryServiceSubnetId">recovery_service_subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnets">DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `recovery_service_subnet_id`<sup>Required</sup> <a name="recovery_service_subnet_id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.property.recoveryServiceSubnetId"></a>

```python
recovery_service_subnet_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnets
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnets">DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnets</a>

---


### DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList <a name="DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_recovery_protected_databases

dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference <a name="DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_recovery_protected_databases

dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList">DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollection">DataOciRecoveryProtectedDatabasesProtectedDatabaseCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.property.items"></a>

```python
items: DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList">DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciRecoveryProtectedDatabasesProtectedDatabaseCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollection">DataOciRecoveryProtectedDatabasesProtectedDatabaseCollection</a>

---



