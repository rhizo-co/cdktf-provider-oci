# `dataOciWaaWebAppAccelerations` Submodule <a name="`dataOciWaaWebAppAccelerations` Submodule" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciWaaWebAppAccelerations <a name="DataOciWaaWebAppAccelerations" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_accelerations oci_waa_web_app_accelerations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waa_web_app_accelerations

dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations(
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
  filter: typing.Union[IResolvable, typing.List[DataOciWaaWebAppAccelerationsFilter]] = None,
  id: str = None,
  state: typing.List[str] = None,
  web_app_acceleration_policy_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_accelerations#compartment_id DataOciWaaWebAppAccelerations#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_accelerations#display_name DataOciWaaWebAppAccelerations#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilter">DataOciWaaWebAppAccelerationsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_accelerations#id DataOciWaaWebAppAccelerations#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.Initializer.parameter.state">state</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_accelerations#state DataOciWaaWebAppAccelerations#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.Initializer.parameter.webAppAccelerationPolicyId">web_app_acceleration_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_accelerations#web_app_acceleration_policy_id DataOciWaaWebAppAccelerations#web_app_acceleration_policy_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_accelerations#compartment_id DataOciWaaWebAppAccelerations#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_accelerations#display_name DataOciWaaWebAppAccelerations#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilter">DataOciWaaWebAppAccelerationsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_accelerations#filter DataOciWaaWebAppAccelerations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_accelerations#id DataOciWaaWebAppAccelerations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.Initializer.parameter.state"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_accelerations#state DataOciWaaWebAppAccelerations#state}.

---

##### `web_app_acceleration_policy_id`<sup>Optional</sup> <a name="web_app_acceleration_policy_id" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.Initializer.parameter.webAppAccelerationPolicyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_accelerations#web_app_acceleration_policy_id DataOciWaaWebAppAccelerations#web_app_acceleration_policy_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.resetWebAppAccelerationPolicyId">reset_web_app_acceleration_policy_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciWaaWebAppAccelerationsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilter">DataOciWaaWebAppAccelerationsFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_web_app_acceleration_policy_id` <a name="reset_web_app_acceleration_policy_id" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.resetWebAppAccelerationPolicyId"></a>

```python
def reset_web_app_acceleration_policy_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciWaaWebAppAccelerations resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waa_web_app_accelerations

dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waa_web_app_accelerations

dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waa_web_app_accelerations

dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waa_web_app_accelerations

dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciWaaWebAppAccelerations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciWaaWebAppAccelerations to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciWaaWebAppAccelerations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_accelerations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciWaaWebAppAccelerations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterList">DataOciWaaWebAppAccelerationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.property.webAppAccelerationCollection">web_app_acceleration_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionList">DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilter">DataOciWaaWebAppAccelerationsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.property.stateInput">state_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.property.webAppAccelerationPolicyIdInput">web_app_acceleration_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.property.state">state</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.property.webAppAccelerationPolicyId">web_app_acceleration_policy_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.property.filter"></a>

```python
filter: DataOciWaaWebAppAccelerationsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterList">DataOciWaaWebAppAccelerationsFilterList</a>

---

##### `web_app_acceleration_collection`<sup>Required</sup> <a name="web_app_acceleration_collection" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.property.webAppAccelerationCollection"></a>

```python
web_app_acceleration_collection: DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionList">DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciWaaWebAppAccelerationsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilter">DataOciWaaWebAppAccelerationsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.property.stateInput"></a>

```python
state_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `web_app_acceleration_policy_id_input`<sup>Optional</sup> <a name="web_app_acceleration_policy_id_input" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.property.webAppAccelerationPolicyIdInput"></a>

```python
web_app_acceleration_policy_id_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.property.state"></a>

```python
state: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `web_app_acceleration_policy_id`<sup>Required</sup> <a name="web_app_acceleration_policy_id" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.property.webAppAccelerationPolicyId"></a>

```python
web_app_acceleration_policy_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerations.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciWaaWebAppAccelerationsConfig <a name="DataOciWaaWebAppAccelerationsConfig" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waa_web_app_accelerations

dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciWaaWebAppAccelerationsFilter]] = None,
  id: str = None,
  state: typing.List[str] = None,
  web_app_acceleration_policy_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_accelerations#compartment_id DataOciWaaWebAppAccelerations#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_accelerations#display_name DataOciWaaWebAppAccelerations#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilter">DataOciWaaWebAppAccelerationsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_accelerations#id DataOciWaaWebAppAccelerations#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsConfig.property.state">state</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_accelerations#state DataOciWaaWebAppAccelerations#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsConfig.property.webAppAccelerationPolicyId">web_app_acceleration_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_accelerations#web_app_acceleration_policy_id DataOciWaaWebAppAccelerations#web_app_acceleration_policy_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_accelerations#compartment_id DataOciWaaWebAppAccelerations#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_accelerations#display_name DataOciWaaWebAppAccelerations#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciWaaWebAppAccelerationsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilter">DataOciWaaWebAppAccelerationsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_accelerations#filter DataOciWaaWebAppAccelerations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_accelerations#id DataOciWaaWebAppAccelerations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsConfig.property.state"></a>

```python
state: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_accelerations#state DataOciWaaWebAppAccelerations#state}.

---

##### `web_app_acceleration_policy_id`<sup>Optional</sup> <a name="web_app_acceleration_policy_id" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsConfig.property.webAppAccelerationPolicyId"></a>

```python
web_app_acceleration_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_accelerations#web_app_acceleration_policy_id DataOciWaaWebAppAccelerations#web_app_acceleration_policy_id}.

---

### DataOciWaaWebAppAccelerationsFilter <a name="DataOciWaaWebAppAccelerationsFilter" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waa_web_app_accelerations

dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_accelerations#name DataOciWaaWebAppAccelerations#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_accelerations#values DataOciWaaWebAppAccelerations#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_accelerations#regex DataOciWaaWebAppAccelerations#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_accelerations#name DataOciWaaWebAppAccelerations#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_accelerations#values DataOciWaaWebAppAccelerations#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_accelerations#regex DataOciWaaWebAppAccelerations#regex}.

---

### DataOciWaaWebAppAccelerationsWebAppAccelerationCollection <a name="DataOciWaaWebAppAccelerationsWebAppAccelerationCollection" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waa_web_app_accelerations

dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollection()
```


### DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItems <a name="DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waa_web_app_accelerations

dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciWaaWebAppAccelerationsFilterList <a name="DataOciWaaWebAppAccelerationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waa_web_app_accelerations

dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaaWebAppAccelerationsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilter">DataOciWaaWebAppAccelerationsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciWaaWebAppAccelerationsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilter">DataOciWaaWebAppAccelerationsFilter</a>]]

