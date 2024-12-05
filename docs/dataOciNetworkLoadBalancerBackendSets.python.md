# `dataOciNetworkLoadBalancerBackendSets` Submodule <a name="`dataOciNetworkLoadBalancerBackendSets` Submodule" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciNetworkLoadBalancerBackendSets <a name="DataOciNetworkLoadBalancerBackendSets" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_sets oci_network_load_balancer_backend_sets}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_load_balancer_backend_sets

dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  network_load_balancer_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciNetworkLoadBalancerBackendSetsFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.Initializer.parameter.networkLoadBalancerId">network_load_balancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_sets#network_load_balancer_id DataOciNetworkLoadBalancerBackendSets#network_load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilter">DataOciNetworkLoadBalancerBackendSetsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_sets#id DataOciNetworkLoadBalancerBackendSets#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `network_load_balancer_id`<sup>Required</sup> <a name="network_load_balancer_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.Initializer.parameter.networkLoadBalancerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_sets#network_load_balancer_id DataOciNetworkLoadBalancerBackendSets#network_load_balancer_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilter">DataOciNetworkLoadBalancerBackendSetsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_sets#filter DataOciNetworkLoadBalancerBackendSets#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_sets#id DataOciNetworkLoadBalancerBackendSets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciNetworkLoadBalancerBackendSetsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilter">DataOciNetworkLoadBalancerBackendSetsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciNetworkLoadBalancerBackendSets resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_load_balancer_backend_sets

dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_load_balancer_backend_sets

dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_load_balancer_backend_sets

dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_load_balancer_backend_sets

dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciNetworkLoadBalancerBackendSets resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciNetworkLoadBalancerBackendSets to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciNetworkLoadBalancerBackendSets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_sets#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciNetworkLoadBalancerBackendSets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.backendSetCollection">backend_set_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList">DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterList">DataOciNetworkLoadBalancerBackendSetsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilter">DataOciNetworkLoadBalancerBackendSetsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.networkLoadBalancerIdInput">network_load_balancer_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.networkLoadBalancerId">network_load_balancer_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `backend_set_collection`<sup>Required</sup> <a name="backend_set_collection" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.backendSetCollection"></a>

```python
backend_set_collection: DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList">DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.filter"></a>

```python
filter: DataOciNetworkLoadBalancerBackendSetsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterList">DataOciNetworkLoadBalancerBackendSetsFilterList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciNetworkLoadBalancerBackendSetsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilter">DataOciNetworkLoadBalancerBackendSetsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `network_load_balancer_id_input`<sup>Optional</sup> <a name="network_load_balancer_id_input" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.networkLoadBalancerIdInput"></a>

```python
network_load_balancer_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `network_load_balancer_id`<sup>Required</sup> <a name="network_load_balancer_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.networkLoadBalancerId"></a>

```python
network_load_balancer_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciNetworkLoadBalancerBackendSetsBackendSetCollection <a name="DataOciNetworkLoadBalancerBackendSetsBackendSetCollection" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_load_balancer_backend_sets

dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollection()
```


### DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItems <a name="DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_load_balancer_backend_sets

dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItems()
```


### DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackends <a name="DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackends" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackends"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackends.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_load_balancer_backend_sets

dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackends()
```


### DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthChecker <a name="DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthChecker" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthChecker"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthChecker.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_load_balancer_backend_sets

dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthChecker()
```


### DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDns <a name="DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDns" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDns.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_load_balancer_backend_sets

dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDns()
```


### DataOciNetworkLoadBalancerBackendSetsConfig <a name="DataOciNetworkLoadBalancerBackendSetsConfig" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_load_balancer_backend_sets

dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  network_load_balancer_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciNetworkLoadBalancerBackendSetsFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsConfig.property.networkLoadBalancerId">network_load_balancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_sets#network_load_balancer_id DataOciNetworkLoadBalancerBackendSets#network_load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilter">DataOciNetworkLoadBalancerBackendSetsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_sets#id DataOciNetworkLoadBalancerBackendSets#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `network_load_balancer_id`<sup>Required</sup> <a name="network_load_balancer_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsConfig.property.networkLoadBalancerId"></a>

```python
network_load_balancer_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_sets#network_load_balancer_id DataOciNetworkLoadBalancerBackendSets#network_load_balancer_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciNetworkLoadBalancerBackendSetsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilter">DataOciNetworkLoadBalancerBackendSetsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_sets#filter DataOciNetworkLoadBalancerBackendSets#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_sets#id DataOciNetworkLoadBalancerBackendSets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciNetworkLoadBalancerBackendSetsFilter <a name="DataOciNetworkLoadBalancerBackendSetsFilter" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_load_balancer_backend_sets

dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_sets#name DataOciNetworkLoadBalancerBackendSets#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_sets#values DataOciNetworkLoadBalancerBackendSets#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_sets#regex DataOciNetworkLoadBalancerBackendSets#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_sets#name DataOciNetworkLoadBalancerBackendSets#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_sets#values DataOciNetworkLoadBalancerBackendSets#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_sets#regex DataOciNetworkLoadBalancerBackendSets#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList <a name="DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_load_balancer_backend_sets

dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference <a name="DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_load_balancer_backend_sets

dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.property.isBackup">is_backup</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.property.isDrain">is_drain</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.property.isOffline">is_offline</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.property.targetId">target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackends">DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackends</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `is_backup`<sup>Required</sup> <a name="is_backup" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.property.isBackup"></a>

```python
is_backup: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_drain`<sup>Required</sup> <a name="is_drain" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.property.isDrain"></a>

