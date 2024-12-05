# `dataOciRecoveryRecoveryServiceSubnets` Submodule <a name="`dataOciRecoveryRecoveryServiceSubnets` Submodule" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciRecoveryRecoveryServiceSubnets <a name="DataOciRecoveryRecoveryServiceSubnets" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets oci_recovery_recovery_service_subnets}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_recovery_recovery_service_subnets

dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets(
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
  filter: typing.Union[IResolvable, typing.List[DataOciRecoveryRecoveryServiceSubnetsFilter]] = None,
  id: str = None,
  state: str = None,
  vcn_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets#compartment_id DataOciRecoveryRecoveryServiceSubnets#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets#display_name DataOciRecoveryRecoveryServiceSubnets#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilter">DataOciRecoveryRecoveryServiceSubnetsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets#id DataOciRecoveryRecoveryServiceSubnets#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets#state DataOciRecoveryRecoveryServiceSubnets#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.Initializer.parameter.vcnId">vcn_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets#vcn_id DataOciRecoveryRecoveryServiceSubnets#vcn_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets#compartment_id DataOciRecoveryRecoveryServiceSubnets#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets#display_name DataOciRecoveryRecoveryServiceSubnets#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilter">DataOciRecoveryRecoveryServiceSubnetsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets#filter DataOciRecoveryRecoveryServiceSubnets#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets#id DataOciRecoveryRecoveryServiceSubnets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets#state DataOciRecoveryRecoveryServiceSubnets#state}.

---

##### `vcn_id`<sup>Optional</sup> <a name="vcn_id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.Initializer.parameter.vcnId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets#vcn_id DataOciRecoveryRecoveryServiceSubnets#vcn_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.resetVcnId">reset_vcn_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciRecoveryRecoveryServiceSubnetsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilter">DataOciRecoveryRecoveryServiceSubnetsFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_vcn_id` <a name="reset_vcn_id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.resetVcnId"></a>

```python
def reset_vcn_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciRecoveryRecoveryServiceSubnets resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_recovery_recovery_service_subnets

dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_recovery_recovery_service_subnets

dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_recovery_recovery_service_subnets

dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_recovery_recovery_service_subnets

dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciRecoveryRecoveryServiceSubnets resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciRecoveryRecoveryServiceSubnets to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciRecoveryRecoveryServiceSubnets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciRecoveryRecoveryServiceSubnets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList">DataOciRecoveryRecoveryServiceSubnetsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.recoveryServiceSubnetCollection">recovery_service_subnet_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList">DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilter">DataOciRecoveryRecoveryServiceSubnetsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.vcnIdInput">vcn_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.vcnId">vcn_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.filter"></a>

```python
filter: DataOciRecoveryRecoveryServiceSubnetsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList">DataOciRecoveryRecoveryServiceSubnetsFilterList</a>

---

##### `recovery_service_subnet_collection`<sup>Required</sup> <a name="recovery_service_subnet_collection" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.recoveryServiceSubnetCollection"></a>

```python
recovery_service_subnet_collection: DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList">DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciRecoveryRecoveryServiceSubnetsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilter">DataOciRecoveryRecoveryServiceSubnetsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `vcn_id_input`<sup>Optional</sup> <a name="vcn_id_input" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.vcnIdInput"></a>

```python
vcn_id_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `vcn_id`<sup>Required</sup> <a name="vcn_id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.vcnId"></a>

```python
vcn_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciRecoveryRecoveryServiceSubnetsConfig <a name="DataOciRecoveryRecoveryServiceSubnetsConfig" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_recovery_recovery_service_subnets

dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciRecoveryRecoveryServiceSubnetsFilter]] = None,
  id: str = None,
  state: str = None,
  vcn_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets#compartment_id DataOciRecoveryRecoveryServiceSubnets#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets#display_name DataOciRecoveryRecoveryServiceSubnets#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilter">DataOciRecoveryRecoveryServiceSubnetsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets#id DataOciRecoveryRecoveryServiceSubnets#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets#state DataOciRecoveryRecoveryServiceSubnets#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.vcnId">vcn_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets#vcn_id DataOciRecoveryRecoveryServiceSubnets#vcn_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets#compartment_id DataOciRecoveryRecoveryServiceSubnets#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets#display_name DataOciRecoveryRecoveryServiceSubnets#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciRecoveryRecoveryServiceSubnetsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilter">DataOciRecoveryRecoveryServiceSubnetsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets#filter DataOciRecoveryRecoveryServiceSubnets#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets#id DataOciRecoveryRecoveryServiceSubnets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets#state DataOciRecoveryRecoveryServiceSubnets#state}.

---

##### `vcn_id`<sup>Optional</sup> <a name="vcn_id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.vcnId"></a>

```python
vcn_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets#vcn_id DataOciRecoveryRecoveryServiceSubnets#vcn_id}.

---

### DataOciRecoveryRecoveryServiceSubnetsFilter <a name="DataOciRecoveryRecoveryServiceSubnetsFilter" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_recovery_recovery_service_subnets

dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets#name DataOciRecoveryRecoveryServiceSubnets#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets#values DataOciRecoveryRecoveryServiceSubnets#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets#regex DataOciRecoveryRecoveryServiceSubnets#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets#name DataOciRecoveryRecoveryServiceSubnets#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets#values DataOciRecoveryRecoveryServiceSubnets#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets#regex DataOciRecoveryRecoveryServiceSubnets#regex}.

---

### DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollection <a name="DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollection" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_recovery_recovery_service_subnets

dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollection()
```


### DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItems <a name="DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_recovery_recovery_service_subnets

dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciRecoveryRecoveryServiceSubnetsFilterList <a name="DataOciRecoveryRecoveryServiceSubnetsFilterList" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_recovery_recovery_service_subnets

dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilter">DataOciRecoveryRecoveryServiceSubnetsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciRecoveryRecoveryServiceSubnetsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilter">DataOciRecoveryRecoveryServiceSubnetsFilter</a>]]

---


### DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference <a name="DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_recovery_recovery_service_subnets

dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilter">DataOciRecoveryRecoveryServiceSubnetsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciRecoveryRecoveryServiceSubnetsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilter">DataOciRecoveryRecoveryServiceSubnetsFilter</a>]

---


### DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList <a name="DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_recovery_recovery_service_subnets

dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference <a name="DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_recovery_recovery_service_subnets

dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.vcnId">vcn_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItems">DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `nsg_ids`<sup>Required</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `vcn_id`<sup>Required</sup> <a name="vcn_id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.vcnId"></a>

```python
vcn_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItems">DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItems</a>

---


### DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList <a name="DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_recovery_recovery_service_subnets

dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference <a name="DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_recovery_recovery_service_subnets

dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList">DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollection">DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.property.items"></a>

```python
items: DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList">DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollection">DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollection</a>

---



