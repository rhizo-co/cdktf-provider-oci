# `dataOciLoadBalancerBackendsets` Submodule <a name="`dataOciLoadBalancerBackendsets` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLoadBalancerBackendsets <a name="DataOciLoadBalancerBackendsets" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_backendsets oci_load_balancer_backendsets}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_backendsets

dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  load_balancer_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciLoadBalancerBackendsetsFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.Initializer.parameter.loadBalancerId">load_balancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_backendsets#load_balancer_id DataOciLoadBalancerBackendsets#load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilter">DataOciLoadBalancerBackendsetsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_backendsets#id DataOciLoadBalancerBackendsets#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `load_balancer_id`<sup>Required</sup> <a name="load_balancer_id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.Initializer.parameter.loadBalancerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_backendsets#load_balancer_id DataOciLoadBalancerBackendsets#load_balancer_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilter">DataOciLoadBalancerBackendsetsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_backendsets#filter DataOciLoadBalancerBackendsets#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_backendsets#id DataOciLoadBalancerBackendsets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciLoadBalancerBackendsetsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilter">DataOciLoadBalancerBackendsetsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciLoadBalancerBackendsets resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_backendsets

dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_backendsets

dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_backendsets

dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_backendsets

dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciLoadBalancerBackendsets resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciLoadBalancerBackendsets to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciLoadBalancerBackendsets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_backendsets#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLoadBalancerBackendsets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.property.backendsets">backendsets</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsList">DataOciLoadBalancerBackendsetsBackendsetsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterList">DataOciLoadBalancerBackendsetsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilter">DataOciLoadBalancerBackendsetsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.property.loadBalancerIdInput">load_balancer_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.property.loadBalancerId">load_balancer_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `backendsets`<sup>Required</sup> <a name="backendsets" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.property.backendsets"></a>

```python
backendsets: DataOciLoadBalancerBackendsetsBackendsetsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsList">DataOciLoadBalancerBackendsetsBackendsetsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.property.filter"></a>

```python
filter: DataOciLoadBalancerBackendsetsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterList">DataOciLoadBalancerBackendsetsFilterList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciLoadBalancerBackendsetsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilter">DataOciLoadBalancerBackendsetsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `load_balancer_id_input`<sup>Optional</sup> <a name="load_balancer_id_input" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.property.loadBalancerIdInput"></a>

```python
load_balancer_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `load_balancer_id`<sup>Required</sup> <a name="load_balancer_id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.property.loadBalancerId"></a>

```python
load_balancer_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsets.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLoadBalancerBackendsetsBackendsets <a name="DataOciLoadBalancerBackendsetsBackendsets" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsets"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsets.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_backendsets

dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsets()
```


### DataOciLoadBalancerBackendsetsBackendsetsBackend <a name="DataOciLoadBalancerBackendsetsBackendsetsBackend" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackend"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackend.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_backendsets

dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackend()
```


### DataOciLoadBalancerBackendsetsBackendsetsHealthChecker <a name="DataOciLoadBalancerBackendsetsBackendsetsHealthChecker" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthChecker"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthChecker.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_backendsets

dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthChecker()
```


### DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfiguration <a name="DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfiguration" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_backendsets

dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfiguration()
```


### DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfiguration <a name="DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfiguration" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_backendsets

dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfiguration()
```


### DataOciLoadBalancerBackendsetsBackendsetsSslConfiguration <a name="DataOciLoadBalancerBackendsetsBackendsetsSslConfiguration" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_backendsets

dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfiguration()
```


### DataOciLoadBalancerBackendsetsConfig <a name="DataOciLoadBalancerBackendsetsConfig" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_backendsets

dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  load_balancer_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciLoadBalancerBackendsetsFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsConfig.property.loadBalancerId">load_balancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_backendsets#load_balancer_id DataOciLoadBalancerBackendsets#load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilter">DataOciLoadBalancerBackendsetsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_backendsets#id DataOciLoadBalancerBackendsets#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `load_balancer_id`<sup>Required</sup> <a name="load_balancer_id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsConfig.property.loadBalancerId"></a>

```python
load_balancer_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_backendsets#load_balancer_id DataOciLoadBalancerBackendsets#load_balancer_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciLoadBalancerBackendsetsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilter">DataOciLoadBalancerBackendsetsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_backendsets#filter DataOciLoadBalancerBackendsets#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_backendsets#id DataOciLoadBalancerBackendsets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciLoadBalancerBackendsetsFilter <a name="DataOciLoadBalancerBackendsetsFilter" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_backendsets

dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_backendsets#name DataOciLoadBalancerBackendsets#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_backendsets#values DataOciLoadBalancerBackendsets#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_backendsets#regex DataOciLoadBalancerBackendsets#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_backendsets#name DataOciLoadBalancerBackendsets#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_backendsets#values DataOciLoadBalancerBackendsets#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_backendsets#regex DataOciLoadBalancerBackendsets#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciLoadBalancerBackendsetsBackendsetsBackendList <a name="DataOciLoadBalancerBackendsetsBackendsetsBackendList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_backendsets

dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference <a name="DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_backendsets

dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.property.backup">backup</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.property.drain">drain</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.property.maxConnections">max_connections</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.property.offline">offline</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackend">DataOciLoadBalancerBackendsetsBackendsetsBackend</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup`<sup>Required</sup> <a name="backup" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.property.backup"></a>