---


### DataOciWaaWebAppAccelerationsFilterOutputReference <a name="DataOciWaaWebAppAccelerationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waa_web_app_accelerations

dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilter">DataOciWaaWebAppAccelerationsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciWaaWebAppAccelerationsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsFilter">DataOciWaaWebAppAccelerationsFilter</a>]

---


### DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsList <a name="DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waa_web_app_accelerations

dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference <a name="DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waa_web_app_accelerations

dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.property.backendType">backend_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.property.loadBalancerId">load_balancer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.property.webAppAccelerationPolicyId">web_app_acceleration_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItems">DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backend_type`<sup>Required</sup> <a name="backend_type" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.property.backendType"></a>

```python
backend_type: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `load_balancer_id`<sup>Required</sup> <a name="load_balancer_id" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.property.loadBalancerId"></a>

```python
load_balancer_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `web_app_acceleration_policy_id`<sup>Required</sup> <a name="web_app_acceleration_policy_id" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.property.webAppAccelerationPolicyId"></a>

```python
web_app_acceleration_policy_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItems">DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItems</a>

---


### DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionList <a name="DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionList" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waa_web_app_accelerations

dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionOutputReference <a name="DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waa_web_app_accelerations

dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsList">DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollection">DataOciWaaWebAppAccelerationsWebAppAccelerationCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionOutputReference.property.items"></a>

```python
items: DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsList">DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWaaWebAppAccelerationsWebAppAccelerationCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerations.DataOciWaaWebAppAccelerationsWebAppAccelerationCollection">DataOciWaaWebAppAccelerationsWebAppAccelerationCollection</a>

---



