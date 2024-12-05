# `dataOciIntegrationIntegrationInstances` Submodule <a name="`dataOciIntegrationIntegrationInstances` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIntegrationIntegrationInstances <a name="DataOciIntegrationIntegrationInstances" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instances oci_integration_integration_instances}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instances

dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances(
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
  filter: typing.Union[IResolvable, typing.List[DataOciIntegrationIntegrationInstancesFilter]] = None,
  id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instances#compartment_id DataOciIntegrationIntegrationInstances#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instances#display_name DataOciIntegrationIntegrationInstances#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilter">DataOciIntegrationIntegrationInstancesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instances#id DataOciIntegrationIntegrationInstances#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instances#state DataOciIntegrationIntegrationInstances#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instances#compartment_id DataOciIntegrationIntegrationInstances#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instances#display_name DataOciIntegrationIntegrationInstances#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilter">DataOciIntegrationIntegrationInstancesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instances#filter DataOciIntegrationIntegrationInstances#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instances#id DataOciIntegrationIntegrationInstances#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instances#state DataOciIntegrationIntegrationInstances#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciIntegrationIntegrationInstancesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilter">DataOciIntegrationIntegrationInstancesFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciIntegrationIntegrationInstances resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instances

dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instances

dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instances

dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instances

dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciIntegrationIntegrationInstances resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciIntegrationIntegrationInstances to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciIntegrationIntegrationInstances that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instances#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIntegrationIntegrationInstances to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList">DataOciIntegrationIntegrationInstancesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.integrationInstances">integration_instances</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList">DataOciIntegrationIntegrationInstancesIntegrationInstancesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilter">DataOciIntegrationIntegrationInstancesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.filter"></a>

```python
filter: DataOciIntegrationIntegrationInstancesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList">DataOciIntegrationIntegrationInstancesFilterList</a>

---

##### `integration_instances`<sup>Required</sup> <a name="integration_instances" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.integrationInstances"></a>

```python
integration_instances: DataOciIntegrationIntegrationInstancesIntegrationInstancesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList">DataOciIntegrationIntegrationInstancesIntegrationInstancesList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciIntegrationIntegrationInstancesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilter">DataOciIntegrationIntegrationInstancesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIntegrationIntegrationInstancesConfig <a name="DataOciIntegrationIntegrationInstancesConfig" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instances

dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciIntegrationIntegrationInstancesFilter]] = None,
  id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instances#compartment_id DataOciIntegrationIntegrationInstances#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instances#display_name DataOciIntegrationIntegrationInstances#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilter">DataOciIntegrationIntegrationInstancesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instances#id DataOciIntegrationIntegrationInstances#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instances#state DataOciIntegrationIntegrationInstances#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instances#compartment_id DataOciIntegrationIntegrationInstances#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instances#display_name DataOciIntegrationIntegrationInstances#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciIntegrationIntegrationInstancesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilter">DataOciIntegrationIntegrationInstancesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instances#filter DataOciIntegrationIntegrationInstances#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instances#id DataOciIntegrationIntegrationInstances#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instances#state DataOciIntegrationIntegrationInstances#state}.

---

### DataOciIntegrationIntegrationInstancesFilter <a name="DataOciIntegrationIntegrationInstancesFilter" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instances

dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instances#name DataOciIntegrationIntegrationInstances#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instances#values DataOciIntegrationIntegrationInstances#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instances#regex DataOciIntegrationIntegrationInstances#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instances#name DataOciIntegrationIntegrationInstances#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instances#values DataOciIntegrationIntegrationInstances#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instances#regex DataOciIntegrationIntegrationInstances#regex}.

---

### DataOciIntegrationIntegrationInstancesIntegrationInstances <a name="DataOciIntegrationIntegrationInstancesIntegrationInstances" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstances"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstances.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instances

dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstances()
```


### DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpoints <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpoints" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpoints.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instances

dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpoints()
```


### DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachments <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachments" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachments.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instances

dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachments()
```


### DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpoint <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpoint"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpoint.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instances

dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpoint()
```


### DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetails <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetails" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instances

dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetails()
```


### DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instances

dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails()
```


### DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfo <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfo" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfo.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instances

dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfo()
```


### DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetails <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetails" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instances

dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetails()
```


### DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcns <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcns" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcns.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instances

dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcns()
```


### DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnection <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnection" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instances

dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnection()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIntegrationIntegrationInstancesFilterList <a name="DataOciIntegrationIntegrationInstancesFilterList" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instances

dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIntegrationIntegrationInstancesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilter">DataOciIntegrationIntegrationInstancesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciIntegrationIntegrationInstancesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilter">DataOciIntegrationIntegrationInstancesFilter</a>]]

---


### DataOciIntegrationIntegrationInstancesFilterOutputReference <a name="DataOciIntegrationIntegrationInstancesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instances

dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilter">DataOciIntegrationIntegrationInstancesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciIntegrationIntegrationInstancesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilter">DataOciIntegrationIntegrationInstancesFilter</a>]

---


### DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instances

dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instances

dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.property.certificateSecretId">certificate_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.property.certificateSecretVersion">certificate_secret_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.property.dnsType">dns_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.property.dnsZoneName">dns_zone_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.property.managedType">managed_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpoints">DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpoints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alias`<sup>Required</sup> <a name="alias" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `certificate_secret_id`<sup>Required</sup> <a name="certificate_secret_id" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.property.certificateSecretId"></a>

```python
certificate_secret_id: str
```

- *Type:* str

---

##### `certificate_secret_version`<sup>Required</sup> <a name="certificate_secret_version" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.property.certificateSecretVersion"></a>

```python
certificate_secret_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dns_type`<sup>Required</sup> <a name="dns_type" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.property.dnsType"></a>

```python
dns_type: str
```

- *Type:* str

---

##### `dns_zone_name`<sup>Required</sup> <a name="dns_zone_name" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.property.dnsZoneName"></a>

```python
dns_zone_name: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `managed_type`<sup>Required</sup> <a name="managed_type" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.property.managedType"></a>

```python
managed_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpoints
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpoints">DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpoints</a>

---


### DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instances

dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instances

dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.property.isImplicit">is_implicit</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.property.targetId">target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.property.targetInstanceUrl">target_instance_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.property.targetRole">target_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.property.targetServiceType">target_service_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachments">DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachments</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_implicit`<sup>Required</sup> <a name="is_implicit" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.property.isImplicit"></a>

```python
is_implicit: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

---

##### `target_instance_url`<sup>Required</sup> <a name="target_instance_url" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.property.targetInstanceUrl"></a>

```python
target_instance_url: str
```

- *Type:* str

---

##### `target_role`<sup>Required</sup> <a name="target_role" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.property.targetRole"></a>

```python
target_role: str
```

- *Type:* str

---

##### `target_service_type`<sup>Required</sup> <a name="target_service_type" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.property.targetServiceType"></a>

```python
target_service_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachments
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachments">DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachments</a>

---


### DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instances

dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instances

dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.property.certificateSecretId">certificate_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.property.certificateSecretVersion">certificate_secret_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.property.dnsType">dns_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.property.dnsZoneName">dns_zone_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.property.managedType">managed_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpoint">DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alias`<sup>Required</sup> <a name="alias" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `certificate_secret_id`<sup>Required</sup> <a name="certificate_secret_id" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.property.certificateSecretId"></a>

```python
certificate_secret_id: str
```

- *Type:* str

---

##### `certificate_secret_version`<sup>Required</sup> <a name="certificate_secret_version" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.property.certificateSecretVersion"></a>

```python
certificate_secret_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dns_type`<sup>Required</sup> <a name="dns_type" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.property.dnsType"></a>

```python
dns_type: str
```

- *Type:* str

---

##### `dns_zone_name`<sup>Required</sup> <a name="dns_zone_name" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.property.dnsZoneName"></a>

```python
dns_zone_name: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `managed_type`<sup>Required</sup> <a name="managed_type" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.property.managedType"></a>

```python
managed_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpoint
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpoint">DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpoint</a>

---


### DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instances

dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instances

dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.timeRoleChanged">time_role_changed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails">DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `time_role_changed`<sup>Required</sup> <a name="time_role_changed" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.timeRoleChanged"></a>

```python
time_role_changed: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails">DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails</a>

---


### DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instances

dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instances

dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.property.crossRegionIntegrationInstanceDetails">cross_region_integration_instance_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList">DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.property.regionalInstanceUrl">regional_instance_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetails">DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cross_region_integration_instance_details`<sup>Required</sup> <a name="cross_region_integration_instance_details" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.property.crossRegionIntegrationInstanceDetails"></a>