```python
backup: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `drain`<sup>Required</sup> <a name="drain" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.property.drain"></a>

```python
drain: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `max_connections`<sup>Required</sup> <a name="max_connections" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.property.maxConnections"></a>

```python
max_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `offline`<sup>Required</sup> <a name="offline" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.property.offline"></a>

```python
offline: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `weight`<sup>Required</sup> <a name="weight" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendOutputReference.property.internalValue"></a>

```python
internal_value: DataOciLoadBalancerBackendsetsBackendsetsBackend
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackend">DataOciLoadBalancerBackendsetsBackendsetsBackend</a>

---


### DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerList <a name="DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_backendsets

dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference <a name="DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_backendsets

dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.property.intervalMs">interval_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.property.isForcePlainText">is_force_plain_text</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.property.responseBodyRegex">response_body_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.property.retries">retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.property.returnCode">return_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.property.timeoutInMillis">timeout_in_millis</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.property.urlPath">url_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthChecker">DataOciLoadBalancerBackendsetsBackendsetsHealthChecker</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `interval_ms`<sup>Required</sup> <a name="interval_ms" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.property.intervalMs"></a>

```python
interval_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_force_plain_text`<sup>Required</sup> <a name="is_force_plain_text" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.property.isForcePlainText"></a>

```python
is_force_plain_text: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `response_body_regex`<sup>Required</sup> <a name="response_body_regex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.property.responseBodyRegex"></a>

```python
response_body_regex: str
```

- *Type:* str

---

##### `retries`<sup>Required</sup> <a name="retries" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.property.retries"></a>

```python
retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `return_code`<sup>Required</sup> <a name="return_code" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.property.returnCode"></a>

```python
return_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_in_millis`<sup>Required</sup> <a name="timeout_in_millis" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.property.timeoutInMillis"></a>

```python
timeout_in_millis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `url_path`<sup>Required</sup> <a name="url_path" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.property.urlPath"></a>

```python
url_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerOutputReference.property.internalValue"></a>

```python
internal_value: DataOciLoadBalancerBackendsetsBackendsetsHealthChecker
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthChecker">DataOciLoadBalancerBackendsetsBackendsetsHealthChecker</a>

---


### DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationList <a name="DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_backendsets

dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference <a name="DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_backendsets

dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference.property.cookieName">cookie_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference.property.disableFallback">disable_fallback</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference.property.isHttpOnly">is_http_only</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference.property.isSecure">is_secure</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference.property.maxAgeInSeconds">max_age_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfiguration">DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cookie_name`<sup>Required</sup> <a name="cookie_name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference.property.cookieName"></a>

```python
cookie_name: str
```

- *Type:* str

---

##### `disable_fallback`<sup>Required</sup> <a name="disable_fallback" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference.property.disableFallback"></a>

```python
disable_fallback: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `domain`<sup>Required</sup> <a name="domain" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `is_http_only`<sup>Required</sup> <a name="is_http_only" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference.property.isHttpOnly"></a>

```python
is_http_only: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_secure`<sup>Required</sup> <a name="is_secure" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference.property.isSecure"></a>

```python
is_secure: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `max_age_in_seconds`<sup>Required</sup> <a name="max_age_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference.property.maxAgeInSeconds"></a>

```python
max_age_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfiguration">DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfiguration</a>

---


### DataOciLoadBalancerBackendsetsBackendsetsList <a name="DataOciLoadBalancerBackendsetsBackendsetsList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_backendsets

dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLoadBalancerBackendsetsBackendsetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciLoadBalancerBackendsetsBackendsetsOutputReference <a name="DataOciLoadBalancerBackendsetsBackendsetsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_backendsets

dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.property.backend">backend</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendList">DataOciLoadBalancerBackendsetsBackendsetsBackendList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.property.backendMaxConnections">backend_max_connections</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.property.healthChecker">health_checker</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerList">DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.property.lbCookieSessionPersistenceConfiguration">lb_cookie_session_persistence_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationList">DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.property.loadBalancerId">load_balancer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.property.policy">policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.property.sessionPersistenceConfiguration">session_persistence_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationList">DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.property.sslConfiguration">ssl_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationList">DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsets">DataOciLoadBalancerBackendsetsBackendsets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backend`<sup>Required</sup> <a name="backend" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.property.backend"></a>

```python
backend: DataOciLoadBalancerBackendsetsBackendsetsBackendList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsBackendList">DataOciLoadBalancerBackendsetsBackendsetsBackendList</a>

