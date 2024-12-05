# `dataOciWaaWebAppAccelerationPolicies` Submodule <a name="`dataOciWaaWebAppAccelerationPolicies` Submodule" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciWaaWebAppAccelerationPolicies <a name="DataOciWaaWebAppAccelerationPolicies" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies oci_waa_web_app_acceleration_policies}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waa_web_app_acceleration_policies

dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies(
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
  filter: typing.Union[IResolvable, typing.List[DataOciWaaWebAppAccelerationPoliciesFilter]] = None,
  id: str = None,
  state: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#compartment_id DataOciWaaWebAppAccelerationPolicies#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#display_name DataOciWaaWebAppAccelerationPolicies#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilter">DataOciWaaWebAppAccelerationPoliciesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#id DataOciWaaWebAppAccelerationPolicies#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.Initializer.parameter.state">state</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#state DataOciWaaWebAppAccelerationPolicies#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#compartment_id DataOciWaaWebAppAccelerationPolicies#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#display_name DataOciWaaWebAppAccelerationPolicies#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilter">DataOciWaaWebAppAccelerationPoliciesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#filter DataOciWaaWebAppAccelerationPolicies#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#id DataOciWaaWebAppAccelerationPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.Initializer.parameter.state"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#state DataOciWaaWebAppAccelerationPolicies#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciWaaWebAppAccelerationPoliciesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilter">DataOciWaaWebAppAccelerationPoliciesFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciWaaWebAppAccelerationPolicies resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waa_web_app_acceleration_policies

dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waa_web_app_acceleration_policies

dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waa_web_app_acceleration_policies

dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waa_web_app_acceleration_policies

dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciWaaWebAppAccelerationPolicies resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciWaaWebAppAccelerationPolicies to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciWaaWebAppAccelerationPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciWaaWebAppAccelerationPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList">DataOciWaaWebAppAccelerationPoliciesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.webAppAccelerationPolicyCollection">web_app_acceleration_policy_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilter">DataOciWaaWebAppAccelerationPoliciesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.stateInput">state_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.state">state</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.filter"></a>

```python
filter: DataOciWaaWebAppAccelerationPoliciesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList">DataOciWaaWebAppAccelerationPoliciesFilterList</a>

---

##### `web_app_acceleration_policy_collection`<sup>Required</sup> <a name="web_app_acceleration_policy_collection" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.webAppAccelerationPolicyCollection"></a>

```python
web_app_acceleration_policy_collection: DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciWaaWebAppAccelerationPoliciesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilter">DataOciWaaWebAppAccelerationPoliciesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.stateInput"></a>

```python
state_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.state"></a>

```python
state: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciWaaWebAppAccelerationPoliciesConfig <a name="DataOciWaaWebAppAccelerationPoliciesConfig" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waa_web_app_acceleration_policies

dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciWaaWebAppAccelerationPoliciesFilter]] = None,
  id: str = None,
  state: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#compartment_id DataOciWaaWebAppAccelerationPolicies#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#display_name DataOciWaaWebAppAccelerationPolicies#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilter">DataOciWaaWebAppAccelerationPoliciesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#id DataOciWaaWebAppAccelerationPolicies#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.state">state</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#state DataOciWaaWebAppAccelerationPolicies#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#compartment_id DataOciWaaWebAppAccelerationPolicies#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#display_name DataOciWaaWebAppAccelerationPolicies#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciWaaWebAppAccelerationPoliciesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilter">DataOciWaaWebAppAccelerationPoliciesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#filter DataOciWaaWebAppAccelerationPolicies#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#id DataOciWaaWebAppAccelerationPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.state"></a>

```python
state: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#state DataOciWaaWebAppAccelerationPolicies#state}.

---

### DataOciWaaWebAppAccelerationPoliciesFilter <a name="DataOciWaaWebAppAccelerationPoliciesFilter" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waa_web_app_acceleration_policies

dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#name DataOciWaaWebAppAccelerationPolicies#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#values DataOciWaaWebAppAccelerationPolicies#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#regex DataOciWaaWebAppAccelerationPolicies#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#name DataOciWaaWebAppAccelerationPolicies#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#values DataOciWaaWebAppAccelerationPolicies#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#regex DataOciWaaWebAppAccelerationPolicies#regex}.

---

### DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollection <a name="DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollection" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waa_web_app_acceleration_policies

dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollection()
```


### DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItems <a name="DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waa_web_app_acceleration_policies

dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItems()
```


### DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicy <a name="DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicy" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waa_web_app_acceleration_policies

dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicy()
```


### DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicy <a name="DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicy" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waa_web_app_acceleration_policies

dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicy()
```


### DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompression <a name="DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompression" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompression"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompression.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waa_web_app_acceleration_policies

dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompression()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciWaaWebAppAccelerationPoliciesFilterList <a name="DataOciWaaWebAppAccelerationPoliciesFilterList" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waa_web_app_acceleration_policies

dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaaWebAppAccelerationPoliciesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilter">DataOciWaaWebAppAccelerationPoliciesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciWaaWebAppAccelerationPoliciesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilter">DataOciWaaWebAppAccelerationPoliciesFilter</a>]]

---


### DataOciWaaWebAppAccelerationPoliciesFilterOutputReference <a name="DataOciWaaWebAppAccelerationPoliciesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waa_web_app_acceleration_policies

dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilter">DataOciWaaWebAppAccelerationPoliciesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciWaaWebAppAccelerationPoliciesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilter">DataOciWaaWebAppAccelerationPoliciesFilter</a>]

---


### DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList <a name="DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waa_web_app_acceleration_policies

dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference <a name="DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waa_web_app_acceleration_policies

dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.responseCachingPolicy">response_caching_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.responseCompressionPolicy">response_compression_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItems">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `response_caching_policy`<sup>Required</sup> <a name="response_caching_policy" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.responseCachingPolicy"></a>

```python
response_caching_policy: DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList</a>

---

##### `response_compression_policy`<sup>Required</sup> <a name="response_compression_policy" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.responseCompressionPolicy"></a>

```python
response_compression_policy: DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItems">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItems</a>

---


### DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList <a name="DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waa_web_app_acceleration_policies

dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference <a name="DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waa_web_app_acceleration_policies

dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.property.isResponseHeaderBasedCachingEnabled">is_response_header_based_caching_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicy">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_response_header_based_caching_enabled`<sup>Required</sup> <a name="is_response_header_based_caching_enabled" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.property.isResponseHeaderBasedCachingEnabled"></a>

```python
is_response_header_based_caching_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicy">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicy</a>

---


### DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList <a name="DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waa_web_app_acceleration_policies

dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference <a name="DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waa_web_app_acceleration_policies

dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.property.isEnabled">is_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompression">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompression</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.property.isEnabled"></a>

```python
is_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompression
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompression">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompression</a>

---


### DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList <a name="DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waa_web_app_acceleration_policies

dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference <a name="DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waa_web_app_acceleration_policies

dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.property.gzipCompression">gzip_compression</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicy">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gzip_compression`<sup>Required</sup> <a name="gzip_compression" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.property.gzipCompression"></a>

```python
gzip_compression: DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicy">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicy</a>

---


### DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList <a name="DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waa_web_app_acceleration_policies

dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference <a name="DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waa_web_app_acceleration_policies

dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollection">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.property.items"></a>

```python
items: DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollection">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollection</a>

---