```python
cross_region_integration_instance_details: DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList">DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList</a>

---

##### `regional_instance_url`<sup>Required</sup> <a name="regional_instance_url" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.property.regionalInstanceUrl"></a>

```python
regional_instance_url: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetails">DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetails</a>

---


### DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instances

dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instances

dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.property.idcsAppDisplayName">idcs_app_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.property.idcsAppId">idcs_app_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.property.idcsAppLocationUrl">idcs_app_location_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.property.idcsAppName">idcs_app_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.property.instancePrimaryAudienceUrl">instance_primary_audience_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfo">DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `idcs_app_display_name`<sup>Required</sup> <a name="idcs_app_display_name" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.property.idcsAppDisplayName"></a>

```python
idcs_app_display_name: str
```

- *Type:* str

---

##### `idcs_app_id`<sup>Required</sup> <a name="idcs_app_id" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.property.idcsAppId"></a>

```python
idcs_app_id: str
```

- *Type:* str

---

##### `idcs_app_location_url`<sup>Required</sup> <a name="idcs_app_location_url" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.property.idcsAppLocationUrl"></a>

```python
idcs_app_location_url: str
```

- *Type:* str

---

##### `idcs_app_name`<sup>Required</sup> <a name="idcs_app_name" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.property.idcsAppName"></a>

```python
idcs_app_name: str
```

- *Type:* str

---

##### `instance_primary_audience_url`<sup>Required</sup> <a name="instance_primary_audience_url" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.property.instancePrimaryAudienceUrl"></a>

```python
instance_primary_audience_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfo">DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfo</a>

---


### DataOciIntegrationIntegrationInstancesIntegrationInstancesList <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesList" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instances

dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instances

dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instances

dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.allowlistedIps">allowlisted_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcns">DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowlisted_ips`<sup>Required</sup> <a name="allowlisted_ips" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.allowlistedIps"></a>

```python
allowlisted_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcns
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcns">DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcns</a>

---


### DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instances

dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instances

dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.property.allowlistedHttpIps">allowlisted_http_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.property.allowlistedHttpVcns">allowlisted_http_vcns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList">DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.property.isIntegrationVcnAllowlisted">is_integration_vcn_allowlisted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.property.networkEndpointType">network_endpoint_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetails">DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowlisted_http_ips`<sup>Required</sup> <a name="allowlisted_http_ips" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.property.allowlistedHttpIps"></a>

```python
allowlisted_http_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowlisted_http_vcns`<sup>Required</sup> <a name="allowlisted_http_vcns" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.property.allowlistedHttpVcns"></a>

```python
allowlisted_http_vcns: DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList">DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList</a>

---

##### `is_integration_vcn_allowlisted`<sup>Required</sup> <a name="is_integration_vcn_allowlisted" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.property.isIntegrationVcnAllowlisted"></a>

```python
is_integration_vcn_allowlisted: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `network_endpoint_type`<sup>Required</sup> <a name="network_endpoint_type" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.property.networkEndpointType"></a>

```python
network_endpoint_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetails">DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetails</a>

---


### DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instances

dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.alternateCustomEndpoints">alternate_custom_endpoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList">DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.attachments">attachments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList">DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.consumptionModel">consumption_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.customEndpoint">custom_endpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList">DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.dataRetentionPeriod">data_retention_period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.disasterRecoveryDetails">disaster_recovery_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList">DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.domainId">domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.enableProcessAutomationTrigger">enable_process_automation_trigger</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.extendDataRetentionTrigger">extend_data_retention_trigger</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.failoverTrigger">failover_trigger</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.idcsAt">idcs_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.idcsInfo">idcs_info</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList">DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.instanceDesignTimeUrl">instance_design_time_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.instanceUrl">instance_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.integrationInstanceType">integration_instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.isByol">is_byol</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.isDisasterRecoveryEnabled">is_disaster_recovery_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.isFileServerEnabled">is_file_server_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.isVisualBuilderEnabled">is_visual_builder_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.messagePacks">message_packs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.networkEndpointDetails">network_endpoint_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList">DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.privateEndpointOutboundConnection">private_endpoint_outbound_connection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList">DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.stateMessage">state_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstances">DataOciIntegrationIntegrationInstancesIntegrationInstances</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alternate_custom_endpoints`<sup>Required</sup> <a name="alternate_custom_endpoints" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.alternateCustomEndpoints"></a>