---

##### `backend_max_connections`<sup>Required</sup> <a name="backend_max_connections" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.property.backendMaxConnections"></a>

```python
backend_max_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `health_checker`<sup>Required</sup> <a name="health_checker" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.property.healthChecker"></a>

```python
health_checker: DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerList">DataOciLoadBalancerBackendsetsBackendsetsHealthCheckerList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lb_cookie_session_persistence_configuration`<sup>Required</sup> <a name="lb_cookie_session_persistence_configuration" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.property.lbCookieSessionPersistenceConfiguration"></a>

```python
lb_cookie_session_persistence_configuration: DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationList">DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfigurationList</a>

---

##### `load_balancer_id`<sup>Required</sup> <a name="load_balancer_id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.property.loadBalancerId"></a>

```python
load_balancer_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `policy`<sup>Required</sup> <a name="policy" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.property.policy"></a>

```python
policy: str
```

- *Type:* str

---

##### `session_persistence_configuration`<sup>Required</sup> <a name="session_persistence_configuration" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.property.sessionPersistenceConfiguration"></a>

```python
session_persistence_configuration: DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationList">DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationList</a>

---

##### `ssl_configuration`<sup>Required</sup> <a name="ssl_configuration" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.property.sslConfiguration"></a>

```python
ssl_configuration: DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationList">DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciLoadBalancerBackendsetsBackendsets
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsets">DataOciLoadBalancerBackendsetsBackendsets</a>

---


### DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationList <a name="DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_backendsets

dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationOutputReference <a name="DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_backendsets

dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationOutputReference.property.cookieName">cookie_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationOutputReference.property.disableFallback">disable_fallback</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfiguration">DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cookie_name`<sup>Required</sup> <a name="cookie_name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationOutputReference.property.cookieName"></a>

```python
cookie_name: str
```

- *Type:* str

---

##### `disable_fallback`<sup>Required</sup> <a name="disable_fallback" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationOutputReference.property.disableFallback"></a>

```python
disable_fallback: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfiguration">DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfiguration</a>

---


### DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationList <a name="DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_backendsets

dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference <a name="DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_backendsets

dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.property.certificateIds">certificate_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.property.certificateName">certificate_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.property.cipherSuiteName">cipher_suite_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.property.protocols">protocols</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.property.serverOrderPreference">server_order_preference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.property.trustedCertificateAuthorityIds">trusted_certificate_authority_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.property.verifyDepth">verify_depth</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.property.verifyPeerCertificate">verify_peer_certificate</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfiguration">DataOciLoadBalancerBackendsetsBackendsetsSslConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_ids`<sup>Required</sup> <a name="certificate_ids" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.property.certificateIds"></a>

```python
certificate_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `certificate_name`<sup>Required</sup> <a name="certificate_name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.property.certificateName"></a>

```python
certificate_name: str
```

- *Type:* str

---

##### `cipher_suite_name`<sup>Required</sup> <a name="cipher_suite_name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.property.cipherSuiteName"></a>

```python
cipher_suite_name: str
```

- *Type:* str

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.property.protocols"></a>

```python
protocols: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `server_order_preference`<sup>Required</sup> <a name="server_order_preference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.property.serverOrderPreference"></a>

```python
server_order_preference: str
```

- *Type:* str

---

##### `trusted_certificate_authority_ids`<sup>Required</sup> <a name="trusted_certificate_authority_ids" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.property.trustedCertificateAuthorityIds"></a>

```python
trusted_certificate_authority_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `verify_depth`<sup>Required</sup> <a name="verify_depth" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.property.verifyDepth"></a>

```python
verify_depth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `verify_peer_certificate`<sup>Required</sup> <a name="verify_peer_certificate" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.property.verifyPeerCertificate"></a>

```python
verify_peer_certificate: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataOciLoadBalancerBackendsetsBackendsetsSslConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsBackendsetsSslConfiguration">DataOciLoadBalancerBackendsetsBackendsetsSslConfiguration</a>

---


### DataOciLoadBalancerBackendsetsFilterList <a name="DataOciLoadBalancerBackendsetsFilterList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_backendsets

dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLoadBalancerBackendsetsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilter">DataOciLoadBalancerBackendsetsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciLoadBalancerBackendsetsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilter">DataOciLoadBalancerBackendsetsFilter</a>]]

---


### DataOciLoadBalancerBackendsetsFilterOutputReference <a name="DataOciLoadBalancerBackendsetsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_load_balancer_backendsets

dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilter">DataOciLoadBalancerBackendsetsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciLoadBalancerBackendsetsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendsets.DataOciLoadBalancerBackendsetsFilter">DataOciLoadBalancerBackendsetsFilter</a>]

---



