# `dataOciCoreSecurityLists` Submodule <a name="`dataOciCoreSecurityLists` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreSecurityLists <a name="DataOciCoreSecurityLists" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists oci_core_security_lists}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_security_lists

dataOciCoreSecurityLists.DataOciCoreSecurityLists(
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
  filter: typing.Union[IResolvable, typing.List[DataOciCoreSecurityListsFilter]] = None,
  id: str = None,
  state: str = None,
  vcn_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists#compartment_id DataOciCoreSecurityLists#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists#display_name DataOciCoreSecurityLists#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilter">DataOciCoreSecurityListsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists#id DataOciCoreSecurityLists#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists#state DataOciCoreSecurityLists#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.Initializer.parameter.vcnId">vcn_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists#vcn_id DataOciCoreSecurityLists#vcn_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists#compartment_id DataOciCoreSecurityLists#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists#display_name DataOciCoreSecurityLists#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilter">DataOciCoreSecurityListsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists#filter DataOciCoreSecurityLists#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists#id DataOciCoreSecurityLists#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists#state DataOciCoreSecurityLists#state}.

---

##### `vcn_id`<sup>Optional</sup> <a name="vcn_id" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.Initializer.parameter.vcnId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists#vcn_id DataOciCoreSecurityLists#vcn_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.resetVcnId">reset_vcn_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciCoreSecurityListsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilter">DataOciCoreSecurityListsFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_vcn_id` <a name="reset_vcn_id" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.resetVcnId"></a>

```python
def reset_vcn_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCoreSecurityLists resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_security_lists

dataOciCoreSecurityLists.DataOciCoreSecurityLists.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_security_lists

dataOciCoreSecurityLists.DataOciCoreSecurityLists.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_security_lists

dataOciCoreSecurityLists.DataOciCoreSecurityLists.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_security_lists

dataOciCoreSecurityLists.DataOciCoreSecurityLists.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCoreSecurityLists resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCoreSecurityLists to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCoreSecurityLists that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreSecurityLists to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList">DataOciCoreSecurityListsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.securityLists">security_lists</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList">DataOciCoreSecurityListsSecurityListsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilter">DataOciCoreSecurityListsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.vcnIdInput">vcn_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.vcnId">vcn_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.filter"></a>

```python
filter: DataOciCoreSecurityListsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList">DataOciCoreSecurityListsFilterList</a>

---

##### `security_lists`<sup>Required</sup> <a name="security_lists" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.securityLists"></a>

```python
security_lists: DataOciCoreSecurityListsSecurityListsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList">DataOciCoreSecurityListsSecurityListsList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciCoreSecurityListsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilter">DataOciCoreSecurityListsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `vcn_id_input`<sup>Optional</sup> <a name="vcn_id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.vcnIdInput"></a>

```python
vcn_id_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `vcn_id`<sup>Required</sup> <a name="vcn_id" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.vcnId"></a>

```python
vcn_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreSecurityListsConfig <a name="DataOciCoreSecurityListsConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_security_lists

dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCoreSecurityListsFilter]] = None,
  id: str = None,
  state: str = None,
  vcn_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists#compartment_id DataOciCoreSecurityLists#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists#display_name DataOciCoreSecurityLists#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilter">DataOciCoreSecurityListsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists#id DataOciCoreSecurityLists#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists#state DataOciCoreSecurityLists#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.vcnId">vcn_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists#vcn_id DataOciCoreSecurityLists#vcn_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists#compartment_id DataOciCoreSecurityLists#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists#display_name DataOciCoreSecurityLists#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciCoreSecurityListsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilter">DataOciCoreSecurityListsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists#filter DataOciCoreSecurityLists#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists#id DataOciCoreSecurityLists#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists#state DataOciCoreSecurityLists#state}.

---

##### `vcn_id`<sup>Optional</sup> <a name="vcn_id" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.vcnId"></a>

```python
vcn_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists#vcn_id DataOciCoreSecurityLists#vcn_id}.

---

### DataOciCoreSecurityListsFilter <a name="DataOciCoreSecurityListsFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_security_lists

dataOciCoreSecurityLists.DataOciCoreSecurityListsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists#name DataOciCoreSecurityLists#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists#values DataOciCoreSecurityLists#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists#regex DataOciCoreSecurityLists#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists#name DataOciCoreSecurityLists#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists#values DataOciCoreSecurityLists#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists#regex DataOciCoreSecurityLists#regex}.

---

### DataOciCoreSecurityListsSecurityLists <a name="DataOciCoreSecurityListsSecurityLists" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityLists"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityLists.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_security_lists

dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityLists()
```


### DataOciCoreSecurityListsSecurityListsEgressSecurityRules <a name="DataOciCoreSecurityListsSecurityListsEgressSecurityRules" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_security_lists

dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRules()
```


### DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptions <a name="DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_security_lists

dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptions()
```


### DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptions <a name="DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_security_lists

dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptions()
```


### DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRange <a name="DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRange.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_security_lists

dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRange()
```


### DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptions <a name="DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_security_lists

dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptions()
```


### DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRange <a name="DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRange.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_security_lists

dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRange()
```


### DataOciCoreSecurityListsSecurityListsIngressSecurityRules <a name="DataOciCoreSecurityListsSecurityListsIngressSecurityRules" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_security_lists

dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRules()
```


### DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptions <a name="DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_security_lists

dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptions()
```


### DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptions <a name="DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_security_lists

dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptions()
```


### DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRange <a name="DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRange.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_security_lists

dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRange()
```


### DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptions <a name="DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_security_lists

dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptions()
```


### DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRange <a name="DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRange.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_security_lists

dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRange()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreSecurityListsFilterList <a name="DataOciCoreSecurityListsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_security_lists

dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreSecurityListsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilter">DataOciCoreSecurityListsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciCoreSecurityListsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilter">DataOciCoreSecurityListsFilter</a>]]