```python
is_drain: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_offline`<sup>Required</sup> <a name="is_offline" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.property.isOffline"></a>

```python
is_offline: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackends
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackends">DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackends</a>

---


### DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList <a name="DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_load_balancer_backend_sets

dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference <a name="DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_load_balancer_backend_sets

dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.property.queryClass">query_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.property.queryType">query_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.property.rcodes">rcodes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.property.transportProtocol">transport_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDns">DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `query_class`<sup>Required</sup> <a name="query_class" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.property.queryClass"></a>

```python
query_class: str
```

- *Type:* str

---

##### `query_type`<sup>Required</sup> <a name="query_type" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.property.queryType"></a>

```python
query_type: str
```

- *Type:* str

---

##### `rcodes`<sup>Required</sup> <a name="rcodes" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.property.rcodes"></a>

```python
rcodes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `transport_protocol`<sup>Required</sup> <a name="transport_protocol" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.property.transportProtocol"></a>

```python
transport_protocol: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDns
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDns">DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDns</a>

---


### DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList <a name="DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_load_balancer_backend_sets

dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference <a name="DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_load_balancer_backend_sets

dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.property.dns">dns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList">DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.property.intervalInMillis">interval_in_millis</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.property.requestData">request_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.property.responseBodyRegex">response_body_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.property.responseData">response_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.property.retries">retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.property.returnCode">return_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.property.timeoutInMillis">timeout_in_millis</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.property.urlPath">url_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthChecker">DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthChecker</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns`<sup>Required</sup> <a name="dns" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.property.dns"></a>

```python
dns: DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList">DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList</a>

---

##### `interval_in_millis`<sup>Required</sup> <a name="interval_in_millis" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.property.intervalInMillis"></a>

```python
interval_in_millis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `request_data`<sup>Required</sup> <a name="request_data" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.property.requestData"></a>

```python
request_data: str
```

- *Type:* str

---

##### `response_body_regex`<sup>Required</sup> <a name="response_body_regex" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.property.responseBodyRegex"></a>

```python
response_body_regex: str
```

- *Type:* str

---

##### `response_data`<sup>Required</sup> <a name="response_data" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.property.responseData"></a>

```python
response_data: str
```

- *Type:* str

---

##### `retries`<sup>Required</sup> <a name="retries" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.property.retries"></a>

```python
retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `return_code`<sup>Required</sup> <a name="return_code" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.property.returnCode"></a>

```python
return_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_in_millis`<sup>Required</sup> <a name="timeout_in_millis" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.property.timeoutInMillis"></a>

```python
timeout_in_millis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `url_path`<sup>Required</sup> <a name="url_path" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.property.urlPath"></a>

```python
url_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.property.internalValue"></a>

```python
internal_value: DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthChecker
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthChecker">DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthChecker</a>

---


### DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList <a name="DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_load_balancer_backend_sets

dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference <a name="DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_load_balancer_backend_sets

dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.property.backends">backends</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList">DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.property.healthChecker">health_checker</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList">DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.property.ipVersion">ip_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.property.isFailOpen">is_fail_open</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.property.isInstantFailoverEnabled">is_instant_failover_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.property.isPreserveSource">is_preserve_source</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.property.networkLoadBalancerId">network_load_balancer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.property.policy">policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItems">DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backends`<sup>Required</sup> <a name="backends" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.property.backends"></a>

```python
backends: DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList">DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList</a>

---

##### `health_checker`<sup>Required</sup> <a name="health_checker" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.property.healthChecker"></a>

```python
health_checker: DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList">DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_version`<sup>Required</sup> <a name="ip_version" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.property.ipVersion"></a>

```python
ip_version: str
```

- *Type:* str

---

##### `is_fail_open`<sup>Required</sup> <a name="is_fail_open" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.property.isFailOpen"></a>

```python
is_fail_open: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_instant_failover_enabled`<sup>Required</sup> <a name="is_instant_failover_enabled" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.property.isInstantFailoverEnabled"></a>

```python
is_instant_failover_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_preserve_source`<sup>Required</sup> <a name="is_preserve_source" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.property.isPreserveSource"></a>

```python
is_preserve_source: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_load_balancer_id`<sup>Required</sup> <a name="network_load_balancer_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.property.networkLoadBalancerId"></a>

```python
network_load_balancer_id: str
```

- *Type:* str

---

##### `policy`<sup>Required</sup> <a name="policy" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.property.policy"></a>

```python
policy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItems">DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItems</a>

---


### DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList <a name="DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_load_balancer_backend_sets

dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference <a name="DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_load_balancer_backend_sets

dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList">DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollection">DataOciNetworkLoadBalancerBackendSetsBackendSetCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.property.items"></a>

```python
items: DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList">DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciNetworkLoadBalancerBackendSetsBackendSetCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollection">DataOciNetworkLoadBalancerBackendSetsBackendSetCollection</a>

---


### DataOciNetworkLoadBalancerBackendSetsFilterList <a name="DataOciNetworkLoadBalancerBackendSetsFilterList" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_load_balancer_backend_sets

dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciNetworkLoadBalancerBackendSetsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilter">DataOciNetworkLoadBalancerBackendSetsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciNetworkLoadBalancerBackendSetsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilter">DataOciNetworkLoadBalancerBackendSetsFilter</a>]]

---


### DataOciNetworkLoadBalancerBackendSetsFilterOutputReference <a name="DataOciNetworkLoadBalancerBackendSetsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_load_balancer_backend_sets

dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilter">DataOciNetworkLoadBalancerBackendSetsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciNetworkLoadBalancerBackendSetsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilter">DataOciNetworkLoadBalancerBackendSetsFilter</a>]

---