```python
alternate_custom_endpoints: DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList">DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList</a>

---

##### `attachments`<sup>Required</sup> <a name="attachments" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.attachments"></a>

```python
attachments: DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList">DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList</a>

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `consumption_model`<sup>Required</sup> <a name="consumption_model" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.consumptionModel"></a>

```python
consumption_model: str
```

- *Type:* str

---

##### `custom_endpoint`<sup>Required</sup> <a name="custom_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.customEndpoint"></a>

```python
custom_endpoint: DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList">DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList</a>

---

##### `data_retention_period`<sup>Required</sup> <a name="data_retention_period" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.dataRetentionPeriod"></a>

```python
data_retention_period: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `disaster_recovery_details`<sup>Required</sup> <a name="disaster_recovery_details" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.disasterRecoveryDetails"></a>

```python
disaster_recovery_details: DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList">DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList</a>

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `domain_id`<sup>Required</sup> <a name="domain_id" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.domainId"></a>

```python
domain_id: str
```

- *Type:* str

---

##### `enable_process_automation_trigger`<sup>Required</sup> <a name="enable_process_automation_trigger" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.enableProcessAutomationTrigger"></a>

```python
enable_process_automation_trigger: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `extend_data_retention_trigger`<sup>Required</sup> <a name="extend_data_retention_trigger" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.extendDataRetentionTrigger"></a>

```python
extend_data_retention_trigger: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `failover_trigger`<sup>Required</sup> <a name="failover_trigger" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.failoverTrigger"></a>

```python
failover_trigger: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_at`<sup>Required</sup> <a name="idcs_at" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.idcsAt"></a>

```python
idcs_at: str
```

- *Type:* str

---

##### `idcs_info`<sup>Required</sup> <a name="idcs_info" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.idcsInfo"></a>

```python
idcs_info: DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList">DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList</a>

---

##### `instance_design_time_url`<sup>Required</sup> <a name="instance_design_time_url" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.instanceDesignTimeUrl"></a>

```python
instance_design_time_url: str
```

- *Type:* str

---

##### `instance_url`<sup>Required</sup> <a name="instance_url" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.instanceUrl"></a>

```python
instance_url: str
```

- *Type:* str

---

##### `integration_instance_type`<sup>Required</sup> <a name="integration_instance_type" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.integrationInstanceType"></a>

```python
integration_instance_type: str
```

- *Type:* str

---

##### `is_byol`<sup>Required</sup> <a name="is_byol" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.isByol"></a>

```python
is_byol: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_disaster_recovery_enabled`<sup>Required</sup> <a name="is_disaster_recovery_enabled" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.isDisasterRecoveryEnabled"></a>

```python
is_disaster_recovery_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_file_server_enabled`<sup>Required</sup> <a name="is_file_server_enabled" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.isFileServerEnabled"></a>

```python
is_file_server_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_visual_builder_enabled`<sup>Required</sup> <a name="is_visual_builder_enabled" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.isVisualBuilderEnabled"></a>

```python
is_visual_builder_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `message_packs`<sup>Required</sup> <a name="message_packs" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.messagePacks"></a>

```python
message_packs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `network_endpoint_details`<sup>Required</sup> <a name="network_endpoint_details" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.networkEndpointDetails"></a>

```python
network_endpoint_details: DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList">DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList</a>

---

##### `private_endpoint_outbound_connection`<sup>Required</sup> <a name="private_endpoint_outbound_connection" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.privateEndpointOutboundConnection"></a>

```python
private_endpoint_outbound_connection: DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList">DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList</a>

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `state_message`<sup>Required</sup> <a name="state_message" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.stateMessage"></a>

```python
state_message: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIntegrationIntegrationInstancesIntegrationInstances
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstances">DataOciIntegrationIntegrationInstancesIntegrationInstances</a>

---


### DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instances

dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_integration_integration_instances

dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.property.outboundConnectionType">outbound_connection_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnection">DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `nsg_ids`<sup>Required</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `outbound_connection_type`<sup>Required</sup> <a name="outbound_connection_type" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.property.outboundConnectionType"></a>

```python
outbound_connection_type: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnection">DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnection</a>

---