---


### DataOciCoreSecurityListsFilterOutputReference <a name="DataOciCoreSecurityListsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_security_lists

dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilter">DataOciCoreSecurityListsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciCoreSecurityListsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilter">DataOciCoreSecurityListsFilter</a>]

---


### DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList <a name="DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_security_lists

dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference <a name="DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_security_lists

dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.property.type">type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptions">DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.property.type"></a>

```python
type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptions">DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptions</a>

---


### DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList <a name="DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_security_lists

dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference <a name="DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_security_lists

dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.property.destinationType">destination_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.property.icmpOptions">icmp_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList">DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.property.stateless">stateless</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.property.tcpOptions">tcp_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList">DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.property.udpOptions">udp_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList">DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRules">DataOciCoreSecurityListsSecurityListsEgressSecurityRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `destination_type`<sup>Required</sup> <a name="destination_type" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.property.destinationType"></a>

```python
destination_type: str
```

- *Type:* str

---

##### `icmp_options`<sup>Required</sup> <a name="icmp_options" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.property.icmpOptions"></a>

```python
icmp_options: DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList">DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList</a>

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `stateless`<sup>Required</sup> <a name="stateless" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.property.stateless"></a>

```python
stateless: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `tcp_options`<sup>Required</sup> <a name="tcp_options" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.property.tcpOptions"></a>

```python
tcp_options: DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList">DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList</a>

---

##### `udp_options`<sup>Required</sup> <a name="udp_options" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.property.udpOptions"></a>

```python
udp_options: DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList">DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreSecurityListsSecurityListsEgressSecurityRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRules">DataOciCoreSecurityListsSecurityListsEgressSecurityRules</a>

---


### DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList <a name="DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_security_lists

dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference <a name="DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_security_lists

dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.property.sourcePortRange">source_port_range</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList">DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptions">DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_port_range`<sup>Required</sup> <a name="source_port_range" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.property.sourcePortRange"></a>

