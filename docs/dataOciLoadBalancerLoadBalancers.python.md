# `dataOciLoadBalancerLoadBalancers` Submodule <a name="`dataOciLoadBalancerLoadBalancers` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLoadBalancerLoadBalancers <a name="DataOciLoadBalancerLoadBalancers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers oci_load_balancer_load_balancers}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_load_balancers

dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers(
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
  detail: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciLoadBalancerLoadBalancersFilter]] = None,
  id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers#compartment_id DataOciLoadBalancerLoadBalancers#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.Initializer.parameter.detail">detail</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers#detail DataOciLoadBalancerLoadBalancers#detail}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers#display_name DataOciLoadBalancerLoadBalancers#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilter">DataOciLoadBalancerLoadBalancersFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers#id DataOciLoadBalancerLoadBalancers#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers#state DataOciLoadBalancerLoadBalancers#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers#compartment_id DataOciLoadBalancerLoadBalancers#compartment_id}.

---

##### `detail`<sup>Optional</sup> <a name="detail" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.Initializer.parameter.detail"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers#detail DataOciLoadBalancerLoadBalancers#detail}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers#display_name DataOciLoadBalancerLoadBalancers#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilter">DataOciLoadBalancerLoadBalancersFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers#filter DataOciLoadBalancerLoadBalancers#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers#id DataOciLoadBalancerLoadBalancers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers#state DataOciLoadBalancerLoadBalancers#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.resetDetail">reset_detail</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciLoadBalancerLoadBalancersFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilter">DataOciLoadBalancerLoadBalancersFilter</a>]]

---

##### `reset_detail` <a name="reset_detail" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.resetDetail"></a>

```python
def reset_detail() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciLoadBalancerLoadBalancers resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_load_balancers

dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_load_balancers

dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_load_balancers

dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_load_balancers

dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciLoadBalancerLoadBalancers resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciLoadBalancerLoadBalancers to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciLoadBalancerLoadBalancers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLoadBalancerLoadBalancers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList">DataOciLoadBalancerLoadBalancersFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.loadBalancers">load_balancers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList">DataOciLoadBalancerLoadBalancersLoadBalancersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.detailInput">detail_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilter">DataOciLoadBalancerLoadBalancersFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.detail">detail</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.filter"></a>

```python
filter: DataOciLoadBalancerLoadBalancersFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList">DataOciLoadBalancerLoadBalancersFilterList</a>

---

##### `load_balancers`<sup>Required</sup> <a name="load_balancers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.loadBalancers"></a>

```python
load_balancers: DataOciLoadBalancerLoadBalancersLoadBalancersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList">DataOciLoadBalancerLoadBalancersLoadBalancersList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `detail_input`<sup>Optional</sup> <a name="detail_input" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.detailInput"></a>

```python
detail_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciLoadBalancerLoadBalancersFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilter">DataOciLoadBalancerLoadBalancersFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `detail`<sup>Required</sup> <a name="detail" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.detail"></a>

```python
detail: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLoadBalancerLoadBalancersConfig <a name="DataOciLoadBalancerLoadBalancersConfig" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_load_balancers

dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  detail: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciLoadBalancerLoadBalancersFilter]] = None,
  id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers#compartment_id DataOciLoadBalancerLoadBalancers#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.detail">detail</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers#detail DataOciLoadBalancerLoadBalancers#detail}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers#display_name DataOciLoadBalancerLoadBalancers#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilter">DataOciLoadBalancerLoadBalancersFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers#id DataOciLoadBalancerLoadBalancers#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers#state DataOciLoadBalancerLoadBalancers#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers#compartment_id DataOciLoadBalancerLoadBalancers#compartment_id}.

---

##### `detail`<sup>Optional</sup> <a name="detail" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.detail"></a>

```python
detail: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers#detail DataOciLoadBalancerLoadBalancers#detail}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers#display_name DataOciLoadBalancerLoadBalancers#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciLoadBalancerLoadBalancersFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilter">DataOciLoadBalancerLoadBalancersFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers#filter DataOciLoadBalancerLoadBalancers#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers#id DataOciLoadBalancerLoadBalancers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers#state DataOciLoadBalancerLoadBalancers#state}.

---

### DataOciLoadBalancerLoadBalancersFilter <a name="DataOciLoadBalancerLoadBalancersFilter" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_load_balancers

dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers#name DataOciLoadBalancerLoadBalancers#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers#values DataOciLoadBalancerLoadBalancers#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers#regex DataOciLoadBalancerLoadBalancers#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers#name DataOciLoadBalancerLoadBalancers#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers#values DataOciLoadBalancerLoadBalancers#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers#regex DataOciLoadBalancerLoadBalancers#regex}.

---

### DataOciLoadBalancerLoadBalancersLoadBalancers <a name="DataOciLoadBalancerLoadBalancersLoadBalancers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancers.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_load_balancers

dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancers()
```


### DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetails <a name="DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetails" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_load_balancers

dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetails()
```


### DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIp <a name="DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIp" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIp"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIp.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_load_balancers

dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIp()
```


### DataOciLoadBalancerLoadBalancersLoadBalancersReservedIps <a name="DataOciLoadBalancerLoadBalancersLoadBalancersReservedIps" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIps.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_load_balancers

dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIps()
```


### DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetails <a name="DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetails" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_load_balancers

dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetails()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLoadBalancerLoadBalancersFilterList <a name="DataOciLoadBalancerLoadBalancersFilterList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_load_balancers

dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLoadBalancerLoadBalancersFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilter">DataOciLoadBalancerLoadBalancersFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciLoadBalancerLoadBalancersFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilter">DataOciLoadBalancerLoadBalancersFilter</a>]]

---


### DataOciLoadBalancerLoadBalancersFilterOutputReference <a name="DataOciLoadBalancerLoadBalancersFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_load_balancers

dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilter">DataOciLoadBalancerLoadBalancersFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciLoadBalancerLoadBalancersFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilter">DataOciLoadBalancerLoadBalancersFilter</a>]

---


### DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList <a name="DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_load_balancers

dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference <a name="DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_load_balancers

dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.property.isPublic">is_public</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.property.reservedIp">reserved_ip</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList">DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetails">DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `is_public`<sup>Required</sup> <a name="is_public" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.property.isPublic"></a>

```python
is_public: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `reserved_ip`<sup>Required</sup> <a name="reserved_ip" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.property.reservedIp"></a>

```python
reserved_ip: DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList">DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetails">DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetails</a>

---


### DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList <a name="DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_load_balancers

dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference <a name="DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_load_balancers

dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIp">DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.property.internalValue"></a>

```python
internal_value: DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIp
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIp">DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIp</a>

---


### DataOciLoadBalancerLoadBalancersLoadBalancersList <a name="DataOciLoadBalancerLoadBalancersLoadBalancersList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_load_balancers

dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference <a name="DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_load_balancers

dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.ipAddressDetails">ip_address_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList">DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.ipAddresses">ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.ipMode">ip_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.isDeleteProtectionEnabled">is_delete_protection_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.isPrivate">is_private</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.isRequestIdEnabled">is_request_id_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.networkSecurityGroupIds">network_security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.requestIdHeader">request_id_header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.reservedIps">reserved_ips</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList">DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.shapeDetails">shape_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList">DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancers">DataOciLoadBalancerLoadBalancersLoadBalancers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_address_details`<sup>Required</sup> <a name="ip_address_details" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.ipAddressDetails"></a>

```python
ip_address_details: DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList">DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList</a>

---

##### `ip_addresses`<sup>Required</sup> <a name="ip_addresses" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.ipAddresses"></a>

```python
ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip_mode`<sup>Required</sup> <a name="ip_mode" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.ipMode"></a>

```python
ip_mode: str
```

- *Type:* str

---

##### `is_delete_protection_enabled`<sup>Required</sup> <a name="is_delete_protection_enabled" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.isDeleteProtectionEnabled"></a>

```python
is_delete_protection_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_private`<sup>Required</sup> <a name="is_private" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.isPrivate"></a>

```python
is_private: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_request_id_enabled`<sup>Required</sup> <a name="is_request_id_enabled" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.isRequestIdEnabled"></a>

```python
is_request_id_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `network_security_group_ids`<sup>Required</sup> <a name="network_security_group_ids" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.networkSecurityGroupIds"></a>

```python
network_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `request_id_header`<sup>Required</sup> <a name="request_id_header" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.requestIdHeader"></a>

```python
request_id_header: str
```

- *Type:* str

---

##### `reserved_ips`<sup>Required</sup> <a name="reserved_ips" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.reservedIps"></a>

```python
reserved_ips: DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList">DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList</a>

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `shape_details`<sup>Required</sup> <a name="shape_details" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.shapeDetails"></a>

```python
shape_details: DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList">DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.internalValue"></a>

```python
internal_value: DataOciLoadBalancerLoadBalancersLoadBalancers
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancers">DataOciLoadBalancerLoadBalancersLoadBalancers</a>

---


### DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList <a name="DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_load_balancers

dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference <a name="DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_load_balancers

dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIps">DataOciLoadBalancerLoadBalancersLoadBalancersReservedIps</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciLoadBalancerLoadBalancersLoadBalancersReservedIps
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIps">DataOciLoadBalancerLoadBalancersLoadBalancersReservedIps</a>

---


### DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList <a name="DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_load_balancers

dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference <a name="DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_load_balancers

dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.property.maximumBandwidthInMbps">maximum_bandwidth_in_mbps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.property.minimumBandwidthInMbps">minimum_bandwidth_in_mbps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetails">DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `maximum_bandwidth_in_mbps`<sup>Required</sup> <a name="maximum_bandwidth_in_mbps" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.property.maximumBandwidthInMbps"></a>

```python
maximum_bandwidth_in_mbps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_bandwidth_in_mbps`<sup>Required</sup> <a name="minimum_bandwidth_in_mbps" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.property.minimumBandwidthInMbps"></a>

```python
minimum_bandwidth_in_mbps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetails">DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetails</a>

---