```python
source_port_range: DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList">DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptions">DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptions</a>

---


### DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList <a name="DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_security_lists

dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference <a name="DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_security_lists

dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRange">DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRange
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRange">DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRange</a>

---


### DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList <a name="DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_security_lists

dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference <a name="DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_security_lists

dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.property.sourcePortRange">source_port_range</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList">DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptions">DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_port_range`<sup>Required</sup> <a name="source_port_range" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.property.sourcePortRange"></a>

```python
source_port_range: DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList">DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptions">DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptions</a>

---


### DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList <a name="DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_security_lists

dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference <a name="DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_security_lists

dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRange">DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRange
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRange">DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRange</a>

---


### DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList <a name="DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_security_lists

dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference <a name="DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_security_lists

dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.property.type">type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptions">DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.property.type"></a>

```python
type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptions">DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptions</a>

---


### DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList <a name="DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_security_lists

dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference <a name="DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_security_lists

dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.property.icmpOptions">icmp_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList">DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.property.sourceType">source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.property.stateless">stateless</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.property.tcpOptions">tcp_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList">DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.property.udpOptions">udp_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList">DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRules">DataOciCoreSecurityListsSecurityListsIngressSecurityRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `icmp_options`<sup>Required</sup> <a name="icmp_options" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.property.icmpOptions"></a>

```python
icmp_options: DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList">DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList</a>

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

---

##### `stateless`<sup>Required</sup> <a name="stateless" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.property.stateless"></a>

```python
stateless: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `tcp_options`<sup>Required</sup> <a name="tcp_options" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.property.tcpOptions"></a>

```python
tcp_options: DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList">DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList</a>

---

##### `udp_options`<sup>Required</sup> <a name="udp_options" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.property.udpOptions"></a>

```python
udp_options: DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList">DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreSecurityListsSecurityListsIngressSecurityRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRules">DataOciCoreSecurityListsSecurityListsIngressSecurityRules</a>

---


### DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList <a name="DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_security_lists

dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference <a name="DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_security_lists

dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.property.sourcePortRange">source_port_range</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList">DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptions">DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_port_range`<sup>Required</sup> <a name="source_port_range" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.property.sourcePortRange"></a>

```python
source_port_range: DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList">DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptions">DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptions</a>

---


### DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList <a name="DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_security_lists

dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference <a name="DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_security_lists

dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRange">DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRange
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRange">DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRange</a>

---


### DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList <a name="DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_security_lists

dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference <a name="DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_security_lists

dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.property.sourcePortRange">source_port_range</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList">DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptions">DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_port_range`<sup>Required</sup> <a name="source_port_range" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.property.sourcePortRange"></a>

```python
source_port_range: DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList">DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptions">DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptions</a>

---


### DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList <a name="DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_security_lists

dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference <a name="DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_security_lists

dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRange">DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRange
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRange">DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRange</a>

---


### DataOciCoreSecurityListsSecurityListsList <a name="DataOciCoreSecurityListsSecurityListsList" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_security_lists

dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreSecurityListsSecurityListsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreSecurityListsSecurityListsOutputReference <a name="DataOciCoreSecurityListsSecurityListsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_security_lists

dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.egressSecurityRules">egress_security_rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList">DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.ingressSecurityRules">ingress_security_rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList">DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.vcnId">vcn_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityLists">DataOciCoreSecurityListsSecurityLists</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `egress_security_rules`<sup>Required</sup> <a name="egress_security_rules" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.egressSecurityRules"></a>

```python
egress_security_rules: DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList">DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList</a>

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ingress_security_rules`<sup>Required</sup> <a name="ingress_security_rules" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.ingressSecurityRules"></a>

```python
ingress_security_rules: DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList">DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `vcn_id`<sup>Required</sup> <a name="vcn_id" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.vcnId"></a>

```python
vcn_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreSecurityListsSecurityLists
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityLists">DataOciCoreSecurityListsSecurityLists</a>

---



